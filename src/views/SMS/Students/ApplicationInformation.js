import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import put from '../../../helpers/put';
import ButtonForFunction from '../Components/ButtonForFunction';



const ApplicationInformation = () => {

  const history = useHistory();
  const {applicationStudentId, update} = useParams();

  console.log(applicationStudentId, update);

  const [applicationInformation, setApplicationInformation] = useState({});
  const [activetab, setActivetab] = useState("1");
  const [appliedStudentFinance, setIsAppliedStudentFinance] = useState('false');
  const [applyingFromInside, setIsApplyingFromInside] = useState('false');
  const [isStayedOutsideUKInLastThreeYears, setIsStayedOutsideUkInLastThreeYears] = useState('false');
  const [preSettlementStatus, setPresettlementStatus] = useState('false');
  const [studentType, setStudentType] = useState([]);
  const [studentTypeLabel, setStudentTypeLabel] = useState('Student type');
  const [studentTypeValue, setStudentTypeValue] = useState(0);
  const [dateOfMoveToUk, setDateOfMoveToUk] = useState('');
  const [financeDetails, setFinanceDetails] = useState('');

  const [success, setSuccess]  = useState(false);


  const [visaStatus, setVisaStatus] = useState([]);
  const [visaStatusLabel, setVisaStatusLabel] = useState('Visa status');
  const [visaStatusValue, setVisaStatusValue] = useState(0);
  const [code, setCode] = useState('');

  const [visaError, setVisaError] = useState(false);


 
  

  const [applicationId, setApplicationId] = useState(0);

  const {addToast} = useToasts();

  
 




  useEffect(()=>{

    get('StudentTypeDD/Index')
    .then(res => {
      console.log('Student Type Dropdown',res);
      setStudentType(res);
    })

    get('VisaTypeDD/Index')
    .then(res => {
      console.log(res);
      setVisaStatus(res);
    })

    // get(`StudentType/Get/${applicationStudentTypeId}`)
    // .then(res => {
    //   console.log('getting data from previous page',res);
    //   setStudentTypeValue(res?.id);
    //   setStudentTypeLabel(res?.name);
    // })


    get(`ApplicationInfo/GetByStudentId/${applicationStudentId}`)
    .then(res => {
      console.log('application post response', res);
      
      setApplicationInformation(res);
      setStudentTypeLabel(res?.student?.studentType?.name);
      setStudentTypeValue(res?.student?.studentType?.id);
     
      setIsStayedOutsideUkInLastThreeYears(`${res?.isStayedOutsideEU_UkinLast3Years}`);
      setPresettlementStatus(`${res?.isHavePre_Settlementstatus}`);
      setIsAppliedStudentFinance(`${res?.isAppliedStudentFinance}`);
      setFinanceDetails(res?.financeApplicationDetails);
      setCode(res?.code);
      setStudentTypeValue(res?.student?.studentType?.id);
      setStudentTypeLabel(res?.student?.studentType?.name);
      setIsApplyingFromInside(`${res?.isApplyingFromInside}`);
      setVisaStatusLabel(res?.visaStatus?.name ? res?.visaStatus?.name : 'Select Visa Status');
      setVisaStatusValue(res?.visaStatusId ? res?.visaStatusId : 0);
      setApplicationId(res?.id);

      var datee =res?.dateOfMoveToUk;
      var utcDate = new Date(datee);
      var localeDte = utcDate.toLocaleString("en-CA");
      var localeDte2 = localeDte.split(",")[0];
      var localeDte3 = localeDte2.replace('/', '-');
      
      console.log(localeDte);
      setDateOfMoveToUk(localeDte3.replace('/', '-'));
    


    })

  },[])



  const backToStudentProfile = () => {
    history.push(`/studentProfile/${applicationStudentId}`);
}

const styleLabelBold = {
  // fontWeight: "bold"
};


const toggle = (tab) => {
  setActivetab(tab);
  if (tab == "1") {
    history.push(`/addStudentApplicationInformation/${applicationStudentId}`);
  }

  if (tab == "2") {
    history.push(`/addStudentInformation/${applicationStudentId}`);
  }

  if (tab == "3") {
    history.push(`/addStudentContactInformation/${applicationStudentId}`);
  }

  if (tab == "4") {
    history.push(`/addStudentEducationalInformation/${applicationStudentId}`);
  }

  if (tab == "5") {
    history.push(`/addTestScore/${applicationStudentId}`);
  }

  if (tab == "6") {
    history.push(`/addExperience/${applicationStudentId}`);
  }

  if (tab == "7") {
    history.push(`/addReference/${applicationStudentId}`);
  }

  if (tab == "8") {
    history.push(`/addPersonalStatement/${applicationStudentId}`);
  }
  if (tab == "9") {
    history.push(`/addOtherInformation/${applicationStudentId}`);
  }
  if (tab == "10") {
    history.push(`/uploadDocument/${applicationStudentId}`);
  }
  if (tab == "11") {
    history.push(`/studentDeclaration/${applicationStudentId}`);
  }
 
  
};

 // on change radio button

    
    const handleChangeIsAppliedStudentFinance = (event) => {
      console.log(event.target.value);
      setIsAppliedStudentFinance(event.target.value)
  }



    const handleChangeIsApplyingFromInside = (event) => {
      console.log(event.target.value);
      setIsApplyingFromInside(event.target.value);
  }



    const handleChangeIsStayedoutsideUkInLastThreeYears = (event) => {
      console.log(event.target.value);
      setIsStayedOutsideUkInLastThreeYears(event.target.value);
  }




    const handlePreSettlementStatus = (event) => {
      console.log(event.target.value);
      setPresettlementStatus(event.target.value);
  }


  const studentTypeName = studentType?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));


       // select  Student type
const selectStudentType = (label, value) => {
setStudentTypeLabel(label);
setStudentTypeValue(value);


}

  const visaStatusName = visaStatus?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));


      
const selectVisaStatus = (label, value) => {
setVisaStatusLabel(label);
setVisaStatusValue(value);
setVisaError(false);


}


const handleSubmit = (event) => {


  event.preventDefault();
  const subData = new FormData(event.target);
  


    if(visaStatusValue == 0){

      setVisaError(true);

    }

   

    if(update){

    put(`ApplicationInfo/Update`,subData)
    .then(res => {
      console.log('2nd put response',res);
      if(res?.status == 200){
       
        addToast(res?.data?.message,{
          appearance: 'success',
          autoDismiss: true
        })
        setSuccess(!success);
        history.push(`/addStudentinformation/${applicationStudentId}`);
        
       
      }
    })

   }

   else{


    post('ApplicationInfo/Create',subData)
    .then(res => {
      console.log('application response',res);
      if(res?.status == 200){
        addToast(res.data.message,{
          appearance: 'success',
          autoDismiss: true
        })
        history.push(`/addStudentinformation/${applicationStudentId}`);
      }
  
    })

   }

}


const cancelForm = () => {
  history.push('/studentList');
}



    return (
        <div>

    <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Application Information</h3>
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

         update?
      
        <Nav tabs>

        <NavItem>
        <NavLink style={{ color: '#1e98b0'}} active={activetab === "1"} onClick={() => toggle("1")}>
          Application 
        </NavLink>
       </NavItem>

          <NavItem>
            <NavLink style={{ color: '#1e98b0'}} active={activetab === "2"} onClick={() => toggle("2")}>
              Personal 
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink style={{ color: '#1e98b0'}}  active={activetab === "3"} onClick={() => toggle("3")}>
              Contact 
            </NavLink>
          </NavItem>

         
          <NavItem>
            <NavLink  style={{ color: '#1e98b0'}} active={activetab === "4"} onClick={() => toggle("4")}>
              Educational 
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink style={{ color: '#1e98b0'}}  active={activetab === "5"} onClick={() => toggle("5")}>
              Test Score
            </NavLink>
          </NavItem>

          <NavItem>

            <NavLink style={{ color: '#1e98b0'}}  active={activetab === "6"} onClick={() => toggle("6")}>
              Experience 
            </NavLink>
          </NavItem>

          <NavItem>

            <NavLink style={{ color: '#1e98b0'}}  active={activetab === "7"} onClick={() => toggle("7")}>
              Reference
            </NavLink>
          </NavItem>

          <NavItem>

            <NavLink style={{ color: '#1e98b0'}}  active={activetab === "8"} onClick={() => toggle("8")}>
              Personal Statement
            </NavLink>
          </NavItem>

          <NavItem>

            <NavLink style={{ color: '#1e98b0'}}  active={activetab === "9"} onClick={() => toggle("9")}>
              Others
            </NavLink>
          </NavItem>

          <NavItem>
              <NavLink style={{ color: '#1e98b0'}} active={activetab === "10"} onClick={() => toggle("10")}>
                Documents
              </NavLink>
          </NavItem>

          <NavItem>
              <NavLink style={{ color: '#1e98b0'}} active={activetab === "11"} onClick={() => toggle("11")}>
                Declaration
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
            <NavLink disabled active={activetab === "2"} onClick={() => toggle("2")}>
              Personal 
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink disabled  active={activetab === "3"} onClick={() => toggle("3")}>
              Contact 
            </NavLink>
          </NavItem>

         
          <NavItem>
            <NavLink disabled  active={activetab === "4"} onClick={() => toggle("4")}>
              Educational 
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink disabled  active={activetab === "5"} onClick={() => toggle("5")}>
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

           <NavItem>
              <NavLink disabled active={activetab === "10"} onClick={() => toggle("10")}>
                Documents
              </NavLink>
            </NavItem>

           <NavItem>
              <NavLink disabled active={activetab === "11"} onClick={() => toggle("11")}>
                Declaration
              </NavLink>
            </NavItem>
         

        </Nav>

       }

        

        <TabContent activeTab={activetab}>
          <TabPane tabId="1">
            <Form onSubmit={handleSubmit}   className="mt-5">

            {
              (update) ? 
              <input
              type='hidden'
              name='id'
              id='id'
              value={applicationId}
              
              />

              :

              null
            }

            <input
            type='hidden'
            name='studentId'
            id='studentId'
            value={applicationStudentId}
            />

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
                    required

                  />

                  
                </Col>
              </FormGroup>

             {
               studentTypeLabel == 'Home' ? 

               <>
               
                 
            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Is Applied Student Finance? <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">

            
            <FormGroup check inline>
            <Input className="form-check-input" type="radio" id="isAppliedStudentFinance" onChange={handleChangeIsAppliedStudentFinance} name="isAppliedStudentFinance" value='true' checked={appliedStudentFinance == 'true'} />
            <Label className="form-check-label" check htmlFor="isAppliedStudentFinance" style={styleLabelBold}>Yes</Label>

            </FormGroup>

            <FormGroup check inline>
            <Input className="form-check-input" type="radio" id="isAppliedStudentFinance" onChange={handleChangeIsAppliedStudentFinance} name="isAppliedStudentFinance" value='false' checked={appliedStudentFinance == 'false'} />
            <Label className="form-check-label" check htmlFor="isAppliedStudentFinance" style={styleLabelBold}>No</Label>

            </FormGroup>



            
            </Col>
          </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Finance Application Details <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
             <Input
                type="text"
                name="financeApplicationDetails"
                id="financeApplicationDetails"
               placeholder='Enter finance application details'
                required
                defaultValue={financeDetails}
              />

            
            </Col>
          </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Code <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
             <Input
                type="text"
                name="code"
                id="code"
               placeholder='Enter code'
                required
                defaultValue={code}
              />

            
            </Col>
          </FormGroup>

               </>

               :

               null


             }


             {
              studentTypeLabel == 'International' ?
              
              <>

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Is Applying From Inside? <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
  
              <FormGroup check inline>
              <Input className="form-check-input" type="radio" id="isApplyingFromInside" onChange={handleChangeIsApplyingFromInside} name="isApplyingFromInside" value='true' checked={applyingFromInside == 'true'} />
              <Label className="form-check-label" check htmlFor="isApplyingFromInside" style={styleLabelBold}>Yes</Label>
  
              </FormGroup>
  
              <FormGroup check inline>
              <Input className="form-check-input" type="radio" id="isApplyingFromInside" onChange={handleChangeIsApplyingFromInside} name="isApplyingFromInside" value='false' checked={applyingFromInside == 'false'} />
              <Label className="form-check-label" check htmlFor="isApplyingFromInside" style={styleLabelBold}>No</Label>
  
              </FormGroup>
         
  
  
  
              
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Visa Status  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
            <Select
                    options={visaStatusName}
                    value={{ label: visaStatusLabel, value: visaStatusValue }}
                    onChange={(opt) => selectVisaStatus(opt.label, opt.value)}
                    name="visaStatusId"
                    id="visaStatusId"
                    required

                  />

                  {
                    visaError ? 
                    <span className='text-danger'>Visa status must be selected.</span>
                    :
                    null
                  }

            
            </Col>
          </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Source of Tution Fee  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
         
              <Input
              type='text'
              name='tutionFeeSource'
              id='tutionFeeSource'
              placeholder='Source of Tution Free'
              required
              defaultValue={applicationInformation?.tutionFeeSource}
              />

            
            </Col>
          </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Source of Fund  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
         
              <Input
              type='text'
              name='sourceOfFund'
              id='sourceOfFund'
              placeholder='Source of Fund'
              required
              defaultValue={applicationInformation?.sourceOfFund}
              />

            
            </Col>
          </FormGroup>

          <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Source of Sponsor  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">
         
              <Input
              type='text'
              name='sourceOfSponsor'
              id='sourceOfSponsor'
              placeholder='Source of Sponsor'
              defaultValue={applicationInformation?.sourceOfSponsor}
              required
              />

            
            </Col>
          </FormGroup>


              


              </>

              :

              null


             }


             {

              studentTypeLabel == 'EU/EEA' ?

              <>
              
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Date of Move To UK <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="date"
                      name="DateOfMoveToUk"
                      id="DateOfMoveToUk"
                      defaultValue={dateOfMoveToUk}

                      
                      
                    />

                   
                  </Col>
                </FormGroup>

                
              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Is Stayed Outside EU/UK in Last 3 Years?  <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
  
              
              <FormGroup check inline>
              <Input className="form-check-input" type="radio" id=" isStayedOutsideEU_UkinLast3Years" onChange={handleChangeIsStayedoutsideUkInLastThreeYears} name="isStayedOutsideEU_UkinLast3Years" value='true' checked={isStayedOutsideUKInLastThreeYears == 'true'} />
              <Label className="form-check-label" check htmlFor="isStayedOutsideEU_UkinLast3Years" style={styleLabelBold}>Yes</Label>
  
              </FormGroup>
  
              <FormGroup check inline>
              <Input className="form-check-input" type="radio" id="isStayedOutsideEU_UkinLast3Years" onChange={handleChangeIsStayedoutsideUkInLastThreeYears} name="isStayedOutsideEU_UkinLast3Years" value='false' checked={isStayedOutsideUKInLastThreeYears == 'false'} />
              <Label className="form-check-label" check htmlFor="isStayedOutsideEU_UkinLast3Years" style={styleLabelBold}>No</Label>
  
              </FormGroup>
  
  
  
              
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Is Have Pre-Settlement Status?  <span className="text-danger">*</span>{" "}
              </span>
            </Col>
            <Col md="6">

            
            

            <FormGroup check inline>
            <Input className="form-check-input" type="radio" id=" isHavePre_Settlementstatus" onChange={handlePreSettlementStatus} name="isHavePre_Settlementstatus" value='true' checked={preSettlementStatus == 'true'} />
            <Label className="form-check-label" check htmlFor="isHavePre_Settlementstatus" style={styleLabelBold}>Yes</Label>

            </FormGroup>

            <FormGroup check inline>
            <Input className="form-check-input" type="radio" id="isHavePre_Settlementstatus" onChange={handlePreSettlementStatus} name="isHavePre_Settlementstatus" value='false' checked={preSettlementStatus == 'false'} />
            <Label className="form-check-label" check htmlFor="isHavePre_Settlementstatus" style={styleLabelBold}>No</Label>

            </FormGroup>



            
            </Col>
          </FormGroup>

        


              
              </>

              : 

              null



             }


  <FormGroup row
       className="has-icon-left position-relative"
       style={{ display: "flex", justifyContent: "end" }}
     >
       
   <Col md="5">
   


    <ButtonForFunction
    name={'Submit'}
    type={'submit'}
    className="mr-1 mt-3 badge-primary"
    
    />

   </Col>

      
     </FormGroup>


     <FormGroup
            className="has-icon-left position-relative"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
           

            <ButtonForFunction
            className={"mr-1 mt-3 btn-warning"}
            func={cancelForm}
            name={"cancel"}

            />

         
            <Button.Ripple
              type='submit'
              disabled = {studentTypeValue !== 0 ? false : true}

              className="mr-1 mt-3 btn-warning"
            >
            Next
            <i className="fas fa-arrow-right-long ms-1"></i>
           
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

export default ApplicationInformation;