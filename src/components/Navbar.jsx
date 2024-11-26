'use client';
import React from 'react'
import styles from '../styles/Navbar.module.css'
import GsapMagnetic from './MagneticEffect';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({setIsFading}) => {  
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsFading(true); // Trigger the fading class
    setTimeout(() => {
        navigate(path); // Navigate after fading out
        setIsFading(false); // Reset fading (not strictly necessary here)
    }, 500); // Match CSS transition duration
};

  return (
    <header className={styles.navbar}>
        <nav>
            <ul className={styles.menu}>
                <li>
                    <GsapMagnetic>
                        <h3><Link className={styles.menu_item} to="/">Home</Link></h3>
                    </GsapMagnetic>
                </li>
                <li>
                    <GsapMagnetic>
                        <h3><Link className={styles.menu_item} to="/About">About</Link></h3>
                    </GsapMagnetic>
                </li>
                <li>
                    <GsapMagnetic>
                        <h3><Link className={styles.menu_item} to="/Menu">Menu</Link></h3>
                    </GsapMagnetic>
                </li>
                <li>
                    <GsapMagnetic>
                        <h3><Link className={styles.menu_item} to="/Rsvp">Rsvp</Link></h3>
                    </GsapMagnetic>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar