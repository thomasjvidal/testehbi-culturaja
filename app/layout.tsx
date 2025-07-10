import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'CulturaJá - Localizador de Feiras Culturais',
  description: 'Conecte-se com a cultura local através de feiras culturais na sua região',
  generator: 'Next.js 14',
  authors: [{ name: 'thomasjvidal' }],
  keywords: ['cultura', 'feiras', 'eventos', 'brasil', 'cep'],
  icons: {
    icon: '/Favcon.png.png',
    shortcut: '/Favcon.png.png',
    apple: '/Favcon.png.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
