import styles from './index.module.scss';

function IndexPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
            <h1 className={styles.modalTitle}>ようこそ</h1>
            <button className={styles.bottomButton}>次に進む</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
