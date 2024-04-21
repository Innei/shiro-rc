import type { MDXComponents } from "mdx/types"

import { ShikiHighLighter } from "../dist"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => {
      const language =
        (props.children as any).props.className?.replace(/language-/, "") ||
        "text"

      const rawCode = (props.children as any).props.children.trim()

      return <ShikiHighLighter content={rawCode} lang={language} />
    },
  }
}
