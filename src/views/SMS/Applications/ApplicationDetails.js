import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import * as Icon from "react-feather";
import { Upload, Modal as AntdModal } from "antd";
import "antd/dist/antd.css";
import get from "../../../helpers/get";
import Select from "react-select";
import { rootUrl } from "../../../constants/constants";
import remove from "../../../helpers/remove";
import { useToasts } from "react-toast-notifications";
import post from "../../../helpers/post";
import ButtonForFunction from "../Components/ButtonForFunction";
import SpanButton from "../Components/SpanButton";

const ApplicationDetails = () => {
  const [activetab, setActivetab] = useState("1");
  const [applicationInfo, setApplicationInfo] = useState({});
  const [studentProInfo, setStudentProInfo] = useState({});

  const [uploadedDocuData, setUploadedDocuData] = useState([]);
  const [success, setSuccess] = useState(false);

  const [docuType, setDocuType] = useState([]);
  const [docuTypeLabel, setDocuTypeLabel] = useState("Select Document Type");
  const [docuTypeValue, setDocuTypeValue] = useState(0);
  const [docutypeError, setDocuTypeError] = useState(false);

  //   for document upload
  const [FileList2, setFileList2] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [studentDocuId, setStudentDocuId] = useState(0);
  const [delDocData, setdelDocData] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModal2, setDeleteModal2] = useState(false);

  const [FileList1, setFileList1] = useState([]);
  const [docLevel, setDocLevel] = useState("");
  const [uploadError, setUploadError] = useState(false);
  const [previewVisible1, setPreviewVisible1] = useState(false);
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewTitle1, setPreviewTitle1] = useState("");

  const { addToast } = useToasts();
  const history = useHistory();
  const { id, stdId } = useParams();

  function getBase641(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

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

  const handleChange1 = ({ fileList }) => {
    setUploadError(false);
    setFileList1(fileList);
    console.log(fileList);
  };

  const handleCancel1 = () => {
    setPreviewVisible1(false);
  };

  useEffect(() => {
    get(`Application/Get/${id}`).then((res) => {
      console.log("applicationInfodata", res);
      setApplicationInfo(res);
    });

    // document upload
    get(`StudentUploadDocument/Index/${stdId}`).then((res) => {
      console.log("studentDocu data", res);
      setUploadedDocuData(res);
    });

    get("DocumentDD/Index").then((res) => {
      setDocuType(res);
    });

    get(`StudentProfile/StudentApplication/${stdId}`).then((res) => {
      console.log("stdpro", res);
      setStudentProInfo(res);
    });
  }, [id, stdId, success]);

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
    // if (tab == "1") {
    //   history.push("/addUniversityCampus");
    // }
    if (tab == "2") {
      setActivetab(tab);
      //   history.push("/addUniversityFinancial");
    }
    if (tab == "3") {
      setActivetab(tab);
      //   history.push("/addUniversityFeatures");
    }
  };

  const handleDate = (e) => {
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    const x = localeDate.split(",")[0];
    return x;
  };

  const handleDate2 = (e) => {
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    // const x = localeDate.split(",")[0];
    return localeDate;
  };

  const changeHandler = (e, doc) => {
    setFileList2(e.target.files[0]);
    setIsSelected(true);
    setStudentDocuId(doc?.studentDocumentLevelId);
  };

  const toggleDanger = (docu) => {
    console.log("delete", docu);
    setdelDocData(docu);
    // localStorage.setItem("delDocNam", docu?.documentLevelName);
    // localStorage.setItem("delDocId", docu?.studentDocumentLevelId);
    setDeleteModal(true);
  };

  // on Close Delete Modal
  const closeDeleteModal = () => {
    setDeleteModal(false);
    localStorage.removeItem("delDocNam");
    localStorage.removeItem("delDocId");
  };

  const handleDeleteDocument = () => {
    console.log("delData", delDocData?.studentDocumentLevelId);
    const returnValue = remove(
      `StudentUploadDocument/LevelDelete/${delDocData?.studentDocumentLevelId}`
    ).then((action) => {
      setDeleteModal(false);
      setSuccess(!success);
      addToast(action, {
        appearance: "error",
        autoDismiss: true,
      });
      localStorage.removeItem("delDocNam");
      localStorage.removeItem("delDocId");
    });
  };

  const toggleDangerFile = (docFile) => {
    console.log("delete file", docFile, docFile?.studentDocumentFile?.fileName);
    localStorage.setItem("delFileName", docFile?.studentDocumentFile?.fileName);
    localStorage.setItem("delFileId", docFile?.studentDocumentLevelId);
    setDeleteModal2(true);
  };

  // on Close Delete Modal
  const closeDeleteModalFile = () => {
    setDeleteModal2(false);
    localStorage.removeItem("delFileName");
    localStorage.removeItem("delFileId");
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

  const handleCardUpload = () => {
    const subData = new FormData();

    subData.append("studentId", stdId);
    subData.append("studentDocument", FileList2);
    subData.append("studentDocumentLevelId", parseInt(studentDocuId));

    // for (var i of subData) {
    //   console.log(i);
    // }

    if (studentDocuId !== 0) {
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
    } else {
      return;
    }
  };

  if (
    isSelected === true &&
    FileList2 !== undefined &&
    typeof FileList2 === "object"
  ) {
    handleCardUpload();
    setFileList2(undefined);
    setIsSelected(false);
    setStudentDocuId(0);
  }

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

  const handleRedirectToAppliPage = () => {
    history.push("/applications");
  };

  const handleUpdateTestScores = (data) => {
    console.log("Test Score Update", data);

    localStorage.setItem("applictionStudentId", data?.id);
    localStorage.setItem("applictionStudentTypeId", data?.studentTypeId);
    localStorage.setItem("method", "put");

    history.push("/addTestScore");
  };

  const handleEdit = (data) => {
    console.log(data);
    localStorage.setItem("applictionStudentId", data?.id);
    localStorage.setItem("applictionStudentTypeId", data?.studentTypeId);
    localStorage.setItem("method", "put");

    history.push("/addStudentApplicationInformation");
  };

  return (
    <div>
      <Row>
        <Col md="7">
          <Card>
            <CardBody>
              <Nav tabs className="row row-cols-md-3 row-cols-sm-1 text-center">
                <NavItem>
                  <NavLink
                    active={activetab === "1"}
                    onClick={() => toggle("1")}
                  >
                    Application Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activetab === "2"}
                    onClick={() => toggle("2")}
                  >
                    Documents
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activetab === "3"}
                    onClick={() => toggle("3")}
                  >
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>

              {activetab == 1 ? (
                <TabContent activeTab={activetab}>
                  <TabPane tabId="1">
                    <div className="my-4">
                      <h2 className="text-secondary">
                        {applicationInfo?.student?.nameTittle?.name}{" "}
                        {applicationInfo?.student?.firstName} <br />
                        {applicationInfo?.student?.lastName}
                      </h2>
                    </div>

                    <div className="hedding-titel d-flex justify-content-between">
                      <div>
                        <h5>
                          {" "}
                          <b>Application Status</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>
                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Status:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.applicationStatus?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Offer Status:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.offerStatus?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Enrolment Status:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.enrollmentStatus?.name}
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Application Information</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Application Type:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.student?.studentType?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Uapp Application date:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.applicationTime ? (
                              <>
                                {handleDate(applicationInfo?.applicationTime)}
                              </>
                            ) : null}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>University Student Id:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.universityStudentId}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>University Application date:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.universityApplicationDate ? (
                              <>
                                {handleDate(
                                  applicationInfo?.universityApplicationDate
                                )}
                              </>
                            ) : null}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>University Name:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.university?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Program-level:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.subject?.programLevel?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Course Name:</b>
                          </td>

                          <td width="60%">{applicationInfo?.subject?.name}</td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Delivery Pattern:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.deliveryPattern?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Intake:</b>
                          </td>

                          <td width="60%">{applicationInfo?.intake?.name}</td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Additional Message:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.additionalMessage}
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Interview</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Status:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.interviewStatus?.name}
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>ELPT</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Status:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.elpt?.elptStatus?.name}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Date:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.elpt?.elptDate ? (
                              <>{handleDate(applicationInfo?.elpt?.elptDate)}</>
                            ) : null}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Time:</b>
                          </td>

                          <td width="60%">
                            <>{applicationInfo?.elpt?.elptTime}</>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>ETA:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.elpt?.eta ? (
                              <>{handleDate(applicationInfo?.elpt?.eta)}</>
                            ) : null}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>ETA Deadline:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.elpt?.etaDeadline ? (
                              <>
                                {handleDate(applicationInfo?.elpt?.etaDeadline)}
                              </>
                            ) : null}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Reading:</b>
                          </td>

                          <td width="60%">{applicationInfo?.elpt?.reading}</td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Writting:</b>
                          </td>

                          <td width="60%">{applicationInfo?.elpt?.writting}</td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Listening:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.elpt?.listening}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Speaking:</b>
                          </td>

                          <td width="60%">{applicationInfo?.elpt?.speaking}</td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Overall:</b>
                          </td>

                          <td width="60%">{applicationInfo?.elpt?.overall}</td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Finance</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Status:</b>
                          </td>

                          <td width="60%">
                            {applicationInfo?.studentFinanceStatus?.name}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </TabPane>
                </TabContent>
              ) : activetab == 2 ? (
                <TabContent activeTab={activetab}>
                  <TabPane tabId="2">
                    <div className="">
                      {uploadedDocuData.map((docu, i) => (
                        <div key={i} className="card mb-3 file-upload-border">
                          <div className="container  py-3 flex-style ">
                            <div>
                              <h5 className="document-title">
                                {docu?.documentLevelName}
                              </h5>

                              <h5 className="document-type-style">
                                Document Type: {docu?.document?.name}{" "}
                              </h5>
                            </div>

                            <div
                              className="row"
                              onClick={() =>
                                console.log(docu?.studentDocumentLevelId)
                              }
                            >
                              {docu?.studentDocumentFile === null ? (
                                <div className="col-4">
                                  <div
                                    style={{ cursor: "pointer" }}
                                    className="image-upload"
                                  >
                                    <label for={i}>
                                      <i
                                        style={{
                                          fontSize: "50px",
                                          cursor: "pointer",
                                        }}
                                        className="fas fa-arrow-alt-circle-up text-danger"
                                      ></i>
                                    </label>

                                    <input
                                      name={i}
                                      id={i}
                                      type="file"
                                      onChange={(e) => changeHandler(e, docu)}
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div className="col-4">
                                  <a
                                    className="text-decoration-none"
                                    href={
                                      rootUrl +
                                      docu?.studentDocumentFile?.fileUrl
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
                                    <b>{localStorage.getItem("delDocNam")}</b> ?
                                    Once Deleted it can't be Undone!
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
                            {docu?.studentDocumentFile != null ? (
                              <>
                                <div>
                                  1 file uploaded:{" "}
                                  <span className="ms-2  px-2">
                                    {docu?.studentDocumentFile?.fileName}{" "}
                                    <i
                                      onClick={() => toggleDangerFile(docu)}
                                      title="delete file"
                                      style={{ cursor: "pointer" }}
                                      className="fas fa-times text-warning "
                                    ></i>
                                  </span>
                                </div>
                                <div>
                                  {docu?.createdBy} at{" "}
                                  {handleDate2(docu?.createdOn)}
                                </div>
                              </>
                            ) : (
                              <div>0 file uploaded</div>
                            )}

                            {/* delete file modal */}
                            <Modal
                              isOpen={deleteModal2}
                              toggle={closeDeleteModalFile}
                              className="uapp-modal"
                            >
                              <ModalBody>
                                <p>
                                  Are You Sure to Delete this{" "}
                                  <b>{localStorage.getItem("delFileName")}</b> ?
                                  Once Deleted it can't be Undone!
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
                                <Button onClick={closeDeleteModalFile}>
                                  NO
                                </Button>
                              </ModalFooter>
                            </Modal>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Form onSubmit={handleSubmit} className="mt-4 container">
                      <input
                        type="hidden"
                        name="studentId"
                        id="studentId"
                        value={stdId}
                      />

                      <FormGroup row>
                        <Col md="12">
                          <p>
                            Document Title{" "}
                            <span className="text-danger">*</span>{" "}
                          </p>

                          <Input
                            type="text"
                            value={docLevel}
                            name="documentLevelName"
                            id="documentLevelName"
                            placeholder="Write Document Title"
                            onChange={(e) => setDocLevel(e.target.value)}
                            required
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup
                        row
                        className="has-icon-left position-relative"
                      >
                        <Col md="12">
                          <p>
                            Document Type <span className="text-danger">*</span>{" "}
                          </p>

                          <Select
                            options={docuTypeDD}
                            value={{
                              label: docuTypeLabel,
                              value: docuTypeValue,
                            }}
                            onChange={(opt) =>
                              selectDocumentType(opt.label, opt.value)
                            }
                            name="documentId"
                            id="documentId"
                          />
                        </Col>

                        {docutypeError && (
                          <span className="text-danger">
                            Document type must be selected.
                          </span>
                        )}
                      </FormGroup>

                      <FormGroup
                        row
                        className="has-icon-left position-relative"
                      >
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
                  </TabPane>
                </TabContent>
              ) : (
                <TabContent activeTab={activetab}>
                  <TabPane tabId="3">
                    <div className="hedding-titel d-flex justify-content-between">
                      <div className="my-4">
                        <h2 className="text-secondary">
                          {studentProInfo?.nameTittle}{" "}
                          {studentProInfo?.firstName} <br />
                          {studentProInfo?.lastName}
                        </h2>
                      </div>
                      <div className="text-right edit-style  p-3">
                        {/* <span>
                          {" "}
                          <i className="fas fa-pencil-alt pencil-style"></i>{" "}
                        </span> */}
                        <SpanButton
                          icon={
                            <i className="fas fa-pencil-alt pencil-style"></i>
                          }
                          func={() => handleEdit(studentProInfo)}
                          permission={6}
                        />
                      </div>
                    </div>
                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Application Information</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>UAPP ID:</b>
                          </td>

                          <td width="60%">{studentProInfo?.studentViewId}</td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Application Type:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.applicationInfos?.studentTypeName}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Move in UK:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.applicationInfos?.dateOfMoveToUk}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>
                              Stayed in Outside UK/EU Territory in Last 3 Years:
                            </b>
                          </td>

                          <td width="60%">
                            {
                              studentProInfo?.applicationInfos
                                ?.isStayedOutsideEU_UkinLast3Years
                            }
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Pre-Settlement Status:</b>
                          </td>

                          <td width="60%">
                            {
                              studentProInfo?.applicationInfos
                                ?.isHavePre_Settlementstatus
                            }
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Share Code:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.applicationInfos?.code}
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Personal Information</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Name:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.firstName}{" "}
                            {studentProInfo?.lastName}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Date of Birth:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.dateOfBirth ? (
                              <>{handleDate(studentProInfo?.dateOfBirth)}</>
                            ) : null}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Nationality:</b>
                          </td>

                          <td width="60%">{studentProInfo?.nationality}</td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Country of Birth:</b>
                          </td>

                          <td width="60%">{studentProInfo?.birthCountry}</td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Passport Number:</b>
                          </td>

                          <td width="60%">{studentProInfo?.passportNumber}</td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Gender:</b>
                          </td>

                          <td width="60%">{studentProInfo?.gender}</td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Marital Status:</b>
                          </td>

                          <td width="60%">{studentProInfo?.maritalStatus}</td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Correspondence Address</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>House No. :</b>
                          </td>

                          <td width="60%">
                            {/* {studentProInfo?.firstName}{" "}
                            {studentProInfo?.lastName} */}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Street Address:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.studentContactInfos?.addressLine}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>City:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.studentContactInfos?.city}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Post / Zip Code:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.studentContactInfos?.zipCode}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Country:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.studentContactInfos?.country}
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Student Contact Information</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Mobile Number :</b>
                          </td>

                          <td width="60%">{studentProInfo?.phoneNumber}</td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Email Address:</b>
                          </td>

                          <td width="60%">{studentProInfo?.email}</td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Education/Qualification</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    {studentProInfo?.educationInfos === null ? (
                      <Table className="table-bordered mt-4">
                        <tbody>
                          <tr>
                            <td width="40%">
                              <b>Have you ever studied?</b>
                            </td>

                            <td width="60%">No</td>
                          </tr>
                        </tbody>
                      </Table>
                    ) : (
                      <Table className="table-bordered mt-4">
                        <tbody>
                          <tr>
                            <td width="40%">
                              <b>Qualification Level:</b>
                            </td>

                            <td width="60%">
                              {
                                studentProInfo?.educationInfos
                                  ?.educationLevelName
                              }
                            </td>
                          </tr>
                          <tr>
                            <td width="40%">
                              <b>Qualification Subject:</b>
                            </td>

                            <td width="60%">
                              {
                                studentProInfo?.educationInfos
                                  ?.qualificationSubject
                              }
                            </td>
                          </tr>
                          <tr>
                            <td width="40%">
                              <b>Final Grade Awarded:</b>
                            </td>

                            <td width="60%">
                              {studentProInfo?.educationInfos?.finalGrade}
                            </td>
                          </tr>
                          <tr>
                            <td width="40%">
                              <b>From Date:</b>
                            </td>

                            <td width="60%">
                              {handleDate(
                                studentProInfo?.educationInfos
                                  ?.attendedInstitutionFrom
                              )}
                            </td>
                          </tr>
                          {studentProInfo?.educationInfos?.stillStudying ? (
                            <tr>
                              <td width="40%">
                                <b>Still Studying:</b>
                              </td>

                              <td width="60%">Yes</td>
                            </tr>
                          ) : (
                            <tr>
                              <td width="40%">
                                <b>To Date:</b>
                              </td>

                              <td width="60%">
                                {handleDate(
                                  studentProInfo?.educationInfos
                                    ?.attendedInstitutionTo
                                )}
                              </td>
                            </tr>
                          )}
                          <tr>
                            <td width="40%">
                              <b>Name of Institution:</b>
                            </td>

                            <td width="60%">
                              {
                                studentProInfo?.educationInfos
                                  ?.nameOfInstitution
                              }
                            </td>
                          </tr>
                          <tr>
                            <td width="40%">
                              <b>Country of Completed Qualification:</b>
                            </td>

                            <td width="60%">
                              {studentProInfo?.educationInfos?.country}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    )}

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Test Scores</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                    </div>
                    <ButtonForFunction
                      className={"p-2"}
                      func={() => handleUpdateTestScores(studentProInfo)}
                      name={"View Test Scores"}
                      color={"primary"}
                      permission={6}
                    />

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Employment History</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Job Title:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.experienceinfo?.jobTitle}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Company Name:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.experienceinfo?.companyName}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Employeement Details:</b>
                          </td>

                          <td width="60%">
                            {
                              studentProInfo?.experienceinfo
                                ?.employeementDetails
                            }
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>From Date:</b>
                          </td>

                          <td width="60%">
                            {handleDate(
                              studentProInfo?.experienceinfo?.startDate
                            )}
                          </td>
                        </tr>
                        {studentProInfo?.experienceinfo?.isStillWorking ? (
                          <tr>
                            <td width="40%">
                              <b>Currently Working:</b>
                            </td>

                            <td width="60%">Yes</td>
                          </tr>
                        ) : (
                          <tr>
                            <td width="40%">
                              <b>To Date:</b>
                            </td>

                            <td width="60%">
                              {handleDate(
                                studentProInfo?.experienceinfo?.endDate
                              )}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Reference Details</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Reference Name:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.referenceName}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Relation:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.referenceTypeName}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Reference Institute/Company:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.institute_Company}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Phone Number:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.phoneNumber}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Email Address:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.emailAddress}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Country:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.country}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Street Address:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.addressLine}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>City:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.city}
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>State:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.referenceInfo?.state}
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Personal Statement</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>
                    {studentProInfo?.profilePersonalStatement ? (
                      <div
                        className="container py-3"
                        style={{ border: "1px solid rgb(222, 226, 230)" }}
                      >
                        {studentProInfo?.profilePersonalStatement?.statement}
                      </div>
                    ) : (
                      <div
                        className="container"
                        style={{ border: "1px solid rgb(222, 226, 230)" }}
                      >
                        Statement is not available.
                      </div>
                    )}

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Other Information</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>
                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Disability:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.profileOtherInfo
                              ?.isHaveDisability ? (
                              <>Yes</>
                            ) : (
                              <>No</>
                            )}
                          </td>
                        </tr>
                        {studentProInfo?.profileOtherInfo?.isHaveDisability ? (
                          <tr>
                            <td width="40%">
                              <b>Disability Description:</b>
                            </td>

                            <td width="60%">
                              {
                                studentProInfo?.profileOtherInfo
                                  ?.disabilityDescription
                              }
                            </td>
                          </tr>
                        ) : null}

                        <tr>
                          <td width="40%">
                            <b>Criminal Convictions:</b>
                          </td>

                          <td width="60%">
                            {studentProInfo?.profileOtherInfo
                              ?.isHaveCriminalConvictions ? (
                              <>Yes</>
                            ) : (
                              <>No</>
                            )}
                          </td>
                        </tr>
                        {studentProInfo?.profileOtherInfo
                          ?.isHaveCriminalConvictions ? (
                          <tr>
                            <td width="40%">
                              <b>Criminal Convictions Description:</b>
                            </td>

                            <td width="60%">
                              {
                                studentProInfo?.profileOtherInfo
                                  ?.criminalConvictionsDescription
                              }
                            </td>
                          </tr>
                        ) : null}
                      </tbody>
                    </Table>

                    <div className="hedding-titel d-flex justify-content-between my-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Consent</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>Status:</b>
                          </td>

                          <td width="60%">{studentProInfo?.email}</td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Date and Time:</b>
                          </td>

                          <td width="60%">{studentProInfo?.email}</td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>IP:</b>
                          </td>

                          <td width="60%">{studentProInfo?.email}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table className="table-bordered mt-4">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <b>PDF:</b>
                          </td>

                          <td width="60%">{studentProInfo?.email}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </TabPane>
                </TabContent>
              )}
            </CardBody>
          </Card>
        </Col>

        <Col md="5">
          <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between mb-4">
                <div>
                  <h5>
                    {" "}
                    <b>Admission Manager</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <b>Name:</b> {applicationInfo?.admissionManager?.firstName}{" "}
                    {applicationInfo?.admissionManager?.lastName}
                  </span>{" "}
                  <br />
                  <span>
                    <b>Email:</b> {applicationInfo?.admissionManager?.email}
                  </span>
                  <br />
                  <span>
                    <b>Phone:</b>{" "}
                    {applicationInfo?.admissionManager?.phoneNumber}
                  </span>
                </div>
                <div>
                  <div className="uapp-circle-image margin-top-minus">
                    {/* {universityInfo?.provider?.providerLogoMedia?.fileUrl ==
                  null ? (
                    <img src={profileImage} alt="provider_img" />
                  ) : ( */}
                    <img
                      src={
                        rootUrl +
                        applicationInfo?.admissionManager?.providerLogoMedia
                          ?.fileUrl
                      }
                      alt="admission_manager_img"
                    />
                    {/* )} */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between mb-4">
                <div>
                  <h5>
                    {" "}
                    <b>Consultant</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <b>Name:</b> {applicationInfo?.consultant?.firstName}{" "}
                    {applicationInfo?.consultant?.lastName}
                  </span>{" "}
                  <br />
                  <span>
                    <b>Email:</b> {applicationInfo?.consultant?.email}
                  </span>
                  <br />
                  <span>
                    <b>Phone:</b> {applicationInfo?.consultant?.phoneNumber}
                  </span>
                </div>
                <div>
                  <div className="uapp-circle-image margin-top-minus">
                    {/* {universityInfo?.provider?.providerLogoMedia?.fileUrl ==
                  null ? (
                    <img src={profileImage} alt="provider_img" />
                  ) : ( */}
                    <img
                      src={
                        rootUrl +
                        applicationInfo?.consultant?.consultantProfileImageMedia
                          ?.fileUrl
                      }
                      alt="consultant_img"
                    />
                    {/* )} */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between mb-4">
                <div>
                  <h5>
                    {" "}
                    <b>Message History</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>
              <div className="box arrow-left">Mistakenly apply</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between mb-4">
                <div>
                  <h5>
                    {" "}
                    <b>Note</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>
            </CardBody>
          </Card>

          <div
            className="has-icon-left position-relative"
            style={{ display: "flex", justifyContent: "end" }}
          >
            {/* <Button.Ripple
                    type="submit"
                    className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple> */}

            <ButtonForFunction
              func={handleRedirectToAppliPage}
              className={"badge-primary"}
              name={<b>Back to Application Page</b>}
              permission={6}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ApplicationDetails;
