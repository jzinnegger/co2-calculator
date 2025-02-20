// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SME CO2 Footprint Calculator',
  description: 'Calculate and track your business carbon emissions with our easy-to-use CO2 calculator for small and medium enterprises.',
  keywords: 'CO2 calculator, carbon footprint, SME, sustainability, emissions tracking',
  openGraph: {
    title: 'SME CO2 Footprint Calculator',
    description: 'Calculate your business carbon footprint',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}