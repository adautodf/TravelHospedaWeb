import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800','900'] })

export const metadata = {
  title: 'Travel Hospeda Web',
  description: 'Sistema de Reservas de Hospedagem Online',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
