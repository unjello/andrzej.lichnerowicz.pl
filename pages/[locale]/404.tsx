import { useTranslation } from 'next-i18next'
import { makeStaticPage } from '../../lib/njcms/static'

import Layout from "../../lib/njcms/components/Layout/Layout";
import React from "react";
import {Canvas} from "@react-three/fiber";
import {Scene404} from "../../components/partials/Scene404";
import styles from "../../styles/Page404.module.scss"

type Props = {
  _nextI18NNext: any,
}
const Page404 = ({}: Props) => {
  const { t } = useTranslation(['404', 'common', 'footer'])

  return (<Layout title={t('404:title')}>
    <div className={styles.container}>
    <Canvas>
      <Scene404/>
    </Canvas>
      </div>
  </Layout>)
}

export default Page404

const { getStaticPaths, getStaticProps } = makeStaticPage(['404', 'header', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
