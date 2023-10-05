import Cookies from "js-cookie";
import {BASE_URL} from '../../app/[locale]/api';
import { useLocale } from "next-intl";


let headersToken = {
    Authorization: `Bearer ${Cookies.get('token')} `,
    "Content-Type": "application/json",
    Accept: "application/json",
};

let header = {
    "Content-Type": "application/json",
    Accept: "application/json",

};

export const getUser = async (e) => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/auth/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${e} `,
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

export const getHomePage = async () => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/meta/data`, {
            method: 'GET',
            headers:headersToken,
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
}
export const getHomeSections = async (IsUser) => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/meta/home_sections`, {
            method: 'GET',
            headers: IsUser?headersToken:header,
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
}
export const getInstractor = async (e,IsUser) => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/instructors/${e}`, {
            method: 'GET',
            headers: IsUser?headersToken:header,
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
}


export const getDevices = async () => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/devices`, {
            method: 'GET',
            headers: {
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

export const getRevokeDevices = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/devices/${id}`, {
            method: 'DELETE',
            headers: {
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

export const getOneInstractor = async (e) => {
    try {
        const res = await fetch(`${BASE_URL}/api/v1/users/instructors/${e}`, {
            method: 'GET',
            headers: {
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
export const getLocal = (path) => {
    const locale = useLocale()
    if (path == null || path == undefined) return "";

    if (path.hasOwnProperty(locale) && path[locale]) return path[locale];

    return path[Object.keys(path)[0]];
  };