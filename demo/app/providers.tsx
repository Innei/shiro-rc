"use client"

import type { PropsWithChildren } from "react"
import { m } from "framer-motion"
import { Configure } from "shiro-ui"

export const Providers = ({ children }: PropsWithChildren) => {
  return <Configure m={m}>{children}</Configure>
}
