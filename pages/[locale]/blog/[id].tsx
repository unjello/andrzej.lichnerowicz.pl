import Layout from "../../../lib/njcms/components/Layout/Layout";
import {useTranslation} from "next-i18next";
import {makeStaticPathsFromContent, makeStaticProps} from '../../../lib/njcms/static'
import {Section} from "../../../lib/njcms/content";
import {useRouter} from "next/router";
import Post from "../../../lib/njcms/components/Post/Post";
import { Content, Translation } from "../../../lib/types";

type Props = {
    _nextI18NNext: any,
    posts?: Section,
}

const PostPage = ({posts}: Props) => {
    const { t } = useTranslation(['common', 'blog'])
    const items = posts?.items!
    const router = useRouter()
    const { id } = router.query

    const postData = items.find(c => c.id == id)

    const tt = t('blog:title')
    const title = `${postData?.title} | ${tt}`
    return (
        <Layout title={title}>
            <Post postData={postData}/>
        </Layout>
    )
}


export default PostPage

const getStaticProps = makeStaticProps(
    [Translation.Common, Translation.Blog, Translation.Comments, Translation.Header, Translation.Footer],
    [Content.Blog])
const getStaticPaths = makeStaticPathsFromContent(Content.Blog)

export { getStaticPaths, getStaticProps }
