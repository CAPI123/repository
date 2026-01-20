import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eugine Obiero | Software Engineer & Tech Consultant',
  description: 'Expert software engineer specializing in web development, APIs, backend systems, and scalable solutions. Transforming ideas into powerful digital products.',
  keywords: 'software engineer, web developer, API developer, backend systems, full-stack developer, tech consultant',
  authors: [{ name: 'Eugine Obiero' }],
  openGraph: {
    title: 'Eugine Obiero | Software Engineer & Tech Consultant',
    description: 'Expert software engineer specializing in web development, APIs, backend systems, and scalable solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}

