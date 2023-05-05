import React from 'react'
import styles from './../style/widgets/SideImageTitleContent.module.css'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'

function SideImageTitleContent({ ctnStyle = {}, backgroundImgSrc, title, content, linkUrl, linkText }) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row" style={ctnStyle}>
                    <div className="col-sm-12 col-md-5 col-lg-4 g-0">
                        <div className={styles.img_wrapper} style={{ height: 1, minHeight: '15em', position: 'relative' }}>
                            <ExportedImage
                                src={backgroundImgSrc}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className={styles.bg_img}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-8 d-flex align-items-center" >
                        <div style={{ fontSize: '1em', padding: '2em' }}>
                            <h1>{title}</h1>
                            <span style={{ display: 'inline-block', width: '2em', backgroundColor: '#d83b01', height: '3px', marginBottom: '0.5em' }}></span>
                            <p>{content}</p>
                            {linkUrl && (
                                <p>
                                    <Link className="nav-link" style={{ padding: 0 }} href={linkUrl}>
                                        {linkText}
                                    </Link>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideImageTitleContent