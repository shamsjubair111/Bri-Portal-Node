import React, { useEffect, useState, Component, useRef } from 'react';
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
  } from "reactstrap";

  // import { permissionList } from '../../../../constants/AuthorizationConstant';
  import { permissionList } from '../../../../constants/AuthorizationConstant';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import * as XLSX from 'xlsx/xlsx.mjs';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from 'react-to-print';

import Select from "react-select";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from 'react-router-dom';
import get from '../../../../helpers/get';
import { useToasts } from 'react-toast-notifications';
import remove from '../../../../helpers/remove';
import Pagination from "../../../SMS/Pagination/Pagination.jsx";
import { connect, useDispatch } from 'react-redux';
// import { StoreUniversityCampusListData } from '../../../redux/actions/SMS/UniversityAction/UniversityCampusListAction';
import { StoreUniversityCampusListData } from '../../../../redux/actions/SMS/UniversityAction/UniversityCampusListAction';
// import { StoreUniversityListData } from '../../../redux/actions/SMS/UniversityAction/UniversityListAction';
import { StoreUniversityListData } from '../../../../redux/actions/SMS/UniversityAction/UniversityListAction';
import ButtonForFunction from '../../Components/ButtonForFunction';
import LinkButton from '../../Components/LinkButton';
import { userTypes } from '../../../../constants/userTypeConstant';


const UniversitySubjectList = (props) => {
    const dispatch = useDispatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subList, setSubList] = useState([]);
    const [entity, setEntity] = useState(0);
    const [loading, setLoading] = useState(false);
    const [serialNum, setSerialNum] = useState(1);
    const [success, setSuccess] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [callApi, setCallApi] = useState(false);
    
    const univerSList = props.univerSityDropDownList[0];
    const camppus = props.campusDropDownList[0];

    const [uniLabel, setUniLabel] = useState("Select University");
    const [uniValue, setUniValue] = useState(0);
    const [campLabel, setCampLabel] = useState("Select Campus");
    const [campValue, setCampValue] = useState(0);
    const [campList, setCampList] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [uniTypeId ,setUTypeId] = useState(0);
    const [ulist,setUList] = useState([]);
    const [cam, setCam] = useState([]);
    const [submitData, setSubmitData] = useState(false);
    const [providerValue, setProviderValue] = useState(0);

    // for tab
    const [activetab, setActivetab] = useState("1");

    const userType = localStorage.getItem("userType");
    const referenceId = localStorage.getItem("referenceId");

    const history = useHistory();
    const { addToast } = useToasts();
    const {id} = useParams();

    // redirect to dashboard
    const backToUniversityList = () => {
      history.push("/universityList");
    };

    // add university handler
    const handleAddSubject = () => {
      localStorage.removeItem("subjectId");
      history.push(`/addUniversitySubject/${id}`);
    };

    // toggle dropdown
    const toggle = () => {
      setDropdownOpen((prev) => !prev);
    };

    useEffect(()=>{
      get(`ProviderHelper/GetProviderId/${userType}/${referenceId}`).then(res=>{
        console.log("providerHelper",typeof(res));
          setProviderValue(res != 0 ? res : 0);
          // if(res != 0){
          //   localStorage.setItem("providerValue", res);
          // }
      })
    },[userType, referenceId]);

    useEffect(()=>{
      if(userType == userTypes?.ProviderAdmin){
        get(`ProviderUniversityDD/Index/${providerValue}`).then(res=> {
          setUList(res);
          dispatch(StoreUniversityListData(res));
        })
        .catch();
      }
      else{
        get("UniversityDD/Index").then(res =>{
          setUList(res);
          dispatch(StoreUniversityListData(res));
        });
      }
    },[providerValue]);

    useEffect(()=>{
        get(`UniversityCampus/GetbyUniversity/${id}`)
        .then(res =>{
        console.log("campusByUniversity",res);
        setCampList(res);
      })
    },[id]);



   
    useEffect(()=>{
      if(id){
      // if(localStorage.getItem("uniIdForSubList")){
        get(`UniversityCampus/GetbyUniversity/${id}`).then(res =>{
        // get(`UniversityCampus/GetbyUniversity/${localStorage.getItem("uniIdForSubList")}`).then(res =>{
          setCam(res);
          dispatch(StoreUniversityCampusListData(res));
        });
      }
      else{
        return;
      }
    },[]);

    useEffect(() => {

      setLoading(true);
  
        get(`Subject/TableShowPaged?page=${currentPage}&pageSize=${dataPerPage}&CampusId=${campValue}&UniversityId=${id}&search=${searchStr}`).then((res) => {
          setSubList(res?.models);
          console.log("sublist",res);
          setSerialNum(res?.firstSerialNumber);
          setEntity(res?.totalEntity);        
          setLoading(false);
        });
    

    }, [success, currentPage, dataPerPage, callApi, searchStr, uniTypeId, campValue, univerSList, uniValue, id]);

   


    // const searchCampusByUniversity = (universityValue) =>{
    //   get(`UniversityCampus/GetbyUniversity/${universityValue}`)
    //   .then(res =>{
    //   console.log("campusByUniversity",res);
    //   setCampList(res);
    // })
    // }


    // user select data per page
    const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
    const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

    const selectDataSize = (value) => {
      setLoading(true);
      setDataPerPage(value);
      setCallApi((prev) => !prev);
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

    // university dropdown options
    const universityOption = univerSList?.map((uni) => ({
      label: uni?.name,
      value: uni?.id,
    }));

    // campus dropdown options
    const campusOption = campList?.map((camp) => ({
      label: camp?.name,
      value: camp?.id,
    }));

    // const selectUni = (label, value) => {
    //   setUniLabel(label);
    //   setUniValue(value);
    //   setCampLabel("Select Campus");
    //   setCampValue(0);
    //   searchCampusByUniversity(value);
    //   handleSearch();
    // };

    const selectUniCampus = (label, value) => {
      setCampLabel(label);
      setCampValue(value);
      handleSearch();
    };

    const searchValue = (e) => {
      setSearchStr(e.target.value);
      handleSearch();
    };


    const handleDelete = (id) => {
      const returnValue = remove(`Subject/Delete/${id}`).then((action)=> {
        // console.log(action);
        setSuccess(!success);
        setDeleteModal(false);
         addToast(action, {
           appearance: 'error',
           autoDismiss: true,
         })

      })
    };

    const toggleDanger = (name,id) => {
      localStorage.setItem('subName',name)
      localStorage.setItem('subId',id)
      setDeleteModal(true)
     }

     const closeDeleteModal = () => {
      setDeleteModal(false);
      localStorage.removeItem('subName')
      localStorage.removeItem('subId')
    
    }

    // on clear
  const handleClearSearch = () => {
    setUniLabel("Select University");
    setUniValue(0);
    setCampLabel("Select Campus");
    setCampValue(0);
    setCallApi((prev) => !prev);
    setSearchStr("");
    history.replace({
      universityId: null
    })
  };

   // on enter press
   const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCurrentPage(1);
      setCallApi((prev) => !prev);
    }
  };

  const handleExportXLSX = () => {
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(subList);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  const componentRef = useRef();

  const handleView = id =>{
    // localStorage.setItem('subIdPro', id);
    localStorage.removeItem("campIdSubProfile");
    history.push(`/subjectProfile/${id}`);
  }

  // localStorage.removeItem("uniIdForSubList");
  const permissions = JSON.parse(localStorage.getItem('permissions'));

  const handleEdit = subId =>{
    history.push(`/addUniversitySubject/${id}/${subId}`);
  }
    return (
        <div>
            <Card className="uapp-card-bg">
                <CardHeader className="page-header">
                  <h3 className="text-light">University Subject List</h3>
                  <div className="page-header-back-to-home">
                    <span onClick={backToUniversityList} className="text-light">
                      {" "}
                      <i className="fas fa-arrow-circle-left"></i> Back to University List
                    </span>
                  </div>
                </CardHeader>
            </Card>

            <Card className="uapp-employee-search">
        <CardBody className="search-card-body">

          <Row>
            {/* <Col lg="4" md="3" sm="6" xs="6">
              <Select
                options={universityOption}
                value={{ label: uniLabel, value: uniValue }}
                onChange={(opt) => selectUni(opt.label, opt.value)}
                name="UniversityTypeId"
                id="UniversityTypeId"
              />
            </Col> */}

            <Col lg="6" md="6" sm="6" xs="6">
              <Select
                options={campusOption}
                value={{ label: campLabel, value: campValue }}
                onChange={(opt) => selectUniCampus(opt.label, opt.value)}
                name="campusId"
                id="campusId"
              />
            </Col>

            <Col lg="6" md="6" sm="6" xs="6">
              <Input
                style={{ height: "2.7rem" }}
                type="text"
                name="search"
                value={searchStr}
                id="search"
                placeholder="Name"
                onChange={searchValue}
                onKeyDown={handleKeyDown}
              />
            </Col>

            {/* <Col lg="3" md="3" sm="6" xs="6">
              <div className="uapp-Search-div">
                <span>Reset</span>
            
              </div>
            </Col> */}
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
                onClick={handleAddSubject}
                className="btn btn-uapp-add "
              >
                {" "}
                <i className="fas fa-plus"></i> Add New{" "}
              </Button> */}
              {
                    permissions?.includes(permissionList?.Add_subject) ?
              <ButtonForFunction
                func={handleAddSubject}
                className={"btn btn-uapp-add "}
                icon={<i className="fas fa-plus"></i>}
                name={" Add New"}
                permission={6}
              />
              :
              null
              }

            </Col>

            <Col lg="6" md="7" sm="6" xs="8">
              <Row>
                <Col lg="5" md="6"></Col>
                <Col lg="2" md="3" sm="5" xs="5" className="mt-2">
                  Showing
                </Col>
                <Col md="3" sm="7" xs="7">
                  <Select
                    options={dataSizeName}
                    value={{ label: dataPerPage, value: dataPerPage }}
                    onChange={(opt) => selectDataSize(opt.value)}
                  />
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
            <div class="d-flex justify-content-center mb-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          ) : (
            <div className="table-responsive" ref={componentRef}>
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Name</th>
                    {/* <th>Description</th>
                    <th>Duration</th> */}
                    <th>University</th>
                    <th>Program Level</th>
                    <th>Department</th>
                    <th>Sub Department</th>
                    {/* <th>Intakes</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subList?.map((sub, i) => (
                    <tr key={sub.id} style={{ textAlign: "center" }}>
                      <th scope='row'>{serialNum + i}</th>
                      <td>
                        {sub?.name}
                      </td>
                      {/* <td>{sub?.description}</td>

                      <td>
                        {sub?.duration}
                      </td> */}

                      <td>
                        {sub?.universityName}
                      </td>

                      <td>
                        {sub?.programLevelName}
                      </td>

                      <td>
                        {sub?.departmentName}
                      </td>

                      <td>
                        {sub?.subDepartmentName}
                      </td>

                  
                        {/* <td>
                          <Link className='text-decoration-none' to="/subjectIntake">
                             View
                          </Link>
                        </td> */}
                  
                      

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                        {/* <Link to= "">
                          <Button onClick={()=>handleView(sub?.id)} color="primary" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-eye"></i>{" "}
                          </Button>
                        </Link> */}
                        {
                        permissions?.includes(permissionList?.View_subject) ?
                        <ButtonForFunction 
                          func={()=>handleView(sub?.id)}
                          color={"primary"}
                          className={"mx-1 btn-sm"}
                          icon={<i className="fas fa-eye"></i>}
                          permission={6}
                        />
                        :
                        null
                        }

                          {/* <Link to={`editSubject/${sub?.id}`}>
                            <Button color="dark" className="mx-1 btn-sm">
                              {" "}
                              <i className="fas fa-edit"></i>{" "}
                            </Button>
                          </Link> */}
                        {/* {
                         permissions?.includes(permissionList?.Update_subject) ?
                          <LinkButton
                            url={`addUniversitySubject/${id}/${sub?.id}`}
                            color={"dark"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-edit"></i>}
                          />
                          :
                          null} */}

                          <Button onClick={()=>handleEdit(sub?.id)} color={"dark"} className={"mx-1 btn-sm"}><i className="fas fa-edit"></i></Button>

                          {/* <Button onClick={() => toggleDanger(sub?.name, sub?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}

                          {
                            permissions?.includes(permissionList?.Delete_subject) ?
                          <ButtonForFunction
                            func={() => toggleDanger(sub?.name, sub?.id)}
                            color={"danger"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-trash-alt"></i>}
                            permission={6}
                          />
                          :
                          null
                           }



                        </ButtonGroup>

                     
                      <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">

                          <ModalBody>
                            <p>Are You Sure to Delete this <b>{localStorage.getItem('subName')}</b> ? Once Deleted it can't be Undone!</p>
                          </ModalBody>

                          <ModalFooter>
                          
                            <Button color="danger" onClick={() => handleDelete(localStorage.getItem('subId'))}>YES</Button>
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

          <Pagination
            dataPerPage={dataPerPage}
            totalData={entity}
            paginate={paginate}
            currentPage={currentPage}
          />

          {/* <Row className="mb-3">
            <Col lg="6">
              
            </Col>

            <Col lg="6" md="7" sm="6" xs="8">
               <div className='d-flex justify-content-end'>
               <Button
                   onClick={handleNextTab}
                   className="btn btn-uapp-add "
                    >
                    {" "}
                     Next tab
                    {" "}
               </Button>
               </div>
             </Col>
          </Row> */}


        </CardBody>
      </Card>

      

        </div>
    );
};

const mapStateToProps = state => ({
    univerSityDropDownList: state.universityListReducer.universityList,
    campusDropDownList: state.universityCampusListReducer.universityCampusList,
  })
export default connect(mapStateToProps)(UniversitySubjectList);