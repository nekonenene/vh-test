import styles from './index.module.scss';

function IndexPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.modalTitle}>こんにちは</h1>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
