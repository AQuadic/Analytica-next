"use client";
import FAQ from "@/components/FAQ";
import ItemCourse from "@/components/ItemCourse";
import Swiper1 from "@/components/Swiper1";
import React, {useEffect, useState} from "react";

function page({params}) {
    const [instractor, setInstractor] = useState();
    console.log(params);
    useEffect(() => {
        FetchDataOFInstractorInfo();
    }, []);
    const FetchDataOFInstractorInfo = async () => {
        const InstractorInfo = await getInstractor(params.id);
        if (!InstractorInfo) console.log(InstractorInfo?.message);
        setInstractor(InstractorInfo);
    };
    console.log(instractor);

    return (
        <>
            <section className="instructor_head m80">
                <h1>Design Thinking for Beginners: Develop Innovative Ideas</h1>
                <p>
                    Apply the five-step design thinking process to identify and creatively
                    solve problems using a human-centered approach.
                </p>
                <a href="" className="btn_page3" style={{display: "none"}}>
                    Start Now
                </a>
            </section>

            <section className="instructor_about container m80">
                <div className="content">
                    <div className="instructor_user">
                        <img src="./images/persone.webp" alt="user"/>
                        <h2>Muhammed Ahmed</h2>
                        <p>UI UX Designer</p>
                    </div>
                    <div className="instructor_info">
                        <h3>INSTRUCTOR</h3>
                        <p>
                            Hello ,i'm Muhammed Ahmed ,UI/UX Designer and ui Developer .I have
                            worked in web interface design and mobile application design .I
                            also worked in the graphic design field for several years.., also
                            worked as an instructor ,, explaining the design approach and user
                            experience.. I have a passion for simplifying the science of
                            design and user experience and presenting it to students in the
                            simplest form..
                        </p>
                    </div>
                </div>
            </section>
            <section className="instructor_about instructor_about2 m80">
                <div className="container">
                    <div className="content">
                        <div className="part1">
                            <img src="./images/instructorScreen/about1.webp" alt="about1"/>
                        </div>
                        <div className="instructor_info">
                            <h3>TITLE</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
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
                                <source src="video.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="instructor_info">
                        <h3>TITLE</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
            <section className="services services2 container m80">
                <h2>Graphic Courses</h2>
                <div className="allServices">
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="21"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        oldsalary="E£679.99"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="22"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="23"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="24"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        newsalary="E£1,599.99"
                    />
                </div>
            </section>
            <section className="services services2 container m80">
                <h2>UI UX Courses</h2>
                <div className="allServices">
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="25"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        oldsalary="E£679.99"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="26"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="27"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="24"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        oldsalary="E£679.99"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="27"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        newsalary="E£1,599.99"
                    />
                    <ItemCourse
                        link2="/i/courseDetails"
                        title="Learn python: The Complete Python Programming Course"
                        image="24"
                        star="4.8"
                        dec="Avinash jain, The Codex"
                        oldsalary="E£679.99"
                        newsalary="E£1,599.99"
                    />
                </div>
            </section>
            <Swiper1/>
            <FAQ/>
        </>
    );
}

export default page;
