import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/static'

import Layout from "../../components/layout/Layout";
import React, {Suspense} from "react";
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

const getStaticProps = makeStaticProps(['404', 'header', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
