import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    _handleSearch = (e) => {
        e.preventDefault();
        if (this.state.value.length > 0) {
            this.props.handleSearch(this.state.value)
            window.location = '/results';
        }
    }

    _handleOnChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    render() {

        return(
            <div className="searchbar">
                <form onSubmit={this._handleSearch}>
                    <input
                        onChange={this._handleOnChange}
                        value={this.state.value}
                        placeholder="Find a course..."
                    />
                </form>
        </div>

        )
    }
}


export default Searchbar;