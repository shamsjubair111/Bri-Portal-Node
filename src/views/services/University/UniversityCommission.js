import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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
import Select from "react-select";
import ButtonForFunction from "../Components/ButtonForFunction";
import get from "../../../helpers/get";
import { useToasts } from "react-toast-notifications";
import post from "../../../helpers/post";
import put from "../../../helpers/put";
import ButtonLoader from "../Components/ButtonLoader";

const UniversityCommission = () => {
  const history = useHistory();
  const { univerId } = useParams();
  const [activetab, setActivetab] = useState("9");
  const [commission, setCommission] = useState([]);
  const { addToast } = useToasts();

  const [commissionTitleHome, setCommissionTitleHome] = useState(
    "Select Commission Type"
  );
  const [commissionValueHome, setCommissionValueHome] = useState(0);
  const [commissionTitleInternational, setCommissionTitleinternational] =
    useState("Select Commission Type");
  const [commissionValueInternational, setCommissionValueInternational] =
    useState(0);
  const [commissionTitleEU_UK, setCommissionTitleEU_UK] = useState(
    "Select Commission Type"
  );
  const [commissionValueEU_UK, setCommissionValueEU_UK] = useState(0);
  const [homeError, setHomeError] = useState("");
  const [intError, setIntError] = useState("");
  const [euukhomeError, setEUUKError] = useState("");
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [val, setVal] = useState({});

  const [buttonStatus, setButtonStatus] = useState(false);
  const [progress, setProgress] = useState(false);

  // useEffect(() => {
  //   get(`StudentComissionTypeDD/Index`).then((res) => {
  //     setCommission(res);
  //   });

  //   get(`UniversityComission/GetByUniversity/${univerId}`).then((res) => {

  //     setData(res);
  //     setCommissionTitleHome(
  //       res?.homeStudentComissionType == 1
  //         ? "Amount"
  //         : res?.homeStudentComissionType == 2
  //         ? "Percentage"
  //         : "Select Commission Type"
  //     );
  //     setCommissionTitleinternational(
  //       res?.internationalStudentComissionType == 1
  //         ? "Amount"
  //         : res?.internationalStudentComissionType == 2
  //         ? "Percentage"
  //         : "Select Commission Type"
  //     );
  //     setCommissionTitleEU_UK(
  //       res?.eU_UKStudentComissionType == 1
  //         ? "Amount"
  //         : res?.eU_UKStudentComissionType == 2
  //         ? "Percentage"
  //         : "Select Commission Type"
  //     );
  //     setCommissionValueHome(res?.homeStudentComissionType);
  //     setCommissionValueInternational(res?.internationalStudentComissionType);
  //     setCommissionValueEU_UK(res?.eU_UKStudentComissionType);
  //   });
  // }, [success, univerId]);

  // redirect to
  const backToUniList = () => {
    history.push("/universityList");
  };

  const commissionOptions = commission?.map((com) => ({
    label: com?.name,
    value: com?.id,
  }));

  const selectCommissionHome = (label, value) => {
    setHomeError("");
    setCommissionTitleHome(label);
    setCommissionValueHome(value);
  };

  const selectCommissionInternational = (label, value) => {
    setIntError("");
    setCommissionTitleinternational(label);
    setCommissionValueInternational(value);
  };

  const selectCommissionEU_UK = (label, value) => {
    setEUUKError("");
    setCommissionTitleEU_UK(label);
    setCommissionValueEU_UK(value);
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

  const onGoUniList = () => {
    history.push("/universityList");
  };

  const onGoUniProfile = () => {
    history.push(`/universityDetails/${univerId}`);
  };

  const toggleDanger = (data) => {
    setShowForm(true);
    setVal(data);
  };

  //

  const submitFormData = (event) => {
    event.preventDefault();
    const subData = new FormData(event.target);

    if (commissionValueHome == 0 || commissionValueHome == undefined) {
      setHomeError("Select commission type for home students");
    } else if (
      commissionValueInternational == 0 ||
      commissionValueInternational == undefined
    ) {
      setIntError("Select commission type for international students");
    } else if (commissionValueEU_UK == 0 || commissionValueEU_UK == undefined) {
      setEUUKError("Select commission type for eu_uk students");
    } else {
      if (data?.id) {
        setButtonStatus(true);
        setProgress(true);
        put(`UniversityComission/Update`, subData).then((res) => {
          setButtonStatus(false);
          setProgress(false);
          if (res?.status == 200 && res?.data?.isSuccess == true) {
            addToast(res?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
            setSuccess(!success);
            setVal({});
            setShowForm(false);
            setCommissionTitleHome("Select Commission Type");
            setCommissionTitleinternational("Select Commission Type");
            setCommissionTitleEU_UK("Select Commission Type");
            setCommissionValueHome(0);
            setCommissionValueInternational(0);
            setCommissionValueEU_UK(0);
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
        post(`UniversityComission/Create`, subData).then((res) => {
          setButtonStatus(false);
          setProgress(false);
          if (res?.status == 200 && res?.data?.isSuccess == true) {
            addToast(res?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
            setSuccess(!success);
            setVal({});
            setShowForm(false);
            setCommissionTitleHome("Select Commission Type");
            setCommissionTitleinternational("Select Commission Type");
            setCommissionTitleEU_UK("Select Commission Type");
            setCommissionValueHome(0);
            setCommissionValueInternational(0);
            setCommissionValueEU_UK(0);
          } else {
            addToast(res?.data?.message, {
              appearance: "error",
              autoDismiss: true,
            });
          }
        });
      }
    }
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">University Commission</h3>
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
            <TabPane tabId="9">
              {!data?.id || showForm ? (
                <Form className="mt-5" onSubmit={submitFormData}>
                  <div className="hedding-titel d-flex justify-content-between mb-3">
                    <div>
                      <h5>
                        {" "}
                        <b>Commission Informtation</b>{" "}
                      </h5>

                      <div className="bg-h"></div>
                    </div>
                  </div>

                  <FormGroup row className="has-icon-left position-relative">
                    <input
                      type="hidden"
                      id="universityId"
                      name="universityId"
                      value={univerId}
                    />

                    {data?.id ? (
                      <input type="hidden" name="id" id="id" value={data?.id} />
                    ) : null}
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Type (Home){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Select
                        options={commissionOptions}
                        value={{
                          label: commissionTitleHome,
                          value: commissionValueHome,
                        }}
                        onChange={(opt) =>
                          selectCommissionHome(opt.label, opt.value)
                        }
                        name="homeStudentComissionType"
                        id="homeStudentComissionType"
                      />
                      <span className="text-danger">{homeError}</span>
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Installment (Home){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Input
                        type="number"
                        name="homeStudentComissionInstallment"
                        id="homeStudentComissionInstallment"
                        max={"10"}
                        placeholder="Write Commission Installment"
                        required
                        defaultValue={val?.homeStudentComissionInstallment}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Value (Home){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Input
                        type="number"
                        name="homeStudentComissionValue"
                        id="homeStudentComissionValue"
                        defaultValue={val?.homeStudentComissionValue}
                        placeholder="Write Commission Value"
                        required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Type (International){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Select
                        options={commissionOptions}
                        value={{
                          label: commissionTitleInternational,
                          value: commissionValueInternational,
                        }}
                        onChange={(opt) =>
                          selectCommissionInternational(opt.label, opt.value)
                        }
                        name="internationalStudentComissionType"
                        id="internationalStudentComissionType"
                      />
                      <span className="text-danger">{intError}</span>
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Installment (International){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Input
                        type="number"
                        name="internationalStudentComissionInstallment"
                        id="internationalStudentComissionInstallment"
                        max={"10"}
                        placeholder="Write Commission Installment"
                        required
                        defaultValue={
                          val?.internationalStudentComissionInstallment
                        }
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Value (International){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Input
                        type="number"
                        name="internationalStudentComissionValue"
                        id="internationalStudentComissionValue"
                        defaultValue={val?.internationalStudentComissionValue}
                        placeholder="Write Commission Value"
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Type (EU_UK){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Select
                        options={commissionOptions}
                        value={{
                          label: commissionTitleEU_UK,
                          value: commissionValueEU_UK,
                        }}
                        onChange={(opt) =>
                          selectCommissionEU_UK(opt.label, opt.value)
                        }
                        name="eU_UKStudentComissionType"
                        id="eU_UKStudentComissionType"
                      />
                      <span className="text-danger">{euukhomeError}</span>
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Installment (EU_UK){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Input
                        type="number"
                        name="eU_UKStudentComissionInstallment"
                        id="eU_UKStudentComissionInstallment"
                        max={"10"}
                        placeholder="Write Commission Installment"
                        required
                        defaultValue={val?.eU_UKStudentComissionInstallment}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="2">
                      <span>
                        Commission Value (EU_UK){" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="6">
                      <Input
                        type="number"
                        name="eU_UKStudentComissionValue"
                        id="eU_UKStudentComissionValue"
                        defaultValue={val?.eU_UKStudentComissionValue}
                        placeholder="Write Commission Value"
                        required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup
                    row
                    className="has-icon-left position-relative"
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Col md="5">
                      <ButtonForFunction
                        color={"primary"}
                        type={"submit"}
                        className={"ml-lg-3 ml-sm-1 mt-3"}
                        name={progress ? <ButtonLoader /> : "Save"}
                        disable={buttonStatus}
                        permission={6}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              ) : (
                <Card className="CampusCard">
                  <CardBody className="shaodw">
                    <div className="row">
                      <div className="col-md-11">
                        <div className="row">
                          <div className="col-md-4">
                            <h5> Home </h5>
                            <span>
                              Commission Type:{" "}
                              {data?.homeStudentComissionType == 1
                                ? "Amount"
                                : "Percentage"}
                            </span>
                            <br />

                            <span>
                              Installment:{" "}
                              {data?.homeStudentComissionInstallment}
                            </span>
                            <br />
                            <span>
                              Value: {data?.homeStudentComissionValue}
                            </span>
                          </div>

                          <div className="col-md-4">
                            <h5> International </h5>
                            <span>
                              Commission Type:{" "}
                              {data?.internationalStudentComissionType == 1
                                ? "Amount"
                                : "Percentage"}
                            </span>
                            <br />

                            <span>
                              Installment:{" "}
                              {data?.internationalStudentComissionInstallment}
                            </span>
                            <br />
                            <span>
                              Value: {data?.internationalStudentComissionValue}
                            </span>
                          </div>

                          <div className="col-md-4">
                            <h5> EU_UK </h5>
                            <span>
                              Commission Type:{" "}
                              {data?.eU_UKStudentComissionType == 1
                                ? "Amount"
                                : "Percentage"}
                            </span>
                            <br />

                            <span>
                              Installment:{" "}
                              {data?.eU_UKStudentComissionInstallment}
                            </span>
                            <br />
                            <span>
                              Value: {data?.eU_UKStudentComissionValue}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="CampusCardAction">
                          <ButtonForFunction
                            type={"button"}
                            color={"primary"}
                            className={"mr-2"}
                            func={() => toggleDanger(data)}
                            icon={<i className="fas fa-edit"></i>}
                            permission={6}
                          />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              )}
            </TabPane>
          </TabContent>

          <div className="d-flex justify-content-between mt-5">
            <div>
              <Link to={`/addUniversityTemplateDocument/${univerId}`}>
                <Button color="warning">Previous Page</Button>
              </Link>
            </div>

            <div>
              <FormGroup
                className="has-icon-left position-relative"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <ButtonForFunction
                  func={onGoUniList}
                  color={"primary uapp-form-button"}
                  name={"Go to University List"}
                  permission={6}
                />

                <ButtonForFunction
                  func={onGoUniProfile}
                  color={"primary uapp-form-button"}
                  className={"ml-lg-2 ml-sm-2"}
                  name={"Go to University Profile"}
                  permission={6}
                />
              </FormGroup>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UniversityCommission;
