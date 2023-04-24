import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
    const Location = useLocation()
    return (
        <React.Fragment>
            {/*<!-- Header Starts --> */}
            <header className="header" id="navbar-collapse-toggle">
                {/*<!-- Fixed Navigation Starts --> */}
                <ul
                    className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <li className={`icon-box  ` + (Location.pathname === '/' ? 'active' : '')}>
                        <i className="fa fa-home"></i>
                        <NavLink to="/">
                            <h2>Home</h2>
                        </NavLink>
                    </li>
                    <li className={`icon-box  ` + (Location.pathname === '/about' ? 'active' : '')}>
                        <i className="fa fa-user"></i>
                        <NavLink to="about">
                            <h2>About</h2>
                        </NavLink>
                    </li>
                    <li className={`icon-box  ` + (Location.pathname === '/portfolio' ? 'active' : '')}>
                        <i className="fa fa-briefcase"></i>
                        <NavLink to="portfolio">
                            <h2>Portfolio</h2>
                        </NavLink>
                    </li>
                    <li className={`icon-box  ` + (Location.pathname === '/contact' ? 'active' : '')}>
                        <i className="fa fa-envelope-open"></i>
                        <NavLink to="contact">
                            <h2>Contact</h2>
                        </NavLink>
                    </li>
                    {/* <li className={`icon-box  ` + (Location.pathname === '/blog' ? 'active' : '')}>
                        <i className="fa fa-comments"></i>
                        <NavLink to="blog">
                            <h2>Blog</h2>
                        </NavLink>
                    </li>*/}
                </ul>
                {/*<!-- Fixed Navigation Ends --> */}
                {/*<!-- Mobile Menu Starts --> */}
                <nav role="navigation" className="d-block d-lg-none">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="list-unstyled" id="menu">
                            <li className={(Location.pathname === '/' ? 'active' : '')}>
                                <NavLink to="">
                                    <i className="fa fa-home"></i><span>Home</span></NavLink>
                            </li>
                            <li className={(Location.pathname === '/about' ? 'active' : '')}>
                                <NavLink to="about">
                                    <i className="fa fa-user"></i><span>About</span></NavLink>
                            </li>
                            <li className={(Location.pathname === '/portfolio' ? 'active' : '')}>
                                <NavLink to="portfolio">
                                    <i className="fa fa-folder-open"></i><span>Portfolio</span></NavLink>
                            </li>
                            <li className={(Location.pathname === '/contact' ? 'active' : '')}>
                                <NavLink to="contact">
                                    <i className="fa fa-envelope-open"></i>
                                    <span>Contact</span></NavLink>
                            </li>
                            {/* <li className={(Location.pathname === '/blog' ? 'active' : '')}>
                                <NavLink to="blog"><i
                                    className="fa fa-comments"></i><span>Blog</span></NavLink>
                            </li>*/}
                        </ul>
                    </div>
                </nav>
                {/*<!-- Mobile Menu Ends --> */}
            </header>
            {/*<!-- Header Ends --> */}</React.Fragment>
    )
}

export default Header