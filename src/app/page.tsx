import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.containerWrapper}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <span>박찬범</span>
          </div>
          <ul>
            <li>한국공학대학교</li>
            <li>배곧</li>
          </ul>
        </header>
        <main className={styles.main}>
          <div>찬범이 바보</div>
        </main>
      </div>
    </div>
  );
}
