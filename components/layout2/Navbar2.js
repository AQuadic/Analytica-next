import Link from 'next/link'
import React from 'react'

function Navbar2() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="phone_nav ac_nav">
        
          <div className="dropdown" style={{position:"relative",display:"none"}}>
            <h4
              className="dropdown-toggle nav_btn btn_page2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hi, Donia
            </h4>

            <ul className="dropdown-menu myAcc">
              <li>
                <Link className="dropdown-item" href="/account">
                  <img src="/images/account/account.webp" alt="account" />
                  <p>Personal Information</p>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/account/password">
                  <img src="/images/account/logoPass.webp" alt="logoPass" />
                  <p>Password</p>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/account/activeSessions">
                  <img src="/images/account/active.webp" alt="active" />
                  <p>Active Sessions</p>
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="signIn.html">
                  <img src="/images/account/logOut.webp" alt="logOut" />
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </div>
        <Link href="signIn" className="btn_page2"> Login</Link>
         
        </div>
   <Link className="navbar-brand" href="/">
           <img src="/images/Logo.svg" alt="logo" />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className="right_nav ac_nav" style={{justifyContent:"flex-end"}} id="">
        

          
             
            <Link href="/signIn" className="btn_page2">Log In</Link>
             <Link href="/signUp" className="btn_page">Sign Up</Link>
          <div className="dropdown" style={{position:"relative",display:"none"}}>
            <h4
              className="dropdown-toggle nav_btn btn_page2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hi, Donia
            </h4>

            <ul className="dropdown-menu myAcc">
              <li>
                <a className="dropdown-item" href="account.html">
                  <img src="/images/account/account.webp" alt="account" />
                  <p>Personal Information</p>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="password.html">
                  <img src="/images/account/logoPass.webp" alt="logoPass" />
                  <p>Password</p>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="activeSessions.html">
                  <img src="/images/account/active.webp" alt="active" />
                  <p>Active Sessions</p>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="signIn.html">
                  <img src="/images/account/logOut.webp" alt="logOut" />
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </div>

          <button className="lang">
            <img src="/images/lang.webp" className="lang" alt="lang" />
            <p>En</p>
          </button>
        </div>

        <div className="collapse col-phone" id="navbarSupportedContent">
          <div className="right_nav ac_nav" id="">
            <Link href="signUp" className="btn_page">Sign Up</Link>
            <button className="lang">
                <img src="/images/lang.webp" className="lang" alt="lang" />
                <p>En</p>
              </button>
          </div>
         
        </div>
      </div>
      
    </nav>
    </>
  )
}

export default Navbar2