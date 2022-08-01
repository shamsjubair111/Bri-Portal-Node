import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const LinkButton = (props) => {
    const {url, color, className, icon, permission, name} = props;

    const data = [1,2,3,4,6];

    // console.log("forLink",url, color, className, icon);
    return (
        <>


        <Link to={url}>
        {
            data?.includes(permission)?
            <Button color={color} className={className}>
               {icon} {name}
            </Button>
            :
            null
        }
        </Link>
        
            
        </>
    );
};

export default LinkButton;