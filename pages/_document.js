import Document, {Html, Head, Main, NextScript, Link} from 'next/document'

class NPDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;500&family=Seaweed+Script&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default NPDocument