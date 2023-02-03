import React from "react";
import styles from "../../styles/Opensource.module.scss"
import DOMPurify from "isomorphic-dompurify";
import {ListGroup, ListGroupItem} from "reactstrap";
import Link from "next/link";
import {RenderedDocument} from "../../lib/renderedDocument";

type Props = {
    items: any,
    index: any
}

const OpenSource = ({items, index} : Props) => {
    const cleanIndex = DOMPurify.sanitize(index.content, { ALLOWED_TAGS: ['#text'] })
    const projectCards= items.reverse().map((project: RenderedDocument) => {
        const short = DOMPurify.sanitize(project.content, { ALLOWED_TAGS: ['#text'] })
        return <ListGroupItem key={project.id}>
            <Link href={project.url!}>{project.title}</Link><div>{short}</div>
        </ListGroupItem>
    })

    return (
        <section className={styles.container}>
            <h1>{index.title}</h1>
            <div className={styles.tag}>{cleanIndex}</div>
            <ListGroup>
                {projectCards}
            </ListGroup>
        </section>
    );
}

export default OpenSource
