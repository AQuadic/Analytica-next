"use client";
import { navState } from "@/atoms";
import {
  getOneCourse,
  getOneLessons,
} from "@/components/useAPI/CorsesApi/GetCourses";
import { useLocale, useTranslations } from "next-intl";

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import api from "../../api";
import Cookies from "js-cookie";
import Thanks from "@/components/Thanks";
import { getLocal } from "@/components/useAPI/GetUser";
import Link from "next/link";
import { iterate } from "localforage";
// export const metadata = {
//   title: 'analytica | courseContent',
// }
function page({ params }) {
  const [openClose, setOpenClose] = useState(false);
  const [content, setContent] = useState("one");
  const [contentID, setContentID] = useState(1);
  const [ChaptersID, setChaptersID] = useState();
  const [Video, setVideo] = useState();

  const [ContentChapter, setContentChapter] = useState([]);
  const [Youtube, setYoutube] = useState(false);
  const [IDYoutube, setIDYoutube] = useState("");
  const [IndexNext, setIndexNext] = useState();
  const [IndexPrev, setIndexPrev] = useState();
  const [Lessons, setLessons] = useState([]);
  const [LessonsChapters, setLessonsChapters] = useState([]);
  const [AllLessonsInAllChapters, setAllLessonsInAllChapters] = useState([]);
  const [CurrentChapters, setCurrentChapters] = useState([]);
  const [allChapters, setAllChapters] = useState([]);
  const [IsUser, setIsUser] = useRecoilState(navState);
  const locale = useLocale();
  const t2 = useTranslations("Teach");
  const t = useTranslations("Video");

  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");

  const HandelContent = (e) => {
    setContent(e);
  };
  useEffect(() => {
    FetchDataOFOneLessons();
  }, []);
  useEffect(() => {
    FetchDataOFOneCourse(ChaptersID);
  }, [contentID, ChaptersID]);

  // Function to store all the lessons in state
  const storeLessonsInState = (data) => {
    const allLessons = data.flatMap((item) => item.lessons);

    setAllLessonsInAllChapters(allLessons);
    allLessons.map((lesson, i) => {
      if (+lesson.id === +params.id) {
        setIndexNext(i + 1);
        setIndexPrev(i - 1);
      } else return;
    });
  };

  const FetchDataOFOneCourse = async (e) => {
    const AllCourses = await getOneCourse(e, IsUser);
    if (AllCourses.error) {
      console.log(AllCourses.error);
    }
    console.log(AllCourses);
    setAllChapters(AllCourses.chapters);
    setLessonsChapters(
      AllCourses.chapters?.filter((item) => item.id === +contentID)[0].lessons
    );
    storeLessonsInState(AllCourses.chapters);

    setCurrentChapters(
      AllCourses.chapters?.filter((item) => item.id === +contentID)[0]
    );
  };
  const FetchDataOFOneLessons = async () => {
    const AllCourses = await getOneLessons(params.id, IsUser);
    if (AllCourses.error) {
      setErrorBloked(AllCourses.error);
      setBloked(true);
    }
    setLessons(AllCourses.lesson);
    setContentChapter(AllCourses.lesson.content);
    setChaptersID(AllCourses.lesson.course_id);
    setContentID(AllCourses.lesson.chapter_id);
    setVideo(AllCourses.lesson.video_links[0]);
  };

  useEffect(() => {
    getVideo();
  }, [Video]);
  const getVideo = () => {
    if (Video) {
      const url = new URL(Video);
      const baseDomain = "https://www.youtube.com";
      if (url.origin === baseDomain) {
        setYoutube(true);
        const regexPattern =
          /(?:\/|\=|youtu\.be\/|embed\/|watch\?v=|&v=|youtu\.be\/|\/v\/|\/e\/|\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = Video.match(regexPattern);
        if (match) {
          setIDYoutube(match[1]);
          return match[1];
        }
      } else {
        setYoutube(false);
      }
    }
  };
  const getCount = (num) => {
    const allcount = num.reduce(
      (accumulator, currentValue) => accumulator + currentValue.duration,
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

  const handelTime = () => {
    const starttime = 5;
    let secound = starttime * 60;
    const myTimeout = setInterval(udtime, 1000);

    function udtime() {
      let sec = secound;

      if (sec == "00") {
        clearInterval(myTimeout);
        handelAddDevices();
      }

      secound--;
    }
  };
  useEffect(() => {
    handelTime();
  }, []);

  const handelAddDevices = () => {
    const po = api
      .post(
        `/api/v1/users/lessons/${params.id}/watched`,
        {},
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
        console.log(res);
      });
  };

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
          <section className="videoCourse container">
            <div
              className={`headVideo  ${openClose ? "open" : ""} `}
              id="headVideo"
            >
              {Video ? (
                <>
                  {" "}
                  {Lessons?.id && (
                    <div className="part2">
                      <h1>{getLocal(locale, Lessons?.chapter?.name)}</h1>
                      <h2>{getLocal(locale, Lessons?.name)}</h2>
                      <div className="boxVideo">
                        {Youtube ? (
                          <iframe
                            style={{ width: "100%", height: "100%" }}
                            src={`https://www.youtube-nocookie.com/embed/${IDYoutube}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <iframe
                            style={{ width: "100%", height: "100%" }}
                            src={Video}
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                      {Lessons.files.length > 0 ? (
                        <div className="assignments">
                          <h3>{t("assignments")}</h3>

                          {Lessons.files.map((file, i) => {
                            return (
                              <div className="file-container">
                                <div className="file-title" key={i}>
                                  <a
                                    href={file.url}
                                    className=" "
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Download PDF
                                  </a>
                                </div>
                              </div>
                            );
                          })}

                          <div className="btnExam">
                            <Link href={`/quiz/${params.id}`}>Go To Exam</Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {ContentChapter && (
                    <div
                      className="part2"
                      dangerouslySetInnerHTML={{
                        __html: getLocal(locale, ContentChapter),
                      }}
                    ></div>
                  )}
                </>
              )}

              <div className="part1 ">
                <button
                  className="arrowVideo"
                  id="openClose"
                  onClick={() => setOpenClose(!openClose)}
                >
                  {" "}
                  <img src="/images/icons/arrowVideo.svg" alt="arrowVideo" />
                </button>
                <div
                  className="contantOne"
                  style={{ display: content === "one" ? "block" : "none" }}
                  id="contantOne"
                >
                  <h3>{t("content")}</h3>
                  <ul>
                    {allChapters?.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="lecture"
                          onClick={() => {
                            HandelContent("two");
                            setContentID(item.id);
                          }}
                        >
                          <h4>{getLocal(locale, item.name)}</h4>
                          <p>
                            0/{item.lessons.length} |{" "}
                            {convertMinutesToHours(getCount(item.lessons))}{" "}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {allChapters?.length > 0 && (
                  <div
                    className="contantTwo"
                    id="contantTwo"
                    style={{ display: content === "two" ? "block" : "none" }}
                  >
                    <h3>{getLocal(locale, CurrentChapters?.name)}</h3>
                    <button
                      className="back"
                      id="back"
                      onClick={() => HandelContent("one")}
                    >
                      <img src="/images/icons/ArrowBack.svg" alt="ArrowBack" />
                      <p>{t("back")}</p>
                    </button>
                    <ul>
                      {LessonsChapters?.length > 0 &&
                        LessonsChapters.map((item) => {
                          return (
                            <li key={item.id}>
                              <form className="infoChapter">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckCheckedDisabled"
                                    disabled
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckCheckedDisabled"
                                  >
                                    {getLocal(locale, item.name)}
                                  </label>
                                  <div className="clock">
                                    <img
                                      src="/images/icons/copywriting.svg"
                                      alt="copywriting"
                                    />
                                    <p>{item.duration}min</p>
                                  </div>
                                </div>
                              </form>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {AllLessonsInAllChapters?.length > 0 ? (
              <div className="endVideo">
                {/* JUST A WORK AROUND THIS NEEDS TO BE IMPLEMENTED !!!*/}

                {IndexPrev >= 0 ? (
                  AllLessonsInAllChapters[IndexPrev] ? (
                    <a
                      className="btn_page2"
                      href={`/courseContent/${
                        AllLessonsInAllChapters?.length > 0
                          ? AllLessonsInAllChapters[IndexPrev]?.id
                          : null
                      }`}
                    >
                      {/*${LessonsChapters[LessonsChapters?.map(e => e.id).indexOf(Lessons?.id) - 1]?.id ?? null}*/}
                      <img src="/images/icons/Arrow1.svg" alt="Arrow" />
                      <p>{t("previous")}</p>
                    </a>
                  ) : null
                ) : null}

                {AllLessonsInAllChapters[IndexNext] ? (
                  <>
                    <a
                      className="btn_page"
                      href={`/courseContent/${
                        AllLessonsInAllChapters?.length > 0
                          ? AllLessonsInAllChapters[IndexNext]?.id
                          : null
                      }`}
                    >
                      {/*${LessonsChapters[LessonsChapters?.map(e => e.id).indexOf(Lessons?.id) + 1]?.id ?? null}*/}
                      <p>{t("next")}</p>
                      <img src="/images/icons/Arrow2.svg" alt="Arrow" />
                    </a>
                  </>
                ) : null}
              </div>
            ) : null}
          </section>
        </>
      )}
    </>
  );
}

export default page;
