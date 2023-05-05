import React from 'react'
import ExportedImage from 'next-image-export-optimizer'

function NotFound404({ app = {
  subtitle: 'Resource you are looking for was not found on this server.',
  pageIcon: process.env.MIX_BASE_URL + '/assets/img/404.svg'
} }) {
  return (
    <div className="row align-center" style={{ textAlign: center }}>
      <div className="col-12">
        <p><ExportedImage src={app.pageIcon} style={{ width: 20 }} /></p>
        <p style={{ textAlign: center, color: red }}>{app.subtitle}</p>
      </div>
    </div>
  )
}

export default NotFound404
