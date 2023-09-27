"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import api from '../../app/[locale]/api';

function CVerify() {
  const router = useRouter()
  const t = useTranslations("Sign");
  const [otp, setOtp] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const clearOtp = () => {
    setOtp("");
  };
  const handelOTP = () => {
    const time = document.getElementById("counter");
    const resend = document.getElementById("resend");
    const starttime = 2;
    let secound = starttime * 60;
    const myTimeout = setInterval(udtime, 1000);
    /*ss.addEventListener('click' , function (e) {
     e.preventDefault();
     const myTimeout = setInterval(udtime, 1000);
  })*/
    function udtime() {
      const min = Math.floor(secound / 60);
      let sec = secound % 60;
      sec = sec < 10 ? "0" + sec : sec;
      if (min === 0 && sec == "00") {
        clearInterval(myTimeout);
        resend.disabled = false;
        resend.classList.add("resend");
        time.classList.add("red");
      } else {
        resend.classList.remove("resend");
        time.classList.remove("red");
      }

      time.innerHTML = `0${min} : ${sec} s`;
      secound--;
    }
  };
  useEffect(() => {
    handelOTP();
  }, []);

  const handelVerify = () => {
    const po = api
      .post(
        "/api/v1/users/auth/verify",
        {
          email: Cookies.get("email"),

          code: otp,
          type: "reset",
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
       Cookies.set('reset_token',res.data.reset_token);
       router.push('/setPassword')
      })
      .catch((res) => {
        console.log(res);
        res.response.data?.message
        ? setErrorMessage(res.response.data.message)
        : setErrorMessage("");
      });
  };

  return (
    <>
      <script src="../js/otp.js" />
      <section className="sign container">
        <div className="box_sign">
          <h2 className="title_sign">{t("verifyEmail")}</h2>
          <p className="p_sign">{t("verifyTitle")}</p>
          <form action="">
            <div className="passcode-wrapper">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} width="90px" />}
              />
            </div>

            <p id="counter" className="counter red">
              02:00 s
            </p>
            <h4>
              If you don’t receive a code!
              <button id="resend" disabled onClick={clearOtp}>
                Resend
              </button>
            </h4>
            <input
              type="submit"
              id="ss"
              disabled={otp.length < 4}
              className="btn_page"
              value={t("verify")}
              onClick={(e)=>{e.preventDefault();handelVerify()}}
            />
             {ErrorMessage && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {ErrorMessage}
              </p>
            )}
          </form>
         
        </div>
      </section>
    </>
  );
}

export default CVerify;
