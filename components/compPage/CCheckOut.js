"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Group, Radio } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { getOneCourse } from "../useAPI/CorsesApi/GetCourses";
import { getHomePage } from "../useAPI/GetUser";
import axios from "axios";
import Cookies from "js-cookie";


function CCheckOut() {
  const t = useTranslations("CheckOut");
  const [paymentValue, setPayment] = useState("1");
  const [payment_methods, setPayment_methods] = useState([]);
  const [course, setCourse] = useState();
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountID, setDiscountID] = useState();
  const [Price, setPrice] = useState();
  const [ErrorMessage, setErrorMessage] = useState("");
  const SearchParams = useSearchParams()
  const router = useRouter()
const CoursesID = SearchParams.get("id");

useEffect(() => {
  FetchDataOFHomePage()
  FetchDataOFOneCourse();
}, []);
const FetchDataOFOneCourse = async () => {
  const Courses = await getOneCourse(CoursesID);
  if (!Courses) console.log(Courses?.message);
  setCourse(Courses);
  setPrice(Courses.price)
 
};
const FetchDataOFHomePage= async () => {
  const AllData = await getHomePage();
if (!AllData) console.log(AllData?.message)
setPayment_methods(AllData.payment_methods)
}

const handelCoupons = () => {
 
  const po = axios
    .post(
      "https://education.aquadic.com/api/v1/users/coupons/check",
      {
        "code": code,
        "course_id": CoursesID
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
     console.log(res);
     setDiscountID(res.data.coupon.id)
     setDiscount(res.data.coupon.value)
    })
    .catch((res) => {
    /*  setLoading(false);*/
    res.response.data.message
    ? setErrorMessage(res.response.data.message)
    : setErrorMessage("");
        console.log(res);
    });
};


const handelCheckOut = () => {
 
  const po = axios
    .post(
      "https://education.aquadic.com/api/v1/users/purchase/purchase",
      {
        "course_id": CoursesID,
        "payment_method_id": paymentValue,
        "coupon_id": discountID?discountID:null
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
     console.log(res);
router.push(res.data.payment_link)
     
    })
    .catch((res) => {
    /*  setLoading(false);*/
   
        console.log(res);
    });
};

  return (
  
    <>
    {
      course? <>
       <div className="checkOut container">
        <div className="part1">
          <h2>{t('title')}</h2>
          <form action="">
           
            <h3>{t('paymentMethod')}</h3>
            <div className="part">
           
            <Radio.Group
      name="favoriteFramework"
      withAsterisk
      onChange={setPayment}
      value={paymentValue}
    >
      <Group mt="xs">
        {
          payment_methods.map((payment)=>{
           
            return(
              <Radio key={payment.id} value={(payment.id).toString()} label={payment.name.en} />
            )
          })
        }
       
       
      </Group>
    </Radio.Group>
           
           
             
            </div>
            <h3>{t('discountCode')}</h3>
            <div className="part apply">
              <input
                type="text"
                placeholder={t('enterCode')}
onChange={(e)=>setCode(e.target.value)}
              />
              <input type="submit" className="btn_page2" onClick={(e)=>{e.preventDefault();handelCoupons()}} value={t('apply')} />
              
            </div>
            {ErrorMessage&&<p style={{color:"red",fontSize:"12px",marginTop:"-30px"}}>{ErrorMessage}</p>}
          </form>
        </div>
        <div className="part2">
          <h3>{t('summary')}</h3>
          <h4>{course.name.en}</h4>
          <ul>
            <li>
              <h5>{t('originalPrice')}</h5>
              <p>EG{course.price}</p>
            </li>
            {
              discount?<li>
              <h5>{t('discount')}</h5>
              <p className="green">-EG{discount}</p>
            </li>:<></>
            }
           
            <li>
              <h5>{t('total')}</h5>
              <p>EG{(Price-discount)<0?0:Price-discount}</p>
            </li>
          </ul>
          <button type="submit" onClick={(e)=>{e.preventDefault();handelCheckOut()}} className="btn_page">
          {t('title')}
          </button>
        </div>
      </div>
      </> :<></>
    }
     
    </>
  );
}

export default CCheckOut;
