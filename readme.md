# Shiro React Component

This is a UI component library port from Shiro for React/RSC.

Status: WIP

## Installation

```bash
npm install shiro-rc framer-motion
npm install -D daisyui
```

## Init providers and configure

In Next.js app. for example:

```tsx
// /app/providers.tsx
'use client'

// /app/framer-lazy-feature.ts
import { domMax, LazyMotion, m } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Configure } from 'shiro-rc'
import type { PropsWithChildren } from 'react'

const loadFeatures = () =>
  import('./framer-lazy-feature').then((res) => res.default)
export const Providers = ({ children }: PropsWithChildren) => {
  const { theme, systemTheme } = useTheme()

  return (
    <Configure
      m={m}
      darkMode={
        theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
      }
    >
      <LazyMotion features={loadFeatures} strict key="framer">
        {children}
      </LazyMotion>
    </Configure>
  )
}

export default domMax
```

In your `tailwind.config.js`:

```js
export default {
  plugins: [require('daisyui')], // add this
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/shiro-rc/dist/**/*.{js,ts,jsx,tsx,mdx}', // add this
  ],
}
```

## License

2024 © Innei, Released under the MIT License.

> [Personal Website](https://innei.ren/) · GitHub [@Innei](https://github.com/innei/)
