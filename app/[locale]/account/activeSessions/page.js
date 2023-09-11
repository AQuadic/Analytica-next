"use client"
import { navState } from "@/atoms";
import { LogOut } from "@/components/useAPI/Auth";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilState } from "recoil";


// export const metadata = {
//   title: 'analytica | Account',
// }

function page() {
  const t = useTranslations('Account');
  const [IsUser, setIsUser] = useRecoilState(navState);
  const router = useRouter()
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
                <Link href="/account">  {t('personal')}</Link>
              </li>
              <li>
                <Link href="/account/password">{t('password')}</Link>
              </li>
              <li>
                <Link href="/account/activeSessions" className="active">
                {t('active')}
                </Link>
              </li>
              <li>
                <button  onClick={() => {
                      HandelLogOut();
                    }}>{t('logout')}</button>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2">
            {t('active')} <span>( Max 2 Sessions )</span>
            </h2>
            <div className="sessions">
              <ul>
                <li>
                  <img
                    src="/images/icons/labtop.svg"
                    className="imgSession"
                    alt="labtop"
                  />
                  <div className="infoSession">
                    <div className="dec">
                      <h3>50.25.256.125</h3>
                      <h4>Last accessed on 30 Arp 07:15 pm</h4>
                      <p>
                        Chrome <span>on Laptop</span>
                      </p>
                      <p>
                        Signed in <span>on 28 Arp 05:45 pm</span>
                      </p>
                    </div>
                    <button className="btn_page2">{t('revoke')}</button>
                  </div>
                </li>
                <li>
                  <img
                    src="/images/icons/mobile.svg"
                    className="imgSession"
                    alt="mobile"
                  />
                  <div className="infoSession">
                    <div className="dec">
                      <h3>50.25.256.125</h3>
                      <h4>Last accessed on 30 Arp 07:15 pm</h4>
                      <p>
                        Chrome <span>on Laptop</span>
                      </p>
                      <p>
                        Signed in <span>on 28 Arp 05:45 pm</span>
                      </p>
                    </div>
                    <button className="btn_page2">{t('revoke')}</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
