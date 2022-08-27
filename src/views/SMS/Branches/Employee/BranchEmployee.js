import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useToasts } from "react-toast-notifications";
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, Table, TabPane } from 'reactstrap';
import { rootUrl } from '../../../../constants/constants';
import Select from "react-select";
import { Image } from 'antd';
import "antd/dist/antd.css";
import get from '../../../../helpers/get';
import BranchProfileImage from './BranchProfileImage';
import BranchCoverImage from './BranchCoverimage';
import { useSelector } from 'react-redux';



const Branch = () => {

  const AuthStr = localStorage.getItem("token");
    const history = useHistory();
    const {id} = useParams();
    console.log('Checking Use Params Id',id); 
    const { addToast } = useToasts();
    const location = useLocation();
    const [activetab, setActivetab] = useState("3");
      const [submitData, setSubmitData] = useState(false);
      const [success, setSuccess] = useState(false);
      const [nationalityLabel, setNationalityLabel] = useState("Nationality");
      const [nationalityValue, setNationalityValue] = useState(0);
      const [nationalityError, setNationalityError] = useState(false);
      const [serialNum, setSerialNum] = useState(0);
      const [branchLabel, setBranchLabel] = useState("Branch");
      const [branchValue, setBranchValue] = useState(0);
      const [nationality,setNationality] = useState([]);
      const [branch,setBranch] = useState([]);
      const [branchEmployee, setBranchEmployee] = useState([]);
      const [empty,setEmpty] = useState(false);
      const [employeeInfo, setEmployeeInfo] = useState({});
      const [check,setCheck] = useState(true);
      const [imageError, setImageError] = useState(false);

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

   

       get(`NationalityDD/Index`)
       .then(res => {
        //  console.log('Country',res);
         setNationality(res);
       })

       get(`Branch/Index`)
       .then(res => {
        //  console.log('Branch', res);
         setBranch(res);
       })

       get(`BranchEmployee/Get/${id}`)
       .then(res => {
         console.log("branchEmployee branchEmployee branchEmployee branchEmployee branchEmployee branchEmployee branchEmployee branchEmployee branchEmployee",res);
         setEmployeeInfo(res);
         setNationalityLabel(res?.nationality?.name);
         setNationalityValue(res?.nationality?.id);
         setBranchLabel(res?.branch?.name);
         setCheck(false);
       })
       

     },[success])

   
    
     const backToBranchList = () => {
      history.push("/branchList");
    };

    
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
    setNationalityError(false);
    setNationalityLabel(label);
    setNationalityValue(value);
   
  }

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


    if(nationalityValue == 0){
      setNationalityError(true);
    }
    if(employeeProfileImage.length <1 && check){
      setImageError(true);
    }

    else{

   if(!id){


    
    Axios.post(`${rootUrl}BranchEmployee/Create`, subdata, config, {
      headers: {
        'authorization': AuthStr,
      },
    }).then((res) => {
          
      if (res?.status === 200 && res?.data?.isSuccess === true) {
        setSubmitData(true);
        
        addToast(res?.data?.message, {
          appearance: 'success'
          
        })
        history.push(`/branchProfile/${employeeBranchId}`)
      }
    });

   }
    
        
      
       
    
       else{
        Axios.put(`${rootUrl}BranchEmployee/Update`, subdata, config, {
          headers: {
            'authorization': AuthStr,
          },
        })
        .then(res => {
          if (res?.status === 200 && res?.data?.isSuccess === true) {
          
            
            addToast(res?.data?.message, {
              appearance: 'success'
              
            })
            history.push(`/branchProfile/${employeeBranchId}`)
           
          }
    
        })
    
     
    
       }

    }


  

   
  };


    return (
        <div>
         
         <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Branch Employee Iformation</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToBranchList} className="text-light">
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
           

           

           

            <input
            type='hidden'
            name='branchId'
            id='branchId'
            value={localStorage.getItem('branchId')}
            />

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
             id? 
             <input
             type='hidden'
             name='email'
             id='email'
             value={employeeInfo?.email}
             />
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
          id ? 
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
               {
                nationalityError? 
                <span className='text-danger'>Nationality Must be Selected</span>
                :
                null
               }

              
             </Col>
           </FormGroup>
           
              {
                id? 
                
            <Input
            type='hidden'
            name='id'
            id='id'
            value={id}
            />
            : null
              }
           
           <FormGroup row className="has-icon-left position-relative">
             <Col md="2">
               <span>
                  Profile Image <span className="text-danger">*</span>{" "}
               </span>
             </Col>
             <Col md="4">
              <div className='d-flex'>

              {
                id? 
               <div className='me-2'>
                 <Image
                width={104} height={104}
                src={rootUrl+employeeInfo?.profileImageMedia?.thumbnailUrl}
              />
               </div>
              : 
              null
              }
            
              <div className='ms-2'>
              <BranchProfileImage/>
              {
                imageError ? 
                <span className='text-danger'>Profile image must be selected</span>
                :
                null
              }
              </div>

              </div>
             </Col>
           </FormGroup>
           <FormGroup row className="has-icon-left position-relative">
             <Col md="2">
               <span>
                  Cover Image <span className="text-danger">*</span>{" "}
               </span>
             </Col>
             <Col md="4">
             <div className='d-flex'>

              {
                (employeeInfo?.coverImageMedia?.thumbnailUrl !== null && id !== undefined) ?
              <div className='me-2'>
                <Image
                width={104} height={104}
                src={rootUrl+employeeInfo?.coverImageMedia?.thumbnailUrl}
              />
              </div>
              : 
              null
              }

              <div className='ms-2'>
              <BranchCoverImage/>
              </div>

              </div>
             </Col>
           </FormGroup>

          


         
           <FormGroup
            row
             className="has-icon-left position-relative"
             style={{ display: "flex" }}
           >
            <Col md="6">
              <div className='d-flex justify-content-end'>

              <Button.Ripple
               type="submit"
               className="mr-1 mt-3 badge-primary"
             >
               Submit
             </Button.Ripple>

              </div>
            
            
            </Col>
            
            
            
           </FormGroup>
         </Form>
          </> 

         
           
        
          </CardBody>
      </Card>

    
       

       
             
    

        

       

           
           
      
        </div>
    );
};

export default Branch;