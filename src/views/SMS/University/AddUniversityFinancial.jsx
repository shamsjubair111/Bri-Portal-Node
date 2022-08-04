import Axios from 'axios';
import React, { createRef, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { rootUrl } from '../../../constants/constants';
import { useToasts } from "react-toast-notifications";
import get from '../../../helpers/get';
import put from '../../../helpers/put';
import ButtonForFunction from '../Components/ButtonForFunction';


 
const AddUniversityFinancial = (props) => {

    const [activetab, setActivetab] = useState('3');
    const [submitData, setSubmitData] = useState(false);
    const [financialData, setFinancialData] = useState({});
    const [financialId, setFinancialId] = useState(0);

    const method = localStorage.getItem('editMethod');

    const { addToast } = useToasts();

    const history = useHistory();
    const myForm = createRef();


    const location = useLocation();

    let uniId;
    if(location.id){
        uniId = location.id;
    }else{
        uniId = '';
    }

    useEffect(()=>{
        // get(`FinancialInformation/GetByUniversity/${localStorage.getItem("editUniId")}`)
        get(`FinancialInformation/GetByUniversity/${localStorage.getItem("id")}`)
        .then(res => {
            console.log("finanInfo");
            setFinancialData(res);
            setFinancialId(res?.id);
        })
    },[])
 


    // on submit form
    const handleSubmit =(event) => {
        event.preventDefault();
        const subdata = new FormData(event.target);
        // subdata.append('UniversityLogoFile',exactLogoFile);
        // subdata.append('CoverImageFile',exactCoverFile);

            //  watch form data values
            for (var value of subdata.values()) {
           

             }

            //  const config = {
            //     headers: {
            //       'content-type': 'multipart/form-data'
            //     }
            //   }

             if(method == 'put'){
                put('FinancialInformation/Update', subdata)
                .then(res => {
                    console.log('1st put response',res);
                    if(res?.status == 200){
                     
                      addToast(res?.data?.message,{
                        appearance: 'success',
                        autoDismiss: true
                      })
                      
                      history.push({
                        pathname: '/addUniversityFeatures',
                        id: localStorage.getItem('editUniId')
                    })
                    }
                  })
             }
             else{
                Axios.post(`${rootUrl}FinancialInformation/Create`,subdata)
                .then(res => {
                   
                  
                    
                  const uniID = res.data.result.universityId;
                
                  if(res.status === 200 && res.data.isSuccess === true){
                    setSubmitData(true);
                    addToast(res?.data?.message, {
                        appearance: 'success',
                        autoDismiss: true,
                      })
                    history.push({
                        pathname: '/addUniversityFeatures',
                        id: uniID
                    })
                  }
                  else{
                    addToast(res?.data?.message, {
                        appearance: 'success',
                        autoDismiss: true,
                      })
                  }
                  
                })
             }

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
    if(tab == '6'){
        history.push('/addUniversityApplicationDocument')
    }
    if(tab == '7'){
        history.push('/addUniversityRequiredDocument')
    }
}
    // redirect to dashboard
    const backToDashboard = () => {
        history.push("/");
        }
    return (
        <div>


          <Card className='uapp-card-bg'>
              <CardHeader className="page-header">              
                <h3 className="text-light">Add University Financial Information</h3>
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

                            <NavItem>
                                 {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '6'}
                                onClick={() =>toggle('6')}
                                >

                                Application Document
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                 {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '7'}
                                onClick={() =>toggle('7')}
                                >

                                Required Document
                                </NavLink>
                            </NavItem>
                    </Nav>

                    <TabContent activeTab={activetab}>

                                <TabPane tabId="3">
                                <Form ref={myForm} onSubmit={handleSubmit} className="mt-5">

                                {
                                  method == 'put' ?
                                  <>
                                  <input
                                  type='hidden'
                                  name='id'
                                  id='id'
                                  value={financialId}

                                  />

                                  </> 

                                  :

                                  null
                                }

                                    <FormGroup row className="has-icon-left position-relative">
                                            <Input type="hidden" id="UniversityId" name="UniversityId" value={localStorage.getItem("id")} />
                                            {/* <Input type="hidden" id="UniversityId" name="UniversityId" value={localStorage.getItem("editUniId")} /> */}
                                    </FormGroup>

                                    <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Avarage Tution Fee </span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="number"
                                        name="AvarageTutionFee"
                                        id="AvarageTutionFee"
                                        defaultValue={financialData?.avarageTutionFee}
                                        placeholder="Avarage Tution Fee"
                                        required
                                    />
                                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Avarage Living Cost </span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="number"
                                        name="AvarageLivingCost"
                                        id="AvarageLivingCost"
                                        defaultValue={financialData?.avarageLivingCost}
                                        placeholder="Avarage Living Cost"
                                        required
                                    />
                                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Avarage Application Fee </span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="number"
                                        name="AvarageApplicationFee"
                                        id="AvarageApplicationFee"
                                        defaultValue={financialData?.avarageApplicationFee}
                                        placeholder="Avarage Application Fee"
                                        required
                                    />
                                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Estimated Total Cost </span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="number"
                                        name="EstimatedTotalCost"
                                        id="EstimatedTotalCost"
                                        defaultValue={financialData?.estimatedTotalCost}
                                        placeholder="Estimated Total Cost"
                                        required
                                    />
                                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative"
                                     style={{ display: "flex", justifyContent: "end" }}
                                   >
                                    
                                 <Col md="5">
                                    <ButtonForFunction
                                      type={"submit"}
                                      className={"ms-lg-3 ms-sm-1 mt-3 badge-primary"}
                                      name={"Save"}
                                      permission={6}
                                    />
                                  </Col>

                                </FormGroup>

                                </Form>
                                    
                                </TabPane>

                    </TabContent>
              </CardBody>

          </Card>

        </div>
    )
}

export default AddUniversityFinancial
