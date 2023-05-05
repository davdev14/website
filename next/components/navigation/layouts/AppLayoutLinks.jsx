import React from 'react'
import './AppLayoutLinks.module.css'
import Link from 'next/link'

function AppLayoutLinks() {
  return (
    <div>
        <div id="nav">
    <Link to="/">Home</Link> |
    <Link to="/about">About</Link> |
    <Link to="/contacts">Contacts</Link> |
    <Link to="/test">Test</Link>
  </div>
    </div>
  )
}

export default AppLayoutLinks