import React, { useState } from 'react';
import styles from '../styles/Card.module.css'

import { postContent } from '../utils/postContent';
import { pushWebhook } from '../utils/webhook';

const Card: React.FC = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async () => {
    if (!name || !message) {
      alert('อย่าลืมเขียนเนื้อหาให้ครบด้วย')
      return
    }

    if (isSent) {
      alert('ระบบได้ส่งข้อความให้แล้ว')
      return
    }
    
    try {
      postContent({ message, name })

      setName('')
      setMessage('')

      await pushWebhook({ message, name })
    } catch (err) {
      console.log(err)
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
          value={message}
        />
      </main>

      <footer className={styles.footer}>
        <button onClick={handleSubmit}>ส่ง</button>
        <input type="text"
          placeholder='แปะชื่อ'
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </footer>
    </div>
  );
};

export default Card;
