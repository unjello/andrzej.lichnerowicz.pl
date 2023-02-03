import React, {ReactNode} from 'react'
import Head from 'next/head'
import Header from "./Header";
import {Container} from "reactstrap";
import Footer from "./Footer";
import styles from "../../styles/layout/Layout.module.scss"

export type Props = {
    children?: ReactNode
    title: string,
}

const Layout = ({ children, title = '@unjello' }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container fluid className={styles.container}>
                <Header/>
                {children}
                <Footer/>
            </Container>
        </div>
    )
}

export default Layout