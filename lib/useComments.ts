import { Component, ComponentType, forwardRef, useEffect, useState } from "react"
import {login, Status, Context} from 'masto';
import { useTranslation } from "next-i18next";

type MastodonStatusCommentsResponse = Context | null
type MastodonStatusResponse = Status | null

const BASE_URL: string = 'https://mastodon.gamedev.place'


export const useComments = (postId?: string) => {
    const [comments, setComments] = useState<MastodonStatusCommentsResponse>(null)
    const [status, setStatus] = useState<MastodonStatusResponse>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                if (!!postId) {
                    const masto = await login({
                        url: BASE_URL
                    })
                    const status = await masto.v1.statuses.fetch(postId)
                    const comments = await masto.v1.statuses.fetchContext(postId)
                    if (!!status && !!comments) {
                        setStatus(status)
                        setComments(comments)
                        setLoading(false)
                    }
                }
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }
        fetchData()
    }, [postId])

    return {
        error, 
        loading,
        status,
        comments
    }
}