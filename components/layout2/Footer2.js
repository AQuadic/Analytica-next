import React from 'react'

function Footer2() {
    return (
        <>
            <footer className="footer2">
                <div className="container">
                    <div className="fotter_content">
                        <div className="head">
                            <a href="index.html"><img src="/images/logo.svg" alt=""/></a>
                        </div>


                    </div>

                    <div className="copy" style={{alignItems: "self-end", marginTop: "0px", color: 'black'}}>
                        <p>
                            ©
                            <a href="https://analytica-tech.com/"
                            >https://analytica-tech.com/
                            </a>
                            , 2019-2022
                        </p>

                        <div className="part" style={{alignItems: "center", marginTop: "0px"}}>


                            <div className="store" style={{marginBottom: "8px", marginTop: "0px"}}>
                                <a href=""><img src="/images/media/app.webp" alt="app store"/></a>
                                <a href=""
                                ><img src="/images/media/google.webp" alt="google play"
                                /></a>
                            </div>
                            <div className="links_social">
                                <a href="">
                                    <img src="/images/media/facebook2.webp" alt="facebook"/>
                                </a>

                                <a href="">
                                    <img src="/images/media/linkedin3.webp" alt="instagram"/>
                                </a>
                                <a href="">
                                    <img src="/images/media/instagram2.webp" alt="linkedin"/>
                                </a>
                                <a href="">
                                    <img src="/images/media/twitter2.webp" alt="twitter"/>
                                </a>
                            </div>
                        </div>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer2