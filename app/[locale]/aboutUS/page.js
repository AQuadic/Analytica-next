import { useTranslations } from "next-intl";
import React from "react";

function page() {
  const t = useTranslations("Footer");

  return (
    <div className="aboutUs">
      <div className="container m90">
        <div className="pageAbout">
          <h2> {t('aboutUs')}</h2>
          <div className="decAbout">
            <p>
            {t('aboutText')}
            </p>
          </div>
        </div>
        <div className="part2">
        <h2>
        {t('board')}
          </h2>
          <div className="aboutImg">
            <div className="part">
                <img src="/images/about/herosectionphoto.webp" alt="About img"/>
                <p>one man</p>
            </div>
            <div className="part">
                <img src="/images/about/herosectionphoto.webp" alt="About img"/>
                <p>two man</p>

            </div>

        </div>
        </div>
       
        <div className="aboutUsSocial">
          <h2>
          {t('contactUs')}
          </h2>
            <ul>
                <li>
                    <a href="tel:+1234567890" target="_blank">
                        <img src="/images/media/phone.png" alt="contactus"/>
                        <p>+1234567890</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:info@example.com" target="_blank">
                        <img src="/images/media/email.png" alt="contactus"/>
                        <p>Send us an email</p>
                    </a>
                </li>
               
            </ul>
        </div>
        <div className="contactUs">
          <h2>
          {t('socialMedia')}
          </h2>
            <ul>
                <li>
                    <a href="/" target="_blank">
                        <img src="/images/media/face.webp" alt="contactus"/>
                        <p>Facebook</p>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <img src="/images/media/linkedin2.webp" alt="contactus"/>
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <img src="/images/media/insta2.webp" alt="contactus"/>
                        <p>Instagram</p>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <img src="/images/media/twiiter2.webp" alt="contactus"/>
                        <p>Twiiter</p>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default page;
