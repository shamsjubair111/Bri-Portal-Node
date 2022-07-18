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
import { Link, useParams } from 'react-router-dom';
import get from '../../../helpers/get';
import { useToasts } from 'react-toast-notifications';
import remove from '../../../helpers/remove';
import Pagination from "../../SMS/Pagination/Pagination.jsx";

import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';

const CampusSubjectList = () => {

    const {camId} = useParams();
    

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subList, setSubList] = useState([]);
    const [entity, setEntity] = useState(0);
    const [loading, setLoading] = useState(false);
    const [serialNum, setSerialNum] = useState(1);
    const [success, setSuccess] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [callApi, setCallApi] = useState(false);
    
    // const univerSList = props.univerSityDropDownList[0];
    // const camppus = props.campusDropDownList[0];

    const [uniLabel, setUniLabel] = useState("Select University");
    const [uniValue, setUniValue] = useState(0);
    const [campLabel, setCampLabel] = useState("Select Campus");
    const [campValue, setCampValue] = useState(0);
    const [campList, setCampList] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [uniTypeId ,setUTypeId] = useState(0);
    const [ulist,setUList] = useState([]);
    const [cam, setCam] = useState([]);

    const location = useLocation();
    const history = useHistory();
    const { addToast } = useToasts();

    // user select data per page
    const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
    const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

     //  change page
     const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCallApi((prev) => !prev);
      };

    // redirect to dashboard
    const backToDashboard = () => {
        history.push("/campusList");
      };

    const selectDataSize = (value) => {
      setLoading(true);
      setDataPerPage(value);
      setCallApi((prev) => !prev);
    };

    // toggle dropdown
      const toggle = () => {
        setDropdownOpen((prev) => !prev);
      };

    const toggleDanger = (name,id) => {
      localStorage.setItem('subName',name)
      localStorage.setItem('subId',id)
      setDeleteModal(true)
     }

    const closeDeleteModal = () => {
       setDeleteModal(false);
       localStorage.removeItem('subName')
       localStorage.removeItem('subId')
     
    }

    const handleDelete = (id) => {
        const returnValue = remove(`Subject/Delete/${id}`).then((action)=> {
          // console.log(action);
          setSuccess(!success);
          setDeleteModal(false);
           addToast(action, {
             appearance: 'error',
             autoDismiss: true,
           })
  
        })
      };

    // add university handler
    const handleAddSubject = () => {
        history.push("/addSubject");
      };

    // on clear
    const handleClearSearch = () => {
      setUniLabel("Select University");
      setUniValue(0);
      setCampLabel("Select Campus");
      setCampValue(0);
      setCallApi((prev) => !prev);
      setSearchStr("");
    };

    useEffect(()=>{
        get(`Subject/GetByCampusId?page=${currentPage}&pageSize=${dataPerPage}&CampusId=${camId}&search=${searchStr}`).then(res=>{
            // console.log("subject",res);
            setSubList(res?.models);
            setEntity(res?.totalEntity);
        })
    },[success, currentPage, dataPerPage, callApi, searchStr, camId]);

    // search handler
    const handleSearch = () => {
        setCurrentPage(1);
        setCallApi((prev) => !prev);
      };

    const searchValue = (e) => {
        setSearchStr(e.target.value);
        handleSearch();
      };

     // on enter press
     const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setCurrentPage(1);
        setCallApi((prev) => !prev);
      }
    };

    const handleExportXLSX = () => {
      var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(subList);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
  
      XLSX.writeFile(wb, "MyExcel.xlsx");
    };
  
    const componentRef = useRef();

    return (
        <div>
            <Card className="uapp-card-bg">
                <CardHeader className="page-header">
                  <h3 className="text-light">Subject List</h3>
                  <div className="page-header-back-to-home">
                    <span onClick={backToDashboard} className="text-light">
                      {" "}
                      <i className="fas fa-arrow-circle-left"></i> Back to Campus list
                    </span>
                  </div>
                </CardHeader>
            </Card>

            <Card className="uapp-employee-search">
        <CardBody className="search-card-body">

          <Row>
            <Col lg="12" md="4" sm="6" xs="6">
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
                onClick={handleAddSubject}
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
                    <DropdownMenu>
                    <DropdownItem>
                        <p onClick={handleExportXLSX}>Export to XLSX</p>

                        {/* <ReactHTMLTableToExcel
                          id="test-table-xls-button"
                          className="download-table-xls-button"
                          table="table-to-xls"
                          filename="tablexls"
                          sheet="tablexls"
                          buttonText="Download as XLS"/> */}

                        
                           {/* <Button onClick={onDownload}> Export excel </Button> */}

                      </DropdownItem>

                      <DropdownItem>
                      <ReactToPrint
                           trigger={() => <p>Export to PDF</p>}
                           content={() => componentRef.current}
                         />
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>

          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) : (
            <div className="table-responsive" ref={componentRef}>
              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Subject Name</th>
                    {/* <th>Description</th>
                    <th>Duration</th> */}
                    <th>University</th>
                    <th>Program Level</th>
                    <th>Department</th>
                    <th>Sub Department</th>
                    <th>Intakes</th>
                    {/* <th>Intakes</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subList?.map((sub, i) => (
                    <tr key={sub?.id} style={{ textAlign: "center" }}>
                      <td>{serialNum + i}</td>
                      <td>
                        {sub?.name}
                      </td>
                      {/* <td>{sub?.description}</td>

                      <td>
                        {sub?.duration}
                      </td> */}

                      <td>
                        {sub?.university?.name}
                      </td>

                      <td>
                        {sub?.programLevel?.name}
                      </td>

                      <td>
                        {sub?.department?.name}
                      </td>

                      <td>
                        {sub?.subDepartment?.name}
                      </td>

                      <td>
                        {" "}
                        <span
                          className="badge badge-secondary"
                          style={{ cursor: "pointer" }}
                        >
                          <Link className="text-decoration-none" to = {`/subjectIntake/${camId}/${sub?.id}`}> 
                          <span> View </span>
                          </Link>
                        </span>{" "}
                      </td> 

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                        <Link to= "">
                          <Button color="primary" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-eye"></i>{" "}
                          </Button>
                        </Link>

                          <Link to={`/editSubject/${sub?.id}`}>
                            <Button color="dark" className="mx-1 btn-sm">
                              {" "}
                              <i className="fas fa-edit"></i>{" "}
                            </Button>
                          </Link>

                          <Button onClick={() => toggleDanger(sub?.name, sub?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </ButtonGroup>

                     
                      <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">

                          <ModalBody>
                            <p>Are You Sure to Delete this <b>{localStorage.getItem('subName')}</b> ? Once Deleted it can't be Undone!</p>
                          </ModalBody>

                          <ModalFooter>
                          
                            <Button color="danger" onClick={() => handleDelete(localStorage.getItem('subId'))}>YES</Button>
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

export default CampusSubjectList;