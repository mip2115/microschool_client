import React from 'react';
import Searchbar from '../../search/Searchbar';
const Welcome = () => {
    return (
        <div className="welcome">
          

            <div className="welcome-banner">
                <div className="welcome-banner-left" />
                <div className="welcome-banner-right" />
            </div>
            
            <div className="welcome-box">
                <div className="welcome-box-search">
                    <Searchbar />
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

export default Welcome;