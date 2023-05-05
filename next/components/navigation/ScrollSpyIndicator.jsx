import React from 'react'
import styles from './ScrollSpyIndicator.module.css'

function ScrollSpyIndicator({nodes, title}) {
  return (
    <nav className='scroll-spy-indicator' style={{display: 'block', paddingLeft:"1em"}}>
      {title && <h5 style={{textAlign: 'center'}}>{title}</h5>}
      <ul className={'nav '+styles.scroll_spy_list} style={{display: 'block'}}>
        {nodes.map((node, key)=>(
          <li className={"nav-item " + styles.scroll_spy_elm} key={key} >
            <a className="nav-link" href={node.id}>{node.text}</a>
            {node.nodes && node.nodes.length && (
              <ScrollSpyIndicator nodes={node.nodes} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ScrollSpyIndicator