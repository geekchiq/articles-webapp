import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import NavBar from '@/app/components/NavBar'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Articles WebApp',
  description: 'Articles WebApp with Next.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <NavBar />
        </div>
        <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {children}
        </div>
      </body>
    </html>
  )
}
