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
                    <span style={{marginRight:'10px'}}>${price}</span> 
                    
                </div>
                <div className="resultitem-content-overview">
                    <div className="resultitem-content-overview-info">
                        <span>{name} </span> 
                        <br />
                        <span style={{fontSize:'14px'}}>
                            &#10003; Masks required
                        </span>
                        <span style={{fontSize:'14px'}}>
                            &#10003; Zoom in option 
                        </span>
                        {/* <span style={{fontSize:"12px"}}>PhD in geometry </span> 
                        <span style={{fontSize:"12px"}}>Cambridge University 2020 </span>  */}
                        {/* <span style={{display:'inline-block', fontSize:"12px"}} className="resultitem-content-overview-info-box-link">
                            My resume
                            </span> */}
                        <span className="resultitem-content-overview-info-box">
                            
                            <div className="btn-primary">
                            View Course
                            </div>

                         
                            
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