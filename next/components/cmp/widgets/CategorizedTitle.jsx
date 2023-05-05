import React from 'react'
import styles from './../style/widgets/CategorizedTitle.module.css'

function CategorizedTitle({title,category}) {
  return (
      <div className={styles.categorized_title}>
        <div>{category}</div>
        <h2>{title}</h2>
    </div>
  )
}

export default CategorizedTitle