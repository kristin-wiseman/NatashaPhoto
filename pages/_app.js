import Head from "next/head";
import '../styles/global.scss';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Layout from '../components/layout';

export default function MyApp({Component, pageProps}) {
    return (
        <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    )
}