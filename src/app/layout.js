import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] })

export const metadata = {
  title: 'DMakwana Portfolio',
  description: 'Portfolio of DMakwana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className="${poppins.className} bg-white">{children}</body>
    </html>
  )
}
