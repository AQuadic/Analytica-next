"use client";
import React, { useEffect, useState } from "react";

import { getHomePage, getLocal, getUser } from "../useAPI/GetUser";
import { usePathname, useRouter } from "next-intl/client";
import { LogOut } from "../useAPI/Auth";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { MessagingFir, StateSearch, navState } from "@/atoms";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import { deleteToken } from "firebase/messaging";
import { useSearchParams } from "next/navigation";

function NavBar({ lang }) {
  const [userData, setUserData] = useState();
  const [TextSearch, setTextSearch] = useState("");
  const [Search, setSearch] = useRecoilState(StateSearch);
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [messagingFire, setMessagingFire] = useRecoilState(MessagingFir);
  const [Categories, setCategories] = useState([]);
  const t = useTranslations("Nav");
  const t2 = useTranslations("Account");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    if (IsUser) {
      FetchDataOFUserData();
    }
  }, [IsUser]);
  useEffect(() => {
    FetchDataOFHomePage();
  }, []);
  const FetchDataOFUserData = async () => {
    const UserData = await getUser(Cookies.get("AnalyticaToken"));
    if (!UserData) console.log(UserData?.message);
    console.log('====================================');
    console.log(UserData);
    console.log('====================================');
    setUserData(UserData);
  };

  const HandelLogOut = async () => {
    const UserLogOut = await LogOut(Cookies.get("AnalyticaToken"));
console.log('====================================');
console.log(UserLogOut);
console.log('====================================');
if (UserLogOut === 200) {
      setIsUser(false);
      Cookies.remove("AnalyticaToken");
      router.push("/signIn");
      deleteToken(messaging);
    }
  };
  console.log("====================================");
  console.log(pathname);
  console.log("====================================");
  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (!AllData) console.log(AllData?.message);
    setCategories(AllData.categories);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="phone_nav ac_nav">
          {IsUser ? (
            <div className="dropdown" style={{ position: "relative" }}>
              <h4
                className="dropdown-toggle nav_btn btn_page2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("hi")}, {userData?.name}
              </h4>

              <ul className="dropdown-menu myAcc">
                <li>
                  <Link className="dropdown-item" href="/account">
                    <img src="/images/account/account.webp" alt="account" />
                    <p>{t2("personal")}</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/password">
                    <img src="/images/account/logoPass.webp" alt="logoPass" />
                    <p>{t2("password")}</p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/account/activeSessions"
                  >
                    <img src="/images/account/active.webp" alt="active" />
                    <p>{t2("active")}</p>
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
                    <p>{t2("logout")}</p>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/signIn" className="btn_page2">
              {t("logIn")}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setTextSearch(e.target.value);
              }}
              className="search"
            />
            <button className="btnSearch" onClick={()=>{ setSearch(TextSearch); pathname !== "/courses" && router.push("/courses");}}>{t("search")}</button>
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
                  {t("categories")}
                </h3>
                <ul className="dropdown-menu row">
                  <li className="col-md-4 col-sm-6 col-12">
                    <div className="ul_all">
                      <ul>
                        {Categories?.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link
                                className="dropdown-item"
                                href={`/courses?id=${item.id}`}
                              >
                                {getLocal(locale,item.name)}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/instructor" className="nav-link">
            {t("teach")}
          </Link>
          <Link href="/myCourses" className="nav-link">
            {t("myCourses")}
          </Link>
          {IsUser ? (
            <div className="dropdown" style={{ position: "relative" }}>
              <h4
                className="dropdown-toggle nav_btn btn_page2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("hi")}, {userData?.name}
              </h4>

              <ul className="dropdown-menu myAcc">
                <li>
                  <Link className="dropdown-item" href="/account">
                    <img src="/images/account/account.webp" alt="account" />
                    <p>{t2("personal")}</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/account/password">
                    <img src="/images/account/logoPass.webp" alt="logoPass" />
                    <p>{t2("password")}</p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/account/activeSessions"
                  >
                    <img src="/images/account/active.webp" alt="active" />
                    <p>{t2("active")}</p>
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
                    <p>{t2("logout")}</p>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/signIn" className="btn_page2">
                {t("logIn")}
              </Link>
              <Link href="/signUp" className="btn_page">
                {t("signUp")}
              </Link>
            </>
          )}

          <div
            className="lang"
            onClick={() => {
              router.replace(`${pathname + window.location.search}`, {
                locale: lang === "en" ? "ar" : "en",
              });
            }}
          >
            <img src="/images/lang.webp" className="lang" alt="lang" />
            <p>{lang === "en" ? "Ar" : "En"}</p>
          </div>
        </div>

        <div className="collapse col-phone" id="navbarSupportedContent">
          <div className="right_nav ac_nav" id="">
            <Link href="instructor" className="nav-link">
              {t("teach")}
            </Link>
            <Link href="myCourses" className="nav-link">
              {t("myCourses")}
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
                {t("categories")}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="ul_all">
                    <ul>
                      {Categories?.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link
                              className="dropdown-item"
                              href={`/courses?id=${item.id}`}
                            >
                              {getLocal(locale,item.name) }
                            </Link>
                          </li>
                        );
                      })}
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
