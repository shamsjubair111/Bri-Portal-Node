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
import get from "../../../../helpers/get";

import * as Icon from "react-feather";
import { Upload, Modal as AntdModal } from "antd";
import "antd/dist/antd.css";
import { Image } from "antd";

import CustomButtonRipple from "../../Components/CustomButtonRipple";
import post from "../../../../helpers/post";
import { useToasts } from "react-toast-notifications";
import ButtonForFunction from "../../Components/ButtonForFunction";
import LinkSpanButton from "../../Components/LinkSpanButton";
import { rootUrl } from "../../../../constants/constants";
import remove from "../../../../helpers/remove";
import put from "../../../../helpers/put";
import { permissionList } from "../../../../constants/AuthorizationConstant";

const AddProviderUniversityApplicationDocument = () => {
    const { addToast } = useToasts();
  const history = useHistory();
  const [activetab, setActivetab] = useState("6");

  const [document, setDocument] = useState([]);
  const [documentLabel, setDocumentLabel] = useState("Select Document");
  const [applicationLabel, setApplicationLabel] = useState(
    "Select Application Type"
  );
  const [documentValue, setDocumentValue] = useState(0);
  const [applicationValue, setApplicationValue] = useState(0);
  const [documentError, setDocumentError] = useState(false);
  const [applicationTypeError, setApplicationTypeError] = useState(false);
  const [applicationList, setApplicationList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [applicationObject, setApplicationObject] = useState({});

  const [isMandatory, setIsMandatory] = useState(null);
  const [applicationError, setApplicationError] = useState(false);
  const [applicationTypeId, setApplicationTypeId] = useState([]);

  const permissions = JSON.parse(localStorage.getItem('permissions'));

  useEffect(() => {
    get("ApplicationTypeDD/Index").then((res) => {
      setApplicationTypeId(res);
    });

    get(`DocumentDD/Index`).then((res) => {
      console.log("Checking document requirement Status", res);
      setDocument(res);
    });

    if (localStorage.getItem("id")) {
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

  const applicationOptions = applicationTypeId?.map((app) => ({
    label: app?.name,
    value: app?.id,
  }));

  const selectDocument = (label, value) => {
    setDocumentError(false);
    setDocumentLabel(label);
    setDocumentValue(value);
  };

  const selectApplicationType = (label, value) => {
    setApplicationTypeError(false);
    setApplicationLabel(label);
    setApplicationValue(value);
  };

  // redirect to
  const backToProviderDetails = () => {
    history.push(`/providerDetails/${localStorage.getItem("proProfileId")}`);
    localStorage.removeItem("proProfileId");
  };

  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab === "1") {
      history.push("/addProviderUniversity");
    }
    if (tab === "2") {
      history.push("/addProviderUniversityCampus");
    }
    if (tab === "3") {
      history.push("/addProviderUniversityFinancial");
    }
    if (tab === "4") {
      history.push("/addProviderUniversityFeatures");
    }
    if (tab === "5") {
      history.push("/addProviderUniversityGallery");
    }
    if (tab === "7") {
      history.push("/addProviderUniversityTemplateDocument");
    }
    // if (tab === "8") {
    //   history.push("/addUniversityRequiredDocument");
    // }
  };

  const toggleDanger = (p) => {
    console.log("dele", p);
    localStorage.setItem("applicationId", p?.id);
    localStorage.setItem("applicationName", p?.document?.name);
    setDeleteModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subData = new FormData(e.target);

    for (var i of subData) {
      console.log("i", i);
    }

    if (documentValue == 0) {
      setDocumentError(true);
    }
    else if (applicationValue == 0) {
      setApplicationTypeError(true);
    }
    else if (isMandatory === null) {
      setApplicationError(true);
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

            setApplicationObject({});
            setSuccess(!success);
          }
        });
      }
    }
  };

  const onShow = () => {
    setShowForm(false);
    setDocumentLabel("Select Document");
    setDocumentValue(0);
    setApplicationValue(0);
    setApplicationLabel("Select Application Type");
    setIsMandatory(null);
    setApplicationObject({});
    // setFileList1(action?.document?.fileUrl);
    setSelectedId(0);
  };

  // redirect to Next Page
  const onNextPage = () => {
    const uniID = localStorage.getItem("id");
    history.push({
      pathname: "/addProviderUniversityTemplateDocument",
      id: uniID,
    });
  };

  const cancel = () => {
    setShowForm(true);
    setSelectedId(0);
    setDocumentLabel("Select Document");
    setDocumentValue(0);
    setApplicationValue(0);
    setApplicationLabel("Select Application Type");
    setIsMandatory(null);
    setApplicationObject({});
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
      setDocumentLabel(action?.document?.name);
      setDocumentValue(action?.documentId);
      setApplicationValue(action?.applicationTypeId);
      setApplicationLabel(
        action?.applicationTypeId === 1
          ? "Home"
          : action?.applicationTypeId === 2
          ? "EU/UK"
          : "International"
      );
      setIsMandatory(`${action?.isMandatory}`);
      // setFileList1(action?.document?.fileUrl);
      setSelectedId(action?.id);
      console.log(action?.id);
    });
  };

  const handleIsMandatory = (event) => {
    console.log(event.target.value);
    setIsMandatory(event.target.value);
    setApplicationError(false);
  };
    return (
        <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">University Application Document</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToProviderDetails} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Provider Details
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
                Application Document
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "7"} onClick={() => toggle("7")}>
                Template Document
              </NavLink>
            </NavItem>

            {/* <NavItem>
              <NavLink active={activetab === "8"} onClick={() => toggle("8")}>
                Required Document
              </NavLink>
            </NavItem> */}
          </Nav>

          <TabContent activeTab={activetab}>
            {applicationList.length > 0 ? (
              <div className="container test-score-div-1-style mt-4 mb-4">
                <span className="test-score-span-1-style">
                University application information is shown here.
                </span>
              </div>
            ) : null}

            <TabPane tabId="6">
              {showForm === false ? (
                <>
                  <Form onSubmit={handleSubmit} className="mt-5">
                    <div className="hedding-titel d-flex justify-content-between mb-4">
                      <div>
                        <h5>
                          {" "}
                          <b>Application Document</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
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
                          Document Name <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Select
                          options={documentOptions}
                          value={{ label: documentLabel, value: documentValue }}
                          onChange={(opt) =>
                            selectDocument(opt.label, opt.value)
                          }
                          name="documentId"
                          id="documentId"
                        />

                        {documentError && (
                          <span className="text-danger">
                            You must select document.
                          </span>
                        )}
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
                            label: applicationLabel,
                            value: applicationValue,
                          }}
                          onChange={(opt) =>
                            selectApplicationType(opt.label, opt.value)
                          }
                          name="applicationTypeId"
                          id="applicationTypeId"
                        />

                        {applicationTypeError && (
                          <span className="text-danger">
                            You must select application type.
                          </span>
                        )}
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="2">
                        <span>
                          Is Mandatory <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="isMandatory"
                            onChange={handleIsMandatory}
                            name="isMandatory"
                            value="true"
                            checked={isMandatory == "true"}
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="isMandatory"
                          >
                            Yes
                          </Label>
                        </FormGroup>

                        <FormGroup check inline>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="isMandatory"
                            onChange={handleIsMandatory}
                            name="isMandatory"
                            value="false"
                            checked={isMandatory == "false"}
                          />
                          <Label
                            className="form-check-label"
                            check
                            htmlFor="isMandatory"
                          >
                            No
                          </Label>
                        </FormGroup>

                        <br />

                        {applicationError && (
                          <span className="text-danger">
                            You must choose yes or no.
                          </span>
                        )}
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
                              {
                                permissions?.includes(permissionList?.Add_universityApplicationdocument || permissionList?.Update_universityApplicationdocument) ?
                                <ButtonForFunction
                                color={"primary"}
                                type={"submit"}
                                className={"ms-lg-3 ms-sm-1 mt-3"}
                                name={"Save"}
                               
                              />
                              :
                              null
                              
                              }
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
                        <th>Type</th>
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
                          <td>{application?.document?.name}</td>
                          <td>
                            {application?.applicationTypeId === 1
                              ? "Home"
                              : application?.applicationTypeId === 2
                              ? "EU/UK"
                              : "International"}
                          </td>

                          {/* <td>
                            <a
                              href={rootUrl + application?.document?.fileUrl}
                              target="_blank"
                              download
                            >
                              Download
                            </a>
                          </td> */}

                          <td>
                            <ButtonForFunction
                              func={() => handleUpdate(application?.id)}
                              className={"mx-1 btn-sm"}
                              color={"warning"}
                              icon={<i className="fas fa-edit"></i>}
                              permission={6}
                            />

                            <ButtonForFunction
                              className={"mx-1 btn-sm"}
                              func={() => toggleDanger(application)}
                              color={"danger"}
                              icon={<i className="fas fa-trash-alt"></i>}
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

              {applicationList?.length > 0 ? (
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
              ) : null}
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
      <br /> <br /> <br />
    </div>
    );
};

export default AddProviderUniversityApplicationDocument;