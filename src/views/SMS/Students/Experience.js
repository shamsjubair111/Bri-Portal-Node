import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";

const Experience = () => {


    const history = useHistory();

    const [activetab, setActivetab] = useState("5");
    const [working, setWorking] = useState(false);

    const [info, setInfo] = useState([]);

    const studentIdVal = localStorage.getItem('applictionStudentId');

    const {addToast} = useToasts();

    const [deleteModal, setDeleteModal] = useState(false);
    const [showForm,setShowForm]=useState(false);

    const handleChange = (e) => {
      
      let isChecked = e.target.checked;
      setWorking(isChecked);
     
    } 

 
  


    useEffect(()=>{

      get(`Experience/GetByStudentId/${studentIdVal}`)
      .then(res => {
        console.log(res);
        setInfo(res);
        

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

        const subData = new FormData(event.target);
        subData.append('isStillWorking',working);

        for( var a of subData.values()){
          console.log(a);
        }

        post('Experience/Create',subData)
        .then(res => {
          console.log(res);
          addToast(res?.data?.message,{
            appearance: 'success',
            autoDismiss: true
          })
          get(`Experience/GetByStudentId/${studentIdVal}`)
          .then(res => {
           
            setInfo(res);
            
    
          })



        })
      }


      
const toggleDanger = (p) => {
  console.log(p);
  setDeleteModal(true)
}

const handleDeletePermission = (data) => {

  console.log(data);

 

 
}

const handleUpdate = (id) => {
 

  console.log(id);

  setShowForm(true);
   
   
}


  // redirect to Next Page
  const onNextPage = () => {
    
    history.push('/addExperience',
     
    );
  };


  const onShow=()=>{
    setShowForm(true);
  
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
      
          {
            info?.map((inf, i) => <div key={inf.id} style={{ textAlign: "left" }}>
              <Card className="CampusCard">
                <CardBody className="shadow">

                  <div className="CampusCardAction">
                   <div className=""> 
                      <button type="button" className="btn btn-outline-info" onClick={() => handleUpdate(inf.id)}> <i className="fas fa-edit"></i> </button>
                   </div>

                   <div className=""> 
                      <button type="button" className="btn btn-outline-danger" onClick={() => toggleDanger(inf)} ><i className="fas fa-trash-alt"></i></button>
                   </div>
                  </div>

                <Row>
                  <Col md="6">
                      <h5>   </h5>
                      <h6> </h6>
                      <p> </p>
                      <p> </p>
                      <p> </p>
                  </Col>

                    <Col md="6">
                      <p>Country of Education : </p>
                      <p>Institution Address : </p>
                      <p>institution Contact Number : </p>
                      <p>Qualification Subject : </p>
                 
                      
                  </Col>


                </Row>           
            
                </CardBody>

                <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                  <ModalBody>
                    <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={()=> handleDeletePermission(inf)} color="danger">YES</Button>
                    <Button onClick={() => setDeleteModal(false)}>NO</Button>
                  </ModalFooter>
               </Modal>

              </Card>
            </div>)

          }
   
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
                
               
                  onChange={handleChange}
                  
               
                />

               
  
           
              </Col>
            </FormGroup>

            {
                !working ?

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