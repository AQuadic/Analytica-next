"use client";
import { navState } from "@/atoms";
import Thanks from "@/components/Thanks";
import { getOneCourse } from "@/components/useAPI/CorsesApi/GetCourses";
import { getLocal } from "@/components/useAPI/GetUser";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

// export const metadata = {
//   title: 'analytica | Course_Details',
// }

function CourseDetails({ params }) {
  const [allCourses, setAllCourses] = useState();
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const t2 = useTranslations("Teach");
  const t = useTranslations("course");

  const locale = useLocale();

  useEffect(() => {
    FetchDataOFOneCourse();
  }, []);
  const FetchDataOFOneCourse = async () => {
    const AllCourses = await getOneCourse(params.id, IsUser);
    console.log('====================================');
    console.log(AllCourses);
    console.log('====================================');
    if (AllCourses.error) {
      setErrorBloked(AllCourses.error);
      setBloked(true);
    }
    setAllCourses(AllCourses);
  };
  console.log(allCourses);

  const getCount = (num, name) => {
    const allcount = num.reduce(
      (accumulator, currentValue) => accumulator + currentValue[name],
      0
    );
    return allcount;
  };
  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60); // Calculate the whole number of hours
    const remainingMinutes = minutes % 60; // Calculate the remaining minutes
    if (minutes >= 60) {
      return `${hours} h ${remainingMinutes} min`;
    } else {
      return ` ${minutes} min`;
    }
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
        <>
          {allCourses ? (
            <div className="coursesDetails coursesDetails1 ">
              <div className="part1">
                <div className="content container">
                  <div className="contantAbout">
                    <h2>{getLocal(allCourses.name) }</h2>
                    {allCourses.short_description && (
                      <h3>{ getLocal(allCourses.short_description) }</h3>
                    )}
                    <p>
                      {t("instructor")}:{" "}
                      <Link
                        href={`/instractorInfo/${
                          allCourses.instructor.slug ?? allCourses.instructor.id
                        }`}
                      >
                        {allCourses.instructor.name}
                      </Link>
                    </p>
                  </div>
                  <div className="contantCart">
                    <h3>{t("get")}</h3>
                    <h4>{t("start")}</h4>
                    <h5 style={{ fontWeight: "bold", marginBottom: "14px" }}>
                      {allCourses.price > 0
                        ? "EG" + allCourses.price
                        : t("free")}
                    </h5>
                    {allCourses.is_purchased ? (
                      <Link
                        href={`/courseContent/${allCourses.last_watched_lesson_id ? allCourses.last_watched_lesson_id : allCourses.chapters[0]?.lessons[0]?.id ?? null}`}
                        className="btn_page"
                      >
                        {t("continue")}
                      </Link>
                    ) : (
                      <Link
                        href={`/checkOut?id=${params.id}`}
                        className="btn_page"
                      >
                        {t("apply")}
                      </Link>
                    )}

                    <ul>
                      {allCourses.users_count > 0 && (
                        <li>
                          <img
                            src="/images/details/copywriting.svg"
                            alt="copywriting"
                          />
                          <p>
                            {allCourses.users_count} {t("students")}
                          </p>
                        </li>
                      )}
                      {allCourses.video_lessons_count > 0 && (
                        <li>
                          <img src="/images/details/video.svg" alt="video" />
                          <p>
                            {allCourses.video_lessons_count} {t("videos")}
                          </p>
                        </li>
                      )}
                      {allCourses.exams_count > 0 && (
                        <li>
                          <img src="/images/details/test.svg" alt="test" />
                          <p>
                            {allCourses.exams_count} {t("exams")}
                          </p>
                        </li>
                      )}

                      {allCourses.article_lessons_count > 0 && (
                        <li>
                          <img
                            src="/images/details/copywriting.svg"
                            alt="copywriting"
                          />
                          <p>
                            {allCourses.article_lessons_count} {t("article")}
                          </p>
                        </li>
                      )}

                      <li>
                        <img
                          src="/images/details/smart-devices.svg"
                          alt="smart-devices"
                        />
                        <p>{t("access")}</p>
                      </li>
                      <li>
                        <img src="/images/details/award.svg" alt="award" />
                        <p>{t("certificate")}</p>
                      </li>
                      <li>
                        <img
                          src="/images/details/infinity.svg"
                          alt="infinity"
                        />
                        <p>{t("lifetime")}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="part2 ">
                  {/*TODO*/}
                  {allCourses.learn && (
                    <div className="part">
                      <h2 className="headDetails">{t("learn")}</h2>
                      <div className="learn">
                        <ul className="row">
                          {getLocal(allCourses.learn)?.map((item, i) => {
                            return (
                              <li className="col-md-5" key={i}>
                                <img
                                  src="/images/details/true.svg"
                                  alt="true"
                                />
                                <p>{item}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/*TODO*/}
                  {allCourses.gain && (
                    <div className="part">
                      <h2 className="headDetails">{t("gain")}</h2>
                      <div className="skills">
                        <ul>
                          {getLocal(allCourses.gain)?.map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="part">
                    <div className="course_Content">
                      <h2 className="headDetails">{t("content")}</h2>
                      <h3>6 sections • 32 lectures • 1h 15m total length</h3>
                      <div className="all_Course_Content">
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample2"
                        >
                          {allCourses.chapters.map((chapter) => {
                            return (
                              <div className="accordion-item" key={chapter.id}>
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#flush-collapse${chapter.id}`}
                                    aria-expanded="false"
                                    aria-controls={`flush-collapse${chapter.id}`}
                                  >
                                    {getLocal(chapter.name) }
                                  </button>
                                  <p>
                                    {chapter.lessons.length} lectures •{" "}
                                    {convertMinutesToHours(
                                      getCount(chapter.lessons, "duration")
                                    )}
                                  </p>
                                </h2>
                                <div
                                  id={`flush-collapse${chapter.id}`}
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionFlushExample2"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      {chapter.lessons.map((lesson) => {
                                        return (
                                          <li>
                                            <div>
                                              <img
                                                src={`/images/details/${
                                                  lesson.type === "video"
                                                    ? "video.svg"
                                                    : "test.svg"
                                                }`}
                                                alt={lesson.type}
                                              />
                                              <p>{getLocal(lesson.name) }</p>
                                            </div>
                                            <span>
                                              {" "}
                                              {convertMinutesToHours(
                                                lesson.duration
                                              )}
                                            </span>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {allCourses?.requirements && (
                    <div className="part">
                      <div className="description">
                        <h2 className="headDetails">{t("requirements")}</h2>
                        <p>{ getLocal(allCourses.requirements) }</p>
                      </div>
                    </div>
                  )}
                  {allCourses.description && (
                    <div className="part">
                      <div className="description">
                        <h2 className="headDetails">{t("description")}</h2>
                        <p>{getLocal(allCourses.description) }</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="part3 container">
                <div className="box">
                  <img
                    src="/images/details/certificate.webp"
                    className="img_box"
                    alt="certificate"
                  />
                  <h2>{t("earn")}</h2>
                  <p>{t("resume")}</p>
                  <h3>{t("hardCopy")}</h3>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default CourseDetails;
