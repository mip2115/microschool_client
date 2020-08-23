import React from 'react';

const NavItem = ({
    title,
    img
}) => {

    if (img) {
        return(
            <div className="navitem">
                <img src={img} />
               {title}
            </div>
        )
    }
    return(
        <div className="navitem">
            {title}
        </div>
    )
}

export default NavItem;