import React, { useEffect, useState, useRef } from 'react';
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
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import Pagination from "../../SMS/Pagination/Pagination.jsx";
import get from '../../../helpers/get';

import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';

const StudentList = () => {

 

    const [serialNum, setSerialNum] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [studentList, setStudentList] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [studentTypeLabel, setStudentTypeLabel] = useState("Select Student Type");
    const [studentTypeValue, setStudentTypeValue] = useState(0);
    const [searchStr, setSearchStr] = useState("");
    const [date, setDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [callApi, setCallApi] = useState(false);
    const [entity, setEntity] = useState(0);

    const location = useLocation();
    const history = useHistory();
    const { addToast } = useToasts();


    
    useEffect(()=>{
        get("StudentTypeDD/Index").then(res=>{
            setStudentList(res);
        })
    },[]);

    useEffect(()=>{
        get(`Student/GetPaginated?page=${currentPage}&pageSize=${dataPerPage}&StudentType=${studentTypeValue}&searchstring=${searchStr}`).then(res=>{
          console.log("stdLists",res);
          setStudentData(res?.models);
          setEntity(res?.totalEntity); 
          setSerialNum(res?.firstSerialNumber);       
          setLoading(false);
        })
    },[currentPage, dataPerPage, callApi, searchStr, studentTypeValue])

    // student dropdown options
    const studentTypeOption = studentList?.map((std) => ({
        label: std?.name,
        value: std?.id,
      }));

      const selectStudentType = (label, value) => {
        setStudentTypeLabel(label);
        setStudentTypeValue(value);
        handleSearch();
      };

      const searchValue = (e) => {
        setSearchStr(e.target.value);
        handleSearch();
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

      //  change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCallApi((prev) => !prev);
      };
      
       // search handler
       const handleSearch = () => {
         setCurrentPage(1);
         setCallApi((prev) => !prev);
       };

    // on clear
    const handleClearSearch = () => {
      setStudentTypeLabel("Select Student Type...");
      setStudentTypeValue(0);
      setSearchStr("");
      setCallApi((prev) => !prev);
    };

    const handleEdit = (data) =>{
      console.log(data);
      localStorage.setItem('applictionStudentId',data?.id);
      localStorage.setItem('applictionStudentTypeId',data?.studentTypeId);
      localStorage.setItem('method','put');
  

      history.push('/addStudentApplicationInformation');

    }

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

    // add university handler
    const handleAddStudent = () => {
        history.push("/addStudentRegister");
      };

      const handleExportXLSX = () => {
        var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(studentData);
        XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    
        XLSX.writeFile(wb, "MyExcel.xlsx");
      };

    const componentRef = useRef();
    
    return (
        <div>
            <Card className="uapp-card-bg">
                <CardHeader className="page-header">
                  <h3 className="text-light">Student List</h3>
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
                  <Col lg="6" md="6" sm="12" xs="12">
                    <Select
                      options={studentTypeOption}
                      value={{ label: studentTypeLabel, value: studentTypeValue }}
                      onChange={(opt) => selectStudentType(opt.label, opt.value)}
                      name="UniversityTypeId"
                      id="UniversityTypeId"
                    />
                  </Col>

                  <Col lg="6" md="6" sm="12" xs="12">
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
              
                    </div>
                  </Col>
                </Row>
            </CardBody>
         </Card>

         <Card className="uapp-employee-search">
        <CardBody>
          <Row className="mb-3">
            <Col lg="6" md="5" sm="6" xs="4">
              <Button
                onClick={handleAddStudent}
                className="btn btn-uapp-add "
              >
                {" "}
                <i className="fas fa-plus"></i> Add New{" "}
              </Button>
            </Col>

            <Col lg="6" md="7" sm="6" xs="8">
              <Row>
                <Col lg="5" md="6"></Col>
                <Col lg="2" md="3" sm="5" xs="5" className="mt-2">
                  Showing
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
                      <i className="fas fa-ellipsis-v"></i>
                    </DropdownToggle>
                    <DropdownMenu className='bg-dd'>
                    {/* <DropdownItem> */}
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

                        {/* <ReactHTMLTableToExcel
                          id="test-table-xls-button"
                          className="download-table-xls-button"
                          table="table-to-xls"
                          filename="tablexls"
                          sheet="tablexls"
                          buttonText="Download as XLS"/> */}

                        
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
            <h2 className="text-center">Loading...</h2>
          ) : (
            <div className="table-responsive mb-3" ref={componentRef}>
              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>UAPP ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Consultant</th>
                    <th>UAPP Reg Date</th>
                    <th>Password</th>
                    <th>Black List</th>
                    <th>A/C Status</th>
                    {/* <th>Intakes</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentData?.map((student, i) => (
                    <tr key={student.id} style={{ textAlign: "center" }}>
                      <th scope='row'>{serialNum + i}</th>
                      <td>
                        {student?.studentViewId}
                      </td>
                      
                      <td>
                        {student?.firstName} {student?.lastName}
                      </td>

                      <td>
                        {student?.email}
                      </td>

                      <td>
                        {student?.phoneNumber}
                      </td>

                      <td>
                        {student?.consultant?.firstName} {student?.consultant?.lastName}
                      </td>
                      <td>
                        {student?.createdOn}
                      </td>
                      <td>
                        <Link to="/">Change</Link>
                      </td>
                      <td>
                        <label className="switch">
                          <input 
                          type="checkbox" 
                        //   checked 
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>

                      <td>
                        <label className="switch">
                          <input 
                          type="checkbox" 
                          checked 
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                        <Link to={`/studentProfile/${student?.id}`}>
                          <Button color="primary" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-eye"></i>{" "}
                          </Button>
                        </Link>

                       
                            <Button color="dark" className="mx-1 btn-sm" onClick={()=>handleEdit(student)}>
                              {" "}
                              <i className="fas fa-edit"></i>{" "}
                            </Button>
                      

                          {/* <Button onClick={() => toggleDanger(student?.name, student?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}
                          
                          <Button color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button>

                        </ButtonGroup>

                     
                      {/* <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">

                          <ModalBody>
                            <p>Are You Sure to Delete this <b>{localStorage.getItem('studentName')}</b> ? Once Deleted it can't be Undone!</p>
                          </ModalBody>

                          <ModalFooter>
                          
                            <Button color="danger" onClick={() => handleDelete(localStorage.getItem('studentId'))}>YES</Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
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

export default StudentList;