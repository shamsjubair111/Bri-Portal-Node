import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import Select from "react-select";

import { useToasts } from "react-toast-notifications";
import post from '../../../../helpers/post';

import get from '../../../../helpers/get';
import ButtonForFunction from '../../Components/ButtonForFunction';
import ButtonLoader from '../../Components/ButtonLoader';

const StudentApplicationForm = () => {

    const history = useHistory();
    const {id} = useParams();
  const [progress,setProgress] = useState(false);
    
  
    const [applicationInformation, setApplicationInformation] = useState({});
    const [activetab, setActivetab] = useState("1");
    const [appliedStudentFinance, setIsAppliedStudentFinance] = useState('false');
    const [applyingFromInside, setIsApplyingFromInside] = useState('false');
    const [isStayedOutsideUKInLastThreeYears, setIsStayedOutsideUkInLastThreeYears] = useState('false');
    const [preSettlementStatus, setPresettlementStatus] = useState('false');
    const [studentType, setStudentType] = useState([]);
    const [studentTypeLabel, setStudentTypeLabel] = useState('Select Student Type');
    const [studentTypeValue, setStudentTypeValue] = useState(0);
    const [dateOfMoveToUk, setDateOfMoveToUk] = useState('');
    const [financeDetails, setFinanceDetails] = useState('');
  
    const [success, setSuccess]  = useState(false);
  
  
    const [visaStatus, setVisaStatus] = useState([]);
    const [visaStatusLabel, setVisaStatusLabel] = useState('Select Visa Status');
    const [visaStatusValue, setVisaStatusValue] = useState(0);
    const [code, setCode] = useState('');
  
    const [visaError, setVisaError] = useState(false);
  
  
   
    
  
    const [applicationId, setApplicationId] = useState(0);
  
    const {addToast} = useToasts();
    const [buttonStatus,setButtonStatus] = useState(false);

    
  useEffect(()=>{

    get('StudentTypeDD/Index')
    .then(res => {
      
      setStudentType(res);
    })

    get('VisaTypeDD/Index')
    .then(res => {
      
      setVisaStatus(res);
    })

    get(`ApplicationInfo/GetByStudentId/${id}`)
    .then(res => {
      
      
      setApplicationInformation(res);
      setStudentTypeLabel(res?.student?.studentType?.name);
      setStudentTypeValue(res?.student?.studentType?.id);
     
    
    })

   



  },[])


  const styleLabelBold = {
    // fontWeight: "bold"
  };

  // on change radio button

    
  const handleChangeIsAppliedStudentFinance = (event) => {
    
    setIsAppliedStudentFinance(event.target.value)
}



  const handleChangeIsApplyingFromInside = (event) => {
    
    setIsApplyingFromInside(event.target.value);
}



  const handleChangeIsStayedoutsideUkInLastThreeYears = (event) => {
    
    setIsStayedOutsideUkInLastThreeYears(event.target.value);
}




  const handlePreSettlementStatus = (event) => {
    
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
    
  
  
      if(studentTypeValue == 3 && visaStatusValue == 0){
    
  
          setVisaError(true);
    
        }
     
   
     else{
  
      setButtonStatus(true);
      setProgress(true);
      post('ApplicationInfo/Create',subData)
      .then(res => {
        setProgress(false);
        setButtonStatus(false);
        
        if(res?.status == 200){
          if(res?.data?.isSuccess == true){

            addToast(res.data.message,{
              appearance: 'success',
              autoDismiss: true
            })
            history.push(`/studentPersonal/${id}`);
          }
          else{
            addToast(res?.data?.message, {
              appearance: "error",
              autoDismiss: true,
            });
          }

        }
       
    
      })
  
     }
  
  }

  
    return (
        <div>

    <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Application Information</h3>
          <div className="page-header-back-to-home">
            <span className="text-white" >
              {" "}
               12% Completed
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
      <CardBody>

     
   

       

        

  
            <Form onSubmit={handleSubmit}   className="mt-5">

          

            <input
            type='hidden'
            name='studentId'
            id='studentId'
            value={id}
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
                Applied Student Finance?
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
                Finance Application Details
              </span>
            </Col>
            <Col md="6">
             <Input
                type="textarea"
                
                name="financeApplicationDetails"
                id="financeApplicationDetails"
               placeholder='Enter Finance Application Details'
              
             
              />

            
            </Col>
          </FormGroup>

        <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Code
              </span>
            </Col>
            <Col md="6">
             <Input
                type="text"
                name="code"
                id="code"
               placeholder='Enter Code'
                
               
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
                  Applying From Inside?
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
                    <span className='text-danger'>Visa status is required.</span>
                    :
                    null
                  }

            
            </Col>
          </FormGroup>

          

          <FormGroup row className="has-icon-left position-relative">
            <Col md="2">
              <span>
                Source Of Fund
              </span>
            </Col>
            <Col md="6">
         
             

            
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
                      Date Of Move To UK
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="date"
                      name="DateOfMoveToUk"
                      id="DateOfMoveToUk"
                    

                      
                      
                    />

                   
                  </Col>
                </FormGroup>

                
              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Stayed Outside EU/UK In Last 3 Years? 
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
                Have Pre-Settlement Status? 
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





<div className='row'>
    <div className='col-md-8 d-flex justify-content-end'>

    <ButtonForFunction
    name={progress ? <ButtonLoader/> : 'Save & Next'}
    type={'submit'}
    className=" mt-3 badge-primary"
    disable={buttonStatus}
    
    />
    </div>

</div>




  
            </Form>

       
      </CardBody>
    </Card>
            
        </div>
    );
};

export default StudentApplicationForm;