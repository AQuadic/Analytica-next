"use client"
import { getHomePage } from '@/components/useAPI/GetUser';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function page() {
    const SearchParams = useSearchParams()
    const [page ,setPage]= useState([])


  useEffect(() => {
    FetchDataOFHomePage();
  }, [SearchParams.get("id")]);
  const FetchDataOFHomePage= async () => {
    const AllData = await getHomePage();
  if (!AllData) console.log(AllData?.message)
  setPage(AllData.pages.filter((item)=>item.id === +SearchParams.get("id"))[0])
  
  }
  return (
    <>
    <div className= "container m90">
    <div className='pageAbout'>
         <h2>{page?.title?.en}</h2>
         <div className='decAbout' dangerouslySetInnerHTML={{__html:page?.description?.en}}>
         {/* <p dangerouslySetInnerHTML={createMarkup(data)} /> */}
         </div>
     </div>
 
    </div>
     </>
  )
}

export default page