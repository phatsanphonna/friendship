import React, { useState } from 'react';
import styles from '../styles/Card.module.css'

import { postContent } from '../utils/postContent';

const Card: React.FC = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (!name || !message) return

    const { data } = await postContent({ message, name })

    if (data.success) {
      alert(data.message)
    } else {
      alert('เกิดปัญหาทางเซิฟเวอร์ โปรดรอน้องซันแก้ภายในเร็ว ๆ นี้')
    }
  }

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h3>น้อนซัน</h3>
      </header>

      <main className={styles.main}>
        <textarea
          rows={10}
          placeholder='เขียนข้อความที่นี่'
          onChange={e => setMessage(e.target.value)}
        />
      </main>

      <footer className={styles.footer}>
        <button onClick={handleSubmit}>ส่ง</button>
        <input type="text"
          placeholder='แปะชื่อ'
          onChange={e => setName(e.target.value)}
        />
      </footer>
    </div>
  );
};

export default Card;
