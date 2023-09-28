"use client";
import React, {useState} from "react";

// export const metadata = {
//   title: 'analytica | QUIZ',
// }

function page() {
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
                        <h2>Quiz: Gestalt Principles</h2>
                        <div className="score">
                            <img
                                src="/images/quiz/exam-results.webp"
                                className="score-img"
                                alt="exam-results"
                            />
                            <div className="your_score">
                                <h3>Your Score</h3>
                                <h4>
                                    15/ <span>20</span>
                                </h4>
                                <h5>
                                    Great job,{" "}
                                    <img src="/images/quiz/confetti.svg" alt="confetti"/>
                                </h5>
                                <p>
                                    Next time try to focus more and read the question carefully
                                    twice.
                                </p>
                            </div>
                        </div>
                        <div className="questions">
                            <div className="question">
                                <div className="titleQuestion">
                                    <h3>Quiz Question</h3>
                                    <h4>
                                        With decreasing attention spans, what type of content is
                                        best used to convey a lot of content in a short period of
                                        time?
                                    </h4>
                                </div>
                                <div className="allfile">
                                    <div className="file-container">
                                        <div className="file-title">Attach a File</div>
                                        <input type="file" id="file-input"/>
                                    </div>
                                    <div className="file_load">
                                        <div className="part">
                                            <div className="info_file">
                                                <img
                                                    src="/images/quiz/file_type.webp"
                                                    className="file_type"
                                                    alt="file_type"
                                                />
                                                <div className="dec-file">
                                                    <h5>Question 1.pdf</h5>
                                                    <h6>1.24 MB</h6>
                                                    <p className="file-status">
                            <span>
                              <img
                                  src="/images/quiz/file-status.svg"
                                  alt="file-status"
                              />
                            </span>{" "}
                                                        Successfully Uploaded
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="delete-file">
                                                <img src="/images/quiz/delete-file.svg" alt="delete"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="question">
                                <div className="titleQuestion">
                                    <h3>Quiz Question</h3>
                                    <h4>
                                        With decreasing attention spans, what type of content is
                                        best used to convey a lot of content in a short period of
                                        time?
                                    </h4>
                                </div>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li className="true">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="question">
                                <div className="titleQuestion">
                                    <h3>Quiz Question</h3>
                                    <h4>
                                        With decreasing attention spans, what type of content is
                                        best used to convey a lot of content in a short period of
                                        time?
                                    </h4>
                                </div>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li className="false">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="question">
                                <div className="titleQuestion">
                                    <h3>Quiz Question</h3>
                                    <h4>
                                        With decreasing attention spans, what type of content is
                                        best used to convey a lot of content in a short period of
                                        time?
                                    </h4>
                                </div>
                                <ul>
                                    <li className="true">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Clickbait
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <input
                                type="button"
                                className="btn_page"
                                value="Submit"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            />
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
                        <img src="/images/icons/Arrow1.svg" alt="Arrow"/>
                        <p>Previous</p>
                    </a>
                    <a className="btn_page" href="lectureText.html">
                        <p>Next</p>
                        <img src="/images/icons/Arrow2.svg" alt="Arrow"/>
                    </a>
                </div>
            </section>
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <img src="/images/quiz/thank-you.webp" alt="thank-you"/>
                            <h2>Thanks for completing that!</h2>
                            <a href="#" className="btn_page">
                                Continue
                            </a>
                        </div>
                        <div className="modal-footer" style={{display: "none"}}>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
