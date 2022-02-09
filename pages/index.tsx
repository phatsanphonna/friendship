import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>เขียนเฟรนด์ชิพให้น้องซัน</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="twitter:image" content="../images/thumb.png" />
      </Head>

      <div className={styles.root}>
        <main className={styles.wrapper}>
          <header className={styles.title}>
            <h1>เขียนเฟรนด์ชิพให้น้อนซัน</h1>
          </header>

          <Card />

          <footer className={styles.footer}>
            <a href="">GitHub</a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Home
