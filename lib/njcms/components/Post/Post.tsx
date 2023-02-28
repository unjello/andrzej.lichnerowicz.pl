import React, { useEffect } from "react";
import Comments from "../Comments/Comments";
import { RenderedDocument } from "../../renderedDocument";
import styles from "../../../../styles/Post.module.scss";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

type Props = {
    postData?: RenderedDocument
}

const Post = ({postData}: Props) => {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return <section className={styles.container}>
    <h1>{postData?.title}</h1>
    <div className={styles.date}>{postData?.date}</div>
    <div dangerouslySetInnerHTML={{ __html: postData?.content! }} />
    <Comments postId={postData?.mastodonId}/>
</section>
}


export default Post