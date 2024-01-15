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
                            <div className="col-lg-6 m-15px-tb">
                                <div className="resume-box">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-briefcase"></i>
                                            </div>
                                            <span className="time open-sans-font text-uppercase">2021 - August</span>
                                            <h5 className="poppins-font text-uppercase">Web Development Challenger <span
                                                className="place open-sans-font">udacity</span></h5>
                                            <p className="open-sans-font">learn HTML , css , Wordpress and freelance work</p>
                                            <div className='text-right'>
                                                <NavLink to='https://graduation.udacity.com/confirm/L9ALUSQC' className="button mt-3" >
                                                    <span className="button-text">  certificate </span>
                                                    <span className="button-icon fa fa-download"></span>
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-briefcase"></i>
                                            </div>
                                            <span className="time open-sans-font text-uppercase">2013 - 2018</span>
                                            <h5 className="poppins-font text-uppercase">UI/UX Designer <span
                                                className="place open-sans-font">Themeforest</span></h5>
                                            <p className="open-sans-font">Lorem incididunt dolor sit amet, consectetur eiusmod dunt
                                                doldunt dol elit, tempor incididunt</p>
                                            <div className='text-right'>
                                                <NavLink to='https://graduation.udacity.com/confirm/L9ALUSQC' className="button mt-3" >
                                                    <span className="button-text">  certificate </span>
                                                    <span className="button-icon fa fa-download"></span>
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-briefcase"></i>
                                            </div>
                                            <span className="time open-sans-font text-uppercase">2005 - 2013</span>
                                            <h5 className="poppins-font text-uppercase">Consultant <span
                                                className="place open-sans-font">Videohive</span></h5>
                                            <p className="open-sans-font">Lorem ipsum dolor sit amet, tempor incididunt ut
                                                laboreconsectetur elit, sed do eiusmod tempor duntt</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 m-15px-tb">
                                <div className="resume-box">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-graduation-cap"></i>
                                            </div>
                                            <span className="time open-sans-font text-uppercase">2015</span>
                                            <h5 className="poppins-font text-uppercase">Engineering Degree <span
                                                className="place open-sans-font">Oxford University</span></h5>
                                            <p className="open-sans-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                do tempor incididunt ut labore</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-graduation-cap"></i>
                                            </div>
                                            <span className="time open-sans-font text-uppercase">2012</span>
                                            <h5 className="poppins-font text-uppercase">Master Degree <span
                                                className="place open-sans-font">Kiev University</span></h5>
                                            <p className="open-sans-font">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                                tempor incididunt ut adipisicing</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-graduation-cap"></i>
                                            </div>
                                            <span className="time open-sans-font text-uppercase">2009</span>
                                            <h5 className="poppins-font text-uppercase">Bachelor Degree <span
                                                className="place open-sans-font">Tunis High School</span></h5>
                                            <p className="open-sans-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                do eiusmod tempor ut labore</p>
                                        </li>
                                    </ul>
                                </div>
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