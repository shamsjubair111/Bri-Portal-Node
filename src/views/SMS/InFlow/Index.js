import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Select from 'react-select';
import { Link, useHistory } from 'react-router-dom';
import get from '../../../helpers/get';
import { userTypes } from '../../../constants/userTypeConstant';
import Pagination from '../Pagination/Pagination';
import ReactToPrint from "react-to-print";
import * as XLSX from "xlsx/xlsx.mjs";

const Index = () => {

    const history = useHistory();
    const userType = localStorage.getItem("userType");
    const [success,setSuccess] = useState(false);

    const [data,setData] = useState([]);

    const [consultant,setConsultant] = useState([]);
    const [consultantLabel,setConsultantLabel] = useState('All Consultant');
    const[consultantValue,setConsultantValue] = useState(0);


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

      const handleExportXLSX = () => {
        var wb = XLSX.utils.book_new(),
          ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    
        XLSX.writeFile(wb, "MyExcel.xlsx");
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

 

      const componentRef = useRef();

    useEffect(()=>{
        get(`ConsultantDD/index`)
        .then(res =>{
        setConsultant(res);
        })

        get(`BonusTransaction/Index?page=${currentPage}&pagesize=${dataPerPage}&consultantid=${consultantValue}`)
        .then(res => {
            console.log(res);
            setData(res);
        })

    },[success, currentPage, dataPerPage, consultantValue])


    const backToDashboard = () =>{
        history.push('/');

    }

    const consultantOptions = consultant?.map(con => ({
        label: con?.name,
        value: con?.id
    }))

    const selectConsultant = (label,value) => {
        setConsultantLabel(label);
        setConsultantValue(value);
    }


    return (
        <div>

            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Application InFlow List</h3>
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

                   

                    <Row className="mb-4">
            <Col lg="5" md="5" sm="4" xs="4">
              
            {
                                    (userType !== userTypes?.Consultant) ?

                                    
                                   
                                    <Select
                                    // styles={customStyles2}
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    />


                                  

                                    :

                                    null
                                }

            </Col>

            <Col lg="7" md="7" sm="8" xs="8">
              <div className="d-flex justify-content-end flex-wrap">
               
                
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
            </Col>
          </Row>

                <Table className="table-sm table-bordered">
                    <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                    
                    <th>SL/NO</th>
                    <th>Transaction Date</th>
                     <th>Consultant Name</th>
                     <th>Transaction Code</th>
                     <th>Amount</th>
                     <th>Transaction Type</th>
                     <th>Transaction Node</th>
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
                        {ls?.TransactionDate}
                      </td>
                      <td>
                        {ls?.Consultant}
                      </td>
                      <td>
                        {ls?.TransactionCode}
                      </td>

                      <td>
                        {ls?.Amount}
                      </td>
                      <td>
                        {ls?.TransactionType}
                      </td>
                      <td>{ls?.TransactionNote}</td>
                     
                     
                     
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
    );
};

export default Index;