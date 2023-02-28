import {CardImgOverlay, CardText} from "reactstrap";
import React from "react";
import { StyleElementProps } from "../../../styles";

type Props = {
    title: string,
}

const ImageOverlay = ({title, styleMerger}: Props & StyleElementProps) => {
    const Overlay = (styleMerger && styleMerger('Overlay')) || undefined
    const OverlayText = (styleMerger && styleMerger('OverlayText')) || undefined

    return <CardImgOverlay className={Overlay}>
        <CardText className={OverlayText}>{title}</CardText>
    </CardImgOverlay>;
}

export default ImageOverlay;