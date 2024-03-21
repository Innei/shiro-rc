"use client"

import { memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsxm } from "~/lib/helper"

export const LeftAsideLink = memo(
  ({ title, path }: { title: string; path: string }) => {
    const pathname = usePathname()

    return (
      <span
        className={clsxm(
          "font-medium duration-200 hover:opacity-90",

          pathname === path && "text-accent"
        )}
        key={path}
      >
        <Link href={path}>{title}</Link>
      </span>
    )
  }
)

LeftAsideLink.displayName = "LeftAsideLink"
