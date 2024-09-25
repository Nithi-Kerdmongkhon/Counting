"use client";
import { useEffect } from 'react';
import Head from "next/head";
import Layout from "../layout/layout";
import styles from "../styles/login.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
  
    if (!session || !session.user.allowed) {
      // alert("ไม่มีสิทธิ์ในการเข้าถึง กรุณาเลือกบัญชีใหม่");
      router.push('/login'); // เปลี่ยนเส้นทางไปยังหน้า login
    } else {
      router.push('/faculty');
    }
  }, [session, status, router]);

  const handleLogin = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/faculty",
        prompt: "select_account", // ให้ผู้ใช้เลือกบัญชี
      });
    } catch (error) {
      console.error("Unexpected error occurred during sign in:", error);
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>; // แสดงข้อความขณะโหลด
  }

  // ถ้าผู้ใช้เข้าสู่ระบบแล้วไม่แสดงหน้า login
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.logo}>
        <Image src="/logoRmuti.png" width={130} height={250} alt="RMUTI logo" />
      </div>
      <section className={styles.group}>
        <div className={styles.title}>
          <h1 className={styles.message_title}>Login</h1>
          <p>Welcome to Royal Graduation Ceremony Ragamangala University Of Technology Isan</p>
        </div>
        <div>
          <button className={styles.google} type="button" onClick={handleLogin}>
            <Image src="/google.png" width={30} height={20} alt="Google Logo" />
            เข้าสู่ระบบด้วย Google
          </button>
        </div>
      </section>
    </Layout>
  );
}
