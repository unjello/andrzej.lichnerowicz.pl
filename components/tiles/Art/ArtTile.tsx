import React from "react";
import defaultStyles from "./ArtTile.module.scss";
import { CardGroup } from "reactstrap";
import { stripHtml } from "../../../lib/njcms/strip";
import { RenderedDocument } from "../../../lib/njcms/renderedDocument";
import CardOverlayed from "../../../lib/njcms/components/CardOverlayed/CardOverlayed";
import { styleMerger, StyleProps } from "../../../lib/njcms/styles";

type Props = {
  items: any;
  index: any;
};

const ArtTile = ({ items, index, styles}: Props & StyleProps) => {
    const artTileStyles = styleMerger('ArtTile', defaultStyles, styles)
    
    const ArtTile = artTileStyles()
    const ArtTile__Header = artTileStyles('Header')
    const ArtTile__Summary = artTileStyles('Summary')
    const ArtTile__Grid = artTileStyles('Grid')
    

    const cleanIndex = stripHtml(index.content);

  return (
    <section className={ArtTile}>
      <h1 className={ArtTile__Header}>{index.title}</h1>
      <div className={ArtTile__Summary}>{cleanIndex}</div>
      <CardGroup className={ArtTile__Grid}>
        {items.map((project: RenderedDocument) => {
          return (
            <CardOverlayed
              image_src={project.card!}
              title={project.title}
              url={project.url}
              key={project.id}
              styleMerger={artTileStyles}
            />
          );
        })}
      </CardGroup>
    </section>
  );
};

export default ArtTile;
