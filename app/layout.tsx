import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blogs page',
  description: 'This is a blogs page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className='bg-white py-5'>
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="navigation flex gap-x-5">
              <Link href='/'>Home</Link>
            </div>
          </div>
        </div>
        </header>
       <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className="container mx-auto">
          {children}
        </div>

       </main>
      </body>
    </html>
  )
}
