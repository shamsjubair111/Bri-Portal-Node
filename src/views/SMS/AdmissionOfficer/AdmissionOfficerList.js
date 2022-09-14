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
  Form, 
  FormGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// import { permissionList } from '../../../../constants/AuthorizationConstant';
import { permissionList } from "../../../constants/AuthorizationConstant";

import ReactTableConvertToXl from '../ReactTableConvertToXl/ReactTableConvertToXl';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import * as XLSX from "xlsx/xlsx.mjs";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from "react-to-print";

import Select from "react-select";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import get from "../../../helpers/get";
import { useToasts } from "react-toast-notifications";
import remove from "../../../helpers/remove";
import Pagination from "../../SMS/Pagination/Pagination.jsx";

import ButtonForFunction from "../Components/ButtonForFunction";
import LinkButton from "../Components/LinkButton";
import { userTypes } from "../../../constants/userTypeConstant";
import put from "../../../helpers/put";
import CustomButtonRipple from "../Components/CustomButtonRipple";
import post from "../../../helpers/post";

const AdmissionOfficerList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [entity, setEntity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [serialNum, setSerialNum] = useState(1);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  const [callApi, setCallApi] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [managerDD, setManagerDD] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [uniCountryLabel, setUniCountryLabel] = useState('Select Country');
  const [uniCountryValue, setUniCountryValue] = useState(0);

  const [universityStates, setUniversityStates] = useState([]);

  const [officerList, setOfficerList] = useState([]);

  const [managerName, setManagerName] = useState('');
  const [managerId, setManagerId] = useState(0);
  const [deleteData, setDeleteData] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);

  const [managerLabel, setManagerLabel] = useState("Select Admission Manager");
  const [managerValue, setManagerValue] = useState(0);

  const [countryError, setCountryError] = useState(false);

  const [uniStateLabel, setUniStateLabel] = useState('Select State');
  const [unistateValue, setUniStateValue] = useState(0);
  const [uniStateError, setUniStateError] = useState(false);

  const [nameTitleDD, setNameTitleDD] = useState([]);

  const [nameTitleLabel, setNameTitleLabel] = useState("Select Title");
  const [nameTitleValue, setNameTitleValue] = useState(0);

  const [nameTitleError, setNameTitleError] = useState(false);

  const [providerDD, setProviderDD] = useState([]);
  const [providerLabel, setProviderLabel] = useState("Select Provider");
  const [providerValue, setProviderValue] = useState(0);
  const [providerError, setProviderError] = useState(false);

  const [managerDDForm, setManagerDDForm] = useState([]);
  const [managerFormLabel, setManagerFormLabel] = useState("Select Admission Manager");
  const [managerFormValue, setManagerFormValue] = useState(0);
  const [managerFormError, setManagerFormError] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const { addToast } = useToasts();

  const userType = localStorage.getItem("userType");
  const referenceId = localStorage.getItem("referenceId");
  const permissions = JSON.parse(localStorage.getItem("permissions"));

  useEffect(() => {
    get("AdmissionManagerDD/Index").then((res) => {
      setManagerDD(res);
      setManagerDDForm(res);
    });

    get("UniversityCountryDD/Index").then(res =>{
        setCountryList(res);
      });

    get("NameTittleDD/index").then(res =>{
        setNameTitleDD(res);
      });

    get("ProviderDD/Index").then(res =>{
        setProviderDD(res);
      });

    // setLoading(true);
    // setLoading(false);

    get(`AdmissionOfficer/GetPaginated?page=${currentPage}&pageSize=${dataPerPage}&admissionmanagerId=${managerValue}&search=${searchStr}`).then(res=>{
        console.log("admission officer",res);
        setOfficerList(res?.models);
        setEntity(res?.totalEntity);
        setSerialNum(res?.firstSerialNumber);
        setLoading(false);
    })
  }, [currentPage, dataPerPage, managerValue, searchStr, success, loading]);

  const managerMenu = managerDD.map((manager) => ({
    label: manager?.name,
    value: manager?.id,
  }));

  const selectManager = (label, value) => {
    setManagerLabel(label);
    setManagerValue(value);
  }

  const managerMenuForm = managerDDForm.map(managerForm => ({
    label: managerForm?.name,
    value: managerForm?.id
  }))

  const selectManagerForm = (label, value) => {
    setManagerFormError(false);
    setManagerFormLabel(label);
    setManagerFormValue(value);
  }

  const countryDD = countryList.map(countryOptions =>({
    label:countryOptions?.name, 
    value:countryOptions?.id
  }));

  // select University Country
  const selectUniCountry = (label, value) => {
    setUniCountryLabel(label);
    setUniCountryValue(value);
    setCountryError(false);
    setUniStateLabel("Select State");
    setUniStateValue(0);
    get(`UniversityStateDD/Index/${value}`)
      .then(res => {
        console.log("res", res);
        // setUniStateLabel(res.name)
        // setUniStateValue(res.id)
        setUniversityStates(res);
      })
  }

  const universityStateName = universityStates?.map(uniState => ({ 
    label: uniState.name, 
    value: uniState.id 
  }));

  // select University State
  const selectUniState = (label, value) => {
    setUniStateError(false);
    setUniStateLabel(label);
    setUniStateValue(value);
  }

  const nameTitleMenu = nameTitleDD?.map(nameTitle => ({
    label: nameTitle?.name,
    value: nameTitle?.id
  }))

//   select name title
const selectNameTitle = (label, value) => {
    setNameTitleError(false);
    setNameTitleLabel(label);
    setNameTitleValue(value);
  }

  const providerMenu = providerDD?.map(provider => ({
    label: provider?.name,
    value: provider?.id
  }))

//   select provider
const selectProvider = (label, value) => {
    setProviderError(false);
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
    ws = XLSX.utils.json_to_sheet(officerList);
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
    setManagerLabel("Select Admission Manager");
    setManagerValue(0);
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

  const handleAccountStatus = (e, managerId) => {
    console.log(e.target.checked, managerId);
    // setChecked(e.target.checked);
    // console.log(check);

    const subData = {
      id: managerId
    }

    console.log("SubDataaa", subData);

    put(`AdmissionManager/UpdateAccountStatus/${managerId}`, subData)
    .then(res => {
      if(res?.status ==200){
        addToast(res?.data?.message,{
          appearance:'success',
          autoDismiss: true
        })
        setSuccess(!success);
      }
    })
  }

  // on Close Modal
  const closeModal = () => {
    // setCampObj({});
    setUniCountryLabel("Select Country");
    setUniCountryValue(0);
    setUniStateLabel("Select State");
    setUniStateValue(0);
    setUniStateLabel("Select State");
    setUniStateValue(0);
    setProviderLabel("Select Provider");
    setProviderValue(0);
    setNameTitleLabel("Select Title");
    setNameTitleValue(0);
    // setSelectedId(0);
    setModalOpen(false);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    const subdata = new FormData(event.target);

    for(var i of subdata){
        console.log(i);
    }

    // if(selectedId === 0){
      post(`AdmissionOfficer/Create`, subdata)
    .then(res => {
      setSuccess(!success);
      setModalOpen(false);
      console.log("ressss", res);
    //   setuniversityId(res?.data?.result?.universityId)
      if (res.status === 200 && res.data.isSuccess === true) {
        // setSubmitData(false);
        addToast(res.data.message, {
          appearance: 'success',
          autoDismiss: true,
        })
      }
    })
    // }


    // else{
    //   put(`UniversityCampus/Update`, subdata)
    //     .then(res => {
          
    //       if (res.status === 200 && res.data.isSuccess === true) {
    //         setSubmitData(false);
    //         addToast(res.data.message, {
    //           appearance: 'success',
    //           autoDismiss: true,
    //         })
    //         setSelectedId(0);
    //         setSuccess(!success);
    //         setModalOpen(false);
    //       }
        
    //     })
    // }

  }


    return (
        <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Admission Officer List</h3>
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
                options={managerMenu}
                value={{ label: managerLabel, value: managerValue }}
                onChange={(opt) => selectManager(opt.label, opt.value)}
                name="admissionmanagerId"
                id="admissionmanagerId"
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
                func={()=>setModalOpen(true)}
                className={"btn btn-uapp-add "}
                icon={<i className="fas fa-plus"></i>}
                name={" Add New"}
                permission={6}
              />
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
                    <th>UAPP Id</th>
                    <th>Name</th>
                    <th>Provider</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Country</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {officerList?.map((officer, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                    <th scope="row">{1 + i}</th>
                    <td>{officer?.sequenceId}</td>

                    <td>{officer?.nameTittle?.name}{" "}{officer?.firstName}{" "}{officer?.lastName}</td>

                    <td>
                      {officer?.provider?.name}
                    </td>

                    <td>{officer?.email}</td>

                    <td>{officer?.phoneNumber}</td>

                    <td>{officer?.country?.name} ({officer?.state?.name})</td>

                    <td>
                      <ButtonGroup variant="text">
                    
                        <ButtonForFunction
                          // func={() =>
                          //   handlRedirectToApplicationDetails(officer?.applicationId, officer?.application?.studentId)
                          // }
                          color={"primary"}
                          className={"mx-1 btn-sm"}
                          icon={<i className="fas fa-eye"></i>}
                          permission={6}
                        />

                      </ButtonGroup>

                      <Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal2" size='lg'>
              <ModalHeader style={{backgroundColor: '#1d94ab'}}><span className='text-white'>Add Admission Officer</span></ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit} >

                <FormGroup row className="has-icon-left position-relative">
                  {/* <Input type="hidden" id="universityId" name="universityId" value={uniId} />
                  <Input type="hidden" id="Id" name="Id" value={selectedId} /> */}
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Title <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                      options={nameTitleMenu}
                      value={{ label: nameTitleLabel, value: nameTitleValue }}
                      onChange={opt => selectNameTitle(opt.label, opt.value)}
                      name="nameTittleId "
                      id="nameTittleId "
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                    {
                        nameTitleError ? <span className="text-danger">You must select title.</span>
                        :
                        null
                    }
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>First Name <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"  
                      
                    //  defaultValue={campObj?.name}
                      placeholder="Type First Name"
                      required
                    />
                    {/* <div className="form-control-position">
                                                <User size={15} />
                                            </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Last Name <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"  
                      
                    //  defaultValue={campObj?.name}
                      placeholder="Type Last Name"
                      required
                    />
                    {/* <div className="form-control-position">
                                                <User size={15} />
                                            </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Email <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="email"
                      name="email"
                      id="email"  
                      
                    //  defaultValue={campObj?.name}
                      placeholder="Type Your Email"
                      required
                    />
                    {/* <div className="form-control-position">
                                                <User size={15} />
                                            </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Password <span className="text-danger">*</span></span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="password"
                      name="password"
                      id="password"
                    //   defaultValue={campObj?.totalStudent}
                      placeholder="Type Your Password"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Phone Number <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"  
                      
                    //  defaultValue={campObj?.name}
                      placeholder="Type Your Phone Number"
                      required
                    />
                    {/* <div className="form-control-position">
                                                <User size={15} />
                                            </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Country <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                      options={countryDD}
                      value={{ label: uniCountryLabel, value: uniCountryValue }}
                      onChange={opt => selectUniCountry(opt.label, opt.value)}
                      name="countryId"
                      id="countryId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                    {
                        countryError ? <span className="text-danger">You must select country.</span>
                        :
                        null
                    }
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>State <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                      options={universityStateName}
                      value={{ label: uniStateLabel, value: unistateValue }}
                      onChange={opt => selectUniState(opt.label, opt.value)}
                      name="stateId"
                      id="stateId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                    {
                        uniStateError ? <span className="text-danger">You must select state.</span>
                        :
                        null
                    }
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Provider <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                      options={providerMenu}
                      value={{ label: providerLabel, value: providerValue }}
                      onChange={opt => selectProvider(opt.label, opt.value)}
                      name="providerId"
                      id="providerId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}

                    {
                        providerError ? <span className="text-danger">You must select provider.</span>
                        :
                        null
                    }
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Admission Manager <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                      options={managerMenuForm}
                      value={{ label: managerFormLabel, value: managerFormValue }}
                      onChange={opt => selectManagerForm(opt.label, opt.value)}
                      name="admissionmanagerId"
                      id="admissionmanagerId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}

                    {
                        managerFormError ? <span className="text-danger">You must select admission manager.</span>
                        :
                        null
                    }
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>City <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="city"
                      id="city"
                    //   defaultValue={campObj?.campusCity}
                      placeholder="Type City Name"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="3">
                    <span>Post Code <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="postCode"
                      id="postCode"
                    //   defaultValue={campObj?.addressLine}
                      placeholder="Type Post Code"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                  <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button color="danger" className="mr-1 mt-3" onClick={closeModal}>Close</Button>

                    
                    {/* localStorage.getItem("updateUni") ? */}
                      {/* <Button color="warning" className="mr-1 mt-3" onClick={handleUpdateSubmit}>Update</Button> : */}

                      {/* <Button.Ripple
                        color="warning"
                        type="submit"
                        className="mr-1 mt-3"
                       
                      >
                        Submit
                      </Button.Ripple> */}

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

export default AdmissionOfficerList;