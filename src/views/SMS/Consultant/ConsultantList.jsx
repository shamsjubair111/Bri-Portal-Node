import React, { useEffect, useRef } from 'react';
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
    ModalBody,
    ModalFooter
  } from "reactstrap";
  import { Link } from "react-router-dom";
  import Select from "react-select";
  import Pagination from "../../SMS/Pagination/Pagination.jsx";
import { useHistory, useLocation } from "react-router";
import { useToasts } from 'react-toast-notifications';

import get from "../../../helpers/get.js";
import { rootUrl } from "../../../constants/constants.js";
import { useState } from 'react';

import ReactTableConvertToXl from '../ReactTableConvertToXl/ReactTableConvertToXl';
import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';
import remove from '../../../helpers/remove.js';
import LinkButton from '../Components/LinkButton.js';
import ButtonForFunction from '../Components/ButtonForFunction.js';
import { permissionList } from '../../../constants/AuthorizationConstant.js';
import SpanButton from '../Components/SpanButton.js';

const ConsultantList = () => {

  const permissions = JSON.parse(localStorage.getItem("permissions"));
    
    const [consultantList, setConsultantList] = useState([]);

    const [entity, setEntity] = useState(0);
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [searchStr, setSearchStr] = useState("");

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [success,setSuccess] = useState(false);
    const {addToast} = useToasts();
    const [delData,setDelData] = useState({});
    const [data,setData] = useState({});
    // const [uniStateLabel, setUniStateLabel] = useState("State");
    // const [unistateValue, setUniStateValue] = useState(0);
    // const [providerLabel, setProviderLabel] = useState("Provider");
    // const [providerValue, setProviderValue] = useState(0);

    const history = useHistory();


    // const selectConsType = (label, value) => {
    //     setConsTypeLabel(label);
    //     setConsTypeValue(value);
    //     handleSearch();
    //   };

      const searchValue = (e) => {
        setSearchStr(e.target.value);
        handleSearch();
      };

    // search handler
     const handleSearch = () => {
       setCurrentPage(1);
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

    // toggle dropdown
       const toggle = () => {
       setDropdownOpen((prev) => !prev);
    };

    // on clear
     const handleClearSearch = () => {
        setSearchStr("");
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

    // redirect to dashboard
    const backToDashboard = () => {
      history.push("/");
    };



    useEffect(()=>{
      get(`Consultant/GetPaginated?page=${currentPage}&pageSize=${dataPerPage}&searchstring=${searchStr}`)
      .then(res => {
        console.log("consultant List",res);
        setConsultantList(res?.models);
        setSerialNum(res?.firstSerialNumber);
        setEntity(res?.totalEntity);
        setLoading(false);
      })
    },[currentPage, dataPerPage, callApi, searchStr, entity, loading, success])

    const handleDate = e =>{
      var datee = e;
      var utcDate = new Date(datee);
      var localeDate = utcDate.toLocaleString("en-CA");
      const x = localeDate.split(",")[0];
      return x;
    }

    // Edit Consultant Information

    const handleEdit = (data) =>{

      console.log(data);
      
      history.push(`/consultantInformation/${data?.id}`);

    }

     // Delete Modal

     const toggleDanger = (p) => {

      setDelData(p);

      setDeleteModal(true)
    }

    // Delete Data

    const handleDeleteData = () => {

     

      remove(`Consultant/Delete/${delData?.id}`)
      .then(res => {
        // console.log(res);
        addToast(res,{
          appearance: 'error',
          autoDismiss: true
        })
        setDeleteModal(false);
        setSuccess(!success);
      })
      
    }

    const handleExportXLSX = () => {
      var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(consultantList);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
  
      XLSX.writeFile(wb, "MyExcel.xlsx");
    };

  const componentRef = useRef();

  const redirectToApplications = (consultantId) => {
    history.push({
      pathname: "/applications",
      consultantIdFromConsultantList: consultantId,
    })
  }

  const redirectToConsultantProfile = (consultantId) => {
    history.push(`/consultantProfile/${consultantId}`);
  }

    return (
        <div>
             <Card className="uapp-card-bg">
                <CardHeader className="page-header">
                  <h3 className="text-light">Consultant list</h3>
                  <div className="page-header-back-to-home">
                    <span onClick={backToDashboard} className="text-light">
                      {" "}
                      <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                    </span>
                  </div>
                </CardHeader>
            </Card>

            {/* filter starts here */}
        <Card className="uapp-employee-search">
            <CardBody className="search-card-body">
              <Row>
                {/* <Col lg="4" md="4" sm="6" xs="6">
                  
                </Col>

                <Col lg="4" md="4" sm="6" xs="6">
                  
                </Col> */}

                <Col lg="12">
                  <Input
                    style={{ height: "2.7rem" }}
                    type="text"
                    name="search"
                    value={searchStr}
                    id="search"
                    placeholder="Name , Email"
                    onChange={searchValue}
                    onKeyDown={handleKeyDown}
                  />
                </Col>

                {/* <Col lg="3" md="3" sm="6" xs="6">
                  <div className="uapp-Search-div">
                    <span>Reset</span>

                  </div>
                </Col> */}
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
            {/* filter starts here */}

    <Card className="uapp-employee-search">
        <CardBody>

          {/* new */}
          <Row className="mb-3">
            <Col lg="5" md="5" sm="4" xs="4">
            {
                permissions?.includes(permissionList?.Add_Consultant) ?
                <LinkButton
                url={'/addConsultant'}
                className={"btn btn-uapp-add "}
                name={"Add New Consultant"}
                icon={<i className="fas fa-plus"></i>}
                // permission={6}
              />
              :
              null
              }
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
            <div className="table-responsive mb-2" ref={componentRef}>
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Password</th>
                    <th>Branch</th>
                    <th>Parent Consultant</th>
                    <th>Consultant Type</th>
                    <th>Joining Date</th>
                    <th>Account status</th>
                    <th>Student</th>
                    <th>Application</th>
                    <th>Associates</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {consultantList?.map((consultant, i) => (
                    <tr key={consultant?.id} style={{ textAlign: "center" }}>
                      <th scope='row'>{serialNum + i}</th>
                      
                      <td style={{width: '10px'}}>
                        {consultant?.nameTitle?.name} {consultant?.firstName} {consultant?.lastName}
                      </td>
                      <td>{consultant?.email}</td>
                      <td>
                        {consultant?.phoneNumber}
                      </td>

                      <td>
                        <Link to='/'>Change</Link>
                      </td>
                      <td>
                        {consultant?.branch?.name}
                      </td>
                      <td>
                        {consultant?.parentConsultantName}
                      </td>
                      <td>
                        {consultant?.consultantType?.name}
                      </td>
                      <td>
                        {handleDate(consultant?.createdOn)}
                      </td>
                      <td>
                        {consultant?.accountStatus?.statusName}
                      </td>
                 
                      <td>
                        <span
                          className="badge badge-secondary"
                          style={{ cursor: "pointer"}}
                        >
                          <Link style={{textDecoration: "none"}} to={`/studentByConsultant/${consultant?.id}`}>{consultant?.studentCount}</Link>
                        </span>
                      </td>
                    
                      <td>
                      <SpanButton
                          func={() => redirectToApplications(consultant?.id)}
                          className={"badge badge-primary"}
                          style={{ cursor: "pointer" }}
                          data={consultant?.applicationCount}
                          permission={6}
                        />
                      </td>
                      <td>
                        {" "}
                        <span
                          className="badge badge-warning"
                          style={{ cursor: "pointer", textDecoration: "none" }}
                        >
                          <Link style={{textDecoration: "none"}} to={`/associates/${consultant?.id}`}>{consultant?.childConsultantCount}</Link>
                          
                        </span>{" "}
                      </td>

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">

                          {/* <LinkButton
                            url={`/consultantProfile/${consultant?.id}`}
                            color={"primary"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-eye"></i>}
                         
                          /> */}

                         <ButtonForFunction
                            func={()=>redirectToConsultantProfile(consultant?.id)}
                            color={"primary"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-eye"></i>}
                          />

                          <ButtonForFunction
                            func={()=>handleEdit(consultant)}
                            color={"warning"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-edit"></i>}
                        
                          />

                         {
                          consultant?.id !== 1 ?
                        
                          <ButtonForFunction
                            color={"danger"}
                            className={"mx-1 btn-sm"}
                            func={()=> toggleDanger(consultant)}
                            icon={<i className="fas fa-trash-alt"></i>}
                        
                          />

                        :
                          // <Button color="danger" className="mx-1 btn-sm" disabled><i className="fas fa-trash-alt"></i></Button>
                          null
                         }
                        </ButtonGroup>
                        <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                        <ModalBody>
                          <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                        </ModalBody>
        
                        <ModalFooter>
                          <Button  color="danger" onClick={handleDeleteData}>YES</Button>
                          <Button onClick={() => setDeleteModal(false)}>NO</Button>
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

export default ConsultantList;