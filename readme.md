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

```ts
// /app/framer-lazy-feature.ts
import { domMax } from 'framer-motion'

export default domMax
```

```tsx
// /app/providers.tsx
'use client'

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
```

```tsx
// app/layout.tsx
import './shiro-rc/dist/tw.css'
```

In your `tailwind.config.js`:

```js
export default {
  plugins: [require('daisyui')], // add this
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/shiro-rc/dist/**/*.{js,ts,jsx,tsx,mdx}', // add this
  ],

  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        light: {
          'color-scheme': 'light',
          primary: '#33A6B8',
          secondary: '#A8D8B9',
          accent: '#33A6B8',
          'accent-content': '#fafafa',
          neutral: '#C7C7CC',
          'base-100': '#fff',
          'base-content': '#000',
          info: '#007AFF',
          success: '#34C759',
          warning: '#FF9500',
          error: '#FF3B30',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem',
        },
      },
      {
        dark: {
          'color-scheme': 'dark',
          primary: '#F596AA',
          secondary: '#FB966E',
          accent: '#F596AA',
          neutral: '#48484A',
          'base-100': '#1C1C1E',
          'base-content': '#FFF',
          info: '#0A84FF',
          success: '#30D158',
          warning: '#FF9F0A',
          error: '#FF453A',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem',
        },
      },
    ],
  },
}
```

## License

2024 © Innei, Released under the MIT License.

> [Personal Website](https://innei.ren/) · GitHub [@Innei](https://github.com/innei/)
