"use client";
import { getOneCourse } from "@/components/useAPI/CorsesApi/GetCourses";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// export const metadata = {
//   title: 'analytica | Course_Details',
// }

function CourseDetails({ params }) {
  const [allCourses, setAllCourses] = useState();

  useEffect(() => {
    FetchDataOFOneCourse();
  }, []);
  const FetchDataOFOneCourse = async () => {
    const AllCourses = await getOneCourse(params.id);
    if (!AllCourses) console.log(AllCourses?.message);
    setAllCourses(AllCourses);
  };

  return (
    <>
      {allCourses ? (
        <div className="coursesDetails coursesDetails1 ">
          <div className="part1">
            <div className="content container">
              <div className="contantAbout">
                <h2>{allCourses.name.en}</h2>
                {allCourses.description && <h3>{allCourses.description.en}</h3>}
                <p>
                  Instructor:{" "}
                  <Link href={`/instractorInfo/${allCourses.instructor.id}`}>
                    {allCourses.instructor.name}
                  </Link>
                </p>
              </div>
              <div className="contantCart">
                <h3>Get started today</h3>
                <h4>Start your application or request more information.</h4>
                <Link href="/checkOut" className="btn_page">
                  Apply Now
                </Link>
                <ul>
                  <li>
                    <img src="/images/details/video.svg" alt="video" />
                    <p>1 hour on-demand video</p>
                  </li>
                  <li>
                    <img src="/images/details/test.svg" alt="test" />
                    <p>1 practice test</p>
                  </li>
                  <li>
                    <img
                      src="/images/details/assignment.svg"
                      alt="assignment"
                    />
                    <p>Assignments</p>
                  </li>
                  <li>
                    <img
                      src="/images/details/copywriting.svg"
                      alt="copywriting"
                    />
                    <p>1 article</p>
                  </li>
                  <li>
                    <img
                      src="/images/details/smart-devices.svg"
                      alt="smart-devices"
                    />
                    <p>Access on mobile and TV</p>
                  </li>
                  <li>
                    <img src="/images/details/award.svg" alt="award" />
                    <p>Certificate of completion</p>
                  </li>
                  <li>
                    <img src="/images/details/infinity.svg" alt="infinity" />
                    <p>Full lifetime access</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="part2 ">
              {/*TODO*/ }
              <div className="part">
                <h2 className="headDetails">What you'll learn</h2>
                <div className="learn">
                  <ul className="row">
                    <li className="col-md-5">
                      <img src="/images/details/true.svg" alt="true" />
                      <p>
                        Develop knowledge of cybersecurity analyst tools
                        including data protection; endpoint protection; SIEM;
                        and systems and network fundamentals.
                      </p>
                    </li>
                    <li className="col-md-5">
                      <img src="/images/details/true.svg" alt="true" />
                      <p>
                        Learn about key compliance and threat intelligence
                        topics important in today’s cybersecurity landscape.
                      </p>
                    </li>
                    <li className="col-md-5">
                      <img src="/images/details/true.svg" alt="true" />
                      <p>
                        Gain skills for incident responses and forensics with
                        real-world cybersecurity case studies.
                      </p>
                    </li>
                    <li className="col-md-5">
                      <img src="/images/details/true.svg" alt="true" />
                      <p>
                        Get hands-on experience to develop skills via industry
                        specific and open source Security tools.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
               {/*TODO*/ }
              <div className="part">
                <h2 className="headDetails">What you'll learn</h2>
                <div className="skills">
                  <ul>
                    <li>UX Design</li>
                    <li>User Interface Design</li>
                    <li>UX Design</li>
                    <li>User Interface Design</li>
                  </ul>
                </div>
              </div>
              <div className="part">
                <div className="course_Content">
                  <h2 className="headDetails">Course Content</h2>
                  <h3>6 sections • 32 lectures • 1h 15m total length</h3>
                  <div className="all_Course_Content">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample2"
                    >
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
                            Introduction
                          </button>
                          <p>2 lectures • 15m</p>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample2"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <img
                                  src="/images/details/video.svg"
                                  alt="video"
                                />
                                <p>1 hour on-demand video</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/test.svg"
                                  alt="test"
                                />
                                <p>1 practice test</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/assignment.svg"
                                  alt="assignment"
                                />
                                <p>Assignments</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/copywriting.svg"
                                  alt="copywriting"
                                />
                                <p>1 article</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/smart-devices.svg"
                                  alt="smart-devices"
                                />
                                <p>Access on mobile and TV</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/award.svg"
                                  alt="award"
                                />
                                <p>Certificate of completion</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/infinity.svg"
                                  alt="infinity"
                                />
                                <p>Full lifetime access</p>
                              </li>
                            </ul>
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
                            Chapter 1 - Basics of UX
                          </button>
                          <p>2 lectures • 15m</p>
                        </h2>
                        <div
                          id="flush-collapsetwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample2"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <img
                                  src="/images/details/video.svg"
                                  alt="video"
                                />
                                <p>1 hour on-demand video</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/test.svg"
                                  alt="test"
                                />
                                <p>1 practice test</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/assignment.svg"
                                  alt="assignment"
                                />
                                <p>Assignments</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/copywriting.svg"
                                  alt="copywriting"
                                />
                                <p>1 article</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/smart-devices.svg"
                                  alt="smart-devices"
                                />
                                <p>Access on mobile and TV</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/award.svg"
                                  alt="award"
                                />
                                <p>Certificate of completion</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/infinity.svg"
                                  alt="infinity"
                                />
                                <p>Full lifetime access</p>
                              </li>
                            </ul>
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
                            Chapter 2 - Basics of UX
                          </button>
                          <p>2 lectures • 15m</p>
                        </h2>
                        <div
                          id="flush-collapsethree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample2"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <img
                                  src="/images/details/video.svg"
                                  alt="video"
                                />
                                <p>1 hour on-demand video</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/test.svg"
                                  alt="test"
                                />
                                <p>1 practice test</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/assignment.svg"
                                  alt="assignment"
                                />
                                <p>Assignments</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/copywriting.svg"
                                  alt="copywriting"
                                />
                                <p>1 article</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/smart-devices.svg"
                                  alt="smart-devices"
                                />
                                <p>Access on mobile and TV</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/award.svg"
                                  alt="award"
                                />
                                <p>Certificate of completion</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/infinity.svg"
                                  alt="infinity"
                                />
                                <p>Full lifetime access</p>
                              </li>
                            </ul>
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
                            Chapter 3 - Basics of UX
                          </button>
                          <p>2 lectures • 15m</p>
                        </h2>
                        <div
                          id="flush-collapsefour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample2"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <img
                                  src="/images/details/video.svg"
                                  alt="video"
                                />
                                <p>1 hour on-demand video</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/test.svg"
                                  alt="test"
                                />
                                <p>1 practice test</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/assignment.svg"
                                  alt="assignment"
                                />
                                <p>Assignments</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/copywriting.svg"
                                  alt="copywriting"
                                />
                                <p>1 article</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/smart-devices.svg"
                                  alt="smart-devices"
                                />
                                <p>Access on mobile and TV</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/award.svg"
                                  alt="award"
                                />
                                <p>Certificate of completion</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/infinity.svg"
                                  alt="infinity"
                                />
                                <p>Full lifetime access</p>
                              </li>
                            </ul>
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
                            aria-controls="flush-collapsethree"
                          >
                            Chapter 4 - Basics of UX
                          </button>
                          <p>2 lectures • 15m</p>
                        </h2>
                        <div
                          id="flush-collapsefive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample2"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <img
                                  src="/images/details/video.svg"
                                  alt="video"
                                />
                                <p>1 hour on-demand video</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/test.svg"
                                  alt="test"
                                />
                                <p>1 practice test</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/assignment.svg"
                                  alt="assignment"
                                />
                                <p>Assignments</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/copywriting.svg"
                                  alt="copywriting"
                                />
                                <p>1 article</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/smart-devices.svg"
                                  alt="smart-devices"
                                />
                                <p>Access on mobile and TV</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/award.svg"
                                  alt="award"
                                />
                                <p>Certificate of completion</p>
                              </li>
                              <li>
                                <img
                                  src="/images/details/infinity.svg"
                                  alt="infinity"
                                />
                                <p>Full lifetime access</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {allCourses.requirements && (
                <div className="part">
                  <div className="description">
                    <h2 className="headDetails">Requirements</h2>
                    <p>
                    {allCourses.requirements.en}
                    </p>
                  </div>
                </div>
              )}
               {allCourses.description && (
                <div className="part">
                  <div className="description">
                    <h2 className="headDetails">Description</h2>
                    <p>
                    {allCourses.description.en}
                    </p>
                  </div>
                </div>
              )}
             
             
            </div>
          </div>
          <div className="part3 container">
            <div className="box">
              <img
                src="/images/details/certificate.webp"
                className="img_box"
                alt="certificate"
              />
              <h2>Earn a career certificate</h2>
              <p>
                Add this credential to your LinkedIn profile, resume, or CV
                Share it on social media and in your performance review
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default CourseDetails;
