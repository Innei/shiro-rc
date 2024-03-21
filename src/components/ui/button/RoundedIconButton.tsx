import { forwardRef } from 'react'

import { clsxm } from '~/lib/helper.js'

import { MotionButtonBase } from './MotionButton.js'

export const RoundedIconButton: typeof MotionButtonBase = forwardRef(
  ({ className, children, ...rest }, ref) => {
    return (
      <MotionButtonBase
        ref={ref}
        className={clsxm(
          'inline-flex rounded-full bg-accent p-2 text-center leading-none center hover:opacity-90',
          className,
        )}
        {...rest}
      >
        {children}
      </MotionButtonBase>
    )
  },
)

RoundedIconButton.displayName = 'RoundedIconButton'
