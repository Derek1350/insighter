import React, { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from "../../constants";
import "./mobile-nav.css";
import clsx from 'clsx';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const MobileNav = (props) => {
    const [isSideMenuOpen, setMenu] = useState(false);

    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isSideMenuOpen]);

    const toggleMenu = () => {
        setMenu(!isSideMenuOpen);
    }

    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);
  
    useEffect(() => {
      setPathname(location.pathname);
    }, [location]);

    // const navLinks = [
    //     {
    //         label: "Collections",
    //         link: "/collections"
    //     },
    //     {
    //         label: "Men",
    //         link: "/men"
    //     },
    //     {
    //         label: "About",
    //         link: "/about"
    //     },
    //     {
    //         label: "Contact",
    //         link: "/contact"
    //     }
    // ];

    return (
        <main>
            <nav className="main-nav">
                <div className="nav-left">
                    <section className="logo-section">
                        {/* menu */}
                        <FiMenu
                            onClick={toggleMenu}
                            className="menu-icon"
                        />
                    </section>
                    {navLinks.map((link, index) => (
                        <Link key={index} className="nav-link lg-nav-link" to={link.link}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* sidebar mobile menu */}
                <div className={clsx("sidebar-menu", { 'show': isSideMenuOpen })}>
                    <section className="sidebar-content">
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <img src="/assets/icons/logo.svg" alt="logo" width={150} height={70} />
                            <IoCloseOutline
                                onClick={toggleMenu}
                                className="close-icon"
                            />
                        </div>
                        <SignedIn>
                            <ul className='header-nav_elements'>
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname;

                                    return (
                                        <li key={link.route} className={`${isActive && 'gradient-text'} mobile-content`}>
                                            <Link className='sidebar-link cursor-pointer' to={link.route}  style={isActive ? {color: "#208dbf", fontWeight: "bold"} : {color: "#fff"}}>
                                                <img src={isActive ? link.active : link.icon} alt={link.label} width={24} height={24} />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </SignedIn>
                        <SignedOut>
                            <Link to="/sign-in">
                                <button className="login-btn-mobile">
                                    Login
                                </button>
                            </Link>
                        </SignedOut>
                    </section>
                </div>
            </nav>
        </main>
    );
}

export default MobileNav;
