import Layout from "../../../components/layout/Layout";
import styles from "../../../styles/Post.module.scss";
import {useTranslation} from "next-i18next";
import {makeStaticPathsFromContent, makeStaticProps} from '../../../lib/static'
import {ContentType, Section} from "../../../lib/content";
import {useRouter} from "next/router";
import Comments from "../../../components/elements/Comments/Comments";


type Props = {
    _nextI18NNext: any,
    posts?: Section,
}



const Post = ({posts}: Props) => {
    const { t } = useTranslation(['common', 'blog'])
    const items = posts?.items!
    const router = useRouter()
    const { id } = router.query

    const postData = items.find(c => c.id == id)

    const tt = t('blog:title')
    const title = `${postData?.title} | ${tt}`
    return (
        <Layout title={title}>
            <section className={styles.container}>
                <h1>{postData?.title}</h1>
                <div className={styles.date}>{postData?.date}</div>
                <div dangerouslySetInnerHTML={{ __html: postData?.content! }} />
                {postData?.mastodonId && <Comments postId={postData?.mastodonId}/>}
            </section>
        </Layout>
    )
}


export default Post

const getStaticProps = makeStaticProps(
    ['common', 'blog', 'comments', 'header', 'footer'],
    [ContentType.Blog])
const getStaticPaths = makeStaticPathsFromContent(ContentType.Blog)

export { getStaticPaths, getStaticProps }
