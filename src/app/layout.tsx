import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wedding Avatar',
  description: '웨딩아바타',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-center min-h-screen bg-pink-200">
          <div className="bg-white w-[350px] h-[640px] shadow-lg rounded overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  )
}
