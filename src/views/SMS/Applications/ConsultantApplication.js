import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Col,
  Row,
  Table,
  Dropdown,
  Form,
  FormGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Select from "react-select";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Pagination from "../../SMS/Pagination/Pagination.jsx";
import get from "../../../helpers/get";
import remove from "../../../helpers/remove.js";
import ButtonForFunction from "../Components/ButtonForFunction";
import LinkButton from "../Components/LinkButton.js";
import ReactTableConvertToXl from "../ReactTableConvertToXl/ReactTableConvertToXl";
import * as XLSX from "xlsx/xlsx.mjs";
import ReactToPrint from "react-to-print";
import LinkSpanButton from "../Components/LinkSpanButton.js";
import CommonFilter from "./CommonFilter.js";
import ConsultantFilter from "./ConsultantFilter.js";
import StudentFilter from "./StudentFilter.js";
import AdmissionManagerFilter from "./AdmissionManagerFilter.js";
import ProviderAdminFilter from "./ProviderAdminFilter.js";
import { userTypes } from "../../../constants/userTypeConstant.js";
import Loader from "../Search/Loader/Loader.js";

const ConsultantApplication = ({currentUser}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  const [callApi, setCallApi] = useState(false);
  const [orderLabel, setOrderLabel] = useState("Select Order By");
  const [orderValue, setOrderValue] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [entity, setEntity] = useState(0);
  const [applicationDD, setApplicationDD] = useState([]);
  const [offerDD, setOfferDD] = useState([]);
  const [enrollDD, setEnrollDD] = useState([]);
  const [intakeDD, setIntakeDD] = useState([]);
  const [interviewDD, setInterviewDD] = useState([]);
  const [elptDD, setElptDD] = useState([]);
  const [financeDD, setFinanceDD] = useState([]);

  // for consultant
  const [consultantUappIdDD, setConsultantUappIdDD] = useState([]);
  const [consUappIdLabel, setConsUappIdLabel] = useState("UAPP ID");
  const [consUappIdValue, setConsUappIdValue] = useState(0);

  const [consultantStdDD, setConsultantStdDD] = useState([]);
  const [consStdLabel, setConsStdLabel] = useState("Name");
  const [consStdValue, setConsStdValue] = useState(0);

  const [consultantUniDD, setConsultantUniDD] = useState([]);
  const [consUniLabel, setConsUniLabel] = useState("University Name");
  const [consUniValue, setConsUniValue] = useState(0);

  const [consultantPhnDD, setConsultantPhnDD] = useState([]);
  const [consPhnLabel, setConsPhnLabel] = useState("Phone No.");
  const [consPhnValue, setConsPhnValue] = useState(0);

  // for all
  const [applicationLabel, setApplicationLabel] = useState("Status");
  const [applicationValue, setApplicationValue] = useState(0);
  const [offerLabel, setOfferLabel] = useState("Offer");
  const [offerValue, setOfferValue] = useState(0);
  const [enrollLabel, setEnrollLabel] = useState("Enrolment Status");
  const [enrollValue, setEnrollValue] = useState(0);
  const [intakeLabel, setIntakeLabel] = useState("Intake");
  const [intakeValue, setIntakeValue] = useState(0);
  const [interviewLabel, setInterviewLabel] = useState("Interview");
  const [interviewValue, setInterviewValue] = useState(0);
  const [elptLabel, setElptLabel] = useState("ELPT");
  const [elptValue, setElptValue] = useState(0);
  const [financeLabel, setFinanceLabel] = useState("SLCs");
  const [financeValue, setFinanceValue] = useState(0);

  // application list
  const [applicationList, setApplicationList] = useState([]);
  const [serialNumber, setSerialNumber] = useState(0);

  const [cId, setConsId] = useState(undefined);
  const [uId, setUniId] = useState(undefined);

  // current_user
//   const [currentUser, setCurrentUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

//   console.log("currentuser", currentUser);

  // for hide/unhide column
  const [checkId, setCheckId] = useState(true);
  const [checkApplic, setCheckApplic] = useState(true);
  const [checkContact, setCheckContact] = useState(true);
  const [checkUni, setCheckUni] = useState(true);
  const [checkCamp, setCheckCamp] = useState(true);
  const [checkCourse, setCheckCourse] = useState(true);
  const [checkIntake, setCheckIntake] = useState(true);
  const [checkDate, setCheckDate] = useState(true);
  const [checkSts, setCheckSts] = useState(true);
  const [checkOfr, setCheckOfr] = useState(true);
  const [checkIntrv, setCheckIntrv] = useState(true);
  const [checkElpt, setCheckElpt] = useState(true);
  const [checkEnSts, setCheckEnSts] = useState(true);
  const [checkSlcs, setCheckEnSlcs] = useState(true);
  const [checkCons, setCheckCons] = useState(true);
  const [checkAction, setCheckAction] = useState(true);
  const [delData, setDelData] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const history = useHistory();
  const { addToast } = useToasts();
  const location = useLocation();

  // user select order
  const orderArr = [
    {
      label: "Newest",
      value: 1,
    },
    {
      label: "Oldest",
      value: 2,
    },
  ];

  const orderName = orderArr.map((dsn) => ({
    label: dsn.label,
    value: dsn.value,
  }));

  const selectOrder = (label, value) => {
    // setLoading(true);
    setOrderLabel(label);
    setOrderValue(value);
    setCallApi((prev) => !prev);
  };

  // user select data per page
  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

  const selectDataSize = (value) => {
    // setLoading(true);
    setDataPerPage(value);
    setCallApi((prev) => !prev);
  };

  const selectAppliDD = (label, value) => {
    // setLoading(true);
    setApplicationLabel(label);
    setApplicationValue(value);
    // handleSearch();
  };
  const selectOfferDD = (label, value) => {
    // setLoading(true);
    setOfferLabel(label);
    setOfferValue(value);
    // handleSearch();
  };
  const selectEnrollDD = (label, value) => {
    // setLoading(true);
    setEnrollLabel(label);
    setEnrollValue(value);
    // handleSearch();
  };
  const selectIntakeDD = (label, value) => {
    // setLoading(true);
    setIntakeLabel(label);
    setIntakeValue(value);
    // handleSearch();
  };
  const selectInterviewDD = (label, value) => {
    // setLoading(true);
    setInterviewLabel(label);
    setInterviewValue(value);
    // handleSearch();
  };
  const selectElptDD = (label, value) => {
    // setLoading(true);
    setElptLabel(label);
    setElptValue(value);
    // handleSearch();
  };
  const selectFinanceDD = (label, value) => {
    // setLoading(true);
    setFinanceLabel(label);
    setFinanceValue(value);
    // handleSearch();
  };
  const selectConsUappId = (label, value) => {
    // setLoading(true);
    setConsUappIdLabel(label);
    setConsUappIdValue(value);
    // handleSearch();
  };
  const selectConsStd = (label, value) => {
    // setLoading(true);
    setConsStdLabel(label);
    setConsStdValue(value);
    // handleSearch();
  };
  const selectConsUni = (label, value) => {
    // setLoading(true);
    setConsUniLabel(label);
    setConsUniValue(value);
    // handleSearch();
  };
  const selectConsPhn = (label, value) => {
    // setLoading(true);
    setConsPhnLabel(label);
    setConsPhnValue(value);
    // handleSearch();
  };

//   useEffect(() => {
//     get("Account/GetCurrentUserId").then((res) => {
//       setCurrentUser(res);
//     });
//   }, []);

  useEffect(() => {
    get("ApplicationStatusDD/Index").then((res) => {
      setApplicationDD(res);
    });

    get("OfferStatusDD/Index").then((res) => {
      setOfferDD(res);
    });

    get("EnrollmentStatusDD/Index").then((res) => {
      setEnrollDD(res);
    });

    get("IntakeDD/Index").then((res) => {
      setIntakeDD(res);
    });

    get("InterviewStatusDD/Index").then((res) => {
      setInterviewDD(res);
    });

    get("ElptStatusDD/Index").then((res) => {
      setElptDD(res);
    });
    get("StudentFinanceStatusDD/Index").then((res) => {
      setFinanceDD(res);
    });

    // for consultant
    if(currentUser != undefined){
        get(`ConsultantApplicationFilterDD/UappId/${currentUser}`).then((res) => {
            setConsultantUappIdDD(res);
            console.log("uappId", res);
          });
          get(`ConsultantApplicationFilterDD/Student/${currentUser}`).then((res) => {
            setConsultantStdDD(res);
            console.log("Student", res);
          });
          get(`ConsultantApplicationFilterDD/University/${currentUser}`).then(
            (res) => {
              setConsultantUniDD(res);
              console.log("University", res);
            }
          );
          get(`ConsultantApplicationFilterDD/PhoneNumber/${currentUser}`).then(
            (res) => {
              setConsultantPhnDD(res);
              console.log("PhoneNumber", res);
            }
          );
    }

    // for list
    
    //   const uniId =
    //     commonUniValue !== 0
    //       ? commonUniValue
    //       : typeof location.universityIdFromUniList !== undefined ||
    //         location.universityIdFromUniList !== null
    //       ? location.universityIdFromUniList
    //       : 0;

    //   setUniId(parseInt(uniId));

    //   if (uniId !== 0) {
    //     var uni = commonUniDD?.find((s) => s.id === uniId);

    //     if (uni === undefined) {
    //       setCommonUniLabel("University Name");
    //     } else {
    //       setCommonUniLabel(uni?.name);
    //       setCommonUniValue(uniId);
    //     }
    //   }

    //   const consId =
    //     consultantValue !== 0
    //       ? consultantValue
    //       : typeof location.consultantIdFromConsultantList !== undefined ||
    //         location.consultantIdFromConsultantList !== null
    //       ? location.consultantIdFromConsultantList
    //       : 0;

    //       setConsId(parseInt(consId));

    //   if (parseInt(consId) !== 0) {
    //     var consultant = commonConsultantDD?.find((s) => s.id === parseInt(consId));

    //     if (consultant === undefined) {
    //       // setConsultantLabel("Consultant");
    //     } else {
    //       setConsultantLabel(consultant?.name);
    //       setConsultantValue(consId);
    //     }
    //   }

    //   console.log("consProfileId", location.consultantIdFromConsultantList, consultant);
    if(currentUser != undefined){
        get(
            `Application/GetPaginated?page=${currentPage}&pagesize=${dataPerPage}&uappStudentId=${consUappIdValue}&studentId=${consStdValue}&universityId=${consUniValue}&uappPhoneId=${consPhnValue}&applicationStatusId=${applicationValue}&offerStatusId=${offerValue}&enrollmentId=${enrollValue}&intakeId=${intakeValue}&interviewId=${interviewValue}&elptId=${elptValue}&studentFinanceId=${financeValue}&orderId=${orderValue}&userId=${currentUser != undefined ? currentUser : null}`
          ).then((res) => {
            setLoading(false);
            setApplicationList(res?.models);
            setEntity(res?.totalEntity);
            setSerialNumber(res?.firstSerialNumber);
          });
    }
    
  }, [currentPage, dataPerPage, applicationValue, offerValue, enrollValue, intakeValue, interviewValue, elptValue, financeValue, orderValue, entity, success, consUappIdValue, consStdValue, consUniValue, consPhnValue, currentUser]);

  // for all dropdown
  const applicationMenu = applicationDD.map((application) => ({
    label: application?.name,
    value: application?.id,
  }));
  const offerMenu = offerDD.map((offer) => ({
    label: offer?.name,
    value: offer?.id,
  }));
  const enrollMenu = enrollDD.map((enroll) => ({
    label: enroll?.name,
    value: enroll?.id,
  }));
  const intakeMenu = intakeDD.map((intake) => ({
    label: intake?.name,
    value: intake?.id,
  }));
  const interviewMenu = interviewDD.map((interview) => ({
    label: interview?.name,
    value: interview?.id,
  }));
  const elptMenu = elptDD.map((elpt) => ({
    label: elpt?.name,
    value: elpt?.id,
  }));
  const financeMenu = financeDD.map((finance) => ({
    label: finance?.name,
    value: finance?.id,
  }));

  // for consultant
  const consUappIdMenu = consultantUappIdDD.map((uappId) => ({
    label: uappId?.name,
    value: uappId?.id,
  }));
  const consStdMenu = consultantStdDD.map((std) => ({
    label: std?.name,
    value: std?.id,
  }));
  const consUniMenu = consultantUniDD.map((uni) => ({
    label: uni?.name,
    value: uni?.id,
  }));
  const consPhnMenu = consultantPhnDD.map((phn) => ({
    label: phn?.name,
    value: phn?.id,
  }));

  const toggleDanger = (data) => {
    setDelData(data);
    setDeleteModal(true);
  };

  // toggle1 dropdown
  const toggle1 = () => {
    setDropdownOpen1((prev) => !prev);
  };

  // toggle dropdown
  const toggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleExportXLSX = () => {
    // var wb = XLSX.utils.book_new(),
    // ws = XLSX.utils.json_to_sheet(universityList);
    // XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    // XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  //  change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

  const componentRef = useRef();

  const handleDate = (e) => {
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    const x = localeDate.split(",")[0];
    return x;
  };

  const handleDeleteData = () => {
    remove(`Application/Delete/${delData?.id}`).then((res) => {
      addToast(res, {
        appearance: "error",
        autoDismiss: true,
      });
      setSuccess(!success);
      setDeleteModal(false);
      setDelData({});
    });
  };

  // on clear
  const handleClearSearch = () => {
    setApplicationLabel("Status");
    setApplicationValue(0);
    setOfferLabel("Offer");
    setOfferValue(0);
    setEnrollLabel("Enrolment Status");
    setEnrollValue(0);
    setIntakeLabel("Intake");
    setIntakeValue(0);
    setInterviewLabel("Interview");
    setInterviewValue(0);
    setElptLabel("ELPT");
    setElptValue(0);
    setFinanceLabel("SLCs");
    setFinanceValue(0);
    setConsUappIdLabel("UAPP ID");
    setConsUappIdValue(0);
    setConsStdLabel("Name");
    setConsStdValue(0);
    setConsUniLabel("University Name");
    setConsUniValue(0);
    setConsPhnLabel("Phone No.");
    setConsPhnValue(0);
    // setLoading(true);
  };

  // for hide/unhide column

  const handleCheckedId = (e) => {
    setCheckId(e.target.checked);
  };
  const handleCheckedApplic = (e) => {
    setCheckApplic(e.target.checked);
  };
  const handleCheckedContact = (e) => {
    setCheckContact(e.target.checked);
  };
  const handleCheckedUni = (e) => {
    setCheckUni(e.target.checked);
  };
  const handleCheckedCamp = (e) => {
    setCheckCamp(e.target.checked);
  };
  const handleCheckedCourse = (e) => {
    setCheckCourse(e.target.checked);
  };
  const handleCheckedIntake = (e) => {
    setCheckIntake(e.target.checked);
  };
  const handleCheckedDate = (e) => {
    setCheckDate(e.target.checked);
  };
  const handleCheckedSts = (e) => {
    setCheckSts(e.target.checked);
  };
  const handleCheckedOfr = (e) => {
    setCheckOfr(e.target.checked);
  };
  const handleCheckedIntrv = (e) => {
    setCheckIntrv(e.target.checked);
  };
  const handleCheckedElpt = (e) => {
    setCheckElpt(e.target.checked);
  };
  const handleCheckedEnSts = (e) => {
    setCheckEnSts(e.target.checked);
  };
  const handleCheckedSlcs = (e) => {
    setCheckEnSlcs(e.target.checked);
  };
  const handleCheckedCons = (e) => {
    setCheckCons(e.target.checked);
  };
  const handleCheckedAction = (e) => {
    setCheckAction(e.target.checked);
  };

  const backToDashboard = () => {
    if (location.universityIdFromUniList != undefined) {
      history.push("/universityList");
    } else if (location.consultantIdFromConsultantList != undefined) {
      history.push("/consultantList");
    } else {
      history.push("/");
    }
  };

  return (
    <div>
        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Applications</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-white">
            <i className="fas fa-arrow-circle-left"></i>{" "}
              Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className="uapp-employee-search">
      <CardBody className="search-card-body">
        <Row className="gy-3">
          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={consUappIdMenu}
              value={{ label: consUappIdLabel, value: consUappIdValue }}
              onChange={(opt) => selectConsUappId(opt.label, opt.value)}
              placeholder="UAPP ID"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={consStdMenu}
              value={{ label: consStdLabel, value: consStdValue }}
              onChange={(opt) => selectConsStd(opt.label, opt.value)}
              placeholder="Name"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={applicationMenu}
              value={{ label: applicationLabel, value: applicationValue }}
              onChange={(opt) => selectAppliDD(opt.label, opt.value)}
              placeholder="Status"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={offerMenu}
              value={{ label: offerLabel, value: offerValue }}
              onChange={(opt) => selectOfferDD(opt.label, opt.value)}
              placeholder="Offer"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={enrollMenu}
              value={{ label: enrollLabel, value: enrollValue }}
              onChange={(opt) => selectEnrollDD(opt.label, opt.value)}
              placeholder="Enrolment st..."
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={intakeMenu}
              value={{ label: intakeLabel, value: intakeValue }}
              onChange={(opt) => selectIntakeDD(opt.label, opt.value)}
              placeholder="Intake"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={interviewMenu}
              value={{ label: interviewLabel, value: interviewValue }}
              onChange={(opt) => selectInterviewDD(opt.label, opt.value)}
              placeholder="Interview"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={elptMenu}
              value={{ label: elptLabel, value: elptValue }}
              onChange={(opt) => selectElptDD(opt.label, opt.value)}
              placeholder="ELPT"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={financeMenu}
              value={{ label: financeLabel, value: financeValue }}
              onChange={(opt) => selectFinanceDD(opt.label, opt.value)}
              placeholder="SLCs"
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={consUniMenu}
              value={{ label: consUniLabel, value: consUniValue }}
              onChange={(opt) => selectConsUni(opt.label, opt.value)}
              placeholder="University N..."
              name="name"
              id="id"
            />
          </Col>

          <Col lg="2" md="3" sm="6" xs="6" className="p-2">
            <Select
              options={consPhnMenu}
              value={{ label: consPhnLabel, value: consPhnValue }}
              onChange={(opt) => selectConsPhn(opt.label, opt.value)}
              placeholder="Phone No."
              name="name"
              id="id"
            />
          </Col>
        </Row>

        <Row className="">
          <Col lg="12" md="12" sm="12" xs="12">
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div
                className="mt-1 mx-1 d-flex btn-clear"
                onClick={handleClearSearch}
              >
                {/* <Icon.X  className='text-danger' />*/}
                <span className="text-danger">
                  <i className="fa fa-times"></i> Clear
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>

      <Card className="uapp-employee-search">
        <CardBody>
          <Row className="mb-3">
            <Col lg="5" md="5" sm="4" xs="4">
              {/* <ButtonForFunction
                func={handleAddUniversity}
                className={"btn btn-uapp-add "}
                icon={<i className="fas fa-plus"></i>}
                name={" Add New"}
                permission={6}
              /> */}
            </Col>

            <Col lg="7" md="7" sm="8" xs="8">
              <div className="d-md-flex justify-content-end">
                {/* <Col lg="2">
                    
                    <div className='ms-2'>
                      <ReactToPrint
                        trigger={()=><div className="uapp-print-icon">
                          <div className="text-right">
                            <span title="Print to pdf"> <i className="fas fa-print"></i> </span>
                          </div>
                        </div>}
                        content={() => componentRef.current}
                      />
                    </div>
                </Col> */}
                <div className="mr-3">
                  <div className="d-flex align-items-center">
                    <div className="mr-2">Order By :</div>
                    <div>
                      <Select
                        options={orderName}
                        value={{ label: orderLabel, value: orderValue }}
                        onChange={(opt) => selectOrder(opt.label, opt.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mr-3">
                  <div className="d-flex align-items-center">
                    <div className="mr-2">Showing :</div>
                    <div>
                      <Select
                        options={dataSizeName}
                        value={{ label: dataPerPage, value: dataPerPage }}
                        onChange={(opt) => selectDataSize(opt.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mr-3">
                  <Dropdown
                    className="uapp-dropdown"
                    style={{ float: "right" }}
                    isOpen={dropdownOpen}
                    toggle={toggle}
                  >
                    <DropdownToggle caret>
                      <i className="fas fa-print fs-7"></i>
                    </DropdownToggle>
                    <DropdownMenu className="bg-dd-4">
                      <div className="d-flex justify-content-around align-items-center mt-2">
                        <div className="cursor-pointer">
                          {/* <p onClick={handleExportXLSX}>
                            <i className="fas fa-file-excel"></i>
                          </p> */}
                          <ReactTableConvertToXl
                            id="test-table-xls-button"
                            table="table-to-xls"
                            filename="tablexls"
                            sheet="tablexls"
                            icon={<i className="fas fa-file-excel"></i>}
                          />
                        </div>
                        <div className="cursor-pointer">
                          <ReactToPrint
                            trigger={() => (
                              <p>
                                <i className="fas fa-file-pdf"></i>
                              </p>
                            )}
                            content={() => componentRef.current}
                          />
                        </div>
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </div>

                {/* column hide unhide starts here */}

                <div className="">
                  <Dropdown
                    className="uapp-dropdown"
                    style={{ float: "right" }}
                    isOpen={dropdownOpen1}
                    toggle={toggle1}
                  >
                    <DropdownToggle caret>
                      <i className="fas fa-bars"></i>
                    </DropdownToggle>
                    <DropdownMenu className="bg-dd-1">
                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">UAPP Id</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id=""
                              name="isAcceptHome"
                              onChange={(e) => {
                                handleCheckedId(e);
                              }}
                              defaultChecked={checkId}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Applicant</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedApplic(e);
                              }}
                              defaultChecked={checkApplic}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Contact</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedContact(e);
                              }}
                              defaultChecked={checkContact}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">University</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedUni(e);
                              }}
                              defaultChecked={checkUni}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Campus</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedCamp(e);
                              }}
                              defaultChecked={checkCamp}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Course</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedCourse(e);
                              }}
                              defaultChecked={checkCourse}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Intake</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedIntake(e);
                              }}
                              defaultChecked={checkIntake}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Uni Application Date</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedDate(e);
                              }}
                              defaultChecked={checkDate}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Status</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedSts(e);
                              }}
                              defaultChecked={checkSts}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Offer</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedOfr(e);
                              }}
                              defaultChecked={checkOfr}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Interview</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedIntrv(e);
                              }}
                              defaultChecked={checkIntrv}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">ELPT</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedElpt(e);
                              }}
                              defaultChecked={checkElpt}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Enrolment Status</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedEnSts(e);
                              }}
                              defaultChecked={checkEnSts}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">SLCs</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedSlcs(e);
                              }}
                              defaultChecked={checkSlcs}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Consultant</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedCons(e);
                              }}
                              defaultChecked={checkCons}
                            />
                          </FormGroup>
                        </Col>
                      </div>

                      <div className="d-flex justify-content-between">
                        <Col md="8" className="">
                          <p className="">Action</p>
                        </Col>

                        <Col md="4" className="text-center">
                          <FormGroup check inline>
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                handleCheckedAction(e);
                              }}
                              defaultChecked={checkAction}
                            />
                          </FormGroup>
                        </Col>
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </div>

                {/* column hide unhide ends here */}
              </div>
            </Col>
          </Row>

          {loading ? (
            <div className="d-flex justify-content-center mb-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          ) : (
            <div className="table-responsive mb-3" ref={componentRef}>
              <Table
                id="table-to-xls"
                style={{ verticalAlign: "middle" }}
                className="table-sm table-bordered"
              >
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    {checkId ? (
                      <th style={{ verticalAlign: "middle" }}>UAPP Id</th>
                    ) : null}
                    {checkApplic ? (
                      <th style={{ verticalAlign: "middle" }}>Applicant</th>
                    ) : null}
                    {checkContact ? (
                      <th style={{ verticalAlign: "middle" }}>Contact</th>
                    ) : null}
                    {checkUni ? (
                      <th style={{ verticalAlign: "middle" }}>University</th>
                    ) : null}
                    {checkCamp ? (
                      <th style={{ verticalAlign: "middle" }}>Campus</th>
                    ) : null}
                    {checkCourse ? (
                      <th style={{ verticalAlign: "middle" }}>Course</th>
                    ) : null}
                    {checkIntake ? (
                      <th style={{ verticalAlign: "middle" }}>Intake</th>
                    ) : null}
                    {checkDate ? (
                      <th style={{ verticalAlign: "middle" }}>
                        Uni Application Date
                      </th>
                    ) : null}
                    {checkSts ? (
                      <th style={{ verticalAlign: "middle" }}>Status</th>
                    ) : null}
                    {checkOfr ? (
                      <th style={{ verticalAlign: "middle" }}>Offer</th>
                    ) : null}
                    {checkIntrv ? (
                      <th style={{ verticalAlign: "middle" }}>Interview</th>
                    ) : null}
                    {checkElpt ? (
                      <th style={{ verticalAlign: "middle" }}>ELPT</th>
                    ) : null}
                    {checkEnSts ? (
                      <th style={{ verticalAlign: "middle" }}>
                        Enrolment Status
                      </th>
                    ) : null}
                    {checkSlcs ? (
                      <th style={{ verticalAlign: "middle" }}>SLCs</th>
                    ) : null}
                    {checkCons ? (
                      <th style={{ verticalAlign: "middle" }}>Consultant</th>
                    ) : null}
                    {checkAction ? (
                      <th
                        style={{ verticalAlign: "middle" }}
                        className="text-center"
                      >
                        Action
                      </th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  {applicationList?.map((app, i) => (
                    <tr key={i}>
                      {checkId ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.uappId}
                        </td>
                      ) : null}

                      {checkApplic ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.studentName}
                        </td>
                      ) : null}

                      {checkContact ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.studentPhone} <br />
                          {app?.studentEmail}
                        </td>
                      ) : null}

                      {checkUni ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.universityName}
                        </td>
                      ) : null}

                      {checkCamp ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.campusName}
                        </td>
                      ) : null}

                      {checkCourse ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.subjectName}
                        </td>
                      ) : null}

                      {checkIntake ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.intakeName}
                        </td>
                      ) : null}

                      {checkDate ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.applicationDate ? (
                            <>{handleDate(app?.applicationDate)}</>
                          ) : null}
                        </td>
                      ) : null}

                      {checkSts ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.applicationStatusName}
                        </td>
                      ) : null}

                      {checkOfr ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.offerStatusName}
                        </td>
                      ) : null}

                      {checkIntrv ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.interviewStatusName}
                        </td>
                      ) : null}

                      {checkElpt ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.elptStatusName}
                        </td>
                      ) : null}

                      {checkEnSts ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.enrollmentStatusName}
                        </td>
                      ) : null}

                      {checkSlcs ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.studentFinanceName}
                        </td>
                      ) : null}

                      {checkCons ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.consultantName}
                        </td>
                      ) : null}

                      {checkAction ? (
                        <td
                          style={{ width: "8%", verticalAlign: "middle" }}
                          className="text-center"
                        >
                          <ButtonGroup variant="text">
                            <LinkSpanButton
                              style={{ padding: "8px 12px" }}
                              url={
                                {
                                  // pathname: "/universityList",
                                  // universityType: uniType?.id,
                                  // universityName: uniType?.name,
                                }
                              }
                              className={"badge badge-primary mx-1 btn-sm mt-2"}
                              data={2}
                              permission={6}
                            />

                            <LinkButton
                              url={`/applicationDetails/${app?.id}/${app?.studentId}`}
                              color="primary"
                              className={"mx-1 btn-sm mt-2"}
                              icon={<i className="fas fa-eye"></i>}
                            />

                            {/* <Button onClick={() => toggleDanger(student?.name, student?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}

                            <ButtonForFunction
                              icon={<i className="fas fa-trash-alt"></i>}
                              color={"danger"}
                              className={"mx-1 btn-sm mt-2"}
                              func={() => toggleDanger(app)}
                            />
                          </ButtonGroup>

                          <Modal
                            isOpen={deleteModal}
                            toggle={() => setDeleteModal(!deleteModal)}
                            className="uapp-modal"
                          >
                            <ModalBody>
                              <p>
                                Are You Sure to Delete this ? Once Deleted it
                                can't be Undone!
                              </p>
                            </ModalBody>

                            <ModalFooter>
                              <Button color="danger" onClick={handleDeleteData}>
                                YES
                              </Button>
                              <Button onClick={() => setDeleteModal(false)}>
                                NO
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          <Pagination
          dataPerPage={dataPerPage}
          totalData={entity}
          paginate={paginate}
          currentPage={currentPage}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ConsultantApplication;
