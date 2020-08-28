import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";
import { setIsSignupModalOpen } from "../../redux/actions/modalActions";
import {getIsSignupModalOpen} from '../../redux/actions/selectors'
import { connect } from "react-redux";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowOpen: true,
        }

    }

    handleClickOutside = evt => {
        this.props.handleClose()
        
     };

    render() {
        const {
            handleClose,
            isOpen,
        } = this.props;
        const showModalClass = isOpen ? 'modalwindow' : 'modalwindow-close';
        return(
            <div className={showModalClass}>
                <div className="modalwindow-header">
                    <span onClick={handleClose}>&#10005;</span>
                </div>
                <div className="modalwindow-body">
                
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export default onClickOutside(Modal);