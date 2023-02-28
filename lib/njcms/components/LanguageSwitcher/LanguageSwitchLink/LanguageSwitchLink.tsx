import languageDetector from '../../../languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from "react";
import {Button} from "reactstrap";

type Props = {
  locale: string,
  url?: string
}

const LanguageSwitchLink = ({ locale, url }: Props) => {
  const router = useRouter()

  let href = url || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string)
  })
  if (locale) {
    href = url ? `/${locale}${href}` : pName
  }

  return (
    <Link href={href} legacyBehavior={false} role="button" className="btn btn-outline-light btn-sm" onClick={() => languageDetector.cache && languageDetector.cache(locale)}>
      {locale}
    </Link>
  );

};

export default LanguageSwitchLink