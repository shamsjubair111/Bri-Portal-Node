import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';

const Reference = () => {

    const history = useHistory();
    

    const [activetab, setActivetab] = useState("6");

    const [country,setCountry] = useState([]);
    const [countryLabel, setCountryLabel] = useState("Country");
      const [countryValue, setCountryValue] = useState(0);

    const [reference,setReference] = useState([]);
    const [referenceLabel, setReferenceLabel] = useState("Reference type");
      const [referenceValue, setReferenceValue] = useState(0);
  

    const studentIdVal = localStorage.getItem('applictionStudentId');


    useEffect(()=>{

        get('Country/Index')
        .then(res => {
            console.log(res);
            setCountry(res);
        })

        get('ReferenceType/GetAll')
        .then(res => {
            console.log(res);
            setReference(res);
        })




    },[])


    const backToDashboard = () =>{
       
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

      const handleRegisterStudent = (event) => {
        event.preventDefault();
      }


      const countryName = country?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));


           // select  Country
  const selectCountry = (label, value) => {
    setCountryLabel(label);
    setCountryValue(value);
    
   
   
  }


      const referenceName = reference?.map((ref) => ({
        label: ref.name,
        value: ref.id,
      }));


           // select  reference
  const selectReference = (label, value) => {
    setReferenceLabel(label);
    setReferenceValue(value);
    
   
   
  }



    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Reference Information</h3>
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
          <NavLink  active={activetab === "3"} onClick={() => toggle("3")}>
            Contact
          </NavLink>
        </NavItem>

     

        <NavItem>
          <NavLink  active={activetab === "4"} onClick={() => toggle("4")}>
            Educational
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink  active={activetab === "5"} onClick={() => toggle("5")}>
            Experience
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink  active={activetab === "6"} onClick={() => toggle("6")}>
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

          <Form onSubmit={handleRegisterStudent} className="mt-5">

            
                
          <input 
          type='hidden'
          name='studentId'
          id='studentId'
          value={studentIdVal}
          />

          
          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
               Reference Type <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">
            <Select
              options={referenceName}
              value={{ label: referenceLabel, value: referenceValue }}
              onChange={(opt) => selectReference(opt.label, opt.value)}
              name="referenceTypeId"
              id="referenceTypeId"
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
            Reference Name <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
         <Input
            type="text"
            name="referenceName"
            id="referenceName"
            placeholder="Enter reference name"
            required
          />

     
        </Col>
      </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
            Institute/Company <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
         <Input
            type="text"
            name="institute_Company"
            id="institute_Company"
            placeholder="Enter institute/company"
            required
          />

     
        </Col>
      </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
            Phone Number <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
         <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter phone number"
            required
          />

     
        </Col>
      </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
            Email Address <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
         <Input
            type="text"
            name="emailAddress"
            id="emailAddress"
            placeholder="Enter email address"
            required
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

            {/* <div className="form-control-position">
                                <User size={15} />
                            </div> */}
          </Col>
        </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
            Adress Line <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
         <Input
            type="text"
            name="addressLine"
            id="addressLine"
            placeholder="Enter address line"
            required
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
            type="text"
            name="city"
            id="city"
            placeholder="Enter city"
            required
          />

     
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
            type="text"
            name="state"
            id="state"
            placeholder="Enter state"
            required
          />

     
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
      

   
           
       
      </CardBody>
    </Card>
        
            
        </div>
    );
};

export default Reference;