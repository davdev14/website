import React from 'react';
import styles from './AppFooter.module.css';
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'

function AppFooter({app}) {

    return (
        <div>
            <footer id="footer" className={styles.footer_area}>
                <div className={styles.footer_widget}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className={[styles.footer_logo_support, 'd-md-flex', 'align-items-end', 'justify-content-between'].join(' ')}>
                                    <div className={[styles.footer_logo, 'd-flex', 'align-items-end'].join(' ')}>
                                        <a className="mt-30" href={app.indexUrl}><ExportedImage src={app.appLogo} alt="Logo" /></a>
                                        <ul className={[styles.social, 'mt-30'].join(' ')}>
                                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i className="lni-instagram-original"></i></a></li>
                                            <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className={styles.footer_link}>
                                    <h6 className={styles.footer_title}>Services</h6>
                                    <ul>
                                        <li>
                                            <Link className="nav-link" href="/services/mobile-web-custom-application-development">
                                                <a> Mobile & Web Custom Application Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/services/digital-transformation-consulting">
                                                <a>Digital Transformation Consulting</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/services/it-solution-consulting">
                                                <a>IT Solution Consulting</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/services/search-engine-optimization">
                                                <a>SEO - Search Engine Optimization</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/services/web-marketing">
                                                <a> Web Marketing</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-10">
                                <div className={styles.footer_newsletter}>
                                    <h6 className={styles.footer_title}>Subscribe Newsletter</h6>
                                    <div className={styles.newsletter}>
                                        <form id="newsletter-form" action="#" method="POST" >
                                            <input type="email" name="email" placeholder="Your Email" required="required" style={{ color: "#f7ece6" }} />
                                            <button type="submit"><i className="lni-angle-double-right"></i></button>
                                        </form>
                                    </div>
                                    <p className="text">Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className={styles.footer_link}>
                                    <h6 className={styles.footer_title}>Company</h6>
                                    <ul>
                                        <li>
                                            <Link className="nav-link" href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/about">
                                                <a> About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/contacts">
                                                <a>Contacts</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className={styles.footer_link}>
                                    <h6 className={styles.footer_title}>Trainings & Certifications</h6>
                                    <ul>
                                        <li>
                                            <Link className="nav-link" href="/trainings-and-certifications/trainings">
                                              <a>Training for individuals</a>  
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/trainings-and-certifications/certification-training">
                                               <a>Certification training</a> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/trainings-and-certifications/training-service">
                                              <a>Training for organizations</a>  
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className={styles.footer_link}>
                                    <h6 className={styles.footer_title}>Help & Support</h6>
                                    <ul>
                                        <li>
                                            <Link className="nav-link" href="/faq">
                                               <a>FAQ</a> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/blog">
                                              <a> Blog</a> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="/terms-and-conditions">
                                               <a>Terms & Conditions</a> 
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default AppFooter