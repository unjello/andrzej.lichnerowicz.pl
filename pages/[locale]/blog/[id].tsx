import Layout from "../../../components/layout/Layout";
import styles from "../../../styles/Post.module.scss";
import {useTranslation} from "next-i18next";
import {makeStaticPathsFromContent, makeStaticProps} from '../../../lib/static'
import {ContentType, Section} from "../../../lib/content";
import {useRouter} from "next/router";


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

    const tt = t('title')
    const title = `${postData?.title} | ${tt}`
    return (
        <Layout title={title}>
            <section className={styles.container}>
                <h1>{postData?.title}</h1>
                <div className={styles.date}>{postData?.date}</div>
                <div dangerouslySetInnerHTML={{ __html: postData?.content! }} />
            </section>
        </Layout>
    )
}


export default Post

const getStaticProps = makeStaticProps(
    ['common', 'blog', 'header', 'footer'],
    [ContentType.Blog])
const getStaticPaths = makeStaticPathsFromContent(ContentType.Blog)

export { getStaticPaths, getStaticProps }

/*
export const getStaticPaths: GetStaticPaths = async ({locales}) => {
    let paths = []
    for (const locale of locales!) {
        for (const p of getContentIds(ContentType.Blog, locale)) {
            paths.push(p)
        }
    }
    return {
        paths,
        fallback: false,
    };}


export const getStaticProps: GetStaticProps = async ({locale, params}) => {
    const messages = (await import(`../../lang/${locale!}.json`)).default
    const postData = getPostData(ContentType.Blog, params!.id as string, locale!);
    return {
        props: {
            postData,
            messages
        },
    };
}*/
