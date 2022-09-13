import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import get from "../../../../helpers/get";
import remove from "../../../../helpers/remove";
import { useToasts } from "react-toast-notifications";

import ReactTableConvertToXl from '../../ReactTableConvertToXl/ReactTableConvertToXl';
import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';
import LinkButton from "../../Components/LinkButton";
import ButtonForFunction from "../../Components/ButtonForFunction";
import { permissionList } from "../../../../constants/AuthorizationConstant";

const BranchList = () => {
  const {addToast} = useToasts();
  const [deleteModal, setDeleteModal] = useState(false);
  const [branchList, setBranchList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serialNum, setSerialNum] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [delData, setDelData] = useState(null);
  const [success,setSuccess] = useState(false);

  const history = useHistory();
  const backToDashboard = () => {
    history.push("/");
  };

  const permissions = JSON.parse(localStorage.getItem("permissions"));

  useEffect(() => {
    get(`Branch/Index`).then((res) => {
     
      setBranchList(res);
    });
  }, [success]);

  // const handleLocalStorage = () => {
  //   localStorage.removeItem("branchId");
  //   // localStorage.removeItem("branchManagerId");
  // };

  const handleUpdate = (id) =>{
     
     history.push(`/branchInformation/${id}`);
                  
  }

  const handleDeletebranch = () => {
    remove(`Branch/Delete/${delData}`).then((res) => {
     
      addToast(res, {
        appearance:  "error",
        autoDismiss: true,
      });
      setDeleteModal(false);
      
      setSuccess(!success);
     
    });
  };

  const toggleDanger = (id) => {
        
       setDelData(id);
    setDeleteModal(true)
   }


       // on Close Delete Modal
const closeDeleteModal = () => {
setDeleteModal(false);


}

// toggle dropdown
const toggle = () => {
  setDropdownOpen((prev) => !prev);
};

const handleExportXLSX = () => {
  var wb = XLSX.utils.book_new(),
  ws = XLSX.utils.json_to_sheet(branchList);
  XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

  XLSX.writeFile(wb, "MyExcel.xlsx");
};

const componentRef = useRef();



  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Branch List</h3>
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
             

           {
              permissions?.includes(permissionList?.Add_Branch) ?
               <LinkButton 
               url={"/branchInformation"}
              //  func={handleLocalStorage}
               className={"btn btn-uapp-add "}
               icon={<i className="fas fa-plus"></i>}
               name={"Add New"}
           
             />:
             null
           }

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
                      <i className="fas fa-print fs-7"></i>
                    </DropdownToggle>
                    <DropdownMenu className='bg-dd'>
                      {/* <DropdownItem>Export All</DropdownItem> */}
                      {/* <DropdownItem divider /> */}
                      {/* <DropdownItem> */}

                      <div className='d-flex justify-content-around align-items-center mt-2'>
                        <div className='text-light cursor-pointer'>
                           {/* <p onClick={handleExportXLSX}><i className="fas fa-file-excel"></i></p> */}
                           <ReactTableConvertToXl 
                            id="test-table-xls-button"
                            table="table-to-xls"
                            filename="tablexls"
                            sheet="tablexls"
                            icon={<i className="fas fa-file-excel"></i>}
                          />
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
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>

                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {branchList?.map((singleBranch, i) => (
                    <tr key={singleBranch?.id} style={{ textAlign: "center" }}>
                      <td>{serialNum + i}</td>

                      <td>{singleBranch?.name}</td>
                      <td>{singleBranch?.email}</td>
                      <td>{singleBranch?.phoneNumber}</td>

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">

                          <LinkButton 
                            url={`/branchProfile/${singleBranch?.id}`}
                            color={"primary"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-eye"></i>}
                            permission={6}
                          />


                            <ButtonForFunction 
                              color={"dark"}
                              className={"mx-1 btn-sm"}
                              func={()=>handleUpdate(singleBranch?.id)}
                              icon={<i className="fas fa-edit"></i>}
                              permission={6}
                            />
                     

                          <ButtonForFunction 
                            color={"danger"}
                            func={()=>toggleDanger(singleBranch?.id)}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-trash-alt"></i>}
                            permission={6}
                          />

                          <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">
    
                          <ModalBody>
                            <p>Are You Sure to Delete this? Once Deleted it can't be Undone!</p>
                          </ModalBody>
    
                          <ModalFooter>
                            <Button color="danger"   onClick={handleDeletebranch}>YES</Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
                          </ModalFooter>
    
                        </Modal>
                         
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default BranchList;
