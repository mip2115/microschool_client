import React from 'react';
import Searchbar from '../../search/Searchbar';
import { connect } from "react-redux";
import {
    setSearchQuery
} from '../../../redux/actions/searchActions';

const Welcome = ({
    setSearchQuery
}) => {
    return (
        <div className="welcome">
          

            <div className="welcome-banner">
                <div className="welcome-banner-left" />
                <div className="welcome-banner-right" />
            </div>
            
            <div className="welcome-box">
                <div className="welcome-box-search">
                    <Searchbar handleSearch={setSearchQuery}/>
                </div>
                <div className="welcome-box-info">
               
                    <span className="welcome-box-info-item">
                        <span className="welcome-box-info-item-check">&#10003;</span> Small class sizes
                    </span>
                    <span className="welcome-box-info-item">
                        <span className="welcome-box-info-item-check">&#10003;</span>  Safe learning enviroments
                    </span>
                    <span className="welcome-box-info-item">
                        <span className="welcome-box-info-item-check">&#10003;</span> Certified instructors
                    </span>
              
               
                </div>   
            
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.search.searchTerm,
    }
};

export default connect(mapStateToProps, {
    setSearchQuery
})(Welcome);