import React from 'react'
import styles from '../styles/Modal.module.css'

const Modal = ({onClose}) => {
  return (
    <div className={styles.modal_background}>
        <div className={styles.modal_container}>
            <button className={styles.close_btn} onClick={() => onClose(false)}>X</button>
            <h2 className={styles.title}>Winnie Wong</h2>
            <p className={styles.body}>Add information here...</p>
            <div className={styles.gallery}></div>
        </div>
    </div>
  )
}

export default Modal