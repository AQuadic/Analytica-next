import api from "@/app/[locale]/api";
import Cookies from "js-cookie";



export const getNotifications = async () => {

    const result = api
    .get(`/api/v1/users/notifications`, {
      headers:{
        Authorization: `Bearer ${Cookies.get('AnalyticaToken')} `,
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