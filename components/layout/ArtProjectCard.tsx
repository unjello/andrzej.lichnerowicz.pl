import {Card, CardImg, CardImgOverlay, CardText} from "reactstrap";
import React from "react";
import ImageOverlayLinked from "./ImageOverlayLinked";
import ImageOverlay from "./ImageOverlay";

type Props = {
    image_src: string,
    title: string,
    url?: string,
}

const ArtProjectCard = ({image_src, url, title}: Props) => {
    return (<Card>
        <CardImg
            alt="Card image cap"
            src={image_src}
        />
        {url ? <ImageOverlayLinked title={title} url={url}/> : <ImageOverlay title={title}/>}
    </Card>);
};

export default ArtProjectCard;