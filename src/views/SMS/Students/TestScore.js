import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label, Row, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import Select from "react-select";
import { useHistory, useLocation } from 'react-router-dom';
import get from '../../../helpers/get';
import { useToasts } from "react-toast-notifications";
import post from '../../../helpers/post';
import remove from '../../../helpers/remove';

import put from '../../../helpers/put';
import ButtonForFunction from '../Components/ButtonForFunction';

const TestScore = () => {


    const [activetab, setActivetab] = useState("5");

    const [greData, setGreData] = useState({});
    const [gmatData, setGmatData] = useState({});
    const [success, setSuccess] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteModal2, setDeleteModal2] = useState(false);
    const [deleteModal3, setDeleteModal3] = useState(false);
  
    // English Course Names

    const [ielts, setIelts] = useState({});
    const [duolingo, setDuolingo] = useState({});
    const [toefl, setToefl] = useState({});
    const [functions, setFunctions] = useState({});
    const [gcse, setGcse] = useState({});
    const [pearson, setPearson] = useState({});
    const [others, setOthers] = useState({});
    const [pte,setPte] = useState({}); 

    const [ELqualificationLabel, setELQualificationLabel] = useState('Select');
    const [ELqualificationValue, ELsetQualificationValue] = useState(0);

    const {addToast} = useToasts();

    const [courseInfo, setCourseInfo] = useState([]);

    const [oneData, setOneData] = useState({});
  
    const [add, setAdd] = useState(false);

    const [updateIelts, setUpdateIelts] = useState(false);
    const [updateDuolingo, setUpdateDuolingo] = useState(false);
    const [updateToefl, setUpdateToefl] = useState(false);
    const [updateFunctions, setUpdateFunctions] = useState(false);
    const [updateGcse, setUpdateGcse] = useState(false);
    const [updatePearson, setUpdatePearson] = useState(false);
    const [updateOther, setUpdateOther] = useState(false);
    const [updatePte, setUpdatepte] = useState(false);
 
    const [qualificationLabel, setQualificationLabel] = useState('NO');
    const [qualificationValue, setQualificationValue] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
    const method = localStorage.getItem('method');

    const [testError, setTestError] = useState(false);

    const handleDate = e =>{
      var datee = e;
      var utcDate = new Date(datee);
      var localeDate = utcDate.toLocaleString("en-CA");
      const x = localeDate.split(",")[0];
      return x;
    }
    
    // Test Options

    const testOptions = [

      {
        id: 1,
        name: 'Yes'
      },
      
      {
        id: 2,
        name: 'No'

      }

    ];

    // Test Name Options

    const testNameOptions = [

      {
        id: 1,
        name: 'IELTS'
      },

      {
        id: 2,
        name: 'DUOLINGO'
      },

      {
        id: 3,
        name: 'TOEFL'
      },

      {
        id: 4,
        name: 'FUNCTION SKILLS'
      },

      {
        id: 5,
        name: 'GCSE'
      },

      {
        id: 6,
        name: 'PEARSON'
      },

      {
        id: 7,
        name: 'OTHER SCORE'
      },

      {
        id: 8,
        name: 'PTE SCORE'
      }

    ]

    useEffect(()=>{

      get(`GreScore/GetbyStudent/${localStorage.getItem('applictionStudentId')}`)
      .then(res =>{
        console.log('fetch GRE data form API', res);
        setGreData(res);
      })

      get(`GmatScore/GetByStudent/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
        console.log('Fetching Gmat Score Form Api',res);
        setGmatData(res);
      })

      get(`Ielts/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
        
        setIelts(res);
      })

      get(`Duolingo/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
        console.log('duolingo data', res);
        setDuolingo(res);
      })

      get(`Toefl/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
      
        setToefl(res);
      })

      get(`FunctionalSkill/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
       
        setFunctions(res);
      })

      get(`Gcse/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
     
        setGcse(res);
      })

      get(`Pearson/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
       
        setPearson(res);
      })

      get(`Other/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
        
        setOthers(res);
      })

      get(`Pte/Index/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
        console.log('pte Data ',res);
        setPte(res);
      })

    },[success])



    const backToStudentProfile = () => {
      history.push(`/studentProfile/${localStorage.getItem('applictionStudentId')}`);
  }
  


    const handleDeleteGreData = (data) => {

      console.log(data);

      remove(`GreScore/Delete/${data?.id}`)
      .then(res => {
     
        addToast(res,{
          appearance: 'error',
          autoDismiss: true
        })
        setDeleteModal2(false);
        setSuccess(!success);
      })
      
    }


    const handleDeleteGmatData = (data) => {

      console.log(data);

      remove(`GmatScore/Delete/${data?.id}`)
      .then(res => {
        console.log(res);
        addToast(res,{
          appearance: 'error',
          autoDismiss: true
        })
        setDeleteModal3(false);
        setSuccess(!success);
      })

    }


    // on Close Modal
const closeModal = () => {

  setModalOpen(false);


}


const closeModal2= () => {
 
  setModal2Open(false);


}


const closeModal3= () => {
  
  setModal3Open(false);


}

    const goBackward = () => {
      history.push('/addStudentEducationalInformation');
    }

    const handleForward = () => {
      history.push('/addExperience');
    }

    const toggleDanger = (p) => {

      localStorage.setItem('studentTestScroreId',p.studentTestScroreId);

      setDeleteModal(true)
    }

    const toggleDanger2 = (p) => {

      console.log(p);

      setDeleteModal2(true);
    }

    const toggleDanger3 = (p) => {

      console.log(p);

      setDeleteModal3(true);
    }

 

   

    const qualificationOptions = testNameOptions?.map((qual) => ({
      label: qual.name,
      value: qual.id,
    }));
  
  
        //  select  Student type
  const selectQualification = (label, value) => {
    setTestError(false);
    setELQualificationLabel(label);
    ELsetQualificationValue(value);
  
    setModalOpen(true);

    localStorage.setItem('qualificationValue', value);

  
  }

  const handleEditIelts = (data) => {

     setModalOpen(true);
     setELQualificationLabel('IELTS');
     ELsetQualificationValue(1);
     setUpdateIelts(true);
  
  }

  const handleEditDuolingo = (data) => {

     setModalOpen(true);
     setELQualificationLabel('DUOLINGO');
     ELsetQualificationValue(2);
     setUpdateDuolingo(true);

    
  }

  const handleEditToefl = (data) => {

     setModalOpen(true);
     setELQualificationLabel('TOEFL');
     ELsetQualificationValue(3);
     setUpdateToefl(true);

    
  }

  const handleEditFunctions = (data) => {

     setModalOpen(true);
     setELQualificationLabel('FUNCTION SKILLS');
     ELsetQualificationValue(4);
     setUpdateFunctions(true);

    
  }

  const handleEditGcse = (data) => {

     setModalOpen(true);
     setELQualificationLabel('GCSE');
     ELsetQualificationValue(5);
     setUpdateGcse(true);

    
  }

  const handleEditPearson = (data) => {

     setModalOpen(true);
     setELQualificationLabel('PEARSON');
     ELsetQualificationValue(6);
     setUpdatePearson(true);

    
  }

  const handleEditOthers = (data) => {

     setModalOpen(true);
     setELQualificationLabel('OTHER SCORE');
     ELsetQualificationValue(7);
     setUpdateOther(true);

    
  }

  const handleEditPte = (data) => {

     setModalOpen(true);
     setELQualificationLabel('PTE SCORE');
     ELsetQualificationValue(8);
     setUpdatepte(true);

    
  }

  const handleEdit2 = (data) => {

    setModal2Open(true);

    console.log(data);

  }


  const handleEdit3 = (data) => {

    setModal3Open(true);

    console.log(data);

  }


  const showGREForm = () => {
    setModal2Open(true);
 
  }

  const showGMATForm = () => {
    setModal3Open(true);
    
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const subData = new FormData(event.target);
     if(ELqualificationLabel == 'IELTS'){

      post('Ielts/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
          
        }
      })

     }

     else if(ELqualificationLabel == 'DUOLINGO'){

      post('Duolingo/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
         
        }
      })

     }

     else if(ELqualificationLabel == 'TOEFL'){

      post('Toefl/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
          
        }
      })

     }

     else if(ELqualificationLabel == 'FUNCTION SKILLS'){

      post('FunctionalSkill/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
          
  
       
        }
      })

     }

     else if(ELqualificationLabel == 'GCSE'){

      post('Gcse/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
          
  
       
        }
      })

     }

     else if(ELqualificationLabel == 'PEARSON'){

      post('Pearson/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
          
  
       
        }
      })

     }

     else if(ELqualificationLabel == 'OTHER SCORE'){

      post('Other/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
          
  
       
        }
      })

     }

     else{
 
      post('PTE/Create',subData)
      .then(res => {
        console.log(res);
        if(res?.status == 200){
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true
          })
          setSuccess(!success);
          setAdd(false);
          setELQualificationLabel('Select');
          ELsetQualificationValue(0);
          setQualificationLabel('NO');
          setQualificationValue(0);
          setModalOpen(false);
          
  
       
        }
      })

     }

     

    
  }

  console.log(qualificationLabel, qualificationValue,'dummy');
  




    const testSignleOptions = testOptions?.map((test) => ({
      label: test.name,
      value: test.id,
    }));
  
  
        //  select  quakification type
  const selectQualificationType = (label, value) => {
  setQualificationLabel(label);
  setQualificationValue(value);

  // console.log(label, value);
  
  }


    const history = useHistory();

    

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



      // Gre data update

      const handleSubmitUpdateGre = (event) =>{

        event.preventDefault();

        const subData  = new FormData(event.target);
        

        for(var x of subData.values()){
          console.log(x);
        }

        if(greData?.id){

          put(`GreScore/Update`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoComplete: true
              })
              setSuccess(!success);
              setModal2Open(false);
  
            }
          })

        }

        else{

          post(`GreScore/Create`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoComplete: true
              })
              setSuccess(!success);
              setModal2Open(false);
  
            }
          })


        }

      
      }


      // GMAT data update

      const handleSubmitUpdateGmat = (event) =>{

        event.preventDefault();

        const subData  = new FormData(event.target);
        

        for(var x of subData.values()){
          console.log(x);
        }

        if(gmatData?.id){

          put(`GmatScore/Update`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoComplete: true
              })
              setSuccess(!success);
              setModal3Open(false);
  
            }
          })

        }

        else{

          post(`GmatScore/Create`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoComplete: true
              })
              setSuccess(!success);
              setModal3Open(false);
  
            }
          })

        }

     
      }

      const handleAdd = () => {
       
        setAdd(true);
       
      }
   


    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">English Language / Test Score</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToStudentProfile}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to StudentProfile
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

           <NavLink disabled  active={activetab === "6"} onClick={() => toggle("6")}>
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

       

    {
      courseInfo?.length <=0 && 
      <div className='container test-score-div-1-style mt-4'>
      <span className='test-score-span-1-style'>Do You Hold an English Language Qualification Such as GCSE English Language, IELTS, Pearson etc ?</span>
      </div>
    }

        <div className='row mt-3'>



  <FormGroup row className="has-icon-left position-relative ms-md-1">
  <Col md="2">
    <span>
      Please Select <span className="text-danger">*</span>{" "}
    </span>
  </Col>
  <Col md="6">
  <Select
        options={testSignleOptions}
        value={{ label: qualificationLabel, value: qualificationValue }}
        onChange={(opt) => selectQualificationType(opt.label, opt.value)}
        name=""
        id=""
        required

      />

    
  </Col>
</FormGroup>

       {
        qualificationLabel == 'Yes'  ?

        <>


          <FormGroup row className="has-icon-left position-relative ms-md-1">
          <Col md="2">
            <span>
              Please Select the Type of English Language Qualification <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">
          <Select
          options={qualificationOptions}
                    value={{ label: ELqualificationLabel, value: ELqualificationValue }}
                    onChange={(opt) => selectQualification(opt.label, opt.value)}
                    name="examType"
                    id="examType"
                   
             
              required

            />

            {
              testError && 

              <span className='text-danger'>Enlish Language Test Must Be Selected </span>
            }

            
          </Col>
        </FormGroup>

       

        </>

   
        :

        null
        

       }

       <br/>

       <div>

<Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal">

  <ModalHeader>Add English Test Score</ModalHeader>
 
  <ModalBody>

  <Form onSubmit={handleSubmit}>

{

ELqualificationLabel == 'IELTS' && 

 <>

<input
type='hidden'
name='studentId'
id='studentId'
value={localStorage.getItem('applictionStudentId')}
/>  

{
  updateIelts ? 
  <input
  type='hidden'
  name='id'
  id='id'
  value={ielts?.id}
  />
  :
  null
}


<FormGroup row className="has-icon-left position-relative">
 <Col md="2">
   <span> Overall
     <span className="text-danger">*</span>{" "}
   </span>
 </Col>
 <Col md="6">



   <Input
     
     type='number'
       name='overall'
       id='overall'
       defaultValue={ielts?.overall}
     
   />


 </Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
 <Col md="2">
   <span> Speaking
     <span className="text-danger">*</span>{" "}
   </span>
 </Col>
 <Col md="6">



   <Input
     
     type='number'
       name='speaking'
       id='speaking'
       defaultValue={ielts?.speaking}
     
   />


 </Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
 <Col md="2">
   <span> Reading
     <span className="text-danger">*</span>{" "}
   </span>
 </Col>
 <Col md="6">



   <Input
     
     type='number'
       name='reading'
       id='reading'
       defaultValue={ielts?.reading}
     
   />


 </Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
 <Col md="2">
   <span> Writing
     <span className="text-danger">*</span>{" "}
   </span>
 </Col>
 <Col md="6">



   <Input
     
     type='number'
       name='writing'
       id='writing'
       defaultValue={ielts?.writing}
     
   />


 </Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
 <Col md="2">
   <span> Listening
     <span className="text-danger">*</span>{" "}
   </span>
 </Col>
 <Col md="6">



   <Input
     
     type='number'
       name='listening'
       id='listening'
       defaultValue={ielts?.listening}
     
   />


 </Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
 <Col md="2">
   <span> Exam Date
     <span className="text-danger">*</span>{" "}
   </span>
 </Col>
 <Col md="6">



   <Input
     
     type='date'
     name='examDate'
     id='examDate'
     defaultValue={handleDate(ielts?.examDate)}
     
   />


 </Col>
</FormGroup>


<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>

</>



}


{

ELqualificationLabel == 'TOEFL' && 

<>



<input
type='hidden'
name='studentId'
id='studentId'
value={localStorage.getItem('applictionStudentId')}
/>  


{
  updateToefl ? 
  <input
  type='hidden'
  name='id'
  id='id'
  value={toefl?.id}
  />
  :
  null
}


<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Overall
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='overall'
id='overall'
defaultValue={toefl?.overall}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Speaking
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='speaking'
id='speaking'
defaultValue={toefl?.speaking}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Reading
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='reading'
id='reading'
defaultValue={toefl?.reading}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Writing
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='writing'
id='writing'
defaultValue={toefl?.writing}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Listening
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='listening'
id='listening'
defaultValue={toefl?.listening}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Exam Date
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='date'
name='examDate'
id='examDate'
defaultValue={handleDate(toefl?.examDate)}

/>


</Col>
</FormGroup>


<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>





</>

}


{

ELqualificationLabel == 'FUNCTION SKILLS' && 

<>



<input
type='hidden'
name='studentId'
id='studentId'
value={localStorage.getItem('applictionStudentId')}
/>  



<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Overall
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='overall'
id='overall'
defaultValue={functions?.overall}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Speaking
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='speaking'
id='speaking'
defaultValue={functions?.speaking}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Reading
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='reading'
id='reading'
defaultValue={functions?.reading}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Writing
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='writing'
id='writing'
defaultValue={functions?.writing}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Listening
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='listening'
id='listening'
defaultValue={functions?.listening}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Exam Date
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='date'
name='examDate'
id='examDate'
defaultValue={handleDate(functions?.examDate)}

/>


</Col>
</FormGroup>


<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>





</>

}

{

ELqualificationLabel == 'GCSE' &&

<>



<FormGroup row className="has-icon-left position-relative">
<Col md="2">
 <span> Result
   <span className="text-danger">*</span>{" "}
 </span>
</Col>
<Col md="6">

  <input
  type='hidden'
  name='studentId'
  id='studentId'
  value={localStorage.getItem('applictionStudentId')}
  />




 <Input
   
   type='number'
     name='result'
     id='result'
     defaultValue={gcse?.result}
   
 />


</Col>
</FormGroup>


<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>

</>

}

{

ELqualificationLabel == 'PEARSON' &&

<>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
 <span> Result
   <span className="text-danger">*</span>{" "}
 </span>
</Col>
<Col md="6">


<input
  type='hidden'
  name='studentId'
  id='studentId'
  value={localStorage.getItem('applictionStudentId')}
  />



 <Input
   
   type='number'
     name='result'
     id='result'
     defaultValue={pearson?.result}
   
 />


</Col>
</FormGroup>

<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>

</>

}

{

ELqualificationLabel == 'DUOLINGO' &&

<>

<FormGroup row className="has-icon-left position-relative">
<Col md="3">
 <span> Literacy
   <span className="text-danger">*</span>{" "}
 </span>
</Col>
<Col md="6">

<input
  type='hidden'
  name='studentId'
  id='studentId'
  value={localStorage.getItem('applictionStudentId')}
  />



 <Input
   
   type='number'
     name='literacy'
     id='literacy'
     defaultValue={duolingo?.leteracy}
   
 />


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="3">
 <span> Comprehension
   <span className="text-danger">*</span>{" "}
 </span>
</Col>
<Col md="6">



 <Input
   
   type='number'
     name='comprehension'
     id='comprehension'
     defaultValue={duolingo?.comprehension}
     
   
 />


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="3">
 <span> Conversation
   <span className="text-danger">*</span>{" "}
 </span>
</Col>
<Col md="6">



 <Input
   
   type='number'
     name='conversation'
     id='conversation'
     defaultValue={duolingo?.conversation}
   
 />


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="3">
 <span> Production
   <span className="text-danger">*</span>{" "}
 </span>
</Col>
<Col md="6">



 <Input
   
   type='number'
     name='production'
     id='production'
     defaultValue={duolingo?.production}
   
 />


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="3">
 <span> Exam Date
   <span className="text-danger">*</span>{" "}
 </span>
</Col>
<Col md="6">



 <Input
   
   type='date'
     name='examDate'
     id='examDate'
     defaultValue={handleDate(duolingo?.examDate)}
   
 />


</Col>
</FormGroup>

<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>

</>

}

{

ELqualificationLabel == 'OTHER SCORE' &&

<>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Test Name
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">

<input
  type='hidden'
  name='studentId'
  id='studentId'
  value={localStorage.getItem('applictionStudentId')}
  />



<Input

type='text'
name='testName'
id='testName'
defaultValue={others?.testName}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Score Overall
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='scoreOverall'
id='scoreOverall'
defaultValue={others?.scoreOverall}

/>


</Col>
</FormGroup>

<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>


</>

}


{

ELqualificationLabel == 'PTE SCORE' && 

<>

<input
  type='hidden'
  name='studentId'
  id='studentId'
  value={localStorage.getItem('applictionStudentId')}
  />

 

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Overall
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='overall'
id='overall'
defaultValue={pte?.overall}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Speaking
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='speaking'
id='speaking'
defaultValue={pte?.speaking}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Reading
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='reading'
id='reading'
defaultValue={pte?.reading}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Writing
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='writing'
id='writing'
defaultValue={pte?.writing}

/>


</Col>
</FormGroup>

<FormGroup row className="has-icon-left position-relative">
<Col md="2">
<span> Listening
<span className="text-danger">*</span>{" "}
</span>
</Col>
<Col md="6">



<Input

type='number'
name='listening'
id='listening'
defaultValue={pte?.listening}

/>


</Col>
</FormGroup>




<FormGroup row
className="has-icon-left position-relative"
style={{ display: "flex", justifyContent: "end" }}
>

<Col md="5">

<ButtonForFunction
name={'Save'}
className={'mr-1 mt-3 badge-primary'}
type={'submit'}
/>

</Col>


</FormGroup>


</>


}

</Form> 

    
   
  </ModalBody>

</Modal>

</div>

  {/* Showing English Test Score Forms */}

        </div>

{/* Showing English Test Result In Card */}

      <div className='row mt-3'>
 
      <div className="hedding-titel d-flex justify-content-between ms-md-2 mb-3">
                    <div>
                    <h5> <b>English Test Score</b> </h5>
                     
                    <div className="bg-h"></div>
                    </div>
                   
                    </div>
 
                {
                  (ielts?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>IELTS Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditIelts}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Overall: {ielts?.overall}</h6>
               <h6>Speaking: {ielts?.speaking}</h6>
               <h6>reading: {ielts?.reading}</h6>
               <h6>Writing: {ielts?.writing}</h6>
               <h6>Listening: {ielts?.listening}</h6>
               <h6>Exam Date: {handleDate(ielts?.examDate)}</h6>
          
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }


                {
                  (duolingo?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>DUOLINGO Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditDuolingo}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Literacy: {duolingo?.leteracy}</h6>
               <h6>Comprehension: {duolingo?.comprehension}</h6>
               <h6>Conversation: {duolingo?.conversation}</h6>
               <h6>Production: {duolingo?.production}</h6>
               <h6>Exam Date: {handleDate(duolingo?.examDate)}</h6>
          
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }

                {
                  (toefl?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>TOEFL Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditToefl}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Overall: {toefl?.overall}</h6>
               <h6>Speaking: {toefl?.speaking}</h6>
               <h6>reading: {toefl?.reading}</h6>
               <h6>Writing: {toefl?.writing}</h6>
               <h6>Listening: {toefl?.listening}</h6>
               <h6>Exam Date: {handleDate(toefl?.examDate)}</h6>
          
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }
                {
                  (functions?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>Functional Skill Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditFunctions}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Overall: {functions?.overall}</h6>
               <h6>Speaking: {functions?.speaking}</h6>
               <h6>reading: {functions?.reading}</h6>
               <h6>Writing: {functions?.writing}</h6>
               <h6>Listening: {functions?.listening}</h6>
               <h6>Exam Date: {handleDate(functions?.examDate)}</h6>
          
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }

                {
                  (gcse?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>GCSE Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditGcse}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Result: {gcse?.result}</h6>
              
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }

                {
                  (pearson?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>PEARSON Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditPearson}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Result: {pearson?.result}</h6>
              
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }

                {
                  (others?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>Other Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditOthers}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Test Name: {others?.testName}</h6>
               <h6>Overall Score: {others?.scoreOverall}</h6>
              
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }
                {
                  (pte?.id) ?
               
                  

                    <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>PTE Score</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button"  className="btn btn-outline-info" onClick={handleEditPte}> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger"  ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Overall: {pte?.overall}</h6>
               <h6>Speaking: {pte?.speaking}</h6>
               <h6>Reading: {pte?.reading}</h6>
               <h6>Writing: {pte?.writing}</h6>
               <h6>Listening: {pte?.listening}</h6>
              
               </CardBody>
 
               <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>

            :

            null
          }



      </div>




       



 
        <section id='root'>
       
        <div className='row mt-3' >

        <div className="hedding-titel d-flex justify-content-between ms-md-2 mb-3">
                    <div>
                    <h5> <b>GRE & GMAT Score</b> </h5>
                     
                    <div className="bg-h"></div>
                    </div>
                   

                    </div>

        {

          (greData?.id) ? 

        <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
             <Card className="CampusCard shadow-style test-score-card-style">
               <CardBody className="shadow">
 
               <div className='d-flex justify-content-space-between'>
               <h5>GRE Result</h5>
               <div className="CampusCardAction">
               <div className=""> 
               <button type="button" onClick={()=> handleEdit2(greData)} className="btn btn-outline-info"> <i className="fas fa-edit"></i> </button>
               </div>
 
               <div className=""> 
               <button type="button" className="btn btn-outline-danger" onClick={()=>toggleDanger2(greData)} ><i className="fas fa-trash-alt"></i></button>
               </div>
              </div>
 
               </div>
 
               <h6>Quantitative Score: {greData?.quantitativeScore}</h6>
               <h6>Quantitative Rank: {greData?.quantitativeRank}</h6>
               <h6>Verbal Score: {greData?.verbalScore}</h6>
               <h6>Verbal Rank: {greData?.verbalRank}</h6>
               <h6>Writing Score: {greData?.writingScore}</h6>
               <h6>Writing Rank: {greData?.writingRank}</h6>
               <h6>Exam Date: {handleDate(greData?.greExamDate)}</h6>
 
                  
           
               </CardBody>
 
               <Modal isOpen={deleteModal2} toggle={() => setDeleteModal2(!deleteModal2)} className="uapp-modal">
                 <ModalBody>
                   <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                 </ModalBody>
 
                 <ModalFooter>
                   <Button  color="danger" onClick={()=>handleDeleteGreData(greData)}>YES</Button>
                   <Button onClick={() => setDeleteModal2(false)}>NO</Button>
                 </ModalFooter>
              </Modal>
 
          
 
              
 
             </Card>
 
 
           </div>
 
     

         :

         null

      }

      {

        (gmatData?.id) ? 

        <div className='col-md-6 mt-2' style={{ textAlign: "left" }}>
        <Card className="CampusCard shadow-style test-score-card-style">
          <CardBody className="shadow">

          <div className='d-flex justify-content-space-between'>
          <h5>GMAT Result</h5>
          <div className="CampusCardAction">
          <div className=""> 
          <button type="button" onClick={()=> handleEdit3(gmatData)} className="btn btn-outline-info"> <i className="fas fa-edit"></i> </button>
          </div>

          <div className=""> 
          <button type="button" className="btn btn-outline-danger" onClick={()=>toggleDanger3(gmatData)} ><i className="fas fa-trash-alt"></i></button>
          </div>
         </div>

          </div>

          <h6>Quantitative Score: {gmatData?.quantitativeScore}</h6>
          <h6>Quantitative Rank: {gmatData?.quantitativeRank}</h6>
          <h6>Verbal Score: {gmatData?.verbalScore}</h6>
          <h6>Verbal Rank: {gmatData?.verbalRank}</h6>
          <h6>Total Score: {gmatData?.totalScore}</h6>
          <h6>Total Rank: {gmatData?.totalRank}</h6>
          <h6>Writing Score: {gmatData?.writingScore}</h6>
          <h6>Writing Rank: {gmatData?.writingRank}</h6>
          <h6>Exam Date: {handleDate(gmatData?.gmatExamDate)}</h6>

             
      
          </CardBody>

          <Modal isOpen={deleteModal3} toggle={() => setDeleteModal3(!deleteModal3)} className="uapp-modal">
            <ModalBody>
              <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
            </ModalBody>

            <ModalFooter>
              <Button  color="danger" onClick={()=>handleDeleteGmatData(gmatData)}>YES</Button>
              <Button onClick={() => setDeleteModal3(false)}>NO</Button>
            </ModalFooter>
         </Modal>

     

         

        </Card>


      </div>

      :

      null



      }

      </div>

     </section>

        

   

      {
        !(greData?.id ) ?

        <>

<div className='container test-score-div-1-style mt-4'>
      <span className='test-score-span-1-style'>GRE Information Not Found. Add Gre Information.</span>
      </div>

        <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

           
 
             
            
        <Button.Ripple
          color="primary"
          onClick={showGREForm}
          
         
          className="ms-md-2 mt-3"
         
        >
          Add GRE
        </Button.Ripple>

    

    </FormGroup>

    </>

    :


   null
    

      }

      
 
    {

      (gmatData?.id) ?
      
      null

      :

      <>

<div className='container test-score-div-1-style mt-4'>
      <span className='test-score-span-1-style'>GMAT Information Not Found. Add GMAT Information.</span>
      </div>

      <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

           
 
             
            
      <Button.Ripple
        color="primary"
        onClick={showGMATForm}
        
       
        className="ms-md-2 mt-3"
       
      >
        Add GMAT
      </Button.Ripple>

  

  </FormGroup>

  </>

    }

  {/* MOdals Start Section */}




        <TabContent activeTab={activetab}>
        <TabPane tabId="5">


    <div>

    <Modal isOpen={modal2Open} toggle={closeModal2} className="uapp-modal">
      {
        (greData?.id) ? 
        <ModalHeader>Update GRE Result</ModalHeader>
        :
        <ModalHeader>Add GRE Result</ModalHeader>
      }
      <ModalBody>
        <Form onSubmit={handleSubmitUpdateGre} >
         
           
          
              <Input
                type="hidden"
                name="studentId"
                id="studentId"
                value={localStorage.getItem('applictionStudentId')}
               
              />

             {
              (greData?.id) ? 

              <Input
              type="hidden"
              name="id"
              id="id"
              value={greData?.id}
             
            />
            : 
            null

             }
              
                  
                
                 

                  <input
                  type='hidden'
                  name='haveGreExam'
                  id='haveGreExam'
                  checked={true}
                  />


                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      GRE Exam Date <span className="text-danger">*</span>{" "}
                    
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='date'
                      id='greExamDate'
                      name='greExamDate'
                      required
                        defaultValue={handleDate(greData?.greExamDate)}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Verbal Score <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='verbalScore'
                      name='verbalScore'
                      required
                      defaultValue={greData?.verbalScore}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Verbal Rank <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='verbalRank'
                      name='verbalRank'
                      required
                      defaultValue={greData?.verbalRank}
          
                    />
          
          
                  </Col>
                </FormGroup>


                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Quantitative Score <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='quantitativeScore'
                      name='quantitativeScore'
                      required
                      defaultValue={greData?.quantitativeScore}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Quantitative Rank <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='quantitativeRank'
                      name='quantitativeRank'
                      required
                      defaultValue={greData?.quantitativeRank}
          
                    />
          
          
                  </Col>
                </FormGroup>


           
                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Writing Score <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='writingScore'
                      name='writingScore'
                      required
                      defaultValue={greData?.writingScore}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Writing Rank <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='writingRank'
                      name='writingRank'
                      required
                      defaultValue={greData?.writingRank}
          
                    />
          
          
                  </Col>
                </FormGroup>


           
  
       

          <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

            <Button color="danger" className="mr-1 mt-3" onClick={closeModal2}>Close</Button>

            
           
              <Button.Ripple
                color="warning"
                type="submit"
                className="mr-1 mt-3"
               
              >
                Submit
              </Button.Ripple>

          

          </FormGroup>

        </Form>
      </ModalBody>

    </Modal>
    <div>

    </div>
  </div>


  

    <div>

    <Modal isOpen={modal3Open} toggle={closeModal3} className="uapp-modal">
      {
        (gmatData?.id) ? 
        <ModalHeader>Update GMAT Result</ModalHeader>
        :
        <ModalHeader>Add GMAT Result</ModalHeader>
      }
      <ModalBody>
        <Form onSubmit={handleSubmitUpdateGmat} >
         
           
          
              <Input
                type="hidden"
                name="studentId"
                id="studentId"
                value={localStorage.getItem('applictionStudentId')}
               
              />

              {
                (gmatData?.id) ? 
                <Input
                type="hidden"
                name="id"
                id="id"
                value={gmatData?.id}
               
              />

              :

               null
              }

              
                  
                  <FormGroup row className="has-icon-left position-relative">
                 
          
          
          
                    <Input
          
                      type='hidden'
                      name='haveGmatExam'
                      id='haveGmatExam'
                      value={true}
                  
          
                    />
          
          
                  
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      GMAT Exam Date <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='date'
                      id='gmatExamDate'
                      name='gmatExamDate'
                      required
                      defaultValue={handleDate(gmatData?.gmatExamDate)}
          
                    />
          
          
                  </Col>
                </FormGroup>


                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Total Score <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='totalScore'
                      name='totalScore'
                      required
                      defaultValue={gmatData?.totalScore}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Total Rank <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='totalRank'
                      name='totalRank'
                      required
                      defaultValue={gmatData?.totalRank}
          
                    />
          
          
                  </Col>
                </FormGroup>


                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Verbal Score <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='verbalScore'
                      name='verbalScore'
                      required
                      defaultValue={gmatData?.verbalScore}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Verbal Rank <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='verbalRank'
                      name='verbalRank'
                      required
                      defaultValue={gmatData?.verbalRank}
          
                    />
          
          
                  </Col>
                </FormGroup>


                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Quantitative Score <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='quantitativeScore'
                      name='quantitativeScore'
                      required
                      defaultValue={gmatData?.quantitativeScore}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Quantitative Rank <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='quantitativeRank'
                      name='quantitativeRank'
                      required
                      defaultValue={gmatData?.quantitativeRank}
          
                    />
          
          
                  </Col>
                </FormGroup>


           
                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Writing Score <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='writingScore'
                      name='writingScore'
                      required
                      defaultValue={gmatData?.writingScore}
          
                    />
          
          
                  </Col>
                </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      Writing Rank <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='text'
                      id='writingRank'
                      name='writingRank'
                      required
                      defaultValue={gmatData?.writingRank}
          
                    />
          
          
                  </Col>
                </FormGroup>


           
  
       

          <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

            <Button color="danger" className="mr-1 mt-3" onClick={closeModal3}>Close</Button>

            
           
              <Button.Ripple
                color="warning"
                type="submit"
                className="mr-1 mt-3"
               
              >
                Submit
              </Button.Ripple>

          

          </FormGroup>

        </Form>
      </ModalBody>

    </Modal>
    <div>

    </div>
  </div>


  

           <FormGroup
           className="has-icon-left position-relative"
           style={{ display: "flex", justifyContent: "space-between" }}
         >
        

           <ButtonForFunction
           name={'Previous'}
           func={goBackward}
           className={'ms-md-2 mt-3 btn-warning'}
           />
           

           <Button.Ripple
             type="submit"
             className="mr-1 mt-3 btn-warning"
             onClick={handleForward}
             disabled = {courseInfo?.length >=1 ?  false : true }
             
           >
             Next
             <i className="fas fa-arrow-right-long ms-1"></i>
           </Button.Ripple>
         </FormGroup>

         
    
        </TabPane>
      </TabContent>

      
      </CardBody>
    </Card>


            
        </div>
    );
};

export default TestScore;