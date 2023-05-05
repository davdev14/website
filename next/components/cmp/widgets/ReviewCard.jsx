import React from 'react'
import styles from './../style/widgets/ReviewCard.module.css'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

function ReviewCard({ content, title, company, starts, }) {
  return (
    <div>
      <div style={{ "padding": "1em" }}>
        <div className={styles.review_card}>
          <div className="wrapper" style={{ "padding": "1.5em" }}>
            <p> {content} </p>
          </div>
          <hr style={{ "backgroundColor": "#555" }} />
          <div className="wrapper" style={{ "padding": "1.5em" }}>
            <div className={styles.review_name} >{title}</div>
            <div className={styles.review_company}>
              {company}
              <div style={{ width: '100px', float: 'right' }}>
                <ExportedImage src={starts.src} width={starts.width} height={starts.height} alt="Notation" layout='responsive' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard