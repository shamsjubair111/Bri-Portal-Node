
import Select from 'react-select';

import React, { createRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import get from '../../../helpers/get';
import post from '../../../helpers/post';


const ProviderForm = (props) => {

    const history = useHistory();
   
    useEffect(()=> {
        get(`ProviderType/GetAll`)
        .then(res => setProviderType(res))
        .catch()

    },[])
   
    const [providerType, setProviderType] = useState([]);
    const [providerTypeOptions, setProvidertypeOptions] = useState('');
    const [providerTypeLabel, setProviderTypeLabel]= useState('Select Provider Type...');
    const [providerTypeValue, setProviderTypeValue] = useState(0);

    
    const providerMenu = providerType.map(providerOptions =>({label:providerOptions.name, value:providerOptions.id}) )
   
  
  
    const dispatch = useDispatch();
    const myForm = createRef();
    const [title,setTitle] = useState('');
    const [navLink,setNavLink] = useState('');
    const [type,setType] = useState('Select Type...');
    const [parentTitle,setParentTitle] = useState('Select Parent...');
    const [parentValue,setParentValue] = useState(null);
    const [displayOrder,setDisplayOrder] = useState(0);
    const [icon,setIcon] = useState(null);
    const [parentId,setParentId] = useState(null);
    const { addToast } = useToasts();
 
    
 
    

    const backToDashboard = () => {
        history.push("/")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       
   
        const subData = new FormData(event.target)
       
   
       //  watch form data values
        // for (var value of subData.values()) {
        
        // }
   
       //  post form data and notify the response to user
        const returnValue = post(`Provider/Create`,subData).then((action)=> {
         
         
          addToast(action, {
           appearance:  'success',
           autoDismiss: true,
         })
         history.push('/providerList');
        })
   
   
      }

      const selectProviderType = (label, value) => {
        setProviderTypeLabel(label);
        setProviderTypeValue(value);
       
      }


    return (
        <div>
            <Card>
              <CardHeader className="page-header">
              
                  <h3>Assign Provider</h3>
                  <div className="page-header-back-to-home">
                    <span onClick={backToDashboard}> <i className="fas fa-arrow-circle-left"></i> Back to Dashboard</span>
                  </div>
              
              </CardHeader>
      </Card>

      <Card>
          <CardHeader>
            <CardTitle>Create Provider</CardTitle>
          </CardHeader>
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
                        // onChange={(e)=>setIcon(e.target.value)}
                      />

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
                        name="userName"
                        id="userName"
                        placeholder="Enter Your Username"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="passwordTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Password</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="passwordTooltip"

                  >
                    Your Password
                  </UncontrolledTooltip>
                 

                  

                    <Col md="10" lg="6">
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                      />

                    </Col>
                  </FormGroup>
                 

                  <FormGroup row>
                    <Col md="2">
                    <i id="typeTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Type</span>
                    </Col>
                   
                    <UncontrolledTooltip
                    placement="top"
                    target="typeTooltip"

                  >
                    Your Provider Type
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

                    </Col>
                  </FormGroup>

                  <Button.Ripple
                        type="submit"
                        className="mr-1 mt-3 badge-primary"
                        // onClick={(e)=>handleSubmit(e)}
                      >
                        Submit
                      </Button.Ripple>

                  

              </form>
              </CardBody>
              </Card>
            
            
        </div>
    );
};

export default ProviderForm;