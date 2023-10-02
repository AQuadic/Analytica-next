import Thanks from "@/components/Thanks";
import {useTranslations} from "next-intl";
import React from "react";

function Successfull() {
    const t = useTranslations('Teach');
    return (
        <>
            <Thanks
                title={t('failed')}
                dec={t('wrong')}
                link={'/myCourses'}
               title2={t('myCourses')}
            />
        </>
    );
}

export default Successfull;
