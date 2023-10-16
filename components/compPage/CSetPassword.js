"use client";
import { PasswordInput } from "@mantine/core";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import api from "../../app/[locale]/api";
import { Alert } from "react-bootstrap";
import Thanks from "../Thanks";
import { ColorRing } from "react-loader-spinner";

function CSetPassword() {
  const t = useTranslations("Sign");
  const t2 = useTranslations("Teach");
  const [password, setpassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const [ErrorpasswordConfirmation, setErrorpasswordConfirmation] =
    useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const [Loading, setLoading] = useState(false);

  const router = useRouter();
  if (!Cookies.get("reset_token")) {
    router.push("/forgetPassword");
  }

  const handelForgetPass = () => {
    setLoading(true)

    setErroremail("");
    setErrorpassword("");
    setErrorMessage("");
    setErrorpasswordConfirmation("");

    if (password !== passwordConfirmation || !password) {
      setErrorpasswordConfirmation("The password confirmation does not match.");
    } else {
      setErrorpasswordConfirmation("");
    }
    const po = api
      .post(
        "/api/v1/users/auth/change_password",
        {
          reset_token: Cookies.get("reset_token"),
          password: password,
          password_confirmation: passwordConfirmation,
          email: Cookies.get("email"),
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
        router.push("/signIn");
        Cookies.remove("reset_token");
        Cookies.remove("email");
      })
      .catch((res) => {
    setLoading(false)

        /*  setLoading(false);*/
        if (res.response.status === 500) {
          setErrorBloked(res.message);
          setBloked(true);
        }

        res.response.data.errors?.email
          ? setErroremail(res.response.data.errors.email[0])
          : setErroremail("");
        res.response.data.errors?.password
          ? setErrorpassword(res.response.data.errors.password[0])
          : setErrorpassword("");
        res.response.data?.message
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
        <> <div className="load" style={{ display: Loading ? "flex" : "none" }}>
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
            <h2 className="title_sign" style={{ margin: "0" }}>
              {t("set")}
            </h2>

            <form className="row g-4 form_page">
              <div className="col-md-12">
                <PasswordInput
                  variant="unstyled"
                  placeholder={t("enterNew")}
                  label={t("newPassword")}
                  error={Errorpassword}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <PasswordInput
                  variant="unstyled"
                  placeholder={t("enterAgain")}
                  label={t("confirmNew")}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  error={ErrorpasswordConfirmation}
                />
              </div>

              <input
                type="submit"
                value={t("confirm")}
                onClick={(e) => {
                  e.preventDefault();
                  handelForgetPass();
                }}
                className="btn_page"
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

export default CSetPassword;
