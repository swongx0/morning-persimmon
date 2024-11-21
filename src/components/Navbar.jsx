import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <nav>
            <ul className={styles.menu}>
                <li>
                    <p><a href="/">About</a></p>
                </li>
                <li>
                    <p><a href="/">Menu</a></p>
                </li>
                <li>
                    <p><a href="/">Gallery</a></p>
                </li>
                <li>
                    <p><a href="/">RSVP</a></p>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar