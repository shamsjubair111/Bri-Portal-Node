import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip } from 'reactstrap';
import Select from 'react-select';
import ButtonForFunction from '../Components/ButtonForFunction';
import {  useHistory, useLocation } from 'react-router-dom';
import get from '../../../helpers/get';
import { rootUrl } from '../../../constants/constants';
import Pagination from "../../SMS/Pagination/Pagination";
import LinkButton from '../Components/LinkButton';



const Search = () => {

   const  [studentInfo, setStudentInfo] = useState({});

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
    const [programName, setProgramName] = useState('');  

    const [studentId, setStudentId] = useState(0);

    const [stateVal, setStateVal] = useState(0);

    const [success, setSuccess] = useState(false);

    const [page,setPage] = useState(1);

    const [data,setData] = useState([]);

    const [loadAll, setLoalAll] = useState(false);

    const [entity,setEntity] = useState(0);

    const [loading,setLoading] = useState(false);
    const [showNum, setShowNum] = useState(2);

    const [modal,setModal] = useState(false);

    const [modalIntake,setModalIntake] = useState([]);
    const [modalIntakeLabel,setModalIntakeLabel]= useState('Select Intake');
    const [modalIntakeValue,setModalIntakeValue] = useState(0);

    const [modalDeliveryPattern,setModalDeliveryPattern] = useState([]);
    const [modalDeliveryPatternLabel,setModalDeliveryPatternLabel] = useState('Select Delivery Pattern');
    const [modalDeliveryPatternValue,setModalDeliveryPatternValue] = useState(0);

  
    const [modalCampusLabel, setModalCampusLabel] = useState('Select Campus');
    const [modalCampusValue,setModalCampusValue] = useState(0);

    const [currentData, setCurrentData] = useState({});
    
    const [campusError, setCampusError] = useState(false);
    const [intakeError, setIntakeError] = useState(false);
    const [deliveryError, setDeliveryError] = useState(false);




  


    

    console.log(checkActiveTab);

    useEffect(()=>{

      // FAke api start

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res?.json())
      .then(data => {
        console.log(data[9]);
        setStudentInfo(data[9]);
        setStudentLabel(data[9].name);
      })

      // fake api end

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

     

     

    },[success])

    useEffect(()=>{
      const  programLevelName = 
        programName == ''? 'null' : programName;

        setLoading(true);
        
      get(`ApplyFilter/Index/${page}/${dataSizeValue}/${sortValue}/${studentId}/${universityTypeValue}/${universityValue}/${campusValue}/${universityCountryValue}/${cityValue}/${studentTypeValue}/${departmentValue}/${subValue}/${programValue}/${intakeValue}/${patternValue}/${programLevelName}`)
      .then(res => {
        console.log('Large Api Checking Response',res);
        setData(res?.result?.models);
        setEntity(res?.result?.totalEntity);
        setLoading(false);
      })

    },[success, page, dataSizeValue, sortValue, studentId, universityTypeValue, universityValue, campusValue, universityCountryValue, cityValue, studentTypeValue, departmentValue, subValue, programValue, intakeValue, patternValue, programName])

    const showAllData = () => {
      setLoalAll(true);
    }

    const collapseALl = () =>{
      setLoalAll(false);
    }

     //  change page
  const paginate = (pageNumber) => {
    setPage(pageNumber);
    // setCallApi((prev) => !prev);
  };

  

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


  const fCampus = [
     {
      id: 1,
      name: 'Dhaka'

  },

  {
    id: 2,
    name: 'Chittagong'
  }

]

  const fIntake = [
     {
      id: 1,
      name: 'I-1'

  },

  {
    id: 2,
    name: 'I-2'
  }

]

const fDP = [
  {
    id: 1,
    name: 'dp-1'
  },

  {
    id: 2,
    name: 'dp-2'
  }
]

  const modalCampusOptions = fCampus?.map((data) => ({
    label: data?.name,
    value: data?.id
  }));

  const selectModalCampus = (label,value) => {
    setCampusError(false);

    setModalCampusLabel(label);
    setModalCampusValue(value);

  }

  const modalIntakeOptions = fIntake?.map((data) => ({
    label: data?.name,
    value: data?.id
  }));

  const selectModalIntake = (label,value) => {

    setIntakeError(false);
    setModalIntakeLabel(label);
    setModalIntakeValue(value);

  }

  const modalDeliveryOptions = fDP?.map((data) => ({
    label: data?.name,
    value: data?.id
  }));

  const selectModalDelivery = (label,value) => {

    setDeliveryError(false);
    setModalDeliveryPatternLabel(label);
    setModalDeliveryPatternValue(value);

  }





   


    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        background: '#fff',
        borderColor: '#9e9e9e',
        minHeight: '30px',
        height: '40px',
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




    const customStyles2 = {
      control: (provided, state) => ({
        ...provided,
        background: '#fff',
        borderColor: '#9e9e9e',
        minHeight: '30px',
        height: '40px',
        boxShadow: state.isFocused ? null : null,
        
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
      setLoading(true);
      setUniversityLabel(label);
      setUniversityValue(value);
      get(`SearchFilter/Campus/${value}`)
      .then(res => {
       
        setCampus(res);
      })
    }
    const selectCountry = (label,value) => {
      setLoading(true);
      
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
      setLoading(true);
      setCityLabel(label);
      setCityValue(value);

     

    }
    const selectUniversityType = (label,value) => {
      setLoading(true);
      setUniversityTypeLabel(label);
      setUniversityTypeValue(value);
      get(`SearchFilter/Universities/${universityCountryValue}/${value}/${cityValue}`)
      .then(res => {
        setUniversity(res);
      })
    }

    const selectDepartment = (label,value) => {
      setLoading(true);
      setDepartmentLabel(label);
      setDepartmentValue(value);
      get(`SearchFilter/SubDepartments/${value}`)
      .then(res => {
       
        setSubDepartment(res);
      })
    }

    const selectSubDepartment = (label,value) => {
      setLoading(true);
      setSubLabel(label);
      setSubValue(value);
    }

    const selectStudentType = (label,value) => {
      setLoading(true);
      setStudentTypeLabel(label);
      setStudentTypeValue(value);
    }

    const selectProgramLevel = (label,value) => {
      setLoading(true);
      setProgramLabel(label);
      setProgramValue(value);
    }

    const selectCampus = (label,value) => {
      setLoading(true);
      setCampusLabel(label);
      setCampusValue(value);
    }

     const selectOrder = (label, value) => {
      setLoading(true);
      // console.log("value", label, value);
    
      setDataSizeLabel(label);
      setDataSizeValue(value);
   
    };

    const toggleModal = (data) => {

      
      console.log(data);
      setCurrentData(data);
      setModal(true);
  
     }

    const selectSort = (label,value) => {
      setLoading(true);
      setSortLabel(label);
      setSortValue(value);
    }

    const handleProgramName = (e) => {
      setLoading(true);
 
   
        setProgramName(e.target.value);
     
      

    }

    const closeModal = () => {
 
 
      setModal(false);
      
    
    }
  
    const clearAllDropdown = () => {
      setLoading(true);
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
      setProgramName('')

      setSuccess(!success);


    }

    const submitModalForm = (event) =>{

      event.preventDefault();
      const subData = new FormData(event.target);

      if(modalCampusValue ==0){
        setCampusError(true);
      }
      if(modalIntakeValue==0){
        setIntakeError(true);
      }
      if(modalDeliveryPatternValue ==0){
        setDeliveryError(true);
      }
      else{
        for(let x of subData.values()){
          console.log(x);
        }
      }


    }



    return (
        <div>

          {/* Modal For Apply Button Code Start */}

          <Modal size='lg' isOpen={modal} toggle={closeModal} className="uapp-modal">

            <ModalHeader>
              <div className='px-3 text-center'>
              Are You Sure You Want to Apply for This Program? 
              </div> 
            </ModalHeader>

          <ModalBody>

          <div className='row'>

            <div className='col-md-5'>

              <h4 className='mb-3'>{currentData?.title}</h4>
              <h6>EU Fee: {currentData?.eu_Fee}</h6>
              <h6>Home Fee: {currentData?.home_Fee}</h6>

              <div className='mt-4'>
                <span>Note: Please Provide Correct Information. </span>
                <br/>
                <span>You Can Have Only One Application at a Time.</span>

              </div>

              <FormGroup row className='mt-3'>
               <Col md='12'>
               <div>

                <Button color='danger' onClick={closeModal}>
                  Cancel
                </Button>
                  
               </div>
               
               </Col>


              </FormGroup>

            </div>

            <div className='col-md-7'>

            <Form className='px-3' onSubmit={submitModalForm}>

<FormGroup row className="has-icon-left position-relative">
        <Col md="3">
          <span>
            Campus: <span className="text-danger">*</span>{" "}
          </span>
        </Col>

        <Col md="6">
        
        {
          (fCampus?.length == 1)? 

         <h6>{fCampus[0].name}</h6>

        :

        <>
        <Select
        className=''
        styles={customStyles2}
        options={modalCampusOptions}
        value={{ label: modalCampusLabel, value: modalCampusValue }}
            name="providerTypeId"
            id="providerTypeId"
            onChange={(opt) => selectModalCampus(opt.label, opt.value)}
        
        />
        {
          campusError? 
          <span className='text-danger'>Campus Must be Selected</span>
          :
          null
        }
        </>

        }

         

          
        </Col>
      </FormGroup>

<FormGroup row className="has-icon-left position-relative">
        <Col md="3">
          <span>
            Intake: <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">

          {
            fIntake.length == 1 ? 
              <h6>{fIntake[0]?.name}</h6>
              :
              <>
              <Select
           
              className=''
              styles={customStyles2}
              options={modalIntakeOptions}
              value={{ label: modalIntakeLabel, value: modalIntakeValue }}
                  name="providerTypeId"
                  id="providerTypeId"
                  onChange={(opt) => selectModalIntake(opt.label, opt.value)}
   
             />
             {
              intakeError? 

              <span className='text-danger'>Intake Must be Selected</span>
              :
              null
             }
              </>
            
          }
     

         

          
        </Col>
      </FormGroup>

<FormGroup row className="has-icon-left position-relative">
        <Col md="3">
          <span>
            Delivery Pattern: <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
        {
          fDP?.length == 1 ?
          
          <h6>{fDP[0]?.name}</h6>

          :

          <>
          <Select
           
           className=''
           styles={customStyles2}
           options={modalDeliveryOptions}
           value={{ label: modalDeliveryPatternLabel, value: modalDeliveryPatternValue }}
               name="providerTypeId"
               id="providerTypeId"
               onChange={(opt) => selectModalDelivery(opt.label, opt.value)}

          />
          {
            deliveryError? 
            <span className='text-danger'>
              Delivery Pattern Must be Selected
            </span>
            : 
            null
          }
          </>
          
        }

         

          
                </Col>
              </FormGroup>

            {
              (studentInfo?.id) ?

              <FormGroup row>


              <Col md='9'>
                <div className='d-flex justify-content-end'>
                  <Button color='primary' type='submit'>Submit</Button> 
                </div>
              </Col>
    
    
    
            </FormGroup>

            :

            null
            }

        </Form>


            </div>


          </div>

          
          </ModalBody>

   
        

      

        
          
           
          
        
          
           
    
       

          </Modal>

          {/* Modal For Apply Button Code End */}

       
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
  defaultValue={programName}
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


      <div className='col-md-3'>

        <div className='row'>

        <div className='col-md-6'>

        <Nav tabs>

        <NavItem>
        <NavLink active={activetab === "1"} style={{background: 'none'}} onClick={() => toggle1("1")}>
          Programs
        </NavLink>
        </NavItem>

        </Nav>
      
       
       
    
      

    </div>


    <div className='col-md-6'>

    <Nav tabs>

    <NavItem>
    <NavLink  active={activetab === "2"} style={{background: 'none'}} onClick={() => toggle2("2")}>
      University
    </NavLink>
    </NavItem>

</Nav>

    </div>

   

        </div>

     

      </div>
     
      <div className='col-md-3'>

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
    
    
    !loading ?
<>

    {
      data?.length <1 ?
  
      <div className='text-center'>
        <span className='nodata-found-style'>No Data Found</span>
      </div>
  
      :
  
      <>
      
      {
        data?.map((info,i)=>
        
        <div key={i}>
  
          <Card className='p-2'>
  
  
          <div className='row'>
  
  
          <div className='col-md-2'>
          <div className='search-img-style'>
          <img
          src={rootUrl+info?.logo}
          className='w-75' 
  
          alt='logo-img'
          />
          </div>
  
          </div>
  
          <div className='col-md-8'>
          <div className='text-center'>
          <span className='university-title-style'>{info?.name}</span>
          <br/>
          <span className='span-style-search'><i className="fas fa-location-dot"></i>{info?.address}</span>
          </div>
  
          </div>

          <div className='col-md-2'>

          </div>
  
  
  
  
          </div>
  
  
          </Card>
  
          {
            info?.subjects?.length <1 ?
  
            <div className='text-center mb-2'>
            <span className='nodata-found-style'>No Data Found</span>
             </div>
  
             :
  
             
             <>
  
             {
  
  
                !loadAll ? 
                <>
                {
                  info?.subjects?.slice(0,2).map((subjectInfo,i) =>
        
                  
        <div className='row my-3' key={i}>
        
        <div className='col-md-12 border-left-style-searchPage'>
         
          <span className='course-name-style'>{subjectInfo?.title}</span>
          <br/>
          
        
          <div className='row my-1'>
           <div className='col-md-10'>
           <span className='available-style'>Available in:</span>
               {
                subjectInfo?.campuses?.map((camp,i)=>
                
                <span className='btn-customStyle-1 ms-2' key={i}>{camp?.campusName}</span>
        
                )
               }
           </div>
        
        <div className='col-md-2'>
            <LinkButton
             url={`/subjectProfile/${subjectInfo?.subjectId}`}
             target={'_blank'}
            color={'secondary'}
            className={"button2-style-search"}
            name={'View'}
            permission={6}
            />
            </div>
        
                
        
                
          </div>
        
          <div className='row'>
            <div className='col-md-2'>
              <span className='p-style-1'>Tution fee</span>
              <br/>
              <span className='p-style-2'>Local - {subjectInfo?.home_Fee}</span>
              <br/>
              <span className='p-style-2'>EU - {subjectInfo?.eu_Fee}</span>
              <br/>
              <span className='p-style-2'>International - {subjectInfo?.international_Fee}</span>
        
            </div>
        
            <div className='col-md-3'>
            <span className='p-style-1'>Level of Study</span>
              <br/>
              <span className='p-style-2'>{subjectInfo?.programLevelName}</span>
              
        
            </div>
        
           
        
            <div className='col-md-3'>
            <span className='p-style-1'>Duration</span>
              <br/>
              <span className='p-style-2'>{subjectInfo?.duration}</span>
        
        
            </div>
        <div className='col-md-2'>
            <span className='p-style-1'>Intake</span>
            <br/>
            <ul className='list-unstyled'>
              {
                subjectInfo?.intakes?.length <1 ?
        
                <div className='text-center'>
                <span className=''>-</span>
                 </div>
                 :
                 <>
        
                 {
        
                  subjectInfo?.intakes?.map((int) =>
                  
                  <li>
                  {int?.intakeName}
                  </li>
                  
                  )
        
                 }
        
                 </>
              }
             
            </ul>
            </div>
           {

                subjectInfo?.canApply? 
                <div className='col-md-2'>
                <button className='button-style-search' onClick={()=>toggleModal(subjectInfo)}>Apply</button>
                
              </div>
              :
              <span>You Can Apply</span>

           }
        
          </div>
          
        </div>
        
        
        
        
        
        <div>
        
        </div>
        
     
  
  
        </div>
        
                  
                  
        
                  )
                }
                </>
  
                :
                  <>
                {
                  info?.subjects?.map((subjectInfo) =>
        
                  
        <div className='row my-3 '>
        
        <div className='col-md-12 border-left-style-searchPage'>
         
          <span className='course-name-style'>{subjectInfo?.title}</span>
          <br/>
          
        
          <div className='row my-1 '>
          <div className='col-md-10'>
  
          <span className='available-style'>Available in:</span>
               {
                subjectInfo?.campuses?.map((camp)=>
                
                <span className='btn-customStyle-1 ms-2'>{camp?.campusName}</span>
        
                )
               }
  
  
          </div>
          
              <div className='col-md-2'>
  
              <LinkButton
                  url={`/subjectProfile/${subjectInfo?.subjectId}`}
                  target={'_blank'}
                  color={'secondary'}
                  className={"button2-style-search"}
                  name={'View'}
                  permission={6}
                  />
  
              </div>
        
                
        
                
        
                
          </div>
        
          <div className='row'>
            <div className='col-md-2'>
              <span className='p-style-1'>Tution fee</span>
              <br/>
              <span className='p-style-2'>Local - {subjectInfo?.home_Fee}</span>
              <br/>
              <span className='p-style-2'>EU - {subjectInfo?.eu_Fee}</span>
              <br/>
              <span className='p-style-2'>International - {subjectInfo?.international_Fee}</span>
        
            </div>
        
            <div className='col-md-3'>
            <span className='p-style-1'>Level of Study</span>
              <br/>
              <span className='p-style-2'>{subjectInfo?.programLevelName}</span>
              
        
            </div>
        
           
        
            <div className='col-md-3'>
            <span className='p-style-1'>Duration</span>
              <br/>
              <span className='p-style-2'>{subjectInfo?.duration}</span>
        
        
            </div>
        <div className='col-md-2'>
            <span className='p-style-1'>Intake</span>
            <br/>
            <ul className='list-unstyled'>
              {
                subjectInfo?.intakes?.length <1 ?
        
                <div className='text-center'>
                <span className=''>-</span>
                 </div>
                 :
                 <>
        
                 {
        
                  subjectInfo?.intakes?.map((int) =>
                  
                  <li>
                  {int?.intakeName}
                  </li>
                  
                  )
        
                 }
        
                 </>
              }
             
            </ul>
            </div>
            <div className='col-md-2'>
          
            {

            subjectInfo?.canApply? 
            <div className='col-md-2'>
            <button className='button-style-search'>Apply</button>

            </div>
            :
            <span>You Can Apply</span>

            }
          
        </div>
        
          </div>
          
        </div>
        
        
        
        
        
        <div>
        
        </div>
        
        
        
        </div>
                  
                  
        
                  )
                }
                </>
  
             }
             
             </>
  
          }
  
  
            {/* show all span */}
  
               
      {
        info?.subjects.length > 3 ? 
        <>
        {
  
  !loadAll ?
  
  <div className='text-center mb-3'>
  <span className='show-all-search-data-style' onClick={showAllData}>See {info?.subjectCounter - showNum} More Programs <i className="fas fa-angle-right mt-2"></i></span>
  </div> 
  
  :
  
  <div className='text-center mb-3'>
  <span className='show-all-search-data-style' onClick={collapseALl}>Hide {info?.subjectCounter -showNum} More Programs  <i className="fas fa-angle-left mt-2"></i></span>
  </div> 
  
  
  }
        </>
        :
        null
      }
  
        </div>
        
        )
      }
  
      {/* pagination */}
  
      <div className='mb-4'>
        <Card className='pt-2 px-1'>
       <Pagination
              dataPerPage={dataSizeValue}
              totalData={entity}
              paginate={paginate}
              currentPage={page}
            />
  
        </Card>
   </div>
  
      </>
  
     }

    </>

     :

     <div class="text-center">
     <div class="spinner-border" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>
   </div>


   }

   </>

    :


    <div>

<>
    
    {

      data?.length < 1 ? 

      <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      </div>


    :

    <>
      {
      data?.map((info,i)=>
      
      <div key={i}>

        <Card className='p-2'>


        <div className='row'>


        <div className='col-md-2'>
        <div className='search-img-style'>
        <img
        src={rootUrl+info?.logo}
        className='w-75' 

        alt='logo-img'
        />
        </div>

        </div>

        <div className='col-md-8'>
        <div className='text-center'>
        <span className='university-title-style'>{info?.name}</span>
        <br/>
        <span className='span-style-search'><i className="fas fa-location-dot"></i>{info?.address}</span>
        </div>

        </div>


        <div className='col-md-2'>

        <div className='d-flex justify-content-end'>

        <LinkButton
        url={`/universityDetails/${info?.universityId}`}
        target={'_blank'}
        color={"primary"}
        className={"mx-1 btn-sm mt-2"}
        icon={<i className="fas fa-eye"></i>}
        permission={6}
         />

        </div>


        </div>




        </div>


        </Card>

       
      </div>
      
      )
    } 

    
    {/* pagination */}

    <div className='mb-4'>
      <Card className='pt-2 px-1'>
     <Pagination
            dataPerPage={dataSizeValue}
            totalData={entity}
            paginate={paginate}
            currentPage={page}
          />

      </Card>
 </div>

</>

    }

   


    </>

    </div>
     
    }

    {/* Showing University Program End */}

   

    

</div>

  </div>



 
            
        </div>
    );
};

export default Search;