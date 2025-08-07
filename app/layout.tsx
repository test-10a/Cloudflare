import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ICRA 2026 - International Conference on Robotics and Automation',
  description: 'Welcome to ICRA 2026 - The premier international forum for robotics research',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}