import './globals.css'
import { Open_Sans } from 'next/font/google'
import { BsFillTelephoneInboundFill } from 'react-icons/bs';

const rubik = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export const metadata = {
  title: 'Help In Finance',
  description: 'Maximizing Wealth, minimizing taxes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en antialiased">
      <body className={rubik.className}>
        <div className='floating__btn text-xl'>
          <BsFillTelephoneInboundFill />
        </div>
        {children}
      </body>
    </html>
  )
}
