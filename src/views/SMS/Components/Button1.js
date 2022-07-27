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

const Button1 = ({className, icon, permission,url,func,name}) => {
    // const {className, icon} = props;

    // console.log(className);
    // console.log(url);

    console.log('Trying New Type of Props',func);


    const data = [1,2,3,4,6];



    return (
        <div>
      {
        data?.includes(permission)?
        <Button
        onClick={func}

       
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

export default Button1;