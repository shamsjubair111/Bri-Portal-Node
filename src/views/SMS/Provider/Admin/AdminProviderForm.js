import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import Select from 'react-select';
import AdminLogo from './AdminLogo';

const AdminProviderForm = () => {


    const history = useHistory(); 


    const backToDashboard = () => {
        history.push("/")
    }


    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Assign Admin Provider</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
      <CardHeader>
        <CardTitle>Create Admin Provider</CardTitle>
      </CardHeader>
      <CardBody>
  <form  >


  <FormGroup row>
  <Col md="2">
  <i id="nametitleTooltip" className="fas fa-info-circle menuIcon"></i>
    <span className="pl-2"> Name Title</span>
  </Col>
 
  <UncontrolledTooltip
  placement="top"
  target="nametitleTooltip"

>
 Name Title
</UncontrolledTooltip>

  <Col md="10" lg="6">
  <Select 
        
         name="providerTypeId"
         id="providerTypeId"
         required
        
         />

  </Col>
</FormGroup>

              <FormGroup row>
                <Col md="2">
                <i id="firstnameTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2">First Name</span>
                </Col>

                <UncontrolledTooltip
                placement="top"
                target="firstnameTooltip"

              >
                First Name
              </UncontrolledTooltip>
               
                
                
                <Col md="10" lg="6">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter First Name"
                   
                    required
                  />

                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                <i id="lastnameTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2">Last Name</span>
                </Col>

                <UncontrolledTooltip
                placement="top"
                target="lastnameTooltip"

              >
                Last Name
              </UncontrolledTooltip>
               
                
                
                <Col md="10" lg="6">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Last Name"
                   
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
                <i id="logoTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2"> Provider Logo</span>
                </Col>
               
                <UncontrolledTooltip
                placement="top"
                target="logoTooltip"

              >
               Admin Logo
              </UncontrolledTooltip>

                <Col md="10" lg="6">
                <AdminLogo></AdminLogo>
                 

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

export default AdminProviderForm;