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

        placeholder
    } = props;

    return (
        <div className="textInputWithPlaceholder">
            <input 
                placeholder={placeholder}
                type="text"
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

// class TextDropDownComponent = function(props) {
//     let {
//         placeholder
//     } = props;

//     const [displayList, setDisplayList] = useState(true);

//     const handleClickOutside = () => {

//     }

//     return (
//         <div className="textDropdownWithPlaceholder">
//             <div className="textDropdownWithPlaceholder-header">
//                 <span className="textDropdownWithPlaceholder-header-selected">{placeholder}</span> 
//                 <span className="textDropdownWithPlaceholder-header-carrot">&#9660;</span>
//             </div>
//             {displayList && 
//             <div>
//                 <div className="textDropdownWithPlaceholder-list">
//                     <ul>
//                         <li>
//                             Kindergarden
//                         </li>
//                         <li>
//                            First grade
//                         </li>
//                         <li>
//                             Second grade
//                         </li>
//                         <li>
//                             Third grade
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             }
           
            
           
//         </div>
//     )
// }
// const clickOutsideConfig = {
//     handleClickOutside: () => TextDropDownComponent.handleClickOutside
//   };

export const TextDropDown = onClickOutside(TextDropDownComponent);