"use client";
import { TextInput } from "@mantine/core";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import api from "../../app/[locale]/api";
import { Alert } from "react-bootstrap";
import Thanks from "../Thanks";
import { ColorRing } from "react-loader-spinner";

function CForgetPassword() {
  const router = useRouter();
  const t = useTranslations("Sign");
  const t2 = useTranslations("Teach");
  const [show, setShow] = useState(false);

  const [email, setemail] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const [Loading, setLoading] = useState(false);

  console.log(email);
  const handelForgetPass = () => {
    setLoading(true)

    setErroremail("");
    setErrorMessage("");
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
    setLoading(false)

        console.log(res);
        Cookies.set("email", email);
        router.push("/verify");
      })
      .catch((res) => {
    setLoading(false)

        
        if (res.response.status === 500) {
          setErrorBloked(res.message);
          setBloked(true);
        }
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
      {Bloked ? (
        <>
          <Thanks
            title={t2("noAccess")}
            dec={ErrorBloked}
            link={"/myCourses"}
            title2={t2("backTo")}
            Bloked={true}
          />
        </>
      ) : (
        <>
         <div className="load" style={{ display: Loading ? "flex" : "none" }}>
        <ColorRing
      height={120}
      width={120}
      colors={['#3682b6', '#1f2265', '#8a20a7', '#1f2265', '#8a20a7']}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#fff"
      strokeWidth={1}
      strokeWidthSecondary={1}
    />
        </div>
       
        <section className="sign container">
          <div className="box_sign">
            <h2 className="title_sign">{t("Forget")}</h2>
            <p className="p_sign">{t("forgetTitle")}</p>
            <form className="row g-4 form_page">
              <div className="col-md-12">
                <TextInput
                  placeholder={t("enterEmail")}
                  label={t("email")}
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  error={Erroremail}
                />
              </div>

              <input
                type="submit"
                value={t("sendMail")}
                className="btn_page"
                onClick={(e) => {
                  e.preventDefault();
                  handelForgetPass();
                }}
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
      )}
    </>
  );
}

export default CForgetPassword;
