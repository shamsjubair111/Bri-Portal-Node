import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const LinkButton = (props) => {
    const {url, color, className, icon, permission, name, func,target, activeStyle} = props;

    const data = [1,2,3,4,6];

    // console.log("forLink",url, color, className, icon);
    return (
        <>


        <Link to={url} activeStyle ={activeStyle} target={target}>
       
            <button color={color} className={className} onClick={func}>
               {icon} {name}
            </button>
         
        </Link>
        
            
        </>
    );
};

export default LinkButton;