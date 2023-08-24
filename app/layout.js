
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css'
import 'react-phone-number-input/style.css'
import Script from 'next/script';
import Layout from '@/components/layout/Layout';



export const metadata = {
  title: 'analytica',
  description: 'analytica is a...',
  openGraph: {
    title: 'analytica',
    description: 'analytica is a...',
  },
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
  
      <body >
        

     
        <Layout>
        {children}
        </Layout>
      

        <Script  src='/bootstrap.js'/>
        
        </body>
    </html>
  )
}
