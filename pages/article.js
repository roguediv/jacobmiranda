import Head from 'next/head'
import Article from '../components/article/Article'

export default function Home() {
  return (
    <>
      <Head>
        <title>Article</title>
        <meta name="description" content="This is the portfolio of Jacob Miranda." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article />
    </>
  )
}
