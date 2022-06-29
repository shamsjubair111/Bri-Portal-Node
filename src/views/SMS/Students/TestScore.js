import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label, Row, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import get from '../../../helpers/get';
import InputComponent from './InputComponent';

import { useToasts } from "react-toast-notifications";
import post from '../../../helpers/post';
import remove from '../../../helpers/remove';
import EditInputComponent from './EditInputComponent';
import put from '../../../helpers/put';

const TestScore = () => {


    const [activetab, setActivetab] = useState("5");

    const [greData, setGreData] = useState({});
    

    const [success, setSuccess] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteModal2, setDeleteModal2] = useState(false);
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

    const [greCheck, setGreCheck] = useState(false);

    useEffect(()=>{

      get('ExamTestType/Index')
      .then(res => {
        // console.log('Exam test type data fetch',res);
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

    // on Close Modal
const closeModal = () => {
  setOneData({});
  setModalOpen(false);


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

  const handleEdit2 = () => {

  }

  const showGREForm = () => {
    setAddGRE(true);
  }

  const showGMATForm = () => {
    setAddGMAT(true);
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const subData = new FormData(event.target);

    for (var x of subData.values()){
      // console.log(x);
    }

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
       

      }
    })

  }

  
  
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

        if (tab == "4") {
          history.push("/addStudentEducationalInformation");
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

      const handleAdd = () => {
        setELQualificationLabel('');

        ELsetQualificationValue(0);
        setAdd(true);
      }
   
    

      


    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">English Language / Test Score</h3>
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

        </div>

 
        <div className='row mt-3'>

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


          </div>

        </div>

        

        <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

           
 
             
            
        <Button.Ripple
          color="primary"
          onClick={handleAdd}
         
          className="ms-md-2 mt-3"
         
        >
          Add New
        </Button.Ripple>

    

    </FormGroup>

      {
        !(greData?.length) > 0 ?

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

        <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

           
 
             
            
        <Button.Ripple
          color="primary"
          onClick={showGMATForm}
          
         
          className="ms-md-2 mt-3"
         
        >
          Add New GMAT
        </Button.Ripple>

    

    </FormGroup>

  




        <TabContent activeTab={activetab}>
        <TabPane tabId="5">


        {

          add?
      
          <>

          <Form onSubmit={handleSubmit}   className="mt-5">

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
          qualificationLabel == 'Yes' ? 

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
        


          

         <FormGroup row
         className="has-icon-left position-relative"
         style={{ display: "flex", justifyContent: "end" }}
       >
         
     <Col md="5">
     
     <Button.Ripple
     type="submit"
     className="mr-1 mt-3 badge-primary"
   >
     Save
   </Button.Ripple>

     </Col>

        
       </FormGroup>

       </Form>

    
    </>

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
      <span> Gre Exam Date
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

<Button.Ripple
type="submit"
className="mr-1 mt-3 badge-primary"
>
Save
</Button.Ripple>

</Col>

  
 </FormGroup>

 </Form>
    



    </>

    :

    null


  }


  {

    addGMAT?

    <>

    <Form   className="mt-5">

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
        id='haveGmatExam'
        name='haveGmatExam'
        required

      />


    </Col>
  </FormGroup>

    <FormGroup row className="has-icon-left position-relative">
    <Col md="2">
      <span> Gmat Exam Date
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

<Button.Ripple
type="submit"
className="mr-1 mt-3 badge-primary"
>
Save
</Button.Ripple>

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


  




       

       

         

        


         

         

      

           <FormGroup
           className="has-icon-left position-relative"
           style={{ display: "flex", justifyContent: "space-between" }}
         >
           <Button.Ripple
             type="submit"
             className="mr-1 mt-3 btn-warning"
             onClick={goBackward}
             
           >
             Previous
           </Button.Ripple>
           

           <Button.Ripple
             type="submit"
             className="mr-1 mt-3 badge-primary"
             onClick={handleForward}
           >
             Next
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