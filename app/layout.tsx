import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paul Santilan | Data Analytics & AI Professional',
  description:
    'Data Analytics and Artificial Intelligence professional with 5+ years of experience in predictive modeling, machine learning, and business intelligence across finance, consulting, and technology.',
  keywords:
    'data analyst, artificial intelligence, machine learning, predictive modeling, Python, SQL, Tableau, Power BI, data analytics',
  authors: [{ name: 'Paul Santilan' }],
  openGraph: {
    title: 'Paul Santilan | Data Analytics & AI Professional',
    description:
      'Turning complex data into actionable strategies through machine learning, predictive modeling, and advanced analytics.',
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
