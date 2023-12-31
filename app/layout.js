import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from "./provider.js";

const poppins = Poppins({ subsets: ['latin'],weight:'400' })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body className={poppins.className}>{children}</body>
      </Providers>
    </html>
  )
}
