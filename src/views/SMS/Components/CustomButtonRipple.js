import React from 'react';
import {
   
    Button,
  
  } from "reactstrap";

const CustomButtonRipple = ({className, icon,color, permission, type,url, func, name}) => {

    const data = [1,2,3,4,6];

    return (
        <>
          {
            data.includes(permission) ? 
            <Button.Ripple
               onClick={func}
               color={color}
               type={type}
               className={className}
             >
               {name}
            </Button.Ripple>
            :
            null
          }   
        </>
    );
};

export default CustomButtonRipple;