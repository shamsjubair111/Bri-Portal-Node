import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ComponentButton = (props) => {

    const { color, className, icon, permission, name, func} = props;

    return (
         <>


        
       
            <button  className={className} onClick={func}>
               {icon}
            </button>
         
        
        
            
        </>
    );
};

export default ComponentButton;