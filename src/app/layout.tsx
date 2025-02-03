import './globals.css'
import { Montserrat, Playfair_Display } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Aline Dantas | Sobrancelhas e Cílios',
  description: '9 anos transformando vidas, olhares e autoestima.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${playfair.variable}`}
    >
      <body className="font-sans">
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
