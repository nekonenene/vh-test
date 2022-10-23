import styles from './index.module.scss';

function IndexPage() {
  return (
    <main className={styles.main}>
      <div id="modal" className={styles.modalContainer}>
        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
            <h3 className={styles.modalTitle}>ようこそ</h3>
            <button className={styles.bottomButton}>次に進む</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
