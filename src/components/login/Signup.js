import React, {Component} from 'react';
import logo from '../../res/images/logo.png';
import {
    InputFieldContainer,
    TextInputWithPlaceholder
} from '../utils/utils';
import {
    SIZE
} from '../utils/constants';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySignup: false,
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
        return (
            <div className="signup">
                <div className="signup-title">
                    <img src={logo} />
                    <span>Microversity</span>
                </div>
                <hr />
                <div className="signup-body">
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
                    <div className="signup-body-btn">
                        <span
                            onClick={()=>this.setState({displaySignup:false})}
                        >Sign up</span>
                    </div>
                    
                </div>
                <div className="signup-footer">
                    <span>Forgot password? <a>Click here</a> </span>
                    <span>Already have an account? <a>Log in</a> </span>
                </div>
            </div>
        )
    }

    render() {
        const {
            displaySignup
        } = this.state;
        if (displaySignup) {
            return this.renderSignup()
        } else {
            return this.renderPostSignupMsg()
        }
    }

}
export default Signup;