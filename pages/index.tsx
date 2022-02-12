import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>เขียนเฟรนด์ชิพให้น้องซัน</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://friendship.phatsanphon.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="เขียนเฟรนด์ชิพให้น้องซัน" />
        <meta property="og:image" content="./thumb.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="เขียนเฟรนด์ชิพให้น้องซัน" />
        <meta name="twitter:image" content="./thumb.png" />
      </Head>

      <Layout>
        <header className={styles.title}>
          <h1>เขียนเฟรนด์ชิพให้น้อนซัน</h1>
        </header>

        <Card />

        <footer className={styles.footer}>
          <a href="https://github.com/ssuniie/friendship" rel="noreferrer" target="_blank">GitHub</a>
        </footer>
      </Layout>
    </>
  )
}

export default Home
