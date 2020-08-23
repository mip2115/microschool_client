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
                </div>
                <div className="resultitem-content-overview">
                    <span>${price}</span> 
                    <span>&#9733; {rating}</span>
                </div>
        
            </div>
        </div>
    )
}

export default ResultItem;