import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Codifyr - Mobile Development Excellence',
  description: 'Transform your ideas into powerful mobile applications with Codifyr. Expert iOS and Android development.',
  keywords: 'mobile development, iOS, Android, React Native, Flutter, app development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}