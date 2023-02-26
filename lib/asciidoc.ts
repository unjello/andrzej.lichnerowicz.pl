import path from "path"
import fs, { truncateSync } from "fs"
import { RenderedDocument } from "./renderedDocument"
import matter from 'gray-matter'
import asciidoctor from "asciidoctor"

/**
 * Parse AsciiDoc (.ad, .adoc) document into an object. Embeds front-matter, and renders content. All images are inlined.
 *
 * @returns Returns an object with document contents
 * @param fileName Full path to a document
 */
export const getAsciiDocDocument = (fileName: string): RenderedDocument => {
    const id = path.parse(fileName).name
    const fileData = fs.readFileSync(fileName)

    const frontmatter = matter(fileData).data
    const date = frontmatter.date as any
    const dateString = date instanceof Date ? date.toISOString() : date

    // https://docs.asciidoctor.org/asciidoctor.js/latest/processor/convert-options/
    // https://docs.asciidoctor.org/asciidoc/latest/attributes/document-attributes-ref/
    const doc = asciidoctor().load(fileData, { 'safe': 'safe', 'standalone': false, 'attributes': { 'showtitle': true, 'skip-front-matter': truncateSync, 'source-highlighter': 'highlightjs' }})
    const content = doc.getContent()
    const title = doc.getTitle() || ''

    return {
        id,
        content,
        title,
        date: dateString ?? '',
        card: frontmatter.card as string ?? '',
        url: frontmatter.url as string ?? '',
        type: frontmatter.type as string ?? '',
        where: frontmatter.where as string ?? '',
        rank: frontmatter.rank as string ?? '',
        mastodonId: frontmatter.mastodonId as string ?? ''
    };
}