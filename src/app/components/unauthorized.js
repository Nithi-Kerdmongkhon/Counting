import { signIn } from "next-auth/react";
import styles from "../styles/error.module.css"; // สไตล์สำหรับหน้า error

export default function UnauthorizedPage() {
  const handleLoginAgain = () => {
    signIn("google", {
      callbackUrl: "/faculty", // หลังจากเข้าสู่ระบบจะกลับไปที่หน้า faculty
      prompt: "select_account", // ให้ผู้ใช้เลือกบัญชีใหม่
    });
  };

  return (
    <div className={styles.errorPage}>
      <h1>Access Denied</h1>
      <p>คุณไม่มีสิทธิ์ในการเข้าถึงระบบนี้</p>
      <button onClick={handleLoginAgain} className={styles.retryButton}>
        เข้าสู่ระบบด้วยบัญชีอื่น
      </button>
    </div>
  );
}
