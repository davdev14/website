import React from 'react'

function PaddedLayout({ items = [], ctnStyle = {}, padding = 0, style = {}, header = null }) {
  return (
    <div style={ctnStyle}>
      {header}

      <div style={{ ...style, padding: padding }}>
        {items.map((item, key) => (
          <div key={key}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaddedLayout