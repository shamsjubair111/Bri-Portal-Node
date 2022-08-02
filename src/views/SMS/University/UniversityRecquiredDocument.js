import Axios from 'axios';
import React, { useState, createRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import MediaPictures from './UniversityMedia';
import Select from 'react-select';
import { Card, CardBody, CardHeader, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import get from '../../../helpers/get';
import { useToasts } from 'react-toast-notifications';

import CustomButtonRipple from '../Components/CustomButtonRipple';
import post from '../../../helpers/post';

const UniversityRecquiredDocument = () => {

    const {addToast} = useToasts();
    const history = useHistory();
    const [activetab, setActivetab] = useState('7');

    const [document, setDocument] = useState([]);
    const [documentLabel, setDocumentLabel] =  useState('Select Requirement Document');
    const [documentValue, setDocumentValue] =  useState(0);
    const [documentError, setDocumentError] = useState(false);

    useEffect(()=>{

      get(`DocumentDD/Index`)
      .then( res => {
          console.log('Checking document DD',res);
          setDocument(res);
      })

  },[])


    const documentOptions = document?.map((doc) => ({
        label: doc?.name,
        value: doc?.id,
      }));


      const selectDocument = (label, value) => {
        setDocumentError(false);
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
        if (tab === '6') {
          history.push('/addUniversityApplicationDocument')
        }
      }


  // const toggleDanger = (p) => {
  //   localStorage.setItem('UniversityCampusId', p.id)
  //   localStorage.setItem('UniversityCampusName', p.name)
  
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const subData = new FormData(event.target);

    // for(var i of subData){
    //   console.log("i", i);
    // }

    if(documentValue === 0){
      setDocumentError(true);
    }
    else{
      post('UniversityRequiredDocuments/Create', subData)
      .then(res => {
        console.log('document data', res);
        if(res?.status == 200){
          addToast(res?.data?.message,{
            appearance:'success',
            autoDismiss: true
          })
          
        }
  
      })
    }

  }

    return (
        <div>

        <Card className='uapp-card-bg'>
        <CardHeader className="page-header">              
          <h3 className="text-light">Add University Required Document</h3>
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

          <NavItem>
            <NavLink 
              active={activetab === '7'}
            >

              Required Document
            </NavLink>
          </NavItem>


        </Nav>

        <TabContent activeTab={activetab}>

         


          <TabPane tabId="7">

          <Form onSubmit={handleSubmit} className="mt-5">

                <FormGroup row className="has-icon-left position-relative">
                  <Input type="hidden" id="universityId" name="universityId" value={localStorage.getItem("id")} />
                
                </FormGroup>


                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Requirement Document<span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                    options={documentOptions}
                    value={{ label: documentLabel, value: documentValue }}
                    onChange={(opt) => selectDocument(opt.label, opt.value)}
                     
                      name="documentId"
                      id="documentId"
                    />

                    {
                      documentError &&
                      <span className='text-danger'>Select Required Document</span>
                    }

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

               
                <FormGroup row className="has-icon-left position-relative"
                   style={{ display: "flex", justifyContent: "end" }}
                 >
       
                   <Col md="5">

                    <CustomButtonRipple
                      color={"primary"}
                      type={"submit"}
                      className={"mr-1 mt-3"}
                      name={"submit"}
                      permission={6}
                    />
                  
                   </Col>

                </FormGroup>
              </Form>


          

          
          </TabPane>

        </TabContent>
      </CardBody>

    </Card>
    

    <br/> <br/> <br/>
            
        </div>
    );
};

export default UniversityRecquiredDocument;