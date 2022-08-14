import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
} from "reactstrap";
import Select from "react-select";
import StudentProfileImage from "./StudentProfileImage";
import * as Icon from "react-feather";
import get from "../../../helpers/get";
import { useToasts } from "react-toast-notifications";
import { Upload, Modal as AntdModal } from "antd";
import "antd/dist/antd.css";
import { Image } from "antd";
import ButtonForFunction from "../Components/ButtonForFunction";
import post from "../../../helpers/post";
import { rootUrl } from "../../../constants/constants";
import remove from "../../../helpers/remove";

const DocumentUpload = () => {
  const applicationStudentId = localStorage.getItem("applictionStudentId");

  const history = useHistory();
  const { addToast } = useToasts();

  const [activetab, setActivetab] = useState("10");
  const [docuType, setDocuType] = useState([]);
  const [docLevel, setDocLevel] = useState("");
  const [docuTypeLabel, setDocuTypeLabel] = useState("Select Document Type");
  const [docuTypeValue, setDocuTypeValue] = useState(0);
  const [docutypeError, setDocuTypeError] = useState(false);
  const [FileList1, setFileList1] = useState([]);
  const [uploadError, setUploadError] = useState(false);
  const [previewVisible1, setPreviewVisible1] = useState(false);
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewTitle1, setPreviewTitle1] = useState("");
  const [uploadedDocuData, setUploadedDocuData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [studentDocuId, setStudentDocuId] = useState(0);
  const [deleteModal2, setDeleteModal2] = useState(false);

  const [delDocData, setdelDocData] = useState({});

  const [isSelected, setIsSelected] = useState(false);

  const [FileList2, setFileList2] = useState([]);


  const backToStudentProfile = () => {
    history.push(
      `/studentProfile/${localStorage.getItem("applictionStudentId")}`
    );
  };

  const handleChange1 = ({ fileList }) => {
    setUploadError(false);
    setFileList1(fileList);
    console.log(fileList);
  };

  const handleChange2 = ({ fileList }) => {
    // setUploadError(false);
    setFileList2(fileList);
    console.log(fileList);
  };

  function getBase641(file) {
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
      file.preview = await getBase641(file.originFileObj);
    }

    setPreviewImage1(file.url || file.preview);
    setPreviewVisible1(true);
    setPreviewTitle1(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  useEffect(() => {
    get(`StudentUploadDocument/Index/${applicationStudentId}`).then((res) => {
      console.log("studentDocu data",res);
      setUploadedDocuData(res);
    });

    get("DocumentDD/Index").then((res) => {
      setDocuType(res);
    });
  }, [success]);

  const docuTypeDD = docuType.map((docu) => ({
    label: docu?.name,
    value: docu?.id,
  }));

  const selectDocumentType = (label, value) => {
    setDocuTypeLabel(label);
    setDocuTypeValue(value);
    setDocuTypeError(false);
  };

  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push("/addStudentApplicationInformation");
    }

    if (tab == "2") {
      history.push("/addStudentInformation");
    }

    if (tab == "3") {
      history.push("/addStudentContactInformation");
    }

    if (tab == "4") {
      history.push("/addStudentEducationalInformation");
    }

    if (tab == "5") {
      history.push("/addTestScore");
    }

    if (tab == "6") {
      history.push("/addExperience");
    }

    if (tab == "7") {
      history.push("/addReference");
    }

    if (tab == "8") {
      history.push("/addPersonalStatement");
    }
    if (tab == "9") {
      history.push("/addOtherInformation");
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const subData = new FormData(event.target);

    subData.append(
      "studentDocument",
      FileList1.length == 0 ? null : FileList1[0]?.originFileObj
    );

    for (var i of subData) {
      console.log(i);
    }

    if (docuTypeValue == 0) {
      setDocuTypeError(true);
    }
    // if (FileList1.length < 1) {
    //   setUploadError(true);
    // }
    else {
      post("StudentUploadDocument/Create", subData).then((res) => {
        console.log("document data", res);
        if (res?.status == 200) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          // history.push('/addUniversityRequiredDocument');
          setSuccess(!success);
          setFileList1([]);
          setDocLevel("");
          setDocuTypeLabel("Select Document Type");
          setDocuTypeValue(0);
        }
      });
    }
  };

  const toggleDanger = (docu) => {
    console.log("delete", docu);
    setdelDocData(docu)
    // localStorage.setItem("delDocNam", docu?.documentLevelName);
    // localStorage.setItem("delDocId", docu?.studentDocumentLevelId);
    setDeleteModal(true);
  };
  
  const toggleDangerFile = (docFile) => {
    console.log("delete file", docFile, docFile?.studentDocumentFile?.fileName);
    localStorage.setItem("delFileName", docFile?.studentDocumentFile?.fileName);
    localStorage.setItem("delFileId", docFile?.studentDocumentLevelId);
    setDeleteModal2(true);
  }

  // on Close Delete Modal
  const closeDeleteModal = () => {
    setDeleteModal(false);
    localStorage.removeItem("delDocNam");
    localStorage.removeItem("delDocId");
  };

  // on Close Delete Modal
  const closeDeleteModalFile = () => {
    setDeleteModal2(false);
    localStorage.removeItem("delFileName");
    localStorage.removeItem("delFileId");
  };

  const handleDeleteDocument = () => {
    console.log("delData", delDocData?.studentDocumentLevelId);
    const returnValue = remove(`StudentUploadDocument/LevelDelete/${delDocData?.studentDocumentLevelId}`).then(
      (action) => {
        setDeleteModal(false);
        setSuccess(!success);
        addToast(action, {
          appearance: "error",
          autoDismiss: true,
        });
        localStorage.removeItem("delDocNam");
        localStorage.removeItem("delDocId");
      }
    );
  };

  const handleDeleteFile = (id) => {
    const returnValue = remove(`StudentUploadDocument/FileDelete/${id}`).then(
      (action) => {
        setDeleteModal2(false);
        setSuccess(!success);
        addToast(action, {
          appearance: "error",
          autoDismiss: true,
        });
        localStorage.removeItem("delFileName");
        localStorage.removeItem("delFileId");
      }
    );
  };


  const changeHandler = (e,doc) => {         
      setFileList2(e.target.files[0]);
      setIsSelected(true);
      setStudentDocuId(doc?.studentDocumentLevelId);
  }

  const handleCardUpload = () => {

    const subData = new FormData();

    subData.append('studentDocument', FileList2);
    subData.append('studentDocumentLevelId', parseInt(studentDocuId));
    

    // for (var i of subData) {
    //   console.log(i);
    // }

    if(studentDocuId !== 0){

      post("StudentUploadDocument/FileCreate", subData).then((res) => {
        console.log("document data create", res);
        if (res?.status == 200) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          setSuccess(!success);
          setFileList2(undefined);
          setIsSelected(false);
          setStudentDocuId(0);
        }
      });
    }

    return;
    
  }

 

  if(isSelected === true && FileList2 !== undefined && typeof(FileList2) === "object"){
    handleCardUpload();
    setFileList2(undefined);
    setIsSelected(false);
    setStudentDocuId(0);
  }

  

  const handleDate = e =>{
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    // const x = localeDate.split(",")[0];
    return localeDate;
  }

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Upload Documents</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToStudentProfile}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Student
              Profile
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className="">
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                Application
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Personal
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "4"} onClick={() => toggle("4")}>
                Educational
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "5"} onClick={() => toggle("5")}>
                Test Score
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "6"} onClick={() => toggle("6")}>
                Experience
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "7"} onClick={() => toggle("7")}>
                Reference
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "8"} onClick={() => toggle("8")}>
                Personal Statement
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "9"} onClick={() => toggle("9")}>
                Others
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activetab === "10"} onClick={() => toggle("10")}>
                Documents
              </NavLink>
            </NavItem>
          </Nav>

          <div className="row gy-3">
            <div className="col-md-8 ">
              {uploadedDocuData.map((docu, i) => (
                
                  <div key={i}  className="card mb-3 file-upload-border">
                    <div  className="container  py-3 flex-style ">
                      <div>
                        <h5 className="document-title">
                          {docu?.documentLevelName}
                        </h5>

                        <h5 className="document-type-style">
                          Document Type: {docu?.document?.name}{" "}
                        </h5>
                      </div>

                      <div className="row" onClick={()=>console.log(docu?.studentDocumentLevelId)}>
                        {docu?.studentDocumentFile === null ? (
                          <div className="col-4">

                              <div style={{cursor: "pointer"}} className="image-upload">
                                <label for={i}>
                                <i
                                  style={{ fontSize: "50px", cursor: "pointer" }}
                                  className="fas fa-arrow-alt-circle-up text-danger"
                                ></i>
                                </label>

                                <input 
                                  name={i} 
                                  id= {i}
                                  type="file"
                                  onChange={(e)=>changeHandler(e,docu)}
                                />
                              </div>
                              
                          
                            
                          </div>
                        ) : (
                          <div className="col-4">
                            <a
                              className="text-decoration-none"
                              href={
                                rootUrl + docu?.studentDocumentFile?.fileUrl
                              }
                              target="_blank"
                              download
                            >
                              <i
                                style={{ fontSize: "50px" }}
                                class="fas fa-arrow-alt-circle-down text-success"
                              ></i>
                            </a>
                          </div>
                        )}

                        <div className="col-4"></div>

                        <div className="col-4">
                          <Icon.XCircle
                            onClick={() => toggleDanger(docu)}
                            className=" ms-2 text-danger cross-icon-style"
                          />
                        </div>

                        <Modal
                          isOpen={deleteModal}
                          toggle={closeDeleteModal}
                          className="uapp-modal"
                        >
                          <ModalBody>
                            <p>
                              Are You Sure to Delete this{" "}
                              <b>{localStorage.getItem("delDocNam")}</b> ? Once
                              Deleted it can't be Undone!
                            </p>
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              color="danger"
                              // onClick={() =>
                              //   handleDeleteDocument(
                              //     localStorage.getItem("delDocId")
                              //   )
                              // }
                              onClick={handleDeleteDocument}
                            >
                              YES
                            </Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </div>
                    <div class="card-footer uapp-card-bg text-white d-flex justify-content-between">
                      {
                        docu?.studentDocumentFile != null ? 
                        <>
                        <div>1 file uploaded: <span className="ms-2  px-2">{docu?.studentDocumentFile?.fileName} <i onClick={()=>toggleDangerFile(docu)} title="delete file" style={{cursor: "pointer"}} className="fas fa-times text-warning "></i>
                        </span></div>
                         <div>
                        
                        {docu?.createdBy} {" "} at {handleDate(docu?.createdOn)}

                      </div>
                        </>
                      
                      :
                        <div>0 file uploaded</div>
                      }

                      {/* delete file modal */}
                      <Modal
                          isOpen={deleteModal2}
                          toggle={closeDeleteModalFile}
                          className="uapp-modal"
                        >
                          <ModalBody>
                            <p>
                              Are You Sure to Delete this{" "}
                              <b>{localStorage.getItem("delFileName")}</b> ? Once
                              Deleted it can't be Undone!
                            </p>
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              color="danger"
                              onClick={() =>
                                handleDeleteFile(
                                  localStorage.getItem("delFileId")
                                )
                              }
                            >
                              YES
                            </Button>
                            <Button onClick={closeDeleteModalFile}>NO</Button>
                          </ModalFooter>
                        </Modal>
                      
                    </div>                 
                  </div>
                
              ))}
            </div>

            <div className="col-md-4 file-upload-border rounded-3">
              <Form onSubmit={handleSubmit} className="mt-4 container">
                <input
                  type="hidden"
                  name="studentId"
                  id="studentId"
                  value={applicationStudentId}
                />

                <FormGroup row className="has-icon-left position-relative">
                  <p>
                    Document Title <span className="text-danger">*</span>{" "}
                  </p>

                  <Input
                    className="input-custom-style ms-3"
                    type="text"
                    value={docLevel}
                    name="documentLevelName"
                    id="documentLevelName"
                    placeholder="Write Document Title"
                    onChange={(e) => setDocLevel(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <p>
                    Document Type <span className="text-danger">*</span>{" "}
                  </p>

                  <Select
                    options={docuTypeDD}
                    value={{ label: docuTypeLabel, value: docuTypeValue }}
                    onChange={(opt) => selectDocumentType(opt.label, opt.value)}
                    name="documentId"
                    id="documentId"
                  />

                  {docutypeError && (
                    <span className="text-danger">
                      Document type must be selected.
                    </span>
                  )}
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  {/* <Col md="2">
                        <span>
                          Upload Document <span className="text-danger">*</span>{" "}
                        </span>
                      </Col> */}
                  <Col md="8">
                    <div className="row">
                      <span className="mb-2">Upload Document</span>

                      {/* {applicationObject?.document ? (
                            <div className="col-md-3">
                              <Image
                                width={104}
                                height={104}
                                src={
                                  rootUrl + applicationObject?.document?.thumbnailUrl
                                }
                              />
                            </div>
                          ) : null} */}

                      <div className="col-md-3">
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
                            <div
                              className="text-danger"
                              style={{ marginTop: 8 }}
                            >
                              <Icon.Upload />
                              <br />
                              <span>Upload Here</span>
                            </div>
                          ) : (
                            ""
                          )}
                        </Upload>
                        <AntdModal
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
                        </AntdModal>
                      </div>
                    </div>

                    {/* {uploadError && (
                      <span className="text-danger">
                        You must upload a document.
                      </span>
                    )} */}
                  </Col>
                </FormGroup>

                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex" }}
                >
                  {/* <Button.Ripple
             type="submit"
             className="mr-1 mt-3 badge-primary"
           >
             Upload
           </Button.Ripple> */}

                  <ButtonForFunction
                    type={"submit"}
                    className={"mr-1 mt-3 badge-primary"}
                    name={"Upload"}
                    permission={6}
                  />
                </FormGroup>
              </Form>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DocumentUpload;
