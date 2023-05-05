import React, { useState } from 'react'
import styles from './AppHeader.module.css'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'
import { Nav, Navbar, NavLink, NavDropdown, Container } from 'react-bootstrap'

function AppHeader({ app, route = null }) {
    const [withSearchbar, enableSearchBar] = useState(false);
    const toogleSearchbar = () => {
        enableSearchBar(oldState => !oldState);
    };

    const navLinkClass = (path) => {
        if (path instanceof Array) {
            return (path.includes(route)) ? "active-group" : "";
        } else {
            return (route == path) ? "nav-link active" : "nav-link";
        }
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="custom-nav" variant="light" sticky="top">
                <Container fluid>
                    <Link href={'/'}>
                        <Navbar.Brand href="/">
                            <div style={{ position: 'relative', paddingLeft: 40 }}>
                                <span className={styles.header_logo}>
                                    <ExportedImage src={app.appLogo} alt="Logo" style={{ marginRight: "0.7em" }} />
                                </span>
                                <b>CIA</b>
                            </div>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/">
                                <Nav.Link className={navLinkClass("/")} href="/">Home</Nav.Link>
                            </Link>

                            <NavDropdown title="Services" className={navLinkClass(["/services", "/services/mobile-web-custom-application-development", "/services/mobile-web-custom-application-development", "/services/digital-transformation-consulting", "/services/it-solution-consulting", "/services/search-engine-optimization", "/services/web-marketing"])} >
                                <Link href="/services/mobile-web-custom-application-development">
                                    <NavDropdown.Item className={navLinkClass("/services/mobile-web-custom-application-development")} href="/services/mobile-web-custom-application-development">
                                        Mobile & Web Custom Application Development
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/services/digital-transformation-consulting">
                                    <NavDropdown.Item className={navLinkClass("/services/digital-transformation-consulting")} href="/services/digital-transformation-consulting">
                                        Digital Transformation Consulting
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/services/it-solution-consulting">
                                    <NavDropdown.Item className={navLinkClass("/services/it-solution-consulting")} href="/services/it-solution-consulting">
                                        IT Solution Consulting
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/services/search-engine-optimization">
                                    <NavDropdown.Item className={navLinkClass("/services/search-engine-optimization")} href="/services/search-engine-optimization">
                                        SEO - Search Engine Optimization
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/services/web-marketing">
                                    <NavDropdown.Item className={navLinkClass("/services/web-marketing")} href="/services/web-marketing">
                                        Web Marketing
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <Link href="/services">
                                    <NavDropdown.Item className={navLinkClass("/services")} href="/services">
                                        All our services
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                            { /*
                            <NavDropdown title="Trainings & Certifications" className={navLinkClass(["/trainings-and-certifications", "/trainings-and-certifications/trainings", "/trainings-and-certifications/trainings", "/trainings-and-certifications/certification-training"])} >
                                <Link href="/trainings-and-certifications/trainings">
                                    <NavDropdown.Item className={navLinkClass("/trainings-and-certifications/trainings")} href="/trainings-and-certifications/trainings">
                                        Trainings For Individuals
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/trainings-and-certifications/certification-training">
                                    <NavDropdown.Item className={navLinkClass("/trainings-and-certifications/certification-training")} href="/trainings-and-certifications/certification-training">
                                        Certification Trainings
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/trainings-and-certifications/training-service">
                                    <NavDropdown.Item className={navLinkClass("/trainings-and-certifications/training-service")} href="/trainings-and-certifications/training-service">
                                        Team / Corporate Training
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <Link href="/trainings-and-certifications">
                                    <NavDropdown.Item className={navLinkClass("/trainings-and-certifications")} href="/trainings-and-certifications">
                                        Our training offers
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                            */}
                            <Link href="/trainings-and-certifications/">
                                <Nav.Link className={navLinkClass("/trainings-and-certifications/")} href="/trainings-and-certifications/">Trainings & Certifications</Nav.Link>
                            </Link>
                            <Link href="/blog">
                                <Nav.Link className={navLinkClass("/blog")} href="/blog">Blog</Nav.Link>
                            </Link>
                            <Link href="/contacts">
                                <Nav.Link className={navLinkClass("/contacts")} href="/contacts">Contacts</Nav.Link>
                            </Link>
                            <Link href="/about">
                                <Nav.Link className={navLinkClass("/about")} href="/about">About</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className="d-lg-block d-md-none" onClick={toogleSearchbar}>
                                <i className={withSearchbar ? "lni-close" : "lni-search"} style={{ fontSize: "1.5em" }}></i>
                            </Nav.Link>
                            <form className="row d-md-block d-lg-none" action="#" method="POST">
                                <div className="col-12" style={{ padding: "0 10px 10px" }}>
                                    <input className="form-control me-2" type="search" placeholder="Search in CIA..." aria-label="Search" required="required" />
                                </div>
                                <div className="col-12 input-group" style={{ borderRadius: "5px" }}>
                                    <select className="form-select" id="inputGroupSelect01" defaultValue={null}>
                                        <option>All Categories</option>
                                        <option value="1">Services</option>
                                        <option value="2">Trainings & Certifications</option>
                                        <option value="3">Projects Incubator</option>
                                        <option value="4">Blog</option>
                                    </select>
                                    <button className="btn btn-secondary" type="button" style={{ border: "solid 1px #ced4da" }}>Search</button>
                                </div>
                            </form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={styles.animated_wrapper + " container-fluid d-md-none d-lg-block"} style={{ maxHeight: withSearchbar ? 80 : 0, backgroundColor: "#f7ece6", border: "solid 1px #cfcfcf" }}>
                <form className="row p-2 p-md-3 " action="#" method="POST" role="search">
                    <div className="col">
                        <div className="input-group" style={{ border: "solid 1px #aaa", borderRadius: "5px" }}>
                            <input type="text" className="form-control" placeholder="Search in CIA..." aria-label="Recipient's username with two button addons" />
                            <select className="form-select d-none d-sm-block" id="inputGroupSelect01" style={{ width: "13em", flex: "none" }} defaultValue={null}>
                                <option>All Categories</option>
                                <option value="1">Services</option>
                                <option value="2">Trainings & Certifications</option>
                                <option value="3">Projects Incubator</option>
                                <option value="4">Blog</option>
                            </select>
                            <button className="btn btn-outline-secondary" type="button" style={{ border: "solid 1px #ced4da" }}>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AppHeader