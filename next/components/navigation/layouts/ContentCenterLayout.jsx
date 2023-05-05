import React from 'react'
import './ContentCenterLayout.module.css'

function ContentCenterLayout() {
  return (
    <div>
        <div className="content-wrapper d-flex align-items-center justify-content-center">
    <slot />
  </div>
    </div>
  )
}

export default ContentCenterLayout