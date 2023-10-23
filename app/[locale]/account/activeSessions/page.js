"use client";
import { navState } from "@/atoms";
import Thanks from "@/components/Thanks";
import { LogOut } from "@/components/useAPI/Auth";
import { getDevices, getRevokeDevices } from "@/components/useAPI/GetUser";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

// export const metadata = {
//   title: 'analytica | Account',
// }

function page() {
  const router = useRouter();
  const t = useTranslations("Account");
  const t2 = useTranslations("Teach");
  const [IsUser, setIsUser] = useRecoilState(navState);
  const [devices, setDevices] = useState([]);
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const HandelLogOut = async () => {
    const UserLogOut = await LogOut(Cookies.get("AnalyticaToken"));
    if (UserLogOut.error) {
      setErrorBloked(UserLogOut.error);
      setBloked(true);
    }
    if (UserLogOut === 200) {
      console.log("done");
      setIsUser(false);
      Cookies.remove("AnalyticaToken");
      router.push("/signIn");
    }
  };

  useEffect(() => {
    FetchDataOFDevices();
  }, []);
  const FetchDataOFDevices = async () => {
    const Devices = await getDevices();

    if (Devices.error) {
      setErrorBloked(Devices.error);
      setBloked(true);
    }
    setDevices(Devices);
  };

  const HandelRevokeDevices = async (id) => {
    const RevokeDevices = await getRevokeDevices(id);

    if (RevokeDevices.error) {
      setErrorBloked(RevokeDevices.error);
      setBloked(true);
    }
    console.log(RevokeDevices);
  };

  return (
    <>
      {Bloked ? (
        <>
          <Thanks
            title={t2("noAccess")}
            dec={ErrorBloked}
            link={"/myCourses"}
            title2={t2("backTo")}
            Bloked={true}
          />
        </>
      ) : (
        <section className="account container">
          <div className="account_info personal_info">
            <div className="part1">
              <h2>{t("account")}</h2>
              <ul>
                <li>
                  <Link href="/account"> {t("personal")}</Link>
                </li>
                <li>
                  <Link href="/account/password">{t("password")}</Link>
                </li>
                <li>
                  <Link href="/account/activeSessions" className="active">
                    {t("active")}
                  </Link>
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
              <h2 className="cart_title2">
                {t("active")} <span>( Max 2 Sessions )</span>
              </h2>
              <div className="sessions">
                <ul>
                  {devices.map((device) => {
                    return (
                      <li key={device.id}>
                        <img
                          src={
                            device.device_type === "android"
                              ? "/images/icons/mobile.svg"
                              : "/images/icons/labtop.svg"
                          }
                          className="imgSession"
                          alt="labtop"
                        />
                        <div className="infoSession">
                          <div className="dec">
                            <h3>{device.device_name}</h3>
                            <h4>Last accessed on 30 Arp 07:15 pm</h4>
                            <p>
                              Chrome <span>on {device.device_type}</span>
                            </p>
                            <p>
                              Signed in <span>on 28 Arp 05:45 pm</span>
                            </p>
                          </div>
                          <button
                            className="btn_page2"
                            onClick={(e) => {
                              e.preventDefault();
                              HandelRevokeDevices(device.id);
                            }}
                          >
                            {t("revoke")}
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default page;
