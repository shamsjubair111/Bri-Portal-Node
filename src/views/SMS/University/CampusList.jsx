import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, Table } from 'reactstrap';
import get from '../../../helpers/get';
import Select from "react-select";
import { connect } from 'react-redux';
import Pagination from "../../SMS/Pagination/Pagination.jsx";

import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';

const CampusList = () => {

    const [campusList, setCampusList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [searchStr, setSearchStr] = useState("");
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(1);
    const [entity, setEntity] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const history = useHistory();
    // const location = useLocation();
    // console.log('idddddd',location?.id);


    useEffect(() => {

        // const page = 0;
        // const pageSize = 0;  
        
        const search = "";

        get(
          `UniversityCampus/index?page=${currentPage}&pageSize=${dataPerPage}&universityId=${localStorage.getItem('campusId')}&search=${searchStr}`
        ).then((res) => {
          // setCampusList(res.models);
          console.log("pagination",res);
          // setSerialNum(res?.firstSerialNumber);
          // setEntity(res?.totalEntity);
          // setLoading(false);
        });

        get(`UniversityCampus/GetByUniversity/${localStorage.getItem('universityId')}`).then(res =>{

            setCampusList(res);
            console.log("campList", res);
            setLoading(false);
        })
    
    
      
    
      }, [callApi, currentPage, dataPerPage, searchStr]);
      

      const handleSearch = () => {
        setCurrentPage(1);
        setCallApi((prev) => !prev);
      };

      // on enter press
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          setCurrentPage(1);
          setCallApi((prev) => !prev);
        }
      };

      const searchValue = (e) => {
        setSearchStr(e.target.value);
        handleSearch();
      };    


    const backToDashboard = () => {
        history.push("/");
      };

    const handleClearSearch = () =>{
      setSearchStr("");
      setCallApi((prev) => !prev);
    }

    // const selectDataSize = (value) => {
    //   setLoading(true);
    //   setDataPerPage(value);
    //   setCallApi((prev) => !prev);
    // };

    //  change page
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   setCallApi((prev) => !prev);
  // };

    // user select data per page
    const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
    const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

    // toggle dropdown
    const toggle = () => {
      setDropdownOpen((prev) => !prev);
    };

    const handleExportXLSX = () => {
      var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(campusList);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
  
      XLSX.writeFile(wb, "MyExcel.xlsx");
    };
  
    const componentRef = useRef();

    return (
        <div>

        <Card className="uapp-card-bg">
            <CardHeader className="page-header">
                <h3 className="text-light">Campus list</h3>
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

             <div style={{ display: "flex", justifyContent: "end"}}>
             <Input
                style={{ height: "2.7rem" }}
                type="text"
                name="search"
                value={searchStr}
                id="search"
                placeholder="Name ,Short Name"
                onChange={searchValue}
                onKeyDown={handleKeyDown}
              />
             </div>

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

                {/* <div className="mt-2 mx-1">
                <span className="btn btn-primary">Export</span>
              </div> */}
              </div>
            </Col>
          </Row>
          </CardBody>
      </Card>

      <Card className="uapp-employee-search">
          <CardBody>

          <Row className="mb-3">
            <Col lg="6" md="5" sm="6" xs="4">
              {/* <Button
                // onClick={handleAddUniversity}
                className="btn btn-uapp-add "
              >
                {" "}
                <i className="fas fa-plus"></i> Add New{" "}
              </Button> */}
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
            </Col>
          </Row>

          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) :
          <div className="table-responsive" ref={componentRef}>
              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Name</th> 
                    <th>Campus City</th>
                    <th>Student</th>
                    <th>Cost</th>
                    <th>Programs</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  { 

                        campusList?.map((campus, i) => (
                          <tr key={campus?.id} style={{ textAlign: "center" }}>
                            <td>{serialNum + i}</td>
                            
                            <td>
                              {campus?.name}
                            </td>
                            <td>
                              {campus?.campusCity}
                            </td>
                            <td>
                              Total Student - {campus?.totalStudent} {<br />}
                              International Student - {campus?.internationalStudent}
                            </td>
                            {/* <td>{campus?.internationalStudent}</td> */}

                            <td>
                              Avg. Tution Fee - {campus?.avarageTutionFee} {<br />}
                              Avg. Living Cost - {campus?.avarageLivingCost} {<br />}
                              Avg. Application Fee - {campus?.avarageApplicationFee} {<br />}
                              Est. Total Cost - {campus?.estimatedTotalCost}
                            </td>
                            <td>
                               {" "}
                               <span
                                 className="badge badge-secondary"
                                 style={{ cursor: "pointer" }}
                               >
                                 <Link className="text-decoration-none" to = {`campusSubjectList/${campus?.id}`}> 
                                 <span> View </span>
                                 </Link>
                               </span>{" "}
                             </td>
                            
                            <td style={{ width: "8%" }} className="text-center">
                              <ButtonGroup variant="text">
                              <Link to= {`/campusDetails/${campus?.id}`}>
                                <Button color="primary" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-eye"></i>{" "}
                                </Button>
                                </Link>
                                <Button color="dark" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-edit"></i>{" "}
                                </Button>
                                <Button color="danger" className="mx-1 btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                          </tr>
                        ))}
                </tbody>
              </Table>
            </div>
          }

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

// export default CampusList;

const mapStateToProps = (state) => ({
  univerSityTypeList: state.universityTypeDataReducer.universityTypes,
  univerSityCountryList: state.universityCountryDataReducer.universityCountries,
  univerSityStateList: state.universityStateDataReducer.universityStates,
});
export default connect(mapStateToProps)(CampusList);