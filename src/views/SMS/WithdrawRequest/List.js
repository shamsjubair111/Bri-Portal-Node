import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Select from 'react-select';
import { Link, useHistory } from 'react-router-dom';
import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';
import ButtonForFunction from '../Components/ButtonForFunction';
import get from '../../../helpers/get';


const List = () => {

    const history = useHistory();
    const [serialNum, setSerialNum] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [callApi, setCallApi] = useState(false);
    const [entity, setEntity] = useState(0);
    const [consultant,setConsultant] = useState([]);
    const [consultantLabel,setConsultantLabel] = useState('Select Consultant');
    const [consultantValue,setConsultantValue] = useState(0);
    const [transaction,setTransaction] = useState([]);
    const [transactionLabel,setTransactionLabel] = useState('Select Transaction Status');
    const [transactionValue,setTransactionValue] = useState(0);
    const [payment,setPayment] = useState([]);
    const [paymentLabel,setPaymentLabel] = useState('Select Payment Status');
    const [paymentValue,setPaymentValue] = useState(0);
    const [transactionCode, setTransactionCode] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{

         get(`ConsultantDD/index`)
        .then(res =>{
            setConsultant(res);
        })

        get(`TransactionStatusDD/Index`)
        .then(res => {
          setTransaction(res);
        })

        get(`PaymentStatusDD/Index`)
        .then(res => {
            setPayment(res);
        })

    },[consultantValue, transactionValue, paymentValue, success, transactionCode])

    

    const backToDashboard = () =>{
        history.push('/');
    }

    const handleAddWithdrawRequest = () => {
        history.push('/createWithdrawRequest');
    }

    const consultantOptions = consultant?.map(con => ({
        label: con?.name,
        value: con?.id
    }))

    const selectConsultant = (label,value) => {
        setConsultantLabel(label);
        setConsultantValue(value);
    }

    const transactionOptions = transaction?.map(st => ({
        label: st?.name,
        value: st?.id
    }))

    const selectTransaction = (label,value) => {
        setTransactionLabel(label);
        setTransactionValue(value);
    }

    const paymentOptions = payment?.map(st => ({
        label: st?.name,
        value: st?.id
    }))

    const selectPayment = (label,value) => {
        setPaymentLabel(label);
        setPaymentValue(value);
    }

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

       const handleExportXLSX = () => {
        // var wb = XLSX.utils.book_new(),
        // ws = XLSX.utils.json_to_sheet(studentData);
        // XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    
        // XLSX.writeFile(wb, "MyExcel.xlsx");
      };

    const componentRef = useRef();

    const handleClear = () => {
        setConsultantLabel('Select Consultant');
        setConsultantValue(0);
        setTransactionLabel('Select Transaction Status');
        setTransactionValue(0);
        setPaymentLabel('Select Payment Status');
        setPaymentValue(0);
        setTransactionCode('');
        
    }
    


    return (
        <div>

            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Withdraw Request List</h3>
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
                        <div className='col-md-3'>
                        
                        <Select
                                options={consultantOptions}
                                
                                value={{ label: consultantLabel, value: consultantValue }}
                                onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                />

                        </div>

                        <div className='col-md-3'>
                        <Select
                                    
                                    options={transactionOptions}
                                    value={{ label: transactionLabel, value: transactionValue }}
                                    onChange={(opt) => selectTransaction(opt.label, opt.value)}
                                    />

                        </div>

                        <div className='col-md-3'>
                        <Select
                                   
                        options={paymentOptions}
                         value={{ label: paymentLabel, value: paymentValue }}
                        onChange={(opt) => selectPayment(opt.label, opt.value)}
                        />

                        </div>

                        <div className='col-md-3'>
                            <Input
                            style={{height: '38px'}}
                            type='text'
                            name=''
                            id=''
                            placeholder='Enter Transaction Code'
                            value={transactionCode}
                            onChange={(e)=> setTransactionCode(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='d-flex justify-content-end btn-clear'>
                            <span className="text-danger" onClick={handleClear}>
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

                <Button color='primary' onClick={handleAddWithdrawRequest}>
                <i className="fas fa-plus"></i>
                    <span> Add New Withdraw Request</span>

                </Button>
              
            </div>

            <div className='col-lg-7 col-md-7 col-sm-8 col-xs-8'>
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
                    isOpen={dropdownOpen}
                    toggle={toggle}
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
                     <th>Request Date</th>
                     <th>Consultant Name</th>
                     <th>Transaction Code</th>
                     <th>Amount</th>
                     <th>Payment Type</th>
                     <th>Payment Date</th>
                     <th>Status</th>
                     <th>Payment Status</th>
                     <th>Invoice</th>
                     </tr>
                     </thead>
                     <tbody>
                    {/* {data?.map((ls, i) => (
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
                  ))} */}
                    </tbody>
                    </Table>

                    {/* <Pagination
                    dataPerPage={dataPerPage}
                    totalData={entity}
                    paginate={paginate}
                    currentPage={currentPage}
                    /> */}

                </CardBody>
            </Card>


            
        </div>
    );
};

export default List;