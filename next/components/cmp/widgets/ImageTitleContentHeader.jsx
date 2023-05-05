import React from 'react'
import styles from './../style/widgets/ImageTitleContentHeader.module.css'
import ExportedImage from 'next-image-export-optimizer'

function ImageTitleContentHeader({ imgSrc, content, title, style = {} }) {
  return (
    <div style={style}>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-6 col-lg-5 col-xl-4" style={{ textAlign: "center" }}>
          <div style={{ margin: "1em", borderRadius:'50%', overflow:'hidden' }}>
            <ExportedImage src={imgSrc.src} width={imgSrc.width} height={imgSrc.height} layout='responsive' />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-7 col-xl-8">
          <div className={styles.heading} style={{ padding: "2em" }}>
            <h1 className={styles.heading_header} dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className={styles.heading_text}>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTitleContentHeader