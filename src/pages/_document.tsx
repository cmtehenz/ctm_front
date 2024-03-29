import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&family=Merriweather:wght@300;400;700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}

export default MyDocument