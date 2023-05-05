import React from 'react'
import styles from './TitleContentWithBackgroundImg2.module.css'

function TitleContentWithBackgroundImg2({data}) {
  return (
    <div className="xapp-widget-6 lg-background"
    style={{backgroundImage: url('+data.backgroundImgSrc+')}}>
    <div className="row bg-container">
        <div className="col-lg-2 col-md-1">
        </div>
        <div className="col-lg-9 col-md-10  p-4 p-md-5" >
        <h1 className="display-4"  v-html={data.title}></h1>
        <p v-html={data.content}></p>
        <p v-if={data.linkText}><a className="fw-bold" v-bind:href={data.linkRef} v-html={data.linkText}></a></p>
        </div>

    </div>
      
    </div>
  )
}

export default TitleContentWithBackgroundImg2