import Cookies from "js-cookie";
import api, { BASE_URL } from "../../app/[locale]/api";

let headersToken = {
  Authorization: `Bearer ${Cookies.get("AnalyticaToken")} `,
  "Content-Type": "application/json",
  Accept: "application/json",
};

let header = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getUser = async (e) => {
  const result = api
    .post(`/api/v1/users/auth/user`, {}, {
      headers: {
        Authorization: `Bearer ${e} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      return res.data;
    })
    .catch((error) => {
      return { error: error.message };
    });
  console.log(result);
  return result;
};

export const getHomePage = async () => {
  const result = api
    .get(`/api/v1/meta/data`, {
      headers: headersToken,
    })
    .then((res) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      return res.data;
    })
    .catch((error) => {
      return { error: error.message };
    });
  console.log(result);
  return result;
};
export const getHomeSections = async (IsUser) => {
  const result = api
    .get(`/api/v1/meta/home_sections`, {
      headers: IsUser ? headersToken : header,
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
export const getInstractor = async (e, IsUser) => {
  const result = api
    .get(`/api/v1/users/instructors/${e}`, {
      headers: IsUser ? headersToken : header,
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

export const getDevices = async () => {
  const result = api
    .get(`/api/v1/users/devices`, {
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

export const getRevokeDevices = async (id) => {
  const result = api
    .delete(`/api/v1/users/devices/${id}`, {
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

export const getOneInstractor = async (e) => {
  const result = api
    .get(`/api/v1/users/instructors/${e}`, {
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
export function getLocal (locale,path) {
  if (path == null || path == undefined) return "";

  if (path.hasOwnProperty(locale) && path[locale]) return path[locale];

  return path[Object.keys(path)[0]];
};
