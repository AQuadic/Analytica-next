"use client";
import React, {useState} from "react";
// export const metadata = {
//   title: 'analytica | CourseVideo',
// }
function CourseVideo() {
    const [openClose, setOpenClose] = useState(false);
    const [content, setContent] = useState("one");

    const HandelContent = (e) => {
        setContent(e);
    };

    return (
        <>
            <section className="videoCourse container">
                <div
                    className={`headVideo  ${openClose ? "open" : ""} `}
                    id="headVideo"
                >
                    <div className="part2">
                        <h1>Learn python: The Complete Python Programming Course</h1>
                        <h2>Gestalt Principles</h2>
                        <div className="boxVideo">
                            <img src="/images/video.webp" alt="video"/>
                        </div>
                        <p>
                            In this lesson, we took a tour through many of the fundamentals
                            you need to have in mind before starting your research:
                        </p>
                        <ul>
                            <li>
                                We asked the question, what is good UX? And we looked at a
                                number of examples of different products and interfaces, while
                                considering what might make them good (or bad) experiences for
                                users.
                            </li>
                            <li>
                                We went over Nielsen's 10 heuristics and saw how we can use
                                heuristics to quickly and inexpensively evaluate a design.
                            </li>

                            <li>We looked at how and when to do competitive analysis.</li>
                            <li>
                                We talked about the importance of designing with users in mind
                                and to designing with data in mind.
                            </li>
                        </ul>
                        <p>
                            Although we talked a little about research and data in this
                            lesson, we didn't get into many specifics. In the next lesson,
                            we'll discuss UX research in more detail, and you'll get started
                            on the research for your project. By now, you should have selected
                            the design topic for your final project. If you haven't settled on
                            a topic yet, you'll want to do that now, since you'll be doing
                            research on that topic in the next lesson.
                        </p>
                        <div className="assignments">
                            <h3>Assignments Files</h3>
                            <div className="file-container">
                                <div className="file-title">Attach a File</div>
                                <input type="file" id="file-input"/>
                            </div>
                        </div>
                    </div>
                    <div className="part1 ">
                        <button
                            className="arrowVideo"
                            id="openClose"
                            onClick={() => setOpenClose(!openClose)}
                        >
                            {" "}
                            <img src="./images/icons/arrowVideo.svg" alt="arrowVideo"/>
                        </button>
                        <div
                            className="contantOne"
                            style={{display: content === "one" ? "block" : "none"}}
                            id="contantOne"
                        >
                            <h3>Course Content</h3>
                            <ul>
                                <li
                                    className="lecture"
                                    onClick={() => {
                                        HandelContent("two");
                                    }}
                                >
                                    <h4>Introduction</h4>
                                    <p>0/2 | 5min</p>
                                </li>
                                <li
                                    className="lecture"
                                    onClick={() => {
                                        HandelContent("two");
                                    }}
                                >
                                    <h4>Chapter 1 - Basics of UX</h4>
                                    <p>0/10 | 2hr 35min</p>
                                </li>
                                <li
                                    className="lecture"
                                    onClick={() => {
                                        HandelContent("two");
                                    }}
                                >
                                    <h4>Chapter 1 - Basics of UX</h4>
                                    <p>0/10 | 2hr 35min</p>
                                </li>
                                <li
                                    className="lecture"
                                    onClick={() => {
                                        HandelContent("two");
                                    }}
                                >
                                    <h4>Chapter 1 - Basics of UX</h4>
                                    <p>0/10 | 2hr 35min</p>
                                </li>
                                <li
                                    className="lecture"
                                    onClick={() => {
                                        HandelContent("two");
                                    }}
                                >
                                    <h4>Chapter 1 - Basics of UX</h4>
                                    <p>0/10 | 2hr 35min</p>
                                </li>
                                <li
                                    className="lecture"
                                    onClick={() => {
                                        HandelContent("two");
                                    }}
                                >
                                    <h4>Chapter 1 - Basics of UX</h4>
                                    <p>0/10 | 2hr 35min</p>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="contantTwo"
                            id="contantTwo"
                            style={{display: content === "two" ? "block" : "none"}}
                        >
                            <h3>Chapter 1 - Basics of UX</h3>
                            <button
                                className="back"
                                id="back"
                                onClick={() => HandelContent("one")}
                            >
                                <img src="./images/icons/ArrowBack.svg" alt="ArrowBack"/>
                                <p>Back</p>
                            </button>
                            <ul>
                                <li>
                                    <form className="infoChapter">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckCheckedDisabled"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckCheckedDisabled"
                                            >
                                                Lecture 1
                                            </label>
                                            <div className="clock">
                                                <img
                                                    src="/images/icons/copywriting.svg"
                                                    alt="copywriting"
                                                />
                                                <p>1min</p>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <form className="infoChapter">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckCheckedDisabled"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckCheckedDisabled"
                                            >
                                                Lecture Paper
                                            </label>
                                            <div className="clock">
                                                <img
                                                    src="/images/icons/copywriting.svg"
                                                    alt="copywriting"
                                                />
                                                <p>1min</p>
                                            </div>
                                        </div>
                                    </form>
                                    <button
                                        className="btn_page2"
                                        style={{width: "116px", height: "30px"}}
                                    >
                                        Download
                                    </button>
                                </li>
                                <li>
                                    <form className="infoChapter">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckCheckedDisabled"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckCheckedDisabled"
                                            >
                                                Difference between a Product and a Service
                                            </label>
                                            <div className="clock">
                                                <img src="/images/icons/video.svg" alt="video"/>
                                                <p>15min</p>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <form className="infoChapter">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckCheckedDisabled"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckCheckedDisabled"
                                            >
                                                Difference between a Product and a Service
                                            </label>
                                            <div className="clock">
                                                <img src="/images/icons/video.svg" alt="video"/>
                                                <p>1min</p>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <form className="infoChapter">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckCheckedDisabled"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckCheckedDisabled"
                                            >
                                                Difference between a Product and a Service
                                            </label>
                                            <div className="clock">
                                                <img src="/images/icons/video.svg" alt="video"/>
                                                <p>1min</p>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <form className="infoChapter">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckCheckedDisabled"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckCheckedDisabled"
                                            >
                                                Test Of Chapter 1
                                            </label>
                                            <div className="clock">
                                                <img src="/images/icons/test.svg" alt="video"/>
                                                <p>30min</p>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="endVideo">
                    <a className="btn_page2" href="">
                        <img src="./images/icons/Arrow1.svg" alt="Arrow"/>
                        <p>Previous</p>
                    </a>
                    <a className="btn_page" href="lectureText.html">
                        <p>Next</p>
                        <img src="./images/icons/Arrow2.svg" alt="Arrow"/>
                    </a>
                </div>
            </section>
        </>
    );
}

export default CourseVideo;
