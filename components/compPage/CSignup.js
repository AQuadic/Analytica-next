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
import { PasswordInput, Select, TextInput } from "@mantine/core";
import api from '../../app/[locale]/api';

function CSignup() {
  const router = useRouter();
  const t = useTranslations("Sign");
  const [allCountries, setallCountries] = useState([]);
  const [data, setData] = useState([]);
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
  //error
  const [ErrorName, setErrorName] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const [ErrorPhone, setErrorPhone] = useState("");
  const [ErrorAge, setErrorAge] = useState("");
  const [ErrorCountry, setErrorCountry] = useState("");
  const [ErrorGender, setErrorGender] = useState("");
  const [ErrorProfession, setErrorProfession] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    FetchDataOFHomePage();
  }, []);
  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (!AllData) console.log(AllData?.message);
    setallCountries(AllData.countries);
    AllData.countries.map((itemCountry) => {
      const item = { value: itemCountry.id, label: itemCountry.name.en };
      setData((current) => [...current, item]);
    });
  };

  const handelSignUP = () => {
    setErrorName("")
    setErroremail("")
    setErrorpassword("")
    setErrorPhone("")
    setErrorAge("")
    setErrorCountry("")
    setErrorGender("")
    setErrorProfession("")
    setErrorMessage("")
   
    const po = api
      .post("/api/v1/users/auth/signup", {
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
       { headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
      )
      .then((res) => {
        console.log(res);
        Cookies.set("token", res.data.token);
        router.push("/");
      })
      .catch((res) => {
        /*  setLoading(false);*/
        res.response.data.errors?.name
          ? setErrorName(res.response.data.errors.name[0])
          : setErrorName("");
        res.response.data.errors?.email
          ? setErroremail(res.response.data.errors.email[0])
          : setErroremail("");
        res.response.data.errors?.password
          ? setErrorpassword(res.response.data.errors.password[0])
          : setErrorpassword("");
        res.response.data.errors?.phone
          ? setErrorPhone(res.response.data.errors.phone[0])
          : setErrorPhone("");
          res.response.data.errors?.age
          ? setErrorAge(res.response.data.errors.age[0])
          : setErrorAge("");
          res.response.data.errors?.country_id
          ? setErrorCountry(res.response.data.errors.country_id[0])
          : setErrorCountry("");
          res.response.data.errors?.gender
          ? setErrorGender(res.response.data.errors.gender[0])
          : setErrorGender("");
          res.response.data.errors?.profession
          ? setErrorProfession(res.response.data.errors.profession[0])
          : setErrorProfession("");
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
              <TextInput
                placeholder={t("enterFirst")}
                label={t("first")}
                type="text"
                onChange={(e) => setName(e.target.value)}
                error={ErrorName}
              />
            </div>

            <div className="col-md-12">
              <TextInput
                placeholder={t("enterEmail")}
                label={t("email")}
                type="email"
                onChange={(e) => setemail(e.target.value)}
                error={Erroremail}
              />
            </div>
            <div className="col-md-12">
              <PasswordInput
                variant="unstyled"
                placeholder={t("enterPassword")}
                label={t("password")}
                onChange={(e) => setpassword(e.target.value)}
                error={Errorpassword}
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
               {ErrorPhone && (
              <p
                style={{
                  color: "red",
                 
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {ErrorPhone}
              </p>
            )}
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
               {ErrorPhone && (
              <p
                style={{
                  color: "red",
                 
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {ErrorPhone}
              </p>
            )}
            </div>
            {/*value={selectedOption} onChange={handleOptionChange}*/}
            <div className="col-md-12">
              <Select
                label={t("country")}
                placeholder={t("selectCountry")}
                searchable
                clearable
                onChange={setCountry_id}
                error={ErrorCountry}
                value={country_id}
                nothingFound="No options"
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                data={data}
              />
            </div>
            <div className="col-md-12">
              <TextInput
                placeholder={t("enterAge")}
                label={t("age")}
                type="number"
                onChange={(e) => setAge(e.target.value)}
                error={ErrorAge}
              />
            </div>
            <div className="col-md-12">
              <Select
                label={t("gender")}
                placeholder={t("selectGender")}
                onChange={setGender}
                error={ErrorGender}
                data={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
            </div>

            <div className="col-md-12">
              <Select
                label={t("profession")}
                placeholder={t("selectProfession")}
                onChange={setProfession}
                error={ErrorProfession}
                data={[
                  { value: "Profession1", label: "Profession1" },
                  { value: "Profession2", label: "Profession2" },
                ]}
              />
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
