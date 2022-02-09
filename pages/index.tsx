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
        
        <meta property="og:url" content="https://friendship.phatsanphon.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="เขียนเฟรนด์ชิพให้น้องซัน" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/810939530898309181/941040094230511626/thumb.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="เขียนเฟรนด์ชิพให้น้องซัน" />
        <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/810939530898309181/941040094230511626/thumb.png" />
      </Head>

      <div className={styles.root}>
        <main className={styles.wrapper}>
          <header className={styles.title}>
            <h1>เขียนเฟรนด์ชิพให้น้อนซัน</h1>
          </header>

          <Card />

          <footer className={styles.footer}>
            <a href="https://github.com/ssuniie/friendship" rel="noreferrer" target="_blank">GitHub</a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Home
