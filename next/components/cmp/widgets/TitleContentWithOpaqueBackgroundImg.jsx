import React from 'react'
import styles from './../style/widgets/TitleContentWithOpaqueBackgroundImg.module.css'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

function TitleContentWithOpaqueBackgroundImg({ backgroundImgSrc, title, content, linkRef, linkText }) {
  return (
    <div className={styles.widget + ' ' + styles.lg_background}>
      <ExportedImage
        src={backgroundImgSrc}
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.bg_img}
      />
      <div className={styles.content_container +" row bg-container"}>
        <div className="col-lg-2 col-md-1">
        </div>
        <div className="col-lg-9 col-md-10  p-4 p-md-5" >
          <h1 className="display-4">{title}</h1>
          <p>{content}</p>
          <p><a className="fw-bold" href={linkRef}>{linkText}</a></p>
        </div>

      </div>

    </div>
  )
}

export default TitleContentWithOpaqueBackgroundImg