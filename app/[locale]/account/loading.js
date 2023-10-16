"use client";
import React from 'react'
import { ColorRing } from 'react-loader-spinner';


function loading() {
  return (
    <div className="load" style={{ display:"flex"  }}>
    <ColorRing
      height={120}
      width={120}
      colors={['#3682b6', '#1f2265', '#8a20a7', '#1f2265', '#8a20a7']}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#fff"
      strokeWidth={1}
      strokeWidthSecondary={1}
    />
  </div>
  )
}

export default loading