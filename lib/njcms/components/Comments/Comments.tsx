import {login, Status, Context} from 'masto';
import React, {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import Loading from "../Loading/Loading";
import CommentsList from "../CommentsList/CommentsList";
import styles from './Comments.module.scss'
import { useComments } from '../../useComments';

const BASE_URL: string = 'https://mastodon.gamedev.place'


type MastodonStatusCommentsResponse = Context | null
type MastodonStatusResponse = Status | null

type Props = {
    postId?: string
}

const Comments = ({postId}: Props) => {
    const { t } = useTranslation(['comments'])

    const {error, loading, status, comments} = useComments(postId)

    return postId ? <section className={styles.container}>
        <h2>{t("header")}</h2>
        {
            !!postId
                ? loading ? <Loading/> : error ? <div>{t("error")}</div> : <>
                <div>({t("discussion_is_at")}<a href={status?.url!}>mastodon</a>. {t("welcome")})</div>
                    {loading ? <Loading/> : error ? <></> : <CommentsList comments={comments?.descendants!}/>}</>
            :<div>No comments</div>
        }
    </section> : <></>
}


export default Comments