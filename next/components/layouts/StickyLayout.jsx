import React from 'react'

function StickyLayout() {
  return (
    <div>
      <div style={config.baseStyle}>
    <div className="container-fluid" style="transform: translateZ(0);">
        <div className="row py-3">
            <div className="'col-ms-12 col-md-4 col-lg-3 '+(items.stickyRight?' order-2':'')"
                style={items.sticky.style}>
                <div className="sticky-top">
                    <div is="items.sticky.type" data="items.sticky.data" ></div>
                </div>
            </div>
            <div className="col">
                <div is="items.content.type" data="items.content.data" ></div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default StickyLayout