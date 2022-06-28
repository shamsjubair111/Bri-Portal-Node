import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';

const EditInputComponent = (props) => {
    console.log('checking props',props);
    return (
        <div>

        <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
            {props?.data?.name} <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">



          <Input

            type={props?.data?.fieldTypeId==1?'date':props?.data?.fieldTypeId==2?'text':props?.data?.fieldTypeId==3?'number':'text'}
            id={props?.data?.id}
            name={props?.data?.id}
            required

          />


        </Col>
      </FormGroup>
        
            
        </div>
    );
};

export default EditInputComponent;