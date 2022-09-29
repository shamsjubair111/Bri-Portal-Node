import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Select from 'react-select';
import { Link, useHistory } from 'react-router-dom';
import get from '../../../helpers/get';
import Pagination from '../Pagination/Pagination';
import ButtonForFunction from '../Components/ButtonForFunction';
import ReactToPrint from "react-to-print";
import * as XLSX from "xlsx/xlsx.mjs";
import { userTypes } from '../../../constants/userTypeConstant';
import Loader from '../Search/Loader/Loader';

const Index = () => {

    const userType = localStorage.getItem("userType");
    const history = useHistory();

    const [uapp,setUapp] = useState([]);
    const [uappLabel,setUappLabel] = useState('UAPP Id');
    const[uappValue,setUappValue] = useState(0);

    const [student,setStudent] = useState([]);
    const [studentLabel,setStudentLabel] = useState('Select Student');
    const[studentValue,setStudentValue] = useState(0);

    const [consultant,setConsultant] = useState([]);
    const [consultantLabel,setConsultantLabel] = useState('Select Consultant');
    const[consultantValue,setConsultantValue] = useState(0);

    const [intake,setIntake] = useState([]);
    const [intakeLabel,setIntakeLabel] = useState('Select Intake');
    const[intakeValue,setIntakeValue] = useState(0);

    const [data,setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [callApi, setCallApi] = useState(false);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [entity, setEntity] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
     // user select data per page
     const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
     const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));
     const [orderLabel, setOrderLabel] = useState("Select order by");
     const [orderValue, setOrderValue] = useState(0);
     const [dropdownOpen1, setDropdownOpen1] = useState(false);
     const [loading,setLoading] = useState(true);
 
     const selectDataSize = (value) => {
       
       setDataPerPage(value);
       setCallApi((prev) => !prev);
     };

       // search handler
       const handleSearch = () => {
        setCurrentPage(1);
        setCallApi((prev) => !prev);
      };

     const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCallApi((prev) => !prev);
      };

      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          setCurrentPage(1);
          setCallApi((prev) => !prev);
        }
      };

      const toggle = () => {
        setDropdownOpen((prev) => !prev);
      };

      // toggle1 dropdown
  const toggle1 = () => {
    setDropdownOpen1((prev) => !prev);
  };

      const handleExportXLSX = () => {
        var wb = XLSX.utils.book_new(),
          ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    
        XLSX.writeFile(wb, "MyExcel.xlsx");
      };

      const componentRef = useRef();

    useEffect(()=>{

        get(`ConsultantDD/index`)
        .then(res =>{
            setConsultant(res);
        })

        get(`StudentDD/Index`)
        .then(res =>{
            setStudent(res);
        })

        get(`AccountIntake/index`)
        .then(res => {
            setIntake(res);
        })

        get(`UappIdDD/Index`)
        .then(res =>{
          
            setUapp(res);
        })

        get(`ApplicationTransaction/Index?page=${currentPage}&pagesize=${dataPerPage}&uappid=${uappValue}&studentid=${studentValue}&consultantid=${consultantValue}&intakeid=${intakeValue}`)
        .then(res =>{
           
            setData(res?.models);
            setLoading(false);
        })

    },[currentPage, dataPerPage, callApi, uappValue, intakeValue, studentValue, consultantValue])

    const backToDashboard = () =>{
        history.push('/');
    }

    const studentOptions = student?.map(std => ({
        label: std?.name,
        value: std?.id
    }))

    const selectStudent = (label,value) => {
        setStudentLabel(label);
        setStudentValue(value);
    }

    const consultantOptions = consultant?.map(con => ({
        label: con?.name,
        value: con?.id
    }))

    const selectConsultant = (label,value) => {
        setConsultantLabel(label);
        setConsultantValue(value);
    }

    const intakeOptions = intake?.map(int => ({
        label: int?.intakeName,
        value: int?.id
    }))

    const selectIntake = (label,value) => {
        setIntakeLabel(label);
        setIntakeValue(value);
    }

    const uappOptions = uapp?.map(int => ({
        label: int?.name,
        value: int?.id
    }))

    const selectUapp = (label,value) => {
        setUappLabel(label);
        setUappValue(value);
    }

    const handleReset = () => {
        setUappLabel('UAPP Id');
        setUappValue(0);
        setStudentLabel('Select Student');
        setStudentValue(0);
        setConsultantLabel('Select Consultant');
        setConsultantValue(0);
        setIntakeLabel('Select Intake');
        setIntakeValue(0);
    }



    return (
        <div>

           {
            loading?
            <Loader/>
            :
            <div>
               <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Application Transaction List</h3>
                <div className="page-header-back-to-home">
                  <span className="text-light" onClick={backToDashboard}>
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card>

                <CardBody>

               
                        <div className='row'>
                            <div className='col-md-12'>
                               
                               <div className='row'>

                                <div className='col-md-3'>
                                <Select
                                options={uappOptions}
                                // styles={customStyles2}
                                value={{ label: uappLabel, value: uappValue }}
                                onChange={(opt) => selectUapp(opt.label, opt.value)}
                                />


                                </div>

                                <div className='col-md-3'>
                                <Select
                                // styles={customStyles2}
                                options={studentOptions}
                                value={{ label: studentLabel, value: studentValue }}
                                onChange={(opt) => selectStudent(opt.label, opt.value)}
                                />


                                </div>
                                {
                                    (userType !== userTypes?.Consultant) ?

                                    
                                    <div className='col-md-3'>
                                    <Select
                                    // styles={customStyles2}
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    />


                                    </div>

                                    :

                                    null
                                }
                                
                                <div className='col-md-3'>
                                <Select
                                // styles={customStyles2}
                                options={intakeOptions}
                                value={{ label: intakeLabel, value: intakeValue }}
                                onChange={(opt) => selectIntake(opt.label, opt.value)}
                                />


                                </div>

                               </div>

                            </div>

                           

                        </div>

                        <div className='row'>
                        <div className='col-12 d-flex justify-content-end'>
                        <div
                        className="mt-1 mx-1 d-flex btn-clear"
                        onClick={handleReset}
                      >
                      
                        <span className="text-danger">
                          <i className="fa fa-times"></i> Clear
                        </span>
                      </div>

                        </div>

                    </div>

                </CardBody>

            </Card>

            <Card className='uapp-employee-search'>
                <CardBody>
                <div className=" row mb-3">
            <div className='col-lg-5 col-md-5 col-sm-4 col-xs-4'>
              
            </div>

            <div className='col-lg-7 col-md-7 col-sm-8 col-xs-8'>
              <div className="d-flex justify-content-end flex-wrap">
               
                
                <div className="me-3">
                  <div className="d-flex align-items-center">
                    <div className="mr-2">Showing :</div>
                    <div>
                      <Select
                      className='mr-2'
                        options={dataSizeName}
                        value={{ label: dataPerPage, value: dataPerPage }}
                        onChange={(opt) => selectDataSize(opt.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mr-2">
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
                </div>

                <div className="me-3">
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
                </div>
              </div>
            </div>
          </div>

                <Table className="table-sm table-bordered">
                    <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                    
                    <th>SL/NO</th>
                     <th>Id</th>
                     <th>Intake</th>
                     <th>Consultant</th>
                     <th>Student</th>
                     <th>University</th>
                     <th>Subject</th>
                     <th>Intake Range</th>
                     <th>Amount</th>
                     <th>Reg. Status</th>
                     <th>Payment Status</th>
                     <th>Transaction Date</th>
                     <th>Status</th>
                     <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((ls, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                    
                      <td>
                        {i+1}
                      </td>
                      <td>
                        {ls?.Id}
                      </td>
                      <td>
                        {ls?.Intake}
                      </td>
                      <td>
                        {ls?.Consultant}
                      </td>
                      <td>{ls?.Student}</td>
                      <td>{ls?.Unviersity}</td>
                      <td>{ls?.Subject}</td>
                      <td>{ls?.AccountIntake}</td>
                      <td>{ls?.Amount}</td>
                      <td> {ls?.RegistrationStatus}</td>
                      <td>{ls?.PaymentStatus}</td>
                      <td>{ls?.TransactionDate}</td>
                      <td>{ls?.TransactionStatus}</td>
                     
                     
                     
                      <td style={{ width: "15%" }} className="text-center">
                        <ButtonGroup variant="text">
                       


                            <Button className='me-1 btn-sm' color='primary'>
                            <Link to='/' target='_black'><i className="fas fa-eye"></i></Link>
                            </Button>

                          


                        </ButtonGroup>

                     
                       



                      </td>
                    </tr>
                  ))}

           
                    
                    </tbody>
                    </Table>

                    <Pagination
                    dataPerPage={dataPerPage}
                    totalData={entity}
                    paginate={paginate}
                    currentPage={currentPage}
                     />
                </CardBody>
            </Card>
            </div>
           }


            
        </div>
    );
};

export default Index;