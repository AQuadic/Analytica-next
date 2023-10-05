"use client"
import {getHomePage, getLocal} from '@/components/useAPI/GetUser';
import { useLocale } from 'next-intl';
import {useSearchParams} from 'next/navigation';
import React, {useEffect, useState} from 'react'

function page() {
    const SearchParams = useSearchParams()
    const [page, setPage] = useState([])
    const locale = useLocale();

    useEffect(() => {
        FetchDataOFHomePage();
    }, [SearchParams.get("id")]);
    const FetchDataOFHomePage = async () => {
        const AllData = await getHomePage();
        if (!AllData) console.log(AllData?.message)
        setPage(AllData.pages.filter((item) => item.id === +SearchParams.get("id"))[0])
    }
   
    return (
        <>
        {
            page.id>0&&<div className="container m90">
            <div className='pageAbout'>
                <h2>{getLocal( page?.title) }</h2>
                <div className='decAbout' dangerouslySetInnerHTML={{__html:getLocal( page?.description)}}>
                    {/* <p dangerouslySetInnerHTML={createMarkup(data)} /> */}
                </div>
            </div>

        </div>
        }
            
        </>
    )
}

export default page