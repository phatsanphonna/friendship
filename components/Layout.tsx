import React from 'react'
import styles from '../styles/Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <main className={styles.wrapper}>
        {children}
      </main>
    </div>
  )
}

export default Layout