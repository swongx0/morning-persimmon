import '../App.css';
import React, { useEffect, useState } from 'react';
import styles from '../styles/RSVP.module.css';
import Navbar from '../components/Navbar';

function RSVP() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current image

  const images = [
    "RSVP-PAGE-1.svg",
    "RSVP-PAGE-2.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 600);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className={styles.rsvp_container}>
        <Navbar />
        <h2>Let's Party!</h2>
        {/* <img src="logo-alt.svg" width="150" alt="persimmon logo"/>  */}
        <div className={styles.slideshow_container}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="dancing logo"          
            className={index === currentIndex ? styles.active : ''}
            style={{ opacity: index === currentIndex ? 1 : 0, transition: 'opacity 0.5s' }}
          />
        ))}
      </div>
        <a href="https://partiful.com/e/lXlBiRJgnt1BjZtijGrl" target="_blank" rel="noreferrer" >
          <button className={styles.rsvp_btn}>
              RSVP
          </button>
        </a>
    </div>
  );
}

export default RSVP;
