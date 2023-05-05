import React from 'react'
import styles from './TitleDescriptionStackBackground.module.css'

function TitleDescriptionStackBackground({data}) {
  return (
    <div className="x-main-container" >
    <div className="x-background-img" >
    </div>
    <div className="x-main-content">

        <h1 style="margin: 0">{ data.title }</h1>
        <span style="display: inline-block; width: 3em; background-color: red; height: 3px;"></span>
        <p style={{margin: 0.9}} v-html={data.text}></p>
    </div>
</div>
  )
}

export default TitleDescriptionStackBackground