import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip } from 'reactstrap';
import Select from 'react-select';
import ButtonForFunction from '../Components/ButtonForFunction';
import {  useHistory, useLocation } from 'react-router-dom';
import get from '../../../helpers/get';



const Search = () => {

   
    const [advance,setAdvance] = useState(false);
    const history= useHistory();
    
    const [activetab, setActivetab] = useState("1");
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

    const [checkActiveTab, setCheckActiveTab] = useState(true);

    const [universityType,setUniversityType] = useState([]);
    const [campus,setCampus] = useState([]);
    const [university,setUniversity] = useState([]);
    const [country,setCountry] = useState([]);
    const [state,setState] = useState([]);
    const [student,setStudent] = useState([]);
    const [intake,setIntake] = useState([]);
    const [department, setDepartment] = useState([]);
    const [studentType, setStudentType] = useState([])
    const [programLevel,setProgramLevel] = useState([]);
    const [SubDepartment, setSubDepartment] = useState([]);
    const [pattern,setPattern] = useState([]);
    const [programName, setProgramName] = useState('null');  

    const [studentId, setStudentId] = useState(0);

    const [stateVal, setStateVal] = useState(0);

    const [success, setSuccess] = useState(false);

    const [page,setPage] = useState(1);

    const [data,setData] = useState([]);


    

    console.log(checkActiveTab);

    useEffect(()=>{

      get(`SearchFilter/UniversityTypes`)
      .then(res => {
       
        setUniversityType(res);
      })

      get(`SearchFilter/Campus/${universityValue}`)
      .then(res => {
       
        setCampus(res);
      })

      get(`SearchFilter/Universities/${universityCountryValue}/${universityTypeValue}/${cityValue}`)
      .then(res => {
      
        setUniversity(res);
      })
      get(`SearchFilter/Countries`)
      .then(res => {
        
        setCountry(res);
      })

      get(`SearchFilter/Students`)
      .then(res => {
      
        setStudent(res);
      })

      get(`SearchFilter/Intakes`)
      .then(res => {
      
        setIntake(res);
      })

      get(`SearchFilter/Departments`)
      .then(res => {
        
        setDepartment(res);
      })

      get(`SearchFilter/StudentTpes`)
      .then(res => {
       
        setStudentType(res);
      })

      get(`SearchFilter/ProgramLevels`)
      .then(res => {
       
        setProgramLevel(res);
      })

      get(`SearchFilter/SubDepartments/${departmentValue}`)
      .then(res => {
       
        setSubDepartment(res);
      })

      get(`SearchFilter/States/${stateVal}`)
      .then(res => {
      
        setState(res);
      })

      get(`ApplyFilter/Index/${page}/${dataSizeValue}/${sortValue}/${studentId}/${universityTypeValue}/${universityValue}/${campusValue}/${universityCountryValue}/${cityValue}/${studentTypeValue}/${departmentValue}/${subValue}/${programValue}/${intakeValue}/${patternValue}/${programName}`)
    .then(res => {
      console.log('Large Api Checking Response',res?.result?.models);
      setData(res?.result?.models);
    })

     

    },[success])

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

  const detailedDataInformation = () =>{

    get(`ApplyFilter/Index/${page}/${dataSizeValue}/${sortValue}/${studentId}/${universityTypeValue}/${universityValue}/${campusValue}/${universityCountryValue}/${cityValue}/${studentTypeValue}/${departmentValue}/${subValue}/${programValue}/${intakeValue}/${patternValue}/${programName}`)
    .then(res => {
      console.log('Large Api Checking Response',res);
    })

  }
 

  const toggle1 = (tab) => {
    setActivetab(tab);
    setCheckActiveTab(true);
    
  };

  const toggle2 = (tab) => {
    setActivetab(tab);
    setCheckActiveTab(false);
    
  };

  const dataSizeName = showArray.map((dsn) => ({ label: dsn?.name, value: dsn?.id }));
  
  const sortSize = sortingOrder.map((srt)=> ({label: srt?.name, value: srt?.id }))

  const uniTypeOptions = universityType?.map((uni)=> ({
    label: uni?.name,
    value: uni?.id
  }));


  const campusOptions = campus?.map((cam)=> ({label: cam?.name, value: cam?.id}))

  const universityOptions = university?.map((un)=> ({label: un?.name, value: un?.id}))

  const countryOptions = country?.map((coun)=> ({label: coun?.name, value: coun?.id}))

  const stateOptions = state?.map((st)=> ({label: st?.name, value: st?.id}))

  const departmentOptions = department?.map((dept)=> ({label: dept?.name, value: dept?.id}))

  const studentTypeOptions = studentType?.map((stp)=> ({label: stp?.name, value: stp?.id}))

  const programLevelOptions = programLevel?.map((pgl)=> ({label: pgl?.name, value: pgl?.id}))

  const subDepartmentOptions = SubDepartment?.map((sub)=> ({label: sub?.name, value: sub?.id}))
   


    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        background: '#fff',
        borderColor: '#9e9e9e',
        minHeight: '30px',
        height: '30px',
        boxShadow: state.isFocused ? null : null,
        
      }),

      menu: () => ({
        
        overflowY: 'auto'
        
      }),
     
     
  
      // valueContainer: (provided, state) => ({
      //   ...provided,
      //   height: '30px',
      //   padding: '0 6px'
      // }),
  
      // input: (provided, state) => ({
      //   ...provided,
      //   margin: '0px',
      // }),
      // indicatorSeparator: state => ({
      //   display: 'none',
      // }),
      // indicatorsContainer: (provided, state) => ({
      //   ...provided,
      //   height: '30px',
      // }),
    };

    const selectUniversity = (label,value) => {
      setUniversityLabel(label);
      setUniversityValue(value);
      get(`SearchFilter/Campus/${value}`)
      .then(res => {
       
        setCampus(res);
      })
    }
    const selectCountry = (label,value) => {
      
      setUniversityCountryLabel(label);
      setUniversityCountryValue(value);

      get(`SearchFilter/States/${value}`)
      .then(res => {
        setState(res);
      })
      get(`SearchFilter/Universities/${value}/${universityTypeValue}/${cityValue}`)
      .then(res => {
        setUniversity(res);
      })

    }
    const selectState = (label,value) => {
     
      setCityLabel(label);
      setCityValue(value);

     

    }
    const selectUniversityType = (label,value) => {
      setUniversityTypeLabel(label);
      setUniversityTypeValue(value);
      get(`SearchFilter/Universities/${universityCountryValue}/${value}/${cityValue}`)
      .then(res => {
        setUniversity(res);
      })
    }

    const selectDepartment = (label,value) => {
      setDepartmentLabel(label);
      setDepartmentValue(value);
      get(`SearchFilter/SubDepartments/${value}`)
      .then(res => {
       
        setSubDepartment(res);
      })
    }

    const selectSubDepartment = (label,value) => {
      setSubLabel(label);
      setSubValue(value);
    }

    const selectStudentType = (label,value) => {
      setStudentTypeLabel(label);
      setStudentTypeValue(value);
    }

    const selectProgramLevel = (label,value) => {
      setProgramLabel(label);
      setProgramValue(value);
    }

    const selectCampus = (label,value) => {
      setCampusLabel(label);
      setCampusValue(value);
    }

     const selectOrder = (label, value) => {
      // console.log("value", label, value);
    
      setDataSizeLabel(label);
      setDataSizeValue(value);
   
    };

    const selectSort = (label,value) => {
      setSortLabel(label);
      setSortValue(value);
    }

    const handleProgramName = (e) => {
      setProgramName(e.target.value);
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

      setSuccess(!success);


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
  onChange={handleProgramName}
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
 options={uniTypeOptions}
value={{ label: universityTypeLabel, value: universityTypeValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectUniversityType(opt.label, opt.value)}

     />




  <Select 
  className='mt-3'
   styles={customStyles}
   options={countryOptions}
  value={{ label: universityCountryLabel, value: universityCountryValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectCountry(opt.label, opt.value)}
    
     />



      <Select
      className='mt-3' 
      options={stateOptions}
       styles={customStyles}
     value={{ label: cityLabel, value: cityValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectState(opt.label, opt.value)}
    
     />

<Select 
    className='mt-3'
     styles={customStyles}
     options={universityOptions}
     value={{ label: universityLabel, value: universityValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectUniversity(opt.label, opt.value)}
    
     />



    <Select
    className='mt-3' 
     styles={customStyles}
     options={campusOptions}
    value={{ label: campusLabel, value: campusValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectCampus(opt.label, opt.value)}
    
    
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
 options={studentTypeOptions}
value={{ label: studentTypeLabel, value: studentTypeValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectStudentType(opt.label, opt.value)}

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
     options={programLevelOptions}
    value={{ label: programLabel, value: programValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectProgramLevel(opt.label, opt.value)}
     
    
     />



  <Select 
      className='mt-3'
      styles={customStyles}
      options={departmentOptions}
     value={{ label: departmentLabel, value: departmentValue }}
     name="providerTypeId"
     id="providerTypeId"
     onChange={(opt) => selectDepartment(opt.label, opt.value)}
     
    
     />





  
  <Select 
  className='mt-3'
  styles={customStyles}
  options={subDepartmentOptions}
 value={{ label: subLabel, value: subValue }}
 onChange={(opt) => selectSubDepartment(opt.label, opt.value)}
    
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

        <div className='col-md-6'>

        <Nav tabs>

        <NavItem>
        <NavLink active={activetab === "1"} onClick={() => toggle1("1")}>
          Application 
        </NavLink>
        </NavItem>

        </Nav>
      
       
       
    
      

    </div>


    <div className='col-md-6'>

    <Nav tabs>

    <NavItem>
    <NavLink  active={activetab === "2"} onClick={() => toggle2("2")}>
      University
    </NavLink>
    </NavItem>

</Nav>

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

    <hr/>
    
      {/* Showing University Program Start */}


    {
      checkActiveTab ?
      
   <>
   
   {
    data?.length <1 ?

    <div className='text-center'>
      <span className='nodata-found-style'>No Data Found</span>
    </div>

    :

    <span>{data?.length} results Found</span>

   }

   </>

    :


    <div>

    <h1>University Programs</h1>

</div>
     
    }

    {/* Showing University Program End */}

   


</div>

  </div>

 
            
        </div>
    );
};

export default Search;