import '../App.css';
import styles from '../styles/RSVP.module.css';


function RSVP() {
  return (
    <div className={styles.rsvp_container}>
        <h2>Let's Party!</h2>
        <img src="logo-alt.svg" width="150" alt="persimmon logo"/>
        <button className={styles.rsvp_btn}>
          <a href="https://partiful.com/e/lXlBiRJgnt1BjZtijGrl" target="_blank" rel="noreferrer" >
            RSVP
          </a>
        </button>
    </div>
  );
}

export default RSVP;
