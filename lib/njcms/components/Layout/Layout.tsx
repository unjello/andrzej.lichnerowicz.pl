import React, {Children, cloneElement, PropsWithChildren, ReactElement, ReactNode} from 'react'
import Head from 'next/head'
import Header from "../Header/Header";
import {Container} from "reactstrap";
import Footer from "../Footer/Footer";
import defaultStyles from "./Layout.module.scss"
import cn from "classnames"

export type Props = {
    readonly children?: ReactElement<any & { styles: any }>[],
    title: string,
    styles?: any
}

const Layout = ({ children, title = '@unjello', styles }: Props) => {
    const LayoutStyle = cn(defaultStyles.Layout, styles?.Layout)

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container fluid className={LayoutStyle}>
                <Header styles={styles}/>
                {Children.map(children, (child) => {
                    const item = child as ReactElement<PropsWithChildren<{styles: any}>>;
                    return cloneElement(item, { styles });
                })}
                <Footer styles={styles}/>
            </Container>
        </div>
    )
}

export default Layout