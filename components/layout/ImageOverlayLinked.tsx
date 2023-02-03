import {Card, CardImg, CardImgOverlay, CardText} from "reactstrap";
import Link from "next/link";
import styles from "../../styles/Art.module.scss";
import React from "react";

type Props = {
    title: string,
    url: string,
}

const ImageOverlayLinked = ({title, url}: Props) => {
    return (
        <a href={url}>
            <CardImgOverlay className={styles.overlay}>
                <CardText className={styles.text}>{title}</CardText>
            </CardImgOverlay>
        </a>
    );
}

export default ImageOverlayLinked;