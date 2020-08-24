import React from 'react';


const ResultItem = (props) => {
    const {
        profileImage,
        price,
        subject,
        rating,
        startDate,
        name
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
                        <span>{name} </span> 
                        <span style={{fontSize:"12px"}}>PhD in geometry </span> 
                        <span style={{fontSize:"12px"}}>Cambridge University 2020 </span> 
                        <span style={{fontSize:"12px"}} className="resultitem-content-overview-info-box-link">
                            My resume
                            </span>
                        <span className="resultitem-content-overview-info-box">
                            
                            <span className="resultitem-content-overview-info-box-btn">
                            View Class
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