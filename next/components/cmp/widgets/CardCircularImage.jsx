import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import styles from './../style/widgets/CardCircularImage.module.css'

function CardCircularImage({ imgSrc, title, content }) {
  return (
    <div style={{ padding: "1em"}}>
      <div className={styles.card + " card"}>
        <div style={{ textAlign: "center", paddingTop: "2em" }}>
          <div className={styles.image_wrapper}>
            <ExportedImage className={styles.card_img_top} src={imgSrc.src} width={10} height={10} layout='responsive' />
          </div>
        </div>
        <div id="card-body-1" className="card-body height-card-body"  style={{ margin: "1em" }}>
          <div>
            <h5 className={styles.card_text + " card-title"}> {title} </h5>
            <p className={styles.card_text + " card-text"}> {content} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCircularImage