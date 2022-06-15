import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';
import { useHistory } from 'react-router-dom';

const EducationalInformation = () => {

    const [activetab, setActivetab] = useState("4");
    const history = useHistory();
    const [programLevel, setProgramLevel] = useState([]);
  const [programLevelLabel, setProgramLevelLabel] = useState('Program Level');
  const [programLevelValue, setProgramLevelValue] = useState(0);
  const [radioPracticalTraining, setRadioPracticalTraining] = useState('false');

  const [country,setCountry] = useState([]);
  const [countryLabel, setCountryLabel] = useState("Country");
    const [countryValue, setCountryValue] = useState(0);


  useEffect(()=>{

    get('ProgramLevel/Index')
    .then(res => {
        console.log(res);
        setProgramLevel(res);
    })

    get('Country/Index')
    .then(res => {
        console.log(res);
        setCountry(res);
    })

  },[])


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

      const styleLabelBold = {
        // fontWeight: "bold"
      };


       // on change radio button

    // onValueChangePracticalTraining
    const onValueChangePracticalTraining = (event) => {
        console.log(event.target.value);
        setRadioPracticalTraining(event.target.value)
    }
  
  
    const programLevelName = programLevel?.map((branchCountry) => ({
      label: branchCountry.name,
      value: branchCountry.id,
    }));
  
  
         // select  Student type
  const selectProgramLevel = (label, value) => {
  setProgramLevelLabel(label);
  setProgramLevelValue(value);
  
  
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



    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Educational Information</h3>
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
          <TabPane tabId="4">
            <Form   className="mt-5">

        

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Name of Institution <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
             <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter name of institution"
                required
              />

         
            </Col>
          </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Attended Institution From <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="date"
                      name="lastName"
                      id="lastName"
                      
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
                      Attended Institution To <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="date"
                      name="lastName"
                      id="lastName"
                      
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
                    Program Level <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                <Select
                    options={programLevelName}
                    value={{ label: programLevelLabel, value: programLevelValue }}
                    onChange={(opt) => selectProgramLevel(opt.label, opt.value)}
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
                  Qualification Subject <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter qualification subject"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Duration <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter duration"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Final Grade <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter final grade"
                  required
                />
  
           
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Country of Education <span className="text-danger">*</span>{" "}
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
           

         
            </Col>
          </FormGroup>

            
             

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Language of Institution <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter language of institution"
                    required
                  />

             
                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Institute Contact Number <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter institute contact number"
                    required
                  />

             
                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Institute Address <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Institute address"
                    required
                  />

             
                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Institute City <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter institute city"
                    required
                  />

             
                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Institute State <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter institute state"
                    required
                  />

             
                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Institute Zip Code <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter institute zip code"
                    required
                  />

             
                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Is Have Oroginal Documents?  <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
  
              
              <FormGroup check inline>
              <Input className="form-check-input" type="radio" id="PracticalTraining" onChange={onValueChangePracticalTraining} name="PracticalTraining" value='true' checked={radioPracticalTraining == 'true'} />
              <Label className="form-check-label" check htmlFor="PracticalTraining" style={styleLabelBold}>Yes</Label>
  
              </FormGroup>
  
              <FormGroup check inline>
              <Input className="form-check-input" type="radio" id="PracticalTraining" onChange={onValueChangePracticalTraining} name="PracticalTraining" value='false' checked={radioPracticalTraining == 'false'} />
              <Label className="form-check-label" check htmlFor="PracticalTraining" style={styleLabelBold}>No</Label>
  
              </FormGroup>
  
  
  
              
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

export default EducationalInformation;