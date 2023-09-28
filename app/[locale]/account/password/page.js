"use client";
import {navState} from "@/atoms";
import {LogOut} from "@/components/useAPI/Auth";
import {PasswordInput} from "@mantine/core";
import Cookies from "js-cookie";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {useRecoilState} from "recoil";
import api from '../../api';

// export const metadata = {
//   title: 'analytica | Account',
// }

function page() {
    const router = useRouter();
    const t = useTranslations("Account");
    const t2 = useTranslations("Sign");
    const [IsUser, setIsUser] = useRecoilState(navState);
    const [password, setpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
//Error
    const [ErrorPassword, setErrorPassword] = useState("");
    const [ErrorNewPassword, setErrorNewPassword] = useState("");
    const [ErrorPasswordConfirmation, setErrorPasswordConfirmation] = useState("");
    const [ErrorMessage, setErrorMessage] = useState("");

    const HandelLogOut = async () => {
        const UserLogOut = await LogOut(Cookies.get("token"));
        if (UserLogOut.message === "auth.logged_out") {
            console.log("done");
            setIsUser(false);
            Cookies.remove("token");
            router.push('/signIn')
        }
    };

    const handelChangePass = () => {
        const po = api
            .post(
                "/api/v1/users/auth/change_password",
                {
                    "password": newpassword,
                    "current_password": password,
                    "password_confirmation": passwordConfirmation,
                },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((res) => {
                /*  setLoading(false);*/
                res.response.data.errors?.current_password
                    ? setErrorPassword(res.response.data.errors.current_password[0])
                    : setErrorPassword("");
                res.response.data.errors?.password
                    ? setErrorNewPassword(res.response.data.errors.password[0])
                    : setErrorNewPassword("");
                res.response.data.message
                    ? setErrorMessage(res.response.data.message)
                    : setErrorMessage("");
                console.log(res);
            });
    };

    return (
        <>
            <section className="account container">
                <div className="account_info personal_info">
                    <div className="part1">
                        <h2>{t("account")}</h2>
                        <ul>
                            <li>
                                <Link href="/account">{t("personal")}</Link>
                            </li>
                            <li>
                                <Link href="/account/password" className="active">
                                    {t("password")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/activeSessions">{t("active")}</Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        HandelLogOut();
                                    }}
                                >
                                    {t("logout")}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="Profile">
                        <h2 className="cart_title2"> {t("password")}</h2>
                        <form className="row g-3 form_page">


                            <div className="col-md-12">
                                <PasswordInput
                                    variant="unstyled"
                                    placeholder={t2("currentPassword")}
                                    label={t("current")}
                                    onChange={(e) => setpassword(e.target.value)}
                                    error={ErrorPassword}
                                />

                            </div>
                            <div className="col-md-12">
                                <PasswordInput
                                    variant="unstyled"
                                    placeholder={t2("enterNew")}
                                    label={t2("newPassword")}
                                    onChange={(e) => setNewpassword(e.target.value)}
                                    error={ErrorNewPassword}
                                />
                            </div>
                            <div className="col-md-12">
                                <PasswordInput
                                    variant="unstyled"
                                    placeholder={t2("enterAgain")}
                                    label={t2("confirmNew")}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    error={ErrorPasswordConfirmation}
                                />
                            </div>

                            <button
                                type="submit"
                                href=""
                                className=" btn_page"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handelChangePass();
                                }}
                            >
                                {t("change")}
                            </button>
                            {ErrorMessage && (
                                <p
                                    style={{
                                        color: "red",

                                        fontSize: "12px",
                                        marginTop: "4px",
                                    }}
                                >
                                    {ErrorMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default page;
