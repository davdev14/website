import React from 'react'

function TwoSidesContentLayout() {
  return (
    <div>
      <div className="container-fluid">
    <div v-if="items && items.length == 2" className="row" style={{backgroundColor: "#423e3b"}}>
        <div className="col-12 g-0" >
            <div style={{backgroundColor: '#f1efed', padding: 2}}>
                <h1 v-if="config" v-html="config.title"></h1>
                <div className="row" style={{backgroundColor: '#ffffff'}}>
                    <div className="col-md-12 col-lg-6 g-0" >
                        <div className="contact-form-border">
                            <div
                                is="items[0].type" data="items[0].data" ></div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 g-0 d-flex align-items-center">
                            <div
                                is="items[1].type" data="items[1].data" ></div>
                        <slot name="right-content"/>
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