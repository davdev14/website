import React from 'react'
import styles from '../style/widgets/TextTitleContent.module.css'

function TextTitleContent({title, items, style}) {
  return (
    <div>
      <div className="row" style={style}>
        <div className="col-md-12">
        <h3><strong>{title}</strong></h3>
        {items.map((item, key)=>(
          <div  key={key} dangerouslySetInnerHTML={{ __html: item}}></div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default TextTitleContent