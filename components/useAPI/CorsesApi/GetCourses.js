import Cookies from "js-cookie";

let headersToken = {
  Authorization: `Bearer ${Cookies.get("token")} `,
  "Content-Type": "application/json",
  Accept: "application/json",
};

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getMyCourses = async () => {
  try {
    const res = await fetch(
      `https://education.aquadic.com/api/v1/users/courses/mine`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};

export const getAllCourses = async () => {
  try {
    const res = await fetch(
      `https://education.aquadic.com/api/v1/users/courses`,
      {
        method: "GET",
        headers: {
         
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};
export const getAllCoursesWithUser = async () => {
  try {
    const res = await fetch(
      `https://education.aquadic.com/api/v1/users/courses`,
      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${Cookies.get("token")} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};
