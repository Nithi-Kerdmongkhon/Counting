
import styles from "@/app/styles/components/nav_report.module.css" // Adjust the path accordingly
import Image from 'next/image';

function Nav() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src="/LG.png"  width={440} height={100} alt='logo' priority/>
          </div>
      </div>
    </div>
  );
}

export default Nav;
