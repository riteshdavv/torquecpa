import type { Metadata } from 'next'
import { Instrument_Serif, Geist, Geist_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Torque — Zero Data Entry System for CPA & Bookkeeping Firms',
  description: 'Torque reads your client documents, extracts every number, and routes it exactly where it belongs — no typing, no copying, no re-keying.',
  icons: {
    icon: '/Vector.png',
    shortcut: '/Vector.png',
    apple: '/Vector.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-YN8GF7NED7" />
    </html>
  )
}
