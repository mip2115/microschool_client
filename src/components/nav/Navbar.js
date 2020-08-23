import React from 'react';
import NavItem from './NavItem';
import logo from '../../res/images/logo.png';
import NavLogo from './Navlogo';

const Navbar = (props) => {
    return(
        <div className="navbar">
            <div className="navbar-left">
                <NavLogo
                 img={logo}
                 title="Microversity" />
            </div>
            <div className="navbar-right">
                <NavItem title="About" />
                <NavItem title="Contact" />
                <NavItem title="Sign up" />
                <NavItem title="Log in" />
            </div>
        </div>
    )
}

export default Navbar;