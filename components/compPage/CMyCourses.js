"use client";
import ItemCourse from "@/components/ItemCourse";
import {getMyCourses} from "@/components/useAPI/CorsesApi/GetCourses";
import {useTranslations} from "next-intl";
import React, {useEffect, useState} from "react";


function CMyCourses() {
    const [active, setActive] = useState("progress");
    const [myCourses, setMyCourses] = useState([]);
    const ActiveBtn = (e) => [setActive(e)];
    const t = useTranslations("MyCourses");
    useEffect(() => {
        FetchDataOFMyCourses()
    }, [])

    const FetchDataOFMyCourses = async () => {

        const MyCourses = await getMyCourses();
        if (!MyCourses) console.log(MyCourses?.message)
        setMyCourses(MyCourses)
    }
    console.log(myCourses);


    return (
        <>
            <section className="myCourses  m60">
                <h1 className=" container">{t('myCourses')}</h1>
                <div className="typeCourses">
                    <div className=" container">
                        <div className="parts">
                            <button
                                className={active === "progress" ? "active" : ""}
                                onClick={() => ActiveBtn("progress")}
                            >
                                {t('inProgress')}
                            </button>
                            <button
                                className={active === "completed" ? "active" : ""}
                                onClick={() => ActiveBtn("completed")}
                            >
                                {t('completed')}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="services container m60">
                    <div className="allServices">
                        {
                            myCourses?.map((course) => {
                                return (
                                    <ItemCourse
                                        title={course.name.en}
                                        dec={course.instructor.name}
                                        imageCourse={course.image.url}
                                        Myprogress={true}
                                        numProgress="42%"
                                        key={course.id}
                                        id={course.id}
                                        NoPrice={true}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default CMyCourses;
