import React from 'react'
import { NavLink } from 'react-router-dom'

function Resume() {
    return (
        <React.Fragment>
            <section className='about at-top'>
                <div id="preloader" class="preloader off">
                    <div class="black_wall"></div>
                    <div class="loader"></div>
                </div>
                {/*<!-- Page Title Starts --> */}
                <section
                    className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <h1>ABOUT <span>ME</span></h1>
                    <span className="title-bg">Resume</span>
                </section>
                {/*<!-- Page Title Ends --> */}
                {/*<!-- Main Content Starts --> */}
                <section
                    className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-partially-above revealator-within">
                    <div className="container">
                        <div className="row">
                            {/*<!-- Personal Info Starts --> */}
                            <div className="col-12 col-lg-5 col-xl-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                                    </div>
                                    <div className="col-12 d-block d-sm-none">
                                        <img src={'./img/H22C11901.jpg'}
                                            className="img-fluid main-img-mobile" title='my picture' alt="my" />
                                    </div>
                                    <div className="col-6">
                                        <ul className="about-list list-unstyled open-sans-font">
                                            <li> <span className="title">first name :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Mostafa</span>
                                            </li>
                                            <li> <span className="title">last name :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Wahba afifa</span>
                                            </li>
                                            <li> <span className="title">Age :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">24
                                                Years</span> </li>
                                            <li> <span className="title">Nationality :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Egypt</span>
                                            </li>
                                            <li> <span className="title">Freelance :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="about-list list-unstyled open-sans-font">
                                            <li> <span className="title">Address :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Quesna Menoufia</span>
                                            </li>
                                            <li> <span className="title">phone :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">01002883812</span>
                                            </li>
                                            <li> <span className="title">Email :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">mostafw338@fmail.com</span>
                                            </li>
                                            <li> <span className="title">langages :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> arabic</span> </li>
                                            <li> <span className="title">langages :</span> <span
                                                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> English</span> </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <a className="button" href={'./cv.pdf'} download>
                                            <span className="button-text">Download CV</span>
                                            <span className="button-icon fa fa-download"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Personal Info Ends --> */}
                            {/*<!-- Boxes Starts --> */}
                            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="box-stats with-margin">
                                            <h3 className="poppins-font position-relative">2</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">years of <span
                                                className="d-block">experience</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="box-stats with-margin">
                                            <h3 className="poppins-font position-relative">20</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">completed <span
                                                className="d-block">projects</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="box-stats with-margin m-0">
                                            <h3 className="poppins-font position-relative">20</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">Happy<span
                                                className="d-block">customers</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="box-stats with-margin m-0">
                                            <h3 className="poppins-font position-relative">8</h3>
                                            <p className="open-sans-font m-0 position-relative text-uppercase">awards <span
                                                className="d-block">won</span></p>
                                            <span className='top'></span>
                                            <span className='bottom'></span>
                                            <span className='right'></span>
                                            <span className='left'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Boxes Ends --> */}
                        </div>
                        <hr className="separator" />
                        {/*<!-- Skills Starts --> */}
                        <div className="row">
                            <div className="col-12">
                                <h3
                                    className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                                    My Skills</h3>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p90">
                                    <span>90%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">html</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p89">
                                    <span>89%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">css</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p80">
                                    <span>80%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">javascript</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p95">
                                    <span>95%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">bootstrap</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p70">
                                    <span>70%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">taliwan</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p60">
                                    <span>60%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">scss</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p75">
                                    <span>75%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">react</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p80">
                                    <span>80%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">wordpress</h6>
                            </div>
                            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                                <div className="c100 p90">
                                    <span>90%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">SEO</h6>
                            </div>
                        </div>
                        {/*<!-- Skills Ends --> */}
                        <hr className="separator mt-1" />
                        {/*<!-- Experience & Education Starts --> */}
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience
                                    <span>&amp;</span> Education</h3>
                            </div>
                            <div className="resume-box">
                                <ul className='row m-0'>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2021 - September </span>
                                        <h5 className="poppins-font text-uppercase">Web Development Challenger <span
                                            className="place open-sans-font">udacity</span></h5>
                                        <p className="open-sans-font"> Learn HTML, CSS and Wordpress. You will be able to start translating ideas into compelling websites.
                                        </p>
                                        <div className='text-right'>
                                            <a href='https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/a5f21015-c617-4145-8bba-607be81aff78.pdf' target='_blank'  rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2021 - November  </span>
                                        <h5 className="poppins-font text-uppercase">Front End Web Development Professional
                                            <span
                                                className="place open-sans-font">udacity</span></h5>
                                        <p className="open-sans-font">Learn JavaScript basics from the very beginning. You will increase your knowledge in Front End Web Development gradually and you will create some interesting projects by the end of this program.
                                        </p>
                                        <div className='text-right'>
                                            <a href='https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/6729f924-b318-400b-9f2e-68e241e82ced.pdf' target='_blank'  rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2022 - march  </span>
                                        <h5 className="poppins-font text-uppercase">JavaScript language <span
                                            className="place open-sans-font">maharatech</span></h5>
                                        <p className="open-sans-font">The JavaScript Course by maharatech is a comprehensive program designed to teach the essential concepts of JavaScript, the most popular programming language for web development. This course takes students from the basics of JavaScript to more advanced topics, enabling them to create dynamic, interactive websites and applications.</p>
                                        <div className='text-right'>
                                            <a href='https://maharatech.gov.eg/mod/customcert/view.php?id=7660&downloadown=1' target='_blank'  rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='col-12 col-md-6'>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2022 - may  </span>
                                        <h5 className="poppins-font text-uppercase"> React js <span
                                            className="place open-sans-font">maharatech</span></h5>
                                        <p className="open-sans-font">The React JS Course by maharatech is designed to teach developers how to build fast, scalable, and modern web applications using React, one of the most powerful JavaScript libraries. This course provides a deep dive into the fundamentals of React and covers everything you need to create dynamic user interfaces and single-page applications (SPAs).</p>
                                        <div className='text-right'>
                                            <a href='https://maharatech.gov.eg/mod/customcert/view.php?id=7660&downloadown=1' target='_blank'  rel="noopener noreferrer" className="button mt-3" >
                                                <span className="button-text">  certificate </span>
                                                <span className="button-icon fas fa-images"></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        {/*<!-- Experience & Education Ends --> */}
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Resume