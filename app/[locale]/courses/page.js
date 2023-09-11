'use client'
import ItemCourse2 from "@/components/ItemCourse2";
import { getAllCourses } from "@/components/useAPI/CorsesApi/GetCourses";
import React, { useEffect, useState } from "react";

// export const metadata = {
//   title: 'analytica | Courses',
// }

function Courses() {


  const [allCourses, setAllCourses] = useState([])
  
  
  useEffect(() => {
    FetchDataOFAllCourses()
    console.log(allCourses);
  }, [])

  
  const FetchDataOFAllCourses= async () => {
    const AllCourses = await getAllCourses();
    if (!AllCourses) console.log(AllCourses?.message)
    await setAllCourses(AllCourses.data)

  }
  console.log(allCourses);
  return (
    <>
      <div className="courses container">
        <div className="part1">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Rating
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label
                      className="form-check-label optionStar"
                      for="exampleRadios1"
                    >
                      <img src="./images/star.svg" alt="star" />
                      <p>4.5</p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label
                      className="form-check-label optionStar"
                      for="exampleRadios2"
                    >
                      <img src="./images/star.svg" alt="star" />
                      <p>4</p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="option3"
                    />
                    <label
                      className="form-check-label optionStar"
                      for="exampleRadios3"
                    >
                      <img src="./images/star.svg" alt="star" />
                      <p>3.5</p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios4"
                      value="option4"
                    />
                    <label
                      className="form-check-label optionStar"
                      for="exampleRadios4"
                    >
                      <img src="./images/star.svg" alt="star" />
                      <p>3.5</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsetwo"
                  aria-expanded="false"
                  aria-controls="flush-collapsetwo"
                >
                  Video Duration
                </button>
              </h2>
              <div
                id="flush-collapsetwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      0-1 Hour
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      1-3 Hour
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked2"
                    />
                    <label className="form-check-label" for="flexCheckChecked2">
                      3-6 Hour
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked3"
                    />
                    <label className="form-check-label" for="flexCheckChecked3">
                      6-17 Hour
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsethree"
                  aria-expanded="false"
                  aria-controls="flush-collapsethree"
                >
                  Topic
                </button>
              </h2>
              <div
                id="flush-collapsethree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      0-1 Hour
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      1-3 Hour
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked2"
                    />
                    <label className="form-check-label" for="flexCheckChecked2">
                      3-6 Hour
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked3"
                    />
                    <label className="form-check-label" for="flexCheckChecked3">
                      6-17 Hour
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsethree"
                  aria-expanded="false"
                  aria-controls="flush-collapsethree"
                >
                  Level
                </button>
              </h2>
              <div
                id="flush-collapsethree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Level 1
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Level 2
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked2"
                    />
                    <label className="form-check-label" for="flexCheckChecked2">
                      Level 3
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked3"
                    />
                    <label className="form-check-label" for="flexCheckChecked3">
                      Level 4
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsethree"
                  aria-expanded="false"
                  aria-controls="flush-collapsethree"
                >
                  Language
                </button>
              </h2>
              <div
                id="flush-collapsethree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      AR
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      EN
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="part2">
          <h2>User Experience Design Courses</h2>
          <div className="fillter_Courses">
            <ItemCourse2
              title="Learn python: The Complete Python Programming Course"
              image="1"
              star="4.8"
              info="Use XD to get a job in UI Design, User Interface, User
                  Experience design, UX design & Web Design"
              dec="Avinash jain, The Codex"
              oldsalary="E£679.99"
              newsalary="E£1,599.99"
            />
            <ItemCourse2
              title="Learn python: The Complete Python Programming Course"
              image="2"
              star="4.8"
              info="Use XD to get a job in UI Design, User Interface, User
                  Experience design, UX design & Web Design"
              dec="Avinash jain, The Codex"
              newsalary="E£1,599.99"
            />
            <ItemCourse2
              title="Learn python: The Complete Python Programming Course"
              image="3"
              star="4.8"
              info="Use XD to get a job in UI Design, User Interface, User
                  Experience design, UX design & Web Design"
              dec="Avinash jain, The Codex"
              oldsalary="E£679.99"
              newsalary="E£1,599.99"
            />
            <ItemCourse2
              title="Learn python: The Complete Python Programming Course"
              image="1"
              star="4.8"
              info="Use XD to get a job in UI Design, User Interface, User
                  Experience design, UX design & Web Design"
              dec="Avinash jain, The Codex"
              oldsalary="E£679.99"
              newsalary="E£1,599.99"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
