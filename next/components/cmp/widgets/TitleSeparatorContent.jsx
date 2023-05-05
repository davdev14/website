import React from 'react'
import styles from './../style/widgets/TitleSeparatorContent.module.css'

function TitleSeparatorContent({title, separatorColor, content, style={}}) {
  return (
    
    <div style={{paddingBottom: 0.1}} >
      <div style={style}>
        <h1 style={{"fontSize": "3em"}}>{title}</h1>
        {separatorColor && (
          <span style={{display: "inline-block", width: '2em', height: '3px', marginBottom: '0.5em', backgroundColor: separatorColor}}></span>
          )}
        <p>{content}</p>
      </div>
    </div>
  )
}

export default TitleSeparatorContent