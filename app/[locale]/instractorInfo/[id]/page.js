"use client";
import { navState } from "@/atoms";
import ItemCourse from "@/components/ItemCourse";
import { getInstractor, getLocal } from "@/components/useAPI/GetUser";
import { useLocale, useTranslations } from "next-intl";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

// export const metadata = {
//   title: 'analytica | INSTRUCTOR',
// }
function InstractorInfo({ params }) {
  const locale = useLocale();
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [instractor, setInstractor] = useState();
  const t = useTranslations("instracto");

  useEffect(() => {
    FetchDataOFInstractorInfo();
  }, []);
  const FetchDataOFInstractorInfo = async () => {
    const InstractorInfo = await getInstractor(params.id, IsUser);
    if (!InstractorInfo) console.log(InstractorInfo?.message);
    setInstractor(InstractorInfo);
  };
  console.log(instractor);
 
  return (
    <>
      <section className="InstractorInfo container">
        <div className="part1">
          <div className="info">
            <img
              src={
                instractor?.image?.url
                  ? instractor.image.url
                  : "/images/persone.webp"
              }
              className="person"
              alt="persone"
            />
            <div className="info_about">
              <h2>{t("instracto")}</h2>
              <h3>{instractor?.name}</h3>
              {getLocal(instractor?.title) && (
                <h4>{getLocal(instractor?.title)}</h4>
              )}
            </div>
          </div>
          <div className="achievement">
            <div className="part">
              <img src="/images/icons/star2.webp" alt="stars" />
              <h5>
                {instractor?.counters?.rating}
                <span></span>
              </h5>
            </div>
            <div className="part">
              <img src="/images/icons/online-training1.webp" alt="training" />
              <h5>
                {numeral(instractor?.counters?.trainees).format("0a")}{" "}
                <span>{t("trainees")}</span>
              </h5>
            </div>
            <div className="part">
              <img src="/images/icons/clock.webp" alt="clock" />
              <h5>
                {numeral(instractor?.counters?.hours).format("0.0a")}{" "}
                <span>{t("hours")}</span>
              </h5>
            </div>
          </div>
          {getLocal(instractor?.about) && (
            <div className="aboutME">
              <h3>{t("aboutMe")}</h3>
              <p>{getLocal(instractor.about)}</p>
            </div>
          )}
        </div>

        <div className="part2">
          <h3>{t("follow")}</h3>
          <ul>
            {instractor?.socials?.facebook && (
              <li>
                <a
                  href={`https://www.facebook.com/${instractor.socials.facebook}`}
                >
                  <img src="/images/media/face.webp" alt="facebook" />
                  <p>{instractor.socials.facebook}</p>
                </a>
              </li>
            )}

            {instractor?.socials?.linkedin && (
              <li>
                <a
                  href={`https://www.linkedin.com/in/${instractor.socials.linkedin}`}
                >
                  <img src="/images/media/linkedin2.webp" alt="linkedin" />
                  <p>{instractor.socials.linkedin}</p>
                </a>
              </li>
            )}

            {instractor?.socials?.instagram && (
              <li>
                <a
                  href={`https://www.instagram.com/${instractor.socials.instagram}`}
                >
                  <img src="/images/media/insta2.webp" alt="instagram" />
                  <p>{instractor.socials.instagram}</p>
                </a>
              </li>
            )}

            {instractor?.socials?.twitter && (
              <li>
                <a href={`https://twitter.com/${instractor.socials.twitter}`}>
                  <img src="/images/media/twiiter2.webp" alt="twiiter" />
                  <p>{instractor.socials.twitter}</p>
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>
      {instractor?.courses && (
        <section className="services container m60">
          <h2 style={{ fontFamily: "DM Sans", fontSize: "20px" }}>
          {t("myCourses")}
          </h2>

          <div className="allServices" style={{ justifyContent: "flex-start" }}>
            {instractor.courses.map((course) => {
              return (
                <ItemCourse
                  key={course.id}
                  id={course.id}
                  title={getLocal(course.name)}
                  imageCourse={course.image.url}
                  star="4.8"
                  is_purchased={course.is_purchased ? true : false}
                  newsalary={course.price ? "EG " + course.price : "free"}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default InstractorInfo;
