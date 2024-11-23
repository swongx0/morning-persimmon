import styles from '../styles/About.module.css';
import '../App.css'

function About() {
  return (
    <div className={styles.about_container}>
        <h2 className={styles.about_title}>Meet The <br />  Creators</h2>
        <br />
        <div className={styles.about_winnie}>
            <div className={styles.about_img}>
                <img src="https://placehold.co/600x700" />
            </div>
        </div>
        <div className={styles.about_sharon}>
            <div className={styles.about_img}>
                <img src="https://placehold.co/600x700" />
            </div>
        </div>
    </div>
  );
}

export default About;
