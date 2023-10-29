"use client";
import { navState } from "@/atoms";
import Thanks from "@/components/Thanks";
import {
  getExams,
  getOneCourse,
} from "@/components/useAPI/CorsesApi/GetCourses";
import { getLocal } from "@/components/useAPI/GetUser";
import {  Chip, Group,  Textarea } from "@mantine/core";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useRecoilState } from "recoil";
import api from "../../api";
import Cookies from "js-cookie";
import Link from "next/link";
import { Modal } from "react-bootstrap";

// export const metadata = {
//   title: 'analytica | QUIZ',
// }

function page({ params }) {
  const [openClose, setOpenClose] = useState(false);
  const [content, setContent] = useState("one");
  const [contentID, setContentID] = useState(1);
  const [ChaptersID, setChaptersID] = useState();
  const [allChapters, setAllChapters] = useState([]);
  const [LessonsChapters, setLessonsChapters] = useState([]);
  const [CurrentChapters, setCurrentChapters] = useState([]);
  const [Exams, setExams] = useState([]);
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const locale = useLocale();
  const t2 = useTranslations("Teach");
  const t = useTranslations("Video");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [Loading, setLoading] = useState(false);
  const [Answers, setAnswers] = useState([]);
  const [result, setResult] = useState(0);
  const [LengthQue, setLengthQue] = useState(0);
  const [ErrorComplet, setErrorComplet] = useState("");
  const [NextLesson, setNextLesson] = useState("");
  const [showModal, setShowModal] = useState(false);
  console.log("====================================");
  console.log(Answers);
  console.log("====================================");
  const HandelContent = (e) => {
    setContent(e);
  };
  useEffect(() => {
    FetchDataOFOneCourse(ChaptersID);
  }, [contentID, ChaptersID]);

  const FetchDataOFOneCourse = async (e) => {
    const AllCourses = await getOneCourse(e, IsUser);
    if (AllCourses.error) {
      console.log(AllCourses.error);
      setNextLesson("");
    }
    console.log(AllCourses);
    setNextLesson(AllCourses.last_watched_lesson_id);
    setAllChapters(AllCourses.chapters);
    setLessonsChapters(
      AllCourses.chapters?.filter((item) => item.id === +contentID)[0].lessons
    );
    setCurrentChapters(
      AllCourses.chapters?.filter((item) => item.id === +contentID)[0]
    );
    console.log(
      AllCourses.chapters?.filter((item) => item.id === +contentID)[0]
    );
  };
  // Function to update the data
  // Function to update the data based on inputs
  // Function to update the data based on inputs
  const handleInputChange = (index, id, value) => {
    setAnswers((prevData) => {
      const newData = [...prevData]; // Create a copy of the data array
      newData[index] = { ...newData[index], question_id: id, answer: value }; // Update the 'ans' field of the item
      return newData; // Return the updated data
    });
  };
  useEffect(() => {
    FetchDataOFExams();
  }, []);

  const FetchDataOFExams = async () => {
    const Exams = await getExams(params.id);
    console.log("====================================");
    console.log(Exams);
    console.log("====================================");
    if (Exams.error) {
      setErrorBloked(Exams.error);
      setBloked(true);
    }

    setExams(Exams.exams[0]);
    setLengthQue(Exams.exams[0].questions.length);
    setChaptersID(Exams.course_id);
    setContentID(Exams.chapter_id);
  };

  console.log("====================================");
  console.log(Exams);
  console.log("====================================");
  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60); // Calculate the whole number of hours
    const remainingMinutes = minutes % 60; // Calculate the remaining minutes
    if (minutes >= 60) {
      return `${hours} h ${remainingMinutes} min`;
    } else {
      return ` ${minutes} min`;
    }
  }
  const getCount = (num) => {
    const allcount = num.reduce(
      (accumulator, currentValue) => accumulator + currentValue.duration,
      0
    );
    return allcount;
  };
  const handelQuiz = () => {
    setLoading(true);
    if (
      LengthQue !==
      Answers.filter((ans) => ans !== undefined && ans.answer !== "").length
    ) {
      setErrorComplet(t("complete"));
      setLoading(false);
    } else {
      setErrorComplet("");
      const po = api
        .post(
          `/api/v1/users/exams/${Exams.id}`,
          {
            answers: Answers.filter(
              (ans) => ans !== undefined && ans.answer !== ""
            ),
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setShowModal(true);
          setLoading(false);
          setResult(res.data.result.score);
          console.log(res);
        })
        .catch((res) => {
          setLoading(false);
          console.log(res);
        });
    }
  };
  console.log(Answers.filter((ans) => ans !== undefined && ans.answer !== ""));
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {Bloked ? (
        <Thanks
          title={t2("noAccess")}
          dec={ErrorBloked}
          link={"/myCourses"}
          title2={t2("backTo")}
          Bloked={true}
        />
      ) : (
        <>
          <div className="load" style={{ display: Loading ? "flex" : "none" }}>
            <ColorRing
              height={120}
              width={120}
              colors={["#3682b6", "#1f2265", "#8a20a7", "#1f2265", "#8a20a7"]}
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#fff"
              strokeWidth={1}
              strokeWidthSecondary={1}
            />
          </div>
          <section className="videoCourse container">
            <div
              className={`headVideo  ${openClose ? "open" : ""} `}
              id="headVideo"
            >
              {Exams?.id && (
                <div className="part2">
                  <h1>Learn python: The Complete Python Programming Course</h1>
                  <h2>
                    {t("quiz")} : {getLocal(locale, Exams.name)}
                  </h2>
                  {Exams?.exam_result?.corrected && (
                    <div className="score">
                      <img
                        src="/images/quiz/exam-results.webp"
                        className="score-img"
                        alt="exam-results"
                      />
                      <div className="your_score">
                        <h3>{t("score")}</h3>
                        <h4>{result}</h4>
                        <h5>
                          {t("great")},
                          <img src="/images/quiz/confetti.svg" alt="confetti" />
                        </h5>
                        <p>{t("carefully")}</p>
                      </div>
                    </div>
                  )}

                  <div className="questions">
                    {/* <div className="question">
                      <div className="titleQuestion">
                        <h3>Quiz Question</h3>
                        <h4>
                          With decreasing attention spans, what type of content
                          is best used to convey a lot of content in a short
                          period of time?
                        </h4>
                      </div>
                      <div className="allfile">
                        <div className="file-container">
                          <div className="file-title">Attach a File</div>
                          <input type="file" id="file-input" />
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
                              <img
                                src="/images/quiz/delete-file.svg"
                                alt="delete"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {Exams.questions.map((question, index) => {
                      return (
                        <div className="question" key={index}>
                          <div className="titleQuestion">
                            <h3>
                              {" "}
                              {t("question")} #{i + 1}{" "}
                            </h3>
                            <h4>{getLocal(locale, question.name)}</h4>
                            {question.image && (
                              <img
                                src={question.image.url}
                                alt="img Que"
                                className="imgQue"
                              />
                            )}
                          </div>
                          {question.type == "textarea" && (
                            <Textarea
                              placeholder={t("EnterAnswer")}
                              onChange={(e) =>
                                handleInputChange(
                                  i,
                                  question.id,
                                  e.target.value
                                )
                              }
                            />
                          )}
                          {question.type == "boolean" && (
                            <Chip.Group
                              name={`favoriteFramework${i}`}
                              onChange={(e) =>
                                handleInputChange(i, question.id, e)
                              }
                            >
                              <Group mt="xs">
                                <Chip key={"454"} value={`true`}>
                                  <p> {t("true")}</p>
                                </Chip>
                                <Chip key={"45"} value={`false`}>
                                  <p> {t("false")}</p>
                                </Chip>
                              </Group>
                            </Chip.Group>
                          )}

                          {question.type == "select" && (
                            <Chip.Group
                              onChange={(e) =>
                                handleInputChange(i, question.id, e.toString())
                              }
                            >
                              <Group mt="xs">
                                {question.answers.map((answer) => {
                                  return (
                                    <Chip
                                      key={answer.id}
                                      value={`${answer.id}`}
                                    >
                                      <p> {getLocal(locale, answer.answer)}</p>
                                    </Chip>
                                  );
                                })}
                              </Group>
                            </Chip.Group>
                          )}
                        </div>
                      );
                    })}
                    <div>
                      <input
                        type="button"
                        className="btn_page"
                        value={t("Submit")}
                        onClick={() => {
                          handelQuiz();
                        }}
                      />
                      {ErrorComplet && (
                        <p
                          style={{
                            color: "red",

                            fontSize: "12px",
                            marginTop: "4px",
                          }}
                        >
                          {ErrorComplet}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="part1 ">
                <button
                  className="arrowVideo"
                  id="openClose"
                  onClick={() => setOpenClose(!openClose)}
                >
                  {" "}
                  <img src="/images/icons/arrowVideo.svg" alt="arrowVideo" />
                </button>
                <div
                  className="contantOne"
                  style={{ display: content === "one" ? "block" : "none" }}
                  id="contantOne"
                >
                  <h3>{t("content")}</h3>
                  <ul>
                    {allChapters?.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="lecture"
                          onClick={() => {
                            HandelContent("two");
                            setContentID(item.id);
                          }}
                        >
                          <h4>{getLocal(locale, item.name)}</h4>
                          <p>
                            0/{item.lessons.length} |{" "}
                            {convertMinutesToHours(getCount(item.lessons))}{" "}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {allChapters?.length > 0 && (
                  <div
                    className="contantTwo"
                    id="contantTwo"
                    style={{ display: content === "two" ? "block" : "none" }}
                  >
                    <h3>{getLocal(locale, CurrentChapters?.name)}</h3>
                    <button
                      className="back"
                      id="back"
                      onClick={() => HandelContent("one")}
                    >
                      <img src="/images/icons/ArrowBack.svg" alt="ArrowBack" />
                      <p>{t("back")}</p>
                    </button>
                    <ul>
                      {LessonsChapters?.length > 0 &&
                        LessonsChapters.map((item) => {
                          return (
                            <li key={item.id}>
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
                                    {getLocal(locale, item.name)}
                                  </label>
                                  <div className="clock">
                                    <img
                                      src="/images/icons/copywriting.svg"
                                      alt="copywriting"
                                    />
                                    <p>{item.duration}min</p>
                                  </div>
                                </div>
                              </form>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="endVideo">
              <a className="btn_page2" href={`/courseContent/44}`}>
                <img src="/images/icons/Arrow1.svg" alt="Arrow" />
                <p>{t("previous")}</p>
              </a>
              <a className="btn_page" href={`/courseContent/43}`}>
                <p>{t("next")}</p>
                <img src="/images/icons/Arrow2.svg" alt="Arrow" />
              </a>
            </div> */}
          </section>

          <Modal centered show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <img src="/images/quiz/thank-you.webp" alt="thank-you" />
              <h2>{t("thanks")}</h2>
              <Link href={`/courseContent/${NextLesson}`} className="btn_page">
                {t("nextLesson")}
              </Link>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
}

export default page;
