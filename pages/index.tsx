import React from 'react';
import styles from './index.module.scss';

function IndexPage() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  return (
    <main className={styles.main}>
      <button className={styles.openModalButton} onClick={() => setIsOpenModal(true)}>モーダル表示</button>
      <div id="modal" className={`${styles.modal} ${isOpenModal ? '' : styles.modalHidden}`}>
        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
            <h3 className={styles.modalTitle}>ようこそ</h3>
            <button className={styles.bottomButton} onClick={() => setIsOpenModal(false)}>モーダル削除</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
