import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowOpen: true,
        }

    }

    handleClickOutside = evt => {
        this.setState({
            windowOpen:false
        });
     };

    render() {
        return(
            <div className="modalwindow">
                {this.props.children}
            </div>
        )
    }
}

export default onClickOutside(Modal);