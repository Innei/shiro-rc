import type { MDXComponents } from "mdx/types"
import { HighLighter } from "shiro-rc"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => {
      const language =
        (props.children as any).props.className?.replace(/language-/, "") ||
        "text"

      const rawCode = (props.children as any).props.children.trim()

      return <HighLighter content={rawCode} lang={language} />
    },
  }
}
