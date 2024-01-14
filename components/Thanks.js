import React from 'react'
import Link from 'next/link'

function Thanks({title, dec, link, dash,title2,failed,Bloked}) {
    return (
        <>
            <div className="successfull container">
                {
                    failed?<img src="/images/transactionfailed.webp" alt="transactionfailed"/>:Bloked?<img src="/images/bloked.webp" alt="bloked"/>:<img src="/images/successfull.webp" alt="successfull"/>
                }
                <h2>{title}</h2>
                <p>{dec}</p>
                {
                    link && <Link href={link} className="btn_page2">{title2}</Link>
                }
                {
                    dash && <a href="https://cp.analytica-edu.basseterp.com//instructor/login" target="_blank"
                               className="btn_page2">{dash}</a>
                }
            </div>
        </>
    )
}

export default Thanks