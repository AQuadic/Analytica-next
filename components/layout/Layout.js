"use client"
import React from 'react'
import NavBar from './NaVBar'
import Footer from './Footer'
import { usePathname} from 'next/navigation'
import Navbar2 from '../layout2/Navbar2'
import Footer2 from '../layout2/Footer2'
import Script from 'next/script'
import {RecoilRoot} from 'recoil'
import Cookies from 'js-cookie'



function Layout({children, lang,href }) {
    const pathname = usePathname()
    
    const isClintUrl = pathname.split("/")[1] === 'i';
    if (Cookies.get("AnalyticaToken") == "undefined") {
        Cookies.remove("AnalyticaToken")
    }
   
    return (
        <>
            <RecoilRoot>


                {
                    isClintUrl ?
                        <>
                            <Script async src='/js/jquery-3.6.1.min.js'/>

                            <Navbar2/>
                            
                            {children}
                            <Footer2/>

                        </>
                        :
                        <>
                            <NavBar lang={lang}/>
                           
                            {children}
                            <Footer lang={lang}/>
                        </>
                }
            </RecoilRoot>
        </>
    )
}

export default Layout