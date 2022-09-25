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
    FormGroup,
  } from "reactstrap";
import Select from "react-select";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import Pagination from "../../SMS/Pagination/Pagination.jsx";
import get from '../../../helpers/get';
import remove from '../../../helpers/remove.js';
import ButtonForFunction from '../Components/ButtonForFunction';
import ReactTableConvertToXl from '../ReactTableConvertToXl/ReactTableConvertToXl';
import LinkButton from '../Components/LinkButton.js';
import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';
import { userTypes } from '../../../constants/userTypeConstant.js';
import put from '../../../helpers/put.js';

const StudentList = () => {

 
     const [deleteModal, setDeleteModal] = useState(false);
     const [success, setSuccess] = useState(false);

     const {cId, cLabel, type} = useParams();

     console.log(cId, cLabel, type);

     console.log('CID',cId, 'CLABEL', cLabel);

    const [serialNum, setSerialNum] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [studentList, setStudentList] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [studentTypeLabel, setStudentTypeLabel] = useState("Select Student Type");
    const [studentTypeValue, setStudentTypeValue] = useState(0);
    const [searchStr, setSearchStr] = useState("");
    const [date, setDate] = useState("");
    const [delData,setDelData] = useState({});

    const referenceId = localStorage.getItem('referenceId');

    const userTypeId = localStorage.getItem('userType');

    const [consultant, setConsultant] = useState([]);
    const [consultantLabel, setConsultantLabel] = useState('Select Consultant');
    const [consultantValue, setConsultantValue] = useState(0);

  

    const [accountStatus, setAccountStatus] = useState([]);
    const [statusLabel,setStatusLabel] = useState('Select Account Status')
    const [statusValue, setStatusValue] = useState(0);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [callApi, setCallApi] = useState(false);
    const [entity, setEntity] = useState(0);

    const [orderLabel, setOrderLabel] = useState("Select order by");
    const [orderValue, setOrderValue] = useState(0);

    // const [check, setChecked] = useState("");

    const location = useLocation();
    const history = useHistory();
    const { addToast } = useToasts();

    const [passModal, setPassModal] = useState(false);
    const[passData,setPassData] = useState({});
    const [passError,setPassError] = useState('');
    const [pass, setPass] = useState('');
    const [cPass,setCPass] = useState('');
    const [error,setError] = useState('');


    
    useEffect(()=>{
        get("StudentTypeDD/Index").then(res=>{

          console.log('res',res);
            setStudentList(res);
        })

        get('ConsultantDD/index')
        .then(res => {
          setConsultant(res);
        })
    },[]);

      
    useEffect(()=>{
      
        type?

        get(`Student/GetPaginated?page=${currentPage}&pageSize=${dataPerPage}&StudentType=${type}&searchstring=${searchStr}&consultantId=${(userTypeId == userTypes?.Consultant)? referenceId : consultantValue}&status=${statusValue}&sortby=${orderValue}`).then(res=>{
         
          setStudentData(res?.models);
          setEntity(res?.totalEntity); 
          setSerialNum(res?.firstSerialNumber);       
          setLoading(false);
          setStudentTypeLabel(res?.models[0]?.studentType?.name);
        })

        :

        get(`Student/GetPaginated?page=${currentPage}&pageSize=${dataPerPage}&StudentType=${studentTypeValue}&searchstring=${searchStr}&consultantId=${(userTypeId == userTypes?.Consultant)? referenceId : consultantValue}&status=${statusValue}&sortby=${orderValue}`).then(res=>{
          
          setStudentData(res?.models);
          setEntity(res?.totalEntity); 
          setSerialNum(res?.firstSerialNumber);       
          setLoading(false);
        })



      


        if(cId && cLabel){
          setConsultantLabel(cLabel);
          setConsultantValue(cId);
        }
    },[currentPage, dataPerPage, callApi, searchStr, studentTypeValue, success, orderValue])

    

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
    {
      label: "A-Z",
      value: 3,
    },
    {
      label: "Z-A",
      value: 4,
    },
  ];
  // const orderName = orderArr.map((dsn) => ({ label: dsn.label, value: dsn.value }));
  const orderName = orderArr.map((dsn) => ({
    label: dsn.label,
    value: dsn.value,
  }));

  const selectOrder = (label, value) => {
    // console.log("value", label, value);
    setLoading(true);
    setOrderLabel(label);
    setOrderValue(value);
    setCallApi((prev) => !prev);
  };

  const passValidate = (e) => {
    setPass(e.target.value);
    
  }

  const handleToggle = () => {
    setPassError('');
    setError('');
    setPassModal(!passModal);
  }

    const status = [
      {
        id: 1,
        name: 'Active'
      },

      {
        id: 2,
        name: 'Incative'
      }
    ]

    const statusOption = status?.map((s) => ({
      label: s?.name,
      value: s?.id,
    }));

    const selectStatusType = (label, value) => {
      setStatusLabel(label);
      setStatusValue(value);
      handleSearch();
    };


    const consultantOption = consultant?.map((c) => ({
      label: c?.name,
      value: c?.id,
    }));


    const selectConsultant = (label, value) => {
      setConsultantLabel(label);
      setConsultantValue(value);
      handleSearch();
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
      setStudentTypeLabel("Select Student Type");
      setStudentTypeValue(0);
      setStatusValue(0);
      setStatusLabel('Select Account Status');
      setConsultantValue(0);
      setConsultantLabel('Select Consultant');
      setSearchStr("");
      setCallApi((prev) => !prev);
    };

    const handleEdit = (data) =>{
      console.log(data);
      
  

      history.push(`/addStudentApplicationInformation/${data?.id}/${1}`);

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
    

      // Delete Modal

   
      const toggleDanger = (data) => {

        
        setDelData(data);
  
        setDeleteModal(true)
      }

      const handlePass = (data) => {
        setPassData(data);
        console.log(data);
        setPassModal(true);
      }

      const verifyPass = (e) => {
        
        setPassError('');
      }

      const confirmPassword = (e) => {
          setCPass(e.target.value);
       
      }

      


      const submitModalForm = (event) => {
        event.preventDefault();

        const subData = new FormData(event.target);

        subData.append('studentId', passData?.id);
        subData.append('password', pass);
        if(pass.length < 6){
          setError('Password length can not be less than six digits');
        }
        else if(pass !== cPass){
          setPassError('Passwords do not match');
        }
        else{
          put(`Password/Change`,subData)
          .then(res => {
            if(res?.status ==200 && res.data?.isSuccess == true){
              addToast(res?.data?.message,{
                appearance:'success',
                autoDismiss: true
              })
              setSuccess(!success);
              setPassData({});
              setPassModal(false);
            }
            else{
              addToast(res?.data?.message,{
                appearance:'error',
                autoDismiss: true
              })
              setSuccess(!success);
              
              
            }
          })
  
        }

      



     

      }



      const handleDeleteData = () => {

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

      const handleDate = e =>{
        var datee = e;
        var utcDate = new Date(datee);
        var localeDate = utcDate.toLocaleString("en-CA");
        const x = localeDate.split(",")[0];
        return x;
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

      const redirectToStudentProfile = (studentId) => {
        history.push(`/studentProfile/${studentId}`);
      }

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
                <Row className='mb-3'>
                  <Col lg="6" md="6" sm="12" xs="12">
                    <Select
                      options={studentTypeOption}
                      value={{ label: studentTypeLabel, value: studentTypeValue }}
                      onChange={(opt) => selectStudentType(opt.label, opt.value)}
                      name="UniversityTypeId"
                      id="UniversityTypeId"
                      isDisabled={type? true : false}
                    />
                  </Col>

                  <Col lg="6" md="6" sm="12" xs="12">
                    <Input
                      style={{ height: "2.7rem" }}
                      type="text"
                      name="search"
                      value={searchStr}
                      id="search"
                      placeholder="Uapp Id, Name, Email"
                      onChange={searchValue}
                      onKeyDown={handleKeyDown}
                    />
                  </Col>

                </Row>

                <Row className ='mt-3'>
                  {/* <Col lg="6" md="6" sm="12" xs="12">
                    <Select
                    options={consultantOption}
                    value={{ label: consultantLabel, value: consultantValue }}
                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                    name="consultantId"
                    id="consultantId"
                      
                    />
                  </Col> */}

                  <Col lg="6" md="6" sm="12" xs="12">
                    
                  <Select
                  options={statusOption}
                  value={{ label: statusLabel, value: statusValue }}
                  onChange={(opt) => selectStatusType(opt.label, opt.value)}
                  name="status"
                  id="status"
                      
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
            <ButtonForFunction className ={"btn btn-uapp-add "}
                 icon ={<i className="fas fa-plus"></i>}
                 func={handleAddStudent} 
                 name={' Add New Student'}
                 
                 ></ButtonForFunction>
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
            <div className="table-responsive mb-3" ref={componentRef}>
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>UAPP Id</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Consultant</th>
                    <th>UAPP Reg Date</th>
                    {
                      (userTypeId == userTypes?.SystemAdmin || userTypeId == userTypes?.Admin) ?
                      
                      <th>Password</th>
                      :
                      null
                      
                    }
                    <th>Black List</th>
                   
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
                       {student?.nameTittle?.name} {student?.firstName} {student?.lastName}
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
                        {handleDate(student?.createdOn)}
                      </td>
                     {
                       (userTypeId == userTypes?.SystemAdmin || userTypeId == userTypes?.Admin) ?

                       <>
                         <td>
                        <Link to="/studentList" onClick={()=>handlePass(student)}>Change</Link>
                        <Modal isOpen={passModal} toggle={() => handleToggle} className="uapp-modal2">
                          <ModalHeader>
                          <div className='text-center mt-3'>
                          <span>Change password for {passData?.firstName} {' '} {passData?.lastName} {' '} ({passData?.studentViewId}) </span>
                          </div>
                          </ModalHeader>
                        <ModalBody>
                         
                          <form onSubmit={submitModalForm} className='mt-3'>
                          <FormGroup row className="has-icon-left position-relative">
                        <Col md="4">
                          <span>
                            Password <span className="text-danger">*</span>{" "}
                          </span>
                        </Col>
                        <Col md="8">
                          <Input
                          type='password'
                          
                            onBlur={passValidate}
                            onChange={()=>setError('')}


                          />
                          <span className='text-danger'>{error}</span>
                        
                        </Col>
                      </FormGroup>

                          <FormGroup row className="has-icon-left position-relative">
                        <Col md="4">
                          <span>
                            Confirm Password <span className="text-danger">*</span>{" "}
                          </span>
                        </Col>
                        <Col md="8">
                          <Input
                          type='password'
                        
                            onChange={verifyPass}
                            onBlur={confirmPassword}

                          />
                          
                          <br/>
                          {
                            <span className='text-danger'>{passError}</span>
                          }

                        
                        </Col>
                      </FormGroup>

                      <FormGroup row className="has-icon-left position-relative">

                        <Col md ='12'>
                          <div className='d-flex justify-content-between'>
                            <Button color='danger' onClick={()=> setPassModal(false)}>
                              Cancel
                            </Button>
                            <Button color='primary' type='submit'>
                              Submit

                            </Button>
                          </div>
                        
                        </Col>

                      </FormGroup>

                          </form>
                        </ModalBody>
        
                        
                     </Modal>
                      </td>
                       </>
                       :
                       null
                     }
                      <td>
                        <label className="switch">
                          <input 
                          type="checkbox" 
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
                       
                        <ButtonForFunction
                          icon={<i className="fas fa-eye"></i>}
                          color={"primary"}
                          className={"mx-1 btn-sm"}
                          func={()=>redirectToStudentProfile(student?.id)}
                        />


                        {/* <LinkButton
                        url={`/studentProfile/${student?.id}`}
                        color="primary"
                        className={"mx-1 btn-sm"}
                        icon={<i className="fas fa-eye"></i>}

                        /> */}

                       
                           

                            <ButtonForFunction
                            icon={<i className="fas fa-edit"></i>}
                            color={"warning"}
                            className={"mx-1 btn-sm"}
                            func={()=>handleEdit(student)}
                            />
                      

                          {/* <Button onClick={() => toggleDanger(student?.name, student?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}
                          
                       

                          <ButtonForFunction
                          icon={<i className="fas fa-trash-alt"></i>}
                          color={'danger'}
                          className={"mx-1 btn-sm"}
                          func={()=> toggleDanger(student)}

                          />

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

export default StudentList;