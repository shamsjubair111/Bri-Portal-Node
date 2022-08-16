import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import Select from 'react-select';
import ButtonForFunction from '../Components/ButtonForFunction';
import { useHistory, useLocation } from 'react-router-dom';


const Search = () => {

   
    const [advance,setAdvance] = useState(false);
    const history= useHistory();
    

  

   

    const [studentLabel, setStudentLabel] = useState('Select Student');
    const [studentValue, setStudentValue] = useState(0);

    const [studentTypeLabel, setStudentTypeLabel] = useState('Select');
    const [studentTypeValue, setStudentTypeValue] = useState(0);

    const [universityCountryLabel, setUniversityCountryLabel] = useState('Select');
    const [universityCountryValue, setUniversityCountryValue] = useState(0);

    const [cityLabel, setCityLabel] = useState('Select');
    const [cityValue, setCityValue] = useState(0);

    const [universityLabel, setUniversityLabel] = useState('Select');
    const [universityValue, setUniversityValue] = useState(0);

    const [courseLabel, setCourseLabel] = useState('Select');
    const [courseValue, setCourseValue] = useState(0);

    




    return (
        <div>

          {/* <DummyComponent></DummyComponent> */}
    
        <div className='row'>

          <div className='col-md-3'>
            <Card className='pb-2'>
            <CardBody>

            <div className='mb-2 text-center'>
            <span className="search-card-title-1" >Select Student:</span>
            </div>
            
           
           
            <Select 
            value={{ label: studentLabel, value: studentValue }}
            name="providerTypeId"
            id="providerTypeId"
            
       
        />

            </CardBody>

            </Card>


            <div className='search-card2-custom-style'>

            
            <Card className='p-3'>
              

          <span className='search-card-title-1'> Filter University or Program</span>
          <span className="underline-span-style-1"></span>

          <div className='mt-3 mb-2'>
          <span className="search-card-title-2" >Select Student Type</span>
            

          </div>

             
        <Select 
        value={{ label: studentTypeLabel, value: studentTypeValue }}
               name="providerTypeId"
               id="providerTypeId"
             
              
               />

       
          <div className='mt-4 mb-2'>
          <span className="search-card-title-2" >Select University Country</span>
            

          </div>

            <Select 
            value={{ label: universityCountryLabel, value: universityCountryValue }}
               name="providerTypeId"
               id="providerTypeId"
              
              
               />


          <div className='mt-4 mb-2'>
          <span className="search-card-title-2" >Select Location/City</span>
            

          </div>

                <Select 
               value={{ label: cityLabel, value: cityValue }}
               name="providerTypeId"
               id="providerTypeId"
              
              
               />

          <div className='mt-4 mb-2'>
          <span className="search-card-title-2" >Select University</span>
          </div>
              <Select 
              value={{ label: universityLabel, value: universityValue }}
               name="providerTypeId"
               id="providerTypeId"
              
              
               />

        
          <div className='mt-4 mb-2'>
          <span className="search-card-title-2" >Select Course</span>
          </div>

              <Select 
               value={{ label: courseLabel, value: courseValue }}
               name="providerTypeId"
               id="providerTypeId"
             
              
               />


              {

              advance? 
              
              <>

            <div className='mt-4 mb-2'>
            <span className="search-card-title-2" >Select Univesity Type</span>
            </div>

            <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               
              
               />


            <div className='mt-4 mb-2'>
            <span className="search-card-title-2" >Select Intakes</span>
            </div>

            <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               
              
               />


            <div className='mt-4 mb-2'>
            <span className="search-card-title-2" >Select Programme Level</span>
            </div>

            <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               
              
               />

            <div className='mt-4 mb-2'>
            <span className="search-card-title-2" >Select Department Category</span>
            </div>

            <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               
              
               />

            <div className='mt-4 mb-4'>
            <span className="search-card-title-2" >Select Department</span>
            </div>

            <div className='mb-2'>
            <span className="search-card-title-2" >SubCategory</span>
            </div>

            
            <Select 
              
              name="providerTypeId"
              id="providerTypeId"
              
             
              />
            

              </>
           


              :

              null

              }

<div className='d-flex justify-content-start mt-3'>
    <div className='me-1'>
    <Button className='badge-primary' onClick={()=> setAdvance(true)}>
    Advance
    </Button>

    {/* <ButtonForFunction
      className={'badge-primary'}
      func={()=> setAdvance(true)}
      name={" Advance"}
      permission={6}
    /> */}

    </div>


    
     

   <div className='ms-1'>
   <Button className='btn btn-danger' onClick={()=> setAdvance(false)}>
   Clear
   
   </Button>
   </div>

    </div>






 

  

          </Card>

          </div>

          </div>

          <div className='col-md-9'>

            <Card>
              <CardBody>

              </CardBody>
            </Card>

          </div>


        </div>

   


        
            
        </div>
    );
};

export default Search;