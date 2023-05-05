import React from 'react'
import styles from './../style/layouts/ScrollSpyLayout.module.css'

import ScrollSpyIndicator from '../../navigation/ScrollSpyIndicator.jsx'

function ScrollSpyLayout({items = [], header = null, treeNodes, stickyTop = 0, sideTitle}) {
    return (
        <div>
            {header}
            <div className="container-fluid">
                <div className="row py-3">
                    <div className="col-ms-12 col-md-4 col-lg-3">
                        <div className={"sticky-top"} style={{ zIndex: "0", top: stickyTop }}>
                            <div className={styles.scroll_spy_container}>
                                <ScrollSpyIndicator nodes={treeNodes} title={sideTitle}/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {items.map((item, key)=>(
                          <div key={key}>
                            {item}
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSpyLayout