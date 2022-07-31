import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    ButtonGroup,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Button,
  
    Input,
  
    Col,
    Row,
    Table,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";

const ButtonForFunction = ({className, icon,color, permission, type,url, func, name}) => {
    // const {className, icon} = props;

    // console.log(className);
    // console.log(url);

    console.log('Trying New Type of Props',func, type);


    const data = [1,2,3,4,6];



    return (
        <div>
      {
        data?.includes(permission)?
        <Button
        onClick={func}
        color={color}
type={type}
       
        className={className}
      >
        {" "}
        {icon}{name}{" "}
      </Button>
      :
      null 

      }
        </div>
    );
};

export default ButtonForFunction;