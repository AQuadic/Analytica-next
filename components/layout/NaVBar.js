"use client";
import React, { useEffect, useState } from "react";

import { UserState, getUser } from "../useAPI/GetUser";
import {usePathname, useRouter} from 'next-intl/client';
import { LogOut } from "../useAPI/Auth";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { navState } from "@/atoms";
import Link from 'next-intl/link';
import { useTranslations } from "next-intl";


function NavBar({lang}) {
  const [userData, setUserData] = useState();
  const [IsUser, setIsUser] = useRecoilState(navState);
  const t = useTranslations('Nav');
  const t2 = useTranslations('Account');
  console.log(IsUser);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (IsUser) {
      FetchDataOFUserData();
    }
  }, [IsUser]);

  const FetchDataOFUserData = async () => {
    const UserData = await getUser(Cookies.get("token"));
    if (!UserData) console.log(UserData?.message);
    setUserData(UserData);
  };
  console.log("nave user");

  console.log(userData);
  const HandelLogOut = async () => {
    const UserLogOut = await LogOut(Cookies.get("token"));
    if (UserLogOut.message === "auth.logged_out") {
      console.log("done");
      setIsUser(false);
      Cookies.remove('token')
      router.push('/signIn')
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="phone_nav ac_nav">
          {IsUser ? (
            <div
              className="dropdown"
              style={{ position: "relative" }}
            >
              <h4
                className="dropdown-toggle nav_btn btn_page2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hi, {userData?.name}
              </h4>

              <ul className="dropdown-menu myAcc">
                <li>
                  <Link className="dropdown-item" href="/account">
                    <img src="/images/account/account.webp" alt="account" />
                    <p>{t2('personal')}</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/password">
                    <img src="/images/account/logoPass.webp" alt="logoPass" />
                    <p>{t2('password')}</p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/account/activeSessions"
                  >
                    <img src="/images/account/active.webp" alt="active" />
                    <p>{t2('active')}</p>
                  </Link>
                </li>
                <li>
                <button
                    className="dropdown-item"
                    onClick={() => {
                      HandelLogOut();
                    }}
                  >
                    <img src="/images/account/logOut.webp" alt="logOut" />
                    <p>{t2('logout')}</p>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/signIn" className="btn_page2">
             {t('logIn')}
            </Link>
          )}

          <button className="search btnsearch">
            <img src="/images/search.svg" alt="search" />
          </button>
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

        <div className="right_nav ac_nav" id="">
          <form action="">
            <input type="text" className="search" />
          </form>
          <div className="col-dec">
            <div className="navbar-nav">
              <div className="nav-item dropdown">
                <h3
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ marginBottom: "0px" }}
                >
                  {t('categories')}
                </h3>
                <ul className="dropdown-menu row">
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Repairs</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Cleaning Services</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Salon</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Home Exterior</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Home Maintenance</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Fashion</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Construction Services</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Services</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Medicine</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Engineering</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Travel and Tourism</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-md-4 col-sm-6 col-12">
                    <h5>Fun</h5>
                    <div className="ul_all">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Accessories
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Kuroko’s Basketball
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Socks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <Link href="/instructor" className="nav-link">
            {t('teach')}
          </Link>
          <Link href="/myCourses" className="nav-link">
          {t('myCourses')}
          </Link>
          {IsUser ? (
            <div className="dropdown" style={{ position: "relative" }}>
              <h4
                className="dropdown-toggle nav_btn btn_page2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hi, {userData?.name}
              </h4>

              <ul className="dropdown-menu myAcc">
                <li>
                  <Link className="dropdown-item" href="/account">
                    <img src="/images/account/account.webp" alt="account" />
                    <p>{t2('personal')}</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/password">
                    <img src="/images/account/logoPass.webp" alt="logoPass" />
                    <p>{t2('password')}</p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/account/activeSessions"
                  >
                    <img src="/images/account/active.webp" alt="active" />
                    <p>{t2('active')}</p>
                  </Link>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      HandelLogOut();
                    }}
                  >
                    <img src="/images/account/logOut.webp" alt="logOut" />
                    <p>{t2('logout')}</p>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/signIn" className="btn_page2">
              {t('logIn')}
              </Link>
              <Link href="/signUp" className="btn_page">
              {t('signUp')}
              </Link>
            </>
          )}

          <div className="lang"  onClick={()=>{router.replace(`${pathname}`, {locale: lang==='en'?'ar':'en'});}}>
            <img src="/images/lang.webp" className="lang" alt="lang" />
            <p>{lang==='en'?'Ar':'En'}</p>
          </div>
        </div>

        <div className="collapse col-phone" id="navbarSupportedContent">
          <div className="right_nav ac_nav" id="">
            <Link href="instructor" className="nav-link">
            {t('teach')}
            </Link>
            <Link href="myCourses" className="nav-link">
            {t('myCourses')}
            </Link>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Repairs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cleaning Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Salon
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home Exterior
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home Maintenance
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fashion
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Jojo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          The seven deadly Sins
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Kuroko’s Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <form action="" id="form_nav" className="input_srearch">
        <input type="search" placeholder="Search For ......." />
      </form>
    </nav>
  );
}

export default NavBar;
