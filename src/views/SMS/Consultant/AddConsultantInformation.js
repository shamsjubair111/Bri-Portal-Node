import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import Select from "react-select";
import { useToasts } from 'react-toast-notifications';
import get from '../../../helpers/get';
import { Upload, Modal } from 'antd';
import * as Icon from 'react-feather';
import { Image } from 'antd';

const AddConsultantInformation = () => {


    const history = useHistory();
    const [nameTitle, setNameTitle] = useState([]);
    const [consParent, setConsParent] = useState([]);
    const [consType, setConsType] = useState([]);
    const [nameLabel, setNameLabel] = useState("Name Title");
    const [nameValue, setNameValue] = useState(0);
    const [parentLabel, setParentLabel] = useState("Parent Consultant");
    const [parentValue, setParentValue] = useState(0);
    const [typeLabel, setTypeLabel] = useState("Consultant Type");
    const [typeValue, setTypeValue] = useState(0);

    const [emailError, setEmailError] = useState(true);
    const [consultantError, setConsultantError] = useState(false);
    const [parentError, setParentError] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const { addToast } = useToasts();

    const [account, setAccount] = useState([]);
    const [residency, setResidency] = useState([]);
    const [branch,setBranch] = useState([]);
    const [visa, setVisa]  = useState([]);

    const [accountLabel, setAccountLabel] = useState('Select Account Status');
    const [accountValue, setAccountValue] = useState(0);
    const [residencyLabel, setResidencyLabel] = useState('Select Residency Status');
    const [residencyValue, setResidencyValue] = useState(0);
    const [branchLabel, setBranchLabel] = useState('Select Branch');
    const [branchValue, setBranchValue] = useState(0);
    const [visaLabel, setVisaLabel] = useState('Select Visa Type');
    const [visaValue, setVisaValue] = useState(0);

    const [accountError, setAccountError] = useState(false);
    const [residencyError, setResidencyError] = useState(false);
    const [branchError, setBranchError] = useState(false);
    const [visaError, setVisaError] = useState(false);

    const [consultantData, setConsultantData] = useState({});


    // Profile Image States

    const [previewVisible, setPreviewVisible] = useState(false);
      const [previewImage, setPreviewImage] = useState('');
      const [previewTitle, setPreviewTitle] = useState('');
      const [FileList, setFileList] = useState([]);



    useEffect(()=>{
        get("NameTittleDD/index").then(res=>{
          setNameTitle(res);
        });
  
        get("ConsultantDD/index").then(res=>{
          setConsParent(res);
        });
  
        get("ConsultantTypeDD/index").then(res=>{
          setConsType(res);
        })

        get(`Consultant/Get/${localStorage.getItem('consultantRegisterId')}`)
        .then(res => {
            console.log('fetching consultant info from api',res);
            setConsultantData(res);
            setNameLabel(res?.nameTitle?.name);
            setNameValue(res?.nameTitle?.id);
            setTypeLabel(res?.consultantType?.name);
            setTypeValue(res?.consultantTupe?.value);
            setParentLabel(res?.parentConsultantName);
            setParentValue(res?.parentConsultantId);
            setAccountLabel(res?.accountStatus?.statusName);
            setAccountValue(res?.accountStatus?.id);
        })

        get('VisaTypeDD/Index')
        .then(res => {
          console.log(res);
          setVisa(res);
        })

        get('BranchDD/index')
        .then(res => {
          console.log(res);
          setBranch(res);
        })

        get('ResidencyStatusDD/index')
        .then(res => {
          console.log(res);
          setResidency(res);
        })

        get(`AccountStatusDD/index/${localStorage.getItem('consultantRegisterId')}`)
        .then(res => {
          console.log(res);
          setAccount(res);
        })
  
      },[]);


        // Profile Image Code Start


    
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}



const  handleCancel = () => {
    setPreviewVisible(false);
};

const handlePreview = async file => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }

  

  setPreviewImage(file.url || file.preview);
  setPreviewVisible(true);
  setPreviewTitle(file.name ||  file.url.substring(file.url.lastIndexOf('/') + 1) );





};

const handleChange = ({ fileList }) => {
   setFileList(fileList);
   
  
};

// dispatch(StoreStudentProfileImageData(FileList));


console.log('One two three', FileList[0]?.originFileObj);



    // Profile Image Code End

      const nameTitleMenu = nameTitle?.map(titleOptions => ({label:titleOptions?.name, value:titleOptions?.id}));
    const consParentMenu = consParent?.map(consParentOptions => ({label:consParentOptions?.name, value:consParentOptions?.id}));
    const consTypeMenu = consType?.map(consTypeOptions => ({label:consTypeOptions?.name, value:consTypeOptions?.id}));

    const visaStatusName = visa?.map((v) => ({
      label: v.name,
      value: v.id,
    }));

    const branchOptions = branch?.map((b) => ({
      label: b.name,
      value: b.id,
    }));

    const residencyOptions = residency?.map((r) => ({
      label: r.name,
      value: r.id,
    }));

    const accountOptions = account?.map((a) => ({
      label: a.name,
      value: a.id,
    }));
  
  
        
  const selectVisaStatus = (label, value) => {
  setVisaLabel(label);
  setVisaValue(value);
  
  
  }

  const selectBranch = (label, value) => {
  setBranchLabel(label);
  setBranchValue(value);
  
  
  }

  const selectResidency = (label, value) => {
  setResidencyLabel(label);
  setResidencyValue(value);
  
  
  }

  const selectAccount = (label, value) => {
  setAccountLabel(label);
  setAccountValue(value);
  
  
  }


    const selectNameTitle = (label, value) => {

        setTitleError(false);
        setNameLabel(label);
        setNameValue(value);
      }
  
      const selectParentCons = (label, value) => {
  
        setParentError(false);
        setParentLabel(label);
        setParentValue(value);
      }
  
      const selectConsType = (label, value) => {
  
        setConsultantError(false);
        setTypeLabel(label);
        setTypeValue(value);
      }

    const backToDashboard = () =>{
       
        history.push('/');
    }


    

    

    const handleSubmit = (event) =>{

        event.preventDefault();

        if(nameValue == 0){
            setTitleError(true);
          }
      
          if(parentValue == 0 ){
            setParentError(true);
          }
      
          if(typeValue == 0){
            setConsultantError(true);
          }

          if(accountValue == 0){
            setAccountError(true);
          }

          if(residencyValue == 0){
            setResidencyError(true);
          }

          if(branchValue == 0 ){
            setBranchError(true);
            
          }

          if(visaValue == 0){

            setVisaError(true);
          }

          else{


          }


    }


    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Consultant Information</h3>
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
            <Form  onSubmit={handleSubmit} className="mt-5">

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

                  {

                    consultantError && 
                    <span className='text-danger'>Select Consultant Type</span>
                  }

                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Parent Consultant <span className="text-danger">*</span>{" "}
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

                 {
                  parentError && 
                  <span className='text-danger'>Select Parent Consultant</span>
                 }

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

                  {
                    titleError && 
                    <span className='text-danger'>Select Name Title</span>

                  }

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
                    placeholder="Enter First Name"
                    defaultValue={consultantData?.firstName}
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
                    placeholder="Enter Last Name"
                    defaultValue={consultantData?.lastName}
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
                    placeholder="Enter Email"
                    required
                    value={consultantData?.email}
                  />
                   
                  {
                    !emailError ? 

                    <span className='text-danger'>Email Already Exists</span>
                    :
                    null

                  }
                  
                </Col>
              </FormGroup>
            <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Phone Number  <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter Phone Number"
                    defaultValue={consultantData?.phoneNumber}
                    required
                  />

                 
                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Account Status <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                  <Select
                  options={accountOptions}
                    value={{ label: accountLabel, value: accountValue }}
                    onChange={(opt) => selectAccount(opt.label, opt.value)}
                  name='AccountStatusId'
                  id='AccountStatusId'
                    
                  />

                  {

                    accountError && 
                    <span className='text-danger'>Select Account Status</span>
                  }
                 

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
                  options={residencyOptions}
                    value={{ label: residencyLabel, value: residencyValue }}
                    onChange={(opt) => selectResidency(opt.label, opt.value)}
                  name='ResidencyStatusId'
                  id='ResidencyStatusId'
                    
                  />

                  {

                    residencyError && 
                    <span className='text-danger'>Select Residency Status</span>
                  }

                 

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
                  options={branchOptions}
                    value={{ label: branchLabel, value: branchValue }}
                    onChange={(opt) => selectBranch(opt.label, opt.value)}
                  name='BranchId'
                  id='BranchId'
                    
                  />

                  {

                    branchError && 
                    <span className='text-danger'>Select Branch</span>
                  }

                 

                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Visa Status <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                  <Select
                  options={visaStatusName}
                  value={{ label: visaLabel, value: visaValue }}
                  onChange={(opt) => selectVisaStatus(opt.label, opt.value)}
                  name='visaTypeId'
                  id='visaTypeId'
                    
                  />

                  {

                    visaError && 
                    <span className='text-danger'>Select Visa Status</span>
                  }

                 

                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Profile Image <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 
                <Upload
                   
                listType="picture-card"
                multiple={false}
                fileList={FileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={(file)=>{
      
                
                    
                  
                    return false;
                }}
              >
                 {FileList.length < 1 ?  <div className='text-danger' style={{ marginTop: 8 }}><Icon.Upload/>
                 <br/>
                 <span>Upload Image Here</span>
                 </div>: ''}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>

                  

                 

                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Cover Image <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 

                  

                 

                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Id or Passport <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 

                  

                 

                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Proof Of Address <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 

                  

                 

                </Col>
              </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                <Col md="2">
                  <span>
                    Proof Of Right To Work <span className="text-danger">*</span>{" "}
                  </span>
                </Col>
                <Col md="6">
                 

                  

                 

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
      </CardBody>
    </Card>


            
        </div>
    );
};

export default AddConsultantInformation;