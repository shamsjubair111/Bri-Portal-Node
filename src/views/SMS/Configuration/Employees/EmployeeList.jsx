import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import {
  Card,
  CardBody,
  CardHeader,
  ButtonGroup,
  Button,
  Input,
  Col,
  Row,
  Table,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalFooter,
  ModalBody,
} from "reactstrap";
import Select from "react-select";
import Pagination from "../../Pagination/Pagination.jsx";
import { useHistory, useLocation } from "react-router";
import { useToasts } from "react-toast-notifications";

import get from "../../../../helpers/get.js";
import remove from "../../../../helpers/remove.js";
import { Link } from "react-router-dom";

import ReactTableConvertToXl from "../../ReactTableConvertToXl/ReactTableConvertToXl";
import * as XLSX from "xlsx/xlsx.mjs";
import ReactToPrint from "react-to-print";
import ButtonForFunction from "../../Components/ButtonForFunction.js";
import LinkButton from "../../Components/LinkButton.js";
import { permissionList } from "../../../../constants/AuthorizationConstant.js";

const EmployeeList = (props) => {
  const { type } = useParams();
  const history = useHistory();
  const [employeeList, setEmployeeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeeName, setEmployeeName] = useState("Select Employee Type");
  const [employeeId, setEmployeeId] = useState(0);
  const [searchStr, setSearchStr] = useState("");
  const [dataPerPage, setDataPerPage] = useState(15);
  const [entity, setEntity] = useState(0);
  const [callApi, setCallApi] = useState(false);
  const [serialNum, setSerialNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const employeeTypeList = props.employeeTypeList[0];
  const location = useLocation();
  const { addToast } = useToasts();
  const [deleteModal, setDeleteModal] = useState(false);

  const [success, setSuccess] = useState(false);

  const [empList, setEmpList] = useState([]);
  const [empLabel, setEmpLabel] = useState("Select Employee Type");
  const [empValue, setEmpValue] = useState(0);
  const [data, setData] = useState({});

  const permissions = JSON.parse(localStorage.getItem("permissions"));

  // useEffect(()=>{
  //   if(location.id != undefined){
  //     localStorage.setItem('locationId', location.id);
  //     setEmployeeName(location.name);
  //   }
  // },[])

  // const empId
  // user select data per page
  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

  const selectDataSize = (value) => {
    setLoading(true);
    setDataPerPage(value);
    setCallApi((prev) => !prev);
  };

  const employeeTypeName = employeeTypeList?.map((empt) => ({
    label: empt.name,
    value: empt.id,
  }));

  useEffect(() => {
    type
      ? get(
          `Employee/Index?page=${currentPage}&pagesize=${dataPerPage}&employeetypeid=${
            type ? type : empValue
          }&searchstring=${searchStr}`
        ).then((action) => {
         
          setEmployeeList(action.models);

          setEmpLabel(action?.models[0]?.employeeType?.name);

          setLoading(false);
          setEntity(action.totalEntity);
          setSerialNum(action.firstSerialNumber);
        })
      : get(
          `Employee/Index?page=${currentPage}&pagesize=${dataPerPage}&employeetypeid=${
            type ? type : empValue
          }&searchstring=${searchStr}`
        ).then((action) => {
          setEmployeeList(action.models);

          setLoading(false);
          setEntity(action.totalEntity);
          setSerialNum(action.firstSerialNumber);
        });

    get(`EmployeeTypeDD/Index`).then((res) => {
      setEmpList(res);
    });
  }, [
    callApi,
    currentPage,
    dataPerPage,
    employeeId,
    searchStr,
    entity,
    success,
  ]);

  const empOptiopns = empList?.map((emp) => ({
    label: emp?.name,
    value: emp?.id,
  }));

  const selectEmployeeType = (label, value) => {
    setEmpLabel(label);
    setEmpValue(value);
    setCallApi((prev) => !prev);
  };

  const toggleDanger = (data) => {
    setData(data);

    setDeleteModal(true);
  };

  const handleDeleteStaff = () => {
    remove(`Employee/Delete/${data?.id}`).then((res) => {
      addToast(res, {
        appearance: "error",
        // autoDismiss: true,
      });

      setDeleteModal(false);
      setSuccess(!success);
    });
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  // search handler
  const handleSearch = () => {
    setCurrentPage(1);
    setCallApi((prev) => !prev);
  };

  // on enter press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCurrentPage(1);
      setCallApi((prev) => !prev);
    }
  };

  //  on reset
  const handleReset = () => {
    setEmpLabel("Select Employee Type");
    setEmpValue(0);
    setSearchStr("");
    setCurrentPage(1);
    setCallApi((prev) => !prev);
  };

  //  change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

  // add staff handler
  const handleAddStaff = () => {
    history.push("/addStaffGeneralInfo");
  };

  // toggle dropdown
  const toggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  // employee click handler
  const handleEmpClick = (id) => {
    history.push({
      pathname: `/staffProfile/${id}`,
    });
  };

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };

  const handleExportXLSX = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(employeeList);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  const componentRef = useRef(employeeList);

  // const handleRedirectProfile = (id) => {
  //   localStorage.setItem('empId', id);
  //   history.push('/employeeProfile');
  // }

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Staff List</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className="uapp-employee-search">
        <CardBody>
          <Row>
            <Col className="uapp-mb" md="6" sm="12">
              <Select
                options={empOptiopns}
                value={{ label: empLabel, value: empValue }}
                onChange={(opt) => selectEmployeeType(opt.label, opt.value)}
                name="employeeType"
                id="employeeType"
                isDisabled={type ? true : false}
              />
            </Col>

            <Col className="uapp-mb" md="6" sm="12" style={{ display: "flex" }}>
              <Input
                style={{ height: "2.7rem" }}
                type="text"
                name="search"
                value={searchStr}
                id="search"
                placeholder="Id, Name, Email"
                onChange={(e) => setSearchStr(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="12" md="12" sm="12" xs="12">
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div
                  className="mt-1 mx-1 d-flex btn-clear"
                  onClick={handleReset}
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
          {/* new */}
          <Row className="mb-3">
            <Col lg="5" md="5" sm="4" xs="4">
              {permissions?.includes(permissionList?.Add_Staff) ? (
                <ButtonForFunction
                  func={handleAddStaff}
                  className={"btn btn-uapp-add "}
                  icon={<i className="fas fa-plus"></i>}
                  name={" Add New Staff"}
                />
              ) : null}
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
                    <DropdownMenu className="bg-dd">
                      <div className="d-flex justify-content-around align-items-center mt-2">
                        <div className="text-light cursor-pointer">
                          <p onClick={handleExportXLSX}>
                            <i className="fas fa-file-excel"></i>
                          </p>
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
                </div> */}
              </div>
            </Col>
          </Row>

          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) : (
            <div className="table-responsive" ref={componentRef}>
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>UAPP ID</th>
                    <th>Employee Type</th>
                    <th>Nationality</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList?.map((emp, i) => (
                    <tr key={emp.id} style={{ textAlign: "center" }}>
                      <th scope="row">{serialNum + i}</th>
                      <td>{emp.employeeViewId}</td>
                      <td>{emp.employeeType.name}</td>
                      <td>{emp.nationality.name}</td>
                      <td
                        className="cursor-pointer hyperlink-hover"
                        onClick={() => handleEmpClick(emp.id)}
                      >
                        {" "}
                        <span> {`${emp.firstName} ${emp.lastName}`} </span>{" "}
                      </td>
                      <td>{emp.email}</td>
                      <td>{emp.phoneNumber}</td>
                      <td className="text-center">
                        <ButtonGroup variant="text">
                          {/* <Link to= {`/universityDetails`}> */}
                          {/* <Button onClick={()=> handleRedirectProfile(emp?.id)} color="primary" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-eye"></i>{" "}
                          </Button> */}

                          <LinkButton
                            url={`staffProfile/${emp?.id}`}
                            color={"primary"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-eye"></i>}
                          />

                          {/* </Link>  */}
                          {/* <Link to={`/employeeGeneralInfo/${emp?.id}`}>
                          <Button  color="dark" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-edit"></i>{" "}
                          </Button>
                          </Link> */}

                          <LinkButton
                            url={`/staffGeneralInfo/${emp?.id}`}
                            color={"warning"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-edit"></i>}
                          />

                          {/* <Button onClick={toggleDanger} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}

                          <ButtonForFunction
                            func={() => toggleDanger(emp)}
                            color={"danger"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-trash-alt"></i>}
                          />
                        </ButtonGroup>

                        <Modal
                          isOpen={deleteModal}
                          toggle={closeDeleteModal}
                          className="uapp-modal"
                        >
                          <ModalBody>
                            <p>
                              Are You Sure to Delete this? Once Deleted it can't
                              be Undone!
                            </p>
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              color="danger"
                              onClick={() => handleDeleteStaff(emp?.id)}
                            >
                              YES
                            </Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
                          </ModalFooter>
                        </Modal>
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

const mapStateToProps = (state) => ({
  employeeTypeList: state.employeeTypeDataReducer.employeeType,
});
export default connect(mapStateToProps)(EmployeeList);
