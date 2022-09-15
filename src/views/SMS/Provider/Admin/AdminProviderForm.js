import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle,  Button, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import Select from 'react-select';
import AdminLogo from './AdminLogo';
import get from '../../../../helpers/get';
import { Upload, Modal } from 'antd';
import "antd/dist/antd.css";
import * as Icon from 'react-feather';
import post from '../../../../helpers/post';
import { useToasts } from 'react-toast-notifications';

const AdminProviderForm = () => {

    const {adminProviderHiddenId} = useParams();
    
    const history = useHistory();
    const {addToast} = useToasts(); 

    const [title,setTitle] = useState([]);
    const [titleLabel,setTitleLabel] = useState('Select Title');
    const [titleValue,setTitleValue] = useState(0);
    const [titleError,setTitleError] = useState(false);
    const [imageError, setImageError] = useState(false);

    const [emailError, setEmailError] = useState(true);

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [FileList, setFileList] = useState([]);

    useEffect(()=>{

      get('NameTittle/GetAll')
      .then(res => {
        console.log('title',res);
        setTitle(res);
      })

    },[])


    const backToDashboard = () => {
        history.push("/")
    }


    
    const nameTitle = title?.map((singleTitle) => ({
      label: singleTitle.name,
      value: singleTitle.id,
    }));


             // select  Title
const selectTitle = (label, value) => {

  setTitleError(false);
  setTitleLabel(label);
  setTitleValue(value);
 
}

// provider admin image code start

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
  setImageError(false);
   setFileList(fileList);
  
  
};

console.log('hello', FileList);

// provider admin image code end 

const handleSubmit  = (event) => {
  event.preventDefault();
   const subData = new FormData(event.target);

   subData.append('providerAdmin',FileList[0]?.originFileObj);

   if(titleValue == 0 ){
    setTitleError(true);
   
  }
  else if(FileList?.length < 1){
    setImageError(true);
  }
  else if(emailError == false){
    setEmailError(emailError);
  }
  else{

    post(`ProviderAdmin/Create`,subData)
    .then(res =>{
      if(res?.status == 200 && res?.data?.isSuccess == true){
        addToast(res?.data?.message,{
          appearance: 'success',
          autoDismiss: true
        })
        history.push(`/providerDetails/${adminProviderHiddenId}`);
      }
    })

  }
}

const handleEmail = (e) => {
  console.log(e.target.value);

  get(`EmailCheck/EmailCheck/${e.target.value}`)
  .then(res => {
    console.log('Checking Response', res);
    setEmailError(res);
  })
}

    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Provider Admin Information</h3>
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
  <form  onSubmit = {handleSubmit}>

                <input
                type='hidden'
                name='providerId'
                id='providerId'
                value={adminProviderHiddenId}
                />

                <FormGroup row>
                <Col md="2">
                <i id="nametitleTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2"> Title</span>
                </Col>
              
                <UncontrolledTooltip
                placement="top"
                target="nametitleTooltip"

              >
              Name Title
              </UncontrolledTooltip>

              <Col md="10" lg="6">
              <Select
                      options={nameTitle}
                      value={{ label: titleLabel, value: titleValue }}
                      onChange={(opt) => selectTitle(opt.label, opt.value)}
                      name="nameTittleId"
                      id="nameTittleId"
                      required

                    />
                   
                    {
                      titleError && 
                      <span className='text-danger'>Title must be selected</span>
                    }

                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                <i id="firstnameTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2">First Name</span>
                </Col>

                <UncontrolledTooltip
                placement="top"
                target="firstnameTooltip"

              >
                First Name
              </UncontrolledTooltip>
               
                
                
                <Col md="10" lg="6">
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter First Name"
                   
                    required
                  />

                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                <i id="lastnameTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2">Last Name</span>
                </Col>

                <UncontrolledTooltip
                placement="top"
                target="lastnameTooltip"

              >
                Last Name
              </UncontrolledTooltip>
               
                
                
                <Col md="10" lg="6">
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Last Name"
                   
                    required
                  />

                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
               <i id="emailTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2">Email</span>
                </Col>

                <UncontrolledTooltip
                placement="top"
                target="emailTooltip"

              >
                Your Email
              </UncontrolledTooltip>
                

            

                <Col md="10" lg="6">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                    onBlur={handleEmail}
                    // onChange={(e)=>setIcon(e.target.value)}
                  />
                  {
                      !emailError ? 

                      <span className='text-danger'>Email already exists</span>
                      :
                      null

                    }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
               <i id="passwordTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2">Password</span>
                </Col>

                <UncontrolledTooltip
                placement="top"
                target="passwordTooltip"

              >
                Your Password
              </UncontrolledTooltip>
                

            

                <Col md="10" lg="6">
                 <Input
                   type="password"
                   name="password"
                   id="password"
                   placeholder="Enter password"
                   required
                 />
                  
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
               <i id="numberTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2">Phone Number</span>
                </Col>

                <UncontrolledTooltip
                placement="top"
                target="numberTooltip"

              >
                Your Phone Number
              </UncontrolledTooltip>

              

                <Col md="10" lg="6">
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter Your Phone Number"
                    required
                    // onChange={(e)=>setIcon(e.target.value)}
                  />

                </Col>
              </FormGroup>

              
              <FormGroup row>
                <Col md="2">
                <i id="logoTooltip" className="fas fa-info-circle menuIcon"></i>
                  <span className="pl-2"> Admin Logo</span>
                </Col>
               
                <UncontrolledTooltip
                placement="top"
                target="logoTooltip"

              >
               Admin Logo
              </UncontrolledTooltip>

                <Col md="10" lg="6">
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
           {FileList.length < 1 ?  <div className='text-danger' style={{ marginTop: 8 }}><Icon.Upload/></div>: ''}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
                 
                 {
                  imageError ? 
                  <span className='text-danger'>Admin logo must be selected</span>
                  :
                  null
                 }

                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md='8'>
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

export default AdminProviderForm;