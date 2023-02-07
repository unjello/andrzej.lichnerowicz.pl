import React from "react";
import styles from './Comment.module.scss'
import {Badge, CardBody} from "reactstrap";
import {Status} from "masto";
import * as Icon from 'react-bootstrap-icons'

type Props = {
    comment: Status
}

const Comment = ({comment}: Props) => {
    return <>
                    <CardBody className={styles.container}>
                        <div className="d-flex flex-start">
                            <img className="rounded-circle shadow-1-strong me-3"
                                 src={comment.account.avatarStatic} alt="avatar" width="60"
                                 height="60"/>
                            <div>
                                <h6 className={styles.author}><a href={comment.account.url}>{comment.account.displayName}</a></h6>
                                <div className="d-flex align-items-center mb-3">
                                    <p className={styles.date}>
                                        {comment.createdAt}
                                        {comment.favourited && <><Icon.Star/><Badge pill color="light" className={styles.dark}>{comment.favouritesCount}</Badge></>}
                                        {comment.reblogged && <><Icon.Share/><Badge pill color="light" className={styles.dark}>{comment.reblogsCount}</Badge></>}
                                    </p>
                                </div>
                                <div className={styles.comment} dangerouslySetInnerHTML={{ __html: comment.content }} />
                            </div>
                        </div>
                    </CardBody>
                </>
}


export default Comment