import Cookies from "js-cookie";
import api, { BASE_URL } from "../../../app/[locale]/api";


let headersToken = {
  Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
  "Content-Type": "application/json",
  Accept: "application/json",
};

let header = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getMyCourses = async () => {
  const result = api
    .get(`/api/v1/users/courses/mine`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { error: error.message };
    });
  console.log(result);
  return result;
};

export const getAllCourses = async () => {
  const result = api
    .get(`/api/v1/users/courses`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { error: error.message };
    });
  console.log(result);
  return result;
};
export const getAllCoursesWithUser = async () => {
  const result = api
    .get(`/api/v1/users/courses`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { error: error.message };
    });
  console.log(result);
  return result;
};
export const getOneCourse = (e, IsUser) => {
  const result = api
    .get(`/api/v1/users/courses/${e}`, {
      headers: IsUser ? {
        Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      } : {
       
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
    
      return { error: error.response.data.message};
     
    });
  return result;
};

export const getOneLessons = async (e, IsUser) => {
  const result = api
    .get(`/api/v1/users/lessons/${e}`, {
      headers: IsUser ? headersToken : header,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
console.log('====================================');
console.log(error);
console.log('====================================');
      return { error: error.response.data.message };
    });
  console.log(result);
  return result;
};


export const getExams = async (id) => {
  const result = api
  .get(`/api/v1/users/lessons/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data.lesson.exams[0];
    })
    .catch((error) => {
      return { error:  error.response.data.message };
    });
  console.log(result);
  return result;
};
