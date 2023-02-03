import React, {ReactNode} from "react";
import styles from "../../styles/layout/SocialMediaList.module.scss"
import {andrzejLichnerowiczConfig as config} from "../../andrzej.lichnerowicz.config"
import Link from "next/link";


const SocialMediaList = () => {
    return <ul className={`list-inline ${styles.container}`}>{
        config.social_media.map(({name, url}) => {
            if (url.startsWith('http') || url.startsWith('mailto')) {
                return (<li className={`list-inline-item`} key={name}><a href={url}>{name}</a></li>);
            } else {
                return (<li className={`list-inline-item`} key={name}><Link href={url}>{name}</Link></li>);
            }
        })
    }</ul>
}

export default SocialMediaList
