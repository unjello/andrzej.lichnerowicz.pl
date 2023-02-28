import cn from "classnames"

export interface StyleProps {
    styles?: any
}

export interface StyleElementProps {
    styleMerger?: (element?: string, modifier?: string) => string|undefined
}

export const styleMerger = (block: string, defaultStyle: any, style: any) => (element?: string, modifier?: string): string|undefined => {
    const key = !element ? `${block}` : (!!modifier ? `${block}__${element}--${modifier}` : `${block}__${element}`)
    type DefaultStyleKeyType = keyof typeof defaultStyle
    type StyleKeyType = keyof typeof style
    const defaultStyleKey = key as DefaultStyleKeyType
    const styleKey = key as StyleKeyType
    const defaultStyleValue = defaultStyle && defaultStyle[defaultStyleKey]
    const styleValue = style && style[styleKey]
    if (defaultStyleValue && styleValue) {
        return cn(defaultStyleValue, styleValue)
    } else if (styleValue) {
        return styleValue
    }
    else if (defaultStyleValue) {
        return defaultStyleValue
    } else {
        return undefined
    }
}