import {CardImgOverlay, CardText} from "reactstrap";
import styles from "../../styles/Art.module.scss";
import React from "react";

type Props = {
    title: string,
}

const ImageOverlay = ({title}: Props) => {
    return <CardImgOverlay className={styles.overlay}>
        <CardText className={styles.text}>{title}</CardText>
    </CardImgOverlay>;
}

export default ImageOverlay;