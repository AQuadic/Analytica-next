"use client";
import FAQ from "@/components/FAQ";
import { getOneCourse } from "@/components/useAPI/CorsesApi/GetCourses";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function page({ params }) {


    const [allCourses, setAllCourses] = useState();

    useEffect(() => {
      FetchDataOFOneCourse();
    }, []);
    const FetchDataOFOneCourse = async () => {
      const AllCourses = await getOneCourse(params.id);
      if (!AllCourses) console.log(AllCourses?.message);
      setAllCourses(AllCourses);
    };
console.log(allCourses);
  return (
allCourses&&
    <>
      <div className="coursesDetails coursesDetails2">
        <div className="part1">
          <div className="content container">
            <div className="contantAbout">
            <h2>{allCourses.name.ar}</h2>
                {allCourses.description && <h3>{allCourses.description.en}</h3>}
              <p>
                Instructor:{" "}
                <Link href={`/instructorScreen/${Cookies.get("nameUrl")}`}>{allCourses.instructor.name}</Link>
              </p>
            </div>
            <div className="contantCart">
              <h3>Get started today</h3>
              <h4>Start your application or request more information.</h4>
              <Link href="/checkOut" className="btn_page3">
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
                  <img src="/images/details/assignment.svg" alt="assignment" />
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
            <div className="part">
              <h2 className="headDetails">What you'll learn</h2>
              <div className="learn">
                <ul className="row">
                  <li className="col-md-5">
                    <img src="/images/instructorScreen/true.svg" alt="true" />
                    <p>
                      Develop knowledge of cybersecurity analyst tools including
                      data protection; endpoint protection; SIEM; and systems
                      and network fundamentals.
                    </p>
                  </li>
                  <li className="col-md-5">
                    <img src="/images/instructorScreen/true.svg" alt="true" />
                    <p>
                      Learn about key compliance and threat intelligence topics
                      important in today’s cybersecurity landscape.
                    </p>
                  </li>
                  <li className="col-md-5">
                    <img src="/images/instructorScreen/true.svg" alt="true" />
                    <p>
                      Gain skills for incident responses and forensics with
                      real-world cybersecurity case studies.
                    </p>
                  </li>
                  <li className="col-md-5">
                    <img src="/images/instructorScreen/true.svg" alt="true" />
                    <p>
                      Get hands-on experience to develop skills via industry
                      specific and open source Security tools.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part">
              <div className="video-wrapper">
                <video width="100%" height="361" controls>
                  <source src="video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
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
                          className="accordion-button collapsed del-arr"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Introduction
                        </button>
                        <a
                          href=""
                          className="btn_page3"
                          style={{
                            width: "98px",
                            height: " 34px",
                            borderRadius: " 5px",
                            fontSize: "14px",
                          }}
                        >
                          Start Now
                        </a>
                      </h2>
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
            <div className="part">
              <div className="attach">
                <h2 className="headDetails">ATTACHMENTS</h2>
                <div className="all_attach">
                  <div className="part-attach">
                    <div className="info-attach">
                      <img
                        src="/images/quiz/file_type.webp"
                        className="attach-type"
                        alt="file_type"
                      />
                      <div className="dec-attach">
                        <h3>Brochure</h3>
                        <p>1.24 MB</p>
                      </div>
                    </div>
                    <button className="btn_page3">Download</button>
                  </div>
                  <div className="part-attach">
                    <div className="info-attach">
                      <img
                        src="/images/quiz/file_type.webp"
                        className="attach-type"
                        alt="file_type"
                      />
                      <div className="dec-attach">
                        <h3>Brochure</h3>
                        <p>1.24 MB</p>
                      </div>
                    </div>
                    <button className="btn_page3">Download</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="part">
              <div className="description">
                <h2 className="headDetails">Requirements</h2>
                <p>
                  No pre-requisites, although experience with working in product
                  or services companies in engineering/project
                  management/program management roles is recommended.
                </p>
              </div>
            </div>
            <div className="part">
              <div className="description">
                <h2 className="headDetails">Description</h2>
                <p>
                  A recent news article calls the Product Manager the 4th most
                  important role in a company today, making product management
                  one of the hottest jobs in the market. However, most people
                  are unaware of what exactly a Product Manager does. Does the
                  role require technical skills or business skills? And what is
                  it about the role that demands extreme empathy with the
                  customer? This e-learning course by the Institute of Product
                  Leadership is a foundational course that demystifies the role.
                  Starting from the very basics of “What is a product?”, the
                  course curriculum introduces students to the productizing
                  process and the skills and frameworks such as Market Analysis,
                  Strategic Planning, Product Planning, Go to Market and Sales
                  Enablement required to design, launch and nurture a product.
                  Students will also be introduced to the role and career path
                  of a Product Manager and the business, technology and customer
                  contexts a person needs to master to become a good Product
                  Manager. Although no prior knowledge is required, an
                  appreciation or hands-on experience of how product and
                  services companies operate is helpful.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
      </div>
    </>
  );
}

export default page;
