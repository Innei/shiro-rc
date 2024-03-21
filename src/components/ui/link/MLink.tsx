import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { FloatPopover } from '../float-popover/FloatPopover.js'
import { Favicon } from '../rich-link/Favicon.js'

export const MLink: FC<{
  href: string
  title?: string
  children?: ReactNode
}> = memo(({ href, children, title }) => {
  return (
    <FloatPopover
      as="span"
      wrapperClassName="!inline"
      type="tooltip"
      triggerElement={
        <span className="inline items-center font-sans">
          <Favicon href={href} />
          <a
            className="shiro-link--underline"
            href={href}
            target="_blank"
            title={title}
            rel="noreferrer"
          >
            {children}
          </a>

          <i className="icon-[mingcute--arrow-right-up-line] translate-y-[2px] opacity-70" />
        </span>
      }
    >
      <a href={href} target="_blank" rel="noreferrer">
        <span>{href}</span>
      </a>
    </FloatPopover>
  )
})
MLink.displayName = 'MLink'
