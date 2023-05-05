import React from 'react'
//import styles from '../../style/widgets/SimpleTextTitleContent.module.css'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

function SimpleTextTitleContent({title, content, style={}}) {
  return (
    <div style={style}>
      <div style={{paddingTop: "1em"}}>
        <div className="row">
            <div className="col-md-12">
                <h3><strong dangerouslySetInnerHTML={{ __html: title}} ></strong></h3>
                <p dangerouslySetInnerHTML={{ __html: content}} ></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SimpleTextTitleContent