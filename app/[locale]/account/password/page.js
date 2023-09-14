"use client";
import { navState } from "@/atoms";
import { LogOut } from "@/components/useAPI/Auth";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

// export const metadata = {
//   title: 'analytica | Account',
// }

function page() {
  const router = useRouter();
  const t = useTranslations("Account");
  const t2 = useTranslations("Sign");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [password, setpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const HandelLogOut = async () => {
    const UserLogOut = await LogOut(Cookies.get("token"));
    if (UserLogOut.message === "auth.logged_out") {
      console.log("done");
      setIsUser(false);
      Cookies.remove("token");
      router.push('/signIn')
    }
  };

  const handelChangePass = () => {
    const po = axios
      .post(
        "https://education.aquadic.com/api/v1/users/auth/change_password",
        {
          "password": newpassword,
          "current_password": password,
          "password_confirmation": passwordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        /*  setLoading(false);
        res.response.data.email
          ? setErroremail(res.response.data.email[0])
          : setErroremail("");
        res.response.data.password
          ? setErrorpassword(res.response.data.password[0])
          : setErrorpassword("");
        res.response.data.error
          ? setError(res.response.data.error)
          : setError("");*/
        console.log(res);
      });
  };

  return (
    <>
      <section className="account container">
        <div className="account_info personal_info">
          <div className="part1">
            <h2>{t("account")}</h2>
            <ul>
              <li>
                <Link href="/account">{t("personal")}</Link>
              </li>
              <li>
                <Link href="/account/password" className="active">
                  {t("password")}
                </Link>
              </li>
              <li>
                <Link href="/account/activeSessions">{t("active")}</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    HandelLogOut();
                  }}
                >
                  {t("logout")}
                </button>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <h2 className="cart_title2"> {t("password")}</h2>
            <form className="row g-3 form_page">
              <div className="col-md-12">
                <label htmlFor="inputpass1 " className="form-label">
                  {t("current")}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpass1"
                  placeholder="Enter your current password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputpass2 " className="form-label">
                  {t2("newPassword")}
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="inputpass2"
                  placeholder={t2("enterNew")}
                  onChange={(e) => setNewpassword(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputpass3 " className="form-label">
                  {t2("confirmNew")}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpass3"
                  placeholder={t2("enterAgain")}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>

              <button
                type="submit"
                href=""
                className=" btn_page"
                onClick={(e) => {
                  e.preventDefault();
                  handelChangePass();
                }}
              >
                {t("change")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
