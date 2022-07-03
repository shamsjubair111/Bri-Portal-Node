import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';
import { useHistory } from 'react-router-dom';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import remove from '../../../helpers/remove';
import put from '../../../helpers/put';


const EducationalInformation = () => {

    const [activetab, setActivetab] = useState("4");
    const history = useHistory();
    const [programLevel, setProgramLevel] = useState([]);
  const [programLevelLabel, setProgramLevelLabel] = useState('Program Level');
  const [programLevelValue, setProgramLevelValue] = useState(0);
  const [radioPracticalTraining, setRadioPracticalTraining] = useState('false');

  const [deleteModal, setDeleteModal] = useState(false);
  const [showForm,setShowForm]=useState(false);

  const [country,setCountry] = useState([]);
  const [countryLabel, setCountryLabel] = useState("Country");
    const [countryValue, setCountryValue] = useState(0);

    const [eduDetails, setEduDetails] = useState([]);
    const [ oneData, setOneData] = useState({}); 


    const {addToast} = useToasts();

    const [from, setFrom] = useState('');
    const [to,setTo] = useState('');

  
    


  useEffect(()=>{

    get('ProgramLevelDD/Index')
    .then(res => {
        console.log(res);
        setProgramLevel(res);
    })

    get('CountryDD/index')
    .then(res => {
        console.log(res);
        setCountry(res);
    })

    get(`EducationInformation/GetByStudentId/${localStorage.getItem('applictionStudentId')}`)
    .then(res => {
      setEduDetails(res);
      console.log('Edu details', res);
    })

  },[])


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
  console.log(value);
  
  
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

const handleSubmit = (event) => {

  event.preventDefault();

  const subData = new FormData(event.target);

 if(oneData?.id){
  put(`EducationInformation/Update`,subData)
  .then(res => {
    console.log('update done',res);
    addToast(res?.data?.message,{
      appearance: 'success',
      autoDismiss: true
    })
    get(`EducationInformation/GetByStudentId/${localStorage.getItem('applictionStudentId')}`)
    .then(res => {
      setEduDetails(res);
      setRadioPracticalTraining()
      console.log('Edu details', res);
     
      setShowForm(false);
    })
  })
 }

 else{
  post('EducationInformation/Create',subData)
  .then(res => {
    console.log('Educatinal information Post ',res);
    addToast(res?.data?.message,{
      appearance: 'success',
      autoDismiss: true
    })
    get(`EducationInformation/GetByStudentId/${localStorage.getItem('applictionStudentId')}`)
    .then(res => {
      setEduDetails(res);
      setRadioPracticalTraining()
      console.log('Edu details', res);
     
      setShowForm(false);
    })
  })
 }

}




const toggleDanger = (p) => {

  setDeleteModal(true)
}

const handleDeletePermission = (data) => {

  console.log(data);

  remove(`EducationInformation/Delete/${data?.id}`)
  .then(res => {
    console.log(res);
    addToast(res, {
      appearance: 'error',
      autoDismiss: true
    })
    setDeleteModal(false);
    get(`EducationInformation/GetByStudentId/${localStorage.getItem('applictionStudentId')}`)
    .then(res => {
      setEduDetails(res);
      console.log('Edu details', res);
    })

  })

 
}

const handleUpdate = (id) => {
 

  console.log(id);
  get(`EducationInformation/Get/${id}`)
  .then(res => {

    console.log('one Data value found',res);
    setOneData(res);
    setProgramLevelLabel(res?.programLevel?.name);
    setProgramLevelValue(res?.programLevel?.id);
    setCountryLabel(res?.countryOfEducation?.name);
    setCountryValue(res?.countryOfEducation?.id);

    

    const z= res?.attendedInstitutionFrom;

    var utcDate = new Date(z);

    var localeDte = utcDate.toLocaleString("en-CA");
   
    const x = localeDte.split("T");
    const y= x[0].split(",");

    setFrom(y[0]);

    const a= res?.attendedInstitutionTo;

    var utcDate = new Date(a);

    var localeDte2 = utcDate.toLocaleString("en-CA");
   
    const b = localeDte2.split("T");
    const c= b[0].split(",");

    setTo(c[0]);


  })
  setShowForm(true);
   
   
}


  // redirect to Next Page
  const onNextPage = () => {
    
    history.push('/addTestScore',
     
    );
  };


  const onShow=()=>{
    setShowForm(true);
  
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
          <NavLink disabled  active={activetab === "5"} onClick={() => toggle("5")}>
            Test Score
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink disabled active={activetab === "6"} onClick={() => toggle("6")}>
            Experience
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink disabled active={activetab === "7"} onClick={() => toggle("7")}>
            Reference
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink disabled active={activetab === "8"} onClick={() => toggle("8")}>
            Personal Statement
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink disabled active={activetab === "9"} onClick={() => toggle("9")}>
            Others
          </NavLink>
        </NavItem>
       

      </Nav>

        <TabContent activeTab={activetab}>
          <TabPane tabId="4">

        <div className='row'>


        {
          eduDetails?.map((edu, i) => <div className='col-md-6 mt-2' key={edu.id} style={{ textAlign: "left" }}>
            <Card className="CampusCard shadow-style">
              <CardBody className="shadow">

                

              <Row>
                <Col md="4">
                    <h5> {edu?.nameOfInstitution}  </h5>
                    <h6> {edu?.attendedInstitutionFrom}</h6>
                    <p> {edu?.attendedInstitutionTo}</p>
                    <p> {edu?.finalGrade}</p>
                    <p> {edu?.programLevel?.name}</p>
                </Col>

                  <Col md="5">
                  
                    <p>Country of Education : {edu?.countryOfEducation?.name}</p>
                    <p>Institution Address : {edu?.instituteAddress}</p>
                    <p>institution Contact Number : {edu?.instituteContactNumber}</p>
                    <p>Qualification Subject : {edu?.qualificationSubject}</p>
               
                    
                </Col>

                  <Col md="3">
                  
               <div className="CampusCardAction">
                 <div className=""> 
                    <button type="button" className="btn btn-outline-info" onClick={() => handleUpdate(edu.id)}> <i className="fas fa-edit"></i> </button>
                 </div>

                 <div className=""> 
                    <button type="button" className="btn btn-outline-danger" onClick={() => toggleDanger(edu)} ><i className="fas fa-trash-alt"></i></button>
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
                  <Button onClick={()=> handleDeletePermission(edu)} color="danger">YES</Button>
                  <Button onClick={() => setDeleteModal(false)}>NO</Button>
                </ModalFooter>
             </Modal>

            </Card>
          </div>)

        }

        </div>

        

          {
            showForm &&

              <Form onSubmit={handleSubmit}   className="mt-5">

            <input
            type='hidden'
             name='studentId'
             id='studentId'
             value={localStorage?.getItem('applictionStudentId')}          
            />

          {
            (oneData?.id) ?

            <input type='hidden'
            name='id'
            id='id'
            value={oneData.id}
            />

            : 

            null
          }
        

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Name of Institution <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
             <Input
                type="text"
                name="nameOfInstitution"
                id="nameOfInstitution"
                defaultValue={oneData.nameOfInstitution}
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
                      name="attendedInstitutionFrom"
                      id="attendedInstitutionFrom"
                      defaultValue={from}
                      
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
                      name="attendedInstitutionTo"
                      id="attendedInstitutionTo"
                      defaultValue={to}
                      
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
                    name="programLevelId"
                    id="programLevelId"
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
                  name="qualificationSubject"
                  id="qualificationSubject"
                  placeholder="Enter qualification subject"
                  required
                  defaultValue={oneData.qualificationSubject}
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
                  name="duration"
                  id="duration"
                  placeholder="Enter duration"
                  required
                  defaultValue={oneData.duration}
                  
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
                  name="finalGrade"
                  id="finalGrade"
                  placeholder="Enter final grade"
                  required
                  defaultValue={oneData.finalGrade}

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
            name="countryOfEducationId"
            id="countryOfEducationId"
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
                    name="languageOfInstitution"
                    id="languageOfInstitution"
                    placeholder="Enter language of institution"
                    required
                    defaultValue={oneData.languageOfInstitution}
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
                    name="instituteContactNumber"
                    id="instituteContactNumber"
                    placeholder="Enter institute contact number"
                    required
                    defaultValue={oneData.instituteContactNumber}
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
                    name="instituteAddress"
                    id="instituteAddress"
                    placeholder="Enter Institute address"
                    required
                    defaultValue={oneData.instituteAddress}
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
          }

          {
            eduDetails?.length < 1 ? 
            <Form onSubmit={handleSubmit}   className="mt-5">

            <input
            type='hidden'
             name='studentId'
             id='studentId'
             value={localStorage?.getItem('applictionStudentId')}          
            />
        

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Name of Institution <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
             <Input
                type="text"
                name="nameOfInstitution"
                id="nameOfInstitution"
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
                      name="attendedInstitutionFrom"
                      id="attendedInstitutionFrom"
                      
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
                      name="attendedInstitutionTo"
                      id="attendedInstitutionTo"
                      
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
                    name="programLevelId"
                    id="programLevelId"
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
                  name="qualificationSubject"
                  id="qualificationSubject"
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
                  name="duration"
                  id="duration"
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
                  name="finalGrade"
                  id="finalGrade"
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
            name="countryOfEducationId"
            id="countryOfEducationId"
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
                    name="languageOfInstitution"
                    id="languageOfInstitution"
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
                    name="instituteContactNumber"
                    id="instituteContactNumber"
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
                    name="instituteAddress"
                    id="instituteAddress"
                    placeholder="Enter Institute address"
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


            :

          <>
          

          <FormGroup className="has-icon-left position-relative" style={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>

         
          <Button onClick={onShow} color="primary uapp-form-button">Add another</Button>
          <Button onClick={onNextPage} color="warning uapp-form-button float-right">Next Page</Button>
          </FormGroup>

          
          </>


          }

           
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>

            
        </div>
    );
};

export default EducationalInformation;