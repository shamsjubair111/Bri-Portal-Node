import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const LinkButton = (props) => {
    const {url, color, className, icon} = props;

    console.log("forLink",url, color, className, icon);
    return (
        <div>


        <Link to={url}>
        <Button color={color} className={className}>
           {icon}
        </Button>
        </Link>
        
            
        </div>
    );
};

export default LinkButton;