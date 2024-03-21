"use client"

import type { PropsWithChildren } from "react"
import { LazyMotion, m } from "framer-motion"
import { useTheme } from "next-themes"
import { Configure } from "shiro-rc"

const loadFeatures = () =>
  import("./framer-lazy-feature").then((res) => res.default)
export const Providers = ({ children }: PropsWithChildren) => {
  const { theme, systemTheme } = useTheme()

  return (
    <Configure
      m={m}
      isDark={
        theme === "dark" || (theme === "system" && systemTheme === "dark")
      }
    >
      <LazyMotion features={loadFeatures} strict key="framer">
        {children}
      </LazyMotion>
    </Configure>
  )
}
