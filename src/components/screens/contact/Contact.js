import React from 'react';
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
            <hr style={{margin:'0 25px'}}/>
            <div className="contact-content">
                <div className="contact-content-card">
                    <div className="contact-content-card-icon">
                        &#9742;
                    </div>
                    <div className="contact-content-card-text">
                        1800-565-5555
                    </div>
                </div>
                <div className="contact-content-card">
                    <div className="contact-content-card-icon">
                        &#9993;
                    </div>
                    <div className="contact-content-card-text">
                        infowars@infowars.com
                    </div>
                </div>
         
                
            </div>
            

        </div>
    )
}

export default Contact;