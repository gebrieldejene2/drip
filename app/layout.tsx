import type { Metadata } from 'next'
import './globals.css'
import AppHeader from '@/components/AppHeader'

export const metadata: Metadata = {
  title: 'Dripylux',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AppHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}
