import '../App.css';
import styles from '../styles/Menu.module.css';
import Navbar from '../components/Navbar';

function Menu() {
  return (
    <div className={styles.menu_container}>
      <Navbar className={styles.navbar} />
      <img className={styles.menu_img} src="/MP-Menu-Design-Final2.jpg" alt="menu" width="500"/>
    </div>
  );
}

export default Menu;
