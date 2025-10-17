import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sic! Salts - Premium Vaping Experience',
  description: 'Discover Sic! Salts and enter the world of intense sensations. Our nicotine salts are distinguished by the highest quality and carefully selected flavors.',
  keywords: 'vaping, nicotine salts, e-cigarette, flavors, premium vaping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
