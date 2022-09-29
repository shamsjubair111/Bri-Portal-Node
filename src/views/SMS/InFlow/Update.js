import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import get from '../../../helpers/get';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Select from 'react-select';
import ButtonForFunction from '../Components/ButtonForFunction';

const Update = () => {

    const {id} = useParams();
    const history = useHistory();
    const [transactionInfo,setTransactionInfo] = useState({});
    const [consultant,setConsultant] = useState([]);
    const [transaction,setTransaction] = useState([]);
    const [clabel,setCLabel] = useState('Select Consultant');
    const [cValue, setCValue] = useState(0);
    const [tLabel,setLabel] = useState('Select Transaction Type');
    const [tValue,setTValue] = useState(0);

    useEffect(()=>{
      
        get(`BonusTransaction/Details/${id}`)
        .then( res => {
            console.log(res);
            setTransactionInfo(res);
        })

        get(``)

    },[])

    const backToDashboard = () => {
        history.push('/inFlowTransaction');
    }

    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Update Inflow Transaction</h3>
                <div className="page-header-back-to-home">
                  <span className="text-light" onClick={backToDashboard}>
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to Inflow Transaction List
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card>

                <CardBody>
                    <span className='mr-1'><b>Code:</b></span><span className='ml-1'></span>
                    <br/>
                    <span className='mr-1'><b>Date:</b></span><span className='ml-1'></span>

                    <Form className='mt-3'>

             <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Consultant <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Select
                  
                  name="studentTypeId"
                  id="studentTypeId"
                />
                
             </Col>

            </FormGroup>

             <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Transaction Type <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Select
                  
                  name="studentTypeId"
                  id="studentTypeId"
                />
                
             </Col>

            </FormGroup>

             <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Amount <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Input
                type='number'
                
                />
                
             </Col>

            </FormGroup>

             <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Reference
                </span>
              </Col>
              <Col md="6">
                <Input
                type='number'

                />
                
             </Col>

            </FormGroup>
             <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Note
                </span>
              </Col>
              <Col md="6">
                <Input
                type='number'

                />
                
             </Col>

            </FormGroup>

            <FormGroup row
              className="has-icon-left position-relative"
              
            >

             <Col md='8'>

              <div
              style={{ display: "flex", justifyContent: "end" }}
              >
                


              <ButtonForFunction

                className={''}
                color={'primary'}
                name={'Submit'}
                type={'submit'}
                

              />

              </div>
            

             </Col>

            </FormGroup>
            

                    </Form>

                </CardBody>

            </Card>
            
        </div>
    );
};

export default Update;