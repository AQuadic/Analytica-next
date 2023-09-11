 "use client";
import { navState } from "@/atoms";
import { LogOut } from "@/components/useAPI/Auth";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useRecoilState } from "recoil";


// export const metadata = {
//   title: 'analytica | Account',
// }

function page() {
  const [IsUser, setIsUser] = useRecoilState(navState);
  const t = useTranslations('Account');
  const t2 = useTranslations('Sign');
  const HandelLogOut = async () => {
    const UserLogOut = await LogOut(Cookies.get("token"));
    if (UserLogOut.message === "auth.logged_out") {
      console.log("done");
      setIsUser(false);
      Cookies.remove('token')
    }
  };
  const [value, setValue] = useState();
  return (
    <>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <h2>{t('account')}</h2>
            <ul>
              <li>
                <Link href="/account" className="active">
                 {t('personal')}
                </Link>
              </li>
              <li>
                <Link href="/account/password">{t('password')}</Link>
              </li>
              <li>
                <Link href="/account/activeSessions">{t('active')}</Link>
              </li>
              <li >
                <button  onClick={() => {
                      HandelLogOut();
                    }}>{t('logout')}</button>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2">{t('personal')}</h2>
            <div className="img_persone">
              <img
                src="/images/icons/person.webp"
                className="person"
                alt="person"
              />
              <button>
                <img src="/images/icons/Camera.svg" alt="Camera" />
              </button>
            </div>
            <form className="row g-3 form_page">
              <div className="col-md-12">
                <label htmlFor="inputname1 " className="form-label">
                 {t2('first')}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname1"
                  placeholder= {t2('enterFirst')}
                  value="Donia "
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputname3 " className="form-label">
                 {t2('last')}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname3"
                  placeholder= {t2('enterLast')}
                  value="Ahmed Wazery"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPhone " className="form-label">
                 {t2('mobile')}
                </label>
                <PhoneInput
                  defaultCountry="EG"
                  placeholder={t2('enterNumber')}
                  className="form-control"
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputemail " className="form-label">
                   {t2('email')}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  placeholder= {t2('enterEmail')}
                  value="doniaahmedelwazery@gmail.com"
                />
              </div>
              <button type="submit" href="" className="next btn_page">
               {t('save')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
