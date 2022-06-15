import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Form, Nav, NavItem, NavLink, TabContent, TabPane, Button } from 'reactstrap';
import { rootUrl } from '../../../../constants/constants';
import get from '../../../../helpers/get';
import ManagerImage from './ManagerImage';
import { ToastContainer, toast } from 'react-toastify';
import Select from "react-select";
import { useToasts } from 'react-toast-notifications';

const BranchManager = () => {

  const {addToast} = useToasts();
    const history = useHistory(); 
    const [submitData, setSubmitData] = useState(false);
    const [activetab, setActivetab] = useState("2");
    const [branch, setBranch] = useState([]);
    const [branchLabel, setBranchLabel] = useState('Enter branch');
    const [branchValue, setBranchValue] = useState(0);
    const [branchManagerInfo, setBranchManagerInfo] = useState({});
    const backToDashboard = () => {
        history.push('/branchList');

    }

    const backwardBranchManager = localStorage.getItem("branchManagerId");
    console.log(backwardBranchManager);

    useEffect(()=>{

      get(`BranchManager/Get/${backwardBranchManager}`)
      .then(res => {
        console.log(res);
        setBranchManagerInfo(res);
        setBranchLabel(res?.branch?.name);
      })


      get(`Branch/Index`)
      .then(res => {
        // console.log(res);
        setBranch(res);
      })
    },[backwardBranchManager])

    const branchName = branch?.map((branchLocation) => ({
      label: branchLocation.name,
      value: branchLocation.id,
    }));

        // select University Country
  const selectBranch = (label, value) => {
    setBranchLabel(label);
    setBranchValue(value);
  
  }


         // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab === "1") {
      history.push("/addBranch");
    }
   
   
  
  };

  // const result = localStorage.getItem('branchId');
   const managerImageData = useSelector((state) => state?.ManagerImageReducer?.managerImage);
  //  console.log('yes',managerImageData);


  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);
    subdata.append('managerImage',managerImageData[0].originFileObj);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }


    //  watch form data values
    // for (var value of subdata.values()) {
    //   console.log(value);
     
    // }

    if(backwardBranchManager){
      Axios.put(`${rootUrl}BranchManager/Update`, subdata, config).then((res) => {
        // (res.status === 200 && res.data.isSuccess === true) ?
        // status = 'success' : status = res.data.message;
        // status = res.data.message;
        // data = res.data.result;
  
        //     addToast(res.data.message, {
        //     appearance: res.data.message == 'University has been created successfully!' ? 'success': 'error',
        //     // autoDismiss: true,
        //   })
  
   
        setSubmitData(true);
        // console.log(res);
        
       
        history.push('/branchList');
  
      
     
  
      });
    }

    else{
      Axios.post(`${rootUrl}BranchManager/Create`, subdata, config).then((res) => {
        // (res.status === 200 && res.data.isSuccess === true) ?
        // status = 'success' : status = res.data.message;
        // status = res.data.message;
        // data = res.data.result;
  
        //     addToast(res.data.message, {
        //     appearance: res.data.message == 'University has been created successfully!' ? 'success': 'error',
        //     // autoDismiss: true,
        //   })
  
        setSubmitData(true);
        console.log(res);
      
        localStorage.setItem('branchManagerId',res?.data?.result?.id);
        history.push('/branchList');
  
      
     
  
      });
    }

   

   
  };


    return (
        <div>
              <div>
             <Card>
        <CardHeader className="page-header">
          <h3>Add Branch Manager Information</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Branch List
            </span>
          </div>
        </CardHeader>
      </Card>
      <Card>
          <CardBody>
          {/* <Nav tabs>
            <NavItem>
            <NavLink active={activetab === "1"} onClick={()=> toggle("1")}>
                  Branch Information
                </NavLink>
             
            </NavItem>
            <NavItem>
            
            <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
              Manager Information
              </NavLink>
           
           
               
           
            </NavItem>
            <NavItem>
              {submitData ? (
                <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                 Employee Information
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "3"}>
             Employee Information
                </NavLink>
              )}
            </NavItem>

          </Nav> */}
         
              <Form className="mt-5"  onSubmit={handleSubmit}>
           

                {
                  backwardBranchManager? 
                  <Input
                  type="hidden"
                   name='id'
                   id='id'
                   value={branchManagerInfo?.id} />
                   :
                   null
                }

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       Title <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="tittle"
                      id="tittle"
                      placeholder="Enter title"
                      required
                      defaultValue={branchManagerInfo?.tittle}
                    />
                
                  </Col>
                </FormGroup>
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       First Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      required
                      defaultValue={branchManagerInfo?.firstName}
                    />
                
                  </Col>
                </FormGroup>
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       Last Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      required
                      defaultValue={branchManagerInfo?.lastName}
                    />
                
                  </Col>
                </FormGroup>
                
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Email <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      required
                      defaultValue={branchManagerInfo?.email}
                    />
                
                  </Col>
                </FormGroup>

                {
                  !backwardBranchManager ? 
                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Password <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      required
                      defaultValue={branchManagerInfo?.password}
                    />
                
                  </Col>
                </FormGroup>
                : null

                }
               
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Phone Number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter phone number"
                      defaultValue={branchManagerInfo?.phoneNumber}
                    
                    />
                
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       Branch <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Select
                      options={branchName}
                      value={{ label: branchLabel, value: branchValue }}
                      onChange={(opt) => selectBranch(opt.label, opt.value)}
                      name="branchId"
                      id="branchId"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>
                {/* <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       Address Line <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                   <Input
                   type='text'
                   name=''
                   id=''
                   placeholder='Enter address line'
                   />

                 
                  </Col>
                </FormGroup> */}




                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Manager Image <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <ManagerImage/>
                
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
                  <ToastContainer />
                </FormGroup>
              </Form>
          

              

          </CardBody>
      </Card>
            
        </div>
            
        </div>
    );
};

export default BranchManager;