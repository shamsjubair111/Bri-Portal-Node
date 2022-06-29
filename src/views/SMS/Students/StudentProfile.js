import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {  Card, CardBody, Input, CardHeader,Label, Col,  Row, Table, Form, FormGroup, Button } from 'reactstrap';
import get from '../../../helpers/get';
// import coverImage from '../../../../assets/img/profile/user-uploads/cover.jpg';
import coverImage from '../../../assets/img/profile/user-uploads/cover.jpg';
// import profileImage from '../../../../assets/img/profile/user-uploads/user-07.jpg';
import profileImage from '../../../assets/img/profile/user-uploads/user-07.jpg';

const StudentProfile = () => {

    const [studentDetails, setStudentDetails] = useState({});
    const [date, setDate] = useState("");
    const [isHaveDisability, setIsHaveDisability] = useState(false);
    const [isHaveCriminalConvictions, setIsHaveCriminalConvictions] = useState(false);
    const [educationInfos, setEducationInfos] = useState([]);
    const [serialNum, setSerialNum] = useState(1);

    const history = useHistory();
    const {sId} = useParams();

    useEffect(()=>{
       get(`StudentProfile/Get/${sId}`).then(res=>{
        console.log("profileData",res);
        setStudentDetails(res);
        setIsHaveDisability(res?.profileOtherInfo?.isHaveDisability);
        setIsHaveCriminalConvictions(res?.profileOtherInfo?.isHaveCriminalConvictions);
        setEducationInfos(res?.educationInfos);
        console.log("eduInfo", res?.educationInfos)

        var datee =res?.dateOfBirth;
        var utcDate = new Date(datee);
        var localeDte = utcDate.toLocaleString("en-CA");
        var bDate = localeDte?.split(",");
        setDate(bDate[0]);
       })
    },[])

    const backToDashboard = () =>{
        history.push('/studentList');
    }

    const tableStyle = {
      overflowX: 'scroll',
    };

    return (
        <div>
        <Card className="uapp-card-bg">
          <CardHeader className="page-header">

            <h3 className="text-light">Student Profile</h3>
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
                       <img className="empProfileImg"  src={`${profileImage}`} alt='img-desc'/>
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
                              <h4>{studentDetails?.firstName} {studentDetails.lastName} ({studentDetails?.studentViewId})</h4>
                            </li>

                             <li> 
                              {/* <h6>{employeeType.name}</h6> */}
                            </li>


                          </ul>

                      </Col> 

                      <Col md="6"> 
                     <ul className="uapp-ul text-right">
                            <li> 
                              <span> Email : {studentDetails?.email}</span>
                            </li>

                            <li> 
                              <span> Phone Number : {studentDetails?.phoneNumber}</span>
                            </li>

                          </ul>
                      </Col> 
                    </Row> 
                    </div> 
                </CardBody>
                </Card>

                {/* personal statement */}
                <div className=" info-item mt-4">
                  <Card>  
                   <CardBody>
                    <div className="hedding-titel">
                      <h5> <b>Personal Statement</b> </h5>
                      <div className="bg-h"></div>
                    </div>
                    <div>
                      <p className='pt-2'>{studentDetails?.profilePersonalStatement?.statement}</p>
                    </div>
                   </CardBody>
                  </Card>
                </div>

            {/* personal info */}
            <div className=" info-item mt-4">
              <Card>  
                 <CardBody>
                    <div className="hedding-titel">
                      <h5> <b>Personal Information</b>  </h5>
                      <div className="bg-h"></div>
                    </div>
                      <Table className="table-bordered mt-4" >
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Title:</b>
                          </td>

                          <td width="60%">
                            {studentDetails?.nameTittle}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Name:</b>
                          </td>

                          <td width="60%">
                            {studentDetails?.firstName} {studentDetails?.lastName}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Gender:</b>
                          </td>

                          <td width="60%">
                            {studentDetails?.gender}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Date of birth:</b>
                          </td>

                          <td width="60%">
                            {date}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Birth country:</b>
                          </td>

                          <td width="60%">
                            {studentDetails?.birthCountry}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Nationality:</b>
                          </td>

                          <td width="60%">
                            {studentDetails?.nationality}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Marital status:</b>
                          </td>

                          <td width="60%">
                            {studentDetails?.maritalStatus}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Passport no:</b>
                          </td>

                          <td width="60%">
                            {studentDetails?.passportNumber}
                          </td>
                        </tr>
                        

                        </tbody>
                      </Table>
                 </CardBody>
              </Card>
          </div>



          {/* contact info */}
          <div className=" info-item mt-4">
            <Card>  
                 <CardBody>
                    <div className="hedding-titel">
                      <h5> <b>Contact Information</b> </h5>
                      <div className="bg-h"></div>
                    </div>

                    <Table className="table-bordered mt-4" >
                      <tbody>
                        <tr>
                          <td width="40%">
                           <span> <b>Address Type:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.studentContactInfos?.addressTypeName}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                          <span> <b>Phone number:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.phoneNumber}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                           <span> <b>Cell phone number:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.studentContactInfos?.cellPhoneNumber}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                           <span> <b>Email:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.email}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                           <span> <b>Country:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.studentContactInfos?.country}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                           <span> <b>City:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.studentContactInfos?.city}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                           <span> <b>State:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.studentContactInfos?.state}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                           <span> <b>Zip code:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.studentContactInfos?.zipCode}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                           <span> <b>Address Line:</b></span>
                          </td>

                          <td width="60%">
                          {studentDetails?.studentContactInfos?.addressLine}
                          </td>
                        </tr>

                        </tbody>
                      </Table>
                 </CardBody>
              </Card>
          </div>

          {/* other info */}
          <div className=" info-item mt-4">
            <Card>  
                 <CardBody>
                    <div className="hedding-titel">
                      <h5> <b>Other Information</b> </h5>
                      <div className="bg-h"></div>
                    </div>

                    <Table className="table-bordered mt-4" >
                      <tbody>
                        <tr>
                          <td width="40%">
                          <span> <b>Have Disability:</b></span>
                          </td>

                          <td width="60%">
                            {
                              isHaveDisability ? <span>Yes</span> : <span>No</span>
                            }
                          </td>
                        </tr>

                          {
                            isHaveDisability ?
                            <tr>
                              <td width="40%">
                               <span> <b>Disability Description:</b></span>
                              </td>

                              <td width="60%">
                                {studentDetails?.profileOtherInfo?.disabilityDescription}
                              </td>
                            </tr>
                              :
                              null
                          }

                        <tr>
                          <td width="40%">
                          <span> <b>Have Criminal Convictions:</b></span>
                          </td>

                          <td width="60%">
                            {
                              isHaveCriminalConvictions ? <span>Yes</span> : <span>No</span>
                            }
                          </td>
                        </tr>

                        {
                            isHaveCriminalConvictions ?
                            <tr>
                              <td width="40%">
                               <span> <b>Criminal Convictions Description:</b></span>
                              </td>

                              <td width="60%">
                                {studentDetails?.profileOtherInfo?.criminalConvictionsDescription}
                              </td>
                            </tr>
                              :
                              null
                          }
                        

                        </tbody>
                      </Table>
                 </CardBody>
              </Card>
          </div>
          
          {/* educational info */}
          <div className=" info-item mt-4">
            <Card>  
                 <CardBody>
                    <div className="hedding-titel">
                      <h5> <b>Educational Information</b> </h5>
                      <div className="bg-h"></div>
                    </div>

                    <div className="table-responsive pt-3">
                    <Table className="table-sm striped" style={tableStyle}>
                      <thead className="">
                        <tr style={{ textAlign: "center" }}>
                          <th>#</th>
                          <th>Institute</th>
                          <th>Program Level</th>
                          <th>Subject</th>
                          <th>Duration</th>
                          <th>Grade</th>
                          <th>Still Studying</th>
                          <th>Study Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {educationInfos?.map((edu, i) => (
                          <tr key={i} style={{ textAlign: "center" }}>
                            <th scope='row'>{serialNum + i}</th>
                            <td>
                              {edu?.nameOfInstitution}
                            </td>

                            <td>
                              {edu?.programLevelName}
                            </td>
                        
                            <td>
                              {edu?.qualificationSubject}
                            </td>
                        
                            <td>
                              {edu?.duration}
                            </td>
                        
                            <td>
                              {edu?.finalGrade}
                            </td>
                            <td>
                              {edu?.stillStudying === false ? <span>No</span> : <span>Yes</span>}
                            </td>
                            <td>
                              {/* {edu?.attendedInstitutionFrom} to  
                              {
                                edu?.stillStudying === true ? <span>{edu?.attendedInstitutionTo}</span>
                                : <span>still studying</span>
                              } */}
                              {
                                edu?.stillStudying === false ?
                                <div>
                                  {edu?.attendedInstitutionFrom} to {edu?.attendedInstitutionTo}
                                </div>
                                :
                                <div>
                                  {edu?.attendedInstitutionFrom} to {<div>
                                    ongoing
                                  </div>}
                                </div>
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
              

                    </div>
                 </CardBody>
              </Card>
          </div>

          <div className=" info-item mt-4">
            <Card>  
                 <CardBody>
                    <div className="hedding-titel">
                      <h5> <b>Document</b> </h5>
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
                    <img src={studentDetails?.consultant?.consultantProfileImage} alt="consultant_photo"/>
                  </div>    

                  <h5>{studentDetails?.consultant?.firstName} {studentDetails?.consultant?.lastName}</h5>
                   <p> Consultant </p>  
              </div>
                <CardBody>

                   <div>
                   <ul className="uapp-ul text-center">
                       <li> {studentDetails?.consultant?.email} </li>
                       <li> {studentDetails?.consultant?.phoneNumber} </li>
                       {/* <li> 80-82 Nelson st, Whitechapel, E12DY, london United Kingdom </li> */}
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


      {/*<Card>*/}

      {/*    <CardBody>*/}

      {/*        <Row>*/}

      {/*            <Col md="8">*/}
      {/*            <img className="empProfileImg" src={`${rootUrl}/${finalImg}`}></img>*/}
      {/*            </Col>*/}

      {/*            <Col md="4">*/}

      {/*            </Col>*/}

      {/*        </Row>*/}


      {/*    </CardBody>*/}

      {/*</Card>*/}
 </div>
 );
};

export default StudentProfile;