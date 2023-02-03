import {useTranslation} from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/static'
import React from "react";
import Layout from "../../components/layout/Layout";
import {ContentType, Section} from "../../lib/content";
import Blog from "../../components/partials/Blog";
import Projects from "../../components/partials/Projects";
import Talks from "../../components/partials/Talks";
import OpenSource from "../../components/partials/OpenSource";
import Art from "../../components/partials/Art";

type Props = {
    _nextI18NNext: any,
    posts?: Section,
    projects?: Section,
    art?: Section,
    talks?: Section,
    oss?: Section
}

const Homepage = ({posts, art, talks, projects, oss}:Props) => {
  const { t } = useTranslation(['common', 'home'])

  return (<Layout title={t('home:title')}>
            <Blog items={posts!.items} index={posts!.index}/>
            <Projects items={projects!.items} index={projects!.index}/>
            <Art items={art!.items} index={art!.index}/>
            <Talks items={talks!.items} index={talks!.index}/>
            <OpenSource items={oss!.items} index={oss!.index}/>
        </Layout>)
}

export default Homepage

const getStaticProps = makeStaticProps(
    ['common', 'home', 'header', 'footer'],
    [ContentType.Blog, ContentType.Project, ContentType.Art, ContentType.Talks, ContentType.OpenSource])
export { getStaticPaths, getStaticProps }
