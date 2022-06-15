import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from "react-select";
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { Toggle } from "react-toggle-component";
import get from '../../../helpers/get';
import StudentProfileImage from './StudentProfileImage';
import { useSelector } from 'react-redux';
import post from '../../../helpers/post';
import put from '../../../helpers/put';
import { useToasts } from "react-toast-notifications";


const PersonalInformation = () => {

  const consultantValueId = localStorage.getItem('personalInfoConsultantId');

  const profileImageData = useSelector((state) => state?.StudentProfileImageReducer?.studentImage[0]);

  console.log('11111111',profileImageData);

    const history = useHistory();

    const {addToast} = useToasts();


    const [activetab, setActivetab] = useState("2");
    const [submitData, setSubmitData] = useState(false);
    const [title,setTitle] = useState([]);
    const [titleLabel,setTitleLabel] = useState('Title');
    const [titleValue,setTitleValue] = useState(0);
    const [country,setCountry] = useState([]);
    const [countryLabel, setCountryLabel] = useState("Country");
      const [countryValue, setCountryValue] = useState(0);
    const [gender,setGender] = useState([]);
    const [genderLabel, setGenderLabel] = useState("Gender");
      const [genderValue, setGenderValue] = useState(0);
    const [maritalStatus,setMaritalStatus] = useState([]);
    const [maritalStatusLabel, setMaritalStatusLabel] = useState("Marital status");
      const [maritalStatusValue, setMaritalStatusValue] = useState(0);
    const [nationality,setNationality] = useState([]);
    const [nationalityLabel, setNationalityLabel] = useState("Nationality");
      const [nationalityValue, setNationalityValue] = useState(0);
    const [consultant,setConsultant] = useState([]);
    const [consultantLabel, setConsultantLabel] = useState("Consultant");
      const [consultantValue, setConsultantValue] = useState(0);
    const [studentType,setStudentType] = useState([]);
    const [studentTypeLabel, setStudentTypeLabel] = useState("Student Type");
      const [studentTypeValue, setStudentTypeValue] = useState(0);

      const [FirstName,setFirstName] = useState('');
      const [LastName,setLastName] = useState('');
      const [Dates,SetDate] =useState(''); 
      const [number, setNumber] = useState('');
      const [Email, setEmail] = useState('');
      const [Password,setPassword]= useState('');
      const [passport,setPassport] = useState('');
      const [toggleData, setToggleData] = useState(false);
      const [studentView,setStudentview] = useState('');


    useEffect(()=>{
      get('NameTittle/GetAll')
      .then(res => {
        console.log(res);
        setTitle(res);
      })

      get('MaritalStatus/GetAll')
      .then(res => {
        console.log(res);
        setMaritalStatus(res);
      })


      get('Gender/GetAll')
      .then(res => {
        console.log(res);
        setGender(res);
      })


      get('Country/Index')
      .then(res => {
          console.log(res);
          setCountry(res);
      })

      get('Nationality/Index')
      .then(res => {
          console.log(res);
          setNationality(res);
      })

      get('Consultant/Index')
      .then(res => {
          console.log(res);
          setConsultant(res);
      })

      get('StudentType/Index')
      .then(res => {
          console.log(res);
          setStudentType(res);
      })

      get(`Consultant/Get/${consultantValueId}`)
      .then(res => {
        console.log('Cid',res);
        setConsultantLabel(res?.firstName);
        setConsultantValue(res?.id);
      })



    },[])

    const backToDashboard = () =>{
       
        history.push('/');
    }

    const toggle = (tab) => {
        setActivetab(tab);
        if (tab == "2") {
          history.push("/addUniversityCampus");
        }
        // if (tab == "3") {
        //   history.push("/addUniversityFinancial");
        // }
        // if (tab == "4") {
        //   history.push("/addUniversityFeatures");
        // }
        // if (tab == "5") {
        //   history.push("/addUniversityGallery");
        // }
      };

      const nameTitle = title?.map((singleTitle) => ({
        label: singleTitle.name,
        value: singleTitle.id,
      }));


               // select  Title
  const selectTitle = (label, value) => {
    setTitleLabel(label);
    setTitleValue(value);
    
   
   
  }


  const countryName = country?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));


       // select  Country
const selectCountry = (label, value) => {
setCountryLabel(label);
setCountryValue(value);



}


  const genderName = gender?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));


       // select  Gender
const selectGender = (label, value) => {
setGenderLabel(label);
setGenderValue(value);



}

  const maritalStatusName = maritalStatus?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));


       // select  Marital Status
const selectMaritalStatus = (label, value) => {
setMaritalStatusLabel(label);
setMaritalStatusValue(value);



}

  const nationalityName = nationality?.map((cons) => ({
    label: cons.name,
    value: cons.id,
  }));


       // select  Marital Status
const selectNationality = (label, value) => {
setNationalityLabel(label);
setNationalityValue(value);



}



  const consultantName = consultant?.map((branchCountry) => ({
    label: branchCountry.firstName,
    value: branchCountry.id,
  }));


       // select  Consultant
const selectConsultant = (label, value) => {
setConsultantLabel(label);
setConsultantValue(value);



}


  const studentTypeName = studentType?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));


       // select  Student Type
const selectStudentType = (label, value) => {
setStudentTypeLabel(label);
setStudentTypeValue(value);



}


const handleSubmit = (event) => {

  event.preventDefault();

  // const subData = {

  //   id: localStorage.getItem('applictionStudentId'),
  //   nameTitleId: titleValue,
  //   firstName: FirstName,
  //   lastName: LastName,
  //   dateOfBirth: Dates,
  //   phoneNumber: number,
  //   passportNumber: passport,
  //   birthCountryId: countryValue,
  //   genderId: genderValue,
  //   maritalStatusId: maritalStatusValue,
  //   nationalityId: nationalityValue,
  //   email: Email,
  //   password: Password,
  //   consultantId: consultantValue,
  //   blacklisted: toggleData,
  //   studentViewId: studentView,
  //   profileImageFile: profileImageData?.originFileObj


  // }

 

  const subData = new FormData(event.target);
  subData.append('profileImageFile',profileImageData?.originFileObj);
  
  for( var x of subData.values()){
    console.log(x);
  }

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }


  put('Student/Update',subData)
  .then(res => {
    console.log(res);
    if(res?.status ==200){
      addToast(res?.data?.message,{
        appearance: 'success',
        autoDismiss: true
      })
      history.push('/addStudentContactInformation');
    }
  })


}


    return (
        <div>

      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Student Information</h3>
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
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Personal
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled active={activetab === "3"} onClick={() => toggle("3")}>
                Contact
              </NavLink>
            </NavItem>

         

            <NavItem>
              <NavLink disabled active={activetab === "4"} onClick={() => toggle("4")}>
                Educational
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink disabled active={activetab === "5"} onClick={() => toggle("5")}>
                Experience
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink disabled active={activetab === "6"} onClick={() => toggle("6")}>
                Reference
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink disabled active={activetab === "7"} onClick={() => toggle("7")}>
                Personal Statement
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink disabled active={activetab === "8"} onClick={() => toggle("8")}>
                Others
              </NavLink>
            </NavItem>
           

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="2">
              <Form onSubmit={handleSubmit}  className="mt-5">

              <input
              type='hidden'
              name='id'
              id='id'
              value={localStorage.getItem('applictionStudentId')}
              />

              <input
              type='hidden'
              name='studentTypeId'
              id='studentTypeId'
              value={localStorage.getItem('applictionStudentTypeId')}
              />

              <input
              type='hidden'
              name='studentViewId'
              id='studentViewId'
              value={localStorage.getItem('registerStudentViewId')}
              />

              <input
              type='hidden'
              name='userId'
              id='userId'
              value={localStorage.getItem('registerUserId')}
              />

              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                   Consultant <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
              <Select
                  options={consultantName}
                  value={{ label: consultantLabel, value: consultantValue }}
                  onChange={(opt) => selectConsultant(opt.label, opt.value)}
                  name="consultantId"
                  id="consultantId"
                  required

                />

                {/* <div className="form-control-position">
                                    <User size={15} />
                                </div> */}
              </Col>
            </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Title <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                  <Select
                      options={nameTitle}
                      value={{ label: titleLabel, value: titleValue }}
                      onChange={(opt) => selectTitle(opt.label, opt.value)}
                      name="nameTittleId"
                      id="nameTittleId"
                      required

                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      First name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Last name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      onChange={(e)=> setLastName(e.target.value)}
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Date of birth <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="date"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      onChange={(e)=> SetDate(e.target.value)}
                      
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Phone number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                     placeholder='Enter phone number'
                     onChange={(e)=>setNumber(e.target.value)}
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Passport number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="number"
                      name="passportNumber"
                      id="passportNumber"
                     placeholder='Enter passport number'
                     onChange={(e)=> setPassport(e.target.value)}
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Country of birth <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                  <Select
                      options={countryName}
                      value={{ label: countryLabel, value: countryValue }}
                      onChange={(opt) => selectCountry(opt.label, opt.value)}
                      name="birthCountryId"
                      id="birthCountryId"
                      required

                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Gender <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                  <Select
                      options={genderName}
                      value={{ label: genderLabel, value: genderValue }}
                      onChange={(opt) => selectGender(opt.label, opt.value)}
                      name="genderId"
                      id="genderId"
                      required

                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Marital Status <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                  <Select
                      options={maritalStatusName}
                      value={{ label: maritalStatusLabel, value: maritalStatusValue }}
                      onChange={(opt) => selectMaritalStatus(opt.label, opt.value)}
                      name="maritalStatusId"
                      id="maritalStatusId"
                      required

                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Nationality <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                  <Select
                      options={nationalityName}
                      value={{ label: nationalityLabel, value: nationalityValue }}
                      onChange={(opt) => selectNationality(opt.label, opt.value)}
                      name="nationalityId"
                      id="nationalityId"
                      required

                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Email <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={(e)=> setEmail(e.target.value)}
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

               

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Password <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={(e)=> setPassword(e.target.value)}
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>



                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Profile Photo <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                
                   <StudentProfileImage></StudentProfileImage>
                   
                  </Col>
                </FormGroup>


                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup>

                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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

export default PersonalInformation;