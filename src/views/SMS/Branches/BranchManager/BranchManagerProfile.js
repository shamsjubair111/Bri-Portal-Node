import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Card, CardHeader , Row, Col, CardBody, Modal, ModalHeader, ModalBody, Button, FormGroup} from 'reactstrap';
import { rootUrl } from '../../../../constants/constants';
import get from '../../../../helpers/get';
import put from '../../../../helpers/put';
import { Image, Upload } from "antd";
import * as Icon from "react-feather";
import { permissionList } from '../../../../constants/AuthorizationConstant';
import ButtonLoader from '../../Components/ButtonLoader';
import uapploader from '../../../../assets/img/Uapp_fav.png';
import Loader from '../../Search/Loader/Loader';

const BranchManagerProfile = () => {
    
    const {branchManagerId} = useParams();
    const history = useHistory();
    const [manager,setManager] = useState({});
   
    const [data,setData] = useState({});
    const permissions = JSON.parse(localStorage.getItem("permissions"));
    const [modalOpen2, setModalOpen2] = useState(false);
    const [buttonStatus1,setButtonStatus1] = useState(false);
    const [previewVisible1, setPreviewVisible1] = useState(false);
    const [previewImage1, setPreviewImage1] = useState("");
    const [previewTitle1, setPreviewTitle1] = useState("");
    const [FileList1, setFileList1] = useState([]);
    const [error1, setError1] = useState(false);
    const {addToast} = useToasts();
    const [success,setSuccess] = useState(false);
    const [text1,setText1] = useState('');
    const [progress, setProgress] = useState(false);
    const [loading,setLoading] = useState(true);

    

    const backToBranchProfile  = () => {
            history.push(`/branchProfile/${manager?.branchId}`);
    }

    useEffect(()=>{
        get(`BranchManager/Get/${branchManagerId}`)
        .then(res => {
            console.log('response',res);
            setManager(res);
            setLoading(false);
        })
    },[success])


    const updateProfilePic = () => {
      setModalOpen2(true);
      setFileList1([]);
    }

    const closeModal1 = () => {
      setModalOpen2(false);
      setFileList1([]);
    };

    const handleSubmitProfilePhoto = event => {
      event.preventDefault();
      setProgress(true);
      const subData = new FormData(event.target);
    
      subData.append("managerImage", FileList1[0]?.originFileObj);
    
      
      setButtonStatus1(true);
    
      if (FileList1.length < 1) {
        setError1(true);
      }
      else{
        put(`BranchManager/UpdateProfilePhoto`, subData).then((res) => {
          setButtonStatus1(false);
          setProgress(false);
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


    
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}



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

    return (
       <>
       {
        loading? 
        <Loader/>
        :
        <div>
        <Card className="uapp-card-bg">
   <CardHeader className="page-header">
     <h3 className="text-white">Branch Manager Profile</h3>
     <div className="page-header-back-to-home">
       <span onClick={backToBranchProfile} className="text-white">
         {" "}
         <i className="fas fa-arrow-circle-left"></i> Back to Branch Profile
       </span>
     </div>
   </CardHeader>
 </Card>

 <Row>
     <Col md="12">
       <Card className="uapp-employee-profile-right">
         <div className="uapp-profile-CardHeader">
          <div className="uapp-circle-image margin-top-minus">
          
             <div className='profile-pic1'>
                    {
                     (manager?.managerImageMedia == null) ?
                     <img src={uapploader} className='img-fluid bg-white'  alt='provider_image' />
                     :
                     <img src={rootUrl+manager?.managerImageMedia?.fileUrl} className='img-fluid'  alt='provider_image' />
                    }
                
                   <div className="edit1"><span  onClick={updateProfilePic}><i className="fas fa-camera" style={{cursor: "pointer"}} > </i ></span></div>
                 
                </div>
                  {/* profile photo edit modal starts here */}
          
           <Modal isOpen={modalOpen2} toggle={closeModal1} className="uapp-modal">
                  <ModalHeader>Update Profile Photo</ModalHeader>

                  <ModalBody>
                    <form onSubmit={handleSubmitProfilePhoto}>
                      <input type="hidden" name="id" id="id" value={branchManagerId} />

                      {/* <input type="hidden" name="id" id="id" value={adminData?.id} /> */}

                      <FormGroup row className="has-icon-left position-relative">
                        <Col className='ml-5' md="4">
                          <span>
                            Profile Photo <span className="text-danger">*</span>{" "}
                          </span>
                        </Col>
                        <Col md="6">
                          <div className="row d-flex">
                            {/* {consultantData?.consultantCoverImageMedia !== null ? (
                              <div className="col-md-6">
                                <Image
                                  width={104}
                                  height={104}
                                  src={
                                    rootUrl + consultantData?.consultantCoverImageMedia?.thumbnailUrl
                                  }
                                />
                              </div>
                            ) : null} */}

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
                            {progress? <ButtonLoader/> : "Update"}
                            </Button>
                          </div>
                        </Col>
                      </FormGroup>
                    </form>
                  </ModalBody>
                </Modal>
             
                {/* profile photo edit modal ends here */} 
           </div>     
           <div className="py-3">
             <h5 className="py-1">
               Name:{" "}
               <span className="text-primary">{manager?.nameTittle?.name}{' '}{manager?.firstName}{" "}{manager?.lastName}</span>{" "}
             </h5>
             <h5 className="py-1">
               Branch: {' '}{manager?.branch?.name}
               <span className="text-primary">
             
               </span>{" "}
             </h5>
             
           </div>
         </div>
         <CardBody>
           <div>
             <ul className="uapp-ul text-center">
             <h5 className="py-1">
               {" "}
               Email:{" "}{manager?.email}
               <span className="text-primary">
                
               </span>{" "}
             </h5>
             <h5 className="py-1">
               {" "}
               Phone Number:{" "}{manager?.phoneNumber}
               <span className="text-primary">
               
               </span>{" "}
             </h5>
             </ul>
           </div>
         </CardBody>
       </Card>
     </Col>
   </Row>



   
       
   </div>
       }
       </>
    );
};

export default BranchManagerProfile;