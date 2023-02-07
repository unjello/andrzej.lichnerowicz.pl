import fs from 'fs';
import path from 'path';
import {remark} from 'remark'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkHighlightjs from 'remark-highlight.js'
import remarkFrontmatter from "remark-frontmatter";
import remarkEmbedFrontmatter from "remark-embed-frontmatter/build/module";
import {remarkEmbedFrontMatterImageSync, remarkEmbedImagesSync} from "remark-embed-images-sync/build/module";

import remarkReadAsVfile from "./remark-read-as-vfile";
import {RenderedDocument} from "./renderedDocument";

/**
 * Remark pipeline singleton object for parsing Markdown documents.
 */
const markdownProcessor = () => remark()
    .use(remarkEmbedFrontmatter)
    .use(remarkEmbedFrontMatterImageSync, { "images": "card" })
    .use(remarkHighlightjs)
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkToc)
    .use(remarkFrontmatter)
    .use(remarkEmbedImagesSync)
    .use(remarkRehype)
    .use(rehypeStringify);

/**
 * Parse Markdown (.md) document into an object. Embeds front-matter, and renders content. All images are inlined.
 *
 * @returns Returns an object with document contents
 * @param fileName Full path to a document
 */
export const getMarkdownDocument = (fileName: string): RenderedDocument => {
    const id = path.parse(fileName).name

    const vfile = remarkReadAsVfile(fileName, {encoding: 'utf8'})
    const markdown = markdownProcessor().processSync(vfile);
    const content = String(markdown);

    const data = markdown.data as Readonly<Record<string, any>>
    const title = data.frontmatter.title as string
    const date = data.frontmatter.date as any
    const dateString = date instanceof Date ? date.toISOString() : date

    return {
        id,
        content,
        title,
        date: dateString ?? '',
        card: data.frontmatter.card as string ?? '',
        url: data.frontmatter.url as string ?? '',
        type: data.frontmatter.type as string ?? '',
        where: data.frontmatter.where as string ?? '',
        rank: data.frontmatter.rank as string ?? '',
        mastodonId: data.frontmatter.mastodonId as string ?? ''
    };
}
