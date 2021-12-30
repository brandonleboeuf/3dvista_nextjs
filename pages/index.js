import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>This is a demo of using 3DVista within a Next.js app.</h1>
        <div className={styles.grid}>
          <a href="/3dvista" className={styles.card}>
            <h2>3DVista &rarr;</h2>
            <p>Come See The Magic</p>
          </a>
        </div>
      </main>
    </div>
  );
}