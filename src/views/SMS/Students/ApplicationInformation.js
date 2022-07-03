import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label } from 'reactstrap';
import Select from "react-select";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import put from '../../../helpers/put';



const ApplicationInformation = () => {

  const history = useHistory();
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

  const [visaStatus, setVisaStatus] = useState([]);
  const [visaStatusLabel, setVisaStatusLabel] = useState('Visa status');
  const [visaStatusValue, setVisaStatusValue] = useState(0);
  const [code, setCode] = useState('');


  const applicationStudentTypeId =  localStorage.getItem('applictionStudentTypeId');
  const applicationStudentId = localStorage.getItem('applictionStudentId');

  const [applicationId, setApplicationId] = useState(0);

  const {addToast} = useToasts();

  const method = localStorage.getItem('method');
 




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

    get(`StudentType/Get/${applicationStudentTypeId}`)
    .then(res => {
      console.log('bbbbbbbbbbbbbbbbbbb',res);
      setStudentTypeValue(res?.id);
      setStudentTypeLabel(res?.name);
    })


    get(`ApplicationInfo/GetByStudentId/${applicationStudentId}`)
    .then(res => {
      console.log('application post response', res);
      setStudentTypeLabel(res?.student?.studentType?.name);
      setStudentTypeValue(res?.student?.studentType?.id);
      setDateOfMoveToUk(res?.dateOfMoveToUk);
      setIsStayedOutsideUkInLastThreeYears(`${res?.isStayedOutsideEU_UkinLast3Years}`);
      setPresettlementStatus(`${res?.isHavePre_Settlementstatus}`);
      setIsAppliedStudentFinance(`${res?.isAppliedStudentFinance}`);
      setFinanceDetails(res?.financeApplicationDetails);
      setCode(res?.code);
      setStudentTypeValue(res?.student?.studentType?.id);
      setStudentTypeLabel(res?.student?.studentType?.name);
      setIsApplyingFromInside(`${res?.isApplyingFromInside}`);
      setVisaStatusLabel(res?.visaStatus?.name);
      setVisaStatusValue(res?.visaStatusId);
      setApplicationId(res?.id);


    })

  },[])


  const backToDashboard = () => {
    history.push('/');
}

const styleLabelBold = {
  // fontWeight: "bold"
};


const toggle = (tab) => {
  setActivetab(tab);
  
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


       // select  Student type
const selectVisaStatus = (label, value) => {
setVisaStatusLabel(label);
setVisaStatusValue(value);


}


const handleSubmit = (event) => {


  event.preventDefault();
  const subData = new FormData(event.target);
  for( var x of subData.values()){
    console.log(x);
  }

   if(method == 'put'){

    put(`ApplicationInfo/Update`,subData)
    .then(res => {
      console.log('1st put response',res);
      if(res?.status == 200){
       
        addToast(res?.data?.message,{
          appearance: 'success',
          autoDismiss: true
        })
        
        history.push('/addStudentinformation');
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
        history.push('/addStudentinformation');
      }
  
    })

   }

}


const cancelForm = () => {
  history.push('/');
}





    return (
        <div>

    <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Application Information</h3>
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
         

        </Nav>

        <TabContent activeTab={activetab}>
          <TabPane tabId="1">
            <Form onSubmit={handleSubmit}   className="mt-5">

            {
              method == 'put' ? 
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
                      
                      required
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

           

             <FormGroup
             className="has-icon-left position-relative"
             style={{ display: "flex", justifyContent: "space-between" }}
           >
             <Button.Ripple
               type="submit"
               className="mr-1 mt-3 btn-warning"
               onClick= {cancelForm}
             >
               Cancel
             </Button.Ripple>
             <Button.Ripple
               type="submit"
               className="mr-1 mt-3 badge-primary"
             >
               Submit
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