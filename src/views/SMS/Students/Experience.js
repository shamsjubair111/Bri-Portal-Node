import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import remove from '../../../helpers/remove';
import put from '../../../helpers/put';

const Experience = () => {


    const history = useHistory();

    const [activetab, setActivetab] = useState("6");
    const [working, setWorking] = useState(false);
    const [endDate, setEndDate] = useState('');

  
     const [info, setInfo] = useState([]);

    const studentIdVal = localStorage.getItem('applictionStudentId');

    const {addToast} = useToasts();

    const [deleteModal, setDeleteModal] = useState(false);
    const [showForm,setShowForm]=useState(false);
    const [value, setValue] = useState({}); 

    const [sDate, setSDate] = useState('');
    const [eDate, setEDate] = useState('');

    const method = localStorage.getItem('method');


    const handleChange = (e) => {
      
      let isChecked = e.target.checked;
      setWorking(isChecked);
      console.log(isChecked);
     
    } 

 
  


    useEffect(()=>{

      get(`Experience/GetByStudentId/${studentIdVal}`)
      .then(res => {
        console.log(res);
        setInfo(res);

     
        

      })

    },[])
   

    const onPreviousPage = () => {
      history.push('/addTestScore');
    }


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

      const handleRegisterStudent = (event) => {
        event.preventDefault();

        const subData = new FormData(event.target);
        subData.append('isStillWorking',working);
        {
          (value?.end) ?
            subData.append('endDate',null)
            :
            subData.append('endDate',endDate)
          
        }

        for( var a of subData.values()){
          console.log(a);
        }

       if(value.id){

        put('Experience/Update',subData)
        .then(res => {
          addToast(res?.data?.message,{
            appearance: 'success',
            autoDismiss: true
          });
          setValue({});
          get(`Experience/GetByStudentId/${studentIdVal}`)
          .then(res => {
           
            setInfo(res);
            
    
          })
          setShowForm(false);

        })

       }

       else{
        post('Experience/Create',subData)
        .then(res => {
          console.log(res);
          addToast(res?.data?.message,{
            appearance: 'success',
            autoDismiss: true
          })
          setShowForm(false);
          get(`Experience/GetByStudentId/${studentIdVal}`)
          .then(res => {
           
            setInfo(res);
            
    
          })



        })
       }

      }


      
const toggleDanger = (id) => {
   localStorage.setItem('deleteExperienceId',id);
 
  setDeleteModal(true)
}

const handleDeletePermission = () => {

  remove(`Experience/Delete/${localStorage.getItem('deleteExperienceId')}`)
  .then(res => {
    console.log(res);
    addToast(res,{
      appearance:'error',
      autoDismiss: true
    })
    setDeleteModal(false);
    get(`Experience/GetByStudentId/${studentIdVal}`)
      .then(res => {
        console.log(res);
        setInfo(res);
        

      })

  })

  

 

 
}

const handleUpdate = (id) => {
 

  console.log(id);

  setShowForm(true);
  get(`Experience/Get/${id}`)
  .then(res => {
    setValue(res);

    // 

    var datee =res?.startDate;
var utcDate = new Date(datee);
var localeDte = utcDate.toLocaleString("en-CA");
var localeDte2 = localeDte.split(",")[0];
var localeDte3 = localeDte2.replace('/', '-');

console.log(localeDte);
setSDate(localeDte3.replace('/', '-'));

    var datee99 =res?.endDate;
var utcDate99 = new Date(datee99);
var localeDte99 = utcDate99.toLocaleString("en-CA");
var localeDte299 = localeDte99.split(",")[0];
var localeDte399 = localeDte299.replace('/', '-');

// console.log(localeDte);
setEDate(localeDte399.replace('/', '-'));




    // 
    
    console.log(res);
    setWorking(res.isStillWorking);

  })
   
   
}

console.log('trying', sDate?.split(",")[0]);

  // redirect to Next Page
  const onNextPage = () => {
    
    history.push('/addReference',
     
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
      {

        method == 'put'?
     
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

           <NavLink   active={activetab === "9"} onClick={() => toggle("9")}>
             Others
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

           <NavLink disabled  active={activetab === "7"} onClick={() => toggle("7")}>
             Reference
           </NavLink>
         </NavItem>

         <NavItem>

           <NavLink disabled  active={activetab === "8"} onClick={() => toggle("8")}>
             Personal Statement
           </NavLink>
         </NavItem>

         <NavItem>

           <NavLink disabled  active={activetab === "9"} onClick={() => toggle("9")}>
             Others
           </NavLink>
         </NavItem>
        

       </Nav>

     }
          <div className='row'>
        
      
          {
            info?.map((inf, i) => <div className='col-md-6 mt-2' key={inf.id} style={{ textAlign: "left" }}>
              <Card className="CampusCard shadow-style">
                <CardBody className="shadow">

                

                <Row>
                  <Col md="4">
                      <h5>Company Name: {inf?.companyName}   </h5>
                      
                      <p>Eployment Details: {inf?.employeementDetails} </p>
                     
                      
                  </Col>

                    <Col md="5">
                      <p>Job Title : {inf?.jobTitle} </p>
                      <p>Start Date : {inf?.startDate} </p>
                      {
                        !inf?.isStillWorking ?

                        <p>End Date : {inf?.endDate} </p>

                        :

                        <p>Currently Working</p>
                      }
                     
                 
                      
             
                  
                  
                  
                  </Col>

                  <Col md="3">

                  <div className="CampusCardAction">
                  <div className=""> 
                     <button type="button" className="btn btn-outline-info" onClick={() => handleUpdate(inf.id)}> <i className="fas fa-edit"></i> </button>
                  </div>

                  <div className=""> 
                     <button type="button" className="btn btn-outline-danger" onClick={()=>toggleDanger(inf.id)} ><i className="fas fa-trash-alt"></i></button>
                  </div>
                 </div>

                  </Col>


                </Row>           
            
                </CardBody>

                <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                  <ModalBody>
                    <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={handleDeletePermission} color="danger">YES</Button>
                    <Button onClick={() => setDeleteModal(false)}>NO</Button>
                  </ModalFooter>
               </Modal>

              </Card>
            </div>)

          }

          </div>
   
          {
            (info.length < 1 || showForm) ?
            
            <Form onSubmit={handleRegisterStudent} className="mt-5">

            
                
            <input 
            type='hidden'
            name='studentId'
            id='studentId'
            value={studentIdVal}
            />

           {
            (value?.id)?

            <input
            type='hidden'
            name='id'
            id='id'
            value={value.id}
            />

            :

            null


           }

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
              defaultValue={value.jobTitle}
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
              defaultValue={value.employeementDetails}
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
              defaultValue={value.companyName}
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
              defaultValue={sDate}
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
              defaultChecked={value.isStillWorking}
           
              onChange={handleChange}
              
           
            />

           

       
          </Col>
        </FormGroup>

        {
            !working  ?

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                End Date <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
             <Input
                type="date"
               
                
                onChange={(e)=> setEndDate(e.target.value)}
                defaultValue={eDate}
                
                required
              />

         
            </Col>
          </FormGroup>

          :

          null




        }

       

        {
          (value.id) ?

          <FormGroup
          className="has-icon-left position-relative"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button.Ripple
            type="submit"
            className="mr-1 mt-3 badge-primary"
          >
            Update
          </Button.Ripple>
        </FormGroup>

        :

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

        }
        
         
        </Form>

        :

        <>
          

        <FormGroup className="has-icon-left position-relative" style={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>

       
        <Button onClick={onShow} color="primary uapp-form-button">Add another</Button>
    
        </FormGroup>
        <FormGroup className="has-icon-left position-relative" style={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>

       
        <Button onClick={onPreviousPage} color="primary uapp-form-button">Previous</Button>
        <Button onClick={onNextPage} color="warning uapp-form-button float-right">Next Page</Button>
        </FormGroup>

        
        </>

        
          }
       
      </CardBody>
    </Card>
            
        </div>
    );
};

export default Experience;