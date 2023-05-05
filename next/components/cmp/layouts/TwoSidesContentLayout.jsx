import React from 'react'
import styles from './../style/layouts/TwoSidesContentLayout.module.css'

function TwoSidesContentLayout({title, items = []}) {
    const [leftCtn, rightCtn] = items;
  return (
    <div>
      <div className="container-fluid">
    <div className="row" style={{backgroundColor: "#423e3b"}}>
        <div className="col-12 g-0" >
            <div style={{backgroundColor: '#f1efed', padding: '2em'}}>
                <h1>{title}</h1>
                <div className="row" style={{backgroundColor: '#ffffff'}}>
                    <div className="col-md-12 col-lg-6 g-0" >
                        <div className={styles.contact_form_border}>
                            <div>{leftCtn}</div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 g-0 d-flex align-items-center">
                        <div>{rightCtn}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default TwoSidesContentLayout