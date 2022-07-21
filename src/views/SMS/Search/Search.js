import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import Select from 'react-select';

const Search = () => {



    const [advance,setAdvance] = useState(false);

    const [studentLabel, setStudentLabel] = useState('Select Student');
    const [studentValue, setStudentValue] = useState(0);

    const [studentTypeLabel, setStudentTypeLabel] = useState('Select Student Type');
    const [studentTypeValue, setStudentTypeValue] = useState(0);

    const [universityCountryLabel, setUniversityCountryLabel] = useState('Select University Country');
    const [universityCountryValue, setUniversityCountryValue] = useState(0);

    const [cityLabel, setCityLabel] = useState('Select Location/City');
    const [cityValue, setCityValue] = useState(0);

    const [universityLabel, setUniversityLabel] = useState('Select University');
    const [universityValue, setUniversityValue] = useState(0);

    const [courseLabel, setCourseLabel] = useState('Select Course');
    const [courseValue, setCourseValue] = useState(0);





    return (
        <div>
    

   


            <Card>
        <CardHeader>
         
        </CardHeader>
        <CardBody>

        <form>

        
 <div className='row'>

 <div className='col-md-2'>

 <span className="pl-2 search-card-title-1" > Select Student Name</span>

 
 </div>

 <div className='col-md-10'>

 <FormGroup >
       
 <Select 
 value={{ label: studentLabel, value: studentValue }}
        name="providerTypeId"
        id="providerTypeId"
        required
       
        />

 
</FormGroup>
 </div>



 </div>
    
 

        <div className='row'>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
        value={{ label: studentTypeLabel, value: studentTypeValue }}
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
        value={{ label: universityCountryLabel, value: universityCountryValue }}
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
        value={{ label: cityLabel, value: cityValue }}
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
        value={{ label: universityLabel, value: universityValue }}
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
        value={{ label: courseLabel, value: courseValue }}
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>



        </div>


    {

        advance? 


        <div className='row'>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>


        <FormGroup>
      
       
     
     
        <Select 
              
               name="providerTypeId"
               id="providerTypeId"
               required
              
               />

      </FormGroup>


        </div>



        </div>

        :

        null

    }


   
<div className='d-flex justify-content-end'>
    <div className='me-1'>
    <Button className='badge-primary' onClick={()=> setAdvance(true)}>
    Advance
    </Button>
    </div>
    
     

   <div className='ms-1'>
   <Button className='btn btn-danger' onClick={()=> setAdvance(false)}>
   Clear
   
   </Button>
   </div>

    </div>
    
    
 




       

     

      



 

 
        
        </form>
   
            </CardBody>
            </Card>
            
        </div>
    );
};

export default Search;