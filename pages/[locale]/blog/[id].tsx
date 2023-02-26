import Layout from "../../../components/layout/Layout";
import {useTranslation} from "next-i18next";
import {makeStaticPathsFromContent, makeStaticProps} from '../../../lib/static'
import {ContentType, Section} from "../../../lib/content";
import {useRouter} from "next/router";
import Post from "../../../lib/components/Post/Post";

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
    ['common', 'blog', 'comments', 'header', 'footer'],
    [ContentType.Blog])
const getStaticPaths = makeStaticPathsFromContent(ContentType.Blog)

export { getStaticPaths, getStaticProps }
