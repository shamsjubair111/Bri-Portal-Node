import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";

const ContactInformation = () => {


  const {addToast} = useToasts();


    const history = useHistory();
    const [activetab, setActivetab] = useState("3");
    const [country,setCountry] = useState([]);
    const [countryLabel, setCountryLabel] = useState("Country");
      const [countryValue, setCountryValue] = useState(0);

    const [addressType,setAddressType] = useState([]);
    const [addressTypeLabel, setAddressTypeLabel] = useState("Address type");
      const [addressTypeValue, setAddressTypeValue] = useState(0);

    useEffect(() => {

        get('Country/Index')
        .then(res => {
            console.log(res);
            setCountry(res);
        })

        get('AddressType/GetAll')
        .then(res => {
            console.log(res);
            setAddressType(res);
        })


    },[] )

    const backToDashboard = () => {
        history.push('/');
    }

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


      const countryName = country?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));


           // select  Country
  const selectCountry = (label, value) => {
    setCountryLabel(label);
    setCountryValue(value);
    
   
   
  }

      const addressTypeName = addressType?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));


           // select  Address Type
  const selectAddressType = (label, value) => {
    setAddressTypeLabel(label);
    setAddressTypeValue(value);
    
   
   
  }

  const handleSubmit = (event) => {

  event.preventDefault();
    const subData = new FormData(event.target);

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


    return (
        <div>

            <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Contact Information</h3>
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
        <NavLink  active={activetab === "1"} onClick={() => toggle("1")}>
          Application
        </NavLink>
      </NavItem>

          <NavItem>
            <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
              Personal
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
              Contact
            </NavLink>
          </NavItem>

       

          <NavItem>
            <NavLink disabled active={activetab === "4"} onClick={() => toggle("4")}>
              Educational
            </NavLink>
          </NavItem>
         
          <NavItem>
            <NavLink disabled active={activetab === "5"} onClick={() => toggle("5")}>
              Experience
            </NavLink>
          </NavItem>
         
          <NavItem>
            <NavLink disabled active={activetab === "6"} onClick={() => toggle("6")}>
              Reference
            </NavLink>
          </NavItem>
         
          <NavItem>
            <NavLink disabled active={activetab === "7"} onClick={() => toggle("7")}>
              Personal Statement
            </NavLink>
          </NavItem>
         
          <NavItem>
            <NavLink disabled active={activetab === "8"} onClick={() => toggle("8")}>
              Others
            </NavLink>
          </NavItem>
         

        </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="3">
              <Form onSubmit={handleSubmit}  className="mt-5">

              <input
              type='hidden'
              name='studentId'
              id='studentId'
              value={localStorage.getItem('applictionStudentId')}
              />

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
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
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
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
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
                      name="zipCode "
                      id="zipCode"
                     placeholder='Enter zip code'
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

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
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

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

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

export default ContactInformation;