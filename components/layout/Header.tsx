import LanguageSwitcher from "./LanguageSwitcher";
import SocialMediaList from "./SocialMediaList";
import React from "react";
import Tagline from "./Tagline";
import Link from "next/link";
import styles from "../../styles/layout/Header.module.scss";

const Header = () => {
    return (<header>
        <LanguageSwitcher/>
        <section className={styles.container}>
            <h1><Link href={`/`}>Andrzej unjello Lichnerowicz</Link></h1>
        </section>
        <Tagline/>
        <SocialMediaList/>
    </header>);
}
export default Header
