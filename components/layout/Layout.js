"use client"
import React from 'react'
import NavBar from './NaVBar'
import Footer from './Footer'
import { usePathname, useRouter } from 'next/navigation'
import Navbar2 from '../layout2/Navbar2'
import Footer2 from '../layout2/Footer2'

import Script from 'next/script'

function Layout({children}) {
  const pathname = usePathname()
  const isClintUrl = pathname.includes('instructorScreen');
  return (
    <>
    {
      isClintUrl?
       <>
    
        <Navbar2/>
       {children}
        <Footer2/> 
        <Script async src='/js/jquery-3.6.1.min.js'/>
        <Script async src='/js/slick.min.js'/>
        <Script async src='/js/funSlick.js' />
        </> 
      :
      <>
      <NavBar/>
     {children}
      <Footer/> 
      </> 
    }
    </>
  )
}

export default Layout