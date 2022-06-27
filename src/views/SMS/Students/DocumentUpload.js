import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import Select from "react-select";
import StudentProfileImage from './StudentProfileImage';
import * as Icon from 'react-feather';

const DocumentUpload = () => {



    const applicationStudentId = localStorage.getItem('applictionStudentId');

    const history = useHistory();

    const [activetab, setActivetab] = useState("10");

    const backToDashboard = () => {
        history.push('/');
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

      const  handleSubmit = (event) => {

        event.preventDefault();

      }




    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Upload Documents</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>


          <Card className=''>
      <CardBody>
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
            <NavLink  active={activetab === "3"} onClick={() => toggle("3")}>
              Contact 
            </NavLink>
          </NavItem>

         
          <NavItem>
            <NavLink   active={activetab === "4"} onClick={() => toggle("4")}>
              Educational 
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink  active={activetab === "5"} onClick={() => toggle("5")}>
              Test Score
            </NavLink>
          </NavItem>

          <NavItem>

            <NavLink  active={activetab === "6"} onClick={() => toggle("6")}>
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
          <NavItem>

            <NavLink   active={activetab === "10"} onClick={() => toggle("10")}>
              Documents
            </NavLink>
          </NavItem>
         

        </Nav>

        <div className='row gy-3'>

     

        <div className='col-md-8 '>

        <div className='container file-upload-border py-3 flex-style '>

        <div>
        <h5 className='document-title'>Passport</h5>

        <h5 className='document-type-style'>Document Type: Passport </h5>

      
        

        </div>

        <div>
        <Icon.XCircle className='text-danger cross-icon-style' />

        </div>
       
        
        </div>

     

        


        </div>



        <div className='col-md-4 file-upload-border'>

  
          <Form onSubmit={handleSubmit}   className="mt-4 container">

          <input
          type='hidden'
          name='studentId'
          id='studentId'
          value={applicationStudentId}
          />


          <FormGroup row className="has-icon-left position-relative">
  
            <p>
              Document Title <span className="text-danger">*</span>{" "}
            </p>
   

           <Input
            className='input-custom-style ms-3'
              type="text"
              name="financeApplicationDetails"
              id="financeApplicationDetails"
             placeholder='Ex. Others type file'
              required
         
            />

          
       

        </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
  
            <p>
              Document Type <span className="text-danger">*</span>{" "}
            </p>
   

            <Select
                   
                    required

                  />

          
       
        </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
  
            <p>
              Upload Document <span className="text-danger">*</span>{" "}
            </p>
   

            <StudentProfileImage></StudentProfileImage>
          
       
        </FormGroup>

         

       
           <FormGroup
           className="has-icon-left position-relative"
           style={{ display: "flex" }}
         >
          
           <Button.Ripple
             type="submit"
             className="mr-1 mt-3 badge-primary"
           >
             Upload
           </Button.Ripple>
         </FormGroup>

         
          </Form>
    
      

        
        </div>


      

        </div>
      
      </CardBody>
    </Card>
            
        </div>
    );
};

export default DocumentUpload;