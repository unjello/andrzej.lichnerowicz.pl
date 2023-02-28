import React from "react";
import defaultStyles from "./Opensource.module.scss"
import DOMPurify from "isomorphic-dompurify";
import {ListGroup, ListGroupItem} from "reactstrap";
import Link from "next/link";
import {RenderedDocument} from "../../../lib/njcms/renderedDocument";
import { styleMerger, StyleProps } from "../../../lib/njcms/styles";

type Props = {
    items: any,
    index: any
}

const OpenSourceTile = ({items, index, styles} : Props & StyleProps) => {
    const ossTileStyles = styleMerger('OpenSourceTile', defaultStyles, styles)
    
    const OpenSourceTile = ossTileStyles('')
    const OpenSourceTile__Header = ossTileStyles('Header')
    const OpenSourceTile__Summary = ossTileStyles('Summary')
    const OpenSourceTile__List = ossTileStyles('List')
    const OpenSourceTile__Item = ossTileStyles('Item')
    const OpenSourceTile__Title = ossTileStyles('Title')
    const OpenSourceTile__Description = ossTileStyles('Description')

    const cleanIndex = DOMPurify.sanitize(index.content, { ALLOWED_TAGS: ['#text'] })
    const projectCards= items.reverse().map((project: RenderedDocument) => {
        const short = DOMPurify.sanitize(project.content, { ALLOWED_TAGS: ['#text'] })
        return <ListGroupItem key={project.id} className={OpenSourceTile__Item}>
            <a href={project.url!} className={OpenSourceTile__Title}>{project.title}</a><div className={OpenSourceTile__Description}>{short}</div>
        </ListGroupItem>
    })

    return (
        <section className={OpenSourceTile}>
            <h1 className={OpenSourceTile__Header}>{index.title}</h1>
            <div className={OpenSourceTile__Summary}>{cleanIndex}</div>
            <ListGroup className={OpenSourceTile__List}>
                {projectCards}
            </ListGroup>
        </section>
    );
}

export default OpenSourceTile
