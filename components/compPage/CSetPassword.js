"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

function CSetPassword() {
  const t = useTranslations('Sign');
  const [password, setpassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");



  const handelForgetPass = () => {
    
    const po = axios
      .post(
        "https://education.aquadic.com/api/v1/users/auth/change_password",
        {
          "reset_token": Cookies.get("reset_token"),
          "current_password": password,
    "password_confirmation": passwordConfirmation
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
       console.log(res);
       router.push('/signIn');

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
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign" style={{ margin: "0" }}>
           {t('set')}
          </h2>

          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputPassword" className="form-label">
              {t('newPassword')}
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder= {t('enterNew')}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputPassword2" className="form-label">
              {t('confirmNew')}
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder= {t('enterAgain')}
                onChange={(e)=>setPasswordConfirmation(e.target.value)}
              />
            </div>

            <input type="submit" value={t('confirm')} className="btn_page" />
          </form>
        </div>
      </section>
    </>
  );
}

export default CSetPassword;
