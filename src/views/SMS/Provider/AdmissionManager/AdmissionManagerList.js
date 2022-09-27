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
  FormGroup,
  Form,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// import { permissionList } from '../../../../constants/AuthorizationConstant';
import { permissionList } from "../../../../constants/AuthorizationConstant";

import ReactTableConvertToXl from "../../ReactTableConvertToXl/ReactTableConvertToXl";
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
import put from "../../../../helpers/put";
import CustomButtonRipple from "../../Components/CustomButtonRipple";
import post from "../../../../helpers/post";
import loader from '../../../../assets/img/load.gif';

const AdmissionManagerList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [entity, setEntity] = useState(0);
 
  const [serialNum, setSerialNum] = useState(1);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  const [callApi, setCallApi] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const [providerDD, setProviderDD] = useState([]);

  const [managerList, setManagerList] = useState([]);

  const [managerName, setManagerName] = useState("");
  const [managerId, setManagerId] = useState(0);
  const [deleteData, setDeleteData] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [providerLabel, setProviderLabel] = useState("Select Provider");
  const [providerValue, setProviderValue] = useState(0);

  const [providerLabel2, setProviderLabel2] = useState("Select Provider");
  const [providerValue2, setProviderValue2] = useState(0);
  const [providerError, setProviderError] = useState(false);

  const [nameTitleDD, setNameTitleDD] = useState([]);

  const [nameTitleLabel, setNameTitleLabel] = useState("Select Title");
  const [nameTitleValue, setNameTitleValue] = useState(0);

  const [nameTitleError, setNameTitleError] = useState(false);

  const [countryList, setCountryList] = useState([]);
  const [uniCountryLabel, setUniCountryLabel] = useState("Select Country");
  const [uniCountryValue, setUniCountryValue] = useState(0);

  const [universityStates, setUniversityStates] = useState([]);

  const [countryError, setCountryError] = useState(false);

  const [uniStateLabel, setUniStateLabel] = useState("Select State");
  const [unistateValue, setUniStateValue] = useState(0);
  const [uniStateError, setUniStateError] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const { addToast } = useToasts();
  const [pass,setPass] = useState('');
    const [passError,setPassError] = useState('');

  const userType = localStorage.getItem("userType");
  const referenceId = localStorage.getItem("referenceId");
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    get("ProviderDD/Index").then((res) => {
      setProviderDD(res);
      setLoading(false);
    });

    get("NameTittleDD/index").then((res) => {
      setNameTitleDD(res);
      setLoading(false);
    });

    get("CountryDD/index").then((res) => {
      setCountryList(res);
      setLoading(false);
    });

    // setLoading(true);
    // setLoading(false);

    get(
      `AdmissionManager/GetPaginated?page=${currentPage}&pageSize=${dataPerPage}&providerId=${providerValue}&search=${searchStr}`
    ).then((res) => {
      console.log(res);
      setManagerList(res?.models);
      setEntity(res?.totalEntity);
      setSerialNum(res?.firstSerialNumber);
      setLoading(false);
    });
  }, [currentPage, dataPerPage, providerValue, searchStr, success, loading]);

  const providerMenu = providerDD.map((provider) => ({
    label: provider?.name,
    value: provider?.id,
  }));

  const selectProvider = (label, value) => {
    setProviderLabel(label);
    setProviderValue(value);
  };

  const selectProvider2 = (label, value) => {
    setProviderError(false);
    setProviderLabel2(label);
    setProviderValue2(value);
  };

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

  const handlePass = (e) => {
    setPassError('')
    setPass(e.target.value);
}

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

  const redirectToAssignPage = (providerId, managerId) => {
    history.push({
      pathname: `/assignUniversity/${providerId}/${managerId}`,
      managerList: "managerList",
    });
  };

  const handleViewAdmissionManager = (managerId, providerId) => {
    history.push({
      pathname: `/providerAdmissionManager/${managerId}/${providerId}`,
      managerList: "managerList",
    });
  };

  const updateAdmissionManager = (managerId, providerId) => {
    history.push({
      pathname: `/updateAdmissionManager/${managerId}/${providerId}`,
      managerList: "managerList",
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
    setManagerName("");
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
      setManagerName("");
      setSuccess(!success);
    });
  };

  const handleAccountStatus = (e, managerId) => {
    console.log(e.target.checked, managerId);
    // setChecked(e.target.checked);
    // console.log(check);

    const subData = {
      id: managerId,
    };

    console.log("SubDataaa", subData);

    put(`AdmissionManager/UpdateAccountStatus/${managerId}`, subData).then(
      (res) => {
        if (res?.status == 200) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          setSuccess(!success);
        }
      }
    );
  };

  const handleAddNew = () => {
    // setOfficerObj({});
    setModalOpen(true);
  };

  // on Close Modal
  const closeModal = () => {
    setNameTitleLabel("Select Title");
    setNameTitleValue(0);
    setUniCountryLabel("Select Country");
    setUniCountryValue(0);
    setUniStateLabel("Select State");
    setUniStateValue(0);
    setProviderLabel("Select Provider");
    setProviderValue(0);
    setProviderLabel2("Select Provider");
    setProviderValue2(0);
    setCountryError(false);
    setUniStateError(false);
    setNameTitleError(false);
    setProviderError(false);
    // setEmailError(true);
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);

    for (var i of subdata) {
      console.log(i);
    }

    if(providerValue2 === 0){
      setProviderError(true);
    }
    else if(nameTitleValue === 0){
      setNameTitleError(true);
    }
    else if(pass.length <6){
        setPassError('Password length can not be less than six digits');
    }
    else if(uniCountryValue === 0){
      setCountryError(true);
    }
    else if(unistateValue === 0){
      setUniStateError(true);
    }
    else{
        post(`AdmissionManager/Create`, subdata)
        .then(res => {
          setSuccess(!success);
          

          if (res?.status === 200 && res?.data?.isSuccess == true) {

            addToast(res.data.message, {
              appearance: 'success',
              autoDismiss: true,
            })
            closeModal();
            setModalOpen(false);
          }
          if (res?.status === 200 && res?.data?.isSuccess == false) {

            addToast(res.data.message, {
              appearance: 'error',
              autoDismiss: true,
            })
            
          }
        })

    }
  };

  const nameTitleMenu = nameTitleDD?.map((nameTitle) => ({
    label: nameTitle?.name,
    value: nameTitle?.id,
  }));

  //   select name title
  const selectNameTitle = (label, value) => {
    setNameTitleError(false);
    setNameTitleLabel(label);
    setNameTitleValue(value);
  };

  const countryDD = countryList.map((countryOptions) => ({
    label: countryOptions?.name,
    value: countryOptions?.id,
  }));

  // select University Country
  const selectUniCountry = (label, value) => {
    setUniCountryLabel(label);
    setUniCountryValue(value);
    setCountryError(false);
    setUniStateLabel("Select State");
    setUniStateValue(0);
    get(`StateDD/Index/${value}`).then((res) => {
      console.log("res", res);
      // setUniStateLabel(res.name)
      // setUniStateValue(res.id)
      setUniversityStates(res);
    });
  };

  const universityStateName = universityStates?.map((uniState) => ({
    label: uniState.name,
    value: uniState.id,
  }));

  // select University State
  const selectUniState = (label, value) => {
    setUniStateError(false);
    setUniStateLabel(label);
    setUniStateValue(value);
  };

  return (
    <div>
     {
      loading? 
      <div className="text-center">
        <img src={loader} className='img-fluid' alt="uapp_loader"/>

      </div>

      :

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
          {/* new */}
          <Row className="mb-3">
            <Col lg="5" md="5" sm="4" xs="4">
              <ButtonForFunction
                func={handleAddNew}
                className={"btn btn-uapp-add "}
                icon={<i className="fas fa-plus"></i>}
                name={" Add New Admission Manager"}
                permission={6}
              />

              <Modal
                isOpen={modalOpen}
                toggle={closeModal}
                className="uapp-modal4"
                style={{ height: "5px" }}
                size="lg"
              >
                <ModalHeader style={{ backgroundColor: "#1d94ab" }}>
                  <span className="text-white">Admission Manager</span>
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Provider <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Select
                          options={providerMenu}
                          value={{
                            label: providerLabel2,
                            value: providerValue2,
                          }}
                          onChange={(opt) =>
                            selectProvider2(opt.label, opt.value)
                          }
                          name="providerId"
                          id="providerId"
                        />

                        {providerError ? (
                          <span className="text-danger">
                            You must select provider.
                          </span>
                        ) : null}
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Title <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Select
                          options={nameTitleMenu}
                          value={{
                            label: nameTitleLabel,
                            value: nameTitleValue,
                          }}
                          onChange={(opt) =>
                            selectNameTitle(opt.label, opt.value)
                          }
                          name="nameTittleId"
                          id="nameTittleId"
                        />

                        {nameTitleError ? (
                          <span className="text-danger">
                            You must select title.
                          </span>
                        ) : null}
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          First Name <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Type First Name"
                          required
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Last Name <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Type Last Name"
                          required
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Email <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          // onBlur={handleEmail}
                          // defaultValue={officerObj?.email}
                          placeholder="Type Your Email"
                          required
                        />
                        {/* {
                      !emailError ? 

                      <span className='text-danger'>Email already exists.</span>
                      :
                      null

                    } */}
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Password <span className="text-danger">*</span>
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Type Your Password"
                          required
                          onChange={handlePass}
                        />
                        <span className="text-danger">{passError}</span>
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Phone Number <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Type Your Phone Number"
                          required
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Post Code <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="postCode"
                          id="postCode"
                          placeholder="Type Post Code"
                          required
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          City <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Type City Name"
                          required
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          Country <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Select
                          options={countryDD}
                          value={{
                            label: uniCountryLabel,
                            value: uniCountryValue,
                          }}
                          onChange={(opt) =>
                            selectUniCountry(opt.label, opt.value)
                          }
                          name="countryId"
                          id="countryId"
                        />
                        {countryError ? (
                          <span className="text-danger">
                            You must select country.
                          </span>
                        ) : null}
                      </Col>
                    </FormGroup>

                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="3">
                        <span>
                          State <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">
                        <Select
                          options={universityStateName}
                          value={{ label: uniStateLabel, value: unistateValue }}
                          onChange={(opt) =>
                            selectUniState(opt.label, opt.value)
                          }
                          name="stateId"
                          id="stateId"
                        />
                        {uniStateError ? (
                          <span className="text-danger">
                            You must select state.
                          </span>
                        ) : null}
                      </Col>
                    </FormGroup>

                    <FormGroup
                      className="has-icon-left position-relative"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        color="danger"
                        className="mr-1 mt-3"
                        onClick={closeModal}
                      >
                        Close
                      </Button>

                      <CustomButtonRipple
                        color={"primary"}
                        type={"submit"}
                        className={"mr-1 mt-3"}
                        name={"Submit"}
                        permission={6}
                      />
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
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
            <div class="d-flex justify-content-center mb-5">
              <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            </div>
          ) : (
            <div className="table-responsive" ref={componentRef}>
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>UAPP Id</th>
                    <th>Full Name</th>
                    <th>Provider</th>
                    {/* <th>Duration</th> */}
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Assign University</th>
                    <th>Application List</th>
                    <th>Account Status</th>
                    {/* <th>Intakes</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {managerList?.map((manager, i) => (
                    <tr key={manager.id} style={{ textAlign: "center" }}>
                      <th scope="row">{serialNum + i}</th>
                      <td>{manager?.sequenceId}</td>

                      <td>
                        {manager?.nameTittle?.name} {manager?.firstName} {manager?.lastName}
                      </td>

                      <td>{manager?.provider?.name}</td>

                      <td>{manager?.email}</td>

                      <td>{manager?.phoneNumber}</td>

                      <td>
                        {" "}
                        <span
                          className="badge badge-secondary"
                          style={{ cursor: "pointer" }}
                        >
                          <span
                            onClick={() =>
                              redirectToAssignPage(
                                manager?.provider?.id,
                                manager?.id
                              )
                            }
                            className="text-decoration-none"
                          >
                            View
                          </span>
                        </span>{" "}
                      </td>

                      <td>{manager?.totalApplication}</td>

                      <td>
                        {
                          <label className="switch">
                            <input
                              type="checkbox"
                              defaultChecked={
                                manager?.isActive == false ? false : true
                              }
                              onChange={(e) => {
                                handleAccountStatus(e, manager?.id);
                              }}
                            />
                            <span className="slider round"></span>
                          </label>
                        }
                      </td>

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                          {/* <Link to={`/providerAdmissionManager/${manager?.id}/${id}`}>
                           <Button color="primary" className="btn-sm me-1">
                       
                          <i className="fas fa-eye"></i>
                         
                           </Button>
                           </Link> */}

                          <ButtonForFunction
                            func={() =>
                              handleViewAdmissionManager(
                                manager?.id,
                                manager?.provider?.id
                              )
                            }
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
                              func={() =>
                                updateAdmissionManager(
                                  manager?.id,
                                  manager?.provider?.id
                                )
                              }
                              color={"warning"}
                              className={"mx-1 btn-sm"}
                              icon={<i className="fas fa-edit"></i>}
                              permission={6}
                            />
                          ) : null}

                          {permissions?.includes(
                            permissionList?.Delete_subject
                          ) ? (
                            <ButtonForFunction
                              func={() => toggleDelete(manager)}
                              color={"danger"}
                              className={"mx-1 btn-sm"}
                              icon={<i className="fas fa-trash-alt"></i>}
                              permission={6}
                            />
                          ) : null}
                        </ButtonGroup>

                        <Modal
                          isOpen={deleteModal}
                          toggle={closeDeleteModal}
                          className="uapp-modal"
                        >
                          <ModalBody>
                            <p>
                              Are You Sure to Delete this <b>{managerName}</b> ?
                              Once Deleted it can't be Undone!
                            </p>
                          </ModalBody>

                          <ModalFooter>
                            <Button color="danger" onClick={handleDelete}>
                              YES
                            </Button>
                            <Button color="primary" onClick={closeDeleteModal}>
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

     }

    </div>
  );
};

export default AdmissionManagerList;
