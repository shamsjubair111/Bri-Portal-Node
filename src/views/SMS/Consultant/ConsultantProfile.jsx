import React from 'react';
import 
{ 
    Card, 
    CardBody, 
    CardHeader, 
    ButtonGroup, 
    CardTitle, 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, Input, 
    FormText, Col, Row, Table, 
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import { useHistory, useLocation } from 'react-router';
// import coverImage from '../../../../assets/img/profile/user-uploads/cover.jpg'
// import profileImage from '../../../../assets/img/profile/user-uploads/user-07.jpg'
import coverImage from '../../../assets/img/profile/user-uploads/cover.jpg';
import profileImage from '../../../assets/img/profile/user-uploads/user-07.jpg'


const ConsultantProfile = () => {
    const location = useLocation();
    const history = useHistory();

    // redirect to dashboard
        const backToDashboard = () => {
          history.push("/")
        }

    return (
        <div>
          <Card className="uapp-card-bg">
            <CardHeader className="page-header">

              <h3 className="text-light">Consultant profile</h3>
              <div className="page-header-back-to-home" >
                <span onClick={backToDashboard} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to Dashboard</span>
              </div>

            </CardHeader>
          </Card>

        <div className="uapp-employee-profile">
        <Row>

          <Col md="8">
            <div className="uapp-employee-profile-left">
            <Card>
              <CardBody>
                  <div className="uapp-employee-cover-image">
                    <div className="bg-image" style={{ backgroundImage: `url(${coverImage})` }}>   
                    <div className="uplode-cover-image">
                      <span> <i className="fas fa-camera" > </i ></span>
                      </div>               
                  </div>
                </div>



                <div className="uapp-employee-profile-image-edit">
                  <Row>
                    <Col> 
                  <div className="uapp-employee-profile-image">
                  <div className="text-left">
                     {/* <img className="empProfileImg"  src={`${finalImg}`} alt='img-desc'/> */}
                     <img className="empProfileImg"  src='' alt='img-desc'/>
                  </div>
                  </div>  
                  </Col>

                  <Col> 
                  <div className="uapp-employee-profile-Edit">
                  <div className="text-right">
                    <span> <i className="fas fa-pencil-alt"></i> </span>
                  </div>
                  </div>  

                      </Col> 
                  </Row>            
                 </div>     


                    <div className="uapp-employee-profile-generalInfo"> 
                     <Row>
                       <Col md="6"> 

                        <ul className="uapp-ul text-left">
                          <li> 
                            {/* <h4>{employeeDetails.firstName} {employeeDetails.lastName}</h4> */}
                            <h4>firstName lastName</h4>
                          </li>

                           <li> 
                            {/* <h6>{employeeType.name}</h6> */}
                            <h6>name</h6>
                          </li>

                          
                        </ul>

                    </Col> 

                    <Col md="6"> 
                   <ul className="uapp-ul text-right">
                          <li> 
                            <span> Email : </span>
                          </li>
                          
                          <li> 
                            <span> Phone Number : </span>
                          </li>

                        </ul>
                    </Col> 
                  </Row> 
                  </div> 
              </CardBody>
              </Card>

          <div className=" info-item mt-4">
          <Card>  
               <CardBody>
                  <div className="hedding-titel">
                    <h5> General Information  </h5>
                    <div className="bg-h"></div>
                  </div>
                    <Table className="table-bordered mt-4" >
                    <tbody>
                      <tr>
                        <td width="40%">
                          Name
                        </td>

                        <td width="60%">
                          Md.Jishan Ahammed
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                          Email
                        </td>

                        <td width="60%">
                          jishanahammed@gmail.com
                        </td>
                      </tr>

                      </tbody>
                    </Table>
               </CardBody>
            </Card>
        </div>




        <div className=" info-item mt-4">
          <Card>  
               <CardBody>
                  <div className="hedding-titel">
                    <h5> Contact Information </h5>
                    <div className="bg-h"></div>
                  </div>



                        <Table className="table-bordered mt-4" >
                    <tbody>
                      <tr>
                        <td width="40%">
                        <span> <i className="fas fa-phone"></i> Phone Number</span>
                        </td>

                        <td width="60%">
                        {/* {employeeDetails.phoneNumber} */}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                        <i className="far fa-envelope"> Email</i>
                        </td>

                        <td width="60%">
                        {/* {employeeDetails.email} */}
                        </td>
                      </tr>

                      </tbody>
                    </Table>
               </CardBody>
            </Card>
        </div>

        <div className=" info-item mt-4">
          <Card>  
               <CardBody>
                  <div className="hedding-titel">
                    <h5> Document </h5>
                    <div className="bg-h"></div>
                  </div>



               </CardBody>
            </Card>
        </div>
              
              </div>
          </Col>



          <Col md="4"> 
           <Card className="uapp-employee-profile-right">
             <div className="uapp-profile-CardHeader">
                <div className="uapp-circle-image margin-top-minus">
                  <img src={profileImage}/>
                </div>    
                
                <h5> Md.Jamal Uddin</h5>
                 <p> Admission Manager </p>  
            </div>
              <CardBody>

                 <div>
                 <ul className="uapp-ul text-center">
                     <li> admissionmanager.london@uapp.uk </li>
                     <li> +880184000000000 </li>
                     <li> 80-82 Nelson st, Whitechapel, E12DY, london United Kingdom </li>
                   </ul>
                 </div>

            </CardBody>
        </Card>

            <Card className="p-3">

                <h6> Notice</h6>
                <span className="bg-wg bg-width"></span>
           
            
                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                           <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                      </div>
                  </div>


                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                           <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                      </div>
                  </div>



                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                          
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                           <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                      </div>
                  </div>


                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                          <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                         
                      </div>
                  </div>
      
            </Card>

          </Col>
        </Row>
        </div>

        </div>
    );
};

export default ConsultantProfile;