import React, { createRef, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import get from '../../../../helpers/get';
import { useToasts } from "react-toast-notifications";

const AdmissionManagerProfile = () => {

    const {managerId, providerId} = useParams();
    const [managerData, setManagerData] = useState({});
    const history = useHistory();
    const location = useLocation();

    const tableStyle = {
        overflowX: 'scroll',
      };

    const backToProviderDetails = () => {
        if(location.managerList != undefined){
          history.push(`/admissionManagerList`);
        }
        else{
          history.push(`/providerDetails/${providerId}`);
        }
      };

    useEffect(()=>{
        get(`AdmissionManager/Profile/${managerId}`)
        .then(res => {
            setManagerData(res);
            
        })
    },[])

    return (
        <div>
            <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Admission Manager Details</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToProviderDetails} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i>{" "}
              {
                location.managerList != undefined ?
                "Back To Admission Manager List"
                :
                "Back To Provider Details"
              }
            </span>
          </div>
        </CardHeader>
      </Card>


      <div className="uapp-employee-profile">
     
            <Card className="uapp-employee-profile-right">
              <div className="uapp-profile-CardHeader">
                {/* <div className="uapp-circle-image margin-top-minus">
                  <img  alt='provider_image' />
                </div>     */}
                <div className="py-3">
                  <h5 className="py-1">
                    Name:{" "}
                    <span className="text-primary">{managerData?.nameTittleName} {' '} {managerData?.firstName} {' '} {} {managerData?.lastName} </span>{" "}
                  </h5>
                  <h5 className="py-1">
                    Provider:{" "}
                    <span className="text-primary">
                      {managerData?.providerName}
                    </span>{" "}
                  </h5>
                  <h5 className="py-1">
                    {" "}
                    Email:{" "}
                    <span className="text-primary">
                      {managerData?.email}
                    </span>{" "}
                  </h5>
                  <h5 className="py-1">
                    {" "}
                    Phone Number:{" "}
                    <span className="text-primary">
                      {managerData?.phoneNumber}
                    </span>{" "}
                  </h5>
                 
                </div>
              </div>
              <CardBody>
                <div>
                  <ul className="uapp-ul text-center">
                    <h5>
                      {" "}
                      State:{" "}
                      <span className="text-primary">
                        {managerData?.stateName}
                      </span>{" "}
                    </h5>
                    <h5>
                      {" "}
                      City:{" "}
                      <span className="text-primary">
                        {managerData?.city}
                      </span>{" "}
                    </h5>
                  </ul>
                </div>
              </CardBody>
            </Card>
         
            <div className=" info-item mt-4">
           <Card>  
                <CardBody>
                <div className="hedding-titel d-flex justify-content-between">
                <div>
                <h5> <b>University Information</b> </h5>
                 
                <div className="bg-h"></div>
                </div>

               

                </div>

                   <div className="table-responsive pt-3">
                   <Table className="table-sm striped" style={tableStyle}>
                     <thead className="">
                       <tr style={{ textAlign: "center" }}>
                         <th>#</th>
                         <th>Accept EU_UK</th>
                         <th>Accept  Home</th>
                         <th>Accept International</th>
                         <th>Name</th>
                         <th>Short Name</th>
                         <th>City</th>
                         <th>Description</th>
                         <th>Founded</th>
                         <th>Global Ranking</th>
                         <th>Part Time Work Information</th>
                         
            
                       </tr>
                     </thead>
                     <tbody>
                       {managerData?.admissionManagerUniversities?.map((uni, i) => (
                         <tr key={i} style={{ textAlign: "center" }}>
                           <th scope='row'>{1 + i}</th>
                           <td>
                             {(uni?.isAcceptEU_UK)? <span>True</span> : <span>False</span>}
                           </td>

                           <td>
                           {(uni?.isAcceptHome)? <span>True</span> : <span>False</span>}
                           </td>
                       
                           <td>
                           {(uni?.isAcceptInternational)? <span>True</span> : <span>False</span>}
                           </td>
                       
                           <td>
                             {uni?.university?.name}
                           </td>

                           <td>
                             {uni?.university?.shortName}
                           </td>

                           <td>
                             {uni?.university?.universityCity}
                           </td>

                           <td>
                             {uni?.university?.description}
                           </td>

                           <td>
                             {uni?.university?.foundationYear}
                           </td>

                           <td>
                             {uni?.university?.globalRankNumber}
                           </td>
                           <td>
                             {uni?.university?.partTimeWorkInformation}
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
                <div className="hedding-titel d-flex justify-content-between">
                <div>
                <h5> <b>Application Information</b> </h5>
                 
                <div className="bg-h"></div>
                </div>

               

                </div>

                   <div className="table-responsive pt-3">
                   <Table className="table-sm striped" style={tableStyle}>
                     <thead className="">
                       <tr style={{ textAlign: "center" }}>
                         <th>#</th>
                         <th>Accept EU_UK</th>
                         <th>Accept  Home</th>
                         <th>Accept International</th>
                         <th>Name</th>
                         <th>Short Name</th>
                         <th>City</th>
                         <th>Description</th>
                         <th>Founded</th>
                         <th>Global Ranking</th>
                         <th>Part Time Work Information</th>
                         
            
                       </tr>
                     </thead>
                     <tbody>
                       {managerData?.admissionManagerUniversities?.map((uni, i) => (
                         <tr key={i} style={{ textAlign: "center" }}>
                           <th scope='row'>{1 + i}</th>
                           <td>
                             {(uni?.isAcceptEU_UK)? <span>True</span> : <span>False</span>}
                           </td>

                           <td>
                           {(uni?.isAcceptHome)? <span>True</span> : <span>False</span>}
                           </td>
                       
                           <td>
                           {(uni?.isAcceptInternational)? <span>True</span> : <span>False</span>}
                           </td>
                       
                           <td>
                             {uni?.university?.name}
                           </td>

                           <td>
                             {uni?.university?.shortName}
                           </td>

                           <td>
                             {uni?.university?.universityCity}
                           </td>

                           <td>
                             {uni?.university?.description}
                           </td>

                           <td>
                             {uni?.university?.foundationYear}
                           </td>

                           <td>
                             {uni?.university?.globalRankNumber}
                           </td>
                           <td>
                             {uni?.university?.partTimeWorkInformation}
                           </td>
                       
                         
                         
                          
                         </tr>
                       ))}
                     </tbody>
                   </Table>
             

                   </div>
                </CardBody>
             </Card>
         </div>
        
      </div>
            
        </div>
    );
};

export default AdmissionManagerProfile;