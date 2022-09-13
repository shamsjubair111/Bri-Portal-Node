import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Select from 'react-select';
import { Link, useHistory } from 'react-router-dom';
import get from '../../../helpers/get';

const Create = () => {

    const history = useHistory();
    const [success, setSuccess] = useState(false);
    const [consultant,setConsultant] = useState([]);
    const [consultantLabel,setConsultantLabel] = useState('Select Consultant');
    const[consultantValue,setConsultantValue] = useState(0);
    const [consultantError, setConsultantError] = useState('');
    const [amount,setAmount] = useState(null);

    useEffect(()=>{

        get(`ConsultantDD/index`)
        .then(res =>{
        setConsultant(res);
        })

        get(`Balance/ConsultantBalance/${consultantValue}`)
        .then(res => {
            setAmount(res);
        })

    },[success,consultantValue])

    const backToDashboard = () =>{
        history.push('/');
    }

    const consultantOptions = consultant?.map(con => ({
        label: con?.name,
        value: con?.id
    }))

    const selectConsultant = (label,value) => {
      setConsultantError('');
        setConsultantLabel(label);
        setConsultantValue(value);
    }

    const handleSubmit = (event) => {
            event.preventDefault();
            if(consultantValue ==0) {
                setConsultantError('Consultant Must be Selected');
            }
            else{

            }
    }


    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Create Withdraw Request</h3>
                <div className="page-header-back-to-home">
                  <span className="text-light" onClick={backToDashboard}>
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card>
                <CardBody>

                    <div className='row'>
                        <div className='col-md-9'>
                        <form onSubmit={handleSubmit}>
                    <FormGroup row className="has-icon-left position-relative">
                            <Col md="2">
                            <span>
                                Select Consultant <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                                    
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    name='consultantId'
                                    id='consultantId'
                                    />
                                    <span className='text-danger'>{consultantError}</span>
                                    
                            </Col>
                        </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                            <Col md="2">
                            <span>
                                Amount <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input
                            type='number'
                            name='amount'
                            id='amount'
                            placeholder='Enter Amount'
                            required
                            />
                                    
                            </Col>
                        </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                            <Col md="10">
                            <div className='d-flex justify-content-end'>
                                <Button color='primary' type='submit'>
                                    Submit
                                </Button>

                            </div>
                            </Col>
                           
                        </FormGroup>

                    </form>

                        </div>

                        <div className='col-md-3'>
                            <div className='d-flex justify-content-end'>
                            <h5>Balance Available to Withdraw</h5>
                            </div>
                            <br/>
                            <h2 className='text-center' style={{color: '#1e98b0'}}>&#xA3; {amount}</h2>

                        </div>

                    </div>
                   
                </CardBody>
            </Card>
            
        </div>
    );
};

export default Create;