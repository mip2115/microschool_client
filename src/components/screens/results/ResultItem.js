import React from 'react';


const ResultItem = (props) => {
    const {
        profileImage,
        price,
        subject,
        rating
    } = props;
    const imgStyle = {
        backgroundImage: `url(${profileImage})`
    }
    return (
        <div className="resultitem">
            <div style={imgStyle} className="resultitem-img">
            </div>

            <div className="resultitem-content">
                <div className="resultitem-content-header"> 
                    <span>{subject}</span> 
                    <span>${price}</span> 
                </div>
                <div className="resultitem-content-overview">
                    <div className="resultitem-content-overview-info">
                        <span>9/1/20 – 6/1/21</span> 
                        <span className="resultitem-content-overview-info-box">
                            <span className="resultitem-content-overview-info-box-link">
                            View resume
                            </span>
                            <span className="resultitem-content-overview-info-box-btn">
                            Course
                            </span>
                            
                        </span>
                    </div>
                    <div className="resultitem-content-overview-rating">
                        <span>&#9733; {rating}</span>
                    </div>
                    
                    
                    
                    
            
                </div>
        
            </div>
        </div>
    )
}

export default ResultItem;