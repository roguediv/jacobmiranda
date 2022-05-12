import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SctHome from '../components/home/sections/SctHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Miranda Portfolio</title>
        <meta name="description" content="This is the portfolio of Jacob Miranda." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SctHome />
    </>
  )
}
