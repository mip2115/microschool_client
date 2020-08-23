import React from 'react';


const ResultItem = (props) => {
    const {
        profileImage,
    } = props;
    const imgStyle = {
        backgroundImage: `url(${profileImage})`
    }
    return (
        <div className="resultitem">
            <div className="resultitem-header">
                
                <span>Algebra</span> 
              
            </div>
        
            <div className="resultitem-info">
                <div style={imgStyle} className="resultitem-info-img">

                </div>
                <div className="resultitem-info-facts">
                    <div  className="resultitem-info-facts-label">Class overview</div> 
                    <div className="resultitem-info-facts-list">
                        <ul>
                            <li>
                                <span>Price</span> $800
                            </li>
                            <li>
                                <span>Term</span> 9/1/20 – 6/1/21
                            </li>
                            <li>
                                <span>Instructor</span> Matt
                            </li>
                            <li>
                                <span>Class size</span> 5-10
                            </li>
                            <li>
                                <span>Grade level</span> 8
                            </li>
                        </ul>
                    </div>
                   

                </div>

                <div className="resultitem-info-schedule">
                    <div  className="resultitem-info-schedule-label">Class schedule</div> 
                    <div className="resultitem-info-schedule-days">
                        <ul>
                            <li>
                                <span>Monday</span> 2PM - 3PM
                            </li>
                            <li>
                                <span>Tuesday</span> 2PM - 3PM
                            </li>
                            <li>
                                <span>Wednesday</span> 2PM - 3PM
                            </li>
                            <li>
                                <span>Thursday</span> 2PM - 3PM
                            </li>
                        </ul>
                    </div>
                    <a href="#">View full syllabus</a>

                </div>
               
                <div className="resultitem-info-rating">
                    <span>	&#9733;</span> 4.5

                </div>
            
            </div>
            
        </div>
    )
}

export default ResultItem;