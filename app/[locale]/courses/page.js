"use client";
import { CategoriesIDState, StateSearch, navState } from "@/atoms";
import ItemCourse2 from "@/components/ItemCourse2";
import { getHomePage, getLocal } from "@/components/useAPI/GetUser";
import { Checkbox, Group, Radio, RangeSlider, Skeleton } from "@mantine/core";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRecoilState } from "recoil";
import api from "../api";
import Thanks from "@/components/Thanks";

// export const metadata = {
//   title: 'analytica | Courses',
// }

function Courses() {
  useEffect(() => {
    // Extract the values
    setPage(getQueryParam(UrlNew, "page"));

    // Extract category_ids values
    const categoryIds = [];
    const categoryIdsRegex = /category_ids%5B(\d+)%5D=([^&]+)/g;
    let categoryIdsMatch;
    while ((categoryIdsMatch = categoryIdsRegex.exec(UrlNew))) {
      categoryIds.push(categoryIdsMatch[2]);
      setCategoriesID(categoryIds);
    }
  }, []);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const getQueryParam = (url, param) => {
    const regex = new RegExp(`${param}=([^&]+)`);
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const [Load, setLoad] = useState(true);

  const t = useTranslations("CompCourse");
  const t2 = useTranslations("Teach");
  const [allCourses, setAllCourses] = useState([]);
  const [Rating, setRating] = useState(5);
  const [Duration, setDuration] = useState();
  const [Level_id, setLevel_id] = useState(
    searchParams.getAll("level_ids") ? searchParams.getAll("level_ids") : []
  );
  const [Topic, setTopic] = useState();
  const [Page, setPage] = useState(0);
  const [CategoriesIDNav, setCategoriesIDNav] =
    useRecoilState(CategoriesIDState);
  const [Categories, setCategories] = useState([]);
  const [CategoriesID, setCategoriesID] = useState(
    searchParams.getAll("category_ids")
      ? searchParams.getAll("category_ids")
      : CategoriesIDNav
      ? [CategoriesIDNav]
      : []
  );
  const [Language, setLanguage] = useState(searchParams.get("language"));
  const [PriceType, setPriceType] = useState(
    searchParams.get("price_type") ? searchParams.get("price_type") : ""
  );
  const [PriceFrom, setPriceFrom] = useState(
    searchParams.get("price_from") ? +searchParams.get("price_from") : 0
  );
  const [PriceTo, setPriceTo] = useState(
    +searchParams.get("price_to") ? +searchParams.get("price_to") : 1000
  );
  const [Price, setPrice] = useState();
  const [AllTopic, setAllTopic] = useState([]);
  const [show, setShow] = useState(false);
  const [UrlNew, setUerNew] = useState("");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [Search, setSearch] = useRecoilState(StateSearch);

  const locale = useLocale();
  const router = useRouter();
  const [hasMore, setHasMore] = useState(true);
  const searchParams2 = useSearchParams();
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");

  let headersToken = {
    Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  let header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (AllData.error) {
      setErrorBloked(AllData.error);
      setBloked(true);
    }
    setAllTopic(AllData.levels);
    setCategories(AllData.categories);
    console.log(AllData);
  };

  useEffect(() => {
    FetchDataOFHomePage();
  }, []);

  useEffect(() => {
    if (Search) {
      handelFilter(1);
      setPage(1);
    } else {
      handelFilter();
    }
  }, [Search]);

  const handelFilter = (id) => {
    setLoad(true);
    if (id === 1 || Page === 0) {
      setAllCourses([]);
    }

    const url = new URL(
      `https://education.aquadic.com/api/v1/users/courses?page=${
        id ? id : Page + 1
      }&price_type=${PriceType}&price_from=${PriceFrom}&price_to=${PriceTo}&search=${
        Search === null ? "" : Search
      }&language=${Language}`
    );
    const url2 = new URL(
      `https://education.aquadic.com/api/v1/users/courses?page=${
        id ? id : Page + 1
      }&price_type=${PriceType}&price_from=${PriceFrom}&price_to=${PriceTo}&search=${
        Search === null ? "" : Search
      }&language=${Language}`
    );
    if ([searchParams.getAll("level_ids")[0]].length > 0) {
      Level_id.map((item) => {
        url2.searchParams.append(`level_ids`, item);
      });
    }
    if ([searchParams.getAll("category_ids")[0]].length > 0) {
      CategoriesID.map((item) => {
        url2.searchParams.append(`category_ids`, item);
      });
    }
    if ([searchParams.getAll("level_ids")[0]].length > 0) {
      Level_id.map((item, i) => {
        url.searchParams.append(`level_ids[${i}]`, item);
      });
    }
    if (CategoriesID.length > 0) {
      CategoriesID.map((item, i) => {
        url.searchParams.append(`category_ids[${i}]`, item);
      });
    }
    console.log(url.search);
    setUerNew(url2.search);

    console.log("====================================");
    console.log(url2.search);
    console.log("====================================");

    router.replace(pathname + url2.search);

    const po = api
      .get(url, {
        headers: IsUser ? headersToken : header,
      })
      .then((res) => {
        setLoad(false);

        if (res.data.data.length === 0) {
          setHasMore(false);
        } else {
          setPage(Page + 1);
          setAllCourses((dataGet) => [...dataGet, ...res.data.data]);
        }

        console.log(res);
        return res.data.data;
      })
      .catch((res) => {
        setLoad(false);

        if (res.response.status === 500) {
          setErrorBloked(res.message);
          setBloked(true);
        }
        console.log(res);
      });
  };

  return (
    <>
      {Bloked ? (
        <>
          <Thanks
            title={t2("noAccess")}
            dec={ErrorBloked}
            link={"/myCourses"}
            title2={t2("backTo")}
            Bloked={true}
          />
        </>
      ) : (
        <div className="courses container">
          <div className="part1">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {/*  <div className="accordion-item">
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
                <Radio.Group name="favoriteFramework" withAsterisk>
                  <Group mt="xs">
                    <Radio size="xs" value="react" label="React" />
                    <Radio size="xs" value="svelte" label="Svelte" />
                    <Radio size="xs" value="ng" label="Angular" />
                    <Radio size="xs" value="vue" label="Vue" />
                  </Group>
                </Radio.Group>
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
                    <img src="./images/star.svg" alt="star" />
                    <p>4.5</p>
                  </label>
                </div>
              </div>
            </div>
    </div>*/}
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
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={setDuration}
                    >
                      <Group mt="xs">
                        <Checkbox value="0-1" color="indigo" label="0-1 Hour" />
                        <Checkbox value="2-4" color="indigo" label="2-4 Hour" />
                        <Checkbox value="4-7" color="indigo" label="4-7 Hour" />
                        <Checkbox
                          value="7-17"
                          color="indigo"
                          label="7-17 Hour"
                        />
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
                    Category
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
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={setCategoriesID}
                      value={CategoriesID}
                    >
                      <Group mt="xs">
                        {Categories.map((item) => {
                          return (
                            <Checkbox
                              key={item.id}
                              value={`${item.id}`}
                              color="indigo"
                              label={getLocal(locale, item.name)}
                            />
                          );
                        })}
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
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={setLevel_id}
                      value={Level_id}
                    >
                      <Group mt="xs">
                        {AllTopic.map((item) => {
                          return (
                            <Checkbox
                              key={item.id}
                              value={`${item.id}`}
                              color="indigo"
                              label={getLocal(locale, item.name)}
                            />
                          );
                        })}
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
                    <Radio.Group
                      name="favoriteFramework2"
                      onChange={setLanguage}
                      value={Language}
                    >
                      <Group mt="xs">
                        <Radio size="xs" value="en" color="indigo" label="EN" />
                        <Radio size="xs" value="ar" color="indigo" label="AR" />
                      </Group>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefive2"
                    aria-expanded="false"
                    aria-controls="flush-collapsefive2"
                  >
                    Course Type
                  </button>
                </h2>
                <div
                  id="flush-collapsefive2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <Radio.Group
                      name="favoriteFramework3"
                      onChange={setPriceType}
                      value={PriceType}
                    >
                      <Group mt="xs">
                        <Radio
                          size="xs"
                          value="free"
                          color="indigo"
                          label="Free"
                        />
                        <Radio
                          size="xs"
                          value="paid"
                          color="indigo"
                          label="Paid"
                        />
                      </Group>
                    </Radio.Group>
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
                    <RangeSlider
                      min={0}
                      color="indigo"
                      value={[PriceFrom, PriceTo]}
                      onChange={(e) => {
                        setPriceFrom(e[0]);
                        setPriceTo(e[1]);
                      }}
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
                setAllCourses([]);
                handelFilter(1);
              }}
            >
              Apply
            </button>
          </div>
          <div className="part2">
            {/* <h2  >User Experience Design Courses</h2> */}
            <div
              className="fillter_Courses"
              style={{
                minHeight: "700px",
                overflow: "auto",
                display: "flex",
              }}
            >
              {Load && (
                <>
                  <div className="container">
                    <div
                      className="loadItems"
                      style={{ flexDirection: "column", gap: "20px" }}
                    >
                      <div className="item" style={{ width: "100%" }}>
                        <Skeleton height={110} mb="xl" />
                        <Skeleton height={20} radius="xl" />
                        <Skeleton height={20} mt={6} radius="xl" />
                        <Skeleton height={30} width={100} mt={6} radius="xl" />
                      </div>
                      <div className="item" style={{ width: "100%" }}>
                        <Skeleton height={110} mb="xl" />
                        <Skeleton height={20} radius="xl" />
                        <Skeleton height={20} mt={6} radius="xl" />
                        <Skeleton height={30} width={100} mt={6} radius="xl" />
                      </div>
                      <div className="item" style={{ width: "100%" }}>
                        <Skeleton height={110} mb="xl" />
                        <Skeleton height={20} radius="xl" />
                        <Skeleton height={20} mt={6} radius="xl" />
                        <Skeleton height={30} width={100} mt={6} radius="xl" />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <InfiniteScroll
                dataLength={allCourses.length}
                next={handelFilter}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={
                  <h4 style={{ textAlign: "center" }}>Nothing more to show</h4>
                }
              >
                {allCourses?.map((course, i) => (
                  <ItemCourse2
                    key={i}
                    id={course.id}
                    title={getLocal(locale, course.name)}
                    imageCourse={course.image?.url}
                    is_purchased={course.is_purchased ? true : false}
                    last_watched={course.last_watched_lesson_id}
                    star="4.8"
                    dec={course.instructor.name}
                    newsalary={course.price ? "EG " + course.price : t("free")}
                  />
                ))}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Courses;
