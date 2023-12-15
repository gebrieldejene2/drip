import type { Metadata } from 'next'

import './globals.css'

//components
import { TopBar } from '@/components/TopBar'
import { AppFooter } from '@/components/AppFooter'
import { AppHeader } from '@/components/AppHeader'

export const metadata: Metadata = {
  title: 'Dripylux',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col">
          <TopBar />
          <div className="w-full">
            <AppHeader />
          </div>
        </div>
        <main className="w-full">{children}</main>
        <div className="w-full">
          <AppFooter />
        </div>
      </body>
    </html>
  )
}
