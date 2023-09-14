 "use client";
import { navState } from "@/atoms";
import { LogOut } from "@/components/useAPI/Auth";
import { getUser } from "@/components/useAPI/GetUser";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useRecoilState } from "recoil";


// export const metadata = {
//   title: 'analytica | Account',
// }

function page() {
  const router = useRouter();
  const t = useTranslations('Account');
  const t2 = useTranslations('Sign');
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [userData, setUserData] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [phone_country, setPhone_country] = useState("EG");
  const [selectedFile, setSelectedFile] = useState(null);
  const [IsImage, setIsImage] = useState('');
  const [changeImage, setChangeImage] = useState(false);
  const handleHeaderInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setChangeImage(true)
  };

  const HandelLogOut = async () => {
    const UserLogOut = await LogOut(Cookies.get("token"));
    if (UserLogOut.message === "auth.logged_out") {
      console.log("done");
      setIsUser(false);
      Cookies.remove('token')
      router.push('/signIn')
    }
  };
  useEffect(() => {
      FetchDataOFUserData();
  }, []);
const FetchDataOFUserData = async () => {
    const UserData = await getUser(Cookies.get("token"));
    if (!UserData) console.log(UserData?.message);
    setUserData(UserData);
    setName(UserData.name)
    setEmail(UserData.email)
    setIsImage(UserData.image?UserData.image.url:null)
    setPhone(UserData.phone)
    setPhone_country(UserData.phone_country)
  };
console.log(userData);



const handelProfile = () => {
  const body = new FormData();
  body.append('name', name);
  body.append('email', email);
  body.append('image', selectedFile);
  body.append('phone', phone);
  body.append('phone_country', phone_country);
  const po = axios
    .post(
      "https://education.aquadic.com/api/v1/users/auth/update",
      body,
      {
        headers: {
          "Authorization": `Bearer ${Cookies.get('token')}`,
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
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
            <img src={!changeImage?IsImage:selectedFile?URL.createObjectURL(selectedFile):"/images/icons/person.webp"} className="person" alt="person" /> 
              <div className='inputfile'>
            <input type="file" onChange={handleHeaderInputChange} />
              <img src="/images/icons/Camera.svg" alt="Camera" />
            </div>
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
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
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
                  onCountryChange={(e) => setPhone_country(e)}
                  value={phone}
                  onChange={setPhone}
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
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <button type="submit" href="" className="next btn_page" onClick={(e)=>{e.preventDefault();handelProfile()}}>
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
