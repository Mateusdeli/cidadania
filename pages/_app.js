import { ThemeProvider } from 'styled-components'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import theme from '../src/styles/themes/main'
import Head from 'next/head'
import Header from '../src/screens/layout/header/'
import Footer from '../src/screens/layout/footer/'
import GlobalStyle from '../src/styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>3ricias</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
