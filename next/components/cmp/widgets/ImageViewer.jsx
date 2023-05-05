import React from 'react'
import ExportedImage from 'next-image-export-optimizer'

function ImageViewer({style, src, width, height}) {
  return (
    <div>
    <div style={{width: '100%', display: 'block'}}>
        <ExportedImage src={src} width={width} height={height} layout='responsive'/>
      </div>
    </div>
  )
}

export default ImageViewer