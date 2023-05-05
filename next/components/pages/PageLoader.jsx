import React from 'react'
import Loader from '../navigation/Loader'

function PageLoader({contentData, errors}) {
  return (
    <div style="height: 100%;">
    {contentData?(
          <div v-if={{contentData}}>
            {
              contentData.map((section)=>{
                <div
                    key={section.id}
                    is={section.layout} items={section.items} config={section.config}></div>
              })
            }
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
  )
}

export default PageLoader