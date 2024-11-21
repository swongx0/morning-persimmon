import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <nav>
            <ul className={styles.menu}>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">RSVP</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar