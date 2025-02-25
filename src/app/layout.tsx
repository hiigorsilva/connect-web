import type { Metadata } from 'next'
import { Outfit, Oxanium } from 'next/font/google'
import './globals.css'

export const oxanium = Oxanium({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600'],
  style: 'normal',
  preload: true,
  variable: '--font-oxanium',
})

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
  style: 'normal',
  preload: true,
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Connect - Web',
  description: 'Seu gerenciador de indicações de usuários.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${outfit.variable}`}>
      <body className="min-h-dvh w-full flex flex-col text-gray-100 antialiased bg-gray-900 bg-[url('/images/bg.webp')] bg-cover bg-no-repeat bg-top md:bg-right-top">
        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  )
}
