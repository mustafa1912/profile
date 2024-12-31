import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async';

function Home() {
    const [translation] = useTranslation()

    return (
        <React.Fragment>
            <Helmet>
                {/*<title>{translation('title')}</title>*/}
                <title>Home</title>
            </Helmet>
            <section className="home at-top">
                <div id="preloader" className="preloader off">
                    <div className="black_wall"></div>
                    <div className="loader"></div>
                </div>
                {/*<!-- Main Content Starts --> */}
                <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-below">
                    <div className="color-block d-none d-lg-block"></div>
                    <div className="row home-details-container align-items-center">
                        <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                        <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                            <div>
                                <img src={'./img/me/H22C1262.webp'} className="img-fluid main-img-mobile d-none d-sm-block d-lg-none" title='' alt="my" />
                                <h1 className="text-uppercase poppins-font">I'm mostafa wahba.<span>Front-End Developer</span></h1>
                                <p className="open-sans-font">
                                    I am a skilled front-end developer with extensive experience in creating dynamic, user-friendly web applications. My expertise spans across HTML, CSS, JavaScript, React, and Bootstrap, allowing me to build responsive, visually appealing websites that deliver seamless user experiences. I also specialize in WordPress development and have strong knowledge of Git, SCSS, Tailwind, and SEO optimization.
                                </p>
                                <NavLink className="button" to="resume">
                                    <span className="button-text">Read more</span>
                                    <span className="button-icon fa fa-arrow-right"></span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Main Content Ends --> */}
            </section>
        </React.Fragment>
    )
}

export default Home
