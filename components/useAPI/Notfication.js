import Cookies from "js-cookie";
import { BASE_URL } from '../../app/[locale]/api';

let headersToken = {
    Authorization: `Bearer ${Cookies.get('token')} `,
     "Content-Type": "application/json",
     Accept: "application/json",
     
   };

export const getNotifications = async () => {
    try {
        const res = await fetch(`https://education.jabal-p.com/api/v1/users/notifications`, {
            method: 'GET',
            headers:{
                Authorization: `Bearer 520|sidJDOIzMSBrFoWrw9Enl4PPCzmokO8glefffhxp75f615af `,
               "Content-Type": "application/json",
               Accept: "application/json",
             },
            body,
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }