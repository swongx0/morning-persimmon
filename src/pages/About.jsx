import { useState } from 'react';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import styles from '../styles/About.module.css';
import '../App.css'

function About() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.about_container}>
        {openModal && <Modal onClose={() => setOpenModal(false)} />}
        <Navbar />
        {/* <h2 className={styles.about_title}>Meet The <br />  Creators</h2> */}
        <div className={styles.about_us}>
          <div className={styles.about_winnie}>
              <div className={styles.about_img}>
                <img src="https://placehold.co/450x500" />
              </div>
          </div>
        <div className={styles.about_sharon}>
            <div className={styles.about_img_btn}>
              <div className={styles.openModal_btn} onClick={() => setOpenModal(true)}>
                <img src="https://placehold.co/450x500" />
              </div>
            </div>
        </div>
        </div>
        <div className={styles.about_us}>
          <div className={styles.about_winnie}>
              <div className={styles.about_img_btn}>
                <img src="https://placehold.co/450x500" />
              </div>
          </div>
        <div className={styles.about_sharon}>
            <div className={styles.about_img}>
                <img src="https://placehold.co/450x500" />
            </div>
        </div>
        </div>
    </div>
  );
}

export default About;
