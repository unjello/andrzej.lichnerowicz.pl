import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import Link from "next/link";
import styles from "../../styles/Blog.module.scss"
import {stripHtml} from "../../lib/strip";
import {RenderedDocument} from "../../lib/renderedDocument";

type Props = {
    items: any,
    index: any
}

const Blog = ({items, index} : Props) => {
    const cleanIndex = stripHtml(index.content)
    const blogCards = items.map((blogPost: RenderedDocument) => {
        const date = new Date(blogPost.date)
        return <ListGroupItem className={styles.blogpost} key={blogPost.id}>
            <Link href={`/blog/${blogPost.id}`}>{blogPost.title}</Link><div className={styles.date}>/*{date.toISOString().split('T')[0]}*/</div>
        </ListGroupItem>
    })
    return (
        <section className={styles.container}>
            <h1>{index.title}</h1>
            <div className={styles.tag}>{cleanIndex}</div>
            <ListGroup>
                {blogCards}
            </ListGroup>
        </section>
    )
}

export default Blog
