"use client"
import { navState } from "@/atoms";
import { LogOut } from "@/components/useAPI/Auth";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

// export const metadata = {
//   title: 'analytica | Account',
// }

function page() {
  const t = useTranslations('Account');
  const t2 = useTranslations('Sign');
    const [IsUser, setIsUser] = useRecoilState(navState);
  const HandelLogOut = async () => {
    const UserLogOut = await LogOut(Cookies.get("token"));
    if (UserLogOut.message === "auth.logged_out") {
      console.log("done");
      setIsUser(false);
      Cookies.remove('token')
    }
  };
  return (
    <>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <h2>{t('account')}</h2>
            <ul>
              <li>
                <Link href="/account">{t('personal')}</Link>
              </li>
              <li>
                <Link href="/account/password" className="active">
                {t('password')}
                </Link>
              </li>
              <li>
                <Link href="/account/activeSessions">{t('active')}</Link>
              </li>
              <li>
                <button  onClick={() => {
                      HandelLogOut();
                    }}>{t('logout')}</button>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2">  {t('password')}</h2>
            <form className="row g-3 form_page">
              <div className="col-md-12">
                <label htmlFor="inputpass1 " className="form-label">
                {t('current')}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpass1"
                  placeholder="Enter your current password"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputpass2 " className="form-label">
                 {t2('newPassword')}
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="inputpass2"
                  placeholder= {t2('enterNew')}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputpass3 " className="form-label">
                {t2('confirmNew')}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpass3"
                  placeholder= {t2('enterAgain')}
                />
              </div>

              <button type="submit" href="" className=" btn_page">
              {t('change')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
