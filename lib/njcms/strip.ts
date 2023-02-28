import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitize HTML data.
 *
 * @returns Returns text stripped of any HTML
 * @param data - string containing HTML data
 */
export function stripHtml(data: string): string {
    return DOMPurify.sanitize(data, { ALLOWED_TAGS: ['#text'] })
}