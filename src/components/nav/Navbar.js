import React, {useState} from 'react';
import NavItem from './NavItem';
import logo from '../../res/images/logo.png';
import NavLogo from './Navlogo';
import Modal from '../modal/Modal';
import Signup from '../login/Signup';
import { connect } from "react-redux";
import { setIsSignupModalOpen } from "../../redux/actions/modalActions";
import {getIsSignupModalOpen} from '../../redux/actions/selectors'
import {
    Link
  } from "react-router-dom";

const Navbar = (props) => {
  

    const _handleOpenSignup = () => {
        props.setIsSignupModalOpen(true);
        console.log("is modal open: ", props.isSignupModalOpen)
    } 
    const _handleCloseSignupComponent = () => {
        console.log("clicked")
        props.setIsSignupModalOpen(false);
    }
    
    const {
        isSignupModalOpen
    } = props;
    console.log("modal is open: ", isSignupModalOpen);
    return(
        <div className="navbar">
            <div className="navbar-left">
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to="/">
                    <NavLogo
                    img={logo} 
                    title="Microversity" />
                 </Link>
            </div>
            <div className="navbar-right">
                <Link 
                    style={{ textDecoration: 'none'}}
                    to="/about">
                        <NavItem title="About" />
                </Link>
                <Link 
                    style={{ textDecoration: 'none'}}
                    to="/Contact">
                        <NavItem title="Contact" />
                </Link>
                <NavItem title="Sign up"
                   handleClick={_handleOpenSignup}
                />
                <NavItem title="Log in" 
                    handleClick={_handleOpenSignup}
                />
            </div>
            
           <Signup 
                isOpen={props.isSignupModalOpen}
                handleClose={_handleCloseSignupComponent}
           />
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        isSignupModalOpen: getIsSignupModalOpen(state),
    };
};

export default connect(mapStateToProps, {setIsSignupModalOpen})(Navbar);