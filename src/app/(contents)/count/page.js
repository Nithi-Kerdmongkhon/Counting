"use client";

import { useState, useEffect } from 'react';
import styles from '@/app/styles/count.module.css';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import getData from '@/app/components/CLUD/get';

async function updateCounter(current) {
  const postData = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ current })
  };

  const res = await fetch('http://localhost:3000/api/counter', postData);
  if (!res.ok) {
    throw new Error("Failed to update counter");
  }
  return res.json();
}

export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  useEffect(() => {
    fetchData();
}, []);

async function fetchData(type = '') {
    try {
        const data = await getData('counter', type);
        if (data.count && data.count.length > 0) {
            setCount(data.count[0].current);
        }
        if (data.total && data.total.length > 0) {
            setName(data.total[0].totalSum - data.count[0].current || 0);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


async function handleCountChange(event) {
  const newValue = parseInt(event.target.value, 10) || 0;
  setCount(newValue);
  try {
      await updateCounter(newValue);
  } catch (error) {
      console.error("Error updating counter:", error);
  }
}

  async function handleNameChange(event) {
    const newValue = parseInt(event.target.value, 10) || 0;
    setName(newValue);
  }

  async function incrementCount() {
    const newCount = count + 1;
    setCount(newCount);
    setName(name - 1);
    try {
        await updateCounter(newCount);
    } catch (error) {
        console.error("Error updating counter:", error);
    }
  }

  async function decrementCount() {
    const newCount = count - 1;
    setCount(newCount);
    setName(name + 1);
    try {
        await updateCounter(newCount);
    } catch (error) {
        console.error("Error updating counter:", error);
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.BodyContainer}>
          <label>นับบัณฑิตเข้ารับพระราชทานปริญญาบัตร</label>
          <div className={styles.ContainerContent}>
            <h2>บัณฑิตที่รับแล้ว</h2>
            <input type="number" value={count} onChange={handleCountChange} />
            <h2>บัณฑิตที่ยังไม่ได้รับ</h2>
            <input type="number" value={name} onChange={handleNameChange} />

            <div className={styles.btnClick}>
              <button className={`${styles.btnPlus} ${styles.btnClick}`} onClick={incrementCount}>เพิ่มจำนวน</button>
              <button className={`${styles.btnDelete} ${styles.btnClick}`} onClick={decrementCount}>ลดจำนวน</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
