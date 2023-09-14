"use client";
import { navState } from '@/atoms';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useRecoilState } from 'recoil';

function layout({children}) {

    const [IsUser, setIsUser] = useRecoilState(navState);
const router = useRouter()
if(!IsUser){
    router.push('/signIn')
}else{
    return (
        <>
        
        
        <>{children}</>
        </>
      )
}

 
}

export default layout