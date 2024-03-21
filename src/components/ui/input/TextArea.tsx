'use client'

import { forwardRef, useCallback, useState } from 'react'
import { m, useMotionTemplate, useMotionValue } from 'framer-motion'
import type {
  DetailedHTMLProps,
  PropsWithChildren,
  TextareaHTMLAttributes,
} from 'react'

import { useInputComposition } from '~/hooks/common/use-input-composition.js'
import { clsxm } from '~/lib/helper.js'

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
    PropsWithChildren<{
      wrapperClassName?: string
    }>
>((props, ref) => {
  const { className, wrapperClassName, children, ...rest } = props
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - bounds.left)
      mouseY.set(clientY - bounds.top)
    },
    [mouseX, mouseY],
  )
  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 85%)`

  const inputProps = useInputComposition(props)
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div
      className={clsxm(
        'group relative h-full overflow-hidden rounded-xl border ring-accent/20 duration-200 [--spotlight-color:oklch(var(--a)_/_0.12)]',

        'border-zinc-900/10 dark:border-zinc-700',
        isFocus && 'border-accent/80 ring-2',
        'dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500',
        wrapperClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <m.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />

      <textarea
        ref={ref}
        className={clsxm(
          'h-full w-full resize-none bg-transparent',
          'overflow-auto px-3 py-4',
          '!outline-none',
          'text-neutral-900/80 dark:text-slate-100/80',
          className,
        )}
        {...rest}
        onFocus={(e) => {
          setIsFocus(true)
          rest.onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocus(false)
          rest.onBlur?.(e)
        }}
        {...inputProps}
      />

      {children}
    </div>
  )
})
TextArea.displayName = 'TextArea'
