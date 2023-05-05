import React from 'react'
import styles from './../style/widgets/TitleContentWithBackgroundImg.module.css'
import ExportedImage from 'next-image-export-optimizer'

function TitleContentWithBackgroundImg({ backgroundImgSrc, title, content, linkText, linkRef }) {
  return (
    <div className={styles.lg_background}>
      <ExportedImage
        src={backgroundImgSrc}
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.bg_img}
      />
      <div className={"row " + styles.bg_container}>
        <div className="col-lg-2 col-md-1">
        </div>
        <div className="col-lg-9 col-md-10  p-4 p-md-5" >
          <h1 className="display-4" dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
          {linkText &&
            <p><a className="fw-bold" href={linkRef} dangerouslySetInnerHTML={{ __html: linkText }}></a></p>
          }
        </div>

      </div>
    </div>
  )
}

export default TitleContentWithBackgroundImg