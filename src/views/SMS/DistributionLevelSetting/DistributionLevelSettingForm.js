import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip, ButtonGroup } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import post from '../../../helpers/post';
const DistributionLevelSettingForm = (props) => {

    const {success, setSuccess, name, setName, value, setValue, percent, setPercent} = props;

    const {addToast} = useToasts();
  
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const subData = new FormData(event.target);

        post(`DistributionLevelSetting/Create`,subData)
        .then(res => {
                if(res?.status == 200 && res?.data?.isSuccess == true){
                    addToast(res?.data?.message,{
                        appearance: 'success',
                        autoDismiss: true
                    })
                    setName('');
                    setValue('');
                    setPercent('');
                    setSuccess(!success);
                }
        })


    }

    return (
        <div>

                <div className='mb-4'>
                <span className='branch-title-style2'>Add Distribution Level Setting</span>
                </div>

                <form  onSubmit={handleSubmit}> 


               

                <FormGroup row className="has-icon-left position-relative">
                <Col md="4">
                <span>
                Level Name <span className="text-danger"></span>
                </span>
                </Col>
                <Col md="8">
                <Input
                type='text'
                name="levelName"
                id="levelName"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required

                />

                </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                <Col md="4">
                <span>
                Level Value <span className="text-danger"></span>
                </span>
                </Col>
                <Col md="8">
                <Input
                type='number'
                name="levelValue"
                id="levelValue"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                required

                />

                </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                <Col md="4">
                <span>
                Commission Percent <span className="text-danger"></span>
                </span>
                </Col>
                <Col md="8">
                <Input
                type='number'
                name="commissionPercent"
                id="commissionPercent"
                value={percent}
                onChange={(e) =>setPercent(e.target.value)}
                required

                />

                </Col>
                </FormGroup>

               

                <div className='d-flex justify-content-end mt-3'>
                
                    
                <div>
                <Button color='primary' type='submit'>
                    Submit

                    </Button>
                </div>

                </div>

                    


                </form>

            
        </div>
    );
};

export default DistributionLevelSettingForm;