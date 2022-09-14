
import Select from 'react-select';

import React, { createRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import ProviderLogo from './ProviderLogo';
import { useSelector } from 'react-redux';
import ButtonForFunction from '../Components/ButtonForFunction';


const ProviderForm = (props) => {

    const history = useHistory();
   
    useEffect(()=> {
        get(`ProviderTypeDD/Index`)
        .then(res => setProviderType(res))
        .catch()

    },[])
   
    const [providerType, setProviderType] = useState([]);
    const [providerTypeOptions, setProvidertypeOptions] = useState('');
    const [providerTypeLabel, setProviderTypeLabel]= useState('Select Provider Type...');
    const [providerTypeValue, setProviderTypeValue] = useState(0);
    const [providerTypeError, setProviderTypeError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [emailError, setEmailError] = useState(true);

    
    const providerMenu = providerType.map(providerOptions =>({label:providerOptions.name, value:providerOptions.id}) )
   
  

  
    const [title,setTitle] = useState('');
   
    const { addToast } = useToasts();
 
    
    const providerLogo = useSelector((state) => state?.GeneralProviderlogoFile ?.ProviderLogoFile);

    // console.log('Hello Provider Logo', providerLogo[0]?.originFileObj);
 
    

    const backToDashboard = () => {
        history.push("/")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       
   
        const subData = new FormData(event.target);
        subData.append('providerLogo',providerLogo[0]?.originFileObj);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        if(providerTypeValue == 0){
          setProviderTypeError(true);
        }
        else if(providerLogo.length <1){
          setImageError(true);
        }
        else if(emailError == false){
          setEmailError(emailError);
        }
        else{
        //  post form data and notify the response to user
        post(`Provider/Create`,subData,config).then((action)=> {
                
          if(action?.status ==200){


        
          addToast(action?.data?.message, {
          appearance:  'success',
          autoDismiss: true,
        })
       
        history.push(`/adminProviderForm/${action?.data?.result?.id}`);
        }
        })
        }
      
   
   
      }

      const selectProviderType = (label, value) => {
        setProviderTypeLabel(label);
        setProviderTypeValue(value);
        setProviderTypeError(false);
       
      }

      const handleEmail = (e) => {
        console.log(e.target.value);
  
        get(`EmailCheck/EmailCheck/${e.target.value}`)
        .then(res => {
          console.log('Checking Response', res);
          setEmailError(res);
        })
      }


    return (
        <div>
        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Provider Information</h3>
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
      <form onSubmit={handleSubmit} >

                  <FormGroup row>
                    <Col md="2">
                    <i id="nameTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Name</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="nameTooltip"

                  >
                    Your Name
                  </UncontrolledTooltip>
                   
                    
                    
                    <Col md="10" lg="6">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        onChange={(e)=>setTitle(e.target.value)}
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="emailTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Email</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="emailTooltip"

                  >
                    Your Email
                  </UncontrolledTooltip>
                    

                

                    <Col md="10" lg="6">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        required
                        onBlur={handleEmail}
                        // onChange={(e)=>setIcon(e.target.value)}
                      />
                      {
                      !emailError ? 

                      <span className='text-danger'>Email Already Exists</span>
                      :
                      null

                    }
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="numberTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Phone Number</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="numberTooltip"

                  >
                    Your Phone Number
                  </UncontrolledTooltip>

                  

                    <Col md="10" lg="6">
                      <Input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Enter Your Phone Number"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="usernameTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Username</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="usernameTooltip"

                  >
                    Your Username
                  </UncontrolledTooltip>
                  

                    <Col md="10" lg="6">
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Your Username"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="addressLineTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Address Line </span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="addressLineTooltip"

                  >
                    Address Line
                  </UncontrolledTooltip>
                  

                    <Col md="10" lg="6">
                      <Input
                        type="text"
                        name="addressLine"
                        id="addressLine"
                        placeholder="Enter Address Line"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                      />

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="2">
                    <i id="typeTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2"> Provider Type</span>
                    </Col>
                   
                    <UncontrolledTooltip
                    placement="top"
                    target="typeTooltip"

                  >
                   Provider Type
                  </UncontrolledTooltip>

                    <Col md="10" lg="6">
                    <Select 
                            options = {providerMenu}
                           value={{ label: providerTypeLabel, value: providerTypeValue }}
                           onChange={opt => selectProviderType(opt.label, opt.value)}
                           name="providerTypeId"
                           id="providerTypeId"
                           required
                          
                           />
                           {
                            providerTypeError? 
                            <span className='text-danger'>Provider type must be selected</span>
                            :
                            null
                           }

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                    <i id="logoTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2"> Provider Logo</span>
                    </Col>
                   
                    <UncontrolledTooltip
                    placement="top"
                    target="logoTooltip"

                  >
                   Provider Logo
                  </UncontrolledTooltip>

                    <Col md="10" lg="6">
                     <ProviderLogo setImageError={setImageError}/>
                     {
                      imageError ? 
                      <span className='text-danger'>Image must be selected</span>
                      :
                      null
                     }

                    </Col>
                  </FormGroup>

                  <FormGroup row
                  className="has-icon-left position-relative"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "end",
                  }}
                  >

                    <Col md="5">
                      <ButtonForFunction 
                        type={"submit"}
                        className={"ms-lg-3 ms-sm-1 mt-3 badge-primary"}
                        name={"Submit"}
                        permission={6}
                      />
                    </Col>

                    </FormGroup>
                  
              </form>
              </CardBody>
              </Card>
            
            
        </div>
    );
};

export default ProviderForm;