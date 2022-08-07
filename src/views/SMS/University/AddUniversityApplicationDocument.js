import Axios from "axios";
import React, { useState, createRef, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";
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
import "antd/dist/antd.css";
import { Image } from "antd";

import CustomButtonRipple from "../Components/CustomButtonRipple";
import post from "../../../helpers/post";
import { useToasts } from "react-toast-notifications";
import ButtonForFunction from "../Components/ButtonForFunction";
import LinkSpanButton from "../Components/LinkSpanButton";
import { rootUrl } from "../../../constants/constants";
import remove from "../../../helpers/remove";
import put from "../../../helpers/put";

const AddUniversityApplicationDocument = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const [activetab, setActivetab] = useState("6");

  const [document, setDocument] = useState([]);
  const [documentLabel, setDocumentLabel] = useState(
    "Select Requirement Status"
  );
  const [documentValue, setDocumentValue] = useState(0);
  const [documentError, setDocumentError] = useState(false);
  const [applicationList, setApplicationList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [applicationObject, setApplicationObject] = useState({});

  // image upload starts here
  const [previewVisible1, setPreviewVisible1] = useState(false);
  const [previewImage1, setPreviewImage1] = useState("");
  const [previewTitle1, setPreviewTitle1] = useState("");
  const [FileList1, setFileList1] = useState([]);

  const handleChange1 = ({ fileList }) => {
    setFileList1(fileList);
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
    get(`DocumentRequirementStatusDD/Index`).then((res) => {
      console.log("Checking document requirement Status", res);
      setDocument(res);
    });

    if(localStorage.getItem("id")){
      get(
        `UniversityApplicationDocument/GetByUniversity/${localStorage.getItem(
          "id"
        )}`
      ).then((res) => {
        console.log("appDocuData", res);
        setApplicationList(res);
        if (res.length > 0) {
          setShowForm(true);
        } else {
          setShowForm(false);
          setSelectedId(0);
        }
      });
    }

  }, [success]);

  const documentOptions = document?.map((doc) => ({
    label: doc?.name,
    value: doc?.id,
  }));

  const selectDocumentStatus = (label, value) => {
    setDocumentError(false);
    setDocumentLabel(label);
    setDocumentValue(value);
  };

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };

  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab === "1") {
      history.push("/addUniversity");
    }
    if (tab === "2") {
      history.push("/addUniversityCampus");
    }
    if (tab === "3") {
      history.push("/addUniversityFinancial");
    }
    if (tab === "4") {
      history.push("/addUniversityFeatures");
    }
    if (tab === "5") {
      history.push("/addUniversityGallery");
    }
    if (tab === "7") {
      history.push("/addUniversityRequiredDocument");
    }
  };

  const toggleDanger = (p) => {
    console.log("dele", p);
    localStorage.setItem("applicationId", p.id);
    localStorage.setItem("applicationName", p.name);
    setDeleteModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subData = new FormData(e.target);

    subData.append(
      "documentFile",
      FileList1.length == 0 ? null : FileList1[0]?.originFileObj
    );

    // for(var i of subData){
    //   console.log("i", i);
    // }

    if (documentValue == 0) {
      setDocumentError(true);
    } else {
      if (selectedId === 0) {
        post("UniversityApplicationDocument/Create", subData).then((res) => {
          console.log("document data", res);
          if (res?.status == 200) {
            addToast(res?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
            // history.push('/addUniversityRequiredDocument');
            setSuccess(!success);
            setShowForm(!showForm);
            setFileList1([]);
            // setDocumentLabel("Select Requirement Status")
            // setDocumentValue(0);
          }
        });
      } else {
        put(`UniversityApplicationDocument/Update`, subData).then((res) => {
          // setuniversityId(res.data.result.universityId)
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
    setDocumentLabel("Select Requirement Status");
    setDocumentValue(0);
  };

  // redirect to Next Page
  const onNextPage = () => {
    const uniID = localStorage.getItem("id");
    history.push({
      pathname: "/addUniversityRequiredDocument",
      id: uniID,
    });
  };

  const cancel = () => {
    setShowForm(true);
    setSelectedId(0);
    // setuniversityCampusObject({});
    setDocumentLabel("Select Requirement Status");
    setDocumentValue(0);
  };

  const handleDeletePermission = (id) => {
    const returnValue = remove(
      `UniversityApplicationDocument/Delete/${id}`
    ).then((action) => {
      setDeleteModal(false);
      setSuccess(!success);
      addToast(action, {
        appearance: "error",
        autoDismiss: true,
      });
      localStorage.removeItem("applicationId");
      localStorage.removeItem("applicationName");
    });
  };

  const handleUpdate = (id) => {
    // setCampusId(id);
    setShowForm(false);

    get(`UniversityApplicationDocument/Get/${id}`).then((action) => {
      console.log("application update object", action);
      setApplicationObject(action);
      setDocumentLabel(action?.documentRequirementStatus?.name);
      setDocumentValue(action?.documentRequirementStatus?.id);
      // setFileList1(action?.document?.fileUrl);
      setSelectedId(action?.id);
      console.log(action?.id);
    });
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add University Application Document</h3>
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
              {/* <NavLink disabled
                              active={activetab === '2'}
                              onClick={() =>toggle('2')}
                              > */}
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Campus Information
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Financial Information
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "4"} onClick={() => toggle("4")}>
                Features
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "5"} onClick={() => toggle("5")}>
                University Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "6"} onClick={() => toggle("6")}>
                Application Document
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "7"} onClick={() => toggle("7")}>
                Required Document
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activetab}>

            {applicationList.length > 0 ? (
              <div className="container test-score-div-1-style mt-4 mb-4">
                <span className="test-score-span-1-style">
                  University application informations are showing here.
                </span>
              </div>
            ) : null}

            <TabPane tabId="6">
              {showForm === false ? (
                <>

                  <Form onSubmit={handleSubmit} className="mt-5">

                  <div className="hedding-titel d-flex justify-content-between mb-4">
                      <div>
                        <h5> <b>Add Application Document</b> </h5>

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
                        value={localStorage.getItem("id")}
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
                          placeholder="Enter Name"
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
                          placeholder="Enter  Description"
                          required
                        />
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
                          {applicationObject?.document !== null ? (
                            <div className="col-md-3">
                              <Image
                                width={104}
                                height={104}
                                src={
                                  rootUrl + applicationObject?.document?.fileUrl
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
                                  <span>Upload Image Here</span>
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

                        {/* {
                            <MediaPictures/>
                        } */}
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="2">
                        <span>
                          Document Requirement Status{" "}
                          <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Select
                          options={documentOptions}
                          value={{ label: documentLabel, value: documentValue }}
                          onChange={(opt) =>
                            selectDocumentStatus(opt.label, opt.value)
                          }
                          name="documentRequirementStatusId"
                          id="documentRequirementStatusId"
                        />

                        {documentError && (
                          <span className="text-danger">
                            Select Requirement Status
                          </span>
                        )}

                        {/* <div className="form-control-position">
                        <User size={15} />
                    </div> */}
                      </Col>
                    </FormGroup>

                    <FormGroup className="has-icon-left position-relative">
                      {selectedId !== 0 ? (
                        <>
                          <FormGroup row
                            className="has-icon-left position-relative"
                            style={{
                              display: "flex",
                              justifyContent: "end",
                            }}
                          >

                            <Col md="5">
                              <ButtonForFunction
                               color={"primary"}
                               type={"submit"}
                               className={"ms-lg-3 ms-sm-1 mt-3"}
                               name={"Save"}
                               permission={6}
                              />
                            </Col>

                            <div>
                              <ButtonForFunction
                                func={cancel}
                                color={"danger uapp-form-button float-right"}
                                name={"Cancel"}
                                permission={6}
                              />

                            </div>
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
                              <ButtonForFunction
                                color={"primary"}
                                type={"submit"}
                                className={"ms-lg-3 ms-sm-1 mt-3"}
                                name={"Save"}
                                permission={6}
                              />
                            </Col>

                            <div>
                              {selectedId !== 0 ||
                              applicationList.length > 0 ? (
                                
                                <ButtonForFunction
                                  func={cancel}
                                  color={"danger uapp-form-button float-right"}
                                  name={"Cancel"}
                                  permission={6}
                                />
                              ) : (
                                <></>
                              )}
                            </div>
                          </FormGroup>
                        </>
                      )}
                    </FormGroup>

                    {/* <FormGroup row className="has-icon-left position-relative"
   style={{ display: "flex", justifyContent: "end" }}
 >

   <Col md="5">

    <CustomButtonRipple
      color={"primary"}
      type={"submit"}
      className={"mr-1 mt-3"}
      name={"submit"}
      permission={6}
    />
  
   </Col>

</FormGroup> */}
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

              {applicationList.length > 0 ? (
                <div className="table-responsive mt-4 mb-3">
                  <Table className="table-sm table-bordered">
                    <thead className="thead-uapp-bg">
                      <tr style={{ textAlign: "center" }}>
                        <th>SL/NO</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>File</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applicationList?.map((application, i) => (
                        <tr
                          key={application?.id}
                          style={{ textAlign: "center" }}
                        >
                          <th scope="row">{i + 1}</th>
                          <td>{application?.name}</td>
                          <td>{application?.description}</td>
                          <td>
                            {application?.documentRequirementStatus?.name}
                          </td>
                          <td>
                            <a
                              href={rootUrl + application?.document?.fileUrl}
                              target="_blank"
                              download
                            >
                              Download
                            </a>
                          </td>
                          <td>
                            <ButtonForFunction
                              className={"mx-1 btn-sm"}
                              func={() => toggleDanger(application)}
                              color={"danger"}
                              icon={<i className="fas fa-trash-alt"></i>}
                              permission={6}
                            />

                            {/* <Button onClick={()=> handleUpdate(uniType?.id)} className="mx-1 btn-sm" color="warning"><i className="fas fa-edit"></i></Button> */}

                            <ButtonForFunction
                              func={() => handleUpdate(application?.id)}
                              className={"mx-1 btn-sm"}
                              color={"warning"}
                              icon={<i className="fas fa-edit"></i>}
                              permission={6}
                            />

                            <Modal
                              isOpen={deleteModal}
                              toggle={() => setDeleteModal(!deleteModal)}
                              className="uapp-modal"
                            >
                              <ModalBody>
                                <p>
                                  Are You Sure to Delete this{" "}
                                  <b>
                                    {localStorage.getItem("applicationName")}
                                  </b>{" "}
                                  ? Once Deleted it can't be Undone!
                                </p>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  color="danger"
                                  onClick={() =>
                                    handleDeletePermission(
                                      localStorage.getItem("applicationId")
                                    )
                                  }
                                >
                                  YES
                                </Button>
                                <Button onClick={() => setDeleteModal(false)}>
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

              {
                applicationList?.length>0?
                <FormGroup
                className="has-icon-left position-relative"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                }}
              >
                <ButtonForFunction
                  func={onNextPage}
                  color={"warning uapp-form-button float-right"}
                  name={"Next Page"}
                  permission={6}
                />
              </FormGroup>
              :
              null
              }

            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
      <br /> <br /> <br />
    </div>
  );
};

export default AddUniversityApplicationDocument;
