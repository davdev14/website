import React from 'react'
import TextTitleContent from "./TextTitleContent"
import styles from './../style/widgets/ContactItems.module.css'

function ContactItems({ items }) {
  return (
    <div>
      <div style={{ padding: '2em' }}  >
        {
          items.map((item, key) => (
            <TextTitleContent {...item} key={key} />
          ))
        }
      </div>
    </div>
  )
}

export default ContactItems