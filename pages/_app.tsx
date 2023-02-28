import 'include-media/dist/_include-media.scss'
import '../styles/_settings.scss'
import '../styles/bootstrap.scss';

import '../styles/globals.scss';
import 'highlight.js/scss/base16/eighties.scss'

import { appWithTranslation } from 'next-i18next'
import {Props} from "../lib/njcms/components/Layout/Layout";
import {AppProps} from "next/app";

const MyApp = ({ Component, pageProps }:AppProps<Props>)  => {
    return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp)
