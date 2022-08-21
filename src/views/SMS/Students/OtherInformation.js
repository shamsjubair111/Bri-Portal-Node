import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, Label, FormGroup, Col, Input, Button } from 'reactstrap';
import get from '../../../helpers/get';
import { useToasts } from "react-toast-notifications";
import post from '../../../helpers/post';
import put from '../../../helpers/put';
import ButtonForFunction from '../Components/ButtonForFunction';

const OtherInformation = () => {

    const styleLabelBold = {
        // fontWeight: "bold"
      };


   

      const method = localStorage.getItem('method');
      

    const history = useHistory();

    const [disability, setDisability] = useState(false);

    const [crime, setCrime] = useState(false);

    const [id, setId] = useState(0);

    const [activetab, setActivetab] = useState("9");

    const studentIdVal = localStorage.getItem('applictionStudentId');

    const {addToast} = useToasts();

    const [data, setData] = useState({});

    useEffect(()=>{

      get(`OtherInformation/GetByStudentId/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
        console.log('checking Other information', res);
        setDisability(`${res?.isHaveDisability}`);
        setCrime(`${res?.isHaveCriminalConvictions}`);
        setData(res);
        setId(res?.id);
      })

    },[])

    const backToStudentProfile = () => {
      history.push(`/studentProfile/${localStorage.getItem('applictionStudentId')}`);
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
        if (tab == "10") {
          history.push("/uploadDocument");
        }
        
      };

      const handleOtherInformation = (event) => {

        event.preventDefault();

        const subData = new FormData(event.target);

        if(method == 'put'){

          put('OtherInformation/Update',subData)
          .then(res => {
            if(res?.status ==200 ){
              addToast(res?.data?.message,{
                appearance:'success',
                autoDismiss:true
              })
              localStorage.removeItem('method');
            }
          })

        }

        else if(id){

          put('OtherInformation/Update',subData)
          .then(res => {
            if(res?.status ==200 ){
              addToast(res?.data?.message,{
                appearance:'success',
                autoDismiss:true
              })
              localStorage.removeItem('method');
            }
          })

        }

        else{

          post('OtherInformation/Create', subData)
        .then(res => {
          console.log(res);
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance:'success',
              autoDismiss:true
            })
            localStorage.removeItem('method');

          }
        })

        }
      }

      const handleDisability = (event) => {
        console.log(event.target.value);
        setDisability(event.target.value);
    }



      const handleCrime = (event) => {
        console.log(event.target.value);
        setCrime(event.target.value);
    }
  

    const previousPage = () => {
      history.push('/addPersonalStatement');
    }



    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Other Information</h3>
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
      <Nav tabs>

      <NavItem>
      <NavLink style={{ color: '#1e98b0'}}  active={activetab === "1"} onClick={() => toggle("1")}>
        Application
      </NavLink>
    </NavItem>

        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "2"} onClick={() => toggle("2")}>
            Personal
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "3"} onClick={() => toggle("3")}>
            Contact
          </NavLink>
        </NavItem>

     

        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "4"} onClick={() => toggle("4")}>
            Educational
          </NavLink>
        </NavItem>
     

        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "5"} onClick={() => toggle("5")}>
            Test Score
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "6"} onClick={() => toggle("6")}>
            Experience
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "7"} onClick={() => toggle("7")}>
            Reference
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "8"} onClick={() => toggle("8")}>
            Personal Statement
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "9"} onClick={() => toggle("9")}>
            Others
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink style={{ color: '#1e98b0'}} active={activetab === "10"} onClick={() => toggle("10")}>
            Documents
          </NavLink>
        </NavItem>
       

      </Nav>

          <Form onSubmit={handleOtherInformation} className="mt-5">

          <input
          type='hidden'
          name='id'
          id='id'
          value={id}
          
          />

            
                
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
      
  
          <Input type="textarea" name='DisabilityDescription' id='DisabilityDescription' rows={4}
          defaultValue={data?.disabilityDescription}
          required
          />

  
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
   
 
       <Input type="textarea" name='CriminalConvictionsDescription' id='CriminalConvictionsDescription' rows={4} defaultValue={data?.criminalConvictionsDescription} required  />
 
 
     </Col>
 
 
       </FormGroup>

       :

       null


      }

      
      <FormGroup row
      className="has-icon-left position-relative"
      style={{ display: "flex", justifyContent: "end" }}
    >
      
  <Col md="5">
  
 

      <ButtonForFunction
      name={'Submit'}
      className={"mr-1 mt-3 badge-primary"}
      type={'submit'}
      />

  </Col>

     
    </FormGroup>
      </Form>
      
      <FormGroup
      className="has-icon-left position-relative"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
    

      <ButtonForFunction
      name={'Previous'}
      className={"mr-1 mt-3 btn-warning"}
      func={previousPage}
      icon={<i className="fas fa-arrow-left-long me-1"></i>}
      />
     
    </FormGroup>

   
           
       
      </CardBody>
    </Card>
            
        </div>
    );
};

export default OtherInformation;