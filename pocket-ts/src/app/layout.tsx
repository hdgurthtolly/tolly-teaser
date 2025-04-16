import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { lexend } from './fonts'

export const metadata: Metadata = {
  title: {
    template: 'Tolly',
    default: 'Mit Liebe in Berlin entwickelt',
  },
  description:
    "Personalisierte Kinderbücher für dein Kind",
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
