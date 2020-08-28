import React from 'react';
import image from '../../../res/images/main-image-2.jpg'
const About = () => {
    const style = {
        display:'block',
        marginTop:"10px",
    }
    return (
        <div className="about">
            <div className="about-header">
                Our education system was built to churn out factory workers.  Let's change that.
            </div>
            <hr style={{margin: '0 25px'}}/>
            <div className="about-content">
                <div className="about-content-info">
                <div className="about-content-info-title">What is Microversity?</div>

                <div className="about-content-info-text">
                    Aenean quis velit vulputate, pulvinar odio in, 
                    lacinia turpis. Integer in lorem posuere, accumsan ex sed, 
                    sollicitudin massa. Integer tincidunt nibh in eros fringilla 
                    vulputate. Pellentesque nunc orci, ullamcorper quis blandit 
                    aliquet, posuere porttitor erat.
                </div>
                <br />
                <div className="about-content-info-title">Who is Microversity for?</div>
                <div className="about-content-info-text">
                    Aenean quis velit vulputate, pulvinar odio in, 
                    lacinia turpis. Integer in lorem posuere, accumsan ex sed, 
                    sollicitudin massa. Integer tincidunt nibh in eros fringilla 
                    vulputate. Pellentesque nunc orci, ullamcorper quis blandit 
                    aliquet, posuere porttitor erat.
                </div>
                <br />

                <div className="about-content-info-title">The Microversity team</div>
                <div className="about-content-info-text">
                    Aenean quis velit vulputate, pulvinar odio in, 
                    lacinia turpis. Integer in lorem posuere, accumsan ex sed, 
                    sollicitudin massa. 
                </div>
                <br />
                <div style={style} className="btn-primary">
                Find classes
            </div>
                </div>
                <div  className="about-content-img">
                    <img style={{borderRadius:'2px'}}src={image} height="400px" width="600px" />
                </div>
            </div>
            

        </div>
    )
}

export default About;