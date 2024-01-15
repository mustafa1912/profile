import React from 'react'
import { Helmet } from 'react-helmet-async'
// fancyapps
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';
import { NavLink } from 'react-router-dom';
function Portfolio() {

    const Projects = [
        { href: './img/projects/New folder/al-motamizon1.png', title: 'al-motamizon Project', url: 'https://al-motamizon.com/ar', date: ' Dec 2023  ' },
        { href: './img/projects/New folder/ghulam1.png', title: 'ghulam Project', url: 'https://ghulam.najezsoft.com/ar', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/noorcontrol1.png', title: 'noorcontrol Project', url: 'https://noorcontrol.com/', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/asiaf1.png', title: 'asiaf Project', url: 'https://www.asiaf.com.sa/', date: ' oct 2023  ' },
        { href: './img/projects/New folder/kfs-hiet1.png', title: 'kfs-hiet Project', url: 'https://kfs-hiet.edu.eg/', date: ' Aug 2023  ' },
        { href: './img/projects/New folder/citysquares1.png', title: 'citysquares Project', url: 'https://citysquares.com.eg/ar', date: ' jul 2023  ' },
        { href: './img/projects/New folder/osqufia1.png', title: 'osqufia Project', url: '#', date: ' jun 2023  ' },
        { href: './img/projects/New folder/whitesand1.png', title: 'whitesand Project', url: 'https://www.whitesand-eg.com/', date: ' Nov 2021  ' },
        { href: './img/projects/New folder/us1.png', title: 'us Project', url: '#', date: ' may 2023  ' },
        { href: './img/projects/cms.webp', title: 'CMS Project', url: '#', date: ' Feb 2021  ' },
        { href: './img/projects/hcr1.webp', title: 'HCR Project', url: '#', date: ' Feb 2021  ' },
        { href: './img/projects/naseq8.webp', title: 'naseq Project', url: '#', date: ' Feb 2021  ' },
        { href: './img/projects/thite1.webp', title: 'thite', url: 'https://thiet.edu.eg/ar', date: ' Feb 2021  ' },
        { href: './img/projects/henkleez7.webp', title: 'henkleez Project', url: 'https://www.henkleez.com/ar', date: ' Feb 2021  ' },
        { href: './img/projects/market9.webp', title: 'market Project', url: '', date: ' Feb 2020  ' },
        { href: './img/projects/dashboed7.webp', title: 'dashboed Project', url: '#', date: ' Feb 2020  ' },
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
    const al_motamizon = [
        { href: './img/projects/New folder/al-motamizon7.png', title: 'al-motamizon Project' },
        { href: './img/projects/New folder/al-motamizon6.png', title: 'al-motamizon Project' },
        { href: './img/projects/New folder/al-motamizon5.png', title: 'al-motamizon Project' },
        { href: './img/projects/New folder/al-motamizon4.png', title: 'al-motamizon Project' },
        { href: './img/projects/New folder/al-motamizon3.png', title: 'al-motamizon Project' },
        { href: './img/projects/New folder/al-motamizon2.png', title: 'al-motamizon Project' },
    ];
    const noorcontrol = [
        { href: './img/projects/New folder/noorcontrol7.png', title: 'noorcontrol Project' },
        { href: './img/projects/New folder/noorcontrol6.png', title: 'noorcontrol Project' },
        { href: './img/projects/New folder/noorcontrol5.png', title: 'noorcontrol Project' },
        { href: './img/projects/New folder/noorcontrol4.png', title: 'noorcontrol Project' },
        { href: './img/projects/New folder/noorcontrol3.png', title: 'noorcontrol Project' },
        { href: './img/projects/New folder/noorcontrol2.png', title: 'noorcontrol Project' },
    ];
    const asiaf = [
        { href: './img/projects/New folder/asiaf5.png', title: 'asiaf Project' },
        { href: './img/projects/New folder/asiaf4.png', title: 'asiaf Project' },
        { href: './img/projects/New folder/asiaf3.png', title: 'asiaf Project' },
        { href: './img/projects/New folder/asiaf2.png', title: 'asiaf Project' },
    ];
    const citysquares = [
        { href: './img/projects/New folder/citysquares7.png', title: 'citysquares Project' },
        { href: './img/projects/New folder/citysquares6.png', title: 'citysquares Project' },
        { href: './img/projects/New folder/citysquares5.png', title: 'citysquares Project' },
        { href: './img/projects/New folder/citysquares4.png', title: 'citysquares Project' },
        { href: './img/projects/New folder/citysquares3.png', title: 'citysquares Project' },
        { href: './img/projects/New folder/citysquares2.png', title: 'citysquares Project' },
    ];
    const ghulam = [
        { href: './img/projects/New folder/ghulam1.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam2.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam3.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam4.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam5.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam6.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam7.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam8.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/ghulam9.png', title: 'ghulam Project', date: ' Nov 2023  ' },
    ];
    const kfs_hiet = [
        { href: './img/projects/New folder/kfs-hiet1.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet2.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet3.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet4.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet5.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet6.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet7.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet8.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet9.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/kfs-hiet10.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
    ];
    const whitesand = [
        { href: './img/projects/New folder/whitesand1.png', title: 'whitesand Project' },
        { href: './img/projects/New folder/whitesand2.png', title: 'whitesand Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/whitesand3.png', title: 'whitesand Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/whitesand4.png', title: 'whitesand Project', date: ' Nov 2023  ' },
        { href: './img/projects/New folder/whitesand5.png', title: 'whitesand Project', date: ' Nov 2023  ' },
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
                                            <div className='position-relative mb-3'>
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
                                                    <div className='text-center'>
                                                        <NavLink to={Element.url} className="button mb-2 rounded-lg w-100" >
                                                            <span className="button-text rounded">  visite site </span>
                                                        </NavLink>
                                                    </div>
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
                {al_motamizon.map((Element, index) => (
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
                {noorcontrol.map((Element, index) => (
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
                {asiaf.map((Element, index) => (
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
                {citysquares.map((Element, index) => (
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
                {ghulam.map((Element, index) => (
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
                {kfs_hiet.map((Element, index) => (
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
                {whitesand.map((Element, index) => (
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