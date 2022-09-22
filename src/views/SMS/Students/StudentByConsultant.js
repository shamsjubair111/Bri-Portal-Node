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
import put from "../../../helpers/put.js";

const StudentByConsultant = () => {
  const [serialNum, setSerialNum] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  const [callApi, setCallApi] = useState(false);
  const [entity, setEntity] = useState(0);
  const [success, setSuccess] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [delData,setDelData] = useState({});
  

  const history = useHistory();
  const {id} = useParams();
  const { addToast } = useToasts();

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };

  useEffect(()=>{
    get(`Student/GetByConsultant?page=${currentPage}&pageSize=${dataPerPage}&id=${id}`).then(res=>{
        setStudentList(res?.models);
        setEntity(res?.totalEntity);
        setSerialNum(res?.firstSerialNumber);
        console.log(res?.models);
        setLoading(false);
    })
  }, [id,currentPage,dataPerPage,callApi,entity,loading,success])

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

  const handleExportXLSX = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(studentList);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  const handleEdit = (data) => {
    history.push(`/addStudentApplicationInformation/${data?.id}/${1}`);
  }

  const toggleDanger = (data) => {
    setDelData(data)
    setDeleteModal(true);
  }

  const handleBlacklist = (e, id) => {
    console.log(e.target.checked, id);
    // setChecked(e.target.checked);
    // console.log(check);

    const subData = {
      id: id
    }

    put(`Student/UpdateAccountStatus/${id}`, subData)
    .then(res => {
      if(res?.status ==200){
        addToast(res?.data?.message,{
          appearance:'success',
          autoDismiss: true
        })
        setSuccess(!success);
        // setPassData({});
        // setPassModal(false);
      }
    })
  }

  const handleDeleteData = (data) => {

    remove(`Student/Delete/${delData?.id}`)
    .then(res => {

      console.log(res);
      addToast(res,{
        appearance: 'error',
        autoDismiss: true
      })
      setDeleteModal(false);
      setSuccess(!success);
    })
    
  }

  const componentRef = useRef();

  const handleDate = (e) => {
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    const x = localeDate.split(",")[0];
    return x;
  };

   //  change page
   const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

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
        <CardBody>
          <Row className="mb-3">
            <Col lg="6" md="5" sm="6" xs="4">
              {/* <Button
                onClick={handleAddStudent}
                className="btn btn-uapp-add "
              >
               
                <i className="fas fa-plus"></i> Add New
              </Button>
            */}

              {/* <ButtonForFunction className ={"btn btn-uapp-add "}
                 icon ={<i className="fas fa-plus"></i>}
                 func={handleAddStudent} 
                 name={' Add New'}
                 permission={6}             
                 ></ButtonForFunction> */}
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
                    <DropdownMenu className="bg-dd">
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
                   
                    {/* <th>Intakes</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentList?.map((student, i) => (
                    <tr key={student.id} style={{ textAlign: "center" }}>
                      <th scope="row">{serialNum + i}</th>
                      <td>{student?.studentViewId}</td>

                      <td>
                        {student?.firstName} {student?.lastName}
                      </td>

                      <td>{student?.email}</td>

                      <td>{student?.phoneNumber}</td>

                      <td>
                        {student?.consultant?.firstName}{" "}
                        {student?.consultant?.lastName}
                      </td>
                      <td>{handleDate(student?.createdOn)}</td>
                      <td>
                        <Link to="/">Change</Link>
                      </td>
                      
                      <td>
                        <label className="switch">
                          <input type="checkbox"
                          defaultChecked={student?.blacklisted == null ? false : student?.blacklisted == false ? false : true}
                          onChange={(e)=>{
                            handleBlacklist(e, student?.id);
                          }}
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                          <LinkButton
                            url={`/studentProfile/${student?.id}`}
                            color="primary"
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-eye"></i>}
                          />

                          <ButtonForFunction
                            icon={<i className="fas fa-edit"></i>}
                            color={"warning"}
                            className={"mx-1 btn-sm"}
                            func={() => handleEdit(student)}
                          />

                          {/* <Button onClick={() => toggleDanger(student?.name, student?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}

                          <ButtonForFunction
                            icon={<i className="fas fa-trash-alt"></i>}
                            color={"danger"}
                            className={"mx-1 btn-sm"}
                            func={() => toggleDanger(student)}
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
                            <Button
                              color="danger"
                              onClick={handleDeleteData}
                            >
                              YES
                            </Button>
                            <Button onClick={() => setDeleteModal(false)}>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentByConsultant;
