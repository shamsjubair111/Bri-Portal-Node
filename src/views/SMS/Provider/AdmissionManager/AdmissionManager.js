import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormGroup, Input } from 'reactstrap';
import get from '../../../../helpers/get';
import post from '../../../../helpers/post';
import Select from "react-select";
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { permissionList } from '../../../../constants/AuthorizationConstant';

const AdmissionManager = () => {
    const {id} = useParams();

    const permissions = JSON.parse(localStorage.getItem('permissions'));

    const [country,setCountry] = useState([]);
    const [state, setState] = useState([]);
    const  [countryLabel, setCountryLabel] = useState('Select Country');
    const  [countryValue, setCountryValue] = useState(0);
    const  [stateLabel, setStateLabel] = useState('Select State');
    const  [stateValue, setStateValue] = useState(0);
    const [countryError, setCountryError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const {addToast} = useToasts();
    const history = useHistory();

    const [title,setTitle] = useState([]);
    const [titleLabel,setTitleLabel] = useState('Select Title');
    const [titleValue,setTitleValue] = useState(0);
    const [titleError,setTitleError] = useState(false);
    const [emailError, setEmailError] = useState(true);

    useEffect(()=>{
        get(`CountryDD/index`)
        .then( res=> {
            // console.log('Country list', res);
            setCountry(res);
        })

        get('NameTittle/GetAll')
      .then(res => {
        console.log('title',res);
        setTitle(res);
      })

    },[])

    const backToProviderDetails = () => {
      history.push(`/providerDetails/${id}`);
    }

    const countryName = country?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));

      const selectCountry = (label, value) => {
        setCountryLabel(label);
        setCountryValue(value);
        setStateLabel('Select State');
        setStateValue(0);
        searchStateByCountry(value);
        // setStateLabel('Select');
        setCountryError(false);
      }

      const nameTitle = title?.map((singleTitle) => ({
        label: singleTitle.name,
        value: singleTitle.id,
      }));
  
  
               // select  Title
  const selectTitle = (label, value) => {
  
    setTitleError(false);
    setTitleLabel(label);
    setTitleValue(value);
    
   
   
  }

      
    const searchStateByCountry = (countryValue) => {
        get(`StateDD/Index/${countryValue}`)
        .then(res => {
          console.log('State',res);
          setState(res);
        })
      }

      const stateName = state?.map((branchState) => ({
        label: branchState.name,
        value: branchState.id,
      }));

      const selectState = (label, value) => {
        setStateLabel(label);
        setStateValue(value);
        setStateError(false);
    
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();

        const subData = new FormData(e.target);

         if(titleValue == 0 ){
          setTitleError(true);
          
        }
        else if(countryValue == 0){
          setCountryError(true);
        }
       else if(stateValue == 0){
          setStateError(true);
        }
        else if(emailError == false){
          setEmailError(emailError);
        }

       
        else{

          post(`AdmissionManager/Create`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoDismiss: true
            })
            history.push(`/providerDetails/${id}`);
            }
             
          })

        }

       
    }

    const handleEmail = (e) => {
      console.log(e.target.value);

      get(`Consultant/OnChangeEmail/${e.target.value}`)
      .then(res => {
        console.log('Checking Response', res);
        setEmailError(res);
      })
    }


    return (
        <div>


      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Create Admission Manager</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToProviderDetails}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Provider Details
            </span>
          </div>
        </CardHeader>
      </Card>


            <Card>
         
          <CardBody>
      <form onSubmit={handleSubmit}>

      <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span className="pl-2">
                      Title {' '}<span className='text-danger'>*</span>
                    </span>
                  </Col>
                  <Col md="4">
                  <Select
                      options={nameTitle}
                      value={{ label: titleLabel, value: titleValue }}
                      onChange={(opt) => selectTitle(opt.label, opt.value)}
                      name="nameTittleId"
                      id="nameTittleId"
                      required

                    />
                   
                    {
                      titleError && 
                      <span className='text-danger'>Title must be selected</span>
                    }

                  </Col>
                </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">First Name {' '}<span className='text-danger'>*</span></span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter First Name"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Last Name {' '}<span className='text-danger'>*</span></span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter Last Name"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

               

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Email {' '}<span className='text-danger'>*</span></span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        onBlur={handleEmail}
                        required
                      />

                    {
                      !emailError ? 

                      <span className='text-danger'>Email already exists</span>
                      :
                      null

                    }

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Password {' '}<span className='text-danger'>*</span></span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Phone Number {' '}<span className='text-danger'>*</span></span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="phoneNumber"
                        id="phonenumber"
                        placeholder="Enter Phone Number"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Post Code {' '}<span className='text-danger'>*</span></span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="postCode"
                        id="postCode"
                        placeholder="Enter Post Code"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">City {' '}<span className='text-danger'>*</span></span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter City"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  {/* <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Sequence Id</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="sequenceId"
                        id="sequenceId"
                        placeholder="Enter sqquence id"
                      
                        required
                      />

                    </Col>
                  </FormGroup> */}

                  <FormGroup row >
                  <Col md="2">
                    <span className='pl-2'>
                       Country {' '}<span className='text-danger'>*</span>
                    </span>
                  </Col>
                  <Col md="10" lg="4">
                    <Select
                      options={countryName}
                      value={{ label: countryLabel, value: countryValue }}
                      onChange={(opt) => selectCountry(opt.label, opt.value)}
                      name="countryId"
                      id="countryId"
                      required

                    />

                     {
                      countryError? 
                      <span className='text-danger'>Country must be selected</span>
                      :
                      null
                     } 

                
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span className='pl-2'>
                       State {' '}<span className='text-danger'>*</span>
                    </span>
                  </Col>
                  <Col md="4">
                    <Select
                      options={stateName}
                      value={{ label: stateLabel, value: stateValue }}
                      onChange={(opt) => selectState(opt.label, opt.value)}
                      name="stateId"
                      id="stateId"
                      required
                    />
                      {
                        stateError? 
                        <span className='text-danger'>State must be selected</span>
                        :
                        null
                      }
                 
                  </Col>
                </FormGroup>

             
   
                      <Input
                        type="hidden"
                        name="providerId"
                        id="providerId"
                        value={id}
                      
                        required
                      />

           
                  <FormGroup row>
                    <Col md='6'>
                   <div className='d-flex justify-content-end'>
                   {
                    permissions?.includes(permissionList?.Add_Admission_manager) ?
                    <Button.Ripple
                        type="submit"
                        className="mr-1 mt-3 badge-primary"
                        // onClick={(e)=>handleSubmit(e)}
                      >
                        Submit
                      </Button.Ripple>
                      : null
                   }
                   </div>
                    
                    </Col>



                  </FormGroup>

                  

              </form>
              </CardBody>
              </Card>
            
        </div>
    );
};

export default AdmissionManager;