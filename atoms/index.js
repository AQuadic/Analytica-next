import Cookies from "js-cookie";
import {atom} from "recoil";
//Navbar state
export const navState = atom({
    key: "nav_state",
    default: Cookies.get('AnalyticaToken') ? true : false,
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
let params = new URLSearchParams(window.location.search);
let search = params.get("search");
export const StateSearch = atom({
    key: "StateSearch",
    default: search,
});
export const CategoriesIDState = atom({
    key: "CategoriesIDState",
    default: [""],
});