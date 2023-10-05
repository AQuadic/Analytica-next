"use client";
import ItemCourse from "@/components/ItemCourse";
import {getMyCourses} from "@/components/useAPI/CorsesApi/GetCourses";
import {useLocale, useTranslations} from "next-intl";
import React, {useEffect, useState} from "react";
import { getLocal } from "../useAPI/GetUser";
import Thanks from "../Thanks";


function CMyCourses() {
    const [active, setActive] = useState("progress");
    const [myCourses, setMyCourses] = useState([]);
    const [Bloked, setBloked] = useState(false);
    const [ErrorBloked, setErrorBloked] = useState("");
    const ActiveBtn = (e) => [setActive(e)];
    const t = useTranslations("MyCourses");
    const t2 = useTranslations("Teach");
    const locale = useLocale();
    useEffect(() => {
        FetchDataOFMyCourses()
    }, [])

    const FetchDataOFMyCourses = async () => {

        const MyCourses = await getMyCourses();
        if (MyCourses.error) {
            setErrorBloked(MyCourses.error);
            setBloked(true);
          }
        setMyCourses(MyCourses)
    }
    console.log(myCourses);


    return (
        <>
        {
       Bloked ? (
        <>
          <Thanks
            title={t2("noAccess")}
            dec={ErrorBloked}
            link={"/myCourses"}
            title2={t2("backTo")}
            Bloked={true}
          />
        </>
      ) :  <section className="myCourses  m60">
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

      {active!=="completed"? <><div className="allServices">
              {
                  myCourses.filter(item=>item.watch_progress!==1).map((course) => {
                      return (
                          <ItemCourse
                              title={getLocal(course.name) }
                              dec={course.instructor.name}
                              imageCourse={course.image.url}
                              Myprogress={true}
                              numProgress={course.watch_progress*100}
                              key={course.id}
                              id={course.id}
                              NoPrice={true}
                          />
                      )
                  })
              }
          </div></>:<>
          <div className="allServices">
              {
                  myCourses.filter(item=>item.watch_progress===1)?.map((course) => {
                      return (
                          <ItemCourse
                              title={getLocal(course.name)}
                              dec={course.instructor.name}
                              imageCourse={course.image.url}
                              Myprogress={true}
                              numProgress={course.watch_progress*100}
                              key={course.id}
                              id={course.id}
                              NoPrice={true}
                          />
                      )
                  })
              }
          </div></>

          }
        
         
      </div>
  </section>

        }
        </>
       
    );
}

export default CMyCourses;
