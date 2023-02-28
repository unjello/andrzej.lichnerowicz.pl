import React from "react";
import {ListGroup, ListGroupItem, ListGroupItemText} from "reactstrap";
import DOMPurify from 'isomorphic-dompurify';
import defaultStyles from "./ProjectsTile.module.scss"
import Link from "next/link";
import {RenderedDocument} from "../../../lib/njcms/renderedDocument";
import { styleMerger, StyleProps } from "../../../lib/njcms/styles";

type Props = {
    items: any,
    index: any
}

const Projects = ({items, index, styles} : Props & StyleProps) => {
    const projectsTileStyles = styleMerger('ProjectsTile', defaultStyles, styles)
    
    const ProjectsTile = projectsTileStyles()
    const ProjectsTile__Header = projectsTileStyles('Header')
    const ProjectsTile__Summary = projectsTileStyles('Summary')
    const ProjectsTile__List = projectsTileStyles('List')
    const ProjectsTile__Item = projectsTileStyles('Item')
    const ProjectsTile__Image = projectsTileStyles('Image')
    const ProjectsTile__Title = projectsTileStyles('Title')
    const ProjectsTile__Text = projectsTileStyles('Text')
    const ProjectsTile__Description = projectsTileStyles('Description')
    
    const cleanIndex = DOMPurify.sanitize(index.content, { ALLOWED_TAGS: ['#text'] })
    type ProjectItem = RenderedDocument & { short: string }
    const projectItems = items.reverse().map((project: ProjectItem) => {
        const short = DOMPurify.sanitize(project.content, { ALLOWED_TAGS: ['#text'] })
        project.short = short
        return project
    })

    return (
        <section className={ProjectsTile}>
            <h1 className={ProjectsTile__Header}>{index.title}</h1>
            <div className={ProjectsTile__Summary}>{cleanIndex}</div>
            <ListGroup className={ProjectsTile__List}>
                {projectItems.map((project: ProjectItem) => 
                    <ListGroupItem className={ProjectsTile__Item} key={project.id}>
                        <img src={project.card} className={ProjectsTile__Image}></img>
                        <ListGroupItemText tag='div' className={ProjectsTile__Text}><a href={project.url!} className={ProjectsTile__Title}>{project.title}</a><div dangerouslySetInnerHTML={{ __html: project.short }} className={ProjectsTile__Description}/></ListGroupItemText>
                    </ListGroupItem>
                )}
            </ListGroup>
        </section>
    );
}

export default Projects
