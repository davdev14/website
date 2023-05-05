import React from 'react'
import styles from './../style/widgets/ItemList.module.css'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

function ItemList({ items, iconSrc }) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className=" mb-3">
            {
              items.map((item, key) => (
                <div className="row g-0" key={key}  style={{padding : "0.5em"}}>
                  <div className="col-12 col-md-1" style={{textAlign: "right", padding : "1em 0.5em 1em 0", position: 'relative', top: '0.5em'}}>
                    <div style={{maxWidth: "2em"}}>
                      <ExportedImage className="card-img-top" src={iconSrc} width="3" height="3" layout='responsive'/>
                    </div>
                  </div>
                  <div className="col-12 col-md-11">
                    <div className="card-body">
                      <h5 className="card-title center-small">{item.title}</h5>
                      <p className="card-text">{item.content}</p>
                    </div>
                  </div>
                </div>
                ))
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default ItemList