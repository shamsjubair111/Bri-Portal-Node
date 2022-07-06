import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardHeader, ButtonGroup,  Button,   Input,  Col, Row, Table, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalFooter, ModalBody } from 'reactstrap';
import Select from 'react-select';
import Pagination from '../../Pagination/Pagination.jsx'
import { useHistory, useLocation } from 'react-router';
import { useToasts } from "react-toast-notifications";


import get from '../../../../helpers/get.js';
import remove from '../../../../helpers/remove.js';
import { Link } from 'react-router-dom';

import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';

const EmployeeList = (props) => {

    const history = useHistory();
    const [employeeList, setEmployeeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeeName, setEmployeeName] = useState('Select Employee Type...');
    const [employeeId, setEmployeeId] = useState(0);
    const [searchStr, setSearchStr] = useState('');
    const [dataPerPage,setDataPerPage] = useState(15);
    const [entity, setEntity] = useState(0);
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(0);
    const [loading,setLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const employeeTypeList = props.employeeTypeList[0];
    const location = useLocation();
    const { addToast } = useToasts();
    const [deleteModal, setDeleteModal] = useState(false);

    

    
      useEffect(()=>{
        if(location.id != undefined){
          localStorage.setItem('locationId', location.id);
          setEmployeeName(location.name);
        }
      },[])
 
    // const empId
    // user select data per page
    const dataSizeArr = [10,15,20,30,50,100,1000];
    const dataSizeName = dataSizeArr.map(dsn=> ({label: dsn, value: dsn}));

    const selectDataSize = value => {
        setLoading(true);
        setDataPerPage(value);
        setCallApi((prev)=> !prev);
    }

    const employeeTypeName = employeeTypeList?.map(empt => ({label: empt.name, value: empt.id}));
   

    useEffect(()=>{
       
        const empId = localStorage.getItem('locationId');
         get(`Employee/Index?page=${currentPage}&pagesize=${dataPerPage}&employeetypeid=${empId ? empId : employeeId}&searchstring=${searchStr}`).then((action)=>{
            setEmployeeList(action.models);
          
            localStorage.removeItem('locationId');
            setLoading(false)
            setEntity(action.totalEntity);
            setSerialNum(action.firstSerialNumber)
        })
    },[callApi, currentPage, dataPerPage, employeeId, searchStr]);

    const handleDeleteStaff = (staffId) =>{
     
      remove(`Employee/Delete/${staffId}`)
      .then(res => {
        console.log(res);
        
        addToast(res, {
          appearance: 'error',
          // autoDismiss: true,
        })
        const newEmployeeList = employeeList.filter(em => em.id !== staffId);
        setEmployeeList(newEmployeeList);
        setDeleteModal(false);
      })
    
      
    }

    const closeDeleteModal = () => {
      setDeleteModal(false);
    
  
  }
  

  const toggleDanger = (name,id) => {
        
       
    setDeleteModal(true)
   }
 

    const selectEmployeeType = (label,value) => {
        setEmployeeName(label);
        setEmployeeId(value);
        setCallApi((prev)=> !prev);
    }

    // search handler
    const handleSearch = () => {
        setCurrentPage(1);
        setCallApi((prev)=> !prev);
    }

    // on enter press
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setCurrentPage(1);
          setCallApi((prev)=>!prev);
        }
      }

      //  on reset
    const handleReset = () => {
      setEmployeeName('Select Employee Type...');
      setEmployeeId(0);
      setSearchStr('');
      setCurrentPage(1);
      setCallApi((prev)=> !prev);
    }


    //  change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCallApi((prev)=> !prev);
    };


    // add staff handler
    const handleAddStaff = () => {
        history.push("/addEmployeeGeneralInfo");
    }


    // toggle dropdown
    const toggle = () => {
        setDropdownOpen((prev)=> !prev)
      }


    // employee click handler
    const handleEmpClick = (id) => {
      history.push({
        pathname: '/employeeProfile',
        id: id
      })
    }



     // redirect to dashboard
    const backToDashboard = () => {
    history.push("/")
    }

    const handleExportXLSX = () => {
      var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(employeeList);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
  
      XLSX.writeFile(wb, "MyExcel.xlsx");
    };
  
    const componentRef = useRef(employeeList);

   
    return (
      <div>
        <Card className="uapp-card-bg">
              <CardHeader className="page-header">

            <h3 className="text-light">Staff List</h3>
            <div className="page-header-back-to-home" >
              <span onClick={backToDashboard} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to Dashboard</span>
                  </div>
              
              </CardHeader>
            </Card>

        <Card className="uapp-employee-search">
              <CardBody>
              
                <Row>
              <Col className="uapp-mb" md="3" sm="3">
                <Select options={employeeTypeName}
                        value={{label: employeeName ,value: employeeId }}
                        onChange={opt => selectEmployeeType(opt.label, opt.value)}
                        name="employeeType"
                        id="employeeType"
                    />
                </Col>


              <Col className="uapp-mb" md="3" sm="3" style={{display: 'flex'}}>

                <Input
                  style={{ height:"2.7rem"}}
                    type="text"
                    name="search"
                    value={searchStr}
                    id="search"
                    placeholder="Id, Name, Email"
                    onChange={(e)=> setSearchStr(e.target.value)}
                    onKeyDown={handleKeyDown}
                />


                </Col>



              <Col className="uapp-mb text-left" md="2" sm="2" xs="6">
                <div className="uapp-Search-div">
                  <i onClick={handleSearch} className="fas fa-search"></i>

                </div>
                </Col>

              <Col className="uapp-mb text-left" md="2" sm="2" xs="3">
           {/*     <Button onClick={handleReset} className="btn btn-uapp-danger"> <i className="fas fa-sync-alt"></i> Reset</Button>*/}
                <Button onClick={handleReset} className="btn btn-uapp-danger"> Reset</Button>
              </Col>

              <Col md="2" sm="2" xs="3" className="text-right" style={{ float: 'right' }}>

                <Dropdown className="uapp-dropdown" style={{float: 'right'}} isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle  caret>
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
            

                          
              </CardBody>
            </Card>

            <Card>

                <CardBody>
    
                <Row className="mb-3">
                
              <Col lg="6" md="5" sm="6" xs="4">
                <Button onClick={handleAddStaff} className="btn btn-uapp-add "> <i className="fas fa-plus"></i>  Add staff</Button>
                    </Col>



              <Col lg="6" md="7" sm="6" xs="8">
                <Row>
                          <Col lg="7" md="6"></Col>
                   <Col lg="2" md="3" sm="5" xs="5" className="mt-2">
                            Showing
                            </Col>
                  <Col md="3" sm="7" xs="7">
                            <Select options={dataSizeName}
                            value={{label: dataPerPage ,value: dataPerPage }}
                            onChange={opt => selectDataSize(opt.value)}
                            name="employeeType"
                            id="employeeType"
                        />
                            </Col>
                        </Row>
                    </Col>
                </Row>
             
                {
                    loading ?
                    <h2 className="text-center">Loading...</h2>
                :
                <div className="table-responsive" ref={componentRef}>
                  <Table className="table-sm table-bordered" >
                    <thead className="thead-uapp-bg">
                    <tr>
                        <th>SL/NO</th>
                        <th>Employee Type</th>
                        <th>Nationality</th>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th className="text-center">Action</th>
                     
                    </tr>
                    </thead>
                    <tbody>

                  {
                      employeeList?.map((emp,i) => <tr key={emp.id}>
                        <td>{serialNum+i}</td>
                        <td>{emp.employeeType.name}</td>
                        <td>{emp.nationality.name}</td>
                        <td className="cursor-pointer hyperlink-hover" onClick={() => handleEmpClick(emp.id)}> <span>  {`${emp.firstName} ${emp.lastName}`} </span> </td>
                        <td>{emp.email}</td>
                        <td>{emp.phoneNumber}</td>
                        <td className="text-center">
                          <ButtonGroup variant="text">
                            <Button  color="danger" onClick={toggleDanger}   className="mr-2 btn-sm"><i className="fas fa-trash-alt"></i></Button>
                            <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">
    
                      <ModalBody>
                        <p>Are You Sure to Delete this? Once Deleted it can't be Undone!</p>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" onClick={()=>handleDeleteStaff(emp?.id)}>YES</Button>
                        <Button onClick={closeDeleteModal}>NO</Button>
                      </ModalFooter>

                    </Modal>
                           <Link to={`/employeeGeneralInfo/${emp?.id}`}>
                           <Button color="warning"  className=" btn-sm"> <i className="fas fa-edit"></i> </Button>
                           </Link>
                          </ButtonGroup>
                        </td>
                        
                      </tr>)

                  }
              

                   </tbody>
                  </Table>
                </div>
                }

                  <Pagination dataPerPage={dataPerPage} totalData={entity} paginate={paginate} currentPage={currentPage} />

                </CardBody>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
  employeeTypeList: state.employeeTypeDataReducer.employeeType
})
export default connect(mapStateToProps)(EmployeeList);

