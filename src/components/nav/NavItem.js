import React from 'react';


let NavItem = ({
    title,
    handleClick,
}) => {
  
    return(
        <div   
            onClick={handleClick}
            className="navitem">
            {title}
        </div>
    )
}

export default NavItem;