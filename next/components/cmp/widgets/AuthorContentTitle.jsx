import React from 'react'
import styles from './../style/widgets/AuthorContentTitle.module.css'
import AuthorInfo from './AuthorInfo'
import TitleContentWithBackgroundImg from './TitleContentWithBackgroundImg'

function AuthorContentTitle({ author, content }) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row py-3">
          <div className="col-ms-12 col-md-4 col-lg-3 align-self-end">
            <AuthorInfo {...author} />
          </div>
          <div className="col">
            <TitleContentWithBackgroundImg {...content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorContentTitle