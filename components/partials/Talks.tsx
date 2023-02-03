import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import styles from "../../styles/Talks.module.scss"
import {RenderedDocument} from "../../lib/renderedDocument";

type Props = {
    items: any,
    index: any
}

const Talks = ({items, index} : Props) => {
    const cleanIndex = DOMPurify.sanitize(index.content, { ALLOWED_TAGS: ['#text'] })
    const projectCards= items.map((project: RenderedDocument) => {
        const short = DOMPurify.sanitize(project.where!, { ALLOWED_TAGS: ['#text'] })
        const year = project.date.split('.')[0]
        const type = project.type!.toLowerCase();
        if (project.url) {
            return <ListGroupItem className={styles[type]} key={project.id}>
                    <Link href={project.url}>{project.title}</Link><div>{year}, {short}</div>
            </ListGroupItem>
        } else {
            return <ListGroupItem className={styles[type]} key={project.id}>

                    {project.title}<div>{year}, {short}</div>
                </ListGroupItem>
        }
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

export default Talks
