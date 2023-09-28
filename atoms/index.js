import Cookies from "js-cookie";
import {atom} from "recoil";

//Navbar state
export const navState = atom({
    key: "nav_state",
    default: Cookies.get('token') ? true : false,
});

// Language State
export const languageState = atom({
    key: "language_state",
    default: "ar",
});
export const tokenNotifiable = atom({
    key: "notifiable_token",
    default: "",
});
export const MessagingFir = atom({
    key: "MessagingFir",
    default: "",
});