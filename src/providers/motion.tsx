import { createContext, useContext } from 'react'
import type { m, motion } from 'framer-motion'

export const MotionComponentContext = createContext<{
  m: typeof m | typeof motion
}>(null!)

export const useMotionComponent = (): typeof m => {
  return useContext(MotionComponentContext).m
}
