import { Inter } from 'next/font/google'
import './globals.css'
import Appbar from '@/components/Appbar'
import Provider from './Provider'
import Socials from '@/components/Socials'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio',
  description: 'Portafolio Bootcamp udd'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Appbar/>
          <Socials/>
            {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  )
}
