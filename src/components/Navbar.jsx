'use client';
import React from 'react'
import styles from '../styles/Navbar.module.css'
import GsapMagnetic from './MagneticEffect';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <nav>
            <ul className={styles.menu}>
                <li>
                    <GsapMagnetic>
                        <p><a className={styles.menu_item} href="/">About</a></p>
                    </GsapMagnetic>
                </li>
                <li>
                    <GsapMagnetic>
                        <p><a className={styles.menu_item} href="/">Menu</a></p>
                    </GsapMagnetic>
                </li>
                <li>
                    <GsapMagnetic>
                        <p><a className={styles.menu_item} href="/">Gallery</a></p>
                    </GsapMagnetic>
                </li>
                <li>
                    <GsapMagnetic>
                        <p><a className={styles.menu_item} href="/">Rsvp</a></p>
                    </GsapMagnetic>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar