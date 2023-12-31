import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function ItemCourse({
  title,
  star,
  dec,
  oldsalary,
  newsalary,
  image,
  imageCourse,
  best,
  Myprogress,
  numProgress,
  link2,
  id,
  is_purchased,
  NoPrice,
  last_watched
}) {

  const t = useTranslations("CompCourse");
  
  return (
    <div className="service ">
      {best && <h5>{best}</h5>}
      <Link href={link2 ? link2 : `/courses/${id}`}>
        {imageCourse ? (
          <>
            <img src={imageCourse} className="imgService" alt="service" />
          </>
        ) : (
          <>
            <img
              src={`/images/service/service${image}.webp`}
              className="imgService"
              alt="service"
            />
          </>
        )}
      </Link>
      <div className="aboutservice">
        <Link href={link2 ? link2 : `/courses/${id}`}>
          <div className="head">
            <h3>{title}</h3>
            {/* {star && (
              <div className="Star">
                <img src="/images/star.svg" alt="star" />

                <p>{star}</p>
              </div>
            )} */}
          </div>
          <p className="dec_service">{dec}</p>
         {
          NoPrice?null: newsalary ? (
            <div className="salary">
              {!oldsalary && <p>{newsalary}</p>}
              {oldsalary && (
                <>
                  <span className="sall">{oldsalary}</span>
                  <p>{newsalary}</p>
                </>
              )}
            </div>
          ) : (
          t("free")
          )
        }
         
        </Link>
        {Myprogress && (
          <>
            <div className="lineprogress">
              <div className="numProgress">
                <span style={{ width:`${numProgress}%`}}></span>
              </div>
              <p className="dec_service">{numProgress} % {t("completed")}</p>
            </div>
            {numProgress === 100 && (
              <Link href="/certificate" className="btn_page">
                {t("certificate")}
              </Link>
            )}
          </>
        )}
        {!Myprogress ? (
          is_purchased ? (
            <Link href={last_watched?`/courseContent/${last_watched}`:`/courses/${id}`} className="btn_page">
              {t("continue")}
            </Link>
          ) : (
            <Link href={`/checkOut?id=${id}`} className="btn_page2">
              {t("enroll")}
            </Link>
          )
        ) : null}
      </div>
    </div>
  );
}

export default ItemCourse;
