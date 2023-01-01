import React, { createRef, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import Select from "react-select";
import get from "../../../../helpers/get";
import { useToasts } from "react-toast-notifications";
import ButtonForFunction from "../../Components/ButtonForFunction";
import CustomButtonRipple from "../../Components/CustomButtonRipple";
import post from "../../../../helpers/post";
import put from "../../../../helpers/put";
import remove from "../../../../helpers/remove";
import { permissionList } from "../../../../constants/AuthorizationConstant";
import { rootUrl } from "../../../../constants/constants";
import { Image, Upload } from "antd";
import * as Icon from "react-feather";
import uapploader from '../../../../assets/img/Uapp_fav.png';
import ButtonLoader from "../../Components/ButtonLoader";
import Loader from "../../Search/Loader/Loader";
import Intersect from '../../../../assets/img/Intersect.png';
import bulb from '../../../../assets/img/bulb.png';
import user from '../../../../assets/img/Uapp_fav.png';

const ComplianceOfficerProfile = () => {

    const { managerId, providerId } = useParams();
  const [managerData, setManagerData] = useState({});
  const [applicationData, setApplicationData] = useState([]);
  const [admissionOfficer, setAdmissionOfficer] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [assignModalOpen, setAssignModalOpen] = useState(false);

  const [officerDD, setOfficerDD] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [uniCountryLabel, setUniCountryLabel] = useState('Select Country');
  const [uniCountryValue, setUniCountryValue] = useState(0);

  const [universityStates, setUniversityStates] = useState([]);

  const permissions = JSON.parse(localStorage.getItem('permissions'));
  const [deleteModal, setDeleteModal] = useState(false);

  const [officerLabel, setOfficerLabel] = useState("Select Admission Officer");
  const [officerValue, setOfficerValue] = useState(0);
  const [officerError, setOfficerError] = useState(false);

  const [countryError, setCountryError] = useState(false);

  const [uniStateLabel, setUniStateLabel] = useState('Select State');
  const [unistateValue, setUniStateValue] = useState(0);
  const [uniStateError, setUniStateError] = useState(false);

  const [nameTitleDD, setNameTitleDD] = useState([]);

  const [nameTitleLabel, setNameTitleLabel] = useState("Select Title");
  const [nameTitleValue, setNameTitleValue] = useState(0);

  const [nameTitleError, setNameTitleError] = useState(false);

  const [providerDD, setProviderDD] = useState([]);
  // const [providerLabel, setProviderLabel] = useState("Select Provider");
  // const [providerValue, setProviderValue] = useState(0);
  // const [providerError, setProviderError] = useState(false);

  const [success, setSuccess] = useState(false);

  const [existsNote, setExistsNote] = useState();

  const [emailError, setEmailError] = useState(true);
  const [officerObj, setOfficerObj] = useState({});
  const [selectedId, setSelectedId] = useState(undefined);
  const [deleteId, setDeleteId] = useState(undefined);
  const [deleteName, setDeleteName] = useState("");

  const history = useHistory();
  const location = useLocation();
  const { addToast } = useToasts();
  const [buttonStatus,setButtonStatus] = useState(false);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [FileList, setFileList] = useState([]);
  const [proLabel,setProLabel] = useState('Select Provider');
  const [proValue,setProValue] = useState(0);
  const [error,setError] = useState(false);

  const [modalOpen2, setModalOpen2] = useState(false);
  const [buttonStatus1,setButtonStatus1] = useState(false);
  const [previewVisible1, setPreviewVisible1] = useState(false);
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewTitle1, setPreviewTitle1] = useState("");
  const [FileList1, setFileList1] = useState([]);
  const [error1, setError1] = useState(false);
  const [text1, setText1] = useState('');
  const [progress,setProgress]= useState(false);
  const [loading,setLoading] = useState(true);

  const {complianceOfficerId}  = useParams();
    
  

  const tableStyle = {
    overflowX: "scroll",
  };

  const backToProviderDetails = () => {
    // if (location.managerList != undefined) 
    if (managerId != undefined) 
    {
      history.push(`/admissionManagerList`);
    } 
    else if(location.officerId != undefined){
      history.push(`/admissionOfficerDetails/${location.officerId}`)
    }
    else {
      history.push(`/providerDetails/${providerId}`);
    }
  };

  useEffect(() => {

    get(`ComplianceOfficer/Get/${complianceOfficerId}`).then((res) => {
      setManagerData(res);
      setApplicationData(res?.admissionManagerApplications);
      setAdmissionOfficer(res?.admissionOfficers);
      
      setLoading(false);
    });
  }, [success]);

  // Trial start

 function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const handleCancel = () => {
  setPreviewVisible(false);
};

const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }

  setPreviewImage(file.url || file.preview);
  setPreviewVisible(true);
  setPreviewTitle(
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
  );
};

const handleChange = ({ fileList }) => {
  
 
  if(fileList.length > 0 && fileList[0]?.type !== 'image/jpeg' && fileList[0]?.type !== 'image/jpg' && fileList[0]?.type !== 'image/png'){
    setFileList([]);
    setError('Only jpeg, jpg, png image is allowed');
  }
  else{
    setFileList(fileList);
    setError('');
  
  }
};

  const handlRedirectToApplicationDetails = (applicationId, studentId) => {
    history.push({
      pathname: `/applicationDetails/${applicationId}/${studentId}`,
      managerId: managerId,
      providerId: providerId
    });
  }

   // on Close Modal
   const closeModal = () => {
    setSelectedId(undefined);
    setOfficerObj(null);
    setNameTitleLabel("Select Title");
    setNameTitleValue(0);
    setUniCountryLabel("Select Country");
    setUniCountryValue(0);
    setUniStateLabel("Select State");
    setUniStateValue(0);
    // setProviderLabel("Select Provider");
    // setProviderValue(0);
    // setManagerFormLabel("Select Admission Manager");
    // setManagerFormValue(0);
    setCountryError(false);
    setUniStateError(false);
    setNameTitleError(false);
    // setProviderError(false);
    // setManagerFormError(false);
    setEmailError(true);
    setModalOpen(false);
  }

  const assignCloseModal = () => {
    setOfficerError(false);
    setExistsNote();
    setOfficerLabel("Select Admission Officer");
    setOfficerValue(0);
    setAssignModalOpen(false);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    const subdata = new FormData(event.target);
    subdata.append('admissionOfficerFile',FileList?.length< 1 ? null : FileList[0]?.originFileObj)

  

    if(nameTitleValue === 0){
      setNameTitleError(true);
    }
    else if(emailError == false){
      setEmailError(emailError);
    }
    else if(uniCountryValue === 0){
      setCountryError(true);
    }
    else if(unistateValue === 0){
      setUniStateError(true);
    }
    else{
      if(selectedId === undefined){
        setOfficerObj({});
        setButtonStatus(true);
        setProgress(true);
        post(`AdmissionOfficer/Create`, subdata)
        .then(res => {
          setSuccess(!success);
          setProgress(false);
          setModalOpen(false);
          
          setNameTitleLabel("Select Title");
          setNameTitleValue(0);
          setUniCountryLabel("Select Country");
          setUniCountryValue(0);
          setUniStateLabel("Select State");
          setUniStateValue(0);
          setButtonStatus(false);

        //   setuniversityId(res?.data?.result?.universityId)
          if (res?.status === 200 && res?.data?.isSuccess === true) {
            // setSubmitData(false);
            addToast(res.data.message, {
              appearance: 'success',
              autoDismiss: true,
            })
          }
        })
        }
        else{
          setProgress(true);
          put(`AdmissionOfficer/Update`, subdata)
          .then(res => {
            setProgress(false);
            if (res.status === 200 && res.data.isSuccess === true) {
              addToast(res.data.message, {
                appearance: 'success',
                autoDismiss: true,
              })
              setOfficerObj({});
              setSelectedId(undefined);
              setSuccess(!success);
              setModalOpen(false);
              setNameTitleLabel("Select Title");
              setNameTitleValue(0);
              setUniCountryLabel("Select Country");
              setUniCountryValue(0);
              setUniStateLabel("Select State");
              setUniStateValue(0);
            }
          
          })
        }
    }
  }

  const handleSubmitAssign = (event) => {
    event.preventDefault();
    const subdata = {
      admissionManagerId: managerId,
      admissionOfficerId: officerValue
    }

    if(officerValue === 0){
      setOfficerError(true);
    }
    else{
      setButtonStatus(true);
      setProgress(true);
      post("AdmissionOfficerOfManager/Create", subdata).then(res => {
        setProgress(false);
        if (res?.status == 200 && res?.data?.isSuccess == true) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          setSuccess(!success);
          setAssignModalOpen(false);
          setOfficerLabel("Select Admission Officer");
          setOfficerValue(0);
          setExistsNote();
          setButtonStatus(false);
        }
        else{
          addToast(res?.data?.message, {
            appearance: "error",
            autoDismiss: true,
          });
        }
      })
    }

  }

  const officerMenu = officerDD.map((manager) => ({
    label: manager?.name,
    value: manager?.id,
  }));

  const selectOfficer = (label, value) => {
    setOfficerError(false);
    setOfficerLabel(label);
    setOfficerValue(value);

    get(`AdmissionOfficerOfManager/OfficerExists/${value}`).then(res=>{
      setExistsNote(res);
    })
  }

  const countryDD = countryList.map(countryOptions =>({
    label:countryOptions?.name, 
    value:countryOptions?.id
  }));

  // select University Country
  const selectUniCountry = (label, value) => {
    setUniCountryLabel(label);
    setUniCountryValue(value);
    setCountryError(false);
    setUniStateLabel("Select State");
    setUniStateValue(0);
    get(`StateDD/Index/${value}`)
      .then(res => {
        // setUniStateLabel(res.name)
        // setUniStateValue(res.id)
        setUniversityStates(res);
      })
  }

  const universityStateName = universityStates?.map(uniState => ({ 
    label: uniState.name, 
    value: uniState.id 
  }));

  // select University State
  const selectUniState = (label, value) => {
    setUniStateError(false);
    setUniStateLabel(label);
    setUniStateValue(value);
  }

  const nameTitleMenu = nameTitleDD?.map(nameTitle => ({
    label: nameTitle?.name,
    value: nameTitle?.id
  }))

//   select name title
const selectNameTitle = (label, value) => {
    setNameTitleError(false);
    setNameTitleLabel(label);
    setNameTitleValue(value);
  }

  const handleEmail = (e) => {
    

    get(`Consultant/OnChangeEmail/${e.target.value}`)
    .then(res => {
      setEmailError(res);
    })
  }

  const handleAddNew = () =>{
    setOfficerObj({});
    setModalOpen(true);
  }

  const handleUpdate = (officer) =>{

    
    setOfficerObj(officer);
    setNameTitleLabel(officer?.nameTittleName);
    setNameTitleValue(officer?.nameTittleId);
    setUniCountryLabel(officer?.countryName);
    setUniCountryValue(officer?.countryId);
    setUniStateLabel(officer?.stateName);
    setUniStateValue(officer?.stateId);
    setSelectedId(officer?.id);
    setModalOpen(true);
  }

  const toggleDanger = (officer) => {
    
    setDeleteName(officer?.firstName);
    setDeleteId(officer?.officermanagerId);
    setDeleteModal(true);
    
  }

  const closeDeleteModal = () => {
    setDeleteModal(false);
    setDeleteName("");
    setDeleteId(undefined);
  };

  const handleDeleteAdmissionOfficer = (id) =>{
    setButtonStatus(true);
    setProgress(true);
    remove(`AdmissionOfficerOfManager/Delete/${id}`).then((res) => {
      setProgress(false);
      addToast(res, {
        appearance: "error",
        autoDismiss: true,
      });
      setDeleteModal(false);
      setDeleteName("");
      setDeleteId(undefined);
      setSuccess(!success);
      setButtonStatus(false);
    });
  }

  const handlRedirectToAdmissionofficerDetails = (officerId) => {
    history.push({
      pathname: `/admissionOfficerDetails/${officerId}`,
      managerId: managerId,
      providerId: providerId
    });
  }

  const gotoAssignUniversity = (data) => {
    
    history.push(`/assignOfficerUniversity/${data?.providerId}/${data?.id}`)
  }

  const updateProfilePic = () => {
    setModalOpen2(true);
    setFileList1([]);
  }

  const closeModal1 = () => {
    setModalOpen2(false);
    setFileList1([]);
    setError1(false);
  };

  const handleCancel1 = () => {
    setPreviewVisible1(false);
  };
  
  const handlePreview1 = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  
    setPreviewImage1(file.url || file.preview);
    setPreviewVisible1(true);
    setPreviewTitle1(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  
  const handleChange1 = ({ fileList }) => {
    // setFileList(fileList);
  
    if(fileList.length > 0 && fileList[0]?.type !== 'image/jpeg' && fileList[0]?.type !== 'image/jpg' && fileList[0]?.type !== 'image/png'){
      setFileList1([]);
      setText1('Only jpeg, jpg, png image is allowed');
    }
    else{
      setFileList1(fileList);
      setText1('');
      setError1(false);
      setButtonStatus1(false);
    }
  
  };

  const handleSubmitProfilePhoto = event => {
    event.preventDefault();
  
    const subData = new FormData(event.target);
  
    subData.append("profileImage", FileList1[0]?.originFileObj);
  
    // for(var x of subData.values()){
    //     
    // }
    
  
    if (FileList1.length < 1) {
      setError1(true);
    }
    else{
      setButtonStatus1(true);
      setProgress(true);
      put(`ComplianceOfficer/UpdateProfilePhoto`, subData).then((res) => {
        setProgress(false);
        setButtonStatus1(false);
        if (res?.status == 200 && res?.data?.isSuccess == true) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          setFileList1([]);
          setModalOpen2(false);
          setSuccess(!success);
        }
        else{
          addToast(res?.data?.message, {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
    }
  }


    return (
        <div>


        <div className="row">
          {
                        permissions?.includes(permissionList.Change_ComplianceOfficer_profileImage) ?
                <Modal isOpen={modalOpen2} toggle={closeModal1} className="uapp-modal">
                       <ModalHeader>Update Profile Photo</ModalHeader>

                       <ModalBody>
                         <form onSubmit={handleSubmitProfilePhoto}>
                           <input type="hidden" name="id" id="id" value={complianceOfficerId} />

                          

                           <FormGroup row className="has-icon-left position-relative">
                             <Col className='ml-5' md="4">
                               <span>
                                 Profile Photo <span className="text-danger">*</span>{" "}
                               </span>
                             </Col>
                             <Col md="6">
                               <div className="row d-flex">
                               

                                 <div className="col-md-6">
                                   <>
                                     <Upload
                                       listType="picture-card"
                                       multiple={false}
                                       fileList={FileList1}
                                       onPreview={handlePreview1}
                                       onChange={handleChange1}
                                       beforeUpload={(file) => {
                                         return false;
                                       }}
                                     >
                                       {FileList1.length < 1 ? (
                                         <div className="text-danger" style={{ marginTop: 8 }}>
                                           <Icon.Upload />
                                           <br />
                                           <span>Upload Image Here</span>
                                         </div>
                                       ) : (
                                         ""
                                       )}
                                     </Upload>
                                     <Modal
                                       visible={previewVisible1}
                                       title={previewTitle1}
                                       footer={null}
                                       onCancel={handleCancel1}
                                     >
                                       <img
                                         alt="example"
                                         style={{ width: "100%" }}
                                         src={previewImage1}
                                       />
                                     </Modal>
                      

                                     <span className="text-danger d-block">{text1}</span>

                                     {error1 && (
                                       <span className="text-danger">
                                         Profile photo is required
                                       </span>
                                     )}

                                   </>
                                 </div>
                               </div>
                             </Col>
                           </FormGroup>

                           <FormGroup row>
                             <Col md="12">
                               <div className="d-flex justify-content-end">
                                 <Button color='danger' onClick={closeModal1} className='mr-1 mt-3'>
                                       Cancel
                                 </Button>
                                 <Button type="submit" className="ml-1 mt-3" color="primary" disabled={buttonStatus1}>
                                   {progress ? <ButtonLoader/> : 'Update'}
                                 </Button>
                               </div>
                             </Col>
                           </FormGroup>
                         </form>
                       </ModalBody>
                     </Modal>
                                    :
                                    null
               }

            <div className="col-md-10 col-sm-12">

            <Card>
          <CardBody>

              <div className="row">

                <div className="col-md-6 col-sm-12 left-adm-div">

                  <div className="adm-user-img">
                   {
                    (managerData?.complianceOfficerMedia?.thumbnailUrl == null) ? 

                    <img src={user} alt='admission_manager_media' />
                    :
                     <img src={rootUrl + managerData?.complianceOfficerMedia?.thumbnailUrl} alt='compliance_officer_media' />
                   }

                    {
                permissions?.includes(permissionList.Change_ComplianceOfficer_profileImage) ?
               <span className="edit1-adm"  onClick={updateProfilePic}><i className="fas fa-camera" style={{cursor: "pointer"}} > </i ></span>
                :
                null
               }

                  </div>

                  <div className="adm-manager-user-info ml-md-5 ml-ms-0">
                    <p className="adm-user-title">{managerData?.nameTittleName} {managerData?.firstName} {}{" "}
                  {managerData?.lastName}{" "}</p>

              
                  </div>

                </div>


                <div className="col-md-6 col-sm-12 right-adm-div">

                <div className="adm-manager-user-info ml-md-5 ml-ms-0">
                   

              <div className="mb-1">
              <span className="adm-provider-css-name2">{managerData?.email}</span>
              </div>
                  
                 <div className="mb-1">
                 <span className="adm-provider-css-name2">{managerData?.phoneNumber}</span>
                 </div>
                
                  <div className="mb-1">
                  <span className="adm-provider-css">{managerData?.state?.name}</span>
                  </div>
                  </div>

                  <div className="adm-user-img2">
                    <img src={bulb} alt='admission_manager_media' />

                  </div>

                </div>

              </div>
              </CardBody>
        </Card>

            </div>

            <div className="col-md-2 col-sm-0">

            </div>

          </div>
            
        </div>
    );
};

export default ComplianceOfficerProfile;