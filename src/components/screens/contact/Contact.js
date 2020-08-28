import React from 'react';
import image from '../../../res/images/main-image-2.jpg'
const Contact = () => {
    const style = {
        display:'block',
        marginTop:"10px",
    }
    return (
        <div className="contact">
            <div className="contact-header">
                Contact us
            </div>
            <hr style={{margin: '0 25px'}}/>
            <div className="contact-content">
                <div className="contact-content-info">


                <div className="contact-content-info-text">
                    Email us at info@infowars.com
                </div>
                
                </div>
                <div  className="contact-content-img">
                    <img style={{borderRadius:'2px'}}src={image} height="400px" width="600px" />
                </div>
            </div>
            

        </div>
    )
}

export default Contact;