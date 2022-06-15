
import Axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select from "react-select";

import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { rootUrl } from '../../../constants/constants';
import ConsultantFile from './ConsultantFile';





const AddConsultant = () => {

    const history = useHistory();
      const [activetab, setActivetab] = useState("1");
      const [submitData, setSubmitData] = useState(false);
      


      // Getting File Or Image Type data from redux
      const rightToWorkFile = useSelector( (state)=> state?.ConsultantFileReducer?.profileImage);

   

      const addressFile = useSelector( (state)=> state?.ConsultantFileReducer?.proofOfAddress);

      const idOrImageFile = useSelector( (state)=> state?.ConsultantFileReducer?.idOrPassport);

      const profileImage = useSelector( (state)=> state?.ConsultantFileReducer?.profileImage);

      const coverImage = useSelector( (state)=> state?.ConsultantFileReducer?.coverImage);

      console.log(rightToWorkFile,addressFile,idOrImageFile,profileImage,coverImage);

     

      

      // 

    
   


      
  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);
    

    //  watch form data values
    // for (var value of subdata.values()) {
     
    // }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    Axios.post(`${rootUrl}University/Create`, subdata, config).then((res) => {
      // (res.status === 200 && res.data.isSuccess === true) ?
      // status = 'success' : status = res.data.message;
      // status = res.data.message;
      // data = res.data.result;

      //     addToast(res.data.message, {
      //     appearance: res.data.message == 'University has been created successfully!' ? 'success': 'error',
      //     // autoDismiss: true,
      //   })

    
      localStorage.setItem("id",res.data.result.id);
      const uniID = res.data.result.id;

      if (res.status === 200 && res.data.isSuccess === true) {
        setSubmitData(true);
        history.push({
          pathname: "/addUniversityCampus",
          id: uniID,
        });
      }
    });
  };


      const toggle = (tab) => {
        setActivetab(tab);
        if (tab == "2") {
          history.push("/addUniversityCampus");
        }
        // if (tab == "3") {
        //   history.push("/addUniversityFinancial");
        // }
        // if (tab == "4") {
        //   history.push("/addUniversityFeatures");
        // }
        // if (tab == "5") {
        //   history.push("/addUniversityGallery");
        // }
      };

    const backToDashboard = () =>{
       
        history.push('/');
    }

    return (
        <div>
             <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Consultant Information</h3>
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
          <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                General Information
              </NavLink>
            </NavItem>
           

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="1">
              <Form  onSubmit={handleSubmit} className="mt-5">

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Consultant type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      First name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


              
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Last name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
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
                      placeholder="Enter email"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Residency status <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Account status <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Branch <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
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
                    
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Visa type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Have right to work <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      className='ms-1'
                      type="checkbox"
                      name="haveRightToWork"
                      id="haveRightToWork"
                      
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

              

             

             

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Comission group <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

               

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Proof of right to work <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                
              <ConsultantFile value={1}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Proof of address <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
                  <ConsultantFile value={2}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Id or passport <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={3}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Profile image <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={4}></ConsultantFile>

                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Cover image <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    
            
                  <ConsultantFile value={5}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

               

               
              



                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup>
                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
    );
};

export default AddConsultant;