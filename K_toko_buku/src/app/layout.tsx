import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TokoBuku Hidayah - Your Trusted Islamic & Educational Bookstore',
  description: 'TokoBuku Hidayah - Trusted bookstore specializing in Islamic books, educational materials, and literature. Located at Plaza Indonesia, Jakarta. Rating 4.8/5 from 390+ reviews.',
  keywords: 'Islamic books, educational books, bookstore Jakarta, Plaza Indonesia, Quran, Hadith, children books, literature',
  authors: [{ name: 'TokoBuku Hidayah' }],
  openGraph: {
    title: 'TokoBuku Hidayah - Islamic & Educational Bookstore',
    description: 'Trusted bookstore at Plaza Indonesia specializing in Islamic books and educational materials. 4.8/5 rating from 390+ customers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TokoBuku Hidayah',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TokoBuku Hidayah - Islamic & Educational Bookstore',
    description: 'Trusted bookstore at Plaza Indonesia specializing in Islamic books and educational materials.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1B5E20',
              color: '#fff',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '14px',
              fontWeight: '500',
            },
            success: {
              iconTheme: {
                primary: '#4CAF50',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#F44336',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}