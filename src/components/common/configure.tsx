'use client'

import { useMemo } from 'react'
import type { m, motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

import { MotionComponentContext } from '~/providers/motion.js'

interface ConfigureProps {
  m: typeof m | typeof motion
}
export const Configure: FC<PropsWithChildren & ConfigureProps> = ({
  children,
  ...configure
}) => {
  const { m } = configure
  return (
    // keep the context value stable
    <MotionComponentContext.Provider value={useMemo(() => ({ m }), [])}>
      {children}
    </MotionComponentContext.Provider>
  )
}
