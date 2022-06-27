import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import Select from "react-select";

const InputComponent = (props) => {
  

  console.log(props?.data?.fieldTypeId);

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

export default InputComponent;