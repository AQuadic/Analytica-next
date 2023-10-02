"use client";
import styles from "./page.module.css";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import ItemCourse from "@/components/ItemCourse";
import {getHomePage, getHomeSections} from "@/components/useAPI/GetUser";
import {getAllCourses, getAllCoursesWithUser,} from "@/components/useAPI/CorsesApi/GetCourses";
import {useRecoilState} from "recoil";
import {navState} from "@/atoms";
import {useTranslations} from "next-intl";

import { Alert } from "react-bootstrap";
import Cookies from "js-cookie";

export default function Home({params: {locale}}) {
    const [allCourses, setAllCourses] = useState([]);
    const [homeData, setHomeData] = useState([]);
    const [IsUser, setIsUser] = useRecoilState(navState);
    const t = useTranslations("Index");

   


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
        if (!AllCourses) console.log(AllCourses?.message);
        setAllCourses(AllCourses.data);
    };

    const FetchDataOFAllCoursesWithUser = async () => {
        const AllCourses = await getAllCoursesWithUser();
        if (!AllCourses) console.log(AllCourses?.message);
        setAllCourses(AllCourses.data);
    };
    console.log(allCourses);

    console.log(homeData);
    const FetchDataOFHomePage = async () => {
        const AllData = await getHomeSections(IsUser);
        if (!AllData) console.log(AllData?.message);
        setHomeData(AllData);
    };

    const FetchDataOFHome = async () => {
        const AllData = await getHomePage();
        if (!AllData) console.log(AllData?.message);
        console.log(AllData);
    };
   
    const [show, setShow] = useState(true);
    
    return (
        <main className={styles.main}>
            <>
            {/*<Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
    </Alert>*/ }
            
                <section className="about m60">
                    <div className="container allAbout">
                        <div className="part1">
                            <h1>
                                <span className="mainColor">{t("title")}</span>
                                <span className="imgWord">{t("title2")},</span> <br/>
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
                                    <img src="/images/about/image1.webp" alt="images_Trusted"/>
                                    <img src="/images/about/image2.webp" alt="images_Trusted"/>
                                    <img src="/images/about/image3.webp" alt="images_Trusted"/>
                                    <img src="/images/about/image4.webp" alt="images_Trusted"/>
                                    <img src="/images/about/image5.webp" alt="images_Trusted"/>
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
                {allCourses.length ? (
                    <section className="services services_content container m60">
                        <h2 className="headtitle wow fadeInDown">Recommended for you</h2>
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
                                            title={course.name.en}
                                            imageCourse={course.image?.url}
                                            star="4.8"
                                            dec={course.instructor?.name}
                                            is_purchased={course.is_purchased?true:false}
                                            newsalary={course.price ? "EG " + course.price : "free"}
                                        />
                                    );
                                })}

                        </div>
                    </section>
                ) : null}

                <section className="top m60">
                    <div className="container">
                        <h2 className="headtitle wow fadeInDown">Top Categories</h2>
                        <p className="p_page wow fadeInUp">
                            Choose from 204.000 online video courses with new additions
                            published every month
                        </p>
                        <div className="top_Categories">
                            <div className="part">
                                <img src="/images/top/creativity.webp" alt="creativity"/>
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
                                <img src="/images/top/marketing.webp" alt="marketing"/>
                                <h3>Marketing</h3>
                            </div>
                            <div className="part">
                                <img src="/images/top/music.webp" alt="music"/>
                                <h3>Music</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {homeData &&
                    homeData
                        .filter((item) => item.courses.length !== 0)
                        .map((part) => {
                            return (
                                <section
                                    className="services services_content container m60"
                                    key={part.id}
                                >
                                    <h2 className="headtitle wow fadeInDown">{part.name.en}</h2>
                                    <p className="p_page wow fadeInUp">
                                        {part.description && part.description?.en}
                                    </p>
                                    <div className="allServices">
                                        {part.courses
                                            .filter((item) => item.is_active != 0)
                                            .map((course) => {
                                                return (
                                                    <ItemCourse
                                                        key={course.id}
                                                        id={course.id}
                                                        title={course.name.en}
                                                        imageCourse={course.image.url}
                                                        star="4.8"
                                                        is_purchased={course.is_purchased?true:false}
                                                        //dec={course.instructor?.name}
                                                        newsalary={
                                                            course.price ? "EG " + course.price : "free"
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
        </main>
    );
}
