import React from 'react'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'

function CartTitleContentImage2({data}) {
  return (
    <div>
      <div style="padding: 1em;">
    <div className="card widget-card">
        <div className="img-container" style="'background-image: url('+data.imgSrc+');'">
            <div className="logo-container">
                <ExportedImage className="logo-img" src={data.imgSrc} alt=""/>
            </div>
        </div>
        <div className="card-body height-card-body">
            <h4 className="card-title">
                <Link className="nav-link" href={data.titleLink} v-html={data.title}></Link>
            </h4>
            <p className="card-text"   v-html={data.content}></p>
        </div>
    </div>
</div>

    </div>
  )
}

export default CartTitleContentImage2