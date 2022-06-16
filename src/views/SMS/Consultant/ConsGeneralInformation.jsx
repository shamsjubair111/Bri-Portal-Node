import React, { useEffect, useState } from 'react';
import { connect, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useLocation } from 'react-router-dom';
import Select from "react-select";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  InputGroup,
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { rootUrl } from "../../../constants/constants";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import ConsultantFile from './ConsultantFile';
import { useToasts } from 'react-toast-notifications';

const ConsGeneralInformation = () => {

    let location = useLocation();


    const [activetab, setActivetab] = useState("1");
    const [submitData, setSubmitData] = useState(false);
    const [nameTitle, setNameTitle] = useState([]);
    const [consType, setConsType] = useState([]);
    const [countries, setCountries] = useState([]);
    const [resCountry, setResCountry] = useState([]);
    const [nationality, setNationality] = useState([]);
    const [consParent, setConsParent] = useState([]);
    const [branch, setBranch] = useState([]);
    const [nameLabel, setNameLabel] = useState("Name title...");
    const [nameValue, setNameValue] = useState(0);
    const [typeLabel, setTypeLabel] = useState("Consultant type...");
    const [typeValue, setTypeValue] = useState(0);
    const [countryLabel, setCountryLabel] = useState("Country of residency...");
    const [countryValue, setCountryValue] = useState(0);
    const [resCountryLabel, setResCountryLabel] = useState("Residency status...");
    const [resCountryValue, setResCountryValue] = useState(0);
    const [nationLabel, setNationLabel] = useState("Nationality...");
    const [nationValue, setNationValue] = useState(0);
    const [parentLabel, setParentLabel] = useState("Parent consultant");
    const [parentValue, setParentValue] = useState(0);
    const [branchLabel, setBranchLabel] = useState("Branch...")
    const [branchValue, setBranchValue] = useState(0);
    const [rightToWork, setRightToWork] = useState(false);

    const history = useHistory();
    const { addToast } = useToasts();

    const {id} = useParams();

    useEffect(()=>{
      get("NameTittleDD/index").then(res=>{
          setNameTitle(res);
      });

      get("ConsultantTypeDD/index").then(res=>{
        setConsType(res);
      });

      get("CountryDD/index").then(res=>{
        console.log("countries", res);
        setCountries(res);
      });

      get("ResidencyStatusDD/index").then(res=>{
        console.log("residencyCountry", res);
        setResCountry(res);
      });

      get("NationalityDD/index").then(res=>{
        setNationality(res);
      });

      get("ConsultantDD/index").then(res=>{
        setConsParent(res);
      });

      get("BranchDD/index").then(res=>{
        setBranch(res);
      });
    },[]);

    const nameTitleMenu = nameTitle?.map(titleOptions => ({label:titleOptions?.name, value:titleOptions?.id}));
    const consTypeMenu = consType?.map(consTypeOptions => ({label:consTypeOptions?.name, value:consTypeOptions?.id}));
    const countryMenu = countries?.map(countryOptions => ({label:countryOptions?.name, value:countryOptions?.id}));
    const resCountryMenu = resCountry?.map(resCountryOptions => ({label:resCountryOptions?.name, value:resCountryOptions?.id}));
    const nationalityMenu = nationality?.map(nationalityOptions => ({label:nationalityOptions?.name, value:nationalityOptions?.id}));
    const consParentMenu = consParent?.map(consParentOptions => ({label:consParentOptions?.name, value:consParentOptions?.id}));
    const branchMenu = branch?.map(branchOptions => ({label:branchOptions?.name, value:branchOptions?.id}));

    const selectNameTitle = (label, value) => {
        setNameLabel(label);
        setNameValue(value);
      }

    const selectConsType = (label, value) => {
      setTypeLabel(label);
      setTypeValue(value);
    }

    const selectCountry = (label, value) => {
      setCountryLabel(label);
      setCountryValue(value);
    }

    const selectResCountry = (label, value) => {
      setResCountryLabel(label);
      setResCountryValue(value);
    }

    const selectNationality = (label, value) => {
      setNationLabel(label);
      setNationValue(value);
    }

    const selectParentCons = (label, value) => {
      setParentLabel(label);
      setParentValue(value);
    }
    const selectBranch = (label, value) => {
      setBranchLabel(label);
      setBranchValue(value);
    }

    

    // Getting File Or Image Type data from redux


    const rightToWorkFile = useSelector( (state)=> state?.ConsultantFileReducer?.profileImage);

    const addressFile = useSelector( (state)=> state?.ConsultantFileReducer?.proofOfAddress);

    const idOrImageFile = useSelector( (state)=> state?.ConsultantFileReducer?.idOrPassport);

    const profileImage = useSelector( (state)=> state?.ConsultantFileReducer?.profileImage);

    const coverImage = useSelector( (state)=> state?.ConsultantFileReducer?.coverImage);

    // console.log(rightToWorkFile,addressFile,idOrImageFile,profileImage);

    const handleChange = (e) => {
      
      let isChecked = e.target.checked;
      setRightToWork(isChecked);
     
    } 

    const handleSubmit = (e) =>{
      e.preventDefault();
      const subdata = new FormData(e.target);
      subdata.append('HaveRightToWork',rightToWork);
      subdata.append("ConsultantProfileImage", profileImage[0]?.originFileObj);
      subdata.append("IdOrPassport", idOrImageFile[0]?.originFileObj);
      subdata.append("ProofOfRightToWork", rightToWorkFile[0]?.originFileObj);
      subdata.append("ProofOfAddress", addressFile[0]?.originFileObj);
      subdata.append("ConsultantCoverImage", coverImage[0]?.originFileObj);

      //  watch form data values
    for (var value of subdata) {
      console.log(value);
    }

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      post(`Consultant/Create`, subdata, config).then((res) => {
        
  
        console.log(res);
      
        // localStorage.setItem("id",res.data.result.id);
        // const uniID = res.data.result.id;
  
        if (res.status === 200 && res.data.isSuccess === true) {
          setSubmitData(true);
          addToast(res?.data?.message, {
            appearance:'success',
            autoDismiss: true,
          });
          history.push({
            pathname: `/addUniversityCampus/${id}`,
          });
        }
      });

    }

    // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "2") {
      history.push(`/addBankDetails/${id}`);
    }
  };

    // redirect to dashboard
    const backToDashboard = () => {
      history.push("/");
    };

    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Consultant Information</h3>
                <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-light">
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
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                General Information
              </NavLink>
            </NavItem>

            <NavItem>
              {submitData ? (
                <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                  Bank Details
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "2"}>
                  Bank Details
                </NavLink>
              )}
            </NavItem>

            {/* <NavItem>
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Bank Details
              </NavLink>
            </NavItem> */}

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="1">
              <Form  onSubmit={handleSubmit} className="mt-5">

              <input 
                type='hidden'
                name='userId'
                id='UserId'
                value={id} 
              />

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Consultant Type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={consTypeMenu}
                      value={{ label: typeLabel, value: typeValue }}
                      onChange={(opt) => selectConsType(opt.label, opt.value)}
                      name="consultantTypeId"
                      id="consultantTypeId"
                    />
                  </Col>
                </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Name Title <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={nameTitleMenu}
                      value={{ label: nameLabel, value: nameValue }}
                      onChange={(opt) => selectNameTitle(opt.label, opt.value)}
                      name="nameTittleId"
                      id="nameTittleId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      First Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Last Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
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
                      placeholder="Email"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Phone Number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter phone number"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Parent consultant <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={consParentMenu}
                      value={{ label: parentLabel, value: parentValue }}
                      onChange={(opt) => selectParentCons(opt.label, opt.value)}
                      name="parentConsultantId"
                      id="parentConsultantId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Country Of Residency <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={countryMenu}
                      value={{ label: countryLabel, value: countryValue }}
                      onChange={(opt) => selectCountry(opt.label, opt.value)}
                      name="countryOfResidencyId"
                      id="countryOfResidencyId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Have right to work? <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6" className='ms-4'>
                     <Input
                        type="checkbox"
                        onChange={handleChange}
                      />
                    </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Branch <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={branchMenu}
                      value={{ label: branchLabel, value: branchValue }}
                      onChange={(opt) => selectBranch(opt.label, opt.value)}
                      name="branchId"
                      id="branchId"
                    />
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
                      options={nationalityMenu}
                      value={{ label: nationLabel, value: nationValue }}
                      onChange={(opt) => selectNationality(opt.label, opt.value)}
                      name="nationalityId"
                      id="nationalityId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Residency Status <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={resCountryMenu}
                      value={{ label: resCountryLabel, value: resCountryValue }}
                      onChange={(opt) => selectResCountry(opt.label, opt.value)}
                      name="residencyStatusId"
                      id="residencyStatusId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Profile Photo
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={1}></ConsultantFile>

                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Cover Photo
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={2}></ConsultantFile>

                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Id or passport
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={3}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                {
                  rightToWork === true ?
                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                      Proof of Your Right to Work Self-Employed in the UK (BRP/Visa)
                      </span>
                    </Col>
                    <Col md="6">
                  
                    <ConsultantFile value={4}></ConsultantFile>
                     
                    </Col>
                  </FormGroup>
                  :
                  null
                }

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Proof of address <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
                  <ConsultantFile value={5}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                {/* <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup> */}
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

export default ConsGeneralInformation;