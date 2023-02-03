import React from "react";
import {ListGroup, ListGroupItem, ListGroupItemText} from "reactstrap";
import DOMPurify from 'isomorphic-dompurify';
import styles from "../../styles/Projects.module.scss"
import Link from "next/link";
import {RenderedDocument} from "../../lib/renderedDocument";

type Props = {
    items: any,
    index: any
}

const Projects = ({items, index} : Props) => {
    const cleanIndex = DOMPurify.sanitize(index.content, { ALLOWED_TAGS: ['#text'] })
    const projectCards= items.reverse().map((project: RenderedDocument) => {
        const short = DOMPurify.sanitize(project.content, { ALLOWED_TAGS: ['#text'] })
        return <ListGroupItem key={project.id}>
            <img src={project.card}></img>
            <ListGroupItemText tag='div'><Link href={project.url!}>{project.title}</Link><div dangerouslySetInnerHTML={{ __html: short }} /></ListGroupItemText>
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

export default Projects
