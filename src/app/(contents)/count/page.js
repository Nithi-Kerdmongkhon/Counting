"use client"
import { Inter } from 'next/font/google'
import { useState } from 'react';
import styles from '@/app/styles/count.module.css'
import Navber from "@/app/components/navbar"
import Footer from "@/app/components/footer"

const inter = Inter({ subsets: ['latin'] })

export default function count() {
  const [count, setCount] = useState();
  const [name, setName] = useState();

  function handleCountChange(event) {
    const newValue = parseInt(event.target.value, 10) || 0;
    setCount(newValue);
  }

  function handleNameChange(event) {
    const newValue = parseInt(event.target.value, 10) || 0;
    setName(newValue);
  }
  return (
    <>
      <Navber /> 
      <div className={styles.container}>
        <div className={styles.containerGroup}>
          <div className={styles.inputValue}>
            <div className={styles.labelValue}>
              <label>นับบัณฑิตเข้ารับพระราชทานปริญญาบัตร</label>
            </div>
            <h2>บัณฑิตที่รับแล้ว</h2>
            <input type="number" value={count} onChange={handleCountChange} />
            <h2>บัณฑิตที่ยังไม่ได้รับ</h2>
            <input type="number" value={name} onChange={handleNameChange} /> 
          </div>
          <div className={styles.btnClick}>
            <button className={`${styles.btnPlus} ${styles.btnClick}`} onClick={() => { setCount(count + 1); setName(name - 1); }}>เพิ่มจำนวน</button>
            <button className={`${styles.btnDelete} ${styles.btnClick}`} onClick={() => { setCount(count - 1); setName(name + 1); }}>ลดจำนวน</button>
          </div>
        </div>
        
      </div>
      <Footer /> 
    </>
  )
}
