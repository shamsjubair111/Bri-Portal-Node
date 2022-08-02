import React, { createRef, useEffect, useState } from "react";
// import 'react-dropzone-uploader/dist/styles.css'
import { connect, useSelector } from "react-redux";
import Select from "react-select";
import { useHistory } from "react-router";
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
import Axios from "axios";

import { rootUrl } from "../../../constants/constants";
import { padding } from "@mui/system";
import get from "../../../helpers/get";
import PicturesWall from "./UniversityLogo";
import CoverPicturesWall from "./UniversityCover";
import put from "../../../helpers/put";
import { useToasts } from "react-toast-notifications";
import ButtonForFunction from "../Components/ButtonForFunction";

const AddUniversity = (props) => {
  const univerSityCountries = props.univerSityCountryList[0];
  const universityTypes = props.univerSityTypeList[0];
  const universityStates = props.univerSityStateList[0];

  const [activetab, setActivetab] = useState("1");
  const [description, setDescription] = useState("");
  const [uniTypeLabel, setUniTypeLabel] = useState("Select University Type...");
  const [uniTypeValue, setUniTypeValue] = useState(0);
  const [provider,setProvider] = useState([]);
  const [uniCountryLabel, setUniCountryLabel] = useState(
    "Select University Country..."
  );
  const [uniCountryValue, setUniCountryValue] = useState(0);
  const [uniStateLabel, setUniStateLabel] = useState(
    "Select University State..."
  );
  const [unistateValue, setUniStateValue] = useState(0);
  const [logoFiles, setLogoFiles] = useState([]);
  const [coverFiles, setCoverFiles] = useState([]);

  const [exactCoverFile, setExactCoverFile] = useState({});
  const [exactLogoFile, setExactLogoFile] = useState({});

  const [coverDropzoneError, setCoverDropzoneError] = useState("");
  const [logoDropzoneError, setLogoDropzoneError] = useState("");

  const [submitData, setSubmitData] = useState(false);

  const [logoFile, setLogoFile] = useState({});
  const [coverFile, setCoverFile] = useState({});
  const [universityData, setUniversityData] = useState({});
  const [uniId, setUniId] = useState(0);

  const method = localStorage.getItem('editMethod');
  
  const {addToast} = useToasts();

  useEffect(()=>{

    get('ProviderDD/Index').then(res=> {
      setProvider(res);
    })
    .catch();

    get(`University/get/${localStorage.getItem('editUniId')}`)
    .then(res => {
      console.log('uniIddata', res);
      setUniversityData(res);
      setProviderTypeLabel(res?.provider?.name);
      setProviderTypeValue(res?.provider?.value);
      setUniTypeLabel(res?.universityType?.name);
      setUniTypeValue(res?.universityType?.id);
      setUniCountryLabel(res?.universityCountry?.name);
      setUniCountryValue(res?.universityCountry?.id);
      setUniStateLabel(res?.universityState?.name);
      setUniStateValue(res?.universityState?.id);
      setUniId(res?.id);
    })

  },[])



    const logoResult =  useSelector((state) => state.UniversityLogoImageReducer.universityLogoImage);
    const coverResult = useSelector((state)=> state.UniversityCoverImageReducer.universityCoverImage);

  
 


  const [providerTypeLabel, setProviderTypeLabel]= useState('Select Provider...');
  const [providerTypeValue, setProviderTypeValue] = useState(0);


    
    const selectProviderType = (label, value) => {
      setProviderTypeLabel(label);
      setProviderTypeValue(value);
     
    }

    const providerMenu = provider.map(providerOptions =>({label:providerOptions.name, value:providerOptions.id}) )

  // Logo file handle
  const updateLogoFiles = (incommingFiles) => {
    if (incommingFiles.length > 1) {
      setLogoDropzoneError("Max 1 file");
    } else {
      setLogoFiles(incommingFiles);
      setExactLogoFile(incommingFiles[0]?.file);
      setLogoDropzoneError("");
    }
    // setFiles(incommingFiles);
    //     setExactFile(incommingFiles[0]?.file)
    //     setDropzoneError('');
  };

  const handleLogoFile = (e) => {
    setLogoFile(e.target.files[0]);
  };
  const handleCoverFile = (e) => {
    setCoverFile(e.target.files[0]);
  };

  // remove logo file
  const onDeleteLogo = (id) => {
    setLogoFiles([]);
    setExactLogoFile({});
  };

  // Cover file handle
  const updateCoverFiles = (incommingFiles) => {
    if (incommingFiles.length > 1) {
      setCoverDropzoneError("Max 1 file");
    } else {
      setCoverFiles(incommingFiles);
      setExactCoverFile(incommingFiles[0]?.file);
      setCoverDropzoneError("");
    }
    // setFiles(incommingFiles);
    //     setExactFile(incommingFiles[0]?.file)
    //     setDropzoneError('');
  };

  // remove cover file
  const onDeleteCover = (id) => {
    setCoverFiles([]);
    setExactCoverFile({});
  };

  const myForm = createRef();

  const history = useHistory();

  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);
    subdata.append("UniversityLogoFile", logoResult[0]?.originFileObj);
    subdata.append("CoverImageFile", coverResult[0]?.originFileObj);

    //  watch form data values
    // for (var value of subdata.values()) {
     
    // }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    if(method == 'put'){
      put('University/Update', subdata, config)
      .then(res => {
        console.log('1st put response',res);
        if(res?.status == 200){
         
          addToast(res?.data?.message,{
            appearance: 'success',
            autoDismiss: true
          })
          
          history.push('/addUniversityCampus');
        }
      })
    }
    else{
      Axios.post(`${rootUrl}University/Create`, subdata, config).then((res) => {
        
        console.log("unipostData",res);
      
        localStorage.setItem("id",res.data.result.id);
        const uniID = res.data.result.id;
  
        if (res.status === 200 && res.data.isSuccess === true) {
          setSubmitData(true);
          history.push({
            pathname: "/addUniversityCampus",
            id: uniID,
          });
        }
      });
    }
  };

  // select University Type
  const selectUniType = (label, value) => {
    setUniTypeLabel(label);
    setUniTypeValue(value);
  };

  // select University Country
  const selectUniCountry = (label, value) => {
    setUniCountryLabel(label);
    setUniCountryValue(value);

    //Axios.get(`${rootUrl}/UniversityState/GetByCountry/${value}`)
    //.then(res => {
    //    if(res.data.result[0]){
    //        setUniStateLabel(res.data.result[0].name)
    //        setUniStateValue(res.data.result[0].id)
    //    }else{
    //        setUniStateLabel('No State Assigned')
    //        setUniStateValue(0)
    //    }

    //})
  };

  // select University State
  const selectUniState = (label, value) => {
    setUniStateLabel(label);
    setUniStateValue(value);
  };
  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "2") {
      history.push("/addUniversityCampus");
    }
    if (tab == "3") {
      history.push("/addUniversityFinancial");
    }
    if (tab == "4") {
      history.push("/addUniversityFeatures");
    }
    if (tab == "5") {
      history.push("/addUniversityGallery");
    }
  };

  const universityTypeName = universityTypes?.map((uniType) => ({
    label: uniType.name,
    value: uniType.id,
  }));
  const universityCountryName = univerSityCountries?.map((uniCountry) => ({
    label: uniCountry.name,
    value: uniCountry.id,
  }));
  const universityStateName = universityStates?.map((uniState) => ({
    label: uniState.name,
    value: uniState.id,
  }));

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };
  
  return (
    <div>

           <Card className='uapp-card-bg'>
              <CardHeader className="page-header">              
                <h3 className="text-light">Add University Information</h3>
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
                University Information
              </NavLink>
            </NavItem>
            <NavItem>
              {submitData ? (
                <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                  Campus Information
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "2"}>
                  Campus Information
                </NavLink>
              )}
            </NavItem>

            {/* {
                                    submitData ?
                                    <NavLink
                                    active={activetab === '3'}
                                    onClick={() =>toggle('3')}
                                    >
    
                                    Financial Information
                                    </NavLink> :
                                     <NavLink disabled
                                     active={activetab === '3'}
                                     >
     
                                     Financial Information
                                     </NavLink>

                                } */}

            <NavItem>
              <NavLink disabled active={activetab === "3"}>
                Financial Information
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled active={activetab === "4"}>
                Features
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled active={activetab === "5"}>
                University Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled active={activetab === "6"}>
                Application Document
              </NavLink>
            </NavItem>

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="1">
              <Form ref={myForm} onSubmit={handleSubmit} className="mt-5">

                  {
                  method == 'put' ?
                  <>
                  <input
                  type='hidden'
                  name='id'
                  id='id'
                  value={uniId}
                  
                  />

                 <input
                  type='hidden'
                  name='providerId'
                  id='providerId'
                  value={universityData?.providerId}
                  
                  />

                  </> 
                  
                  
                  :
                  
                  null
                }

                 

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Provider <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={providerMenu}
                      value={{ label: providerTypeLabel, value: providerTypeValue }}
                      onChange={(opt) => selectProviderType(opt.label, opt.value)}
                      name="providerId"
                      id="providerId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      University Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      defaultValue={universityData?.name}
                      placeholder="Enter University Name"
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
                      University Short Name{" "}
                      <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="ShortName"
                      id="ShortName"
                      defaultValue={universityData?.shortName}
                      placeholder="Enter University Short Name"
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
                      University Type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={universityTypeName}
                      value={{ label: uniTypeLabel, value: uniTypeValue }}
                      onChange={(opt) => selectUniType(opt.label, opt.value)}
                      name="UniversityTypeId"
                      id="UniversityTypeId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      University Country <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={universityCountryName}
                      value={{ label: uniCountryLabel, value: uniCountryValue }}
                      onChange={(opt) => selectUniCountry(opt.label, opt.value)}
                      name="UniversityCountryId"
                      id="UniversityCountryId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      University State <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={universityStateName}
                      value={{ label: uniStateLabel, value: unistateValue }}
                      onChange={(opt) => selectUniState(opt.label, opt.value)}
                      name="UniversityStateId"
                      id="UniversityStateId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      University City <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="UniversityCity"
                      id="UniversityCity"
                      defaultValue={universityData?.universityCity}
                      placeholder="Enter University City Name"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Global Rank </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="GlobalRankNumber"
                      id="GlobalRankNumber"
                      defaultValue={universityData?.globalRankNumber}
                      placeholder="Enter University Global Rank"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Foundation Year </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="FoundationYear"
                      id="FoundationYear"
                      defaultValue={universityData?.foundationYear}
                      placeholder="Enter University Foundation Year"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>University Description</span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="textarea"
                      name="Description"
                      id="Description"
                      rows="3"
                      // value={description}
                      defaultValue={universityData?.description}
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Part Time Work Information </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="textarea"
                      name="PartTimeWorkInformation"
                      id="PartTimeWorkInformation"
                      rows="3"
                      defaultValue={universityData?.partTimeWorkInformation}
                      placeholder="Enter Part Time Work Information"
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
                      University Logo <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                  <PicturesWall/>

                    {logoDropzoneError && (
                      <span className="text-danger">{logoDropzoneError}</span>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      University Cover Photo{" "}
                      <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    
                    <CoverPicturesWall/>
                  
                    {coverDropzoneError && (
                      <span className="text-danger">{coverDropzoneError}</span>
                    )}
                  </Col>
                </FormGroup>

              



                {/* <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup> */}
                <FormGroup row
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "end" }}
                 >
                  {/* <Button.Ripple
                    type="submit"
                    className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple> */}
                  <Col md="5">
                    <ButtonForFunction
                      type={"submit"}
                      className={"mr-1 mt-3 badge-primary"}
                      name={"Submit"}
                      permission={6}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => ({
  univerSityTypeList: state.universityTypeDataReducer.universityTypes,
  univerSityCountryList: state.universityCountryDataReducer.universityCountries,
  univerSityStateList: state.universityStateDataReducer.universityStates,
});
export default connect(mapStateToProps)(AddUniversity);
