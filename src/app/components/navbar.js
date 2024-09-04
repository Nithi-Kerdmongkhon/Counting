"use client";
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from "@/app/styles/components/navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from "next-auth/react";

function Nav() {
  const { data: session } = useSession();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: '/login',
      redirect: true,
    });
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src="/LG.png" width={465} height={108} alt='logo' />
          </div>
          <ul className={click ? `${styles.menu} ${styles.active}` : styles.menu}>
            <Link className={styles.menuLink} onClick={closeMobileMenu} href="/count">นับจำนวน</Link>
            <Link className={styles.menuLink} onClick={closeMobileMenu} href="/faculty">คณะ</Link>
            <Link className={styles.menuLink} onClick={closeMobileMenu} href="/round">รอบ</Link>
            <Link className={styles.menuLink} onClick={closeMobileMenu} href="/report">ภาพรวม</Link>
            <Link className={styles.menuLink} onClick={closeMobileMenu} href="/sendNotify"target="_blank">sendNotify</Link>
            <div className={styles.signOutContainer}>
              {session && <span className={styles.username}>{session.user.name} </span>}
              <button className={styles.button} onClick={handleSignOut}>Sign out</button>
            </div>
          </ul>
          <div className={styles.mobileMenu} onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;