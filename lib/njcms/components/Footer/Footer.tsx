import React, {ReactNode} from "react";
import defaultStyles from "./Footer.module.scss"
import {useTranslation} from "next-i18next";
import cn from "classnames"

export type Props = {
    styles?: any
}


const Footer = ({styles}: Props) => {
    const { t } = useTranslation(['footer']);
    const FooterStyle = cn(defaultStyles.Footer, styles?.Footer)

    return <footer className={`fs-6 text-muted mt-5 ${FooterStyle}`}>
        <p>CC0. {t('powered_by')} <a href="https://nextjs.org/">next.js</a>. {t('inspired_by')} <a href="https://www.mattdesl.com/">@mattdesl</a> {t('and')} <a href="https://ozafoto.com/digital/">Oza</a>.</p>
    </footer>
}

export default Footer
