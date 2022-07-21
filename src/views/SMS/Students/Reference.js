import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import remove from '../../../helpers/remove';
import put from '../../../helpers/put';


const Reference = () => {

    const history = useHistory();
    

    const [activetab, setActivetab] = useState("7")
    const [deleteModal, setDeleteModal] = useState(false);

    const [country,setCountry] = useState([]);
    const [countryLabel, setCountryLabel] = useState("Select Country");
      const [countryValue, setCountryValue] = useState(0);

    const [reference,setReference] = useState([]);
    const [referenceLabel, setReferenceLabel] = useState("Select Reference type");
      const [referenceValue, setReferenceValue] = useState(0);
      const [refList, setRefList] = useState([]);
      const [showForm, setShowForm] = useState(false);
      const [oneData, setOneData] = useState({});

      const {addToast} = useToasts();
  

    const studentIdVal = localStorage.getItem('applictionStudentId');

    const method = localStorage.getItem('method');

    const [referenceError, setReferenceError] = useState(false);
    const [countryError, setCountryError] = useState(false);


    useEffect(()=>{

        get('CountryDD/index')
        .then(res => {
            console.log(res);
            setCountry(res);
        })

        get(`Reference/GetByStudentId/${studentIdVal}`)
        .then(res => {
            console.log(res);
            setRefList(res);
        })

        get(`ReferenceTypeDD/Index`)
        .then(res => {
            console.log(res);
            setReference(res);
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
        if (tab == "9") {
          history.push("/addOtherInformation");
        }

        
      };

      const handleRegisterStudent = (event) => {
        event.preventDefault();
      }


      const countryName = country?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));


           // select  Country
  const selectCountry = (label, value) => {

    setCountryError(false);
    setCountryLabel(label);
    setCountryValue(value);
    
   
   
  }


      const referenceName = reference?.map((ref) => ({
        label: ref.name,
        value: ref.id,
      }));


           // select  reference
  const selectReference = (label, value) => {

    setReferenceError(false);
    setReferenceLabel(label);
    setReferenceValue(value);
    
   
   
  }

      
  const toggleDanger = (id) => {
    console.log(id);
    localStorage.setItem('deleteReferenceId',id);
  
   setDeleteModal(true)
 }
 
 const handleDeletePermission = () => {
 
   
 
   
 remove(`Reference/Delete/${localStorage.getItem('deleteReferenceId')}`)
 .then(res => {
  console.log(res);
  addToast(res,{
    appearance: 'error',
    autoDismiss: true
  })
  setDeleteModal(false);
  get(`Reference/GetByStudentId/${studentIdVal}`)
  .then(res => {
      console.log(res);
      setRefList(res);
  })

 })
  
 
  
 }
 
 const handleUpdate = (id) => {
  
  setShowForm(true);
 
   console.log(id);
   get(`Reference/Get/${id}`)
   .then(res => {
    console.log(res);

    setOneData(res);
    setCountryLabel(res?.country?.name);
    setCountryValue(res?.country?.id);
    setReferenceLabel(res?.referenceType?.name);
    setReferenceValue(res?.referenceType?.id);
   })
 
  
    
    
 }
 


// redirect to Next Page
const onNextPage = () => {
  
  history.push('/addPersonalStatement'
   
  );
};


const onPreviousPage = () => {

  history.push('/addExperience'
   
  );

}



const onShow=()=>{
  setShowForm(true);


}

  const handleRegisterReference = (event) => {

    event.preventDefault();
    const subData = new FormData(event.target);

    if(countryValue ==0 ){
      setCountryError(true);
    }

    if(referenceValue == 0){
      setReferenceError(true);
    }

    else{

      if(oneData?.id){

        put('Reference/Update',subData)
        .then(res => {
          console.log(res);
          addToast(res?.data?.message,{
            appearance: 'success',
            autoDismiss: true
          })
          setShowForm(false);
          setOneData({});
          get(`Reference/GetByStudentId/${studentIdVal}`)
          .then(res => {
              console.log(res);
              setRefList(res);
              setReferenceLabel('Select Reference Type');
              setReferenceValue(0);
              setCountryLabel('Select Country');
              setCountryValue(0);
          })
  
        })
  
      }
  
      else{
        post('Reference/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
  
          setShowForm(false);
          addToast(res?.data?.message,{
            appearance: 'success',
            autoDismiss: true
          })
          get(`Reference/GetByStudentId/${studentIdVal}`)
          .then(res => {
              console.log(res);
              setRefList(res);
              setReferenceLabel('Select Reference Type');
              setReferenceValue(0);
              setCountryLabel('Select Country');
              setCountryValue(0);
          })
  
  
        }
  
      })
      }

    }

    

  }



    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Reference Information</h3>
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

           <NavLink   active={activetab === "7"} onClick={() => toggle("7")}>
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
      refList?.map((ref, i) => <div className='col-md-6 mt-2' key={ref.id} style={{ textAlign: "left" }}>
      <Card className="CampusCard shadow-style">
        <CardBody className="shadow">

        

        <Row>
          <Col md="4">
              <h5>Reference Name: {ref?.referenceName}   </h5>
              
              <p>Reference Type: {ref?.referenceType?.name}  </p>

              <p>Email: {ref?.emailAddress}  </p>
             
              
          </Col>

            <Col md="5">
              <p>Address Line : {ref?.addressLine}  </p>
              <p>Institute Company : {ref?.institute_Company}  </p>
             
             
         
              
          </Col>

          <Col md="3">

          <div className="CampusCardAction">
          <div className=""> 
             <button type="button" className="btn btn-outline-info" onClick={() => handleUpdate(ref.id)}> <i className="fas fa-edit"></i> </button>
          </div>

          <div className=""> 
             <button type="button" className="btn btn-outline-danger" onClick={()=>toggleDanger(ref.id)} ><i className="fas fa-trash-alt"></i></button>
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
        (showForm ||   refList?.length < 1) ?  

        <Form onSubmit={handleRegisterReference} className="mt-5">

            
                
        <input 
        type='hidden'
        name='studentId'
        id='studentId'
        value={studentIdVal}
        />

        {
          (oneData?.id) ?

          <input
          type='hidden'
          name='id'
          id='id'
          value={oneData?.id}
          />

          :

          null

        }

        
        <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
             Reference Type <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
          <Select
            options={referenceName}
            value={{ label: referenceLabel, value: referenceValue }}
            onChange={(opt) => selectReference(opt.label, opt.value)}
            name="referenceTypeId"
            id="referenceTypeId"
            required


          />
          {
            referenceError && 
            <span className='text-danger'>Select Reference Type</span>
          }

          
        </Col>
      </FormGroup>

      <FormGroup row className="has-icon-left position-relative">
      <Col md="2">
        <span>
          Reference Name <span className="text-danger">*</span>{" "}
        </span>
      </Col>
      <Col md="6">
       <Input
          type="text"
          name="referenceName"
          id="referenceName"
          placeholder="Enter reference name"
          required
          defaultValue={oneData?.referenceName}
        />

   
      </Col>
    </FormGroup>

      <FormGroup row className="has-icon-left position-relative">
      <Col md="2">
        <span>
          Institute/Company <span className="text-danger">*</span>{" "}
        </span>
      </Col>
      <Col md="6">
       <Input
          type="text"
          name="institute_Company"
          id="institute_Company"
          placeholder="Enter institute/company"
          required
          defaultValue={oneData?.institute_Company}
        />

   
      </Col>
    </FormGroup>

      <FormGroup row className="has-icon-left position-relative">
      <Col md="2">
        <span>
          Phone Number <span className="text-danger">*</span>{" "}
        </span>
      </Col>
      <Col md="6">
       <Input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter phone number"
          required
          defaultValue={oneData?.phoneNumber}
        />

   
      </Col>
    </FormGroup>

      <FormGroup row className="has-icon-left position-relative">
      <Col md="2">
        <span>
          Email Address <span className="text-danger">*</span>{" "}
        </span>
      </Col>
      <Col md="6">
       <Input
          type="text"
          name="emailAddress"
          id="emailAddress"
          placeholder="Enter email address"
          required
          defaultValue={oneData?.emailAddress}
        />

   
      </Col>
    </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
             Country <span className="text-danger">*</span>{" "}
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
          {
            countryError && 
            <span className='text-danger'>Select Country</span>
          }

          {/* <div className="form-control-position">
                              <User size={15} />
                          </div> */}
        </Col>
      </FormGroup>

      <FormGroup row className="has-icon-left position-relative">
      <Col md="2">
        <span>
          Adress Line <span className="text-danger">*</span>{" "}
        </span>
      </Col>
      <Col md="6">
       <Input
          type="text"
          name="addressLine"
          id="addressLine"
          placeholder="Enter address line"
          required
          defaultValue={oneData?.addressLine}
        />

   
      </Col>
    </FormGroup>
    
      <FormGroup row className="has-icon-left position-relative">
      <Col md="2">
        <span>
          City <span className="text-danger">*</span>{" "}
        </span>
      </Col>
      <Col md="6">
       <Input
          type="text"
          name="city"
          id="city"
          placeholder="Enter city"
          required
          defaultValue={oneData?.city}
        />


   
      </Col>
    </FormGroup>


      <FormGroup row className="has-icon-left position-relative">
      <Col md="2">
        <span>
          State <span className="text-danger">*</span>{" "}
        </span>
      </Col>
      <Col md="6">
       <Input
          type="text"
          name="state"
          id="state"
          placeholder="Enter state"
          required
          defaultValue={oneData?.state}
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


    :
       
      

      
      

    <FormGroup className="has-icon-left position-relative" style={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>

   
    <Button onClick={onShow} color="primary uapp-form-button">Add another</Button>
   
    </FormGroup>

       }

       <FormGroup className="has-icon-left position-relative" style={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>

       
       <Button onClick={onPreviousPage}   className="ms-md-1 mt-3 btn-warning">
       <i className="fas fa-arrow-left-long me-1"></i>
       Previous</Button>
       <Button onClick={onNextPage} className="me-md-1 mt-3 btn-warning"
       disabled = {refList?.length <=0 ? true : false}
       >

       Next Page
       <i className="fas fa-arrow-right-long ms-1"></i>
       </Button>
       </FormGroup>
      

      

   
           
       
      </CardBody>
    </Card>
        
            
        </div>
    );
};

export default Reference;