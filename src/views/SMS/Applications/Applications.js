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
import ReactTableConvertToXl from '../ReactTableConvertToXl/ReactTableConvertToXl';
import * as XLSX from "xlsx/xlsx.mjs";
import ReactToPrint from "react-to-print";
import LinkSpanButton from "../Components/LinkSpanButton.js";
import CommonFilter from "./CommonFilter.js";
import ConsultantFilter from "./ConsultantFilter.js";
import StudentFilter from "./StudentFilter.js";
import AdmissionManagerFilter from "./AdmissionManagerFilter.js";
import ProviderAdminFilter from "./ProviderAdminFilter.js";
import { userTypes } from "../../../constants/userTypeConstant.js";

const Applications = () => {
  const [loading, setLoading] = useState(false);
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
  // for common
  const [commonUappIdDD, setCommonUappIdDD] = useState([]);
  const [commonUniDD, setCommonUniDD] = useState([]);
  const [commonConsultantDD, setCommonConsultantDD] = useState([]);
  const [commonStdDD, setCommonStdDD] = useState([]);
  const [commonPhoneDD, setCommonPhoneDD] = useState([]);

  // for provider admin
  const [providerUappIdDD, setProviderUappIdDD] = useState([]);
  const [providerUappIdLabel, setProviderUappIdLabel] = useState("UAPP ID");
  const [providerUappIdValue, setProviderUappIdValue] = useState(0);

  const [providerStdDD, setProviderStdDD] = useState([]);
  const [providerStdLabel, setProviderStdLabel] = useState("Name");
  const [providerStdvalue, setProviderStdValue] = useState(0);

  const [providerConsDD, setProviderConsDD] = useState([]);
  const [providerConsLabel, setProviderConsLabel] = useState("Consultant");
  const [providerConsValue, setProviderConsValue] = useState(0);

  const [providerUniDD, setProviderUniDD] = useState([]);
  const [providerUniLabel, setProviderUniLabel] = useState("University Name");
  const [providerUniValue, setProviderUniValue] = useState(0);

  const [providerPhoneDD, setProviderPhoneDD] = useState([]);
  const [providerPhoneLabel, setproviderPhoneLabel] = useState("Phone No.");
  const [providerPhoneValue, setproviderPhoneValue] = useState(0);

  // for admission manager
  const [managerUappIdDD, setManagerUappIdDD] = useState([]);
  const [managerUappIdLabel, setmanagerUappIdLabel] = useState("UAPP ID");
  const [managerUappIdValue, setmanagerUappIdValue] = useState(0);

  const [managerStdDD, setManagerStdDD] = useState([]);
  const [managerStdLabel, setManagerStdLabel] = useState("Name");
  const [managerStdValue, setManagerStdValue] = useState(0);

  const [managerConsDD, setManagerConsDD] = useState([]);
  const [managerConsLabel, setManagerConsLabel] = useState("Consultant");
  const [managerConsValue, setManagerConsValue] = useState(0);

  const [managerUniDD, setManagerUniDD] = useState([]);
  const [managerUniLabel, setManagerUniLabel] = useState("University Name");
  const [managerUniValue, setManagerUniValue] = useState(0);

  const [managerPhnDD, setManagerPhoneDD] = useState([]);
  const [managerPhnLabel, setManagerPhnLabel] = useState("Phone No.");
  const [managerPhnValue, setManagerPhnValue] = useState(0);

  // for student
  const [studentUniDD, setStudentUniDD] = useState([]);
  const [studentUniLabel, setStudentUniLabel] = useState("University Name");
  const [studentUniValue, setStudentUniValue] = useState(0);

  const [studentConsDD, setStudentConsDD] = useState([]);
  const [studentConsLabel, setStudentConsLabel] = useState("Consultant");
  const [studentConsValue, setStudentConsValue] = useState(0);

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

  // for common
  const [commonUappIdLabel, setCommonUappIdLabel] = useState("UAPP Id");
  const [commonUappIdValue, setCommonUappIdValue] = useState(0);
  const [commonUniLabel, setCommonUniLabel] = useState("University Name");
  const [commonUniValue, setCommonUniValue] = useState(0);
  const [consultantLabel, setConsultantLabel] = useState("Consultant");
  const [consultantValue, setConsultantValue] = useState(0);
  const [commonPhoneLabel, setCommonPhoneLabel] = useState("Phone No.");
  const [commonPhoneValue, setCommonPhoneValue] = useState(0);
  const [commonStdLabel, setCommonStdLabel] = useState("Name");
  const [commonStdValue, setCommonStdValue] = useState(0);

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
  const [financeLabel, setFinanceLabel] = useState("SLCS");
  const [financeValue, setFinanceValue] = useState(0);

  // application list
  const [applicationList, setApplicationList] = useState([]);
  const [serialNumber, setSerialNumber] = useState(0);

  // current_user
  const [currentUser, setCurrentUser] = useState(undefined);

  const history = useHistory();
  const { addToast } = useToasts();
  const location = useLocation();

  const userId = "";
  // const userId = "consultant";
  // const userId = "student";
  // const userId = "manager";
  // const userId = "provider";

 

  useEffect(()=>{
    get("Account/GetCurrentUserId").then(res => {
      setCurrentUser(res);
    })
  }, [])

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
    // for common
    get("CommonApplicationFilterDD/UappId").then((res) => {
      setCommonUappIdDD(res);
    });
    get("CommonApplicationFilterDD/University").then((res) => {
      setCommonUniDD(res);
    });
    get("CommonApplicationFilterDD/Consultant").then((res) => {
      setCommonConsultantDD(res);
    });
    get("CommonApplicationFilterDD/Student").then((res) => {
      setCommonStdDD(res);
    });
    get("CommonApplicationFilterDD/PhoneNumber").then((res) => {
      setCommonPhoneDD(res);
    });
    // for provider admin
    get(
      `ProviderAdminApplicationFilterDD/UappId/${currentUser}`
    ).then((res) => {
      setProviderUappIdDD(res);
    });
    get(
      `ProviderAdminApplicationFilterDD/Student/${currentUser}`
    ).then((res) => {
      setProviderStdDD(res);
    });
    get(
      `ProviderAdminApplicationFilterDD/Consultant/${currentUser}`
    ).then((res) => {
      setProviderConsDD(res);
    });
    get(
      `ProviderAdminApplicationFilterDD/University/${currentUser}`
    ).then((res) => {
      setProviderUniDD(res);
    });
    get(
      `ProviderAdminApplicationFilterDD/PhoneNumber/${currentUser}`
    ).then((res) => {
      setProviderPhoneDD(res);
    });

    // for admission manager
    get(
      `AddmissionmanagerApplicationFilterDD/UappId/${currentUser}`
    ).then((res) => {
      setManagerUappIdDD(res);
      
    });
    get(
      `AddmissionmanagerApplicationFilterDD/Student/${currentUser}`
    ).then((res) => {
      setManagerStdDD(res);
    });
    get(
      `AddmissionmanagerApplicationFilterDD/Consultant/${currentUser}`
    ).then((res) => {
      setManagerConsDD(res);
    });
    get(
      `AddmissionmanagerApplicationFilterDD/University/${currentUser}`
    ).then((res) => {
      setManagerUniDD(res);
    });
    get(
      `AddmissionmanagerApplicationFilterDD/PhoneNumber/${currentUser}`
    ).then((res) => {
      setManagerPhoneDD(res);
    });
    // for student
    get(
      `StudentApplicationFilterDD/University/${currentUser}`
    ).then((res) => {
      setStudentUniDD(res);
    });
    get(
      `StudentApplicationFilterDD/Consultant/${currentUser}`
    ).then((res) => {
      setStudentConsDD(res);
    });

    // for consultant
    get(
      `ConsultantApplicationFilterDD/UappId/${currentUser}`
    ).then((res) => {
      setConsultantUappIdDD(res);
    });
    get(
      `ConsultantApplicationFilterDD/Student/${currentUser}`
    ).then((res) => {
      setConsultantStdDD(res);
    });
    get(
      `ConsultantApplicationFilterDD/University/${currentUser}`
    ).then((res) => {
      setConsultantUniDD(res);
    });
    get(
      `ConsultantApplicationFilterDD/PhoneNumber/${currentUser}`
    ).then((res) => {
      setConsultantPhnDD(res);
    });

    // for list
    if (parseInt(localStorage.getItem("userType")) === userTypes?.Student) {
      get(
        `Application/GetPaginated?page=${currentPage}&pagesize=${dataPerPage}&consultantId=${studentConsValue}&universityId=${studentUniValue}&applicationStatusId=${applicationValue}&offerStatusId=${offerValue}&enrollmentId=${enrollValue}&intakeId=${intakeValue}&interviewId=${interviewValue}&elptId=${elptValue}&studentFinanceId=${financeValue}&orderId=${orderValue}&userId=${currentUser}`
      ).then((res) => {
        
        setLoading(false);
        setApplicationList(res?.models);

        setEntity(res?.totalEntity);
        setSerialNumber(res?.firstSerialNumber);
      });
    } else if (parseInt(localStorage.getItem("userType")) === userTypes?.Consultant) {
      get(
        `Application/GetPaginated?page=${currentPage}&pagesize=${dataPerPage}&uappStudentId=${consUappIdValue}&studentId=${consStdValue}&universityId=${consUniValue}&uappPhoneId=${consPhnValue}&applicationStatusId=${applicationValue}&offerStatusId=${offerValue}&enrollmentId=${enrollValue}&intakeId=${intakeValue}&interviewId=${interviewValue}&elptId=${elptValue}&studentFinanceId=${financeValue}&orderId=${orderValue}&userId=${currentUser}`
      ).then((res) => {
        
        setLoading(false);
        setApplicationList(res?.models);

        setEntity(res?.totalEntity);
        setSerialNumber(res?.firstSerialNumber);
      });
    } else if (parseInt(localStorage.getItem("userType")) === userTypes?.AdmissionManager) {
      get(
        `Application/GetPaginated?page=${currentPage}&pagesize=${dataPerPage}&uappStudentId=${managerUappIdValue}&studentId=${managerStdValue}&consultantId=${managerConsValue}&universityId=${managerUniValue}&uappPhoneId=${managerPhnValue}&applicationStatusId=${applicationValue}&offerStatusId=${offerValue}&enrollmentId=${enrollValue}&intakeId=${intakeValue}&interviewId=${interviewValue}&elptId=${elptValue}&studentFinanceId=${financeValue}&orderId=${orderValue}&userId=${currentUser}`
      ).then((res) => {
       
        setLoading(false);
        setApplicationList(res?.models);

        setEntity(res?.totalEntity);
        setSerialNumber(res?.firstSerialNumber);
      });
    } else if (parseInt(localStorage.getItem("userType")) === userTypes?.ProviderAdmin) {
      get(
        `Application/GetPaginated?page=${currentPage}&pagesize=${dataPerPage}&uappStudentId=${providerUappIdValue}&studentId=${providerStdvalue}&consultantId=${providerConsValue}&universityId=${providerUniValue}&uappPhoneId=${providerPhoneValue}&applicationStatusId=${applicationValue}&offerStatusId=${offerValue}&enrollmentId=${enrollValue}&intakeId=${intakeValue}&interviewId=${interviewValue}&elptId=${elptValue}&studentFinanceId=${financeValue}&orderId=${orderValue}&userId=${currentUser}`
      ).then((res) => {
        setLoading(false);
        setApplicationList(res?.models);
        setEntity(res?.totalEntity);
        setSerialNumber(res?.firstSerialNumber);
      });
    } else {
      const uniId =
      commonUniValue !== 0
        ? commonUniValue
        : typeof location.universityIdFromUniList !== undefined ||
          location.universityIdFromUniList !== null
        ? location.universityIdFromUniList
        : 0;

        if (uniId !== 0) {
          var uni = commonUniDD?.find((s) => s.id === uniId);
    
          if (uni === undefined) {
            setCommonUniLabel("University Name");
          } else {
            setCommonUniLabel(uni?.name);
            setCommonUniValue(uniId);
          }
        }

      const consId = 
      consultantValue !== 0
        ? consultantValue
        : typeof location.consultantIdFromConsultantList !== undefined ||
          location.consultantIdFromConsultantList !== null
        ? location.consultantIdFromConsultantList
        : 0;

        if (consId !== 0) {
          var consultant = commonConsultantDD?.find((s) => s.id === consId);
    
          if (consultant === undefined) {
            setConsultantLabel("Consultant");
          } else {
            setConsultantLabel(consultant?.name);
            setConsultantValue(consId);
          }
        }

      get(
        `Application/GetPaginated?page=${currentPage}&pagesize=${dataPerPage}&uappStudentId=${commonUappIdValue}&studentId=${commonStdValue}&consultantId=${consId ? consId : consultantValue}&universityId=${uniId ? uniId : commonUniValue}&uappPhoneId=${commonPhoneValue}&applicationStatusId=${applicationValue}&offerStatusId=${offerValue}&enrollmentId=${enrollValue}&intakeId=${intakeValue}&interviewId=${interviewValue}&elptId=${elptValue}&studentFinanceId=${financeValue}&orderId=${orderValue}`
      ).then((res) => {
     
        setLoading(false);
        setApplicationList(res?.models);
        setEntity(res?.totalEntity);
        setSerialNumber(res?.firstSerialNumber);
      });
    }
  }, [
    currentPage,
    dataPerPage,
    commonPhoneValue,
    commonStdValue,
    commonUappIdValue,
    commonUniValue,
    consultantValue,
    managerConsValue,
    managerPhnValue,
    managerUniValue,
    managerStdValue,
    managerUappIdValue,
    consUappIdValue,
    consStdValue,
    consUniValue,
    consPhnValue,
    providerUappIdValue,
    providerStdvalue,
    providerConsValue,
    providerUniValue,
    providerPhoneValue,
    studentConsValue,
    studentUniValue,
    applicationValue,
    offerValue,
    enrollValue,
    intakeValue,
    interviewValue,
    elptValue,
    financeValue,
    orderValue,
    entity,
    serialNumber,
    loading,
    currentUser,
    location.universityIdFromUniList
  ]);

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

  // for common
  const commonUappIdMenu = commonUappIdDD.map((UappId) => ({
    label: UappId?.name,
    value: UappId?.id,
  }));
  const commonUniMenu = commonUniDD.map((uni) => ({
    label: uni?.name,
    value: uni?.id,
  }));
  const commonConsultantMenu = commonConsultantDD.map((consultant) => ({
    label: consultant?.name,
    value: consultant?.id,
  }));
  const commonStdMenu = commonStdDD.map((student) => ({
    label: student?.name,
    value: student?.id,
  }));
  const commonPhoneMenu = commonPhoneDD.map((phone) => ({
    label: phone?.name,
    value: phone?.id,
  }));

  // for provide admin dropdown
  const providerUappIdMenu = providerUappIdDD.map((uappId) => ({
    label: uappId?.name,
    value: uappId?.id,
  }));
  const providerStdMenu = providerStdDD.map((std) => ({
    label: std?.name,
    value: std?.id,
  }));
  const providerConsMenu = providerConsDD.map((consultant) => ({
    label: consultant?.name,
    value: consultant?.id,
  }));
  const providerUniMenu = providerUniDD.map((university) => ({
    label: university?.name,
    value: university?.id,
  }));
  const providerPhoneMenu = providerPhoneDD.map((phone) => ({
    label: phone?.name,
    value: phone?.id,
  }));

  // for admission manager dropdown
  const managerUappIdMenu = managerUappIdDD.map((manager) => ({
    label: manager?.name,
    value: manager?.id,
  }));
  const managerStdMenu = managerStdDD.map((student) => ({
    label: student?.name,
    value: student?.id,
  }));
  const managerConsMenu = managerConsDD.map((consultant) => ({
    label: consultant?.name,
    value: consultant?.id,
  }));
  const managerUniMenu = managerUniDD.map((uni) => ({
    label: uni?.name,
    value: uni?.id,
  }));
  const managerPhnMenu = managerPhnDD.map((phone) => ({
    label: phone?.name,
    value: phone?.id,
  }));

  // for student dropdown
  const studentUniMenu = studentUniDD.map((uni) => ({
    label: uni?.name,
    value: uni?.id,
  }));
  const studentConsMenu = studentConsDD.map((consultant) => ({
    label: consultant?.name,
    value: consultant?.id,
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
    
    setLoading(true);
    setOrderLabel(label);
    setOrderValue(value);
    setCallApi((prev) => !prev);
  };

  // user select data per page
  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

  const selectDataSize = (value) => {
    setLoading(true);
    setDataPerPage(value);
    setCallApi((prev) => !prev);
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

  // redirect to dashboard
  const backToDashboard = () => {
    if(location.universityIdFromUniList != undefined){
      history.push("/universityList");
    }
    else if(location.consultantIdFromConsultantList != undefined){
      history.push("/consultantList");
    }
    else{
      history.push("/");
    }
  };

  const handleDate = (e) => {
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    const x = localeDate.split(",")[0];
    return x;
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Applications</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i>{" "}
              {
                location.universityIdFromUniList != undefined ?
                "Back to University List"
                :
                location.consultantIdFromConsultantList != undefined ? 
                "Back to Consultant List"
                :
                "Back to Dashboard"
              }
            </span>
          </div>
        </CardHeader>
      </Card>
      {/* filter */}
      {parseInt(localStorage.getItem("userType")) === userTypes?.Consultant ? (
        <ConsultantFilter
          applicationMenu={applicationMenu}
          applicationLabel={applicationLabel}
          setApplicationLabel={setApplicationLabel}
          applicationValue={applicationValue}
          setApplicationValue={setApplicationValue}
          offerMenu={offerMenu}
          offerLabel={offerLabel}
          setOfferLabel={setOfferLabel}
          offerValue={offerValue}
          setOfferValue={setOfferValue}
          enrollMenu={enrollMenu}
          enrollLabel={enrollLabel}
          setEnrollLabel={setEnrollLabel}
          enrollValue={enrollValue}
          setEnrollValue={setEnrollValue}
          intakeMenu={intakeMenu}
          intakeLabel={intakeLabel}
          setIntakeLabel={setIntakeLabel}
          intakeValue={intakeValue}
          setIntakeValue={setIntakeValue}
          interviewMenu={interviewMenu}
          interviewLabel={interviewLabel}
          setInterviewLabel={setInterviewLabel}
          interviewValue={interviewValue}
          setInterviewValue={setInterviewValue}
          elptMenu={elptMenu}
          elptLabel={elptLabel}
          setElptLabel={setElptLabel}
          elptValue={elptValue}
          setElptValue={setElptValue}
          financeMenu={financeMenu}
          financeLabel={financeLabel}
          setFinanceLabel={setFinanceLabel}
          financeValue={financeValue}
          setFinanceValue={setFinanceValue}
          consUappIdMenu={consUappIdMenu}
          consUappIdLabel={consUappIdLabel}
          setConsUappIdLabel={setConsUappIdLabel}
          consUappIdValue={consUappIdValue}
          setConsUappIdValue={setConsUappIdValue}
          consStdMenu={consStdMenu}
          consStdLabel={consStdLabel}
          setConsStdLabel={setConsStdLabel}
          consStdValue={consStdValue}
          setConsStdValue={setConsStdValue}
          consUniMenu={consUniMenu}
          consUniLabel={consUniLabel}
          setConsUniLabel={setConsUniLabel}
          consUniValue={consUniValue}
          setConsUniValue={setConsUniValue}
          consPhnMenu={consPhnMenu}
          consPhnLabel={consPhnLabel}
          setConsPhnLabel={setConsPhnLabel}
          consPhnValue={consPhnValue}
          setConsPhnValue={setConsPhnValue}
        />
      ) : parseInt(localStorage.getItem("userType")) === userTypes?.Student ? (
        <StudentFilter
          applicationMenu={applicationMenu}
          applicationLabel={applicationLabel}
          setApplicationLabel={setApplicationLabel}
          applicationValue={applicationValue}
          setApplicationValue={setApplicationValue}
          offerMenu={offerMenu}
          offerLabel={offerLabel}
          setOfferLabel={setOfferLabel}
          offerValue={offerValue}
          setOfferValue={setOfferValue}
          enrollMenu={enrollMenu}
          enrollLabel={enrollLabel}
          setEnrollLabel={setEnrollLabel}
          enrollValue={enrollValue}
          setEnrollValue={setEnrollValue}
          intakeMenu={intakeMenu}
          intakeLabel={intakeLabel}
          setIntakeLabel={setIntakeLabel}
          intakeValue={intakeValue}
          setIntakeValue={setIntakeValue}
          interviewMenu={interviewMenu}
          interviewLabel={interviewLabel}
          setInterviewLabel={setInterviewLabel}
          interviewValue={interviewValue}
          setInterviewValue={setInterviewValue}
          elptMenu={elptMenu}
          elptLabel={elptLabel}
          setElptLabel={setElptLabel}
          elptValue={elptValue}
          setElptValue={setElptValue}
          financeMenu={financeMenu}
          financeLabel={financeLabel}
          setFinanceLabel={setFinanceLabel}
          financeValue={financeValue}
          setFinanceValue={setFinanceValue}
          studentUniMenu={studentUniMenu}
          studentUniLabel={studentUniLabel}
          setStudentUniLabel={setStudentUniLabel}
          studentUniValue={studentUniValue}
          setStudentUniValue={setStudentUniValue}
          studentConsMenu={studentConsMenu}
          studentConsLabel={studentConsLabel}
          setStudentConsLabel={setStudentConsLabel}
          studentConsValue={studentConsValue}
          setStudentConsValue={setStudentConsValue}
        />
      ) : parseInt(localStorage.getItem("userType")) === userTypes?.AdmissionManager ? (
        <AdmissionManagerFilter
          applicationMenu={applicationMenu}
          applicationLabel={applicationLabel}
          setApplicationLabel={setApplicationLabel}
          applicationValue={applicationValue}
          setApplicationValue={setApplicationValue}
          offerMenu={offerMenu}
          offerLabel={offerLabel}
          setOfferLabel={setOfferLabel}
          offerValue={offerValue}
          setOfferValue={setOfferValue}
          enrollMenu={enrollMenu}
          enrollLabel={enrollLabel}
          setEnrollLabel={setEnrollLabel}
          enrollValue={enrollValue}
          setEnrollValue={setEnrollValue}
          intakeMenu={intakeMenu}
          intakeLabel={intakeLabel}
          setIntakeLabel={setIntakeLabel}
          intakeValue={intakeValue}
          setIntakeValue={setIntakeValue}
          interviewMenu={interviewMenu}
          interviewLabel={interviewLabel}
          setInterviewLabel={setInterviewLabel}
          interviewValue={interviewValue}
          setInterviewValue={setInterviewValue}
          elptMenu={elptMenu}
          elptLabel={elptLabel}
          setElptLabel={setElptLabel}
          elptValue={elptValue}
          setElptValue={setElptValue}
          financeMenu={financeMenu}
          financeLabel={financeLabel}
          setFinanceLabel={setFinanceLabel}
          financeValue={financeValue}
          setFinanceValue={setFinanceValue}
          managerUappIdMenu={managerUappIdMenu}
          managerUappIdLabel={managerUappIdLabel}
          setmanagerUappIdLabel={setmanagerUappIdLabel}
          managerUappIdValue={managerUappIdValue}
          setmanagerUappIdValue={setmanagerUappIdValue}
          managerStdMenu={managerStdMenu}
          managerStdLabel={managerStdLabel}
          setManagerStdLabel={setManagerStdLabel}
          managerStdValue={managerStdValue}
          setManagerStdValue={setManagerStdValue}
          managerConsMenu={managerConsMenu}
          managerConsLabel={managerConsLabel}
          setManagerConsLabel={setManagerConsLabel}
          managerConsValue={managerConsValue}
          setManagerConsValue={setManagerConsValue}
          managerUniMenu={managerUniMenu}
          managerUniLabel={managerUniLabel}
          setManagerUniLabel={setManagerUniLabel}
          managerUniValue={managerUniValue}
          setManagerUniValue={setManagerUniValue}
          managerPhnMenu={managerPhnMenu}
          managerPhnLabel={managerPhnLabel}
          setManagerPhnLabel={setManagerPhnLabel}
          managerPhnValue={managerPhnValue}
          setManagerPhnValue={setManagerPhnValue}
        />
      ) : parseInt(localStorage.getItem("userType")) === userTypes?.ProviderAdmin ? (
        <ProviderAdminFilter
          applicationMenu={applicationMenu}
          applicationLabel={applicationLabel}
          setApplicationLabel={setApplicationLabel}
          applicationValue={applicationValue}
          setApplicationValue={setApplicationValue}
          offerMenu={offerMenu}
          offerLabel={offerLabel}
          setOfferLabel={setOfferLabel}
          offerValue={offerValue}
          setOfferValue={setOfferValue}
          enrollMenu={enrollMenu}
          enrollLabel={enrollLabel}
          setEnrollLabel={setEnrollLabel}
          enrollValue={enrollValue}
          setEnrollValue={setEnrollValue}
          intakeMenu={intakeMenu}
          intakeLabel={intakeLabel}
          setIntakeLabel={setIntakeLabel}
          intakeValue={intakeValue}
          setIntakeValue={setIntakeValue}
          interviewMenu={interviewMenu}
          interviewLabel={interviewLabel}
          setInterviewLabel={setInterviewLabel}
          interviewValue={interviewValue}
          setInterviewValue={setInterviewValue}
          elptMenu={elptMenu}
          elptLabel={elptLabel}
          setElptLabel={setElptLabel}
          elptValue={elptValue}
          setElptValue={setElptValue}
          financeMenu={financeMenu}
          financeLabel={financeLabel}
          setFinanceLabel={setFinanceLabel}
          financeValue={financeValue}
          setFinanceValue={setFinanceValue}
          providerUappIdMenu={providerUappIdMenu}
          providerUappIdLabel={providerUappIdLabel}
          setProviderUappIdLabel={setProviderUappIdLabel}
          providerUappIdValue={providerUappIdValue}
          setProviderUappIdValue={setProviderUappIdValue}
          providerStdMenu={providerStdMenu}
          providerStdLabel={providerStdLabel}
          setProviderStdLabel={setProviderStdLabel}
          providerStdvalue={providerStdvalue}
          setProviderStdValue={setProviderStdValue}
          providerConsMenu={providerConsMenu}
          providerConsLabel={providerConsLabel}
          setProviderConsLabel={setProviderConsLabel}
          providerConsValue={providerConsValue}
          setProviderConsValue={setProviderConsValue}
          providerUniMenu={providerUniMenu}
          providerUniLabel={providerUniLabel}
          setProviderUniLabel={setProviderUniLabel}
          providerUniValue={providerUniValue}
          setProviderUniValue={setProviderUniValue}
          providerPhoneMenu={providerPhoneMenu}
          providerPhoneLabel={providerPhoneLabel}
          setproviderPhoneLabel={setproviderPhoneLabel}
          providerPhoneValue={providerPhoneValue}
          setproviderPhoneValue={setproviderPhoneValue}
        />
      ) : (
        <CommonFilter
          applicationMenu={applicationMenu}
          applicationLabel={applicationLabel}
          setApplicationLabel={setApplicationLabel}
          applicationValue={applicationValue}
          setApplicationValue={setApplicationValue}
          offerMenu={offerMenu}
          offerLabel={offerLabel}
          setOfferLabel={setOfferLabel}
          offerValue={offerValue}
          setOfferValue={setOfferValue}
          enrollMenu={enrollMenu}
          enrollLabel={enrollLabel}
          setEnrollLabel={setEnrollLabel}
          enrollValue={enrollValue}
          setEnrollValue={setEnrollValue}
          intakeMenu={intakeMenu}
          intakeLabel={intakeLabel}
          setIntakeLabel={setIntakeLabel}
          intakeValue={intakeValue}
          setIntakeValue={setIntakeValue}
          interviewMenu={interviewMenu}
          interviewLabel={interviewLabel}
          setInterviewLabel={setInterviewLabel}
          interviewValue={interviewValue}
          setInterviewValue={setInterviewValue}
          elptMenu={elptMenu}
          elptLabel={elptLabel}
          setElptLabel={setElptLabel}
          elptValue={elptValue}
          setElptValue={setElptValue}
          financeMenu={financeMenu}
          financeLabel={financeLabel}
          setFinanceLabel={setFinanceLabel}
          financeValue={financeValue}
          setFinanceValue={setFinanceValue}
          commonUappIdMenu={commonUappIdMenu}
          commonUappIdLabel={commonUappIdLabel}
          setCommonUappIdLabel={setCommonUappIdLabel}
          commonUappIdValue={commonUappIdValue}
          setCommonUappIdValue={setCommonUappIdValue}
          commonUniMenu={commonUniMenu}
          commonUniLabel={commonUniLabel}
          setCommonUniLabel={setCommonUniLabel}
          commonUniValue={commonUniValue}
          setCommonUniValue={setCommonUniValue}
          commonConsultantMenu={commonConsultantMenu}
          consultantLabel={consultantLabel}
          setConsultantLabel={setConsultantLabel}
          consultantValue={consultantValue}
          setConsultantValue={setConsultantValue}
          commonStdMenu={commonStdMenu}
          commonStdLabel={commonStdLabel}
          setCommonStdLabel={setCommonStdLabel}
          setCommonStdValue={setCommonStdValue}
          commonStdValue={commonStdValue}
          commonPhoneMenu={commonPhoneMenu}
          setCommonPhoneValue={setCommonPhoneValue}
          commonPhoneValue={commonPhoneValue}
          setCommonPhoneLabel={setCommonPhoneLabel}
          commonPhoneLabel={commonPhoneLabel}
        />
      )}
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
                <div className="me-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">Order By :</div>
                    <div>
                      <Select
                        options={orderName}
                        value={{ label: orderLabel, value: orderValue }}
                        onChange={(opt) => selectOrder(opt.label, opt.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="me-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">Showing :</div>
                    <div>
                      <Select
                        options={dataSizeName}
                        value={{ label: dataPerPage, value: dataPerPage }}
                        onChange={(opt) => selectDataSize(opt.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="me-3">
                  <Dropdown
                    className="uapp-dropdown"
                    style={{ float: "right" }}
                    isOpen={dropdownOpen}
                    toggle={toggle}
                  >
                    <DropdownToggle caret>
                      <i className="fas fa-print fs-7"></i>
                    </DropdownToggle>
                    <DropdownMenu className="bg-dd">
                      <div className="d-flex justify-content-around align-items-center mt-2">
                        <div className="text-light cursor-pointer">
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
                        <div className="text-light cursor-pointer">
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

                {/* <div className="me-3">
                <Dropdown
                    className="uapp-dropdown"
                    style={{ float: "right" }}
                    isOpen={dropdownOpen1}
                    toggle={toggle1}
                  >
                    <DropdownToggle caret>
                      <i className="fas fa-bars"></i>
                    </DropdownToggle>
                    <DropdownMenu className='bg-dd'>
                        
                      <div className='d-flex justify-content-around align-items-center mt-2'>
                        <div className='text-light cursor-pointer'>
                           <p onClick={handleExportXLSX}><i className="fas fa-file-excel"></i></p>
                        </div>
                        <div className='text-light cursor-pointer'>
                          <ReactToPrint
                             trigger={() => <p><i className="fas fa-file-pdf"></i></p>}
                             content={() => componentRef.current}
                           />
                        </div>
                      </div>

                    </DropdownMenu>
                  </Dropdown>
                </div> */}
              </div>
            </Col>
          </Row>

          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) : (
            <div className="table-responsive mb-3" ref={componentRef}>
              <Table
                id="table-to-xls"
                style={{ verticalAlign: "middle" }}
                className="table-sm table-bordered"
              >
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ verticalAlign: "middle" }}>UAPP Id</th>
                    <th style={{ verticalAlign: "middle" }}>Applicant</th>
                    <th style={{ verticalAlign: "middle" }}>Contact</th>
                    <th style={{ verticalAlign: "middle" }}>University</th>
                    <th style={{ verticalAlign: "middle" }}>Campus</th>
                    <th style={{ verticalAlign: "middle" }}>Course</th>
                    <th style={{ verticalAlign: "middle" }}>Intake</th>
                    <th style={{ verticalAlign: "middle" }}>
                      Uni Application Date
                    </th>
                    <th style={{ verticalAlign: "middle" }}>Status</th>
                    <th style={{ verticalAlign: "middle" }}>Offer</th>
                    <th style={{ verticalAlign: "middle" }}>Interview</th>
                    <th style={{ verticalAlign: "middle" }}>ELPT</th>
                    <th style={{ verticalAlign: "middle" }}>
                      Enrolment Status
                    </th>
                    <th style={{ verticalAlign: "middle" }}>SLCS</th>
                    <th style={{ verticalAlign: "middle" }}>Consultant</th>
                    {/* <th>Msg</th> */}
                    <th
                      style={{ verticalAlign: "middle" }}
                      className="text-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applicationList?.map((app, i) => (
                    <tr key={i}>
                      <td style={{ verticalAlign: "middle" }}>{app?.uappId}</td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.studentName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.studentPhone} <br />
                        {app?.studentEmail}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.universityName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.campusName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.subjectName}
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {app?.intakeName}
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {app?.applicationDate ? (
                          <>{handleDate(app?.applicationDate)}</>
                        ) : null}
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {app?.applicationStatusName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.offerStatusName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.interviewStatusName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.elptStatusName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.enrollmentStatusName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.studentFinanceName}
                      </td>

                      <td style={{ verticalAlign: "middle" }}>
                        {app?.consultantName}
                      </td>

                      <td
                        style={{ verticalAlign: "middle" }}
                        className="text-center"
                      >
                        {/* <ButtonGroup variant="text" className='d-flex flex-column'> */}

                        <LinkSpanButton
                          url={{
                            pathname: "/universityList",
                            // universityType: uniType?.id,
                            // universityName: uniType?.name,
                          }}
                          className={"badge badge-pill badge-primary p-2 px-3"}
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
                          //   func={()=> toggleDanger(student)}
                        />

                        {/* </ButtonGroup> */}

                        {/* <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                        <ModalBody>
                          <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                        </ModalBody>
        
                        <ModalFooter>
                          <Button  color="danger" onClick={()=>handleDeleteData(student)}>YES</Button>
                          <Button onClick={() => setDeleteModal(false)}>NO</Button>
                        </ModalFooter>
                     </Modal> */}
                      </td>
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

export default Applications;
