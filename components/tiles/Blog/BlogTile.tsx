import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import Link from "next/link";
import defaultStyles from "./BlogTile.module.scss"
import {stripHtml} from "../../../lib/njcms/strip";
import {RenderedDocument} from "../../../lib/njcms/renderedDocument";
import cn from "classnames"
import { styleMerger, StyleProps } from "../../../lib/njcms/styles";

type Props = {
    items: any,
    index: any,
}

const BlogTile = ({items, index, styles} : Props & StyleProps) => {
    const blogTileStyles = styleMerger('BlogTile', defaultStyles, styles)
    
    const BlogTile = blogTileStyles()
    const BlogTile__Header = blogTileStyles('Header')
    const BlogTile__Summary = blogTileStyles('Summary')
    const BlogTile__List = blogTileStyles('List')
    const BlogTile__Item = blogTileStyles('Item')
    const BlogTile__Title = blogTileStyles('Title')
    const BlogTile__Date = blogTileStyles('Date')

    const cleanIndex = stripHtml(index.content)
    type BlogPost = RenderedDocument & { dateString: string }
    const blogItems = items.map((blogPost: BlogPost) => {
        const date = new Date(blogPost.date)
        blogPost.dateString = date instanceof Date && !isNaN(date.getTime())?date.toISOString().split('T')[0]:''
        return blogPost
    })

    return (
        <section className={BlogTile}>
            <h1 className={BlogTile__Header}>{index.title}</h1>
            <div className={BlogTile__Summary}>{cleanIndex}</div>
            <ListGroup className={BlogTile__List}>
                {blogItems.map((blogPost: BlogPost) => 
                    <ListGroupItem className={BlogTile__Item} key={blogPost.id}>
                        <a className={BlogTile__Title} href={`/blog/${blogPost.id}`}>{blogPost.title}</a><div className={BlogTile__Date}>/*{blogPost.dateString}*/</div>
                    </ListGroupItem>
                )}
            </ListGroup>
        </section>
    )
}

export default BlogTile
