import {Card, CardImg } from "reactstrap";
import React from "react";
import ImageOverlayLinked from "./ImageOverlayLinked/ImageOverlayLinked";
import ImageOverlay from "./ImageOverlay/ImageOverlay";
import { StyleElementProps } from "../../styles";

type Props = {
    image_src: string,
    title: string,
    url?: string,
}

const CardOverlayed = ({image_src, url, title, styleMerger}: Props & StyleElementProps) => {
    const Card_ = (styleMerger && styleMerger('Card')) || undefined
    const CardImage = (styleMerger && styleMerger!('Image')) || undefined

    return (<Card className={Card_}>
        <CardImg
            alt="Card image cap"
            src={image_src}
            className={CardImage}
        />
        {url ? 
            <ImageOverlayLinked title={title} url={url} styleMerger={styleMerger}/> : 
            <ImageOverlay title={title} styleMerger={styleMerger}/>}
    </Card>);
};

export default CardOverlayed;