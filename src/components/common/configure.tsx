'use client'

import { useMemo } from 'react'
import type { m, motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

import { IsDarkContext } from '~/providers/is-dark.js'
import { MotionComponentContext } from '~/providers/motion.js'

interface ConfigureProps {
  m: typeof m | typeof motion
  isDark?: boolean
}
export const Configure: FC<PropsWithChildren & ConfigureProps> = ({
  children,
  ...configure
}) => {
  const { m, isDark } = configure
  return (
    // keep the context value stable
    <MotionComponentContext.Provider value={useMemo(() => ({ m }), [])}>
      <IsDarkContext.Provider value={isDark || false}>
        {children}
      </IsDarkContext.Provider>
    </MotionComponentContext.Provider>
  )
}
