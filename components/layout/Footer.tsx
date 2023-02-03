import React, {ReactNode} from "react";
import styles from "../../styles/layout/Footer.module.scss"
import {useTranslation} from "next-i18next";

const Footer = () => {
    const { t } = useTranslation(['footer']);

    return <footer className={`fs-6 text-muted mt-5 ${styles.container}`}>
        <p>CC0. {t('powered_by')} <a href="https://nextjs.org/">next.js</a>. {t('inspired_by')} <a href="https://www.mattdesl.com/">@mattdesl</a> {t('and')} <a href="https://ozafoto.com/digital/">Oza</a>.</p>
    </footer>
}

export default Footer
