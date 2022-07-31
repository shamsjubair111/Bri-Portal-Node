import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label, Row, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import Select from "react-select";
import { useHistory, useLocation } from 'react-router-dom';
import get from '../../../helpers/get';
import InputComponent from './InputComponent';

import { useToasts } from "react-toast-notifications";
import post from '../../../helpers/post';
import remove from '../../../helpers/remove';
import EditInputComponent from './EditInputComponent';
import put from '../../../helpers/put';
import ButtonForFunction from '../Components/ButtonForFunction';

const TestScore = () => {

  const location = useLocation();



    const [activetab, setActivetab] = useState("5");

    const [greData, setGreData] = useState({});
    const [gmatData, setGmatData] = useState({});
    

    const [success, setSuccess] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteModal2, setDeleteModal2] = useState(false);
    const [deleteModal3, setDeleteModal3] = useState(false);
    const [showForm,setShowForm]=useState(false);

    const applicationStudentId = localStorage.getItem('applictionStudentId');

    const [qualification,setQualification] = useState([]);
    const [ELqualificationLabel, setELQualificationLabel] = useState('Select');
    const [ELqualificationValue, ELsetQualificationValue] = useState(0);

    const {addToast} = useToasts();

    const [courseInfo, setCourseInfo] = useState([]);

    const [oneData, setOneData] = useState({});
    const [twoData, setTwoData] = useState({});

    const [edit,setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [addGRE, setAddGRE] = useState(false);
    const [addGMAT, setAddGMAT] = useState(false);


    const [qualificationLabel, setQualificationLabel] = useState('NO');
    const [qualificationValue, setQualificationValue] = useState(0);

    const [examTestTypeAttributeData, setExamTestTypeAttributeData] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);

    const [greCheck, setGreCheck] = useState(false);
    const [gmatCheck, setGmatCheck] = useState(false);

    const method = localStorage.getItem('method');

    const [testError, setTestError] = useState(false);

    useEffect(()=>{

      get('ExamTestType/Index')
      .then(res => {
        console.log('Exam test type data fetch',res);
        setQualification(res);



      })


      get(`StudentTestScore/StudentTestScoreValue/${localStorage.getItem('applictionStudentId')}`)
      .then(res => {
        console.log('Courses Record',res);
        setCourseInfo(res);
      })


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

    },[success])


    const handleDeleteData = () => {

      remove(`StudentTestScore/Delete/${localStorage.getItem('studentTestScroreId')}`)
      .then(res => {
        // console.log(res);
        addToast(res,{
          appearance: 'error',
          autoDismiss: true
        })
        setDeleteModal(false);
        setSuccess(!success);
      })
      
    }


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
  setOneData({});
  setModalOpen(false);


}


const closeModal2= () => {
  setTwoData({});
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

   

    const qualificationOptions = qualification?.map((qual) => ({
      label: qual.name,
      value: qual.id,
    }));
  
  
        //  select  Student type
  const selectQualification = (label, value) => {
    setTestError(false);
    setELQualificationLabel(label);
    ELsetQualificationValue(value);

    localStorage.setItem('qualificationValue', value);



  // console.log(label, value);

  get(`ExamTestTypeAttribute/GetByExamTestType/${value}`)
  .then(res => {
    // console.log('on Change exam test type',res);
    setExamTestTypeAttributeData(res);
  })
  
  
  
  
  }

  const handleEdit = (data) => {

     setModalOpen(true);


    console.log('data',data);
    get(`StudentTestScore/GetByStudentTestScore/${data.studentTestScroreId}`)
    .then(res => {
      localStorage.setItem('studentTestScroreId',res[0]?.studentTestScroreId);
      console.log(res[0]);
      setOneData(res[0]);
      setELQualificationLabel(res[0]?.examTestTypeName);
    ELsetQualificationValue(res[0]?.examTestTypeId);

    })
    
    
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
    setAdd(false);
    setAddGRE(true);
    setAddGMAT(false);
   

  }

  const showGMATForm = () => {
    setAdd(false);
    setAddGRE(false);
    setAddGMAT(true);
   
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const subData = new FormData(event.target);

    if(ELqualificationValue == 0){
      setTestError(true);
    }

    else{

      post('ExamTestTypeAttributeValue/Create',subData)
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
          setExamTestTypeAttributeData([]);
  
       
          
         
  
        }
      })

    }

  

  }

  console.log(qualificationLabel, qualificationValue,'dummy');
  
  const  handleGREScore = (event) => {

    event.preventDefault();

    const subData = new FormData(event.target);
    subData.append('haveGreExam',greCheck);

    // for( var x of subData.values()){
    //   console.log(x);
    // }

    post(`GreScore/Create`,subData)
    .then(res => {
      console.log(res);
      if(res?.status ==200){
        addToast(res?.data?.message,{
          appearance:'success',
          autoDismiss:true
        })
        setSuccess(!success);
        setAddGRE(false);
        
      }
    })

  } 



    const testSignleOptions = testOptions?.map((test) => ({
      label: test.name,
      value: test.id,
    }));
  
  
        //  select  Student type
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


      const handleSubmitUpdate = (event) => {
        
        event.preventDefault();

        const subData = new FormData(event.target);

        for(var x  of subData.values()){
          console.log(x);

        }

        put(`ExamTestTypeAttributeValue/Update`,subData)
        .then(res => {
          if(res?.status ==200){
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
            })
            setModalOpen(false);
           
            get(`StudentTestScore/StudentTestScoreValue/${localStorage.getItem('applictionStudentId')}`)
            .then(res => {
              // console.log('Courses Record',res);
              setCourseInfo(res);
            })
          }
        })


      }


      



      // Gre data update

      const handleSubmitUpdateGre = (event) =>{

        event.preventDefault();

        const subData  = new FormData(event.target);
        subData.append('haveGreExam',greCheck);

        for(var x of subData.values()){
          console.log(x);
        }

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


      // GMAT data update

      const handleSubmitUpdateGmat = (event) =>{

        event.preventDefault();

        const subData  = new FormData(event.target);
        subData.append('haveGmatExam',gmatCheck);

        for(var x of subData.values()){
          console.log(x);
        }

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

      const handleAdd = () => {
       
       


      
        setAdd(true);
        setAddGRE(false);
        setAddGMAT(false);
      }
   

      const handleSubmitGmat = (event) => {

        event.preventDefault();

        const subData = new FormData(event.target);
        subData.append('haveGmatExam',gmatCheck);

        for(var x of subData.values()){
          console.log(x);
        }

        post(`GmatScore/Create`,subData)
        .then(res => {
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
            })
            setSuccess(!success);
            setAddGMAT(false);
          }
        })

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


        {
          courseInfo?.map((course, i) => <div className='col-md-6 mt-2 ' key={i} style={{ textAlign: "left" }}>
            <Card className="CampusCard shadow-style test-score-card-style">
              <CardBody className="shadow">

              <div className='d-flex justify-content-space-between'>
              <h5>Course Title: {course.examTestTypeName}</h5>
              <div className="CampusCardAction">
              <div className=""> 
                 <button type="button" onClick={()=> handleEdit(course)} className="btn btn-outline-info"> <i className="fas fa-edit"></i> </button>
              </div>

              <div className=""> 
                 <button type="button" className="btn btn-outline-danger" onClick={()=>toggleDanger(course)} ><i className="fas fa-trash-alt"></i></button>
              </div>
             </div>
              </div>

                {
                  (course?.attributeItem)?.map((c,i)=>
                  
                  <Row key={i} >

                  <Col md="6">
                  <h6>{c.attritbuteName}: {c.attritbuteValue}</h6>
                   
                  </Col>
  
                 
  
  
  
                </Row>  
                  
                  )

                

           

                }    
          
              </CardBody>

              <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                <ModalBody>
                  <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                </ModalBody>

                <ModalFooter>
                  <Button  color="danger" onClick={handleDeleteData}>YES</Button>
                  <Button onClick={() => setDeleteModal(false)}>NO</Button>
                </ModalFooter>
             </Modal>

         

             

            </Card>


          </div>)

        }

       {

        (qualification?.length != courseInfo?.length) ?

        <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

           
 
             
            
   {
    courseInfo.length > 0 ?

    <Button.Ripple
    color="primary"
    onClick={handleAdd}
   
    className="ms-md-2 mt-3"
   
  >
    Add New
  </Button.Ripple>

  :

  null
   }

    

    </FormGroup>

    :

    null

    

       }

       {

        (courseInfo.length <=0 || add) ?
    
        <>

        <Form onSubmit={handleSubmit}   className="my-5 pb-5">

        <input
        type='hidden'
        name='studentId'
        id='studentId'
        value={localStorage.getItem('applictionStudentId')}
        
        />

     


  
  <FormGroup row className="has-icon-left position-relative">
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

        

        

          

          <FormGroup row className="has-icon-left position-relative">
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

      
     


      {

        examTestTypeAttributeData?.map((data,i) => 

   

    

         <InputComponent
         key={i}
         data={data}
         ></InputComponent>



      
        
        )

       }

  
        
        </>

   
        :

        null
         
      


       }



      

       <br/>
      


        

      {
        qualificationLabel == 'NO' ? 
        
        null 
        :

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

      }

     </Form>

  
  </>

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
        !(greData?.id) ?

        <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

           
 
             
            
        <Button.Ripple
          color="primary"
          onClick={showGREForm}
          
         
          className="ms-md-2 mt-3"
         
        >
          Add New GRE
        </Button.Ripple>

    

    </FormGroup>

    :

    null

      }

      
  {
    addGRE?

    <>

    <Form onSubmit={handleGREScore}   className="mt-5">

    <input
    type='hidden'
    name='studentId'
    id='studentId'
    value={localStorage.getItem('applictionStudentId')}
    
    />

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Have Gre Exam?
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input
        className='ms-md-1'
        type='checkbox'
        
        onChange={(e) => setGreCheck(e.target.checked)}
      

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> GRE Exam Date
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='date'
        id='greExamDate'
        name='greExamDate'
        required
       

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Verbal Score
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='verbalScore'
        name='verbalScore'
        required
        placeholder='Enter Verbal Score'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Verbal Rank
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='verbalRank'
        name='verbalRank'
        required
        placeholder='Enter Verbal Rank'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Quantitative Score
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='quantitativeScore'
        name='quantitativeScore'
        required
        placeholder='Enter Quantitative Score'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Quantitative Rank
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='quantitativeRank'
        name='quantitativeRank'
        required
        placeholder='Enter Quantitative Rank'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Writing Score
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='writingScore'
        name='writingScore'
        required
        placeholder='Enter Writing Score'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Writing Rank
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='writingRank'
        name='writingRank'
        required
        placeholder='Enter Writing Rank'

      />


    </Col>
  </FormGroup>

 
  

   <br/>
  


    

  
    

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

  

 </Form>
    



    </>

    :

    null


  }

    {

      (gmatData?.id) ?
      
      null

      :

      <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

           
 
             
            
      <Button.Ripple
        color="primary"
        onClick={showGMATForm}
        
       
        className="ms-md-2 mt-3"
       
      >
        Add New GMAT
      </Button.Ripple>

  

  </FormGroup>

    }

  




        <TabContent activeTab={activetab}>
        <TabPane tabId="5">


       



  {

    addGMAT?

    <>

    <Form onSubmit={handleSubmitGmat}   className="mt-5">

    <input
    type='hidden'
    name='studentId'
    id='studentId'
    value={localStorage.getItem('applictionStudentId')}
    
    />

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Have GMAT Exam?
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input
        className='ms-md-1'
        type='checkbox'
      
    
        onChange={(e)=> setGmatCheck(e.target.checked)}
        

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> GMAT Exam Date
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='date'
        id='gmatExamDate'
        name='gmatExamDate'
        required
       

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Verbal Score
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='verbalScore'
        name='verbalScore'
        required
        placeholder='Enter Verbal Score'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Verbal Rank
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='verbalRank'
        name='verbalRank'
        required
        placeholder='Enter Verbal Rank'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Quantitative Score
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='quantitativeScore'
        name='quantitativeScore'
        required
        placeholder='Enter Quantitative Score'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Quantitative Rank
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='quantitativeRank'
        name='quantitativeRank'
        required
        placeholder='Enter Quantitative Rank'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Writing Score
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='writingScore'
        name='writingScore'
        required
        placeholder='Enter Writing Score'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Writing Rank
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='writingRank'
        name='writingRank'
        required
        placeholder='Enter Writing Rank'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Total Score
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='totalScore'
        name='totalScore'
        required
        placeholder='Enter Total Score'

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Total Rank
         <span className="text-danger">*</span>{" "}
      </span>
    </Col>
    <Col md="6">



      <Input

        type='text'
        id='totalRank'
        name='totalRank'
        required
        placeholder='Enter Total Rank'

      />


    </Col>
  </FormGroup>

 
  

   <br/>
  


    


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

 

 </Form>

    
    
    </>

    :

    null


  }



    <div>

    <Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal">
      <ModalHeader>Update Course Information</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmitUpdate} >
         
           
          
              <Input
                type="hidden"
                name="studentId"
                id="studentId"
                value={localStorage.getItem('applictionStudentId')}
               
              />

              <Input
                type="hidden"
                name="studentTestScoreId"
                id="studentTestScoreId"
                value={localStorage.getItem('studentTestScroreId')}
               
              />

              {

                (oneData?.attributeItem)?.map(dataOne => 
                  
                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      {dataOne?.attritbuteName} <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type={dataOne?.fieldTypeId==1?'date':dataOne?.fieldTypeId==2?'text':dataOne?.fieldTypeId==3?'number':'text'}
                      id={dataOne?.attritbuteValueId}
                      name={dataOne?.attritbuteValueId}
                      required
                      defaultValue={dataOne?.attritbuteValue}
          
                    />
          
          
                  </Col>
                </FormGroup>


                  )

              }

           
  
       

          <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

            <Button color="danger" className="mr-1 mt-3" onClick={closeModal}>Close</Button>

            
           
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

    <Modal isOpen={modal2Open} toggle={closeModal2} className="uapp-modal">
      <ModalHeader>Update GRE Result</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmitUpdateGre} >
         
           
          
              <Input
                type="hidden"
                name="studentId"
                id="studentId"
                value={localStorage.getItem('applictionStudentId')}
               
              />

              <Input
                type="hidden"
                name="id"
                id="id"
                value={greData?.id}
               
              />

              
                  
                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      have GRE Exam? <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='checkbox'
                     
                      
                      defaultChecked={greData?.haveGreExam}
                      className='ms-1'
                      onChange={(e) => setGreCheck(e.target.checked)}
          
                    />
          
          
                  </Col>
                </FormGroup>

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
                      defaultValue={greData?.haveGreExam}
          
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
      <ModalHeader>Update GMAT Result</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmitUpdateGmat} >
         
           
          
              <Input
                type="hidden"
                name="studentId"
                id="studentId"
                value={localStorage.getItem('applictionStudentId')}
               
              />

              <Input
                type="hidden"
                name="id"
                id="id"
                value={gmatData?.id}
               
              />

              
                  
                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="5">
                    <span>
                      have GMAT Exam? <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
          
          
                    <Input
          
                      type='checkbox'
                     
                      
                      defaultChecked={gmatData?.haveGmatExam}
                      className='ms-1'
                      onChange={(e) => setGmatCheck(e.target.checked)}
          
                    />
          
          
                  </Col>
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
                      defaultValue={gmatData?.gmatExamDate}
          
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