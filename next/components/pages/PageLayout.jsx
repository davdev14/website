import React from 'react'
import Loader from '../navigation/Loader'

function PageLayout({contentData, errors}) {
  return (
    <div>
      <div style={{height: 100}}>
        {contentData?(
          <div v-if={{contentData}}>
            <slot data={{contentData}}/>
          </div>
        ):(
          errors?(
              <div>
                  {{errors}}
              </div>
            ):(
              <Loader/>
            )
        )}
      </div>
    </div>
  )
}

export default PageLayout
