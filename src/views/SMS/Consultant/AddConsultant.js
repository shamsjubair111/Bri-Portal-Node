
import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select from "react-select";
import { useToasts } from 'react-toast-notifications';

import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { rootUrl } from '../../../constants/constants';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import ButtonForFunction from '../Components/ButtonForFunction';






const AddConsultant = () => {

    
  
    const [nameTitle, setNameTitle] = useState([]);
    const [consParent, setConsParent] = useState([]);
    const [consType, setConsType] = useState([]);
    const [nameLabel, setNameLabel] = useState("Select Title");
    const [nameValue, setNameValue] = useState(0);
    const [parentLabel, setParentLabel] = useState("Select Parent Consultant");
    const [parentValue, setParentValue] = useState(0);
    const [typeLabel, setTypeLabel] = useState("Select Consultant Type");
    const [typeValue, setTypeValue] = useState(0);

    const [emailError, setEmailError] = useState(true);
    const [consultantError, setConsultantError] = useState(false);
    const [parentError, setParentError] = useState(false);
    const [titleError, setTitleError] = useState(false);

    const history = useHistory();
    const { addToast } = useToasts();
      

    useEffect(()=>{
      get("NameTittleDD/index").then(res=>{
        setNameTitle(res);
      });

      get("ConsultantDD/index").then(res=>{
        setConsParent(res);
      });

      get("ConsultantTypeDD/index").then(res=>{
        setConsType(res);
      })

    },[]);
    
    const nameTitleMenu = nameTitle?.map(titleOptions => ({label:titleOptions?.name, value:titleOptions?.id}));
    const consParentMenu = consParent?.map(consParentOptions => ({label:consParentOptions?.name, value:consParentOptions?.id}));
    const consTypeMenu = consType?.map(consTypeOptions => ({label:consTypeOptions?.name, value:consTypeOptions?.id}));
    
    const selectNameTitle = (label, value) => {

      setTitleError(false);
      setNameLabel(label);
      setNameValue(value);
    }

    const selectParentCons = (label, value) => {

      setParentError(false);
      setParentLabel(label);
      setParentValue(value);
    }

    const selectConsType = (label, value) => {

      setConsultantError(false);
      setTypeLabel(label);
      setTypeValue(value);
    }

    const handleEmail = (e) => {
      console.log(e.target.value);

      get(`EmailCheck/EmailCheck/${e.target.value}`)
      .then(res => {
        console.log('Checking Response', res);
        setEmailError(res);
      })
    }

    const backToConsultantList = () => {
      history.push('/consultantList');
    }
      
  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);

     if(typeValue == 0){
      setConsultantError(true);
    }
    else if(parentValue == 0 ){
      setParentError(true);
    }
    else if(nameValue == 0){
      setTitleError(true);
    }
    else if(emailError == false){
      setEmailError(emailError);
    }

    else{

       //  watch form data values
    for (var value of subdata) {
      console.log(value);
    }

      post("Consultant/Register", subdata).then(res=>{
        console.log("consultant",res);
        addToast(res?.data?.message, {
          appearance:'success',
          autoDismiss: true,
        });
        
        if (res.status === 200 && res.data.isSuccess === true) {
          
          localStorage.setItem('consultantRegisterId', res?.data?.result?.id);
          history.push('/consultantInformation');
          
        }
      })


    }

  

  };


    const ToConsultantList = () =>{
       
        history.push('/consultantList');
    }

    return (
        <div>

             <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Consultant Registration</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToConsultantList}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Consultant List
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
              <Form  onSubmit={handleSubmit} className="mt-5">

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Consultant Type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={consTypeMenu}
                      value={{ label: typeLabel, value: typeValue }}
                      onChange={(opt) => selectConsType(opt.label, opt.value)}
                      name="consultantTypeId"
                      id="consultantTypeId"
                    />

                    {

                      consultantError && 
                      <span className='text-danger'>Select Consultant Type</span>
                    }

                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Parent Consultant <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={consParentMenu}
                      value={{ label: parentLabel, value: parentValue }}
                      onChange={(opt) => selectParentCons(opt.label, opt.value)}
                      name="parentConsultantId"
                      id="parentConsultantId"
                    />

                   {
                    parentError && 
                    <span className='text-danger'>Select Parent Consultant</span>
                   }

                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       Title <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    options={nameTitleMenu}
                    value={{ label: nameLabel, value: nameValue }}
                    onChange={(opt) => selectNameTitle(opt.label, opt.value)}
                    name="nameTittleId"
                    id="nameTittleId"
                    />

                    {
                      titleError && 
                      <span className='text-danger'>Select Name Title</span>

                    }

                  </Col>
                </FormGroup>


              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      First Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter First Name"
                      required
                    />

                    
                  </Col>
                </FormGroup>


              
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Last Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter Last Name"
                      required
                    />

                  
                  </Col>
                </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Email <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      required
                      onBlur={handleEmail}
                    />
                     
                    {
                      !emailError ? 

                      <span className='text-danger'>Email already exists</span>
                      :
                      null

                    }
                    
                  </Col>
                </FormGroup>
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Phone Number  <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      required
                    />

                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Password <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                    />

                  
                  </Col>
                </FormGroup>

                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup>

                <FormGroup row
                  className="has-icon-left position-relative ms-3"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  {/* <Button.Ripple
                    type="submit"
                    className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple> */}
                   <Col md="6">

                   <Button onClick={ToConsultantList} 
                    className='mt-3 me-1'
                    color='danger'>
                        Cancel
                    </Button>

                    <ButtonForFunction 
                      type={"submit"}
                      className={'mt-3 ms-1'}
                      color={'primary'}
                      name={"Submit"}
                      
                    />

                 
                    </Col>
                </FormGroup>
              </Form>
        </CardBody>
      </Card>
            
        </div>
    );
};

export default AddConsultant;