import React from 'react'
import './BreadcrumItem.module.css'
import Link from 'next/link'

function BreadcrumItem({ item, active = false }) {
  return (
    <li className="breadcrumb-item">
      {active ? (
        <span>
          {item.text}
        </span>
      ) : (
        <span>
          <Link href={item.url}>
            <a >{item.text}</a>
          </Link>
        </span>
      )
      }
    </li>
  )
}

export default BreadcrumItem