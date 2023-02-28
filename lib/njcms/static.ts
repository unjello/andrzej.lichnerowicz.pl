import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../../next-i18next.config'
import {getSection, Section} from "./content";
import {GetStaticPropsContext} from "next";
import { StaticPropsType } from '.';

/**
 * Map of content sections. Used in props.
 */
export type Sections = {
  [key: string]: Section;
};


export const makeStaticPage = <T extends StaticPropsType,C extends StaticPropsType>(ns: T[] = [], content: C[] = []) => {
  const getStaticProps = makeStaticProps(ns, content)
  return { getStaticPaths, getStaticProps }
}

/**
 * @returns Returns i18n dynamic routing paths
 */
export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng
    }
  }))


export const getI18nPathsFromContent = <C extends StaticPropsType>(type_: C) => {
    let paths = []
    for (const locale of i18nextConfig.i18n.locales!) {
      const sections = serverSideContent(locale, [type_])
      for (const p of sections[type_.toString()].items) {
        paths.push({
          params: {
            locale,
            id: p.id
          }
        })
      }
    }
    return paths;
}

/**
 * @returns Returns dynamic routing paths
 */
export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export const makeStaticPathsFromContent = <C extends StaticPropsType>(type_: C) => {
  return () => ({
    fallback: false,
    paths: getI18nPathsFromContent(type_)
  })
}

/**
 * Get list of rendered page content grouped by selected sections
 *
 * @remark Each section consist of index page, and all other pages.
 *
 * @param locale - ISO693-1 language code
 * @param contentTypes - Array of {@link ContentType} to fetch and render
 * @returns The list of content
 */
export function serverSideContent<C extends StaticPropsType>(locale: string, contentTypes: C[]): Sections {
  const sections: Sections = {}
  for (const ct of contentTypes) {
    sections[ct.toString()] = getSection(ct, locale)
  }
  return sections
}

/**
 * @returns Returns complete props for a page
 * @param ctx - NextJS' static props' context
 * @param ns - i18n namespaces' list
 * @param content - content namespaces' list
 */
export async function getI18nProps<T extends StaticPropsType,C extends StaticPropsType>(ctx: GetStaticPropsContext, ns: T[] = [], content: C[] = []) {
  const locale = ctx?.params?.locale as string
  return {
    ...(await serverSideTranslations(locale, ns.map(x => x.toString()))),
    ...(serverSideContent(locale, content))
  }
}

/**
 * Builds an instance of GetStaticProps function, that populates props with selected i18n namespaces
 * and content Sections
 *
 * @returns GetStaticProps function for use in NextJS
 * @param ns - i18n namespaces' list
 * @param content - content namespaces' list
 */
export function makeStaticProps<T extends StaticPropsType,C extends StaticPropsType>(ns: T[] = [], content: C[] = []) {
  return async function getStaticProps(ctx: GetStaticPropsContext) {
    return {
      props: await getI18nProps(ctx, ns, content)
    }
  }
}
