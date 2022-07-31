import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Link, useHistory, useLocation } from 'react-router-dom';
import { useToasts } from "react-toast-notifications";
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, Table, TabPane } from 'reactstrap';
import { rootUrl } from '../../../../constants/constants';
import Select from "react-select";

import get from '../../../../helpers/get';
import BranchProfileImage from './BranchProfileImage';
import BranchCoverImage from './BranchCoverimage';
import { useSelector } from 'react-redux';



const Branch = () => {
    const history = useHistory();
    const { addToast } = useToasts();
    const location = useLocation();
    const [activetab, setActivetab] = useState("3");
      const [submitData, setSubmitData] = useState(false);
      const [nationalityLabel, setNationalityLabel] = useState("Nationality");
      const [nationalityValue, setNationalityValue] = useState(0);
      const [serialNum, setSerialNum] = useState(0);
      const [branchLabel, setBranchLabel] = useState("Branch");
      const [branchValue, setBranchValue] = useState(0);
      const [nationality,setNationality] = useState([]);
      const [branch,setBranch] = useState([]);
      const [branchEmployee, setBranchEmployee] = useState([]);
      const [empty,setEmpty] = useState(false);
      const [employeeInfo, setEmployeeInfo] = useState({});

      const employeeProfileImage = useSelector((state) => state?.BranchEmployeeProfileImageReducer?.employeeProfileImage);
      // console.log(employeeProfileImage);
      const employeeCoverImage = useSelector((state)=> state?.BranchEmployeeCoverImageReducer?.employeeCoverImage);
      // console.log(employeeCoverImage);

      // console.log(location);
      if(location?.employeeBranchId){
        localStorage.setItem("employeeBranchId",location?.employeeBranchId);
      }

      if(location?.employeeId){
        localStorage.setItem("employeeId",location?.employeeId);
      }
      
      const employeeBranchId = localStorage.getItem("employeeBranchId");
      console.log("empBrId",employeeBranchId);
      const employeeId  = localStorage.getItem('employeeId');
      console.log('empID',employeeId);

         

     useEffect(()=>{

     

      get(`BranchEmployee/Index`)
      .then( res => {
        // console.log(res);
        setBranchEmployee(res);
        setEmpty(true);
      })




       get(`Nationality/Index`)
       .then(res => {
        //  console.log('Country',res);
         setNationality(res);
       })

       get(`Branch/Index`)
       .then(res => {
        //  console.log('Branch', res);
         setBranch(res);
       })

       get(`BranchEmployee/Get/${employeeId}`)
       .then(res => {
         console.log("branchEmployee",res);
         setEmployeeInfo(res);
         setNationalityLabel(res?.nationality?.name);
         setNationalityValue(res?.nationality?.id);
         setBranchLabel(res?.branch?.name);
       })
       

     },[])

   
    

    
     const nationalityName = nationality?.map((nationalityInfo) => ({
      label: nationalityInfo.name,
      value: nationalityInfo.id,
    }));

    const branchName = branch?.map((branchInfo) => ({
      label: branchInfo.name,
      value: branchInfo.id,
    }));


     // select University Country
  const selectNationality = (label, value) => {
    setNationalityLabel(label);
    setNationalityValue(value);
   
   
   
  }
  // console.log(nationalityLabel);

  // select University State
  const selectBranch = (label, value) => {
    setBranchLabel(label);
    setBranchValue(value);

  };

  // console.log(stateLabel);


    const backToDashboard = () => {
        history.push('/');
    }

     // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push("/addBranch");
    }
    else if (tab == "2"){
      history.push("/addBranchManager");
    }
    
 

   
  
  };

  

   const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);
    subdata.append('profileImage',employeeProfileImage[0]?.originFileObj);
    subdata.append('coverImage',employeeCoverImage[0]?.originFileObj);


    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }


    //  watch form data values
    // for (var value of subdata.values()) {
    //   console.log(value);
     

    // }

   if(!employeeId){
    Axios.post(`${rootUrl}BranchEmployee/Create`, subdata, config).then((res) => {
      
      if (res?.status === 200 && res?.data?.isSuccess === true) {
        setSubmitData(true);
        
        addToast(res?.data?.message, {
          appearance: 'success'
          
        })
        history.push(`/branchProfile/${location?.employeeBranchId}`)
      }
    });

    // for(const val of subdata){
    //   console.log(val);
    // }
    
   }

   else{
    Axios.put(`${rootUrl}BranchEmployee/Update`, subdata, config)
    .then(res => {
      if (res?.status === 200 && res?.data?.isSuccess === true) {
      
        
        addToast(res?.data?.message, {
          appearance: 'success'
          
        })
        history.push('/branchList')
       
      }

    })

    // for (var value of subdata) {
    //     console.log(value);
       
  
    //   }

   }

   
  };


    return (
        <div>
         
             <Card>
        <CardHeader className="page-header">
          <h3>Add Branch Employee Information</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>
      <Card>
          <CardBody>
          {/* <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                Branch Information
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Manager Information
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink active={activetab === "3"} onClick={()=> toggle("3")}>
                  Employee Information
                </NavLink>
             
            </NavItem>
          

          </Nav> */}

          {/* {   empty && 
         <>
         <div className="table-responsive">


<Button  className="btn btn-uapp-add mb-4 " onClick={()=> setEmpty(false)}> <i className="fas fa-plus"></i>  Add New </Button>



   <Table className="table-sm table-bordered" >
     <thead className="thead-uapp-bg">
       <tr style={{ textAlign: "center" }}>
         <th>SL/NO</th>
                          
         <th>First Name</th>                    
         <th>Last Name</th>                    
         <th>Email</th>
         <th>Phone Number </th>

         <th style={{width: '8%'}} className="text-center">Picture</th>
       </tr>
     </thead>
     <tbody>

       {
         branchEmployee?.map((bemp, i) => <tr key={bemp.id} style={{ textAlign: "center" }}>
           <td>{serialNum + 1}</td>
         
           <td>{bemp?.firstName}</td>
           <td>{bemp?.lastName}</td>
           <td>{bemp?.email}</td>
           <td>{bemp?.phoneNumber}</td>
        
          
           <td style={{width: '8%'}} className="text-center">
          
             
           </td>
         </tr>)

       }


     </tbody>
   </Table>
 </div>

         </>
} */}


          <>
          <Form className="mt-5" onSubmit={handleSubmit}>
           

            <Input 
           type='hidden'
            name='branchId'
            id='branchId'
            value={location?.employeeBranchId}
            // value={employeeBranchId}
            />

            {
              employeeId? 
              <Input 
              
              type='hidden'
              name='id'
              id='id'
              value={employeeInfo?.id}
              />
              :
              null
            } 

           <FormGroup row className="has-icon-left position-relative">
             <Col md="2">
               <span>
                 First  Name <span className="text-danger">*</span>{" "}
               </span>
             </Col>
             <Col md="4">
               <Input
                 type="text"
                 name="firstName"
                 id="firstName"
                 placeholder="Enter first name"
                 required
                 defaultValue={employeeInfo?.firstName}
               />
           
             </Col>
           </FormGroup>
           <FormGroup row className="has-icon-left position-relative">
             <Col md="2">
               <span>
                 Last  Name <span className="text-danger">*</span>{" "}
               </span>
             </Col>
             <Col md="4">
               <Input
                 type="text"
                 name="lastName"
                 id="lastName"
                 placeholder="Enter last name"
                 required
                 defaultValue={employeeInfo?.lastName}
               />
           
             </Col>
           </FormGroup>
        
           
           {
             employeeId? 
             null 
            :
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
                 defaultValue={employeeInfo?.email}
               />
           
             </Col>
           </FormGroup>
           }
          

        {
          employeeId ? 
          null 
          :
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
            />
        
          </Col>
        </FormGroup>
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
                 defaultValue={employeeInfo?.phoneNumber}
               
               />
           
             </Col>
           </FormGroup>
         
          

           <FormGroup row className="has-icon-left position-relative">
             <Col md="2">
               <span>
                  Nationality <span className="text-danger">*</span>{" "}
               </span>
             </Col>
             <Col md="4">
               <Select
                 options={nationalityName}
                 value={{ label: nationalityLabel, value: nationalityValue }}
                 onChange={(opt) => selectNationality(opt.label, opt.value)}
                 name="nationalityId"
                 id="nationalityId"
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

             </Col>
           </FormGroup> */}

            <Input
            type='hidden'
            name='branchId'
            id='branchId'
            value={employeeBranchId}
            />
           
           <FormGroup row className="has-icon-left position-relative">
             <Col md="2">
               <span>
                  Profile Image <span className="text-danger">*</span>{" "}
               </span>
             </Col>
             <Col md="4">
              <BranchProfileImage/>
             </Col>
           </FormGroup>
           <FormGroup row className="has-icon-left position-relative">
             <Col md="2">
               <span>
                  Cover Image <span className="text-danger">*</span>{" "}
               </span>
             </Col>
             <Col md="4">
              <BranchCoverImage/>
             </Col>
           </FormGroup>

          


           <FormGroup
             className="has-icon-left position-relative"
             style={{ display: "flex", justifyContent: "space-between" }}
           ></FormGroup>
           <FormGroup
             className="has-icon-left position-relative"
             style={{ display: "flex" }}
           >
             <Button.Ripple
               type="submit"
               className="mr-1 mt-3 badge-primary"
             >
               Submit
             </Button.Ripple>
             {/* <Button.Ripple
               
               className="mr-1 mt-3 btn btn-danger"
               onClick ={()=> setEmpty(true)}
             >
               Clear
             </Button.Ripple> */}
            
           </FormGroup>
         </Form>
          </> 

         
           
        
          </CardBody>
      </Card>

    
       

       
             
    

        

       

           
           
      
        </div>
    );
};

export default Branch;