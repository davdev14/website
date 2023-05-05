import React from 'react'

function StickyLayout({ stickyRight = false, baseStyle, items = [] }) {
  const [sticky, content] = items;

  return (
    <div>
      <div style={baseStyle}>
        <div className="container-fluid" style={{ transform: "translateZ(0)" }}>
          <div className="row py-3">
            <div className={'col-ms-12 col-md-4 col-lg-3 ' + (stickyRight ? ' order-2' : '')}
            >
              <div className="sticky-top">
                {sticky}
              </div>
            </div>
            <div className="col">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyLayout