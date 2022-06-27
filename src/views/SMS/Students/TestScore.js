import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label, Row, Modal, ModalFooter, ModalBody } from 'reactstrap';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import get from '../../../helpers/get';
import InputComponent from './InputComponent';

import { useToasts } from "react-toast-notifications";
import post from '../../../helpers/post';
import remove from '../../../helpers/remove';
import EditInputComponent from './EditInputComponent';

const TestScore = () => {


    const [activetab, setActivetab] = useState("5");
    

    const [success, setSuccess] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false);
    const [showForm,setShowForm]=useState(false);

    const applicationStudentId = localStorage.getItem('applictionStudentId');

    const [qualification,setQualification] = useState([]);
    const [ELqualificationLabel, setELQualificationLabel] = useState('Select');
    const [ELqualificationValue, ELsetQualificationValue] = useState(0);

    const {addToast} = useToasts();

    const [courseInfo, setCourseInfo] = useState([]);

    const [oneData, setOneData] = useState({});


    const [qualificationLabel, setQualificationLabel] = useState('NO');
    const [qualificationValue, setQualificationValue] = useState(0);

    const [examTestTypeAttributeData, setExamTestTypeAttributeData] = useState([]);

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


    },[success])


    const handleDeleteData = () => {

      remove(`StudentTestScore/Delete/${localStorage.getItem('studentTestScroreId')}`)
      .then(res => {
        console.log(res);
        addToast(res,{
          appearance: 'error',
          autoDismiss: true
        })
        setDeleteModal(false);
        setSuccess(!success);
      })
      
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

  console.log(label, value);

  get(`ExamTestTypeAttribute/GetByExamTestType/${value}`)
  .then(res => {
    console.log('on Change exam test type',res);
    setExamTestTypeAttributeData(res);
  })
  
  
  
  
  }

  const handleEdit = (data) => {
    // console.log(data);
    get(`StudentTestScore/GetByStudentTestScore/${data.studentTestScroreId}`)
    .then(res => {
      console.log(res);
      setOneData(res);

    })
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const subData = new FormData(event.target);

    for (var x of subData.values()){
      console.log(x);
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

  console.log(label, value);
  
  
  
  
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
          courseInfo?.map((course, i) => <div className='col-md-6 mt-2' key={i} style={{ textAlign: "left" }}>
            <Card className="CampusCard shadow-style">
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


        <TabContent activeTab={activetab}>
        <TabPane tabId="5">
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

         <>
         
         <InputComponent
         key={i}
         data={data}
         ></InputComponent>

         <EditInputComponent
         
         key={i+1}
         data={data}
         
         >
         </EditInputComponent>
         
         </>
          
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

         
          </Form>
        </TabPane>
      </TabContent>

      
      </CardBody>
    </Card>


            
        </div>
    );
};

export default TestScore;