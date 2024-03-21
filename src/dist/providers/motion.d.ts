/// <reference types="react" resolution-mode="require"/>
import type { m, motion } from 'framer-motion'

export declare const MotionComponentContext: import('react').Context<{
  m: typeof m | typeof motion
}>
export declare const useMotionComponent: () => typeof m
