import React from 'react'
import './ContentLayoutTest.module.css'
import AppLayoutLinks from '../AppLayoutLinks'

function ContentLayoutTest() {
  return (
    <div>
      <header className="header" />
    <AppLayoutLinks />
    <slot />
    </div>
  )
}

export default ContentLayoutTest