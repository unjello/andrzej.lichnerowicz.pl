import React from "react";
import styles from "../../styles/Art.module.scss"
import {
    CardGroup,
} from "reactstrap";
import {stripHtml} from "../../lib/strip";
import ArtProjectCard from "../layout/ArtProjectCard";
import {RenderedDocument} from "../../lib/renderedDocument";

type Props = {
    items: any, index: any
}

const Art = ({items, index}: Props) => {
    const cleanIndex = stripHtml(index.content)
    const projectCards = items.map((project: RenderedDocument) => {
        return <ArtProjectCard
            image_src={project.card!}
            title={project.title}
            url={project.url}
            key={project.id}
        />
    })

    return <section className={styles.container}>
            <h1>{index.title}</h1>
            <div className={styles.tag}>{cleanIndex}</div>
            <CardGroup className={styles.grid}>
                {projectCards}
            </CardGroup>
        </section>;
}

export default Art
