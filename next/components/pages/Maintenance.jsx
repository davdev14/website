import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

function Maintenance({ text, app = {
  subtitle: 'This page is currently under maintenance',
  maintenanceIcon: process.env.MIX_BASE_URL + '/assets/img/maintenace.svg'
} }) {
  return (
    <div className="row align-center" style={{ textAlign: center }}>
      <div className="col-12">
        <p><ExportedImage src={app.maintenanceIcon} style={{ width: 15 }} /></p>
        <p style={{ textAlign: center, color: red }}>{app.subtitle}</p>
        <h3>{{ text }}</h3>
      </div>
    </div>
  )
}

export default Maintenance
