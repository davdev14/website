import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import styles from './../style/widgets/CartTopImageTitleContent.module.css'

function CartTopImageTitleContent({imgSrc, linkPath, linkText, title, content, items=[], bgColor }) {
    return (
        <div>
            <div className={styles.widget} style={{ padding: '1em' }}>

                <div className={styles.img_container}>
                    <ExportedImage
                        src={imgSrc}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className={styles.widget_wrapper} style={{ backgroundColor: bgColor }}>
                    <h4 className={styles.widget_title}>
                        <Link className="nav-link no-underline" href={linkPath} >
                            <a>
                                <i className="lni-chevron-right"></i>
                                {title}
                            </a>
                        </Link>
                    </h4>
                    <div className={styles.widget_body}>
                        <div>
                            <p className="card-text">{content}</p>
                            <ul>
                                {items.map((item, key) => (
                                    <li key={key}>{item}</li>
                                ))}
                            </ul>
                            {
                            /*
                            <Link className="nav-link no-underline" href={linkPath}>
                                <button type="submit" className="btn btn-secondary" style={{ border: "none", borderRadius: 0, padding: "1em", fontWeight: 'bold', backgroundColor: "#fff", color: bgColor }}>{linkText}</button>
                            </Link>
                            */
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartTopImageTitleContent