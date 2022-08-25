import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import Select from "react-select";
import get from '../../../helpers/get';
import ButtonForFunction from '../Components/ButtonForFunction';



const StudentRegister = () => {



    const history = useHistory(); 

    const {addToast} = useToasts();

    const [studentType, setStudentType] = useState([]);
  const [studentTypeLabel, setStudentTypeLabel] = useState('Student type');
  const [studentTypeValue, setStudentTypeValue] = useState(0);

    const [consultant, setConsultant] = useState([]);
  const [consultantLabel, setconsultantLabel] = useState('Consultant');
  const [consultantValue, setConsultantValue] = useState(0);

   const [consultantError, setConsultantError] = useState(false);
   const [studentError, setStudentError] = useState(false);






  useEffect(()=>{


    get('StudentTypeDD/Index')
    .then(res => {
      console.log(res);
      setStudentType(res);
    })

    get('ConsultantDD/index')
    .then(res => {
      console.log(res);
      setConsultant(res);
    } )

  },[])


  
  const studentTypeName = studentType?.map((student) => ({
    label: student.name,
    value: student.id,
  }));


       // select  Student type
const selectStudentType = (label, value) => {

setStudentError(false);  
setStudentTypeLabel(label);
setStudentTypeValue(value);

}


  
  const consultantName = consultant?.map((cons) => ({
    label: cons.name,
    value: cons.id,
  }));



       // select  consultant
const selectConsultant = (label, value) => {

setConsultantError(false);  
setconsultantLabel(label);
setConsultantValue(value);

}

const cancelForm = () => {
  history.push('/');
}





    const backToStudentList = () => {

        history.push('/studentList');
    }

  

      const handleRegisterStudent = (event) => {

        event.preventDefault();

        if(studentTypeValue == 0){

          setStudentError(true);

          

        }

       else if(consultantValue == 0) {

          setConsultantError(true);

          
         
        }

        

        else{

          const subdata = new FormData(event.target);

          // for( var x of subdata.values() ){
          //   console.log(x);
          // }
  
          post('Student/Register',subdata)
          .then(res => {
            console.log('hello',res);
            localStorage.setItem('applictionStudentTypeId',res?.data?.result?.studentTypeId);
            localStorage.setItem('applictionStudentId',res?.data?.result?.id);
            localStorage.setItem('personalInfoConsultantId',res?.data?.result?.consultantId);
            localStorage.setItem('registerStudentViewId',res?.data?.result?.studentViewId);
            localStorage.setItem('registerUserId',res?.data?.result?.userId);
            localStorage.setItem('registerEmail',res?.data?.result?.email);
            localStorage.removeItem('method');
  
  
            // localStorage.setItem('')
         
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
            })
            history.push('/addStudentApplicationInformation');
          })
          
        }
       
        
      }


      localStorage.setItem("access", "hgvhvcewcece");


    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Register Student</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToStudentList}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Student List
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
      <CardBody>
      

   
            <Form onSubmit={handleRegisterStudent}  className="mt-5">

        
            <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Student Type <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                <Select
                    options={studentTypeName}
                    value={{ label: studentTypeLabel, value: studentTypeValue }}
                    onChange={(opt) => selectStudentType(opt.label, opt.value)}
                    name="studentTypeId"
                    id="studentTypeId"
                  

                  />
                  {
                    studentError &&
                    <span className='text-danger'>Select Student Type</span>
                  }
                
                  

                  
                </Col>
              </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Consultant <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                <Select
                    options={consultantName}
                    value={{ label: consultantLabel, value: consultantValue }}
                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                    name="consultantId"
                    id="consultantId"
                   

                  />

                  {
                    consultantError &&
                    <span className='text-danger'>Select Consultant</span>
                  }
                

                  
                </Col>
              </FormGroup>



              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  First Name <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Last Name <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Email <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                />
  
           
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Password <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
               <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                />
  
           
              </Col>
            </FormGroup>

             


              <FormGroup
                className="has-icon-left position-relative"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
           
                <ButtonForFunction
                  className={'mr-1 mt-3 btn-warning'}
                  func={cancelForm}
                  type={'submit'}
                  name={'Cancel'}
                />
                
          
              <ButtonForFunction

              className={'mr-1 mt-3 badge-primary'}
              name={'Submit'}
              type={'submit'}
             
              />
              </FormGroup>
            </Form>
       
      </CardBody>
    </Card>

            
        </div>
    );
};

export default StudentRegister;