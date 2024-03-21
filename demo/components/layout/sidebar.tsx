import { Fragment } from "react"

import { buildFsTree } from "@/lib/fs"

import { LeftAsideLink } from "./LeftAsideLink"

export const LeftAside = async ({ asWeight }: { asWeight?: boolean }) => {
  const tree = buildFsTree()

  return (
    <aside className={asWeight ? "" : "sticky top-24 mt-24 min-h-[300px]"}>
      <ul className="text-sm">
        {tree.map((t) => {
          return (
            <Fragment key={t.title}>
              {t.index === 1 && t.group && (
                <li className="mt-8 font-medium opacity-60">{t.group}</li>
              )}
              <li className="mt-3 font-semibold">
                <LeftAsideLink path={t.to} title={t.title} key={t.title} />
              </li>
            </Fragment>
          )
        })}
      </ul>
    </aside>
  )
}
