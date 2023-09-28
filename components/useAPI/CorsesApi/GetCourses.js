import Cookies from "js-cookie";
import {BASE_URL} from '../../../app/[locale]/api';

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
            `${BASE_URL}/api/v1/users/courses/mine`,
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
            `${BASE_URL}/api/v1/users/courses`,
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
            `${BASE_URL}/api/v1/users/courses`,
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
export const getOneCourse = async (e) => {
    try {
        const res = await fetch(
            `${BASE_URL}/api/v1/users/courses/${e}`,
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



