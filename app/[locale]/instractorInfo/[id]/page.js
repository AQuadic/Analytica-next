"use client";
import ItemCourse from "@/components/ItemCourse";
import {getInstractor} from "@/components/useAPI/GetUser";
import React, {useEffect, useState} from "react";


// export const metadata = {
//   title: 'analytica | INSTRUCTOR',
// }
function InstractorInfo({params}) {


    const [instractor, setInstractor] = useState();

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
            <section className="InstractorInfo container">
                <div className="part1">
                    <div className="info">
                        <img src={instractor?.image?.url ? instractor.image.url : "/images/persone.webp"}
                             className="person" alt="persone"/>
                        <div className="info_about">
                            <h2>INSTRUCTOR</h2>
                            <h3>{instractor?.name}</h3>
                            {
                                instractor?.title?.en && <h4>{instractor?.title?.en}</h4>
                            }
                        </div>
                    </div>
                    <div className="achievement">
                        <div className="part">
                            <img src="/images/icons/star2.webp" alt="stars"/>
                            <h5>
                                4.5 <span></span>
                            </h5>
                        </div>
                        <div className="part">
                            <img src="/images/icons/online-training1.webp" alt="training"/>
                            <h5>
                                150 <span>Trainees</span>
                            </h5>
                        </div>
                        <div className="part">
                            <img src="/images/icons/clock.webp" alt="clock"/>
                            <h5>
                                150 <span>Hours</span>
                            </h5>
                        </div>
                    </div>
                    {
                        instractor?.about?.en && <div className="aboutME">
                            <h3>About me</h3>
                            <p>
                                {instractor.about.en}
                            </p>
                        </div>
                    }

                </div>

                <div className="part2">
                    <h3>Follow Me</h3>
                    <ul>
                        {instractor?.socials?.facebook && <li>
                            <a href={`https://www.facebook.com/${instractor.socials.facebook}`}>
                                <img src="/images/media/face.webp" alt="facebook"/>
                                <p>{instractor.socials.facebook}</p>
                            </a>
                        </li>}

                        {instractor?.socials?.linkedin && <li>
                            <a href={`https://www.linkedin.com/in/${instractor.socials.linkedin}`}>
                                <img src="/images/media/linkedin2.webp" alt="linkedin"/>
                                <p>{instractor.socials.linkedin}</p>
                            </a>
                        </li>}

                        {instractor?.socials?.instagram && <li>
                            <a href={`https://www.instagram.com/${instractor.socials.instagram}`}>
                                <img src="/images/media/insta2.webp" alt="instagram"/>
                                <p>{instractor.socials.instagram}</p>
                            </a>
                        </li>}

                        {instractor?.socials?.twitter && <li>
                            <a href={`https://twitter.com/${instractor.socials.twitter}`}>
                                <img src="/images/media/twiiter2.webp" alt="twiiter"/>
                                <p>{instractor.socials.twitter}</p>
                            </a>
                        </li>}

                    </ul>
                </div>
            </section>
            {
                instractor?.courses &&
                <section className="services container m60">
                    <h2 style={{fontFamily: "DM Sans", fontSize: "20px"}}>My Courses</h2>

                    <div className="allServices" style={{justifyContent: "flex-start"}}>
                        {
                            instractor.courses.map((course) => {
                                return (
                                    <ItemCourse
                                        key={course.id}
                                        id={course.id}
                                        title={course.name.en}
                                        imageCourse={course.image.url}
                                        star="4.8"
                                        //dec={course.instructor.name}
                                        newsalary={course.price ? "EG " + course.price : "free"}
                                    />
                                )
                            })
                        }

                    </div>
                </section>

            }

        </>
    );
}

export default InstractorInfo;
