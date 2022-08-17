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

    const [studentTypeLabel, setStudentTypeLabel] = useState('Select Student Type');
    const [studentTypeValue, setStudentTypeValue] = useState(0);

    const [campusLabel, setCampusLabel] = useState('Select University Campus');
    const [campusValue, setCampusValue] = useState(0)

    const [universityCountryLabel, setUniversityCountryLabel] = useState('Select Country');
    const [universityCountryValue, setUniversityCountryValue] = useState(0);

    const [cityLabel, setCityLabel] = useState('Select City/Location');
    const [cityValue, setCityValue] = useState(0);

    const [universityTypeLabel, setUniversityTypeLabel] = useState('Select University Type');
    const [universityTypeValue, setUniversityTypeValue] = useState(0);

    const [universityLabel, setUniversityLabel] = useState('Select University');
    const [universityValue, setUniversityValue] = useState(0);

    const [intakeLabel,setIntakeLabel] = useState('Select Intakes');
    const [intakeValue, setIntakeValue] = useState(0);

    const [programLabel,setProgramLabel] = useState('Select Programme Level');
    const [programValue,setProgramValue]= useState(0);

    const [departmentLabel,setDepartmentLabel] = useState('Select Department Category');
    const [departmentValue, setDepartmentValue] = useState(0);

    const [subLabel,setSubLabel] = useState('Select SubDepartment Category');
    const [subValue,setSubValue] = useState(0);

    const [programsActive, setProgramsActive] = useState(true);

    const [dataSizeLabel,setDataSizeLabel] = useState('20');
    const [dataSizeValue,setDataSizeValue] = useState(20);

    const [sortLabel,setSortLabel] = useState('A-Z');
    const [sortValue, setSortValue] = useState(1);

    const [selectTab1,setSelectTab1] = useState(true);
    const [selectTab2,setSelectTab2] = useState(false);

    const [patternLabel,setPatternLabel] = useState('Select Delivery Pattern');
    const [patternValue, setPatternValue] = useState(0);

    const sortingOrder = [
     
      {
        name: 'A-Z',
        id: 1
      },
      {
      name: 'Z-A',
      id: 2 
      }
    ]

    const showArray = [
      {
      name: '10',
      id: 10
    },
    {
      name: '20',
      id: 20
    },
    {
      name: '50',
      id: 50
    },
    {
      name: '100',
      id: 100
    }
    
    
  ]

  const selectPrograms = () => {
    setSelectTab1(true);
    setSelectTab2(false);
    
  }

  const selectUniversity = () => {
    setSelectTab1(false);
    setSelectTab2(true);

  }

  const dataSizeName = showArray.map((dsn) => ({ label: dsn?.name, value: dsn?.id }));
  
  const sortSize = sortingOrder.map((srt)=> ({label: srt?.name, value: srt?.id }))
   


    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        background: '#fff',
        borderColor: '#9e9e9e',
        minHeight: '30px',
        height: '30px',
        boxShadow: state.isFocused ? null : null,
      }),
  
      valueContainer: (provided, state) => ({
        ...provided,
        height: '30px',
        padding: '0 6px'
      }),
  
      input: (provided, state) => ({
        ...provided,
        margin: '0px',
      }),
      indicatorSeparator: state => ({
        display: 'none',
      }),
      indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '30px',
      }),
    };

     const selectOrder = (label, value) => {
      // console.log("value", label, value);
    
      setDataSizeLabel(label);
      setDataSizeValue(value);
   
    };

    const selectSort = (label,value) => {
      setSortLabel(label);
      setSortValue(value);
    }
  
    const clearAllDropdown = () => {

      setStudentLabel('Select Student');
      setStudentValue(0);
      setStudentTypeLabel('Select Student Type');
      setStudentTypeValue(0);
      setCampusLabel('Select University Campus');
      setCampusValue(0);
      setUniversityCountryLabel('Select University Country');
      setUniversityCountryValue(0);
      setCityLabel('Select City/Location')
      setCityValue(0);
      setUniversityTypeLabel('Select University Type');
      setUniversityTypeValue(0);
      setUniversityLabel('Select University');
      setUniversityValue(0);
      
      setIntakeLabel('Select Intakes');
      setIntakeValue(0);
      setProgramLabel('Select Programme Level');
      setProgramValue(0);
      setDepartmentLabel('Select Department Category');
      setDepartmentValue(0);
      setSubLabel('Select SubDepartment Category');
      setSubValue(0);
      setPatternLabel('Select Delivery Pattern');
      setPatternValue(0);


    }



    return (
        <div>

       
<div className='row'>

<div className='col-md-3 mb-5'>
  <Card className='pb-2'>
  <CardBody>

  <div className='mb-2'>
  <span className="search-card-title-1" >Applying For:</span>
  </div>
  
 
 
  <Select 
   styles={customStyles}
  value={{ label: studentLabel, value: studentValue }}
  name="providerTypeId"
  id="providerTypeId"
  

/>

  </CardBody>

  </Card>

  <Card className='pb-2'>
  <CardBody>

  <div className='mb-2'>
  <span className="search-card-title-1" >Search Program:</span>
  </div>
  
 
  <Input
  type='text'
  placeholder='Program Name'
  style={{border: '1px solidrgba(0,0,0,.125)'}}
  />



  </CardBody>

  </Card>

  


  <div>


    
  <Card>

    <CardBody>

  <span className='search-card-title-1'> Filter University</span>
<span className="underline-span-style-1"></span>


<Select 
className='mt-3'
 styles={customStyles}
value={{ label: universityTypeLabel, value: universityTypeValue }}
     name="providerTypeId"
     id="providerTypeId"

     />




  <Select 
  className='mt-3'
   styles={customStyles}
  value={{ label: universityCountryLabel, value: universityCountryValue }}
     name="providerTypeId"
     id="providerTypeId"
    
    
     />



      <Select
      className='mt-3' 
       styles={customStyles}
     value={{ label: cityLabel, value: cityValue }}
     name="providerTypeId"
     id="providerTypeId"
    
    
     />

<Select 
    className='mt-3'
     styles={customStyles}
     value={{ label: universityLabel, value: universityValue }}
     name="providerTypeId"
     id="providerTypeId"
   
    
     />



    <Select
    className='mt-3' 
     styles={customStyles}
    value={{ label: campusLabel, value: campusValue }}
     name="providerTypeId"
     id="providerTypeId"
    
    
     />





</CardBody>
  </Card>

 </div>

 <div className=''>

 <Card className='card-style-search'>

  <CardBody>

<span className='search-card-title-1'> Filter Program</span>
<span className="underline-span-style-1"></span>



   
<Select 
className='mt-3'
 styles={customStyles}
value={{ label: studentTypeLabel, value: studentTypeValue }}
     name="providerTypeId"
     id="providerTypeId"

     />



  <Select 
    className='mt-3'
    styles={customStyles}
   value={{ label: patternLabel, value: patternValue }}
     name="providerTypeId"
     id="providerTypeId"
     
    
     />

  <Select 
    className='mt-3'
    styles={customStyles}
   value={{ label: intakeLabel, value: intakeValue }}
     name="providerTypeId"
     id="providerTypeId"
     
    
     />



  <Select 
     className='mt-3'
     styles={customStyles}
    value={{ label: programLabel, value: programValue }}
     name="providerTypeId"
     id="providerTypeId"
     
    
     />



  <Select 
      className='mt-3'
      styles={customStyles}
     value={{ label: departmentLabel, value: departmentValue }}
     name="providerTypeId"
     id="providerTypeId"
     
    
     />





  
  <Select 
  className='mt-3'
  styles={customStyles}
 value={{ label: subLabel, value: subValue }}
    
    name="providerTypeId"
    id="providerTypeId"
    
   
    />

    <br/>


<div className='d-flex justify-content-end'>
<Button color='danger' onClick={clearAllDropdown}>
  Clear

</Button>
</div>





</CardBody>



</Card>

 </div>

  </div>
   
  <div className='col-md-9'>
    
 

      
   
   

  
     

    
    <div className='row' style={{width: '100%', margin: '0 auto'}}>


      <div className='col-md-6'>

        <div className='row'>

        <div className='col-md-6 text-center py-2 rounded-1 active-navlink-style' onClick={selectPrograms}>
      
       
      <span>Programs</span>
    
      

    </div>


    <div className='col-md-6 text-center py-2 rounded-1 inactive-navlink-style' onClick={selectUniversity}>

    <span>University</span>

    </div>

   

        </div>

     

      </div>

      <div className='col-md-6'>
       
        
        <div className='row'>
          <div className='col-md-6 d-flex align-items-center justify-content-space-evenly'>


         <div className='me-1'>
         Order By :
         </div>

        <Select
        className='ms-1'
                      options={sortSize}
                      value={{ label: sortLabel, value: sortValue }}
                      onChange={(opt) => selectSort(opt.label, opt.value)}
                      />


         
          </div>

          <div className='col-md-6 d-flex align-items-center justify-content-space-evenly'>

          <div className='me-1'>
         Showing :
         </div>

        <Select
        className='ms-1'
                      options={dataSizeName}
                      value={{ label: dataSizeLabel, value: dataSizeValue }}
                      onChange={(opt) => selectOrder(opt.label, opt.value)}
                      />

          </div>

        </div>


     


      </div>
      

    

    </div>
    


      
    <div>

      <hr/>



<Card className='p-2'>


    <div className='row'>


<div className='col-md-2'>
  <div className='search-img-style'>
  <img
  src='https://uapp.uk/assets/img/University/Logo_8ec66bc9-a26c-4aa5-ad85-23838f1ae733.jpg'
  className='w-75' 

  alt='logo-img'
  />
  </div>

</div>

<div className='col-md-10'>
 <div className='text-center'>
 <span className='university-title-style'>Anglia-Ruskin University-London Campus</span>
 <br/>
 <span className='span-style-search'><i className="fas fa-location-dot"></i> Central Ave, Gillingham, Chattam , South East, United Kingdom</span>
 </div>

</div>




    </div>


</Card>

<div className='row mt-3'>

  <div className='col-md-12'>
    <span className='course-name-style'>BSc (Hons) Business and Human Resource Management with Foundation Year</span>
    <br/>
    
  
    <div className='d-flex flex-wrap my-1'>
      <span className='available-style'>Available in:</span>
          <button className='btn-customStyle-1 ms-2'>Evening</button>

          <button className='btn-customStyle-2'>Evening Weekend</button>

          <button className='btn-customStyle-3'>Standard</button>

          <span className='available-style'>campuses</span>
    </div>

    <div className='row'>
      <div className='col-md-3'>
        <span className='p-style-1'>Tution fee</span>
        <br/>
        <span className='p-style-2'>Local - £ 9250</span>
        <br/>
        <span className='p-style-2'>EU - £ </span>

      </div>

      <div className='col-md-4'>
      <span className='p-style-1'>Level of Study</span>
        <br/>
        <span className='p-style-2'>Foundation programme</span>
        

      </div>

      <div className='col-md-3'>
      <span className='p-style-1'>Duration</span>
        <br/>
        <span className='p-style-2'>4 Years</span>


      </div>

      <div className='col-md-2'>
    <button className='button-style-search'>Apply</button>
    
  </div>

    </div>
    
  </div>

 

  

  <div>

  </div>



</div>


<div className='row mt-3'>

  <div className='col-md-12'>
    <span className='course-name-style'>BSc (Hons) Business and Law with Foundation Year</span>
    <br/>
    
  
    <div className='d-flex flex-wrap my-1'>
      <span className='available-style'>Available in:</span>
          <button className='btn-customStyle-1 ms-2'>Evening</button>

          <button className='btn-customStyle-2'>Evening Weekend</button>

          <button className='btn-customStyle-3'>Standard</button>

          <span className='available-style'>campuses</span>
    </div>

    <div className='row'>
      <div className='col-md-3'>
        <span className='p-style-1'>Tution fee</span>
        <br/>
        <span className='p-style-2'>Local - £ 9250</span>
        <br/>
        <span className='p-style-2'>EU - £ 9250</span>

      </div>

      <div className='col-md-4'>
      <span className='p-style-1'>Level of Study</span>
        <br/>
        <span className='p-style-2'>Foundation programme</span>
        

      </div>

      <div className='col-md-3'>
      <span className='p-style-1'>Duration</span>
        <br/>
        <span className='p-style-2'>4 Years</span>


      </div>

      <div className='col-md-2'>
    <button className='button-style-search'>Apply</button>
    
  </div>

    </div>
    
  </div>

 

  

  <div>

  </div>



</div>


<div className='row mt-3'>

  <div className='col-md-12'>
    <span className='course-name-style'>BSc (Hons) Business and Marketing with Foundation Year</span>
    <br/>
    
  
    <div className='d-flex flex-wrap my-1'>
      <span className='available-style'>Available in:</span>
          <button className='btn-customStyle-1 ms-2'>Evening</button>

          <button className='btn-customStyle-2'>Evening Weekend</button>

          <button className='btn-customStyle-3'>Standard</button>

          <span className='available-style'>campuses</span>
    </div>

    <div className='row'>
      <div className='col-md-3'>
        <span className='p-style-1'>Tution fee</span>
        <br/>
        <span className='p-style-2'>Local - £ 9250</span>
        <br/>
        <span className='p-style-2'>EU - £ 9250</span>

      </div>

      <div className='col-md-4'>
      <span className='p-style-1'>Level of Study</span>
        <br/>
        <span className='p-style-2'>Foundation programme</span>
        

      </div>

      <div className='col-md-3'>
      <span className='p-style-1'>Duration</span>
        <br/>
        <span className='p-style-2'>4 Years</span>


      </div>

      <div className='col-md-2'>
    <button className='button-style-search'>Apply</button>
    
  </div>

    </div>
    
  </div>

 

  

  <div>

  </div>



</div>


<div className='row mt-3'>

  <div className='col-md-12'>
    <span className='course-name-style'>BSc (Hons) Business and Tourism with Foundation Year</span>
    <br/>
    
  
    <div className='d-flex flex-wrap my-1'>
      <span className='available-style'>Available in:</span>
          <button className='btn-customStyle-1 ms-2'>Evening</button>

          <button className='btn-customStyle-2'>Evening Weekend</button>

          <button className='btn-customStyle-3'>Standard</button>

          <span className='available-style'>campuses</span>
    </div>

    <div className='row'>
      <div className='col-md-3'>
        <span className='p-style-1'>Tution fee</span>
        <br/>
        <span className='p-style-2'>Local - £ 9250</span>
        <br/>
        <span className='p-style-2'>EU - £ 9250</span>

      </div>

      <div className='col-md-4'>
      <span className='p-style-1'>Level of Study</span>
        <br/>
        <span className='p-style-2'>Foundation programme</span>
        

      </div>

      <div className='col-md-3'>
      <span className='p-style-1'>Duration</span>
        <br/>
        <span className='p-style-2'>4 Years</span>


      </div>

      <div className='col-md-2'>
    <button className='button-style-search'>Apply</button>
    
  </div>

    </div>
    
  </div>

 

  

  <div>

  </div>



</div>



    </div>
 



    




</div>

  </div>

 



        
            
        </div>
    );
};

export default Search;