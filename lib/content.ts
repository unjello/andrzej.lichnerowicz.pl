import path from "path";
import {RenderedDocument} from "./renderedDocument";
import fs from "fs";
import {getMarkdownDocument} from "./markdown";

export const enum ContentType {
    Project = 'projects',
    Talks = 'talks',
    Art = 'art',
    OpenSource = 'oss',
    Blog = 'posts'
}

export type Section = {
    index: RenderedDocument | null,
    items: RenderedDocument[]
}


/**
 * Retrieves content section (items + index)
 *
 * @returns Returns a section object
 * @param contentType type of section to fetch
 * @param locale translation id
 */
export function getSection(contentType: ContentType, locale: string): Section {
    const items = getSortedContentData(contentType, locale);
    const index = getContentIndex(contentType, locale);
    return {
        index,
        items
    }
}




const getContentDirectory = (contentType: ContentType, locale: string): string => {
    return path.join(process.cwd(), 'content', contentType.toString(), locale)
}

const isMarkdownDoc = (name: string) => name.endsWith(".md")
const isAsciiDoc = (name: string) => name.endsWith(".adoc") || name.endsWith(".ad")
const isIndex = (name: string) => path.parse(name).name == 'index'
const isPost = (name: string) => !isIndex(name) && (isMarkdownDoc(name) || isAsciiDoc(name))

const walkDirectory = (dir: string): string[] => {
    let result: string[] = [];
    const fileNames = fs.readdirSync(dir)
    fileNames.forEach((file) => {
        const fileName = path.join(dir, file);
        const fileStat = fs.statSync(fileName);
        if (fileStat && fileStat.isDirectory()) {
            result.concat(walkDirectory(fileName))
        } else {
            result.push(fileName)
        }
    });
    return result;
}

/**
 *
 * @internal
 * @returns Returns text stripped of any HTML
 * @param fileName
 */
function getDocument(fileName: string): RenderedDocument {
    return getMarkdownDocument(fileName)
}



function getContentIndex(contentType: ContentType, locale: string) {
    const contentDirectory = getContentDirectory(contentType, locale)
    const fileNames = walkDirectory(contentDirectory);
    const indexData = fileNames.filter((fileName) => isIndex(fileName)).map((fileName) => {
        return getDocument(fileName)
    })
    return indexData.length == 1 ? indexData[0] : null
}

/**
 * Retrieves all content items sorted by date or rank
 *
 * @internal
 * @returns Returns an array of RenderedDocument objects
 * @param contentType type of section to fetch
 * @param locale translation id
 */
function getSortedContentData(contentType: ContentType, locale: string): RenderedDocument[] {
    const contentDirectory = getContentDirectory(contentType, locale)
    const fileNames = walkDirectory(contentDirectory);
    const allPostsData = fileNames.filter((fileName) => isPost(fileName)).map((fileName) => {
        return getDocument(fileName)
    })
    return allPostsData.sort((first, second) => {
        const a = first.date || (first.rank && parseInt(first.rank)) || 0
        const b = second.date || (second.rank && parseInt(second.rank!)) || 1
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    })
}

function getContentIds(contentType: ContentType, locale: string) {
    const contentDirectory = getContentDirectory(contentType, locale)
    const fileNames = walkDirectory(contentDirectory);
    return fileNames.filter((fileName) => isPost(fileName)).map((fileName) => {
        return {
            params: {
                id: path.basename(fileName).replace(/\.md$/, ''),
            },
            locale,
        }
    })
}


