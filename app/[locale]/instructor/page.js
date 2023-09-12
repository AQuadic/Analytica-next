import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
export const metadata = {
  title: 'analytica | INSTRUCTOR',
}
function Instructor() {
  const t = useTranslations('Teach');
  return (
    <>
      <section className="become container m60 become2">
        <div className="box">
          <div className="info_become">
            <h2>{t('teachTitle')}</h2>
            <p>{t('teachDec')}</p>

            <Link href="/contactForm" className="btn_page">
            {t('start')}
            </Link>
          </div>
          <img
            src="/images/icons/become2.webp"
            className="img_become"
            alt="become"
          />
        </div>
      </section>

      <section className="begin container m60">
        <h2>{t('begin')}</h2>
        <div className="stepsBegin">
          <div className="part1">
            <span id="mySpan"></span>
          </div>
          <div className="part2" id="myDiv">
            <ul>
              <li>
                <h3>{t('begin1')}</h3>
                <div className="aboutBegin">
                  <img src="/images/icons/log-in.webp" alt="log-in" />
                  <p>
                   {t('begin11')}
                  </p>
                </div>
              </li>
              <li>
                <h3> {t('begin2')}</h3>
                <div className="aboutBegin rev">
                  <img src="/images/icons/game-plan.webp" alt="game-plan" />
                  <p>
                     {t('begin22')}
                  </p>
                </div>
              </li>
              <li>
                <h3> {t('begin3')}</h3>
                <div className="aboutBegin">
                  <img src="/images/icons/female.webp" alt="female" />
                  <p>
                  {t('begin33')}
                  </p>
                </div>
              </li>
              <li>
                <h3> {t('begin4')}</h3>
                <div className="aboutBegin rev">
                  <img src="/images/icons/rocket.webp" alt="rocket" />
                  <p>
                  {t('begin44')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="become container m60">
        <div className="box">
          <img src="/images/become.webp" className="img_become" alt="become" />
          <div className="info_become">
            <h2> {t('teachTitle2')}</h2>
            <p>
               {t('teachDec2')}
            </p>
            <Link href="/contactForm" className="btn_page2">
            {t('start')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Instructor;
