import React from "react";
import styles from "../../styles/layout/Tagline.module.scss"
import {andrzejLichnerowiczConfig as config} from "../../andrzej.lichnerowicz.config"
import {useTranslations} from "next-intl";
import {useTranslation} from "next-i18next";


const Tagline = () => {
    const { t } = useTranslation(['header']);

    return <ul className={`list-inline ${styles.container}`}>
        <li className={`list-inline-item`}>{t("he")}</li>
        <li className={`list-inline-item`}>{t("him")}</li>
        <li className={`list-inline-item`}>{t("activist")}</li>
        <li className={`list-inline-item`}>{t("trees_lover")}</li>
    </ul>
}

export default Tagline
