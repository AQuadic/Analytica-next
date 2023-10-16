"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ItemCourse from "@/components/ItemCourse";
import {
  getHomePage,
  getHomeSections,
  getLocal,
} from "@/components/useAPI/GetUser";
import {
  getAllCourses,
  getAllCoursesWithUser,
} from "@/components/useAPI/CorsesApi/GetCourses";
import { useRecoilState } from "recoil";
import { navState } from "@/atoms";
import { useTranslations } from "next-intl";
import Thanks from "@/components/Thanks";
import Cookies from "js-cookie";
import { Skeleton } from "@mantine/core";

export default function Home({ params: { locale } }) {
  const [allCourses, setAllCourses] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [IsUser, setIsUser] = useRecoilState(navState);
  const t = useTranslations("Index");
  const t2 = useTranslations("CompCourse");
  const t3 = useTranslations("Teach");
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");

  useEffect(() => {
    FetchDataOFHome();
    FetchDataOFHomePage();
    if (IsUser) {
      FetchDataOFAllCoursesWithUser();
      // FetchDataOFDevices()
      console.log("yes user");
    }
    if (!IsUser) {
      FetchDataOFAllCourses();
    }
  }, []);

  const FetchDataOFAllCourses = async () => {
    const AllCourses = await getAllCourses();
    if (AllCourses.error) {
      setErrorBloked(AllCourses.error);
      setBloked(true);
    }
    setAllCourses(AllCourses.data);
  };

  const FetchDataOFAllCoursesWithUser = async () => {
    const AllCourses = await getAllCoursesWithUser();
    if (AllCourses.error) {
      setErrorBloked(AllCourses.error);
      setBloked(true);
    }
    setAllCourses(AllCourses.data);
  };
  console.log(allCourses);

  console.log(homeData);
  const FetchDataOFHomePage = async () => {
    const AllData = await getHomeSections(IsUser);
    if (AllData.error) {
      setErrorBloked(AllData.error);
      setBloked(true);
    }
    setHomeData(AllData);
  };

  const FetchDataOFHome = async () => {
    const AllData = await getHomePage();
    if (AllData.error) {
      setErrorBloked(AllData.error);
      setBloked(true);
    }
    console.log(AllData);
  };

  return (
    <>
      {Bloked ? (
        <>
          <Thanks
            title={t3("noAccess")}
            dec={ErrorBloked}
            link={"/myCourses"}
            title2={t3("backTo")}
            Bloked={true}
          />
        </>
      ) : (
        <>
          <section className="about m60">
            <div className="container allAbout">
              <div className="part1">
                <h1>
                  <span className="mainColor">{t("title")}</span>
                  <span className="imgWord">{t("title2")},</span> <br />
                  {t("title3")} <span className="mainColor">{t("title4")}</span>
                </h1>
                <p>{t("dec")}</p>
                <Link href="courses" className="btn_page wow fadeInDown">
                  {t("start")}
                </Link>
                <div className="trusted">
                  <h2 className="headtitle head3 wow fadeInDown">
                    {" "}
                    {t("trusted")}
                  </h2>
                  <div className="images_Trusted">
                    <img src="/images/about/image1.webp" alt="images_Trusted" />
                    <img src="/images/about/image2.webp" alt="images_Trusted" />
                    <img src="/images/about/image3.webp" alt="images_Trusted" />
                    <img src="/images/about/image4.webp" alt="images_Trusted" />
                    <img src="/images/about/image5.webp" alt="images_Trusted" />
                  </div>
                </div>
              </div>
              <div className="part2 wow fadeInUp">
                <img
                  src="/images/about/herosectionphoto.webp"
                  alt="herosectionphoto"
                />
              </div>
            </div>
          </section>
          {!allCourses.length > 0 && (
            <div className="container">
              <div className="loadItems">
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
                <div className="item">
                  <Skeleton height={110} mb="xl" />
                  <Skeleton height={20} radius="xl" />
                  <Skeleton height={20} mt={6} radius="xl" />
                  <Skeleton height={30} width={100} mt={6} radius="xl" />
                </div>
              </div>
            </div>
          )}
          {allCourses?.length ? (
            <section className="services services_content container m60">
              <h2 className="headtitle wow fadeInDown">{t("recommended")}</h2>
              <p className="p_page wow fadeInUp">
                Choose from 204.000 online video courses with new additions
                published every month
              </p>
              <div className="allServices">
                {allCourses
                  .filter((item) => item.is_active != 0)
                  .map((course) => {
                    return (
                      <ItemCourse
                        key={course.id}
                        id={course.id}
                        title={getLocal(locale, course.name)}
                        imageCourse={course.image?.url}
                        star="4.8"
                        dec={course.instructor?.name}
                        is_purchased={course.is_purchased ? true : false}
                        last_watched={course.last_watched_lesson_id}
                        newsalary={
                          course.price ? "EG " + course.price : t2("free")
                        }
                      />
                    );
                  })}
              </div>
            </section>
          ) : null}

          <section className="top m60">
            <div className="container">
              <h2 className="headtitle wow fadeInDown">{t("top")}</h2>
              <p className="p_page wow fadeInUp">
                Choose from 204.000 online video courses with new additions
                published every month
              </p>
              <div className="top_Categories">
                <div className="part">
                  <img src="/images/top/creativity.webp" alt="creativity" />
                  <h3>Design</h3>
                </div>
                <div className="part">
                  <img
                    src="/images/top/developmentphoto.webp"
                    alt="developmentphoto"
                  />
                  <h3>Development</h3>
                </div>
                <div className="part">
                  <img src="/images/top/marketing.webp" alt="marketing" />
                  <h3>Marketing</h3>
                </div>
                <div className="part">
                  <img src="/images/top/music.webp" alt="music" />
                  <h3>Music</h3>
                </div>
              </div>
            </div>
          </section>
          {!homeData && (
            <>
              <div className="container">
                <div
                  className="loadItems"
                  style={{ justifyContent: "flex-start" }}
                >
                  <div className="item" style={{ width: "90%" }}>
                    <Skeleton height={20} width={"90%"} mb="xl" />
                    <Skeleton height={20} width={"80%"} radius="xl" />
                  </div>
                </div>
                <div className="loadItems">
                  <div className="item">
                    <Skeleton height={110} mb="xl" />
                    <Skeleton height={20} radius="xl" />
                    <Skeleton height={20} mt={6} radius="xl" />
                    <Skeleton height={30} width={100} mt={6} radius="xl" />
                  </div>
                  <div className="item">
                    <Skeleton height={110} mb="xl" />
                    <Skeleton height={20} radius="xl" />
                    <Skeleton height={20} mt={6} radius="xl" />
                    <Skeleton height={30} width={100} mt={6} radius="xl" />
                  </div>
                  <div className="item">
                    <Skeleton height={110} mb="xl" />
                    <Skeleton height={20} radius="xl" />
                    <Skeleton height={20} mt={6} radius="xl" />
                    <Skeleton height={30} width={100} mt={6} radius="xl" />
                  </div>
                </div>
              </div>
            </>
          )}
          {homeData &&
            homeData
              .filter((item) => item.courses.length !== 0)
              .map((part) => {
                return (
                  <section
                    className="services services_content container m60"
                    key={part.id}
                  >
                    <h2 className="headtitle wow fadeInDown">
                      {getLocal(locale, part.name)}
                    </h2>
                    <p className="p_page wow fadeInUp">
                      {getLocal(locale, part.description) &&
                        getLocal(locale, part.description)}
                    </p>
                    <div className="allServices">
                      {part.courses
                        .filter((item) => item.is_active != 0)
                        .map((course) => {
                          return (
                            <ItemCourse
                              key={course.id}
                              id={course.id}
                              title={getLocal(locale, course.name)}
                              imageCourse={course.image.url}
                              star="4.8"
                              is_purchased={course.is_purchased ? true : false}
                              dec={course.instructor?.name}
                              last_watched={course.last_watched_lesson_id}
                              newsalary={
                                course.price ? "EG " + course.price : t2("free")
                              }
                            />
                          );
                        })}
                    </div>
                  </section>
                );
              })}
          {/*<section className="live m60">*/}
          {/*    <div className="container">*/}
          {/*        <h2 className="headtitle wow fadeInDown">*/}
          {/*            Create, manage, and market your learning environment with advanced*/}
          {/*            features like*/}
          {/*        </h2>*/}
          {/*        <div className="all_Live row">*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*            <div className="part col-md-4 col-sm-6 col-12">*/}
          {/*                <img src="/images/live.svg" alt="live"/>*/}
          {/*                <h3>Live lessons and events</h3>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</section>*/}

          <section className="become container m60">
            <div className="box">
              <img
                src="/images/become.webp"
                className="img_become"
                alt="become"
              />
              <div className="info_become">
                <h2> {t("become")}</h2>
                <p>{t("becomeDec")}</p>
                <Link href="instructor" className="btn_page2">
                  {t("start")}
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
