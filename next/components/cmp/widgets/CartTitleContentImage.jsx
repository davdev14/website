import React from 'react'
import Link from 'next/link'
import styles from './../style/widgets/CartTitleContentImage.module.css'
import ExportedImage from 'next-image-export-optimizer'

function CartTitleContentImage({title,content,imgSrc,linkPath,linkText}) {
  return (
    <div>
      <div style={{padding: "1em"}}>
    <div className={"card "+styles.widget_card}>
        <div id="card-body-1" className="card-body height-card-body">
            <div>
                <h3 className="card-title"> {title} </h3>
                <p className="card-text"  > {content} </p>
                <div className={styles.img_container}>
                  <ExportedImage
                    src={imgSrc}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <Link className="nav-link" href={linkPath}><a>{linkText}</a></Link>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default CartTitleContentImage