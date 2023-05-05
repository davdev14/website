import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import styles from './../style/widgets/AuthorInfo.module.css'

function AuthorInfo({ imgSrc, name, readTime, publicationDate }) {
  return (
    <div>
      <div className={styles.author_container}>
        <div className={styles.img_wrapper}>
          <ExportedImage className="card-img-top" src={imgSrc.src} width={imgSrc.width} height={imgSrc.height} layout='responsive'/><br />
        </div>
        <p>
          <span style={{ fontWeight: 'bold' }}>{name}</span><br />
          <span style={{ fontStyle: 'italic' }}>{readTime}</span><br />
          {publicationDate}
        </p>
      </div>
    </div>
  )
}

export default AuthorInfo