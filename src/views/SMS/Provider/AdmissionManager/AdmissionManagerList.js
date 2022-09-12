import React, { useEffect, useState, Component, useRef } from "react";
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

// import { permissionList } from '../../../../constants/AuthorizationConstant';
import { permissionList } from "../../../../constants/AuthorizationConstant";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import * as XLSX from "xlsx/xlsx.mjs";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from "react-to-print";

import Select from "react-select";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import get from "../../../../helpers/get";
import { useToasts } from "react-toast-notifications";
import remove from "../../../../helpers/remove";
import Pagination from "../../../SMS/Pagination/Pagination.jsx";

import ButtonForFunction from "../../Components/ButtonForFunction";
import LinkButton from "../../Components/LinkButton";
import { userTypes } from "../../../../constants/userTypeConstant";

const AdmissionManagerList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [entity, setEntity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [serialNum, setSerialNum] = useState(1);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  const [callApi, setCallApi] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const [providerDD, setProviderDD] = useState([]);

  const [managerList, setManagerList] = useState([]);

  const [managerName, setManagerName] = useState('');
  const [managerId, setManagerId] = useState(0);
  const [deleteData, setDeleteData] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);

  const [providerLabel, setProviderLabel] = useState("Select Provider");
  const [providerValue, setProviderValue] = useState(0);

  const location = useLocation();
  const history = useHistory();
  const { addToast } = useToasts();

  const userType = localStorage.getItem("userType");
  const referenceId = localStorage.getItem("referenceId");
  const permissions = JSON.parse(localStorage.getItem("permissions"));

  useEffect(() => {
    get("ProviderDD/Index").then((res) => {
      setProviderDD(res);
    });

    // setLoading(true);
    // setLoading(false);

    get(`AdmissionManager/GetPaginated?page=${currentPage}&pageSize=${dataPerPage}&providerId=${providerValue}&search=${searchStr}`).then(res=>{
        console.log(res);
        setManagerList(res?.models);
        setEntity(res?.totalEntity);
        setSerialNum(res?.firstSerialNumber);
        setLoading(false);
    })
  }, [currentPage, dataPerPage, providerValue, searchStr, success, loading]);

  const providerMenu = providerDD.map((provider) => ({
    label: provider?.name,
    value: provider?.id,
  }));

  const selectProvider = (label, value) => {
    setProviderLabel(label);
    setProviderValue(value);
  }

  // user select data per page
  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

  const selectDataSize = (value) => {
    setLoading(true);
    setDataPerPage(value);
    setCallApi((prev) => !prev);
  };

  //  change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

  // on enter press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCurrentPage(1);
      setCallApi((prev) => !prev);
    }
  };

  // search handler
  const handleSearch = () => {
    setCurrentPage(1);
    setCallApi((prev) => !prev);
  };

  const searchValue = (e) => {
    setSearchStr(e.target.value);
    handleSearch();
  };

  const handleExportXLSX = () => {
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(managerList);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  const componentRef = useRef();

  // toggle dropdown
  const toggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  // on clear
  const handleClearSearch = () => {
    setProviderLabel("Select Provider");
    setProviderValue(0);
    setCallApi((prev) => !prev);
    setSearchStr("");
    history.replace({
      universityId: null,
    });
  };

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };

  const redirectToAssignPage = (providerId, managerId) =>{
    history.push({
        pathname: `/assignUniversity/${providerId}/${managerId}`,
        managerList: "managerList"
    });
  }

  const handleViewAdmissionManager = (managerId, providerId) =>{
    history.push({
        pathname: `/providerAdmissionManager/${managerId}/${providerId}`,
        managerList: "managerList"
    });
  }

  const updateAdmissionManager = (managerId, providerId) => {
    history.push({
        pathname: `/updateAdmissionManager/${managerId}/${providerId}`,
        managerList: "managerList"
    });
  };

  const toggleDelete = (manager) => {
    console.log("manager", manager);
    setManagerId(manager?.id);
    setManagerName(manager?.firstName);
    setDeleteData(manager);
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
    setManagerId(0);
    setManagerName('');
    setDeleteData({});
  };

  const handleDelete = () => {
    remove(`AdmissionManager/Delete/${deleteData?.id}`).then((res) => {
      addToast(res, {
        appearance: "error",
        autoDismiss: true,
      });
      setDeleteData({});
      setDeleteModal(false);
      setManagerId(0);
      setManagerName('');
      setSuccess(!success);
    });
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Admission Manager List</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className="uapp-employee-search">
        <CardBody className="search-card-body">
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <Select
                options={providerMenu}
                value={{ label: providerLabel, value: providerValue }}
                onChange={(opt) => selectProvider(opt.label, opt.value)}
                name="providerId"
                id="providerId"
              />
            </Col>

            <Col lg="6" md="6" sm="6" xs="12">
              <Input
                style={{ height: "2.7rem" }}
                type="text"
                name="search"
                value={searchStr}
                id="search"
                placeholder="Name"
                onChange={searchValue}
                onKeyDown={handleKeyDown}
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

                {/* <div className="mt-2 mx-1">
                <span className="btn btn-primary">Export</span>
              </div> */}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="uapp-employee-search">
        <CardBody>
          <Row className="mb-3">
            <Col lg="6" md="5" sm="6" xs="4">
              {/* {
                    permissions?.includes(permissionList?.Add_subject) ?
              <ButtonForFunction
                func={handleAddSubject}
                className={"btn btn-uapp-add "}
                icon={<i className="fas fa-plus"></i>}
                name={" Add New"}
                permission={6}
              />
              :
              null
              } */}
            </Col>

            <Col lg="6" md="7" sm="6" xs="8">
              <Row>
                <Col lg="5" md="6"></Col>
                <Col lg="2" md="3" sm="5" xs="5" className="mt-2">
                  Showing :
                </Col>
                <Col md="3" sm="7" xs="7">
                  <Select
                    options={dataSizeName}
                    value={{ label: dataPerPage, value: dataPerPage }}
                    onChange={(opt) => selectDataSize(opt.value)}
                  />
                </Col>
                <Col lg="2">
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
                      {/* <DropdownItem>Export All</DropdownItem> */}
                      {/* <DropdownItem divider /> */}
                      {/* <DropdownItem> */}

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

                      {/* <ReactHTMLTableToExcel
                          id="test-table-xls-button"
                          className="download-table-xls-button button-export"
                          table="table-to-xls"
                          filename="tablexls"
                          sheet="tablexls"
                          buttonText={<i class="far fa-file-excel"></i>}/> */}

                      {/* <Button onClick={onDownload}> Export excel </Button> */}

                      {/* </DropdownItem> */}

                      {/* <DropdownItem> */}

                      {/* </DropdownItem> */}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>

          {loading ? (
            <div class="d-flex justify-content-center mb-5">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="table-responsive" ref={componentRef}>
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>ID</th>
                    <th>Full Name</th>
                    {/* <th>Description</th>
                    <th>Duration</th> */}
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Assign University</th>
                    <th>Application List</th>
                    {/* <th>Intakes</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {managerList?.map((manager, i) => (
                    <tr key={manager.id} style={{ textAlign: "center" }}>
                      <th scope='row'>{serialNum + i}</th>
                      <td>
                        {manager?.sequenceId}
                      </td>

                      <td>
                        {manager?.firstName}{" "}{manager?.lastName}
                      </td>

                      <td>
                        {manager?.email}
                      </td>

                      <td>
                        {manager?.phoneNumber}
                      </td>

                      <td>
                      {" "}
                            <span
                              className="badge badge-secondary"
                              style={{ cursor: "pointer" }}
                            >
                              <span onClick={()=>redirectToAssignPage(manager?.provider?.id, manager?.id)} className="text-decoration-none">View</span>
                            </span>{" "}
                      </td>

                      <td>
                        {0}
                      </td>

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                        
                        {/* <Link to={`/providerAdmissionManager/${manager?.id}/${id}`}>
                           <Button color="primary" className="btn-sm me-1">
                       
                          <i className="fas fa-eye"></i>
                         
                           </Button>
                           </Link> */}
                        
                        <ButtonForFunction 
                          func={()=>handleViewAdmissionManager(manager?.id, manager?.provider?.id)}
                          color={"primary"}
                          className={"mx-1 btn-sm"}
                          icon={<i className="fas fa-eye"></i>}
                          permission={6}
                        />
                      
                          {permissions?.includes(
                              permissionList?.Update_Admission_manager
                            ) ? (
                        //   <LinkButton
                        //     url={`/updateAdmissionManager/${manager?.id}/${manager?.provider?.id}`}
                        //     color={"warning"}
                        //     className={"mx-1 btn-sm"}
                        //     icon={<i className="fas fa-edit"></i>}
                        //     permission={6}
                        //   />
                          <ButtonForFunction
                            func={() => updateAdmissionManager(manager?.id, manager?.provider?.id)}
                            color={"warning"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-edit"></i>}
                            permission={6}
                          />
                            )
                          :
                          null}

                          

                          {
                            permissions?.includes(permissionList?.Delete_subject) ?
                          <ButtonForFunction
                            func={() => toggleDelete(manager)}
                            color={"danger"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-trash-alt"></i>}
                            permission={6}
                          />
                          :
                          null
                           }



                        </ButtonGroup>

                     
                        <Modal
                              isOpen={deleteModal}
                              toggle={closeDeleteModal}
                              className="uapp-modal"
                            >
                              <ModalBody>
                                <p>
                                  Are You Sure to Delete this <b>{managerName}</b> ? Once Deleted it
                                  can't be Undone!
                                </p>
                              </ModalBody>

                              <ModalFooter>
                                <Button color="danger" onClick={handleDelete}>
                                  YES
                                </Button>
                                <Button color="primary" onClick={closeDeleteModal}>NO</Button>
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

          {/* <Row className="mb-3">
            <Col lg="6">
              
            </Col>

            <Col lg="6" md="7" sm="6" xs="8">
               <div className='d-flex justify-content-end'>
               <Button
                   onClick={handleNextTab}
                   className="btn btn-uapp-add "
                    >
                    {" "}
                     Next tab
                    {" "}
               </Button>
               </div>
             </Col>
          </Row> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default AdmissionManagerList;
