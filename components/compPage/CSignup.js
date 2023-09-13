"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
import { useTranslations } from "next-intl";
import axios from "axios";
import { getHomePage } from "../useAPI/GetUser";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function CSignup() {
  const router = useRouter()
  const t = useTranslations("Sign");
  const [allCountries, setallCountries] = useState([]);

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState();
  const [phone_country, setPhone_country] = useState("EG");
  const [phone_country2, setPhone_country2] = useState("EG");
  const [phone2, setPhone2] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [profession, setProfession] = useState();
  const [country_id, setCountry_id] = useState();

  const [selectedOption, setSelectedOption] = useState("option1");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    FetchDataOFHomePage()
}, [])
  const FetchDataOFHomePage= async () => {
    const AllData = await getHomePage();
  if (!AllData) console.log(AllData?.message)
  setallCountries(AllData.countries)
  }


  const handelSignUP = () => {
    const po = axios
      .post(
        "https://education.aquadic.com/api/v1/users/auth/signup",
        {
          "name": name,
          "email": email,
          "password": password,
          "password_confirmation": password,
          "phone": phone,
          "phone_country": phone_country,
          "parent_phone": phone2,
          "parent_phone_country":phone_country2,
          "country_id": country_id,
           "age":age,
           "gender":gender,
           "profession":profession

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
        Cookies.set("token",res.data.token);
        router.push('/')
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
          <h2 className="title_sign">{t("up")}</h2>
          <div className="signWith">
            <ul>
              <li>
                <a href="" className="google">
                  <img src="/images/media/google2.svg" alt="google" />
                  <p>{t("gmail")}</p>
                </a>
              </li>
              <li>
                <a href="" className="facebook">
                  <img src="/images/media/face2.svg" alt="facebook" />
                  <p>{t("facebook")}</p>
                </a>
              </li>
            </ul>
          </div>
          <form className="row g-4 form_page">
            <div className="col-md-12">
              <label htmlFor="inputFirstName" className="form-label">
                {t("first")}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder={t("enterFirst")}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
           
            <div className="col-md-12">
              <label htmlFor="inputEmail" className="form-label">
                {t("email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder={t("enterEmail")}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputpassword" className="form-label">
                {t("password")}
              </label>
              <input
                type="password"
                className="form-control"
                id="inputpassword"
                placeholder={t("enterPassword")}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="inputPhone " className="form-label">
                {t("mobile")}
              </label>
              <PhoneInput
                defaultCountry="EG"
                placeholder={t("enterNumber")}
                className="form-control"
                value={phone}
                onCountryChange={(e) => setPhone_country(e)}
                onChange={setPhone}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputPhone " className="form-label">
                {t("whatsApp")}
              </label>
              <PhoneInput
                defaultCountry="EG"
                placeholder={t("enterNumber")}
                className="form-control"
                value={phone2}
                onChange={setPhone2}
                onCountryChange={(e) => setPhone_country2(e)}
              />
            </div>
            {/*value={selectedOption} onChange={handleOptionChange}*/}
            <div className="col-md-12">
              <label htmlFor="inputCountry" className="form-label">
                {t("country")}
              </label>
              <select id="inputCountry" className="form-select" onChange={(e)=>{setCountry_id(e.target.value)}}>
                <option value="option" hidden>{t("selectCountry")}</option>
                {
                  allCountries&&allCountries.map((item)=>{
                    return(
                      <option value={item.id}>{item.name.en}</option>
                    )
                  })
                }
                
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="inputAge" className="form-label">
                {t("age")}
              </label>
              <input
                type="number"
                className="form-control"
                id="inputAge"
                placeholder={t("enterAge")}
                onChange={(e)=>{setAge(e.target.value)}}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputGender" className="form-label">
                {t("gender")}
              </label>
              <select id="inputGender" className="form-select" onChange={(e)=>{setGender(e.target.value)}}>
                <option value="option" hidden>{t("selectGender")}</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="inputProfession" className="form-label">
                {t("profession")}
              </label>
              <select id="inputProfession" className="form-select" onChange={(e)=>{setProfession(e.target.value)}}>
                <option value="option" hidden>{t("selectProfession")}</option>
                <option value="Profession1">Profession1</option>
                <option value="Profession2">Profession2</option>
              </select>
            </div>
           

            <input
              type="submit"
              value="Sign Up"
              onClick={(e) => {
                e.preventDefault();
                handelSignUP();
              }}
              className="btn_page"
            />
          </form>
          <div className="haveAccount">
            <p>
              {t("already")}
              <Link href="/signIn"> {t("logIn")}</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSignup;
