import React from 'react'
import styles from '../styles/ImageCard.module.css'

const ImageCard = ({
    imgSrc,
    imgAlt,
    description
}) => {
  return (
    <div className={styles.card_container}>
        <img className={styles.card_img} src={imgSrc} alt={imgAlt}></img>
        {/* <p className={styles.card_description}>{description}</p> */}
    </div>
  )
}

export default ImageCard