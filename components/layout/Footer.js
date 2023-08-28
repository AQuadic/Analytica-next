"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next-intl/client';
import { useTranslations } from 'next-intl';

function Footer({lang}) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Footer');
  return (
    <footer>
    <div className="container">
      <div className="fotter_content">
        <div className="head">
          <h1>
            <Link href="/"><img src="/images/logo.svg" alt="logo" /></Link>
          </h1>
          <p>
           {t('footerTitle')}
          </p>
        </div>
        <div className="part">
          <h2> {t('main')}</h2>
          <div className="links">
            <Link href="/">  {t('home')}</Link>
            <Link href="/myCourses">{t('myCourses')}</Link>
            <a href="">{t('privacy')}</a>
            <a href="">{t('terms')}</a>
            <Link href="/instructorScreen">instructorScreen 1</Link>
            <Link href="/instructorScreen/oneCourse">instructorScreen 2</Link>
          </div>
        </div>
        <div className="part">
          <h2> {t('categories')}</h2>
          <div className="links">
            <a href=""> {t('design')}</a>
            <a href=""> {t('music')}</a>
            <a href=""> {t('development')}</a>
            <a href=""> {t('marketing')}</a>
          </div>
        </div>
        <div className="part" style={{alignItems:"center"}}>
          <h2 style={{padding:"0px 20px"}} >{t('followUs')}</h2>
          <div className="links_social">
            <a href="">
              <img src="/images/media/facebook.webp" alt="facebook" />
            </a>

            <a href="">
              <img src="/images/media/linkedin.webp" alt="instagram" />
            </a>
            <a href="">
              <img src="/images/media/insta.webp" alt="linkedin" />
            </a>
            <a href="">
              <img src="/images/media/twiiter.webp" alt="twitter" />
            </a>
          </div>
          <div className="store">
            <a href=""><img src="/images/media/app.webp" alt="app store" /></a>
            <a href=""
              ><img src="/images/media/google.webp" alt="google play"
            /></a>
          </div>
        </div>
        <div className="part">
          <div className="langFooter"  onClick={()=>{router.replace(`${pathname}`, {locale: lang==='en'?'ar':'en'});}}>
            <img src="/images/media/lang.svg" alt="lang" />
            <p>{lang==='en'?'Arabic':'English'}</p>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          ©
          <a href="https://analytica-tech.com/"
            >https://analytica-tech.com/
            </a>
          , 2019-2022
        </p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer