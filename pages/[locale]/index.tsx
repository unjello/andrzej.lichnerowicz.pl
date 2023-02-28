import {useTranslation} from 'next-i18next'
import { makeStaticPage } from '../../lib/njcms/static'
import React from "react";
import Layout from "../../lib/njcms/components/Layout/Layout";
import {Section} from "../../lib/njcms/content";
import Projects from "../../components/tiles/Projects/ProjectsTile";
import Talks from "../../components/tiles/Talks/TalksTile";
import OpenSource from "../../components/tiles/OpenSource/OpenSource";
import Art from "../../components/tiles/Art/ArtTile";
import { Content, Translation } from '../../lib/types';
import Blog from '../../components/tiles/Blog/BlogTile';

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

const Translations = [Translation.Common, Translation.Home, Translation.Header, Translation.Footer]
const Contents = [Content.Blog, Content.Project, Content.Art, Content.Talks, Content.OpenSource]
const { getStaticPaths, getStaticProps } = makeStaticPage(Translations, Contents)
export { getStaticPaths, getStaticProps }