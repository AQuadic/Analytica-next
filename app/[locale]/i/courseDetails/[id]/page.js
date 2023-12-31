"use client";
import FAQ from "@/components/FAQ";
import Thanks from "@/components/Thanks";
import { getOneCourse } from "@/components/useAPI/CorsesApi/GetCourses";
import { getLocal } from "@/components/useAPI/GetUser";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const t2 = useTranslations("Teach");
  const locale = useLocale();
  const [allCourses, setAllCourses] = useState();
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const [Video, setVideo] = useState();
  const [Youtube, setYoutube] = useState(false);
  const [IDYoutube, setIDYoutube] = useState("");
  useEffect(() => {
    FetchDataOFOneCourse();
  }, []);
  const FetchDataOFOneCourse = async () => {
    const AllCourses = await getOneCourse(params.id);
    if (AllCourses.error) {
      setErrorBloked(AllCourses.error);
      setBloked(true);
    }
    setAllCourses(AllCourses);
    setVideo(AllCourses.introduction_video);
  };
  console.log(allCourses);

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
        allCourses && (
          <>
            <div className="coursesDetails coursesDetails2">
              <div className="part1">
                <div className="content container">
                  <div className="contantAbout">
                    <h2> {getLocal(locale, allCourses.name)}</h2>
                    {allCourses.short_description && (
                      <h3>{getLocal(locale, allCourses.short_description)}</h3>
                    )}
                    <p>
                      Instructor:{" "}
                      <Link href={`/i/${Cookies.get("nameUrl")}`}>
                        {allCourses.instructor.name}
                      </Link>
                    </p>
                  </div>
                  <div className="contantCart">
                    <h3>Get started today</h3>
                    <h4>Start your application or request more information.</h4>
                    <Link href="/checkOut" className="btn_page3">
                      Apply Now
                    </Link>
                    <ul>
                      {allCourses.users_count > 0 && (
                        <li>
                          <img
                            src="/images/details/copywriting.svg"
                            alt="copywriting"
                          />
                          <p>{allCourses.users_count} Enrolled Students</p>
                        </li>
                      )}
                      {allCourses.videos_count > 0 && (
                        <li>
                          <img src="/images/details/video.svg" alt="video" />
                          <p>{allCourses.videos_count} videos</p>
                        </li>
                      )}
                      {allCourses.exams_count > 0 && (
                        <li>
                          <img src="/images/details/test.svg" alt="test" />
                          <p>{allCourses.exams_count} Count Exams</p>
                        </li>
                      )}
                      {allCourses.article_lessons_count > 0 && (
                        <li>
                          <img
                            src="/images/details/copywriting.svg"
                            alt="copywriting"
                          />
                          <p>{allCourses.article_lessons_count} article</p>
                        </li>
                      )}

                      <li>
                        <img
                          src="/images/details/smart-devices.svg"
                          alt="smart-devices"
                        />
                        <p>Access on mobile and PC</p>
                      </li>
                      <li>
                        <img src="/images/details/award.svg" alt="award" />
                        <p>Certificate of completion</p>
                      </li>
                      <li>
                        <img
                          src="/images/details/infinity.svg"
                          alt="infinity"
                        />
                        <p>Full lifetime access</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="part2 ">
                  {allCourses.learn && (
                    <div className="part">
                      <h2 className="headDetails">What you'll learn</h2>
                      <div className="learn">
                        <ul className="row">
                          {getLocal(locale, allCourses.learn).map((item, i) => {
                            return (
                              <li className="col-md-5" key={i}>
                                <img
                                  src="/images/instructorScreen/true.svg"
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
                  {Video && (
                    <div className="part">
                      <div className="video-wrapper">
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
                    </div>
                  )}

                  {allCourses.gain && (
                    <div className="part">
                      <h2 className="headDetails">What you'll learn</h2>
                      <div className="skills">
                        <ul>
                          {getLocal(locale, allCourses.gain).map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  )}

                  {allCourses.lessons && (
                    <div className="part">
                      <div className="course_Content">
                        <h2 className="headDetails">Course Content</h2>
                        <h3>6 sections • 32 lectures • 1h 15m total length</h3>
                        <div className="all_Course_Content">
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample2"
                          >
                            {allCourses.lessons.map((lesson) => {
                              return (
                                <div className="accordion-item" key={lesson.id}>
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#flush-collapse${lesson.id}`}
                                      aria-expanded="false"
                                      aria-controls={`flush-collapse${lesson.id}`}
                                    >
                                      {getLocal(locale, lesson.name)}
                                    </button>
                                  </h2>
                                  <div
                                    id={`flush-collapse${lesson.id}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample2"
                                  >
                                    <div className="accordion-body">
                                      <ul>
                                        {lesson.videos_count > 0 && (
                                          <li>
                                            <img
                                              src="/images/details/video.svg"
                                              alt="video"
                                            />
                                            <p>{lesson.videos_count} videos</p>
                                          </li>
                                        )}
                                        {lesson.exams_count > 0 && (
                                          <li>
                                            <img
                                              src="/images/details/test.svg"
                                              alt="test"
                                            />
                                            <p>
                                              {lesson.exams_count} Count Exams
                                            </p>
                                          </li>
                                        )}
                                        {lesson.files_count > 0 && (
                                          <li>
                                            <img
                                              src="/images/details/copywriting.svg"
                                              alt="copywriting"
                                            />
                                            <p>{lesson.files_count} article</p>
                                          </li>
                                        )}

                                        <li>
                                          <img
                                            src="/images/details/smart-devices.svg"
                                            alt="smart-devices"
                                          />
                                          <p>Access on mobile and PC</p>
                                        </li>
                                        <li>
                                          <img
                                            src="/images/details/award.svg"
                                            alt="award"
                                          />
                                          <p>Certificate of completion</p>
                                        </li>
                                        <li>
                                          <img
                                            src="/images/details/infinity.svg"
                                            alt="infinity"
                                          />
                                          <p>Full lifetime access</p>
                                        </li>
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
                  )}

                  <div className="part">
                    <div className="attach">
                      <h2 className="headDetails">ATTACHMENTS</h2>
                      <div className="all_attach">
                        <div className="part-attach">
                          <div className="info-attach">
                            <img
                              src="/images/quiz/file_type.webp"
                              className="attach-type"
                              alt="file_type"
                            />
                            <div className="dec-attach">
                              <h3>Brochure</h3>
                              <p>1.24 MB</p>
                            </div>
                          </div>
                          <button className="btn_page3">Download</button>
                        </div>
                        <div className="part-attach">
                          <div className="info-attach">
                            <img
                              src="/images/quiz/file_type.webp"
                              className="attach-type"
                              alt="file_type"
                            />
                            <div className="dec-attach">
                              <h3>Brochure</h3>
                              <p>1.24 MB</p>
                            </div>
                          </div>
                          <button className="btn_page3">Download</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {getLocal(locale, allCourses.requirements) && (
                    <div className="part">
                      <div className="description">
                        <h2 className="headDetails">Requirements</h2>
                        <p>{getLocal(locale, allCourses.requirements)}</p>
                      </div>
                    </div>
                  )}
                  {getLocal(locale, allCourses.description) && (
                    <div className="part">
                      <div className="description">
                        <h2 className="headDetails">Description</h2>
                        <p>{getLocal(locale, allCourses.description)}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <FAQ />
            </div>
          </>
        )
      )}
    </>
  );
}

export default page;
