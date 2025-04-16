import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { lexend } from './fonts'

export const metadata: Metadata = {
  title: {
    template: '%s - Pocket',
    default: 'Pocket - Invest at the perfect time.',
  },
  description:
    "By leveraging insights from our network of industry insiders, you'll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', lexend.variable)}>
      <body>{children}</body>
    </html>
  )
}
