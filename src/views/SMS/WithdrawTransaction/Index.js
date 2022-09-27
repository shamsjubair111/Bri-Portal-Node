import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav,NavLink, NavItem, UncontrolledTooltip, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import ReactTableConvertToXl from '../ReactTableConvertToXl/ReactTableConvertToXl';
import * as XLSX from "xlsx/xlsx.mjs";
import ReactToPrint from 'react-to-print';
import Select from 'react-select';
import get from '../../../helpers/get';
import Pagination from '../Pagination/Pagination';

const Index = () => {

  const [listData, setListData] = useState([]);

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        background: '#fff',
        borderColor: '#9e9e9e',
        minHeight: '33px',
        height: '33px',
        boxShadow: state.isFocused ? null : null,
        
      }),

      // menu: () => ({
        
      //   overflowY: 'auto'
        
      // }),
     
     
   
    };
    

    const [label,setLabel] = useState('Select Consultant');
    const [consultant,setCounsultant] = useState([]);
    const [value,setValue] = useState(0);
    const [transactionCode, setTransactionCode] = useState('');
    const [success,setSuccess]= useState(false);
    const [modalOpen, setModalOpen] = useState(false);
   
   

   

    useEffect(()=>{

      get(`WithdrawTransaction/Index?page=${currentPage}&pagesize=${dataPerPage}&consultantid=${value}&code=${transactionCode}`)
      .then(res => {
        console.log('data', res);
        setListData(res?.models);
        setEntity(res?.totalEntity)
      })

      get(`ConsultantDD/index`)
      .then(res =>{
          setCounsultant(res);
      })

    },[value,  success, transactionCode])

    const closeModal = () => {
      setModalOpen(false);
     
    
    };

    const consultantOptions = consultant?.map(con => ({
      label: con?.name,
      value: con?.id
  }))

  const selectConsultant = (label,value) => {
      setLabel(label);
      setValue(value);
  }

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

    const handleReset = () => {
      setLabel('Select Consultant');
      setValue(0);
      setTransactionCode('');
  }

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
        ws = XLSX.utils.json_to_sheet(listData);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
  
      XLSX.writeFile(wb, "MyExcel.xlsx");
    };

    const componentRef = useRef();
 
     const handleClear = () => {
         setLabel('Select Consultant');
         setValue(0);
        
         setTransactionCode('');
         
     }

    return (
        <div>
            <Modal
                    isOpen={modalOpen}
                    toggle={closeModal}
                    className="uapp-modal2"
                    >
                    <ModalHeader>Withdraw Transaction</ModalHeader>
                    <ModalBody>
                    <Form >





              <FormGroup row className="has-icon-left position-relative">
                  <Col md="4">
                  <span>
                      Amount Available To Pay
                  </span>
                  </Col>
                  <Col md="8">
                  <Input
                  
                  value={50}
                  disabled={true}
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
                  type='number'
                  placeholder='Enter Amount'
                  required
                  name='amount'
                  id='amount'
                  />
                  </Col>
              </FormGroup>


              <div className='d-flex justify-content-end'>
             
               

              <Button.Ripple
                  color="primary"
                  className="mr-1 mt-3"
                  
                  >
                  Submit
                  </Button.Ripple>
                
              </div>

              </Form>
                    </ModalBody>
                    </Modal>
            <Card>
                <CardBody>
               <div className='row'>
                <div className='col-md-6'>
                <Select
                styles={customStyles}
                options={consultantOptions}
                                
                value={{ label: label, value: value }}
                onChange={(opt) => selectConsultant(opt.label, opt.value)}
                    />

                </div>

                <div className='col-md-6'>
                  <Input
                  styles={{height: '40px'}}
                  type='text'
                  placeholder='Enter Transaction Code'
                  onChange={(e)=> setTransactionCode(e.target.value)}
                  />

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
            </div>
          </div>


    

                <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Transaction Date</th>
                    <th>Agent Name</th>
                    <th>Transaction Code</th>
                    <th>Amount</th>
                    <th>Reference/Invoice No.</th>
                    <th>Payment Type</th>
                    <th>Action</th>
                   
                 
                  </tr>
                </thead>
                <tbody>
                {listData?.map((ls, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                    
                      <td>
                        {i+1}
                      </td>
                      <td>
                        {ls?.transactionDate}
                      </td>
                      <td>
                        {ls?.consultantName}
                      </td>
                      <td>
                        {ls?.transactionCode}
                      </td>
                      <td>{ls?.amount}</td>
                      <td>{ls?.reference}</td>
                      <td>{ls?.paymentType}</td>
                    
                     
                     
                     
                      <td style={{ width: "15%" }} className="text-center">
                        <ButtonGroup variant="text">
                       


                            <Button className='' color='primary' onClick={()=> setModalOpen(true)}>
                               Edit
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