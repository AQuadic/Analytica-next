"use client";
import { TextInput } from "@mantine/core";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import api from '../../app/[locale]/api';



function CForgetPassword() {
  const router = useRouter()
  const t = useTranslations('Sign');
  const [email, setemail] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
console.log(email);
  const handelForgetPass = () => {
    setErroremail("")
 setErrorMessage("")
    const po = api
      .post(
        "/api/v1/users/auth/forgot",
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
      /*  setLoading(false);*/
      res.response.data.errors?.email
      ? setErroremail(res.response.data.errors.email[0])
      : setErroremail("");
      res.response.data.message
      ? setErrorMessage(res.response.data.message)
      : setErrorMessage("");
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


            <TextInput
      placeholder={t('enterEmail')}
      label={t('email')}
      type="email"
      onChange={(e)=>setemail(e.target.value)}
      error={Erroremail}
    />

             
            </div>

            <input type="submit" value={t('sendMail')} className="btn_page" onClick={(e)=>{e.preventDefault();handelForgetPass()}} />
            {ErrorMessage&&<p style={{color:"red",textAlign:"center",fontSize:"12px",marginTop:"4px"}}>{ErrorMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

export default CForgetPassword;
