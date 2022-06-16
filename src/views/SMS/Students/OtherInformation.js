import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, Label, FormGroup, Col, Input, Button } from 'reactstrap';
import get from '../../../helpers/get';
import { useToasts } from "react-toast-notifications";
import post from '../../../helpers/post';

const OtherInformation = () => {

    const styleLabelBold = {
        // fontWeight: "bold"
      };
      

    const history = useHistory();

    const [disability, setDisability] = useState(false);

    const [crime, setCrime] = useState(false);

    const [activetab, setActivetab] = useState("8");

    const studentIdVal = localStorage.getItem('applictionStudentId');

    const {addToast} = useToasts();

    const backToDashboard = () =>{
       
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
          history.push("/addExperience");
        }

        if (tab == "6") {
          history.push("/addReference");
        }

        if (tab == "7") {
          history.push("/addPersonalStatement");
        }
        
      };

      const handleOtherInformation = (event) => {

        event.preventDefault();

        const subData = new FormData(event.target);

        post('OtherInformation/Create', subData)
        .then(res => {
          console.log(res);
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance:'success',
              autoDismiss:true
            })

          }
        })
      }

      const handleDisability = (event) => {
        console.log(event.target.value);
        setDisability(event.target.value);
    }



      const handleCrime = (event) => {
        console.log(event.target.value);
        setCrime(event.target.value);
    }
  



    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Other Information</h3>
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
          <NavLink  active={activetab === "7"} onClick={() => toggle("7")}>
            Personal Statement
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink  active={activetab === "8"} onClick={() => toggle("8")}>
            Others
          </NavLink>
        </NavItem>
       

      </Nav>

          <Form onSubmit={handleOtherInformation} className="mt-5">

            
                
          <input 
          type='hidden'
          name='studentId'
          id='studentId'
          value={studentIdVal}
          />

          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
              Have Disability? <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">

          
          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveDisability" onChange={handleDisability} name="isHaveDisability" value='true' checked={disability == 'true'} />
          <Label className="form-check-label" check htmlFor="isHaveDisability" style={styleLabelBold}>Yes</Label>

          </FormGroup>

          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveDisability" onChange={handleDisability} name="isHaveDisability" value='false' checked={disability == 'false'} />
          <Label className="form-check-label" check htmlFor="isHaveDisability" style={styleLabelBold}>No</Label>

          </FormGroup>



          
          </Col>
        </FormGroup>

        
        
          {

            disability === 'true' ? 

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
            <span>
               Disability Description <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">
      
  
          <Input type="textarea" name='DisabilityDescription' id='DisabilityDescription' rows={4}/>

  
        </Col>
  
  
          </FormGroup>

          :

          null


          }
        

        


          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
              Have Criminal Convictions? <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">

          
          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveCriminalConvictions" onChange={handleCrime} name="isHaveCriminalConvictions" value='true' checked={crime == 'true'} />
          <Label className="form-check-label" check htmlFor="isHaveCriminalConvictions" style={styleLabelBold}>Yes</Label>

          </FormGroup>

          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveCriminalConvictions" onChange={handleCrime} name="isHaveCriminalConvictions" value='false' checked={crime == 'false'} />
          <Label className="form-check-label" check htmlFor="isHaveCriminalConvictions" style={styleLabelBold}>No</Label>

          </FormGroup>



          
          </Col>
        </FormGroup>

      {
         crime === 'true' ?

         <FormGroup row className="has-icon-left position-relative">
         <Col md="2">
         <span>
            Criminal convictions Description <span className="text-danger">*</span>{" "}
         </span>
       </Col>
       <Col md="6">
   
 
       <Input type="textarea" name='CriminalConvictionsDescription' id='CriminalConvictionsDescription' rows={4}/>
 
 
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

export default OtherInformation;