import Axios from 'axios';
import React, { createRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import { Card, CardBody, CardHeader, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
// import { useDropzone } from "react-dropzone"
import { rootUrl } from '../../../constants/constants';
import { useToasts } from "react-toast-notifications";


const AddUniversityFeatures = () => {

    const history = useHistory();
    const [activetab, setActivetab] = useState('4');
    const [radioPracticalTraining, setRadioPracticalTraining] = useState('false');
    const [radioIntershipParticipation, setRadioIntershipParticipation] = useState('false');
    const [radioWorkWhileStudying, setRadioWorkWhileStudying] = useState('false');
    const [radioConditionalOfferLetter, setRadioConditionalOfferLetter] = useState('false');
    const [radioAccommodations, setRadioAccommodations] = useState('false');
   
    const myForm = createRef();
    const location = useLocation();

    const { addToast } = useToasts();

    let uniId;
    if(location.id){
        uniId = location.id;
    }else{
        uniId = '';
    }

  

    // on submit form
    const handleSubmit = (event) => {

        event.preventDefault();
        const subdata = new FormData(event.target);
        
        //  watch form data values
        for (var value of subdata.values()) {
         
    
        }
  
      //const config = {
      //  headers: {
      //    'content-type': 'multipart/form-data'
      //  }
      //}
  
  
      Axios.post(`${rootUrl}UniversityFeatures/Create`, subdata)
        .then(res => {
  
    
  
          const uniID = res.data.result.universityId;
  
          if (res.status === 200 && res.data.isSuccess === true) {
            // setSubmitData(true);
            history.push({
              pathname: '/addUniversityGallery',
              id: uniID
            })

            addToast(res.data.message, {
                appearance: 'success',
                autoDismiss: true,
              })
           
          }else{
            addToast(res.data.message, {
                appearance: 'warning',
                autoDismiss: true,
              })
          }
  
        })

    }
    // tab toggle
    const toggle = (tab) => {
        setActivetab(tab)
        if(tab == '1'){
            history.push('/addUniversity')
        }
        if(tab == '2'){
            history.push('/addUniversityCampus')
        }
        if(tab == '3'){
            history.push('/addUniversityFinancial')
        }
        if(tab == '4'){
            history.push('/addUniversityFeatures')
        }
        if(tab == '5'){
            history.push('/addUniversityGallery')
        }
    }

    // on change radio button

    // onValueChangePracticalTraining
    const onValueChangePracticalTraining = (event) => {
      
        setRadioPracticalTraining(event.target.value)
    }

    // onValueChangeIntershipParticipation
    const onValueChangeIntershipParticipation = (event) => {
        setRadioIntershipParticipation(event.target.value)
    }

    // onValueChangeWorkWhileStudying
    const onValueChangeWorkWhileStudying = (event) => {
        setRadioWorkWhileStudying(event.target.value)
    }
    
    // onValueChangeConditionalOfferLetter
    const onValueChangeConditionalOfferLetter = (event) => {
        setRadioConditionalOfferLetter(event.target.value)
    }

    // onValueChangeAccommodations
    const onValueChangeAccommodations = (event) => {
        setRadioAccommodations(event.target.value)
    }





    const styleLabelBold = {
        // fontWeight: "bold"
      };

     // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  }
    return (
        <div>

          <Card className='uapp-card-bg'>
              <CardHeader className="page-header">              
                <h3 className="text-light">Add University Features</h3>
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
                                onClick={() =>toggle('1')}
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
                                onClick={() =>toggle('2')}
                                >

                                Campus Information
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '3'}
                                onClick={() =>toggle('3')}
                                >

                                Financial Information
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '4'}
                                onClick={() =>toggle('4')}
                                >

                                Features
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '5'}
                                onClick={() =>toggle('5')}
                                >

                                University Gallery
                                </NavLink>
                            </NavItem>
                </Nav>

                <TabContent activeTab={activetab}>

                            <TabPane tabId="4">

                            <Form ref={myForm} onSubmit={handleSubmit} className="mt-5">

                                <FormGroup row className="has-icon-left position-relative">
                                        <Input type="hidden" id="UniversityId" name="UniversityId" value={localStorage.getItem("id")} />
                                </FormGroup>

                                <FormGroup row className="pt-3">
                                    <Col md="2">
                                        <span>Practical Training <span className="text-danger">*</span> </span>
                                    </Col>
                                    <Col md="6">

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="PracticalTraining" onChange={onValueChangePracticalTraining} name="PracticalTraining" value='true' checked={radioPracticalTraining == 'true'} />
                                        <Label className="form-check-label" check htmlFor="PracticalTraining" style={styleLabelBold}>Yes</Label>

                                        </FormGroup>

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="PracticalTraining" onChange={onValueChangePracticalTraining} name="PracticalTraining" value='false' checked={radioPracticalTraining == 'false'} />
                                        <Label className="form-check-label" check htmlFor="PracticalTraining" style={styleLabelBold}>No</Label>

                                        </FormGroup>
                                    </Col>
                               </FormGroup>

                               <FormGroup row className="pt-3">
                                    <Col md="2">
                                        <span>Intership Participation <span className="text-danger">*</span> </span>
                                    </Col>
                                    <Col md="6">

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="IntershipParticipation" onChange={onValueChangeIntershipParticipation} name="IntershipParticipation" value='true' checked={radioIntershipParticipation == 'true'} />
                                        <Label className="form-check-label" check htmlFor="IntershipParticipation" style={styleLabelBold}>Yes</Label>

                                        </FormGroup>

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="IntershipParticipation" onChange={onValueChangeIntershipParticipation} name="IntershipParticipation" value='false' checked={radioIntershipParticipation == 'false'} />
                                        <Label className="form-check-label" check htmlFor="IntershipParticipation" style={styleLabelBold}>No</Label>

                                        </FormGroup>
                                    </Col>
                               </FormGroup>

                               <FormGroup row className="pt-3">
                                    <Col md="2">
                                        <span>Work While Studying <span className="text-danger">*</span> </span>
                                    </Col>
                                    <Col md="6">

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="WorkWhileStudying" onChange={onValueChangeWorkWhileStudying} name="WorkWhileStudying" value='true' checked={radioWorkWhileStudying == 'true'} />
                                        <Label className="form-check-label" check htmlFor="WorkWhileStudying" style={styleLabelBold}>Yes</Label>

                                        </FormGroup>

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="WorkWhileStudying" onChange={onValueChangeWorkWhileStudying} name="WorkWhileStudying" value='false' checked={radioWorkWhileStudying == 'false'} />
                                        <Label className="form-check-label" check htmlFor="WorkWhileStudying" style={styleLabelBold}>No</Label>

                                        </FormGroup>
                                    </Col>
                               </FormGroup>

                               <FormGroup row className="pt-3">
                                    <Col md="2">
                                        <span>Conditional Offer Letter <span className="text-danger">*</span> </span>
                                    </Col>
                                    <Col md="6">

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="ConditionalOfferLetter" onChange={onValueChangeConditionalOfferLetter} name="ConditionalOfferLetter" value='true' checked={radioConditionalOfferLetter == 'true'} />
                                        <Label className="form-check-label" check htmlFor="ConditionalOfferLetter" style={styleLabelBold}>Yes</Label>

                                        </FormGroup>

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="ConditionalOfferLetter" onChange={onValueChangeConditionalOfferLetter} name="ConditionalOfferLetter" value='false' checked={radioConditionalOfferLetter == 'false'} />
                                        <Label className="form-check-label" check htmlFor="ConditionalOfferLetter" style={styleLabelBold}>No</Label>

                                        </FormGroup>
                                    </Col>
                               </FormGroup>

                               <FormGroup row className="pt-3">
                                    <Col md="2">
                                        <span>Accommodations <span className="text-danger">*</span> </span>
                                    </Col>
                                    <Col md="6">

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="Accommodations" onChange={onValueChangeAccommodations} name="Accommodations" value='true' checked={radioAccommodations == 'true'} />
                                        <Label className="form-check-label" check htmlFor="ConditionalOfferLetter" style={styleLabelBold}>Yes</Label>

                                        </FormGroup>

                                        <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="Accommodations" onChange={onValueChangeAccommodations} name="Accommodations" value='false' checked={radioAccommodations == 'false'} />
                                        <Label className="form-check-label" check htmlFor="Accommodations" style={styleLabelBold}>No</Label>

                                        </FormGroup>
                                    </Col>
                               </FormGroup>

                               

                               <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <Button.Ripple
                                    type="submit"
                                    className="mr-1 mt-3 badge-primary"
                                >
                                    Submit
                                </Button.Ripple>

                                </FormGroup>


                            </Form>

                            </TabPane>

                </TabContent>

            </CardBody>
          </Card>
        </div>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(AddUniversityFeatures)
