"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { getHomePage } from "../useAPI/GetUser";
import { Group, Radio, Select } from "@mantine/core";


function CCheckOut() {
  const t = useTranslations("CheckOut");
  const t2 = useTranslations("Sign");
  const [data, setData] = useState([]);
  const [country_id, setCountry_id] = useState();
  const [payment, setPayment] = useState('credit');
  console.log('====================================');
  console.log(payment);
  console.log('====================================');
  //error
  const [ErrorCountry, setErrorCountry] = useState("");
  useEffect(() => {
    FetchDataOFHomePage();
  }, []);
  const FetchDataOFHomePage = async () => {
    const AllData = await getHomePage();
    if (!AllData) console.log(AllData?.message);
    AllData.countries.map((itemCountry) => {
      const item = { value: itemCountry.id, label: itemCountry.name.en };
      setData((current) => [...current, item]);
    });
  };

  return (
    <>
      <div className="checkOut container">
        <div className="part1">
          <h2>{t('title')}</h2>
          <form action="">
            <h3>{t('billing')}</h3>
            <div className="part">
            <Select
                label={t2("country")}
                placeholder={t2("selectCountry")}
                searchable
                clearable
                onChange={setCountry_id}
                error={ErrorCountry}
                value={country_id}
                nothingFound="No options"
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                data={data}
              />
            </div>
            <h3>{t('paymentMethod')}</h3>
            <div className="part">
           
            <Radio.Group
      name="favoriteFramework"
      withAsterisk
      onChange={setPayment}
      value={payment}
    >
      <Group mt="xs">
        <Radio value="credit" label="Credit / Debit Card" />
        <Radio value="payPal" label="PayPal" />
       
      </Group>
    </Radio.Group>
           
           
             
            </div>
            <h3>{t('discountCode')}</h3>
            <div className="part apply">
              <input
                type="text"
                placeholder={t('enterCode')}
              />
              <input type="submit" className="btn_page2" value={t('apply')} />
            </div>
          </form>
        </div>
        <div className="part2">
          <h3>{t('summary')}</h3>
          <h4>{t('fundamentals')}</h4>
          <ul>
            <li>
              <h5>{t('originalPrice')}</h5>
              <p>E£719.99</p>
            </li>
            <li>
              <h5>{t('discount')}</h5>
              <p className="green">-E£540.00</p>
            </li>
            <li>
              <h5>{t('total')}</h5>
              <p>E£719.99</p>
            </li>
          </ul>
          <a href="signUp.html" className="btn_page">
          {t('title')}
          </a>
        </div>
      </div>
    </>
  );
}

export default CCheckOut;
