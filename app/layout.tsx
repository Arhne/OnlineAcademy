import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight:['500'] })

export const metadata: Metadata = {
  title: 'Online Academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
    <body className={roboto.className}>
      <Navbar />
      <main className='relative overflow-hidden'>
      {children}
      </main> 
      <Footer />
    </body>
      
    </html>
  )
}
