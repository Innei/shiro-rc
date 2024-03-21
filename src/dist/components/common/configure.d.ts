import type { m, motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

interface ConfigureProps {
  m: typeof m | typeof motion
}
export declare const Configure: FC<PropsWithChildren & ConfigureProps>
export {}
