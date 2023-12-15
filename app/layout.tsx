import type { Metadata } from 'next'

import './globals.css'

//components
import AppHeader from '@/components/AppHeader'
import { AppFooter } from '@/components/AppFooter'

export const metadata: Metadata = {
  title: 'Dripylux',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="">
          <AppHeader />
        </div>
        <div className="">{children}</div>
        <div className="">
          <AppFooter />
        </div>
      </body>
    </html>
  )
}
