import React from "react";
import {Container} from "reactstrap";
import Comment from '../Comment/Comment'
import styles from './CommentsList.module.scss'
import {Status} from "masto";

type Props = {
    comments: Status[]
}

const CommentsList = ({comments}: Props) => {
    return <Container>
        {comments.map((comment) => {
            return <>
                <Comment comment={comment}/>
                <hr className={styles.verticalBar}/>
            </>
        })
        }
    </Container>
}


export default CommentsList