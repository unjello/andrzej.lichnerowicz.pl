import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import SocialMediaList from "../../../../components/layout/SocialMediaList";
import React from "react";
import Tagline from "../../../../components/layout/Tagline";
import Link from "next/link";
import defaultStyles from "./Header.module.scss";
import cn from "classnames"

export type Props = {
    styles?: any
}


const Header = ({styles}: Props) => {
    const HeaderStyle = cn(defaultStyles.Header, styles?.Header)
    return (<header>
        <LanguageSwitcher/>
        <section className={HeaderStyle}>
            <h1><Link href={`/`}>Andrzej unjello Lichnerowicz</Link></h1>
        </section>
        <Tagline/>
        <SocialMediaList/>
    </header>);
}
export default Header
