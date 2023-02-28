import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import defaultStyles from "./TalksTile.module.scss"
import {RenderedDocument} from "../../../lib/njcms/renderedDocument";
import { styleMerger, StyleProps } from "../../../lib/njcms/styles";

type Props = {
    items: any,
    index: any
}

const Talks = ({items, index, styles} : Props & StyleProps) => {
    const talksTileStyles = styleMerger('TalksTile', defaultStyles, styles)
    
    const TalksTile = talksTileStyles('')
    const TalksTile__Header = talksTileStyles('Header')
    const TalksTile__Summary = talksTileStyles('Summary')
    const TalksTile__List = talksTileStyles('List')
    const itemTypes = {
        'keynote': talksTileStyles('Item', 'Keynote'),
        'talk': talksTileStyles('Item', 'Talk'),
        'workshop': talksTileStyles('Item', 'Workshop'),
        'panel': talksTileStyles('Item', 'Panel'),
        'podcast': talksTileStyles('Item', 'Podcast'),
    }
    const TalksTile__Item = talksTileStyles('Item')
    const TalksTile__Image = talksTileStyles('Image')
    const TalksTile__Title = talksTileStyles('Title')
    const TalksTile__Text = talksTileStyles('Text')
    const TalksTile__Description = talksTileStyles('Description')
    


    const cleanIndex = DOMPurify.sanitize(index.content, { ALLOWED_TAGS: ['#text'] })
    type TalksItemType = keyof typeof itemTypes
    const projectCards= items.map((project: RenderedDocument) => {
        const short = DOMPurify.sanitize(project.where!, { ALLOWED_TAGS: ['#text'] })
        const year = project.date.split('.')[0]
        const type = project.type!.toLowerCase() as TalksItemType;
        if (project.url) {
            return <ListGroupItem className={`${itemTypes[type]} ${TalksTile__Item}`} key={project.id}>
                    <a href={project.url} className={TalksTile__Title}>{project.title}</a><div className={TalksTile__Description}>{year}, {short}</div>
            </ListGroupItem>
        } else {
            return <ListGroupItem className={`${itemTypes[type]} ${TalksTile__Item}`} key={project.id}>
                    {project.title}<div className={TalksTile__Description}>{year}, {short}</div>
                </ListGroupItem>
        }
    })

    return (
        <section className={TalksTile}>
            <h1 className={TalksTile__Header}>{index.title}</h1>
            <div className={TalksTile__Summary}>{cleanIndex}</div>
            <ListGroup className={TalksTile__List}>
                {projectCards}
            </ListGroup>
        </section>
    );
}

export default Talks
