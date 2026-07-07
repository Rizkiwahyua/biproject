import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cinta, Bangga, Paham Rupiah',
  description: 'Kampanye literasi keuangan Bank Indonesia - Cinta, Bangga, Paham Rupiah',
  generator: 'v0.app',
  icons: {
    icon: '/indonesia-logo.svg',
    apple: '/indonesia-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
