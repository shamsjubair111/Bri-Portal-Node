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
import * as XLSX from "xlsx/xlsx.mjs";
import ReactToPrint from "react-to-print";
import LinkSpanButton from "../Components/LinkSpanButton.js";
import CommonFilter from "./CommonFilter.js";
import ConsultantFilter from "./ConsultantFilter.js";
import StudentFilter from "./StudentFilter.js";
import AdmissionManagerFilter from "./AdmissionManagerFilter.js";
import ProviderAdminFilter from "./ProviderAdminFilter.js";

const Applications = () => {

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [callApi, setCallApi] = useState(false);
  const [orderLabel, setOrderLabel] = useState('Select order by');
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
  const [commonUappIdDD, setCommonUappIdDD] = useState([]);
  const [commonUniDD, setCommonUniDD] = useState([]);
  const [commonConsultantDD, setCommonConsultantDD] = useState([]);
  const [commonStdDD, setCommonStdDD] = useState([]);
  const [commonPhoneDD, setCommonPhoneDD] = useState([]);

  const history = useHistory();
  const { addToast } = useToasts();

  const userId = "";
  // const userId = "consultant";
//   const userId = "student";
//   const userId = "manager";
//   const userId = "provider";

  useEffect(()=>{
    get("ApplicationStatusDD/Index").then(res=>{
        setApplicationDD(res);
    });

    get("OfferStatusDD/Index").then(res =>{
        setOfferDD(res);
    });

    get("EnrollmentStatusDD/Index").then(res=>{
        setEnrollDD(res);
    });

    get("IntakeDD/Index").then(res=>{
        setIntakeDD(res);
    });

    get("InterviewStatusDD/Index").then(res=>{
        setInterviewDD(res);
    });

    get("ElptStatusDD/Index").then(res=>{
        setElptDD(res);
    });
    get("StudentFinanceStatusDD/Index").then(res=>{
        setFinanceDD(res);
    });
    // for common
    get("CommonApplicationFilterDD/UappId").then(res=>{
        setCommonUappIdDD(res);
    });
    get("CommonApplicationFilterDD/University").then(res=>{
        setCommonUniDD(res);
    });
    get("CommonApplicationFilterDD/Consultant").then(res=>{
        setCommonConsultantDD(res);
    });
    get("CommonApplicationFilterDD/Student").then(res=>{
        setCommonStdDD(res);
    });
    get("CommonApplicationFilterDD/PhoneNumber").then(res=>{
        setCommonPhoneDD(res);
    });

  },[])

  // user select order
  const orderArr = [
    {
      label: 'Newest',
      value: 1 
    },
    {
      label: 'Oldest',
      value: 2 
    },
    {
      label: 'A-Z',
      value: 3 
    },
    {
      label: 'Z-A',
      value: 4 
    }
  ];

  const orderName = orderArr.map((dsn) => ({ label: dsn.label, value: dsn.value }));
  console.log("filterValue", orderName);

  const selectOrder = (label, value) => {
    // console.log("value", label, value);
    // setLoading(true);
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
    history.push("/");
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Applications</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>
      {/* filter */}
      {userId === "consultant" ? (
        <ConsultantFilter 
           applicationDD={applicationDD}
           offerDD={offerDD}
           enrollDD={enrollDD}
           intakeDD={intakeDD}
           interviewDD={interviewDD}
           elptDD={elptDD}
           financeDD={financeDD}
        />
      ) : userId === "student" ? (
        <StudentFilter
           applicationDD={applicationDD}
           offerDD={offerDD}
           enrollDD={enrollDD}
           intakeDD={intakeDD}
           interviewDD={interviewDD}
           elptDD={elptDD}
           financeDD={financeDD}
         />
      ) : userId === "manager" ? (
        <AdmissionManagerFilter 
           applicationDD={applicationDD}
           offerDD={offerDD}
           enrollDD={enrollDD}
           intakeDD={intakeDD}
           interviewDD={interviewDD}
           elptDD={elptDD}
           financeDD={financeDD}
        />
      ) : userId === "provider" ? (
        <ProviderAdminFilter 
           applicationDD={applicationDD}
           offerDD={offerDD}
           enrollDD={enrollDD}
           intakeDD={intakeDD}
           interviewDD={interviewDD}
           elptDD={elptDD}
           financeDD={financeDD}
        />
      ) : (
        <CommonFilter 
           applicationDD={applicationDD}
           offerDD={offerDD}
           enrollDD={enrollDD}
           intakeDD={intakeDD}
           interviewDD={interviewDD}
           elptDD={elptDD}
           financeDD={financeDD}
           commonUappIdDD={commonUappIdDD}
           commonUniDD={commonUniDD}
           commonConsultantDD={commonConsultantDD}
           commonStdDD={commonStdDD}
           commonPhoneDD={commonPhoneDD}
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
                    <div className="me-2">
                      Order By :
                    </div>
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
                    <div className="me-2">
                      Showing :
                    </div>
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

          <div className="table-responsive mb-3" ref={componentRef}>
            <Table className="table-sm table-bordered">
              <thead className="thead-uapp-bg">
                <tr style={{ textAlign: "center" }}>
                  <th>UAPP ID</th>
                  <th>Applicant</th>
                  <th>Contact</th>
                  <th>University</th>
                  <th>Course</th>
                  <th>Intake</th>
                  <th style={{ width: "10%" }}>Uni Application Date</th>
                  <th>Status</th>
                  <th>Offer</th>
                  <th style={{ width: "33%" }}>Interview</th>
                  <th>ELPT</th>
                  <th>Enrolment Status</th>
                  <th>SLCS</th>
                  <th>Consultant</th>
                  {/* <th>Msg</th> */}
                  <th style={{ width: "8%" }} className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {studentData?.map((student, i) => ( */}
                <tr>
                  {/* <th scope='row'>{1}</th> */}
                  <td>STD003082</td>

                  <td>Mr Abul Kalam</td>

                  <td>
                    07927838390 <br />
                    abulkalam03@gmail.com
                  </td>

                  <td>London Churchill College</td>

                  <td>HND In Hospitality Management</td>
                  <td>September 2022</td>
                  <td style={{ width: "10%" }}>12-08-2022</td>
                  <td>New application</td>

                  <td>...</td>

                  <td style={{ width: "33%" }}>
                    Booked at 02:00 PM on Tuesday, August 23, 2022
                  </td>

                  <td>...</td>

                  <td>...</td>

                  <td>Not Applied</td>

                  <td>Irina stefana</td>

                  <td style={{ width: "8%" }} className="text-center">
                    {/* <ButtonGroup variant="text" className='d-flex flex-column'> */}

                    <LinkSpanButton
                      url={{
                        pathname: "/universityList",
                        // universityType: uniType?.id,
                        // universityName: uniType?.name,
                      }}
                      className={"badge badge-pill badge-primary p-2 px-3 mt-2"}
                      data={2}
                      permission={6}
                    />

                    <LinkButton
                      // url={`/studentProfile/${student?.id}`}
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

                <tr>
                  {/* <th scope='row'>{1}</th> */}
                  <td>STD003082</td>

                  <td>Mr Abul Kalam</td>

                  <td>
                    07927838390 <br />
                    abulkalam03@gmail.com
                  </td>

                  <td>London Churchill College</td>

                  <td>HND In Hospitality Management</td>
                  <td>September 2022</td>
                  <td style={{ width: "10%" }}>12-08-2022</td>
                  <td>New application</td>

                  <td>...</td>

                  <td style={{ width: "33%" }}>
                    Booked at 02:00 PM on Tuesday, August 23, 2022
                  </td>

                  <td>...</td>

                  <td>...</td>

                  <td>Not Applied</td>

                  <td>Irina stefana</td>

                  <td style={{ width: "8%" }} className="text-center">
                    {/* <ButtonGroup variant="text" className='d-flex flex-column'> */}

                    <LinkSpanButton
                      url={{
                        pathname: "/universityList",
                        // universityType: uniType?.id,
                        // universityName: uniType?.name,
                      }}
                      className={"badge badge-pill badge-primary p-2 px-3 mt-2"}
                      data={2}
                      permission={6}
                    />

                    <LinkButton
                      // url={`/studentProfile/${student?.id}`}
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
                {/* ))} */}
              </tbody>
            </Table>
          </div>
         
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
