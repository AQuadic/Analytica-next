"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



function CForgetPassword() {
  const router = useRouter()
  const t = useTranslations('Sign');
  const [email, setemail] = useState("");
console.log(email);
  const handelForgetPass = () => {
    
    const po = axios
      .post(
        "https://education.aquadic.com/api/v1/users/auth/forgot",
        {
          email: email,
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
       Cookies.set("email",email);
       router.push('/verify');
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
          <h2 className="title_sign">{t('Forget')}</h2>
          <p className="p_sign">
          {t('forgetTitle')}
          </p>
          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputEmail" className="form-label">
              {t('email')}
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder= {t('enterEmail')}
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>

            <input type="submit" value={t('sendMail')} className="btn_page" onClick={(e)=>{e.preventDefault();handelForgetPass()}} />
          </form>
        </div>
      </section>
    </>
  );
}

export default CForgetPassword;
