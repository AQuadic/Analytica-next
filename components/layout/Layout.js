"use client"
import React from 'react'
import NavBar from './NaVBar'
import Footer from './Footer'
import {usePathname} from 'next/navigation'
import Navbar2 from '../layout2/Navbar2'
import Footer2 from '../layout2/Footer2'

import Script from 'next/script'
import {RecoilRoot} from 'recoil'
import Cookies from 'js-cookie'

function Layout({children, lang}) {
    const pathname = usePathname()
    const isClintUrl = pathname.includes('instructorScreen');
    if (Cookies.get("token") == "undefined") {
        Cookies.remove("token")
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