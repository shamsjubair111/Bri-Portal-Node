import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import put from '../../../helpers/put';
import ButtonForFunction from '../Components/ButtonForFunction';

const PersonalStatement = () => {



    const history = useHistory();

    const [activetab, setActivetab] = useState("8");

    const {addToast} = useToasts();

    const [statement, setStatement] = useState('');
    const [id, setId] = useState(0);

    const studentIdVal = localStorage.getItem('applictionStudentId');

    const method  = localStorage.getItem('method');

    useEffect(()=>{

      get(`PersonalStatement/GetByStudentId/${studentIdVal}`)
      .then(res => {
        console.log(res,'Personal Statement Check');
        setStatement(res?.statement);
        setId(res?.id);
      })

    },[])


    const backToStudentProfile = () => {
      history.push(`/studentProfile/${localStorage.getItem('applictionStudentId')}`);
  }
  

    const previousPage = () => {
      history.push('/addReference');
    }

    const goNext = () =>{
      history.push('/addOtherInformation');
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
        if (tab == "10") {
          history.push("/uploadDocument");
        }
        if (tab == "11") {
          history.push("/studentDeclaration");
        }

        
      };

      const handlePersonalStatement = (event) => {
        event.preventDefault();

        const subData = new FormData(event.target);

       if(method == 'put' || id){

        put('PersonalStatement/Update',subData)
        .then(res => {
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
            })
            
          }
        })

       }

       else{

        post('PersonalStatement/Create',subData)
        .then(res => {
          console.log(res);
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
              
            })
            history.push('/addOtherInformation');
          }

        })

       }

      }




    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Personal Statement</h3>
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
       <NavLink style={{ color: '#1e98b0'}} active={activetab === "1"} onClick={() => toggle("1")}>
         Application 
       </NavLink>
     </NavItem>

         <NavItem>
           <NavLink style={{ color: '#1e98b0'}} active={activetab === "2"} onClick={() => toggle("2")}>
             Personal 
           </NavLink>
         </NavItem>

         <NavItem>
           <NavLink style={{ color: '#1e98b0'}}  active={activetab === "3"} onClick={() => toggle("3")}>
             Contact 
           </NavLink>
         </NavItem>

        
         <NavItem>
           <NavLink style={{ color: '#1e98b0'}}  active={activetab === "4"} onClick={() => toggle("4")}>
             Educational 
           </NavLink>
         </NavItem>

         <NavItem>
           <NavLink style={{ color: '#1e98b0'}}  active={activetab === "5"} onClick={() => toggle("5")}>
             Test Score
           </NavLink>
         </NavItem>

         <NavItem>

           <NavLink style={{ color: '#1e98b0'}}  active={activetab === "6"} onClick={() => toggle("6")}>
             Experience 
           </NavLink>
         </NavItem>

         <NavItem>

           <NavLink  style={{ color: '#1e98b0'}} active={activetab === "7"} onClick={() => toggle("7")}>
             Reference
           </NavLink>
         </NavItem>

         <NavItem>

           <NavLink style={{ color: '#1e98b0'}}  active={activetab === "8"} onClick={() => toggle("8")}>
             Personal Statement
           </NavLink>
         </NavItem>

         <NavItem>

           <NavLink style={{ color: '#1e98b0'}}  active={activetab === "9"} onClick={() => toggle("9")}>
             Others
           </NavLink>
         </NavItem>

         <NavItem>
           <NavLink style={{ color: '#1e98b0'}} active={activetab === "10"} onClick={() => toggle("10")}>
             Documents
           </NavLink>
         </NavItem>
        
         <NavItem>
           <NavLink style={{ color: '#1e98b0'}} active={activetab === "11"} onClick={() => toggle("11")}>
             Declaration
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

           <NavLink disabled  active={activetab === "9"} onClick={() => toggle("9")}>
             Others
           </NavLink>
         </NavItem>

         <NavItem>
            <NavLink disabled active={activetab === "10"} onClick={() => toggle("10")}>
              Documents
            </NavLink>
          </NavItem>
        
         <NavItem>
            <NavLink disabled active={activetab === "11"} onClick={() => toggle("11")}>
              Declaration
            </NavLink>
          </NavItem>
        

       </Nav>

     }

          <Form onSubmit={handlePersonalStatement} className="mt-5">


          
          {

            (method == 'put' || id) ?

            <input
            type='hidden'
            name='id'
            id='id'
            value={id}

            />

            :

            null


          }
                
          <input 
          type='hidden'
          name='studentId'
          id='studentId'
          value={studentIdVal}
          />

          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
          <span>
             Personal Statement <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
    

        <Input type="textarea" name="statement" id="statement" rows={15}
        defaultValue={statement}
        />
      

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
   

      <ButtonForFunction
      className={"mr-1 mt-3 btn-warning"}
      name={'Previous'}
      icon={<i className="fas fa-arrow-left-long me-1"></i>}
      func={previousPage}
      />

      <Button.Ripple
        type="submit"
        className="mr-1 mt-3 btn-warning"
        onClick={goNext}
        disabled = {statement == 'false' ? true : false}
      >
        Next Page
        <i className="fas fa-arrow-right-long ms-1"></i>
      </Button.Ripple>
    </FormGroup>
   
           
       
      </CardBody>
    </Card>
        
            
        </div>
    );
};

export default PersonalStatement;