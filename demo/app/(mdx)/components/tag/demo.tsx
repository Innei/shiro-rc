"use client"

import { Tag } from "shiro-rc"

export const App = () => {
  return (
    <Tag
      onClick={() => {
        window.open("https://innei.in")
      }}
      text="My Site"
    />
  )
}
