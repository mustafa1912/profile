import React from 'react'
import { Helmet } from 'react-helmet-async'
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
        { href: './img/projects/New folder/us1.png', title: 'us Project', date: ' may 2023  ' },
        { href: './img/projects/New folder/osqufia1.png', title: 'osqufia Project', date: ' jul 2023  ' },
    ];
    const dashboed = [
        { href: './img/projects/New folder/dashboed1.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed2.png', title: 'dashboed Project' }
    ];
    const HCR = [
        { href: './img/projects/New folder/dashboed1.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed2.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed3.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed4.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed5.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed6.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed7.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed8.png', title: 'dashboed Project' },
        { href: './img/projects/New folder/dashboed9.png', title: 'dashboed Project' }
    ];
    const market = [
        { href: './img/projects/New folder/market1.png', title: 'market Project' },
        { href: './img/projects/New folder/market2.png', title: 'market Project' },
        { href: './img/projects/New folder/market3.png', title: 'market Project' },
        { href: './img/projects/New folder/market4.png', title: 'market Project' },
        { href: './img/projects/New folder/market5.png', title: 'market Project' }
    ];
    const osqufia = [
        { href: './img/projects/New folder/osqufia1.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia2.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia3.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia4.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia5.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia6.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia7.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia8.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia9.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia10.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia11.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia12.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia13.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia14.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia15.png', title: 'osqufia Project' },
        { href: './img/projects/New folder/osqufia16.png', title: 'osqufia Project' }
    ];
    const thite = [
        { href: './img/projects/New folder/thite1.png', title: 'thite' },
        { href: './img/projects/New folder/thite2.png', title: 'thite' },
        { href: './img/projects/New folder/thite3.png', title: 'thite' },
        { href: './img/projects/New folder/thite4.png', title: 'thite' },
        { href: './img/projects/New folder/thite5.png', title: 'thite' },
        { href: './img/projects/New folder/thite6.png', title: 'thite' }
    ];
    const us = [
        { href: './img/projects/New folder/us1.png', title: 'us Project' },
        { href: './img/projects/New folder/us2.png', title: 'us Project' },
        { href: './img/projects/New folder/us3.png', title: 'us Project' },
        { href: './img/projects/New folder/us4.png', title: 'us Project' },
        { href: './img/projects/New folder/us5.png', title: 'us Project' },
        { href: './img/projects/New folder/us6.png', title: 'us Project' },
        { href: './img/projects/New folder/us7.png', title: 'us Project' },
        { href: './img/projects/New folder/us8.png', title: 'us Project' },
        { href: './img/projects/New folder/us9.png', title: 'us Project' }
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
                                                <a data-fancybox={Element.title}
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
                {dashboed.map((Element, index) => (
                    <div className='d-none' key={index}>
                        <figure>
                            <a data-fancybox={Element.title}
                                data-caption={Element.title}
                                href={Element.href}>
                                <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                            </a>
                        </figure>
                    </div>
                ))}
                {HCR.map((Element, index) => (
                    <div className='d-none' key={index}>
                        <figure>
                            <a data-fancybox={Element.title}
                                data-caption={Element.title}
                                href={Element.href}>
                                <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                            </a>
                        </figure>
                    </div>
                ))}
                {market.map((Element, index) => (
                    <div className='d-none' key={index}>
                        <figure>
                            <a data-fancybox={Element.title}
                                data-caption={Element.title}
                                href={Element.href}>
                                <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                            </a>
                        </figure>
                    </div>
                ))}
                {Projects.map((Element, index) => (
                    <div className='d-none' key={index}>
                        <figure>
                            <a data-fancybox={Element.title}
                                data-caption={Element.title}
                                href={Element.href}>
                                <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                            </a>
                        </figure>
                    </div>
                ))}
                {osqufia.map((Element, index) => (
                    <div className='d-none' key={index}>
                        <figure>
                            <a data-fancybox={Element.title}
                                data-caption={Element.title}
                                href={Element.href}>
                                <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                            </a>
                        </figure>
                    </div>
                ))}
                {thite.map((Element, index) => (
                    <div className='d-none' key={index}>
                        <figure>
                            <a data-fancybox={Element.title}
                                data-caption={Element.title}
                                href={Element.href}>
                                <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                            </a>
                        </figure>
                    </div>
                ))}
                {us.map((Element, index) => (
                    <div className='d-none' key={index}>
                        <figure>
                            <a data-fancybox={Element.title}
                                data-caption={Element.title}
                                href={Element.href}>
                                <img src={Element.href} alt={Element.title} title={Element.title} decoding="async" className="img img-responsive" />
                            </a>
                        </figure>
                    </div>
                ))}
            </section>
        </React.Fragment>
    )
}

export default Portfolio