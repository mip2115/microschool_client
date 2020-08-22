import React from 'react';
import NavItem from './NavItem';



const Navbar = (props) => {
    return(
        <div className="navbar">
            <div className="navbar-left">
                <NavItem title="logo" />
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