import React from 'react'
import Link from 'next/link'

function Thanks({title, dec, link, dash}) {
    return (
        <>
            <div className="successfull container">
                <img src="/images/successfull.webp" alt="successfull"/>
                <h2>{title}</h2>
                <p>{dec}</p>
                {
                    link && <Link href={link} className="btn_page2">My Courses</Link>
                }
                {
                    dash && <a href="https://education.aquadic.com/instructor/login" target="_blank"
                               className="btn_page2">{dash}</a>
                }
            </div>
        </>
    )
}

export default Thanks