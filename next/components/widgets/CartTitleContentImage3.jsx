import React from 'react'
import Link from 'next/link'

function CartTitleContentImage3({data}) {
  return (
    <div>
      <div style={{padding: 1}}>
    <div className="card widget-card">
        <div id="card-body-1" className="card-body height-card-body">
            <div>
                <p className="img-container" style={{backgroundImage: url('+data.imgSrc+')}}>
                </p>
                <h3 className="card-title" v-html={data.title}></h3>
                <p className="card-text"   v-html={data.content}></p>
                <Link className="nav-link btn" to={data.linkPath} v-html={data.linkText}></Link>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default CartTitleContentImage3