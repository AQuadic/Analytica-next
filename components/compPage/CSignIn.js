"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { PasswordInput, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { navState, tokenNotifiable } from "@/atoms";
import { useTranslations } from "next-intl";
import api from "../../app/[locale]/api";
import { DeviceUUID } from "device-uuid";
import platform from "platform";
import { Alert } from "react-bootstrap";
import Thanks from "../Thanks";
import { useSession, signIn,  getSession } from "next-auth/react"
import { auth } from "@/utils/firebase";
import  GoogleLogin from  "@stack-pulse/next-google-login"
import { FacebookProvider, LoginButton } from "react-facebook";

function CSignIn() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [tokenNOTF, setTokenNOTF] = useRecoilState(tokenNotifiable);
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const t = useTranslations("Sign");
  const t2 = useTranslations("Teach");
  var uuid = new DeviceUUID().get();
 const [tokenUser,setTokenUser] = useState()


  const handellogin = () => {
    setErroremail("");
    setErrorpassword("");
    setErrorMessage("");
    const po = api
      .post(
        "/api/v1/users/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setIsUser(true);
        Cookies.set("AnalyticaToken", res.data.token);
        handelAddDevices();
        console.log(res);
        router.push("/");
      })
      .catch((res) => {
        if (res.response.status === 500) {
          setErrorBloked(res.message);
          setBloked(true);
        }
        /*  setLoading(false);*/
        res.response.data.errors?.email
          ? setErroremail(res.response.data.errors.email[0])
          : setErroremail("");
        res.response.data.errors?.password
          ? setErrorpassword(res.response.data.errors.password[0])
          : setErrorpassword("");
        res.response.data.message
          ? setErrorMessage(res.response.data.message)
          : setErrorMessage("");
        console.log(res);
      });
  };


  const handelAddDevices =  () => {
    setErroremail("");
    setErrorpassword("");
    setErrorMessage("");
    const po = api
      .post(
        "/api/v1/users/devices",
        {
          device_type: "web",
          device_token: uuid,
          device_name: platform.name,
          notifiable_method: "firebase",
          notifiable_token: tokenNOTF,
          enabled: false,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("AnalyticaToken")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
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
        res.response.data.message
          ? setErrorMessage(res.response.data.message)
          : setErrorMessage("");
        console.log(res);
      });
  };



 console.log(tokenUser);



 const handelloginGoogle = (token) => {
  
  const po = api
    .post(
      "/api/v1/users/auth/social",
      {
        "provider": "google",
        "access_token": token,
        
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
  
    })
    .catch((res) => {
      console.log(res);
    });
};





 /*signOut(auth).then(() => {
  console.log('done out');
}).catch((error) => {
  console.log('noooooooooooo out');

});
*/
const responseGoogleDone = (response) => {
  console.log("dsdsdsdsdasdasdas");
  console.log(response);
  handelloginGoogle(response.tokenObj.id_token)
}
const responseGoogleFaild = (response) => {
  console.log(response);
}

function handleSuccess(response) {
  console.log(response);
}

function handleError(error) {
  console.log(error);
}
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
       

        <section className="sign container">
          <div className="box_sign">
            <h2 className="title_sign">{t("in")}</h2>
            <div className="signWith">
              <ul>
                <li>
                <GoogleLogin
                redirectUri="'http://education.aquadic.com/auth/google/callback'"
    clientId="408685117985-pprk98oi8ol1cdsmu7bl0noa8hsa58cf.apps.googleusercontent.com"
    buttonText={t("gmail")}
    onSuccess={responseGoogleDone}
    onFailure={responseGoogleFaild}
style={{backgroundColor:"#ea4335",color:"white"}}
className="google"
icon={false}

>
<button  className="google" onClick={() =>  handelGoogleSignIN()}>
                    <img src="/images/media/google2.svg" alt="google" />
                    <p>{t("gmail")}</p>
                  </button>
</GoogleLogin>
                </li>
               
                <li>
                <FacebookProvider  appId="193434177039802">
      <LoginButton
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
      
      >
           <button  className="facebook" onClick={() =>  signIn('facebook')}>
                    <img src="/images/media/face2.svg" alt="facebook" />
                    <p>{t("facebook")}</p>
                  </button>
      </LoginButton>
    </FacebookProvider>
                </li>
              </ul>
            </div>
            <form className="row g-4 form_page">
              <TextInput
                placeholder={t("enterEmail")}
                label={t("email")}
                type="email"
                onChange={(e) => setemail(e.target.value)}
                error={Erroremail}
              />

              <div className="col-md-12">
                <PasswordInput
                  variant="unstyled"
                  placeholder={t("enterPassword")}
                  label={t("password")}
                  onChange={(e) => setpassword(e.target.value)}
                  error={Errorpassword}
                />

                <Link href="/forgetPassword" className="forget">
                  {t("forget2")}
                </Link>
              </div>

              <input
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handellogin();
                }}
                value="Sign In"
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
            <div className="haveAccount">
              <p>
                {t("don’t")}
                <Link href="/signUp"> {t("signUp")}</Link>
              </p>
            </div>
          </div>
        </section>
      

      )}
    </>
  );
}

export default CSignIn;
