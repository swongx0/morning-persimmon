import '../App.css';
import styles from '../styles/Menu.module.css';
import Navbar from '../components/Navbar';

function Menu() {
  return (
    <div className={styles.menu_container}>
      <Navbar />
      <div className={styles.menu_card}>
        <div className={styles.menu_title}>
          <h2>Menu</h2>
        </div>
        <div className={styles.menu_items}>
          <h4 className={styles.menu_coffee}>Coffee</h4>
            <ul className={styles.menu_item_list}>
              <p><li>Chestnut Latte</li></p>
              <p><li>Persimmon Latte</li></p>
            </ul>
          <hr />
          <h4 className={styles.menu_pastries}>Pastries</h4>
            <ul className={styles.menu_item_list}>
              <p><li>Mini Loaf</li></p>
              <p><li>Snowball Cookies</li></p>
              <p><li>Chestnut Cookies</li></p>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
