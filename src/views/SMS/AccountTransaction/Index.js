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
    const [transaction,setTransaction] = useState([]);
    const[transactionLabel,setTransactionLabel] = useState('Select Transaction Type');
    const [transactionValue,setTransactionValue] = useState(0);
    const [status,setStatus] = useState([]);
    const [statusLabel,setStatusLabel] = useState('Select Status')
    const [statusValue,setStatusValue] = useState(0);
    const [transactionCode,setTransactionCode] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const customStyles2 = {
        control: (provided, state) => ({
          ...provided,
          background: '#fff',
          borderColor: '#9e9e9e',
          minHeight: '30px',
          height: '34px',
          boxShadow: state.isFocused ? null : null,
          
        }),
  
        // valueContainer: (provided, state) => ({
        //   ...provided,
        //   height: '30px',
        //   padding: '0 6px'
        // }),
    
        // input: (provided, state) => ({
        //   ...provided,
        //   margin: '0px',
        // }),
        // indicatorSeparator: state => ({
        //   display: 'none',
        // }),
        // indicatorsContainer: (provided, state) => ({
        //   ...provided,
        //   height: '30px',
        // }),
      };
  
      

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


  const closeModal = () => {
    setModalOpen(false);
   
  
  };

  const closeModal2 = () => {
    setModalOpen2(false);
   
  
  };
 

      const componentRef = useRef();

      useEffect(()=>{

        get(`ConsultantDD/index`)
        .then(res =>{
        setConsultant(res);
        })


      },[])

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

    const transactionOptions = transaction?.map(trn => ({
        label: trn?.name,
        value: trn?.id
    }))

    const selectTransaction = (label,value) => {
        setTransactionLabel(label);
        setTransactionValue(value);
    }

    const statusOptions = status?.map(st => ({
        label: st?.name,
        value: st?.id
    }))

    const selectStatus = (label,value) => {
        setStatusLabel(label);
        setStatusValue(value);
    }

    const handleReset = () => {
        setTransactionCode('');
        setConsultantLabel('All Consultant');
        setConsultantValue(0);
        setStatusLabel('Select Status');
        setStatusValue(0);
        setTransactionLabel('Select Transaction Type')
        setTransactionValue(0);
    }



    return (
        <div>
                    {/* Outflow Modal */}
                    <Modal
                    isOpen={modalOpen2}
                    toggle={closeModal2}
                    className="uapp-modal2"
                    >
                    <ModalHeader>Outflow Transaction</ModalHeader>
                    <ModalBody>
                        <Form>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Select Consultant <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                                    styles={customStyles2}
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    />
                            </Col>
                        </FormGroup>

                         <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Amount Available to Pay <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input type="text" name="statement" id="statement" value={0} disabled
                            required
                             />
                            </Col>
                        </FormGroup>

                         <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Amount<span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input type="text" name="statement" id="statement" value={1500} disabled
                            required
                             />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Select Payment Type <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                                    styles={customStyles2}
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Ref/Invoice<span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input type="text" name="statement" id="statement" placeholder='Enter Ref/Invoice'
                            required
                             />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Note <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input type="textarea" name="statement" id="statement" rows={2} placeholder='Enter Note'
                            required
                             />
                            </Col>
                        </FormGroup>

                        <div className='d-flex justify-content-end'>
                        <FormGroup className="has-icon-left position-relative">
                         <Button.Ripple
                            color="primary"
                            className="mr-1 mt-3">
                            Submit
                            </Button.Ripple>
                          </FormGroup>
                        </div>

                        </Form>
                    </ModalBody>
                    </Modal>

                    {/* Inflow Modal */}
                    <Modal
                    isOpen={modalOpen}
                    toggle={closeModal}
                    className="uapp-modal2"
                    >
                    <ModalHeader>Inflow Transaction</ModalHeader>
                    <ModalBody>
                        <Form>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Select Consultant <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                                    styles={customStyles2}
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Transaction Category <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                                    styles={customStyles2}
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Amount <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input
                            placeholder='Enter Amount'
                            required
                            />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Reference <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input
                            placeholder='Enter Reference'
                            required
                            />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Note <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input type="textarea" name="statement" id="statement" rows={2} placeholder='Enter Note'
                            required
                             />
                            </Col>
                        </FormGroup>

                        <div className='d-flex justify-content-end'>
                        <FormGroup className="has-icon-left position-relative">
                         <Button.Ripple
                            color="primary"
                            className="mr-1 mt-3">
                            Submit
                            </Button.Ripple>
                          </FormGroup>
                        </div>

                        </Form>
                    </ModalBody>
                    </Modal>

            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Account Transaction List</h3>
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
                    <div className='row g-2'>
                        <div className='col-md-10'>
                            <div className='row'>
                                <div className='col-md-3'>
                                {
                                    (userType !== userTypes?.Consultant) ?

                                    <>

                                    <h6 className='mb-2'>Consultant</h6>

                                    <Select
                                    styles={customStyles2}
                                    options={consultantOptions}
                                    value={{ label: consultantLabel, value: consultantValue }}
                                    onChange={(opt) => selectConsultant(opt.label, opt.value)}
                                    />

                                    </>

                                    :
                                    null
                                }

                                </div>
                                <div className='col-md-3'>
                                    <h6>Transaction Type</h6>
                                <Select
                                    styles={customStyles2}
                                    options={transactionOptions}
                                    value={{ label: transactionLabel, value: transactionValue }}
                                    onChange={(opt) => selectTransaction(opt.label, opt.value)}
                                    />
                                </div>
                                <div className='col-md-3'>
                                    <h6>Status</h6>
                                <Select
                                
                                    styles={customStyles2}
                                    options={statusOptions}
                                    value={{ label: statusLabel, value: statusValue }}
                                    onChange={(opt) => selectStatus(opt.label, opt.value)}
                                    />
                                </div>
                                <div className='col-md-3'>
                                    <h6>Transaction Code</h6>
                                 <Input
                                 type='text'
                                 placeholder='Enter Transaction Code'
                                 value={transactionCode}
                                 onChange={(e)=> setTransactionCode(e.target.value)}
                                 />
                                    
                                </div>
                                

                            </div>

                        </div>

                        <div className='col-md-2'>
                            
                            <div className='d-flex flex-column'>
                            <button className='mb-1 acc-tran-btn-style' onClick={()=>setModalOpen(true)}>Inflow</button>
                            <button className='mt-1 acc-tran-btn-style' onClick={()=>setModalOpen2(true)}>Outflow</button>
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

            <Card>
              <CardBody>
              <Table className="table-sm table-bordered">
                    <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                    
                    <th>SL/NO</th>
                    <th>Date</th>
                     <th>Consultant</th>
                     <th>Transaction Code</th>
                     <th>Transaction Type</th>
                     <th>Details</th>
                     <th>Inflow/Credit</th>
                     <th>Outflow/Debit</th>
                     <th>Balance</th>
                     <th>Balance Available To Withdraw</th>
                     <th>Status</th>
                     <th>Action</th>
                     
                    </tr>
                    </thead>
                    <tbody>
                    {/* {data?.map((ls, i) => (
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
                  ))} */}

           
                    
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