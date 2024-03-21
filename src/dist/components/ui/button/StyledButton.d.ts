import type { FC } from 'react'

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string
}
type NativeLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type SharedProps = {
  variant?: 'primary' | 'secondary'
  className?: string
  isLoading?: boolean
}
type ButtonProps = SharedProps &
  (
    | NativeButtonProps
    | (NativeLinkProps & {
        linkAs?: keyof React.JSX.IntrinsicElements | React.ComponentType<any>
      })
  )
export declare const StyledButton: FC<ButtonProps>
export {}
