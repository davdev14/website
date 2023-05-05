import React from 'react'

function GridLayout({ items = [], style={}, ctnStyle={}, cls={}, header=null }) {
  return (
    <div style={ctnStyle}>
      {header}
      <div className="container-fluid">
        <div className={"row row-cols-1 justify-content-center " +cls} style={style}>
          {items.map((item, key) => (
            <div key={key}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GridLayout