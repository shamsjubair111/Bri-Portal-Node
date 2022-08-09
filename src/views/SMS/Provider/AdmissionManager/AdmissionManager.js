import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormGroup, Input } from 'reactstrap';
import get from '../../../../helpers/get';
import post from '../../../../helpers/post';
import Select from "react-select";
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const AdmissionManager = () => {
    const {id} = useParams();

    const [country,setCountry] = useState([]);
    const [state, setState] = useState([]);
    const  [countryLabel, setCountryLabel] = useState('Select country');
    const  [countryValue, setCountryValue] = useState(0);
    const  [stateLabel, setStateLabel] = useState('Select state');
    const  [stateValue, setStateValue] = useState(0);
    const [countryError, setCountryError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const {addToast} = useToasts();
    const history = useHistory();

    useEffect(()=>{
        get(`Country/Index`)
        .then( res=> {
            // console.log('Country list', res);
            setCountry(res);
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
        searchStateByCountry(value);
        setStateLabel('Select');
        setCountryError(false);
       
       
      }

      
    const searchStateByCountry = (countryValue) => {
        get(`State/GetbyCountryId/${countryValue}`)
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
        if(countryValue == 0){
          setCountryError(true);
        }
        if(stateValue == 0){
          setStateError(true);
        }
        else{

          post(`AdmissionManager/Create`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoDismiss: true
            })
            history.push('/providerList');
            }
             
          })

        }

       
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

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Title</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter title"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">First Name</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter first name"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Last Name</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter last name"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

               

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">email</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Phone Number</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="phoneNumber"
                        id="phonenumber"
                        placeholder="Enter phone number"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Post Code</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="postCode"
                        id="postCode"
                        placeholder="Enter post code"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">City</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                      
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
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
                  </FormGroup>

                  <FormGroup row >
                  <Col md="2">
                    <span className='pl-2'>
                       Country
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
                       State
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
                   <Button.Ripple
                        type="submit"
                        className="mr-1 mt-3 badge-primary"
                        // onClick={(e)=>handleSubmit(e)}
                      >
                        Submit
                      </Button.Ripple>
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