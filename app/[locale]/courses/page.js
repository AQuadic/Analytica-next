"use client";
import ItemCourse2 from "@/components/ItemCourse2";
import {getHomePage} from "@/components/useAPI/GetUser";
import {Checkbox, Group, Slider} from "@mantine/core";
import React, {useEffect, useState} from "react";

// export const metadata = {
//   title: 'analytica | Courses',
// }

function Courses() {
    const [allCourses, setAllCourses] = useState([]);
    const [Rating, setRating] = useState(5);
    const [Duration, setDuration] = useState();
    const [Level_id, setLevel_id] = useState();
    const [Topic, setTopic] = useState();
    const [Language, setLanguage] = useState();
    const [Price, setPrice] = useState();
    const [AllTopic, setAllTopic] = useState([]);


    useEffect(() => {
        handelFilterCourses();
        FetchDataOFHomePage();
    }, []);

    const handelFilterCourses = async () => {
        try {
            const url = new URL(`https://education.aquadic.com/api/v1/users/courses`);

            const params = {
                rating: Rating,
                duration: Duration,
                level_id: Level_id,
                topic: Topic,
                language: Language,
                price: Price,
            };
            Object.keys(params).forEach((key) =>
                url.searchParams.append(key, params[key])
            );
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            const data = await res.json();
            setAllCourses(data.data);
        } catch (error) {
            console.log("Error in Add New Category (service) =>", error);
        }
    };


    const FetchDataOFHomePage = async () => {
        const AllData = await getHomePage();
        if (!AllData) console.log(AllData?.message)
        setAllTopic(AllData.levels)
        console.log(AllData);
    }
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
                                            htmlFor="exampleRadios1"
                                        >
                                            <img src="./images/star.svg" alt="star"/>
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
                                            htmlFor="exampleRadios2"
                                        >
                                            <img src="./images/star.svg" alt="star"/>
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
                                            htmlFor="exampleRadios3"
                                        >
                                            <img src="./images/star.svg" alt="star"/>
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
                                            htmlFor="exampleRadios4"
                                        >
                                            <img src="./images/star.svg" alt="star"/>
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
                                    <Checkbox.Group
                                        color="red"
                                        style={{display: "flex", flexDirection: "column"}}
                                        onChange={setDuration}
                                    >
                                        <Group mt="xs">
                                            <Checkbox value="0-1" color="indigo" label="0-1 Hour"/>
                                            <Checkbox value="2-4" color="indigo" label="2-4 Hour"/>
                                            <Checkbox value="4-7" color="indigo" label="4-7 Hour"/>
                                            <Checkbox value="7-17" color="indigo" label="7-17 Hour"/>
                                        </Group>
                                    </Checkbox.Group>

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
                                    <Checkbox.Group
                                        color="red"
                                        style={{display: "flex", flexDirection: "column"}}
                                        onChange={setTopic}
                                    >
                                        <Group mt="xs">
                                            <Checkbox value="Web Design" color="indigo" label="Web Design"/>
                                            <Checkbox value="Photoshop" color="indigo" label="Photoshop"/>
                                            <Checkbox value="Mobile App Design" color="indigo"
                                                      label="Mobile App Design"/>
                                            <Checkbox value="Figma" color="indigo" label="Figma"/>
                                            <Checkbox value="Sketch" color="indigo" label="Sketch"/>
                                        </Group>
                                    </Checkbox.Group>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapsefour"
                                    aria-expanded="false"
                                    aria-controls="flush-collapsefour"
                                >
                                    Level
                                </button>
                            </h2>
                            <div
                                id="flush-collapsefour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <Checkbox.Group
                                        color="red"
                                        style={{display: "flex", flexDirection: "column"}}
                                        onChange={setLevel_id}

                                    >
                                        <Group mt="xs">
                                            {
                                                AllTopic.map((item) => {
                                                    return (
                                                        <Checkbox key={item.id} value={`${item.id}`} color="indigo"
                                                                  label={item.name.en}/>
                                                    )
                                                })
                                            }

                                        </Group>
                                    </Checkbox.Group>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapsefive"
                                    aria-expanded="false"
                                    aria-controls="flush-collapsefive"
                                >
                                    Language
                                </button>
                            </h2>
                            <div
                                id="flush-collapsefive"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <Checkbox.Group
                                        color="red"
                                        style={{display: "flex", flexDirection: "column"}}
                                        onChange={setLanguage}
                                    >
                                        <Group mt="xs">
                                            <Checkbox value="en" color="indigo" label="EN"/>
                                            <Checkbox value="ar" color="indigo" label="AR"/>

                                        </Group>
                                    </Checkbox.Group>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapsesix"
                                    aria-expanded="false"
                                    aria-controls="flush-collapsesix"
                                >
                                    Price
                                </button>
                            </h2>
                            <div
                                id="flush-collapsesix"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <Slider
                                        min={0}
                                        color="indigo"
                                        onChange={setPrice}
                                        thumbSize={22}
                                        max={1000}
                                        labelAlwaysOn
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn_page"
                        onClick={(e) => {
                            e.preventDefault();
                            handelFilterCourses();
                        }}
                    >
                        Apply
                    </button>
                </div>
                <div className="part2">
                    <h2>User Experience Design Courses</h2>
                    <div className="fillter_Courses">
                        {allCourses?.filter((item) => item.is_active != 0).map((course) => {
                            return (
                                <ItemCourse2
                                    key={course.id}
                                    id={course.id}
                                    title={course.name.en}
                                    imageCourse={course.image.url}
                                    star="4.8"
                                    dec={course.instructor.name}
                                    newsalary={course.price ? "EG " + course.price : "free"}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
