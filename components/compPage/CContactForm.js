"use client";
import { PasswordInput, Select, TextInput } from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import { getHomePage } from "../useAPI/GetUser";
import axios from "axios";
import { useRouter } from "next/navigation";

function CContactForm() {
  const t = useTranslations("Teach");
  const t2 = useTranslations("Sign");
const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phone, setPhone] = useState();
  const [phone_country, setPhone_country] = useState("EG");
  const [whatsapp, setWhatsapp] = useState();
  const [whatsapp_country, setWhatsapp_country] = useState("EG");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [subscription, setSubscription] = useState("");
  //Error
  const [ErrorName, setErrorName] = useState("");
  const [Erroremail, setErroremail] = useState("");
  const [Errorpassword, setErrorpassword] = useState("");
  const [ErrorPhone, setErrorPhone] = useState("");
  const [ErrorWhatsapp, setErrorWhatsapp] = useState("");
  const [ErrorLanguage, setErrorLanguage] = useState("");
  const [ErrorCategory, setErrorCategory] = useState("");
  const [ErrorSubscription, setErrorSubscription] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");


  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleCheckboxChange = (checkboxValue) => {
    if (checkboxValue === selectedCheckbox) {
      setSelectedCheckbox(null);
    } else {
      setSelectedCheckbox(checkboxValue);
    }
  };
  useEffect(() => {
    FetchDataOFHomePage();
  }, []);
  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (!AllData) console.log(AllData?.message);
   AllData.categories.map((itemCategories) => {
    const item = { value: itemCategories.id, label: itemCategories.name.en };
    setCategories((current) => [...current, item]);
  });
  
  };
 

  const handelInstructor= () => {
    setErrorName("");
    setErroremail("");
    setErrorPhone("");
    setErrorpassword("");
    setErrorLanguage("");
    setErrorCategory("");
    setErrorSubscription("");
    setErrorWhatsapp("");
    setErrorMessage("");

    const po = axios
      .post(
        "https://education.aquadic.com/api/v1/instructors/auth/signup",
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          phone: phone,
          phone_country: phone_country,
          whatsapp: whatsapp,
          whatsapp_country:whatsapp_country,
          language: language,
          category_id:category,
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
     router.push('/successfull')
      })
      .catch((res) => {
        /*  setLoading(false);*/
       
        console.log(res);
      });
  };

  return (
    <>
      <script src="../phone.js" />
      <section className="bookingForm">
        <div className="container">
          <div className="content">
            <h3 className="f-s">{t("hurry")}</h3>
            <form className="row g-4 form_page">
              <div className="col-md-12">
                <TextInput
                  placeholder={t2("enterLast")}
                  label={t2("full")}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  error={ErrorName}
                />
              </div>
              <div className="col-md-12">
                <TextInput
                  placeholder={t2("enterEmail")}
                  label={t2("email")}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  error={Erroremail}
                />
              </div>

              <div className="col-md-12">
                <PasswordInput
                  variant="unstyled"
                  placeholder={t2("enterPassword")}
                  label={t2("password")}
                  onChange={(e) => setpassword(e.target.value)}
                  error={Errorpassword}
                />
              </div>
              <div className="col-md-12">
                <PasswordInput
                  variant="unstyled"
                  placeholder={t2("enterAgain")}
                  label={t2("confirmNew")}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="inputPhone " className="form-label">
                  {t2("mobile")}
                </label>
                <PhoneInput
                  defaultCountry="EG"
                  placeholder={t2("enterNumber")}
                  className="form-control"
                  value={phone}
                  onChange={setPhone}
                />
                {ErrorPhone && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
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
                  {t2("whatsApp")}
                </label>
                <PhoneInput
                  defaultCountry="EG"
                  placeholder={t2("enterNumber")}
                  className="form-control"
                  value={whatsapp}
                  onChange={setWhatsapp}
                />
                 {ErrorWhatsapp && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {ErrorWhatsapp}
              </p>
            )}
              </div>
              <div className="col-md-12">
                <Select
                  label={t("language")}
                  placeholder={t2("selectLanguage")}
                  onChange={setLanguage}
                  error={ErrorLanguage}
                  data={[
                    { value: "en", label: "EN" },
                    { value: "ar", label: "AR" },
                  ]}
                />
              </div>
              <div className="col-md-12">
                <Select
                  label={t("category")}
                  placeholder={t2("selectCategory")}
                  onChange={setCategory}
                  error={ErrorCategory}
                  data={categories}
                />
              </div>

              <div className="col-md-12">
                <label
                  htmlFor="inputLocation"
                  className="form-label"
                  style={{ margin: "0" }}
                >
                  {t("subscription")}
                </label>
                <div className="checkgroub">
                  <div className="form-check">
                    <input
                      className="form-check-input dates2"
                      type="checkbox"
                      id="gridCheck1"
                      value="checkbox1"
                      checked={selectedCheckbox === "checkbox1"}
                      onChange={() => handleCheckboxChange("checkbox1")}
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      <div className="method active">
                        <h4> {t("basic")}</h4>
                        <h5>
                          25 <span>EGP</span>
                        </h5>
                        <ul className="active">
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 {t("sessions")}</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 {t("sessions")}</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>3 {t("ads")}</h6>
                          </li>
                        </ul>
                      </div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input dates2"
                      type="checkbox"
                      id="gridCheck2"
                      value="checkbox2"
                      checked={selectedCheckbox === "checkbox2"}
                      onChange={() => handleCheckboxChange("checkbox2")}
                    />
                    <label className="form-check-label" htmlFor="gridCheck2">
                      <div className="method">
                        <h4>{t("professional")}</h4>
                        <h5>
                          250 <span>EGP</span>
                        </h5>
                        <p className="sall">
                          instead of
                          <span>350 EGP </span>
                        </p>
                        <ul className="active">
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 {t("sessions")}</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 {t("sessions")}</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>5 {t("ads")}</h6>
                          </li>
                        </ul>
                      </div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input dates2"
                      type="checkbox"
                      id="gridCheck3"
                      value="checkbox3"
                      checked={selectedCheckbox === "checkbox3"}
                      onChange={() => handleCheckboxChange("checkbox3")}
                    />
                    <label className="form-check-label" htmlFor="gridCheck3">
                      <div className="method active">
                        <h4> {t("basic")}</h4>
                        <h5>
                          25 <span>EGP</span>
                        </h5>
                        <ul className="active">
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 {t("sessions")}</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>12 {t("sessions")}</h6>
                          </li>
                          <li>
                            <img src="/images/details/true.svg" alt="true" />
                            <h6>15 {t("ads")}</h6>
                          </li>
                        </ul>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gridCheck"
                    style={{ color: "#313131", fontFamily: "DM Sans3" }}
                  >
                    {t("agreement")}
                  </label>
                </div>
              </div>
              <input type="submit" value="Apply" className="btn_page" onClick={(e)=>{e.preventDefault();handelInstructor()}} />
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
        </div>
      </section>
    </>
  );
}

export default CContactForm;
