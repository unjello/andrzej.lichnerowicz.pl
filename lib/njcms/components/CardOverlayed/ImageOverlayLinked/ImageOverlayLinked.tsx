import {Card, CardImg, CardImgOverlay, CardText} from "reactstrap";
import Link from "next/link";
import React from "react";
import { StyleElementProps } from "../../../styles";

type Props = {
    title: string,
    url: string,
}

const ImageOverlayLinked = ({title, url, styleMerger}: Props & StyleElementProps) => {
    const Overlay = (styleMerger && styleMerger('Overlay')) || undefined
    const OverlayText = (styleMerger && styleMerger('OverlayText')) || undefined

    return (
        <a href={url}>
            <CardImgOverlay className={Overlay}>
                <CardText className={OverlayText}>{title}</CardText>
            </CardImgOverlay>
        </a>
    );
}

export default ImageOverlayLinked;