import React from "react";
import {useRouter} from "next/router";
import styles from "../../styles/layout/LanguageSwitcher.module.scss"
import i18nextConfig from '../../next-i18next.config';
import LanguageSwitchLink from "../elements/LanguageSwitchLink/LanguageSwitchLink";

const getLocaleNativeName = (code: string): string => {
    const languageNames = new Intl.DisplayNames([code!], {
        type: 'language'
    });
    return languageNames.of(code!)!
}

const LanguageSwitcher = () => {
    const router = useRouter()
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    return <div className={styles.container}>
        {i18nextConfig.i18n.locales.map((locale) => {
            if (locale === currentLocale) return null;
            return (
                <LanguageSwitchLink
                    locale={locale}
                    key={locale}
                />
            );
        })}
    </div>
}

export default LanguageSwitcher

/*
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li key={locale}>
                  <Link href={{ pathname, query }} as={asPath} locale={locale}>
                    <a>{locale}</a>
                  </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
 */