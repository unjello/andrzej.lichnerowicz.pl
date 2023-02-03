import 'include-media/dist/_include-media.scss'
import '../styles/_settings.scss'
import '../styles/bootstrap.scss';
import '../styles/globals.scss';
import 'highlight.js/styles/stackoverflow-dark.css'

import { appWithTranslation } from 'next-i18next'
import {Props} from "../components/layout/Layout";
import {AppProps} from "next/app";

const MyApp = ({ Component, pageProps }:AppProps<Props>)  => {
    return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp)
