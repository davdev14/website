import React from 'react'
import styles from '../style/widgets/TitleCards.module.css'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

function TitleCards({ title, centerTitle, cardsContent }) {
  return (
    <div className="row">
      <div className="col-12">
        <span className="fst-italic" style={{ color: '#1d4371' }}>
          <h1 className={styles.center_small}>{title}</h1>
          <h1 className="text-center" style={{ marginBottom: "1em" }}>{centerTitle}</h1>
        </span>
        {
          cardsContent.map((item, key) => 
            <div className=" mb-3" key={key}>
              <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center center-small">
                  <div className={styles.center_small} style={{display: 'block', padding: '0 1em', width: "100%"}}>
                    <ExportedImage src={item.img.src} width={item.img.width} height={item.img.height} layout='responsive'/>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className={"card-title " + styles.center_small} style={{ color: 'red' }} dangerouslySetInnerHTML={{__html:item.title}}></h5>
                    <p className="card-text">
                    {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default TitleCards