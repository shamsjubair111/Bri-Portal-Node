import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useHistory, useLocation } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { rootUrl } from '../../../../constants/constants'
import Select from "react-select";
import { useToasts } from "react-toast-notifications";
import get from '../../../../helpers/get';
import put from '../../../../helpers/put';
import ButtonForFunction from '../../Components/ButtonForFunction';


const Branch = () => {
    const history = useHistory();
    const { addToast } = useToasts();
   
    const [activetab, setActivetab] = useState("1");
      const [submitData, setSubmitData] = useState(false);
      const [countryLabel, setCountryLabel] = useState("Country");
      const [countryValue, setCountryValue] = useState(0);
      const [stateLabel, setStateLabel] = useState("State");
      const [stateValue, setStateValue] = useState(0);
      const [country,setCountry] = useState([]);
      const [state,setState] = useState([]);
      const [branchInfo,setBranchInfo] = useState({});
      const location = useLocation();

      console.log('location',location);
      if(location?.branchId){
        localStorage.setItem('branchId',location?.branchId);
      

      }
      

      const branchIdValue = localStorage.getItem('branchId');

     
      

     useEffect(()=>{
       get(`Country/Index`)
       .then(res => {
         console.log('Country',res);
         setCountry(res);
       })

    
       
       get(`Branch/Get/${branchIdValue}`)
       .then(res => {
        // console.log('yEEEEEEEEEEEEEE',res); 
        setBranchInfo(res)
        setCountryLabel(res?.country?.name);
        setStateLabel(res?.state?.name);
       })
    
   
     

     },[branchIdValue])

     
  
   

    const searchStateByCountry = (countryValue) => {
      get(`State/GetbyCountryId/${countryValue}`)
      .then(res => {
        console.log('State',res);
        setState(res);
      })
    }
    

    
     const countryName = country?.map((branchCountry) => ({
      label: branchCountry.name,
      value: branchCountry.id,
    }));

    const stateName = state?.map((branchState) => ({
      label: branchState.name,
      value: branchState.id,
    }));


     // select University Country
  const selectCountry = (label, value) => {
    setCountryLabel(label);
    setCountryValue(value);
    searchStateByCountry(value);
    setStateLabel('Select');
   
   
  }

  
  console.log(countryLabel);

  // select University State
  const selectState = (label, value) => {
    setStateLabel(label);
    setStateValue(value);

  };

  console.log(stateLabel);


    const backToBranchList = () => {
        history.push('/branchList');
    }

     // tab toggle
  // const toggle = (tab) => {
  //   setActivetab(tab);
  //   if (tab == "2") {
  //     history.push("/addBranchManager");
  //   }
   
  
  // };

  
  

  

   const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);




    //  watch form data values
    for (var value of subdata) {
      console.log(value);
    }

   

   if(branchIdValue){
    put('Branch/Update', subdata).then((res) => {
      

      if (res?.status === 200 && res?.data?.isSuccess === true) {
        setSubmitData(true);
        addToast(res.data.message, {
          appearance: 'success',
          autoDismiss: true,
        })
        history.push({
          pathname: "/branchList"
         
        });
      }
    });
   }
 
    else{
      Axios.post(`${rootUrl}Branch/Create`, subdata).then((res) => {
      
        localStorage.setItem("branchId",res?.data?.result?.id);
        
        const uniID = res?.data?.result?.id;
        console.log((res));
  
        if (res?.status === 200 && res?.data?.isSuccess === true) {
          setSubmitData(true);
               addToast(res.data.message, {
             appearance:'success',
              autoDismiss: true,
            })
        
          history.push("/branchList");
        }
      });
    }

   
  };


    return (
        <div>
             <Card className='uapp-card-bg'>
        <CardHeader className="page-header">
          <h3 className='text-light'>Add Branch Information</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToBranchList} className='text-light'>
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
              {submitData ? (
                <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                 Manager Information
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "2"}>
             Manager Information
                </NavLink>
              )}
            </NavItem>
            <NavItem>
            <NavLink active={activetab === "3"} disabled>
                Employee Information
              </NavLink>
              </NavItem>

          </Nav> */}
          <TabContent activeTab={activetab}>
            <TabPane tabId="1">
              <Form className="mt-5" onSubmit={handleSubmit}>
                {
                  branchIdValue? 
                  <Input 
                  type='hidden'
                  value={branchIdValue}
                  name='id'
                  id='id' />
                  :
                  null
                
            }

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Branch Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter branch name"
                      required
                      defaultValue={branchInfo?.name}
                    />
                
                  </Col>
                </FormGroup>
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Address Line <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="addressLine"
                      id="addressLine"
                      placeholder="Enter address line"
                      required
                      defaultValue={branchInfo?.addressLine}
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
                      defaultValue={branchInfo?.email}
                    />
                
                  </Col>
                </FormGroup>
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
                      defaultValue={branchInfo?.phoneNumber}
                    
                    />
                
                  </Col>
                </FormGroup>
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Telephone Number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="telePhoneNumber"
                      id="telePhoneNumber"
                      placeholder="Enter mobile number"
                      required
                      defaultValue={branchInfo?.telePhoneNumber}
                    />
                
                  </Col>
                </FormGroup>
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Branch Code <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      name="branchCode"
                      id="branchCode"
                      placeholder="Enter branch code"
                      required
                      defaultValue={branchInfo?.branchCode}
                    />
                
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       Country <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Select
                      options={countryName}
                      value={{ label: countryLabel, value: countryValue }}
                      onChange={(opt) => selectCountry(opt.label, opt.value)}
                      name="countryId"
                      id="countryId"
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
                       State <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="4">
                    <Select
                      options={stateName}
                      value={{ label: stateLabel, value: stateValue }}
                      onChange={(opt) => selectState(opt.label, opt.value)}
                      name="stateId"
                      id="stateId"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup>
                <FormGroup row
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                
                  <Col md="7">
                  <ButtonForFunction 
                    type={"submit"}
                    className={"mr-1 mt-3 badge-primary"}
                    name={"Submit"}
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
    );
};

export default Branch;