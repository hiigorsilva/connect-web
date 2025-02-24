import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'
import './globals.css'

export const oxanium = Oxanium({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600'],
  style: 'normal',
  preload: true,
  variable: '--font-oxanium',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
  style: 'normal',
  preload: true,
  variable: '--font-oxanium',
})

export const metadata: Metadata = {
  title: 'Connect - Web',
  description: 'Seu app de gerenciamento de indicações de usuários.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`flex flex-col min-h-dvh text-gray-100 bg-gray-900 ${oxanium.variable} ${montserrat.variable} antialiased`}
      >
        <div className="flex-1">{children}</div>
      </body>
    </html>
  )
}
