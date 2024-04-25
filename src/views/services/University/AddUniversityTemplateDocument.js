import Axios from "axios";
import React, { useState, createRef, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import MediaPictures from "./UniversityMedia";
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
  ButtonGroup,
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import get from "../../../helpers/get";

import * as Icon from "react-feather";
import { Upload, Modal as AntdModal } from "antd";

import { Image } from "antd";

import CustomButtonRipple from "../Components/CustomButtonRipple";
import post from "../../../helpers/post";
import { useToasts } from "react-toast-notifications";
import ButtonForFunction from "../Components/ButtonForFunction";
import LinkSpanButton from "../Components/LinkSpanButton";
import { rootUrl } from "../../../constants/constants";
import remove from "../../../helpers/remove";
import put from "../../../helpers/put";
import { permissionList } from "../../../constants/AuthorizationConstant";
import { Link } from "react-router-dom";
import ButtonLoader from "../Components/ButtonLoader";

const AddUniversityTemplateDocument = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const { univerId } = useParams();
  const [activetab, setActivetab] = useState("8");

  const [buttonStatus, setButtonStatus] = useState(false);
  const [progress, setProgress] = useState(false);
  const [progress1, setProgress1] = useState(false);

  const permissions = JSON.parse(localStorage.getItem("permissions"));

  const [document, setDocument] = useState([]);
  const [documentLabel, setDocumentLabel] = useState(
    "Select Requirement Status"
  );
  const [documentValue, setDocumentValue] = useState(0);
  const [applicationError, setApplicationError] = useState(false);
  const [templateList, setTemplateList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [applicationObject, setApplicationObject] = useState({});

  const [applicationTypeLabel, setApplicationTypeLabel] = useState(
    "Select Application Type"
  );
  const [applicationTypeValue, setApplicationTypeValue] = useState(0);
  const [applicationTypeId, setApplicationTypeId] = useState([]);

  // image upload starts here
  const [previewVisible1, setPreviewVisible1] = useState(false);
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewTitle1, setPreviewTitle1] = useState("");
  const [FileList1, setFileList1] = useState([]);
  const [uploadError, setUploadError] = useState(false);

  const [templateName, setTemplateName] = useState("");
  const [templateId, setTemplateId] = useState(0);

  const handleChange1 = ({ fileList }) => {
    setUploadError(false);
    setFileList1(fileList);
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

  // useEffect(() => {

  //   get("ApplicationTypeDD/Index").then((res) => {
  //     setApplicationTypeId(res);
  //   });

  //   if(univerId != undefined){
  //     get(
  //       `UniversityTemplateDocument/GetByUniversity/${univerId}`
  //     ).then((res) => {

  //       setTemplateList(res);
  //       if (res.length > 0) {
  //         setShowForm(true);
  //       } else {
  //         setShowForm(false);
  //         setSelectedId(0);
  //       }
  //     });
  //   }

  // }, [success, univerId]);

  const applicationOptions = applicationTypeId?.map((app) => ({
    label: app?.name,
    value: app?.id,
  }));

  const selectApplicationType = (label, value) => {
    setApplicationError(false);
    setApplicationTypeLabel(label);
    setApplicationTypeValue(value);
  };

  // redirect to
  const backToUniList = () => {
    history.push("/universityList");
  };

  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push(`/addUniversity/${univerId}`);
    }
    if (tab == "2") {
      history.push(`/addUniversityCampus/${univerId}`);
    }
    if (tab == "3") {
      history.push(`/addUniversityFinancial/${univerId}`);
    }
    if (tab == "4") {
      history.push(`/addUniversityFeatures/${univerId}`);
    }
    if (tab == "5") {
      history.push(`/addUniversityGallery/${univerId}`);
    }
    if (tab == "6") {
      history.push(`/addUniversityTestScore/${univerId}`);
    }
    if (tab == "7") {
      history.push(`/addUniversityApplicationDocument/${univerId}`);
    }
    if (tab == "8") {
      history.push(`/addUniversityTemplateDocument/${univerId}`);
    }
    if (tab == "9") {
      history.push(`/addUniversityCommission/${univerId}`);
    }
  };

  const toggleDanger = (p) => {
    setTemplateId(p?.id);
    setTemplateName(p?.name);
    setDeleteModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subData = new FormData(e.target);

    subData.append(
      "template",
      FileList1.length == 0 ? null : FileList1[0]?.originFileObj
    );

    // for(var i of subData){
    //
    // }

    if (applicationTypeValue == 0) {
      setApplicationError(true);
    } else if (FileList1.length < 1 && selectedId == 0) {
      setUploadError(true);
    } else {
      if (selectedId === 0) {
        setProgress(true);
        setButtonStatus(true);
        post("UniversityTemplateDocument/Create", subData).then((res) => {
          setButtonStatus(false);
          setProgress(false);
          if (res?.status == 200 && res?.data?.isSuccess == true) {
            addToast(res?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
            // history.push('/addUniversityRequiredDocument');
            setSuccess(!success);
            setShowForm(!showForm);
            setFileList1([]);
            setApplicationTypeLabel("Select Application Type");
            setApplicationTypeValue(0);
          } else {
            addToast(res?.data?.message, {
              appearance: "error",
              autoDismiss: true,
            });
          }
        });
      } else {
        setButtonStatus(true);
        setProgress(true);
        put(`UniversityTemplateDocument/Update`, subData).then((res) => {
          // setuniversityId(res.data.result.universityId)
          setButtonStatus(false);
          setProgress(false);
          if (res.status === 200 && res.data.isSuccess === true) {
            // setSubmitData(false);
            addToast(res?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
            setShowForm(true);
            setSelectedId(0);
            setFileList1([]);
            setApplicationObject({});
            setSuccess(!success);
          }
        });
      }
    }
  };

  const onShow = () => {
    setShowForm(false);
    setApplicationTypeLabel("Select Application Type");
    setApplicationTypeValue(0);

    setApplicationObject({});
    setFileList1([]);
    setSelectedId(0);
  };

  // redirect to Next Page
  // const onNextPage = () => {
  //   history.push({
  //     pathname: "/addUniversityRequiredDocument",
  //     id: uniID,
  //   });
  // };

  const cancel = () => {
    setShowForm(true);
    setSelectedId(0);
    // setuniversityCampusObject({});
    setApplicationTypeLabel("Select Application Type");
    setApplicationTypeValue(0);
  };

  const handleDeletePermission = (id) => {
    setButtonStatus(true);
    setProgress1(true);
    const returnValue = remove(`UniversityTemplateDocument/Delete/${id}`).then(
      (action) => {
        if (action?.status == 200 && action?.data?.isSuccess == true) {
          addToast(action, {
            appearance: "error",
            autoDismiss: true,
          });
          // history.push('/addUniversityRequiredDocument');
          setButtonStatus(false);
          setProgress1(false);
          setDeleteModal(false);
          setSuccess(!success);
          setTemplateId(0);
          setTemplateName("");
        } else {
          addToast(action, {
            appearance: "error",
            autoDismiss: true,
          });
          setProgress1(false);
          setButtonStatus(false);
          setDeleteModal(false);
          setTemplateId(0);
          setSuccess(!success);
          setTemplateName("");
        }
        // setButtonStatus(false);
        // setProgress1(false);
        // setDeleteModal(false);
        // setSuccess(!success);
        // addToast(action, {
        //   appearance: "error",
        //   autoDismiss: true,
        // });
        // setTemplateId(0);
        // setTemplateName('');
      }
    );
  };

  const handleUpdate = (id) => {
    // setCampusId(id);
    setShowForm(false);

    get(`UniversityTemplateDocument/Get/${id}`).then((action) => {
      setApplicationObject(action);
      setApplicationTypeLabel(
        action?.applicationTypeId === 1
          ? "Home"
          : action?.applicationTypeId === 2
          ? "EU/UK"
          : "International"
      );
      setApplicationTypeValue(action?.applicationTypeId);
      // setFileList1(action?.templateFile?.thumbnailUrl);
      setSelectedId(action?.id);
    });
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">University Template Document</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToUniList} className="text-white">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to University
              List
            </span>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                Basic Information
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled
                              active={activetab === '2'}
                              onClick={() =>toggle('2')}
                              > */}
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Campuses
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Financial
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "4"} onClick={() => toggle("4")}>
                Features
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "5"} onClick={() => toggle("5")}>
                Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "6"} onClick={() => toggle("6")}>
                Test Score
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "7"} onClick={() => toggle("7")}>
                Application Document
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "8"} onClick={() => toggle("8")}>
                Template Document
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activetab === "9"} onClick={() => toggle("9")}>
                Commission
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activetab}>
            {templateList.length > 0 ? (
              <div className="container test-score-div-1-style mt-4 mb-4">
                <span className="test-score-span-1-style">
                  University template document informations are showing here.
                </span>
              </div>
            ) : null}

            <TabPane tabId="8">
              {showForm === false ? (
                <>
                  <Form onSubmit={handleSubmit} className="mt-5">
                    <div className="hedding-titel d-flex justify-content-between mb-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Template Document</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                        <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                        </div> */}
                    </div>

                    <FormGroup row className="has-icon-left position-relative">
                      <Input
                        type="hidden"
                        id="universityId"
                        name="universityId"
                        value={univerId}
                      />
                      {selectedId !== 0 ? (
                        <Input
                          type="hidden"
                          id="Id"
                          name="Id"
                          value={selectedId}
                        />
                      ) : null}
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="2">
                        <span>
                          {" "}
                          Name <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          defaultValue={applicationObject?.name}
                          placeholder="Write Name"
                          required
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="2">
                        <span>
                          {" "}
                          Description <span className="text-danger">
                            *
                          </span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="textarea"
                          rows="4"
                          name="description"
                          id="description"
                          defaultValue={applicationObject?.description}
                          placeholder="Write Description"
                          required
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="2">
                        <span>
                          Application Type{" "}
                          <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Select
                          options={applicationOptions}
                          value={{
                            label: applicationTypeLabel,
                            value: applicationTypeValue,
                          }}
                          onChange={(opt) =>
                            selectApplicationType(opt.label, opt.value)
                          }
                          name="applicationTypeId"
                          id="applicationTypeId"
                        />

                        {applicationError && (
                          <span className="text-danger">
                            Application type is required
                          </span>
                        )}

                        {/* <div className="form-control-position">
                        <User size={15} />
                        </div> */}
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="2">
                        <span>
                          Upload Document <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <div className="row">
                          {applicationObject?.templateFile ? (
                            <div className="col-md-3">
                              <Image
                                width={104}
                                height={104}
                                src={
                                  rootUrl +
                                  applicationObject?.templateFile?.thumbnailUrl
                                }
                              />
                            </div>
                          ) : null}

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

                        {uploadError && (
                          <span className="text-danger">
                            Document is required
                          </span>
                        )}

                        {/* {
                            <MediaPictures/>
                        } */}
                      </Col>
                    </FormGroup>

                    <FormGroup className="has-icon-left position-relative">
                      {selectedId !== 0 ? (
                        <>
                          <FormGroup
                            row
                            className="has-icon-left position-relative"
                            style={{
                              display: "flex",
                              justifyContent: "end",
                            }}
                          >
                            <Col md="5">
                              {permissions?.includes(
                                permissionList?.Add_New_University_Template_Document ||
                                  permissionList?.Update_University_Template_Document_info
                              ) ? (
                                <ButtonForFunction
                                  color={"primary"}
                                  type={"submit"}
                                  className={"ml-lg-3 ml-sm-1 mt-3"}
                                  name={progress ? <ButtonLoader /> : "Save"}
                                  disable={buttonStatus}
                                />
                              ) : null}

                              <div>
                                <ButtonForFunction
                                  func={cancel}
                                  color={"danger uapp-form-button float-right"}
                                  name={"Cancel"}
                                  permission={6}
                                />
                              </div>
                            </Col>
                          </FormGroup>
                        </>
                      ) : (
                        <>
                          <FormGroup
                            row
                            className="has-icon-left position-relative"
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <Col md="5">
                              {permissions?.includes(
                                permissionList?.Add_New_University_Template_Document ||
                                  permissionList?.Update_University_Template_Document_info
                              ) ? (
                                <ButtonForFunction
                                  color={"primary"}
                                  type={"submit"}
                                  className={"ml-lg-3 ml-sm-1 mt-3"}
                                  name={progress ? <ButtonLoader /> : "Save"}
                                  disable={buttonStatus}
                                  permission={6}
                                />
                              ) : null}

                              <div>
                                {selectedId !== 0 || templateList.length > 0 ? (
                                  <ButtonForFunction
                                    func={cancel}
                                    color={
                                      "danger uapp-form-button float-right"
                                    }
                                    name={"Cancel"}
                                    permission={6}
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                            </Col>
                          </FormGroup>
                        </>
                      )}
                    </FormGroup>
                  </Form>
                </>
              ) : (
                <FormGroup
                  className="has-icon-left position-relative"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <ButtonForFunction
                    func={onShow}
                    color={"primary uapp-form-button"}
                    name={"Add Another"}
                    permission={6}
                  />
                </FormGroup>
              )}

              {templateList.length > 0 ? (
                <div className="table-responsive mt-4 mb-3">
                  <Table className="table-sm table-bordered">
                    <thead className="thead-uapp-bg">
                      <tr style={{ textAlign: "center" }}>
                        <th>SL/NO</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>File</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {templateList?.map((temp, i) => (
                        <tr key={temp?.id} style={{ textAlign: "center" }}>
                          <th scope="row">{i + 1}</th>
                          <td>{temp?.name}</td>
                          <td>{temp?.description}</td>
                          <td>
                            {temp?.applicationTypeId === 1
                              ? "Home"
                              : temp?.applicationTypeId === 2
                              ? "EU/UK"
                              : "International"}
                          </td>
                          <td>
                            <a
                              href={rootUrl + temp?.templateFile?.fileUrl}
                              target="_blank"
                              download
                            >
                              Download
                            </a>
                          </td>

                          <td style={{ width: "8%" }} className="text-center">
                            <ButtonGroup variant="text">
                              <ButtonForFunction
                                func={() => handleUpdate(temp?.id)}
                                className={"mx-1 btn-sm"}
                                color={"warning"}
                                icon={<i className="fas fa-edit"></i>}
                                permission={6}
                              />

                              {permissions?.includes(
                                permissionList?.Delete_University_Template_Document
                              ) ? (
                                <ButtonForFunction
                                  func={() => toggleDanger(temp)}
                                  className={"mx-1 btn-sm"}
                                  color={"danger"}
                                  icon={<i className="fas fa-trash-alt"></i>}
                                  permission={6}
                                />
                              ) : null}
                            </ButtonGroup>

                            <Modal
                              isOpen={deleteModal}
                              toggle={() => {
                                setDeleteModal(false);
                                setTemplateId(0);
                                setTemplateName("");
                              }}
                              className="uapp-modal"
                            >
                              <ModalBody>
                                <p>
                                  Are You Sure to Delete this{" "}
                                  <b>{templateName}</b> ? Once Deleted it can't
                                  be Undone!
                                </p>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  color="danger"
                                  onClick={() =>
                                    handleDeletePermission(templateId)
                                  }
                                  disabled={buttonStatus}
                                >
                                  {progress1 ? <ButtonLoader /> : "YES"}
                                </Button>
                                <Button
                                  onClick={() => {
                                    setDeleteModal(false);
                                    setTemplateId(0);
                                    setTemplateName("");
                                  }}
                                >
                                  NO
                                </Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : null}
            </TabPane>
          </TabContent>

          <div className=" d-flex justify-content-between">
            <Link to={`/addUniversityApplicationDocument/${univerId}`}>
              <Button color="warning">Previous Page</Button>
            </Link>

            <Link to={`/addUniversityCommission/${univerId}`}>
              <Button color="warning">Next Page</Button>
            </Link>
          </div>
        </CardBody>
      </Card>
      <br /> <br /> <br />
    </div>
  );
};

export default AddUniversityTemplateDocument;
