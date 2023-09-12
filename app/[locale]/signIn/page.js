
import CSignIn from '@/components/compPage/CSignIn'
import { useTranslations } from 'next-intl';
import React from 'react'

export const metadata = {
  title: 'analytica | Sign IN',
}

function page() {
  const t = useTranslations('Index');


  return (
   <>
   <CSignIn hema={"ali"}/>
   </>
  )
}

export default page