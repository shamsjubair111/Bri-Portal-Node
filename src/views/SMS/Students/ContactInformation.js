import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import put from '../../../helpers/put';

const ContactInformation = () => {


  const {addToast} = useToasts();
  const [success, setSuccess] = useState(false);


    const history = useHistory();
    const [activetab, setActivetab] = useState("3");
    const [country,setCountry] = useState([]);
    const [countryLabel, setCountryLabel] = useState("Country");
      const [countryValue, setCountryValue] = useState(0);

    const [addressType,setAddressType] = useState([]);
    const [addressTypeLabel, setAddressTypeLabel] = useState("Address type");
      const [addressTypeValue, setAddressTypeValue] = useState(0);
      const [oneData, setOneData] = useState({});

      const [countryError, setCountryError] = useState(false);
      const [addressError, setAddressError] = useState(false);

      const method = localStorage.getItem('method');

    useEffect(() => {

        get('CountryDD/index')
        .then(res => {
            console.log(res);
            setCountry(res);
        })

        get('AddressTypeDD/Index')
        .then(res => {
            console.log(res);
            setAddressType(res);
        })


        get(`StudentContactInformation/GetByStudentId/${localStorage.getItem('applictionStudentId')}`)
        .then(res => {
          console.log('Contact information from local storage', res);
          setOneData(res);
          setCountryLabel(res?.country?.name == null ? 'Select Country' : res?.country?.name );
          setCountryValue(res?.country?.id == null ? 0 :  res?.country?.id);
          setAddressTypeLabel(res?.addressType?.name == null ? 'Select Address Type' : res?.addressType?.name);
          setAddressTypeValue(res?.addressType?.id == null ? 0 : res?.addressType?.id);

        })


    },[success] )

  


    const goForward = () => {

      history.push('/AddStudentEducationalInformation');
      
    }
    
    const goBackward = () => {
    
      history.push('/AddStudentInformation');
    
    }

    const toggle = (tab) => {
        setActivetab(tab);
        if (tab == "1") {
          history.push("/addStudentApplicationInformation");
        }
      
        if (tab == "2") {
          history.push("/addStudentInformation");
        }
      
        if (tab == "3") {
          history.push("/addStudentContactInformation");
        }
      
        if (tab == "4") {
          history.push("/addStudentEducationalInformation");
        }
      
        if (tab == "5") {
          history.push("/addTestScore");
        }
      
        if (tab == "6") {
          history.push("/addExperience");
        }
      
        if (tab == "7") {
          history.push("/addReference");
        }
      
        if (tab == "8") {
          history.push("/addPersonalStatement");
        }
        if (tab == "9") {
          history.push("/addOtherInformation");
        }

       
      };


      const backToStudentProfile = () => {
        history.push(`/studentProfile/${localStorage.getItem('applictionStudentId')}`);
    }
    

      const countryName = country?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));


           // select  Country
  const selectCountry = (label, value) => {

    setCountryError(false);
    setCountryLabel(label);
    setCountryValue(value);
    
   
   
  }

      const addressTypeName = addressType?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));


           // select  Address Type
  const selectAddressType = (label, value) => {

    setAddressError(false);
    setAddressTypeLabel(label);
    setAddressTypeValue(value);
    
   
   
  }

  const handleSubmit = (event) => {

  event.preventDefault();
    const subData = new FormData(event.target);

    if(countryValue == 0 ){

      setCountryError(true);
      
    
    }

    if(addressTypeValue == 0){

      setAddressError(true);
      
    }

    else{

      if(oneData?.id){

        put('StudentContactInformation/Update',subData)
        .then(res => {
          console.log(res);
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
            })
            setSuccess(!success);
    
          }
        })
  
       }
  
       else{
  
        post('StudentContactInformation/Create',subData)
        .then(res => {
          console.log(res);
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
            })
            history.push('/addStudentEducationalInformation');
    
          }
        })
  
       }

    }

    

  }


    return (
        <div>

            <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Contact Information</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToStudentProfile}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Student Profile
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
        {

          method == 'put'?
       
         <Nav tabs>
 
         <NavItem>
         <NavLink  active={activetab === "1"} onClick={() => toggle("1")}>
           Application 
         </NavLink>
       </NavItem>
 
           <NavItem>
             <NavLink  active={activetab === "2"} onClick={() => toggle("2")}>
               Personal 
             </NavLink>
           </NavItem>
 
           <NavItem>
             <NavLink   active={activetab === "3"} onClick={() => toggle("3")}>
               Contact 
             </NavLink>
           </NavItem>
 
          
           <NavItem>
             <NavLink   active={activetab === "4"} onClick={() => toggle("4")}>
               Educational 
             </NavLink>
           </NavItem>
 
           <NavItem>
             <NavLink   active={activetab === "5"} onClick={() => toggle("5")}>
               Test Score
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink   active={activetab === "6"} onClick={() => toggle("6")}>
               Experience 
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink   active={activetab === "7"} onClick={() => toggle("7")}>
               Reference
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink   active={activetab === "8"} onClick={() => toggle("8")}>
               Personal Statement
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink   active={activetab === "9"} onClick={() => toggle("9")}>
               Others
             </NavLink>
           </NavItem>
          
 
         </Nav>
 
         :
 
         <Nav tabs>
 
         <NavItem>
         <NavLink  active={activetab === "1"} onClick={() => toggle("1")}>
           Application 
         </NavLink>
       </NavItem>
 
           <NavItem>
             <NavLink  active={activetab === "2"} onClick={() => toggle("2")}>
               Personal 
             </NavLink>
           </NavItem>
 
           <NavItem>
             <NavLink   active={activetab === "3"} onClick={() => toggle("3")}>
               Contact 
             </NavLink>
           </NavItem>
 
          
           <NavItem>
             <NavLink disabled  active={activetab === "4"} onClick={() => toggle("4")}>
               Educational 
             </NavLink>
           </NavItem>
 
           <NavItem>
             <NavLink disabled  active={activetab === "5"} onClick={() => toggle("5")}>
               Test Score
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink disabled  active={activetab === "6"} onClick={() => toggle("6")}>
               Experience 
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink disabled  active={activetab === "7"} onClick={() => toggle("7")}>
               Reference
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink disabled  active={activetab === "8"} onClick={() => toggle("8")}>
               Personal Statement
             </NavLink>
           </NavItem>
 
           <NavItem>
 
             <NavLink disabled  active={activetab === "9"} onClick={() => toggle("9")}>
               Others
             </NavLink>
           </NavItem>
          
 
         </Nav>
 
       }

          <TabContent activeTab={activetab}>
            <TabPane tabId="3">
              <Form onSubmit={handleSubmit}  className="mt-5">

              <input
              type='hidden'
              name='studentId'
              id='studentId'
              value={localStorage.getItem('applictionStudentId')}
              />

              {
                (oneData?.id) ? 
                
                <input
                type='hidden'
                name='id'
                id='id'
                value={oneData?.id}

                />

                :

                null


              }

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Cell Phone Number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="cellPhoneNumber"
                      id="cellPhoneNumber"
                     placeholder='Enter cell phone number'
                      required
                      defaultValue={oneData?.cellPhoneNumber}
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Address Line <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="string"
                      name="addressLine"
                      id="addressLine"
                     placeholder='Enter address line'
                      required
                      defaultValue={oneData?.addressLine}
                    />

                  </Col>
                </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      City <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="string"
                      name="city"
                      id="city"
                     placeholder='Enter city'
                      required
                      defaultValue={oneData?.city}
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
                  <Col md="6">
                   <Input
                      type="string"
                      name="state"
                      id="state"
                     placeholder='Enter state'
                      required
                      defaultValue={oneData?.state}
                    />

                  
                  </Col>
                </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Zip  Code <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="string"
                      name="zipCode"
                      id="zipCode"
                     placeholder='Enter zip code'
                      required
                      defaultValue={oneData?.zipCode}
                    />

                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                       Country <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={countryName}
                      value={{ label: countryLabel, value: countryValue }}
                      onChange={(opt) => selectCountry(opt.label, opt.value)}
                      name="countryId"
                      id="countryId"
                      required

                    />

                    {
                      countryError && 

                      <span className='text-danger'>Select Country</span>

                    }

                  
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Address Type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                  <Select
                      options={addressTypeName}
                      value={{ label: addressTypeLabel, value: addressTypeValue }}
                      onChange={(opt) => selectAddressType(opt.label, opt.value)}
                      name="addressTypeId"
                      id="addressTypeId"
                      required

                    />

                    {
                      addressError && 

                      <span className='text-danger'>Select Address Type</span>
                    }

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row
                className="has-icon-left position-relative"
                style={{ display: "flex", justifyContent: "end" }}
              >
                
            <Col md="5">
            
            <Button.Ripple
            type="submit"
            className="mr-1 mt-3 badge-primary"
          >
            Submit
          </Button.Ripple>
         
            </Col>
         
               
              </FormGroup>

             
              </Form>
              <FormGroup
              className="has-icon-left position-relative"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button.Ripple
                type="submit"
                className="mr-1 mt-3 btn-warning"
                onClick= {goBackward}
              >
              <i className="fas fa-arrow-left-long me-1"></i>
                Previous
 
              </Button.Ripple>
              <Button.Ripple
 
              onClick={goForward}
                
                className="mr-1 mt-3 btn-warning"
                disabled = {oneData == null ? true : false}
              >
                Next
                <i className="fas fa-arrow-right-long ms-1"></i>
              </Button.Ripple>
            </FormGroup>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
            
        </div>
    );
};

export default ContactInformation;