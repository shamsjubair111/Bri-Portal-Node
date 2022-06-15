import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';

const Experience = () => {


    const history = useHistory();

    const [activetab, setActivetab] = useState("5");
    const [working, setWorking] = useState(false);

    const studentIdVal = localStorage.getItem('applictionStudentId');
   



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




    return (
        <div>
        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Experience Information</h3>
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
                  Job Title <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  placeholder="Enter job title"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Employment Details <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="employeementDetails"
                  id="employeementDetails"
                  placeholder="Enter employment details"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Company Name <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Enter company name"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Start Date <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="date"
                  name="startDate"
                  id="startDate"
                  
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Still Working? <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6" className='ms-4'>
               <Input
                  type="checkbox"
                  name="isStillWorking"
                  id="isStillWorking"
                  defaultChecked={working}
                  onChange={(e) => setWorking(e.target.checked)}
                  
                  required
                />

               
  
           
              </Col>
            </FormGroup>

            {
                working == false ?

                <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    End Date <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="date"
                    name="endtDate"
                    id="endDate"
                    
                    required
                  />
    
             
                </Col>
              </FormGroup>

              :

              null


            }

            
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

export default Experience;