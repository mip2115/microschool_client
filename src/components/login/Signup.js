import React, {Component} from 'react';
import logo from '../../res/images/logo.png';
import {
    InputFieldContainer,
    TextInputWithPlaceholder
} from '../utils/utils';
import {
    SIZE
} from '../utils/constants';
import { connect } from "react-redux";
import { setIsSignupModalOpen } from "../../redux/actions/modalActions";
import {getIsSignupModalOpen} from '../../redux/actions/selectors'
import Modal from '../modal/Modal';


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickedSignup: false,
        }
        this.renderSignup = this.renderSignup.bind(this);
        this.renderPostSignupMsg = this.renderPostSignupMsg.bind(this);
    }

    renderPostSignupMsg() {
        return (
            <div className="signup-post">
                <div className="signup-title">
                    <img src={logo} />
                    <span>Microversity</span>
                </div>
                <hr />
                <div className="signup-post-body">
                    <span>Thank you for signing up!</span>
                    <span>We will notify you when we are live</span>
                </div>
                
            </div>
        )

    }

    renderSignup() {
        const {
            isOpen,
            handleClose,
        } = this.props;

        const {
            clickedSignup
        } = this.state;
        
        return (
            <Modal
                isOpen={isOpen}
                handleClose={handleClose}
                >
                <div className="signup">
                    <div className="signup-title">
                        <img src={logo} />
                        <span>Microversity</span>
                    </div>
                    <hr />
                    {clickedSignup && <div className="signup-body">
                        Thank you for signing up!
                    </div>}
                    {!clickedSignup &&  <div className="signup-body">
                        <InputFieldContainer
                            size={SIZE.LARGE}>
                        
                            <TextInputWithPlaceholder 
                                placeholder="Email..."
                            />
                        </InputFieldContainer>

                        <br />
                        <InputFieldContainer
                            size={SIZE.LARGE}>
                        
                            <TextInputWithPlaceholder 
                                type="password"
                                placeholder="Password..."
                            />
                        </InputFieldContainer>

                        <br />
                        <InputFieldContainer
                            size={SIZE.LARGE}>
                        
                            <TextInputWithPlaceholder 
                                type="password"
                                placeholder="Confirm password..."
                            />
                        </InputFieldContainer>
                        <div className="signup-body-btns">
                            <div 
                                onClick={()=>this.setState({clickedSignup:true})}
                                className="signup-body-btns-btn">
                                <span className="btn-primary">Sign up</span>
                                
                            </div>
                            <div 
                                onClick={()=>this.setState({displaySignup:false})}
                                className="signup-body-btns-btn">
                                <span style={{marginTop:'10px'}}className="btn-primary">Cancel</span>
                                
                            </div>
                        </div>
                        
                        
                    </div>} 
                    {!clickedSignup && <div className="signup-footer">
                        <span>Forgot password? <a>Click here</a> </span>
                        <span>Already have an account? <a>Log in</a> </span>
                    </div>}
                </div>
            </Modal>
        )
    }

    render() {
        const {
            isOpen
        } = this.props;
        return this.renderSignup()

        // if (isOpen) {
        //     return this.renderSignup()
        // } else {
        //     return this.renderPostSignupMsg()
        // }
    }

}

const mapStateToProps = state => {
    return { 
        isSignupModalOpen: getIsSignupModalOpen(state),
    };
};

export default connect(mapStateToProps, {setIsSignupModalOpen})(Signup);