import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import styles from './../style/widgets/CartTopImageTitleContent2.module.css'

function CartTopImageTitleContent2({ img, title, content, linkPath, linkText }) {
    return (
        <div>
            <div className={styles.widget} style={{ padding: '1em' }}>
                <Link className="nav-link no-underline" href={linkPath} >
                    <a>
                        <div className={styles.img_container} style={{position: 'relative'}}>
                            <ExportedImage
                                src={img.src}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                    </a>
                </Link>
                <div className={styles.widget_wrapper}>
                    <Link className="nav-link no-underline" href={linkPath} >
                        <a>
                            <h4 className={styles.widget_title +' fw-bolder'}><span>{title}</span></h4>
                        </a>
                    </Link>
                    <div>
                        <div>
                            <p className={styles.card_text}>{content}</p>
                            <Link className="nav-link no-underline" href={linkPath} >
                                <a className="btn btn-dark" style={{ padding: '0.5em', minWidth: '10em', fontWeight: 'bold', color: '#fff' }}>{linkText}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartTopImageTitleContent2