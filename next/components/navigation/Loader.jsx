import React from 'react'
import './Loader.module.css'

function Loader() {
  return (
    <div> <div style="padding-top: 5vh; text-align: center">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
        
    </div>
  )
}

export default Loader