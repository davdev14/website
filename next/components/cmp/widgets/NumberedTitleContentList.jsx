import React from 'react'
import styles from './../style/widgets/NumberedTitleContentList.module.css'

function NumberedTitleContentList({ items }) {
  const itemsHead = (items) => {
    return items.slice(0, (items.length + items.length % 2) / 2)
  };
  const itemsTail = (items) => {
    return items.slice((items.length + items.length % 2) / 2)
  };
  return (
    <div className={styles.widget}>
      <section className={styles.dl_blurbs} style={{ "padding": "1%" }}>
        <dl>
          {
            itemsHead(items).map((item, key) => (
              <React.Fragment key={key}>
                <dt>{item.title}</dt>
                <dd>{item.content}</dd>
              </React.Fragment>
            ))}
        </dl>

        <dl>
          {
            itemsTail(items).map((item, key) => (
              <React.Fragment key={key}>
                <dt>{item.title}</dt>
                <dd>{item.content}</dd>
              </React.Fragment>
            ))
          }
        </dl>
      </section>
    </div>
  )
}

export default NumberedTitleContentList