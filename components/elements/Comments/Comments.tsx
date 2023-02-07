import {login, Status, Context} from 'masto';
import React, {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import Loading from "../Loading/Loading";
import CommentsList from "../CommentsList/CommentsList";
import styles from './Comments.module.scss'

const BASE_URL: string = 'https://mastodon.gamedev.place'


type MastodonStatusCommentsResponse = Context | null
type MastodonStatusResponse = Status | null

type Props = {
    postId: string
}

const Comments = ({postId}: Props) => {
    const { t } = useTranslation(['comments'])

    const [comments, setComments] = useState<MastodonStatusCommentsResponse>(null)
    const [status, setStatus] = useState<MastodonStatusResponse>(null)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [isError, setError] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        login({
            url: BASE_URL
        }).then(masto => {
            return Promise.all([
                masto.v1.statuses.fetch(postId),
                masto.v1.statuses.fetchContext(postId)
            ])
        }).then(responses => {
            setStatus(responses[0])
            setComments(responses[1])
            setLoading(false)
        }).catch(reason => {
            setError(true)
            setLoading(false)
        })
    }, [])

    return <section className={styles.container}>
        <h2>{t("header")}</h2>
        {
            !!postId
                ? isLoading ? <Loading/> : isError ? <div>{t("error")}</div> : <>
                <div>({t("discussion_is_at")}<a href={status?.url!}>mastodon</a>. {t("welcome")})</div>
                    {isLoading ? <Loading/> : isError ? <></> : <CommentsList comments={comments?.descendants!}/>}</>
            :<div>No comments</div>
        }
    </section>
}


export default Comments