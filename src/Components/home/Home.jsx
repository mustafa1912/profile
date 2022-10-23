import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <React.Fragment>
            <section className="home at-top">
                <div id="preloader" class="preloader off">
                    <div class="black_wall"></div>
                    <div class="loader"></div>
                </div>
                {/*<!-- Main Content Starts --> */}
                <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-below">
                    <div className="color-block d-none d-lg-block"></div>
                    <div className="row home-details-container align-items-center">
                        <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                        <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                            <div>
                                <img src={'./img/H22C1261.jpg'} className="img-fluid main-img-mobile d-none d-sm-block d-lg-none" title='' alt="my" />
                                <h1 className="text-uppercase poppins-font">I'm steve milner.<span>web designer</span></h1>
                                <p className="open-sans-font">I'm a Tunisian based web designer &amp; front‑end developer focused on crafting clean &amp; user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                                <NavLink className="button" to="about">
                                    <span className="button-text">Read more  </span>
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
