import React from 'react'
import styles from './../style/widgets/ScrollSpyContainer.module.css'

import ScrollSpyIndicator from '../../navigation/ScrollSpyIndicator.jsx'

function ScrollSpyContainer({treeNodes, content}) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row py-3">
                    <div className="col-ms-12 col-md-4 col-lg-3">
                        <div className={"sticky-top " + styles.sticky_top} style={{ zIndex: "0" }}>
                            <div className={styles.scroll_spy_container}>
                                <ScrollSpyIndicator nodes={treeNodes} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {content.map((item, key)=>(
                            <div key={key}>
                                <h3 id={item.id}>{item.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: item.text}}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSpyContainer