import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

function Portfolio() {
    return (
        <React.Fragment>
            <Helmet>
                <title>portfolio</title>
            </Helmet>
            <section className="portfolio at-top">
                <div id="preloader" className="preloader off">
                    <div className="black_wall"></div>
                    <div className="loader"></div>
                </div>
                {/*<!-- Page Title Starts --> */}
                <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <h1>my <span>portfolio</span></h1>
                    <span className="title-bg">works</span>
                </section>
                {/*<!-- Page Title Ends --> */}
                {/*<!-- Main Content Starts --> */}
                <section className="main-content text-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-below">
                    <div id="grid-gallery" className="container grid-gallery">
                        {/*<!-- Portfolio Grid Starts --> */}
                        <section className="grid-wrap" >
                            <ul className="row grid" >
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/dashboed7.webp'} title='dashboed' alt='dashboed' />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div><span>dashboed Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/hcr1.webp'} title='HCR' alt="HCR" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div><span>HCR Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/henkleez7.webp'} title='henkleez' alt="henkleez" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div><span>henkleez Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4'>
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/naseq8.webp'} title='naseq' alt="naseq" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div><span>naseq Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/market9.webp'} title='market' alt="market" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div><span>market Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/thite1.webp'} title='thite' alt="thite" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div style={{ left: '0px', top: '100%', transition: 'all 300ms ease 0s', }}><span>thite Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/cms.webp'} title='CMS' alt="CMS" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div><span>CMS Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/hcr20.webp'} title='HCR' alt="HCR" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div style={{ left: '0px', top: '100%', transition: 'all 300ms ease 0s', }}><span>HCR Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                                {/*<!-- Portfolio Item Starts --> */}
                                <li className='col-sm-4' >
                                    <figure>
                                        <div className='position-relative'>
                                            <img src={'./img/projects/dashboed1.webp'} title='1' alt="Portolio" />
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                        <div style={{ left: '-100%', top: '0px', transition: 'all 300ms ease 0s', }}><span>Image Project</span></div>
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Ends --> */}
                            </ul>
                        </section>
                        {/*<!-- Portfolio Grid Ends --> */}
                        {/*<!-- Portfolio Details Starts --> */}
                        <section className="slideshow">
                            <ul>
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase">
                                                        <NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.envato.com</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <img src="./Portfolio - Tunis Personal Portfolio_files/project-1.webp" title='1' alt="Portolio" />
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Youtube Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Videohive</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">Adobe After Effects</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.videohive.net</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <div className="videocontainer">
                                            <iframe className="youtube-video" src="./Portfolio - Tunis Personal Portfolio_files/7e90gBu4pas.html" allowfullscreen=""></iframe>
                                        </div>
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Slider Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Themeforest</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase">
                                                        <NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.themeforest.net</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <div id="slider" className="carousel slide portfolio-slider" data-ride="carousel" data-interval="false">
                                            <ol className="carousel-indicators">
                                                <li data-target="#slider" data-slide-to="0" className="active"></li>
                                                <li data-target="#slider" data-slide-to="1"></li>
                                                <li data-target="#slider" data-slide-to="2"></li>
                                            </ol>
                                            {/*<!-- The slideshow --> */}
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="./Portfolio - Tunis Personal Portfolio_files/project-3.webp" title='1' alt="slide 1" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="./Portfolio - Tunis Personal Portfolio_files/project-2.webp" title='1' alt="slide 2" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="./Portfolio - Tunis Personal Portfolio_files/project-1.webp" title='1' alt="slide 3" />
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Local Video Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Videohive</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">Adobe Premium</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.envato.com</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <video id="video" className="responsive-video" controls="" poster="img/projects/project-1.webp">
                                            <source src="img/projects/video.mp4" type="video/mp4" />
                                        </video>
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.envato.com</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <img src="./Portfolio - Tunis Personal Portfolio_files/project-5.webp" title='1' alt="Portolio" />
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.envato.com</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <img src="./Portfolio - Tunis Personal Portfolio_files/project-6.webp" title='1' alt="Portolio" />
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.envato.com</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <img src="./Portfolio - Tunis Personal Portfolio_files/project-7.webp" title='1' alt="Portolio" />
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.envato.com</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <img src="./Portfolio - Tunis Personal Portfolio_files/project-8.webp" title='1' alt="Portolio" />
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                                {/*<!-- Portfolio Item Detail Starts --> */}
                                <li>
                                    <figure>
                                        {/*<!-- Project Details Starts --> */}
                                        <figcaption>
                                            <h3>Image Project</h3>
                                            <div className="row open-sans-font">
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><NavLink to="https://slimhamdi.net/tunis/dark/portfolio.html#" target="_blank">www.envato.com</NavLink></span>
                                                </div>
                                            </div>
                                        </figcaption>
                                        {/*<!-- Project Details Ends --> */}
                                        {/*<!-- Main Project Content Starts --> */}
                                        <img src="./Portfolio - Tunis Personal Portfolio_files/project-9.webp" title='1' alt="Portolio" />
                                        {/*<!-- Main Project Content Ends --> */}
                                    </figure>
                                </li>
                                {/*<!-- Portfolio Item Detail Ends --> */}
                            </ul>
                            {/*<!-- Portfolio Navigation Starts --> */}
                            <nav>
                                <span className="icon nav-prev"><img src="./Portfolio - Tunis Personal Portfolio_files/left-arrow.webp" title='1' alt="previous" /></span>
                                <span className="icon nav-next"><img src="./Portfolio - Tunis Personal Portfolio_files/right-arrow.webp" title='1' alt="next" /></span>
                                <span className="nav-close"><img src="./Portfolio - Tunis Personal Portfolio_files/close-button.webp" title='1' alt="close" /> </span>
                            </nav>
                            {/*<!-- Portfolio Navigation Ends --> */}
                        </section>
                    </div>
                </section>
                {/*<!-- Main Content Ends --> */}
            </section>
        </React.Fragment>
    )
}

export default Portfolio