"use client";
import Thanks from "@/components/Thanks";
import { getHomePage, getLocal } from "@/components/useAPI/GetUser";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const SearchParams = useSearchParams();
  const [page, setPage] = useState([]);
  const locale = useLocale();
  const [Bloked, setBloked] = useState(false);
  const [ErrorBloked, setErrorBloked] = useState("");
  const t2 = useTranslations("Teach");
  useEffect(() => {
    FetchDataOFHomePage();
  }, [SearchParams.get("id")]);
  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (AllData.error) {
      setErrorBloked(AllData.error);
      setBloked(true);
    }
    setPage(
      AllData.pages.filter((item) => item.id === +SearchParams.get("id"))[0]
    );
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
        page.id > 0 && (
          <div className="container m90">
            <div className="pageAbout">
              <h2>{getLocal(locale,page?.title)}</h2>
              <div
                className="decAbout"
                dangerouslySetInnerHTML={{
                  __html: getLocal(locale,page?.description),
                }}
              >
                {/* <p dangerouslySetInnerHTML={createMarkup(data)} /> */}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default page;
