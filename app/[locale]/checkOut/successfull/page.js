import Thanks from "@/components/Thanks";
import {useTranslations} from "next-intl";
import React from "react";

function Successfull() {
    const t = useTranslations('Teach');
    return (
        <>
            <Thanks
                title={t('Successfully')}
                dec={t('seeCourse')}
                link={'/myCourses'}
               title2={t('myCourses')}
            />
        </>
    );
}

export default Successfull;
