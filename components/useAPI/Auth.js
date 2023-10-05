import Cookies from "js-cookie";
import api, {BASE_URL} from '../../app/[locale]/api';

let headersToken = {
    Authorization: `Bearer ${Cookies.get('token')} `,
    "Content-Type": "application/json",
    Accept: "application/json",

};

let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",

};
let body = {
    "from_all": true
};


export const LogOut = async (e) => {

    const result = api.post(`/api/v1/users/auth/logout`, body,{
      headers: {
        Authorization: `Bearer ${e} `,
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

}
export const SignUP = async (formate) => {

    const result = api.post(`/api/v1/users/auth/signup`, body,{
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
}

export const gethh = async () => {

    const result = api
    .get(`/api/v1/users/notifications`, {
      headers:  {
        Authorization: `Bearer ${Cookies.get('token')} `,
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
}
 