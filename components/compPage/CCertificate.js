import { useTranslations } from "next-intl";
import React from "react";

export const metadata = {
  title: 'analytica | Certificate',
}

function CCertificate() {
  const t = useTranslations("MyCourses");
  return (
    <>
      <section className="myCoursesDetails container  m60">
        <img src="/images/certificatephoto.webp" alt="certificatephoto" />
        <div className="aboutCertificate">
          <h1>{t('congratulations')} Donia!</h1>
          <p>
            Great job on completing your program. This certificate is proof of
            your graduation.
          </p>
          <button className="btn_page">{t('download')}</button>
        </div>
      </section>
    </>
  );
}

export default CCertificate;
