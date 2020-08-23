import React from 'react';

const NavLogo = ({
    title,
    img
}) => {

    
        return(
            <div className="navlogo">
                <img src={img} />
               {title}
            </div>
        )
}

export default NavLogo;