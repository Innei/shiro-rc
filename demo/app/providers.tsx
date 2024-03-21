"use client"

import type { PropsWithChildren } from "react"
import { LazyMotion, m } from "framer-motion"
import { Configure } from "shiro-rc"

const loadFeatures = () =>
  import("./framer-lazy-feature").then((res) => res.default)
export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Configure m={m}>
      <LazyMotion features={loadFeatures} strict key="framer">
        {children}
      </LazyMotion>
    </Configure>
  )
}
