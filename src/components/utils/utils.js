import React , {useState, Component} from 'react';
import { findAllByPlaceholderText } from '@testing-library/react';
import onClickOutside from "react-onclickoutside";

export const InputFieldContainer  = (props) => {
    const style = {
        width: props.size,
    }
    return (
        <div style={style} className="inputFieldContainer">
            {props.children}
        </div>
    )
}

export const TextInputWithPlaceholder = (props) => {
    let {
        type,
        placeholder
    } = props;

    if (type==undefined || type==null) {
        type="text"
    }

    return (
        <div className="textInputWithPlaceholder">
            <input 
                placeholder={placeholder}
                type={type}
            />
        </div>
    )
}

export const CheckmarkInputWithLabel = (props) => {
    let {
        label
    } = props;

    return (
        <div className="checkmarkInputWithLabel">
            <input 
                className="checkmarkInputWithLabel-checkbox"
                type="checkbox"
            />
             <div>{label}</div>
        </div>
    )
}

class TextDropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayList: false,
            title: '',
        }

        this.handleClickArrow = this.handleClickArrow.bind(this);
        this.convertListToDropdown = this.convertListToDropdown.bind(this);
    }

    componentDidMount() {
       
        this.setState({
            title: this.props.placeholder,
        })
    }
    handleClickOutside = evt => {
       
       this.setState({
           displayList: false,
       })

    };

    // TODO – shift this to the redux state
    // and see if anything else is open first
    // although i think you'll be ok
    // clickOutside function should take care of that
    handleClickArrow = evt => {
        
        this.setState({
            displayList: !this.state.displayList,
        })
     };

     handleItemClick = (selected) => {
        this.setState({
            title: selected,
            displayList:false,
        })
     }


     convertListToDropdown = function(options) {

        const opts = options.map( (e, i) => 
            <li 
                onClick={() => this.handleItemClick(e)}
                key={i}>
                {e}
            </li>
        )
        return opts
     }

    render() {
        let {

            options
        } = this.props;

        const {
            displayList 
        } = this.state;
        return(

            <div className="textDropdownWithPlaceholder">
            <div onClick={this.handleClickArrow}  className="textDropdownWithPlaceholder-header">
                <span className="textDropdownWithPlaceholder-header-selected">{this.state.title}</span> 
                
                {displayList ? 
                    <span className="textDropdownWithPlaceholder-header-carrot">&#9650;</span> :
                    <span className="textDropdownWithPlaceholder-header-carrot">&#9660;</span>
                }
            </div>
            {displayList && 
                <div>
                    <div className="textDropdownWithPlaceholder-list">
                        <ul>
                            {this.convertListToDropdown(options)}
                        </ul>
                    </div>
                </div>
          
            }
     </div>
        )
    }
}


export const TextDropDown = onClickOutside(TextDropDownComponent);