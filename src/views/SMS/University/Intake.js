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
  } from "reactstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import get from '../../../helpers/get';
import Pagination from "../../SMS/Pagination/Pagination.jsx";
import remove from '../../../helpers/remove';
import { useToasts } from 'react-toast-notifications';

import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';
import ButtonForFunction from '../Components/ButtonForFunction';
import LinkButton from '../Components/LinkButton';


const Intake = () => {

    const [intakeList, setIntakeList] = useState([1,2,3]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [dataPerPage, setDataPerPage] = useState(15);
    // const [searchStr, setSearchStr] = useState("");
    const [serialNum, setSerialNum] = useState(1);
    const [entity, setEntity] = useState(0);
    // const [callApi, setCallApi] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [success, setSuccess] = useState(false);


    const history = useHistory();
    const { addToast } = useToasts();

    const handleAddNewButton = () => {
        history.push("/addNewIntakes");
    }

    // useEffect(()=>{
    //     get(
    //         `Intake/GetPaginated?page=${currentPage}&pageSize${dataPerPage}&search=${searchStr}`
    //       ).then((res) => {
    //           setIntakeList(res?.models);
    //           setSerialNum(res?.firstSerialNumber);
    //           setEntity(res?.totalEntity);
    //           setLoading(false);
    //       });
    // },[])

    useEffect(()=>{
      get(`Intake/Index`).then((res) => {

            setIntakeList(res);
            setEntity(res?.totalEntity);
            setLoading(false);

          });
        },[success])


     // redirect to dashboard
        const backToDashboard = () => {
        history.push("/");
        };

     // toggle dropdown
        const toggle = () => {
          setDropdownOpen((prev) => !prev);
        };

     const toggleDanger = (name,id) => {
       localStorage.setItem('intakeName',name)
       localStorage.setItem('intakeId',id)
       setDeleteModal(true)
      }

      const closeDeleteModal = () => {
        setDeleteModal(false);
        localStorage.removeItem('intakeName')
        localStorage.removeItem('intakeId')
      
      }


      const handleDelete = (id) => {
        const returnValue = remove(`Intake/Delete/${id}`).then((action)=> {
          // console.log(action);
          setSuccess(!success);
          setDeleteModal(false);
           addToast(action?.data?.message, {
             appearance: 'error',
             autoDismiss: true,
           })
  
        })
      };

      const handleExportXLSX = () => {
        var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(intakeList);
        XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    
        XLSX.writeFile(wb, "MyExcel.xlsx");
      };
    
      const componentRef = useRef();

      
    return (
        <div>

            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Intake</h3>
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

                  <ButtonForFunction
                    func={handleAddNewButton}
                    className={"btn btn-uapp-add "}
                    icon={<i className="fas fa-plus"></i>}
                    name={" Add New"}
                    permission={6}
                  />

                </Col>

            <Col lg="6" md="7" sm="6" xs="8">
              <Row>
                <Col lg="5" md="6"></Col>
                <Col lg="2" md="3" sm="5" xs="5" className="mt-2">
                  {/* Showing */}
                </Col>
                <Col md="3" sm="7" xs="7">
                  {/* <Select
                    options={dataSizeName}
                    value={{ label: dataPerPage, value: dataPerPage }}
                    onChange={(opt) => selectDataSize(opt.value)}
                  /> */}
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
                      {/* <DropdownItem>Export All</DropdownItem> */}
                      {/* <DropdownItem divider /> */}
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
                          className="download-table-xls-button button-export"
                          table="table-to-xls"
                          filename="tablexls"
                          sheet="tablexls"
                          buttonText={<i class="far fa-file-excel"></i>}/> */}

                        
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
            <div className="table-responsive" ref={componentRef}>
              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Intake Name</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {intakeList?.map((intake, i) => (
                    <tr key={intake.id} style={{ textAlign: "center" }}>
                      <th scope="row">{serialNum + i}</th>
                      
                      <td>
                        {intake?.name}
                      </td>
                    
                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                            
                            <LinkButton
                              url={`/updateIntake/${intake?.id}`}
                              color={"dark"}
                              className={"mx-1 btn-sm"}
                              icon={<i className="fas fa-edit"></i>}
                              permission={6}
                            />

                            <ButtonForFunction
                              func={() => toggleDanger(intake?.name, intake?.id)}
                              color={"danger"}
                              className={"mx-1 btn-sm"}
                              icon={<i className="fas fa-trash-alt"></i>}
                              permission={6}
                            />

                        </ButtonGroup>

                        {/* modal for delete */}
                          <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">

                             <ModalBody>
                               <p>Are You Sure to Delete this {localStorage.getItem('intakeName')} ? Once Deleted it can't be Undone!</p>
                             </ModalBody>
                     
                             <ModalFooter>
                             {/* onClick={()=>handleDelete(sub?.id)} */}
                               <Button color="danger" onClick={() => handleDelete(localStorage.getItem('intakeId'))}>YES</Button>
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

          <div className='d-flex justify-content-end mt-3'>
            <h5>Total Results Found: {intakeList.length}</h5>
          </div>

        </CardBody>
      </Card>

        </div>      
    );
};

export default Intake;