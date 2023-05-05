import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import styles from './../style/widgets/CartTitleImage.module.css'

function CartTitleImage({ titleLink, title, imgSrc, content }) {
  return (
    <div>
      <div style={{ padding: '1em' }}>
        <div className="card widget-card">
          <div id="card-body-1" className="card-body height-card-body">
            <div>
              <div className={styles.card_text}>
                <Link className="nav-link" href={titleLink}>
                  <a>
                    <span className={styles.card_title}>
                      {title}
                    </span>
                    <div className={styles.img_container}>
                      <ExportedImage
                        src={imgSrc}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <p className={styles.card_text}>
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTitleImage