import { readFileSync } from "fs"
import { resolve } from "path"

import { extractFirstHeadingText, parseYamlFrontMatterSync } from "@/lib/remark"

interface Tree {
  to: string
  title: string
  order: number
  depth: number
  group: string | null
  groupMeta?: typeof defaultGroupMeta

  index: number
}

const defaultGroupMeta = { order: 1 }
export const buildFsTree = () => {
  const filePaths = (
    require
      // @ts-expect-error
      .context("../app/(mdx)/", true, /\.mdx$/)
      .keys() as string[]
  ).filter((path) => path.startsWith("./"))

  // [ './guide/install/page.mdx', 'app/(mdx)/guide/install/page.mdx' ]

  const tree = [] as Tree[]
  for (let filePath of filePaths) {
    const path = filePath
      .split("/")
      .slice(1, -1)
      .join("/")
      .replace(/\.mdx$/, "")
    const depth = path.split("/").length

    const group = depth > 1 ? path.split("/")[0] : null

    let groupMetaJson = defaultGroupMeta
    if (group) {
      try {
        groupMetaJson = JSON.parse(
          readFileSync(
            resolve(process.cwd(), `app/(mdx)/${group}/meta.json`),
            "utf-8"
          )
        )
      } catch {}
    }

    const fileContent = readFileSync(
      resolve(process.cwd(), `app/(mdx)/${filePath}`),
      "utf-8"
    )
    const yaml = parseYamlFrontMatterSync(fileContent)
    const title = extractFirstHeadingText(fileContent)

    // console.log({ group, groupMetaJson })
    tree.push({
      to: `/${path}`,
      title: title || "",
      order: yaml.order,
      depth,
      group,
      groupMeta: groupMetaJson,
      index: 1,
    })
  }

  const sorted = tree.sort((a, b) => {
    // a.groupMeta?.order || 1 - b.groupMeta?.order || 1
    if (a.groupMeta?.order && b.groupMeta?.order) {
      // first sort by groupMeta.order then by order
      return a.groupMeta.order - b.groupMeta.order || a.order - b.order
    }

    return a.order - b.order
  })

  let indexBaseGroup = 1
  let prevGroup: null | string = ""

  for (let i = 0; i < sorted.length; i++) {
    const t = sorted[i]
    const currentGroup = t.group
    if (currentGroup !== prevGroup) {
      indexBaseGroup = 1
    }
    t.index = indexBaseGroup++
    prevGroup = currentGroup
  }

  // console.log({ sorted })
  return sorted
}
