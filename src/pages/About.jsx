import { useState } from 'react';
import styles from '../styles/About.module.css';
import '../App.css'

function About() {

  const [isImgActive, setIsImgActive] = useState(false);

  const handleToggle = () => {
    setIsImgActive(!isImgActive);
  }

  return (
    <div className={styles.about_container}>
        {/* <h2 className={styles.about_title}>Meet The <br />  Creators</h2> */}
        <div className={`${styles.about_winnie} ${isImgActive ? styles.active : ''}`} onClick={handleToggle}>
            <div className={styles.about_img}>
                {!isImgActive && <img src="https://placehold.co/600x700" />}
                {isImgActive && <div className={styles.expanded_content}>New Content</div>}
            </div>
        </div>
        <div className={`${styles.about_sharon} ${isImgActive ? styles.hidden : ''}`}>
            <div className={styles.about_img}>
                <img src="https://placehold.co/600x700" />
            </div>
        </div>
    </div>
  );
}

export default About;
