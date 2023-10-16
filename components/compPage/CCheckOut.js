"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Group, Input, NumberInput, Radio, TextInput } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import { getMyCourses, getOneCourse } from "../useAPI/CorsesApi/GetCourses";
import { getHomePage, getLocal } from "../useAPI/GetUser";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { navState } from "@/atoms";
import api from "../../app/[locale]/api";
import { Alert } from "react-bootstrap";
import Thanks from "../Thanks";
import { ColorRing } from "react-loader-spinner";

function CCheckOut() {
  const locale = useLocale();
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [show, setShow] = useState(false);
  const t = useTranslations("CheckOut");
  const t2 = useTranslations("Teach");
  const [paymentValue, setPayment] = useState("1");
  const [payment_methods, setPayment_methods] = useState([]);
  const [course, setCourse] = useState();
  const [code, setCode] = useState("");
  const [Phone, setPhone] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountID, setDiscountID] = useState();
  const [Price, setPrice] = useState();
  const [ErrorMessage, setErrorMessage] = useState("");
  const [ErrorMessage2, setErrorMessage2] = useState("");
  const SearchParams = useSearchParams();
  const [HaveMyCourses, setHaveMyCourses] = useState();
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const router = useRouter();
  const CoursesID = SearchParams.get("id");
  const [Loading, setLoading] = useState(false);


  useEffect(() => {
    FetchDataOFHomePage();
    FetchDataOFOneCourse();
    FetchDataOFMyCourses();
  }, []);
  const FetchDataOFOneCourse = async () => {
    const Courses = await getOneCourse(CoursesID);

    if (Courses.error) {
      setErrorBloked(Courses.error);
      setBloked(true);
    }
    if (!Courses.id) {
      router.push("/courses");
    } else {
      setCourse(Courses);
      console.log(Courses);
      setPrice(Courses.price);
    }
  };

  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (AllData.error) {
      setErrorBloked(AllData.error);
      setBloked(true);
    }
    setPayment_methods(AllData.payment_methods);
  };
  console.log(payment_methods);
  const handelCoupons = () => {
    setLoading(true)

    const po = api
      .post(
        "/api/v1/users/coupons/check",
        {
          code: code,
          course_id: CoursesID,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
    setLoading(false)

        console.log(res);
        setDiscountID(res.data.coupon.id);
        setDiscount(res.data.coupon.value);
      })
      .catch((res) => {
    setLoading(false)

        /*  setLoading(false);*/
        if (res.response.status === 500) {
          setErrorBloked(res.message);
          setBloked(true);
        }

        res.response.data.message
          ? setErrorMessage(res.response.data.message)
          : setErrorMessage("");
        console.log(res);
      });
  };

  const handelCheckOut = () => {
    setLoading(true)

    if (!IsUser) {
      router.push("/signIn");
    } else {
      const po = api
        .post(
          "/api/v1/users/purchase/purchase",
          paymentValue === "10"
            ? {
                course_id: CoursesID,
                payment_method_id: paymentValue,
                coupon_id: discountID ? discountID : null,
                phone: Phone,
              }
            : {
                course_id: CoursesID,
                payment_method_id: paymentValue,
                coupon_id: discountID ? discountID : null,
              },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
    setLoading(false)

          console.log(res);
          res.data.payment_link
            ? router.push(res.data.payment_link)
            : router.push("/checkOut/successfull");
        })
        .catch((res) => {
    setLoading(false)

          /*  setLoading(false);*/
          if (res.response.status === 500) {
            setErrorBloked(res.message);
            setBloked(true);
          }
          res.response.data.message
            ? setErrorMessage2(res.response.data.message)
            : setErrorMessage2("");

          console.log(res);
        });
    }
  };

  console.log(Phone);
  const FetchDataOFMyCourses = async () => {
    const MyCourses = await getMyCourses();
    if (MyCourses.error) {
      setErrorBloked(MyCourses.error);
      setBloked(true);
    }

    console.log(MyCourses);
    MyCourses.map((item) => {
      item.id === CoursesID ? setHaveMyCourses(true) : setHaveMyCourses(false);
    });
  };
  console.log(HaveMyCourses);
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
      ) : course ? (
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
          <div className="checkOut container">
            <div className="part1">
              <h2>{t("title")}</h2>
              <form action="">
                <h3>{t("paymentMethod")}</h3>
                <div className="part">
                  <Radio.Group
                    name="favoriteFramework"
                    withAsterisk
                    onChange={setPayment}
                    value={paymentValue}
                  >
                    <Group mt="xs">
                      {payment_methods.map((payment) => {
                        return (
                          <Radio
                            key={payment.id}
                            value={payment.id.toString()}
                            label={getLocal(locale,payment.name)}
                          />
                        );
                      })}
                    </Group>
                  </Radio.Group>
                  {paymentValue === "10" && (
                    <TextInput
                      label={t("mobile")}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      value={Phone}
                      placeholder={t("enterNumber")}
                    />
                  )}
                </div>
                <div className="part"></div>
                <h3>{t("discountCode")}</h3>
                <div className="part apply">
                  <input
                    type="text"
                    placeholder={t("enterCode")}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <input
                    type="submit"
                    className="btn_page2"
                    onClick={(e) => {
                      e.preventDefault();
                      handelCoupons();
                    }}
                    value={t("apply")}
                  />
                </div>
                {ErrorMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "-30px",
                    }}
                  >
                    {ErrorMessage}
                  </p>
                )}
              </form>
            </div>
            <div className="part2">
              <h3>{t("summary")}</h3>
              <h4>{getLocal(locale,course.name)}</h4>
              <ul>
                <li>
                  <h5>{t("originalPrice")}</h5>
                  <p>EG{course.price}</p>
                </li>
                {discount ? (
                  <li>
                    <h5>{t("discount")}</h5>
                    <p className="green">-EG{discount}</p>
                  </li>
                ) : (
                  <></>
                )}

                <li>
                  <h5>{t("total")}</h5>
                  <p>EG{Price - discount < 0 ? 0 : Price - discount}</p>
                </li>
              </ul>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handelCheckOut();
                }}
                className="btn_page"
              >
                {t("title")}
              </button>
              {ErrorMessage2 && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "6px",
                    textAlign: "center",
                  }}
                >
                  {ErrorMessage2}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CCheckOut;
