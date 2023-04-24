import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
// fancyapps
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';
function Portfolio() {

    const Projects = [
        { href: './img/projects/dashboed7.webp', title: 'dashboed Project', date: ' Feb 2019  ' },
        { href: './img/projects/hcr1.webp', title: 'HCR Project', date: ' Feb 2020  ' },
        { href: './img/projects/henkleez7.webp', title: 'henkleez Project', date: ' Feb 2020  ' },
        { href: './img/projects/naseq8.webp', title: 'naseq Project', date: ' Feb 2020  ' },
        { href: './img/projects/market9.webp', title: 'market Project', date: ' Feb 2020  ' },
        { href: './img/projects/thite1.webp', title: 'thite', date: ' Feb 2020  ' },
        { href: './img/projects/thite1.webp', title: 'CMS Project', date: ' Feb 2020  ' },
        { href: './img/projects/hcr20.webp', title: 'HCR Project', date: ' Feb 2020  ' },
        { href: './img/projects/dashboed1.webp', title: 'dashboed Project', date: ' Feb 2020  ' },
    ];


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
                            <ul className="row" >
                                {/*<!-- Portfolio Item Starts --> */}
                                {Projects.map((Element, index) => (
                                    <li className='col-sm-4' key={index}>
                                        <figure>
                                            <div className='position-relative'>
                                                <a data-fancybox="gallery"
                                                    data-caption={Element.title}
                                                    href={Element.href}>
                                                    <div className="img-holder">
                                                        <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                                                        <span className='top'></span>
                                                        <span className='bottom'></span>
                                                        <span className='right'></span>
                                                        <span className='left'></span>
                                                    </div>
                                                    <div className='Project-title mb-2 pt-2 pb-2'><span>{Element.title}</span></div>
                                                </a>
                                            </div>
                                        </figure>
                                    </li>
                                ))}
                                {/*<!-- Portfolio Item Ends --> */}
                            </ul>
                        </section>
                        {/*<!-- Portfolio Grid Ends --> */}
                    </div>
                </section>
                {/*<!-- Main Content Ends --> */}
            </section>
        </React.Fragment>
    )
}

export default Portfolio