"use client";
import ItemCourse from "@/components/ItemCourse";
import { getInstractor } from "@/components/useAPI/GetUser";
import React, { useEffect, useState } from "react";


// export const metadata = {
//   title: 'analytica | INSTRUCTOR',
// }
function InstractorInfo({ params }) {


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
            <img src={instractor?.image?instractor.image:"/images/persone.webp"} className="person" alt="persone" />
            <div className="info_about">
              <h2>INSTRUCTOR</h2>
              <h3>{instractor?.name}</h3>
              <h4>UI UX Designer</h4>
            </div>
          </div>
          <div className="achievement">
            <div className="part">
              <img src="/images/icons/star2.webp" alt="stars" />
              <h5>
                4.5 <span></span>
              </h5>
            </div>
            <div className="part">
              <img src="/images/icons/online-training1.webp" alt="training" />
              <h5>
                150 <span>Trainees</span>
              </h5>
            </div>
            <div className="part">
              <img src="/images/icons/clock.webp" alt="clock" />
              <h5>
                150 <span>Hours</span>
              </h5>
            </div>
          </div>
          <div className="aboutME">
            <h3>About me</h3>
            <p>
              Hello ,i'm Muhammed Ahmed ,UI/UX Designer and ui Developer .I have
              worked in web interface design and mobile application design .I
              also worked in the graphic design field for several years.., also
              worked as an instructor ,, explaining the design approach and user
              experience.. I have a passion for simplifying the science of
              design and user experience and presenting it to students in the
              simplest form..{" "}
            </p>
          </div>
        </div>

        <div className="part2">
          <h3>Follow Me</h3>
          <ul>
            <li>
              <a href="">
                <img src="/images/media/face.webp" alt="facebook" />
                <p>MuhammedAhmed</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/media/linkedin2.webp" alt="linkedin" />
                <p>@MuhammedAhmed</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/media/insta2.webp" alt="instagram" />
                <p>@MuhammedAhmed</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/media/twiiter2.webp" alt="twiiter" />
                <p>@MuhammedAhmed</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
{
instractor?.courses&&
<section className="services container m60">
<h2 style={{ fontFamily: "DM Sans", fontSize: "20px" }}>My Courses</h2>

<div className="allServices" style={{ justifyContent: "flex-start" }}>
  {
    instractor.courses.map((course)=>{
      return(
        <ItemCourse
        key={course.id}
        id={course.id}
        title={course.name.ar}
        imageCourse={course.image.url}
        star="4.8"
        //dec={course.instructor.name}
        newsalary={course.price?"EG "+course.price:"free"}
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
