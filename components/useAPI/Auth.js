import Cookies from "js-cookie";
import { BASE_URL } from '../../app/[locale]/api';
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
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/auth/logout`, {
            method: 'POST',
            headers:{
              Authorization: `Bearer ${e} `,
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
  export const SignUP = async (formate) => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/auth/signup`, {
            method: 'POST',
            headers:{
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

  export const gethh = async () => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/notifications`, {
            method: 'GET',
            headers:{
              Authorization: `Bearer ${Cookies.get('token')} `,
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 
               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }
 