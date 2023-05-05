import React from 'react'
import styles from './../style/widgets/ImageTitleContentSection.module.css'
import ExportedImage from 'next-image-export-optimizer'

function ImageTitleContentSection({ title, content, imgSrc }) {
  return (
    <div>
      <div className={styles.x_row}>
        <div className={styles.x_col_12 + ' ' + styles.x_col_md_6 + ' ' + styles.test_div}>
        <ExportedImage
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.bg_img}
        />
        </div>
        <div className={styles.x_col_12 + ' ' + styles.x_col_md_6 + ' d-flex align-items-center justify-content-center'} >
          <div className={styles.heading} style={{ "padding": "1.5em" }}>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p style={{ "margin": 0 }}>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTitleContentSection