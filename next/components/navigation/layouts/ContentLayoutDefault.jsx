import React from 'react'
import './ContentLayoutDefault.module.css'

function ContentLayoutDefault() {
  return (
    <div>
       <div className="content-wrapper">
    <slot />
  </div>
    </div>
  )
}

export default ContentLayoutDefault