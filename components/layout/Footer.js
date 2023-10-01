"use client";
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {usePathname, useRouter} from 'next-intl/client';
import {useTranslations} from 'next-intl';
import {getHomePage} from '../useAPI/GetUser';

function Footer({lang}) {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('Footer');
    const [pages, setPage] = useState([])
    const [social, setSocial] = useState([])
    useEffect(() => {
        FetchDataOFHomePage();
    }, []);
    const FetchDataOFHomePage = async () => {
        const AllData = await getHomePage();
        if (!AllData) console.log(AllData?.message)
        setPage(AllData.pages)
        console.log('====================================');
        console.log(AllData);
        console.log('====================================');

    }
    console.log('====================================');
    console.log(pages);
    console.log('====================================');
    return (
        <footer>
            <div className="container">
                <div className="fotter_content">
                    <div className="head">
                        <h1>
                            <Link href="/"><img src="/images/Logo.svg" alt="logo"/></Link>
                        </h1>
                        <p>
                            {t('footerTitle')}
                        </p>
                    </div>
                    <div className="part">
                        <h2> {t('main')}</h2>
                        <div className="links">
                            {
                                pages?.map((page) => {
                                    return (
                                        <Link key={page.id} href={`/about?id=${page.id}`}>{page.title.en}</Link>
                                    )
                                })
                            }
                            <Link href="/">  {t('home')}</Link>
                            <Link href="/myCourses">{t('myCourses')}</Link>

                            <Link href="/i">instructorScreen 1</Link>
                            <Link href="/i/oneCourse">instructorScreen 2</Link>
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
                    <div className="part" style={{alignItems: "center"}}>
                        <h2 style={{padding: "0px 20px"}}>{t('followUs')}</h2>
                        <div className="links_social">
                            <a href="">
                                <img src="/images/media/facebook.webp" alt="facebook"/>
                            </a>

                            <a href="">
                                <img src="/images/media/linkedin.webp" alt="instagram"/>
                            </a>
                            <a href="">
                                <img src="/images/media/insta.webp" alt="linkedin"/>
                            </a>
                            <a href="">
                                <img src="/images/media/twiiter.webp" alt="twitter"/>
                            </a>
                        </div>
                        <div className="store">
                            <a href=""><img src="/images/media/app.webp" alt="app store"/></a>
                            <a href=""
                            ><img src="/images/media/google.webp" alt="google play"
                            /></a>
                        </div>
                    </div>
                    <div className="part">
                        <div className="langFooter" onClick={() => {
                            router.replace(`${pathname + window.location.search}`, {locale: lang === 'en' ? 'ar' : 'en'});
                        }}>
                            <img src="/images/media/lang.svg" alt="lang"/>
                            <p>{lang === 'en' ? 'Arabic' : 'English'}</p>
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