import Axios from 'axios';
import React, { useState, createRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import MediaPictures from './UniversityMedia';
import Select from 'react-select';
import { Card, CardBody, CardHeader, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import get from '../../../helpers/get';

import CustomButtonRipple from '../Components/CustomButtonRipple';

const AddUniversityApplicationDocument = () => {

    useEffect(()=>{

        get(`DocumentRequirementStatusDD/Index`)
        .then( res => {
            console.log('Checking document requirement Status',res);
            setDocument(res);
        })

    },[])

    const history = useHistory();
    const [activetab, setActivetab] = useState('6');

    const [document, setDocument] = useState([]);
    const [documentLabel, setDocumentLabel] =  useState('Select Requirement Status');
    const [documentValue, setDocumentValue] =  useState(0);


    const documentOptions = document?.map((doc) => ({
        label: doc?.name,
        value: doc?.id,
      }));


      const selectDocumentStatus = (label, value) => {
        setDocumentLabel(label);
        setDocumentValue(value);
      };

      // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  }


    // tab toggle
    const toggle = (tab) => {
        setActivetab(tab)
        if (tab === '1') {
          history.push('/addUniversity')
        }
        if (tab === '2') {
          history.push('/addUniversityCampus')
        }
        if (tab === '3') {
          history.push('/addUniversityFinancial')
        }
        if (tab === '4') {
          history.push('/addUniversityFeatures')
        }
        if (tab === '5') {
          history.push('/addUniversityGallery')
        }
      }


  const toggleDanger = (p) => {
    localStorage.setItem('UniversityCampusId', p.id)
    localStorage.setItem('UniversityCampusName', p.name)
  
  }


    return (
        <div>

        <Card className='uapp-card-bg'>
        <CardHeader className="page-header">              
          <h3 className="text-light">Add University Application Document</h3>
            <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "} 
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
              </span>
            </div>             
        </CardHeader>        
      </Card>

      <Card>

      <CardBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={activetab === '1'}
              onClick={() => toggle('1')}
            >
              University Information
            </NavLink>
          </NavItem>
          <NavItem>
            {/* <NavLink disabled
                              active={activetab === '2'}
                              onClick={() =>toggle('2')}
                              > */}
            <NavLink
              active={activetab === '2'}
              onClick={() => toggle('2')}
            >

              Campus Information
            </NavLink>
          </NavItem>

          <NavItem>
           

                <NavLink
                  active={activetab === '3'}
                  onClick={() => toggle('3')}
                >

                  Financial Information
                </NavLink>



            



          </NavItem>

          <NavItem>
            <NavLink 
              active={activetab === '4'}
            >

              Features
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
              active={activetab === '5'}
            >

              University Gallery
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
              active={activetab === '6'}
            >

              Application Document
            </NavLink>
          </NavItem>


        </Nav>

        <TabContent activeTab={activetab}>

         


          <TabPane tabId="6">

          <Form   className="mt-5">

                <FormGroup row className="has-icon-left position-relative">
                  <Input type="hidden" id="universityId" name="universityId" value={localStorage.getItem("id")} />
                
                </FormGroup>

              


                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span> Name <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="name"
                      id="name"  
                      
                   
                      placeholder="Enter Name"
                      required
                    />
                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span> Description <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="description"
                      id="description"  
                      
                   
                      placeholder="Enter  Description"
                      required
                    />
                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Upload Document{" "}
                    <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">

                  {
                      <MediaPictures/>
                  }

                </Col>
           
          </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Document Requirement Status <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                    options={documentOptions}
                    value={{ label: documentLabel, value: documentValue }}
                    onChange={(opt) => selectDocumentStatus(opt.label, opt.value)}
                     
                      name="CampusCountryId"
                      id="CampusCountryId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

               
                <FormGroup className="has-icon-left position-relative">

               
                    
                      
                      {/* <Button.Ripple
                        color="primary"
                        type="submit"
                        className="mr-1 mt-3"

                      >
                        Submit
                      </Button.Ripple> */}
                    
                  
                      <CustomButtonRipple
                        color={"primary"}
                        type={"submit"}
                        className={"mr-1 mt-3"}
                        name={"submit"}
                        permission={6}
                      />
                  

                </FormGroup>
              </Form>


          

          
          </TabPane>

        </TabContent>
      </CardBody>

    </Card>
            
        </div>
    );
};

export default AddUniversityApplicationDocument;