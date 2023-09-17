import Thanks from "@/components/Thanks";
import { useTranslations } from "next-intl";
import React from "react";

function Successfull() {
  const t = useTranslations('Teach');
  return (
    <>
      <Thanks
        title={t('Successfully')}
        dec={t('contact')}
       dash={'Dashboard'}
      />
    </>
  );
}

export default Successfull;
