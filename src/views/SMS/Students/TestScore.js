import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import get from '../../../helpers/get';

const TestScore = () => {


    const [activetab, setActivetab] = useState("5");

    const applicationStudentId = localStorage.getItem('applictionStudentId');

    const [qualification,setQualification] = useState([]);
    const [ELqualificationLabel, setELQualificationLabel] = useState('Select');
    const [ELqualificationValue, ELsetQualificationValue] = useState(0);



    const [qualificationLabel, setQualificationLabel] = useState('NO');
    const [qualificationValue, setQualificationValue] = useState(0);

    useEffect(()=>{

      get('ExamTestType/Index')
      .then(res => {
        console.log('Exam test type data fetch',res);
        setQualification(res);

      })


    },[])

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

        <div className='container test-score-div-1-style mt-4'>

        <span className='test-score-span-1-style'>Do You Hold an English Language Qualification Such as GCSE English Language, IELTS, Pearson etc ?</span>

        </div>


        <TabContent activeTab={activetab}>
        <TabPane tabId="5">
          <Form    className="mt-5">

       

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
                    name=""
                    id=""
                   
             
              required

            />

            
          </Col>
        </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>
            Please Confirm Overall Result/Grade  <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
        <Input
        type='text'
        placeholder='Enter Overall Score'
       
        />

          
        </Col>
      </FormGroup>
          
          </>


          :

          null


         }

          <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Please Specify Qualification Name  <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
              <Input
              type='text'
              placeholder='Enter Name of Qualification'
             
              />

                
              </Col>
            </FormGroup>

        


            <div className='container test-score-div-1-style mb-4'>

            <span className='test-score-span-1-style'>Please State Component Score</span>
    
            </div>

           {
            ELqualificationLabel == 'IELTS' ?
            
            <>
            
            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Speaking  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
           <Input
           type='text'
           placeholder='Enter Speaking Score'
          
           />

              
            </Col>
          </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Listening  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
            <Input
           type='text'
           placeholder='Enter Listening Score'
          
           />

              
            </Col>
          </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Writing  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
            <Input
            type='text'
            placeholder='Enter writing Score'
           
            />

              
            </Col>
          </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Reading  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
            <Input
            type='text'
            placeholder='Enter reading Score'
           
            />

              
            </Col>
          </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Exam Date  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
            <Input
            type='date'
            
            />

              
            </Col>
          </FormGroup>

            </>

            :

            null



           }

          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
              Literacy  <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">
          <Input
          type='text'
          placeholder='Enter Speaking Score'
         
          />

            
          </Col>
        </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
              Comprehension  <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">
          <Input
          type='text'
          placeholder='Enter Listening Score'
         
          />

            
          </Col>
        </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
              Conversation  <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">
          <Input
          type='text'
          placeholder='Enter Writing Score'
         
          />

            
          </Col>
        </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
              Production  <span className="text-danger">*</span>{" "}
            </span>
          </Col>
          <Col md="6">
          <Input
          type='text'
          placeholder='Enter Reading Score'
         
          />

            
          </Col>
        </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Exam Date  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
            <Input
            type='date'
            
            
            />

              
            </Col>
          </FormGroup>



          

           <FormGroup
           className="has-icon-left position-relative"
           style={{ display: "flex", justifyContent: "space-between" }}
         >
           <Button.Ripple
             type="submit"
             className="mr-1 mt-3 btn-warning"
             
           >
             Previous
           </Button.Ripple>
           <Button.Ripple
             type="submit"
             className="mr-1 mt-3 badge-primary"
           >
             Save and Next
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