"use client";
import FAQ from "@/components/FAQ";
import ItemCourse from "@/components/ItemCourse";
import Swiper1 from "@/components/Swiper1";
import Thanks from "@/components/Thanks";
import { getLocal, getOneInstractor } from "@/components/useAPI/GetUser";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const locale = useLocale();
  Cookies.set("nameUrl", params.id);
  const [instractor, setInstractor] = useState([]);
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const t2 = useTranslations("Teach");
  const [Video, setVideo] = useState();
  const [Youtube, setYoutube] = useState(false);
  const [IDYoutube, setIDYoutube] = useState("");
  console.log(params);
  useEffect(() => {
    FetchDataOFInstractorInfo();
  }, []);
  const FetchDataOFInstractorInfo = async () => {
    const InstractorInfo = await getOneInstractor(params.id);
    if (InstractorInfo.error) {
      setErrorBloked(InstractorInfo.error);
      setBloked(true);
    }
    setInstractor(InstractorInfo);
    setVideo(InstractorInfo.introduction_video);
  };
  console.log(instractor);

  const result =
    instractor?.courses &&
    Object.groupBy(
      instractor?.courses,
      ({ category }) => getLocal(locale, category?.name) ?? "كورسات اخري"
    );

  console.log(result);
  if (result) {
    for (let [key, value] of Object.entries(result)) {
      console.log(key, value);
    }
  }
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
        instractor && (
          <>
            {/* <section className="instructor_head m80">
      <h1>Design Thinking for Beginners: Develop Innovative Ideas</h1>
      <p>
        Apply the five-step design thinking process to identify and creatively
        solve problems using a human-centered approach.
      </p>
      <a href="" className="btn_page3" style={{ display: "none" }}>
        Start Now
      </a>
    </section> */}

            <section className="instructor_about container m80">
              <div className="content">
                <div className="instructor_user">
                  <img
                    src={
                      instractor.image?.url
                        ? instractor.image.url
                        : "/images/persone.webp"
                    }
                    alt="user"
                  />
                  <h2>{instractor.name}</h2>
                </div>
                <div className="instructor_info">
                  <h3>INSTRUCTOR</h3>
                  <p>
                    Hello ,i'm {instractor.name} ,
                    {getLocal(locale, instractor?.about)}
                  </p>
                </div>
              </div>
            </section>
            {Video && (
              <section className="photosSection m80">
                <h2>About Instructor</h2>
                <div className="videoAbout container">
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
              </section>
            )}

            <section className="instructor_about instructor_about2 m80">
              <div className="container">
                <div className="content">
                  <div className="part1">
                    <img
                      src="/images/instructorScreen/about1.webp"
                      alt="about1"
                    />
                  </div>
                  <div className="instructor_info">
                    <h3>TITLE</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="instructor_about container m80">
              <div className="content part-video">
                <div className="part1">
                  <div className="video-wrapper">
                    <video width="100%" height="361" controls>
                      <source src="video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="instructor_info">
                  <h3>TITLE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </section>
            {result &&
              Object.entries(result).map((obj, i) => {
                const key = obj[0];
                const value = obj[1];
                return (
                  <section className="services services2 container m80" key={i}>
                    <h2>{key}</h2>
                    <div className="allServices">
                      {value?.map((item) => {
                        return (
                          <ItemCourse
                            key={item.id}
                            link2={`/i/courseDetails/${item.id}`}
                            title={getLocal(locale, item.name)}
                            image="21"
                            imageCourse={item.image?.url}
                            star="4.8"
                            dec={instractor.name}
                            id={item.id}
                            newsalary={item.price}
                          />
                        );
                      })}
                    </div>
                  </section>
                );
                // do whatever you want with those values.
              })}

            <Swiper1 />
            <FAQ />
          </>
        )
      )}
    </>
  );
}

export default page;
