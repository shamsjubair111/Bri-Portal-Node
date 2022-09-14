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
    Label,
    Input,
    Form,
    FormGroup,
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
import Select from "react-select";
import { useHistory, useLocation } from "react-router";
import { Link, useParams } from 'react-router-dom';
import get from '../../../helpers/get';
import { useToasts } from 'react-toast-notifications';
import remove from '../../../helpers/remove';
import Pagination from "../../SMS/Pagination/Pagination.jsx";

import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';
import ButtonForFunction from '../Components/ButtonForFunction';
import LinkSpanButton from '../Components/LinkSpanButton';
import LinkButton from '../Components/LinkButton';
import put from '../../../helpers/put';
import post from '../../../helpers/post';

const CampusSubjectList = () => {

    const {camId} = useParams();
    

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

    const [subId, setSubId] = useState(0);
    const [subName, setSubName] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    const [orderLabel, setOrderLabel] = useState("Select order by");
    const [orderValue, setOrderValue] = useState(0);
    
    // const univerSList = props.univerSityDropDownList[0];
    // const camppus = props.campusDropDownList[0];

    const [uniLabel, setUniLabel] = useState("Select University");
    const [uniValue, setUniValue] = useState(0);
    const [campLabel, setCampLabel] = useState("Select Campus");
    const [campValue, setCampValue] = useState(0);
    const [campList, setCampList] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [uniTypeId ,setUTypeId] = useState(0);
    const [ulist,setUList] = useState([]);
    const [cam, setCam] = useState([]);
    const [campus, setCampus] = useState({});

    const [universityId, setUniversityId] = useState(undefined);

    const [subLabel, setSubLabel] = useState("Select Subject");
    const [subValue, setSubValue] = useState(0);
    const [radioIsAcceptHome, setRadioIsAcceptHome] = useState("false");
    const [radioIsAcceptUk, setRadioIsAcceptUk] = useState("true");
    const [radioIsAcceptInt, setRadioIsAcceptInt] = useState("false");
    const [data, setData] = useState({});

    const [subError, setSubError] = useState(false);

    const [subListDD, setSubListDD] = useState([]);

    const location = useLocation();
    const history = useHistory();
    const { addToast } = useToasts();

    // user select data per page
    const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
    const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

    // user select order
  const orderArr = [
    {
      label: "Newest",
      value: 1,
    },
    {
      label: "Oldest",
      value: 2,
    },
    {
      label: "A-Z",
      value: 3,
    },
    {
      label: "Z-A",
      value: 4,
    },
  ];
  // const orderName = orderArr.map((dsn) => ({ label: dsn.label, value: dsn.value }));
  const orderName = orderArr.map((dsn) => ({
    label: dsn.label,
    value: dsn.value,
  }));

  const selectOrder = (label, value) => {
    // console.log("value", label, value);
    setLoading(true);
    setOrderLabel(label);
    setOrderValue(value);
    setCallApi((prev) => !prev);
  };

     //  change page
     const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCallApi((prev) => !prev);
      };

    // redirect to dashboard
    const backToCampusList = () => {
        history.push(`/campusList/${universityId}`);
      };

    const selectDataSize = (value) => {
      setLoading(true);
      setDataPerPage(value);
      setCallApi((prev) => !prev);
    };

    // toggle dropdown
      const toggle = () => {
        setDropdownOpen((prev) => !prev);
      };

    const toggleDanger = (name,id) => {
      console.log("name, id", name, id);
      setSubName(name);
      setSubId(id);
      setDeleteModal(true);
     }

    const closeDeleteModal = () => {
       setDeleteModal(false);
       setSubName("");
       setSubId(0);
    }

    const handleDelete = (id) => {
        const returnValue = remove(`UniversityCampusSubject/Delete/${id}`).then((action)=> {
          // console.log(action);
          setSuccess(!success);
          setDeleteModal(false);
           addToast(action, {
             appearance: 'error',
             autoDismiss: true,
           })
           setSubName("");
           setSubId(0);
        })
      };

    // add university handler
    const handleAddSubject = () => {
        // history.push("/addSubject");
        setModalOpen(true);
      };

    // on clear
    const handleClearSearch = () => {
      setUniLabel("Select University");
      setUniValue(0);
      setCampLabel("Select Campus");
      setCampValue(0);
      setCallApi((prev) => !prev);
      setSearchStr("");
    };

    useEffect(()=>{

        // Subject get by university
        get(`UniversityCampusSubject/GetUnassigned/${camId}`).then((res) => {
          setSubListDD(res);
        });

        get(`Subject/GetByCampusId?page=${currentPage}&pageSize=${dataPerPage}&CampusId=${camId}&search=${searchStr}&sortby=${orderValue}`).then(res=>{
            console.log("subject",res);
            setLoading(false);
            setSubList(res?.models);
            setEntity(res?.totalEntity);
        });
        get(`UniversityCampus/Get/${camId}`).then(res=>{
          console.log("campus", res);
          setUniversityId(res?.university?.id);
          setCampus(res);
        })
    },[success, currentPage, dataPerPage, callApi, searchStr, camId, orderValue]);

    // for subject dropdown
    const subMenu = subListDD.map((subOptions) => ({
      label: subOptions.name,
      value: subOptions.id,
    }));

    const selectSubject = (label, value) => {
      setSubError(false);
      setSubLabel(label);
      setSubValue(value);
    };

    // search handler
    const handleSearch = () => {
        setCurrentPage(1);
        setCallApi((prev) => !prev);
      };

    const searchValue = (e) => {
        setSearchStr(e.target.value);
        handleSearch();
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

    const handleRedirectSubProfile = id =>{
      // localStorage.setItem("campIdSubProfile", camId);
      history.push(
        {
          pathname: `/subjectProfile/${id}`,
          campId: camId
        }
        );
    }

    // on change radio button starts here
    const onValueChangeIsAcceptHome = (event) => {
      setRadioIsAcceptHome(event.target.value);
    };

    const onValueChangeIsAcceptUk = (event) => {
      setRadioIsAcceptUk(event.target.value);
    };

    const onValueChangeIsAcceptInt = (event) => {
      setRadioIsAcceptInt(event.target.value);
    };
    // on change radio button ends here

    const taggleModal = () => {
      setRadioIsAcceptHome('false');
      setRadioIsAcceptUk('true');
      setRadioIsAcceptInt('false');
      setSubValue(0);
      setSubLabel("Select Subject");
      setData({});
      setModalOpen(false);
    }

    const handleSubmit = e => {
      e.preventDefault();

      const subData = {
        campusId: camId,
        subjectId: subValue,
        isAcceptHome: radioIsAcceptHome == "true" ? true : false,
        isAcceptEU_UK: radioIsAcceptUk == "true" ? true : false,
        isAcceptInternational: radioIsAcceptInt == "true" ? true : false,
      };

      const subData1 = {
        id: data?.campusSubjectId,
        campusId: camId,
        subjectId: subValue,
        isAcceptHome: radioIsAcceptHome == "true" ? true : false,
        isAcceptEU_UK: radioIsAcceptUk == "true" ? true : false,
        isAcceptInternational: radioIsAcceptInt == "true" ? true : false,
      };

      if(data?.id != undefined){
         put(`UniversityCampusSubject/Update`, subData1).then((res) => {
        if (res?.status == 200) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          setSuccess(!success);
          setData({});
          setModalOpen(false);
          setRadioIsAcceptHome('false');
          setRadioIsAcceptUk('true');
          setRadioIsAcceptInt('false');
          setSubValue(0);
          setSubLabel("Select Subject");
        }
      });
      }
      else{
        if (subValue == 0) {
          setSubError(true);
        } else {
          post(`UniversityCampusSubject/Create`, subData).then((res) => {
            console.log(res);
            if (res?.data?.isSuccess == true && res?.status == 200) {
              addToast(res?.data?.message, {
                appearance: "success",
                autoDismiss: true,
              });
              setSuccess(!success);
              setRadioIsAcceptHome('false');
              setRadioIsAcceptUk('true');
              setRadioIsAcceptInt('false');
              setSubValue(0);
              setSubLabel("Select Subject");
              setModalOpen(false);
            }
          });
        }
      }
    }

    const toggleEdit = (data) => {
      console.log(data);
      setData(data);
      setRadioIsAcceptHome(`${data?.isAcceptHome}`);
      setRadioIsAcceptInt(`${data?.isAcceptInternational}`);
      setRadioIsAcceptUk(`${data?.isAcceptEU_UK}`);
      setSubLabel(data?.name);
      setSubValue(data?.id);
      // setSubLabel("Select Subject");
      setModalOpen(true);
    };


    return (
        <div>
            <Card className="uapp-card-bg">
                <CardHeader className="page-header">
                  <h3 className="text-light">Campus Subject List</h3>
                  <div className="page-header-back-to-home">
                    <span onClick={backToCampusList} className="text-light">
                      {" "}
                      <i className="fas fa-arrow-circle-left"></i> Back to Campus List
                    </span>
                  </div>
                </CardHeader>
            </Card>

            <Card className="uapp-employee-search">
        <CardBody className="search-card-body">

          <Row>
            <Col lg="12" md="4" sm="6" xs="6">
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
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>


      <Card className="uapp-employee-search">
        <CardBody>

        {
          campus?.name != undefined ?
          <div className="container test-score-div-1-style mt-1 mb-4">
            <span className="test-score-span-1-style">
              Showing <b>{campus?.name}{"'"}s</b> subject list
            </span>
          </div>
          :
          null
        }

          {/* new */}
          <Row className="mb-3">
            <Col lg="5" md="5" sm="4" xs="4">
            <ButtonForFunction
                func={handleAddSubject}
                className={"btn btn-uapp-add "}
                icon={<i className="fas fa-plus"></i>}
                name={" Add New"}
                permission={6}
              />
            </Col>

            <Col lg="7" md="7" sm="8" xs="8">
              <div className="d-md-flex justify-content-end">
                {/* <Col lg="2">
                    
                    <div className='ms-2'>
                      <ReactToPrint
                        trigger={()=><div className="uapp-print-icon">
                          <div className="text-right">
                            <span title="Print to pdf"> <i className="fas fa-print"></i> </span>
                          </div>
                        </div>}
                        content={() => componentRef.current}
                      />
                    </div>
                </Col> */}
                <div className="me-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">Order By :</div>
                    <div>
                      <Select
                        options={orderName}
                        value={{ label: orderLabel, value: orderValue }}
                        onChange={(opt) => selectOrder(opt.label, opt.value)}
                      />
                    </div>
                  </div>
                </div>

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
                    <th>Subject</th>
                    {/* <th>Description</th>
                    <th>Duration</th> */}
                    {/* <th>University</th> */}
                    <th>isAcceptHome</th>
                    <th>isAcceptEU_UK	</th>
                    <th>isAcceptInternational</th>
                    <th>Program Level</th>
                    <th>Department</th>
                    {/* <th>Sub Department</th> */}
                    <th>Intake</th>
                    {/* <th>Intakes</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subList?.map((sub, i) => (
                    <tr key={sub?.id} style={{ textAlign: "center" }}>
                      <td>{serialNum + i}</td>
                      <td>
                        {sub?.name}
                      </td>
                      {/* <td>{sub?.description}</td>

                      <td>
                        {sub?.duration}
                      </td> */}

                      {/* <td>
                        {sub?.university?.name}
                      </td> */}

                      <td>
                        {sub?.isAcceptHome === false ? "No" : "Yes"}
                      </td>
                      <td>
                        {sub?.isAcceptEU_UK	=== false ? "No" : "Yes" }
                      </td>
                      <td>
                        {sub?.isAcceptInternational === false ? "No" : "Yes"}
                      </td>

                      <td>
                        {sub?.programLevel?.name}
                      </td>

                      <td>
                        {sub?.department?.name}{","}{" "}{sub?.subDepartment?.name}
                      </td>

                      {/* <td>
                        {sub?.subDepartment?.name}
                      </td> */}

                      <td>
                        {" "}
                        <span
                          className="badge badge-secondary"
                          style={{ cursor: "pointer" }}
                        >
                          {/* <Link className="text-decoration-none" to = {`/subjectIntake/${camId}/${sub?.id}`}> 
                          <span> View </span>
                          </Link> */}

                          <LinkSpanButton
                            url={`/subjectIntake/${camId}/${sub?.id}`}
                            className={"text-decoration-none"}
                            data={"View"}
                            permission={6}
                          />

                        </span>{" "}
                      </td> 

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                        {/* <Link to= ""> */}
                          {/* <Button onClick={()=>handleRedirectSubProfile(sub?.id)} color="primary" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-eye"></i>{" "}
                          </Button> */}

                          <ButtonForFunction
                            func={()=>handleRedirectSubProfile(sub?.id)}
                            color={"primary"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-eye"></i>}
                            permission={6}
                          />

                        {/* </Link> */}

                          {/* <Link to={`/editSubject/${sub?.id}`}>
                            <Button color="dark" className="mx-1 btn-sm">
                              {" "}
                              <i className="fas fa-edit"></i>{" "}
                            </Button>
                          </Link> */}

                          {/* <LinkButton
                            url={`/addSubject/${sub?.id}`}
                            color={"warning"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-edit"></i>}
                            permission={6}
                          /> */}

                          <ButtonForFunction
                            func={() => toggleEdit(sub)}
                            color={"warning"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-edit"></i>}
                            permission={6}
                          />

                          {/* <Button onClick={() => toggleDanger(sub?.name, sub?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}

                          <ButtonForFunction
                            func={() => toggleDanger(sub?.name, sub?.campusSubjectId)}
                            color={"danger"}
                            className={"mx-1 btn-sm"}
                            icon={<i className="fas fa-trash-alt"></i>}
                            permission={6}
                          />

                        </ButtonGroup>

                     
                      <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">

                          <ModalBody>
                            <p>Are You Sure to Delete this <b>{subName}</b> ? Once Deleted it can't be Undone!</p>
                          </ModalBody>

                          <ModalFooter>
                          
                            <Button color="danger" onClick={() => handleDelete(subId)}>YES</Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
                          </ModalFooter>

                      </Modal>

                      {/* add or delete subject feature starts here */}
                              <Modal
                                isOpen={modalOpen}
                                toggle={taggleModal}
                                className="uapp-modal2"
                              >
                                <ModalBody>

                                <div className="hedding-titel d-flex justify-content-between mb-4">
                                  <div>
                                    <h5>
                                      {" "}
                                      <b>Subject</b>{" "}
                                    </h5>

                                    <div className="bg-h"></div>
                                  </div>
                                  {/* <div className="text-right edit-style  p-3">
                               <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                               </div> */}
                                </div>

                                  <Form onSubmit={handleSubmit}>

                                  <FormGroup row className="has-icon-left position-relative">
                                    <Col md="4">
                                      <span>
                                        Subject <span className="text-danger">*</span>{" "}
                                      </span>
                                    </Col>
                                    <Col md="8">
                                      <Select
                                        options={subMenu}
                                        value={{ label: subLabel, value: subValue }}
                                        onChange={(opt) =>
                                          selectSubject(opt.label, opt.value)
                                        }
                                        isDisabled={data?.id != undefined}
                                        name="id"
                                        id="id"
                                      />
                                      {subError ? (
                                        <span className="text-danger">
                                          Subject must be selected
                                        </span>
                                      ) : null}
                                    </Col>
                                  </FormGroup>

                                    <FormGroup row className="pt-3">
                                      <p>
                                        <b>Subject features</b>
                                      </p>
                                      <br />
                                      <br />
                                      <Col md="6">
                                        <span>
                                          Is accept home{" "}
                                          <span className="text-danger">*</span>{" "}
                                        </span>
                                      </Col>

                                      <Col md="6">
                                        <FormGroup check inline>
                                          <Input
                                            className="form-check-input"
                                            type="radio"
                                            id="isAcceptHome"
                                            onChange={onValueChangeIsAcceptHome}
                                            name="isAcceptHome"
                                            value="true"
                                            checked={
                                              radioIsAcceptHome == "true"
                                            }
                                          />
                                          <Label
                                            className="form-check-label"
                                            check
                                            htmlFor="isAcceptHome"
                                          >
                                            Yes
                                          </Label>
                                        </FormGroup>

                                        <FormGroup check inline>
                                          <Input
                                            className="form-check-input"
                                            type="radio"
                                            id="isAcceptHome"
                                            onChange={onValueChangeIsAcceptHome}
                                            name="isAcceptHome"
                                            value="false"
                                            checked={
                                              radioIsAcceptHome == "false"
                                            }
                                          />

                                          <Label
                                            className="form-check-label"
                                            check
                                            htmlFor="isAcceptHome"
                                          >
                                            No
                                          </Label>
                                        </FormGroup>
                                      </Col>
                                    </FormGroup>

                                    <FormGroup row className="pt-3">
                                      <Col md="6">
                                        <span>
                                          Is accept EU_UK{" "}
                                          <span className="text-danger">*</span>{" "}
                                        </span>
                                      </Col>

                                      <Col md="6">
                                        <FormGroup check inline>
                                          <Input
                                            className="form-check-input"
                                            type="radio"
                                            id="isAcceptEU_UK"
                                            onChange={onValueChangeIsAcceptUk}
                                            name="isAcceptEU_UK"
                                            value="true"
                                            checked={radioIsAcceptUk == "true"}
                                          />
                                          <Label
                                            className="form-check-label"
                                            check
                                            htmlFor="isAcceptEU_UK"
                                          >
                                            Yes
                                          </Label>
                                        </FormGroup>

                                        <FormGroup check inline>
                                          <Input
                                            className="form-check-input"
                                            type="radio"
                                            id="isAcceptEU_UK"
                                            onChange={onValueChangeIsAcceptUk}
                                            name="isAcceptEU_UK"
                                            value="false"
                                            checked={radioIsAcceptUk == "false"}
                                          />

                                          <Label
                                            className="form-check-label"
                                            check
                                            htmlFor="isAcceptEU_UK"
                                          >
                                            No
                                          </Label>
                                        </FormGroup>
                                      </Col>
                                    </FormGroup>

                                    <FormGroup row className="pt-3">
                                      <Col md="6">
                                        <span>
                                          Is accept international{" "}
                                          <span className="text-danger">*</span>{" "}
                                        </span>
                                      </Col>

                                      <Col md="6">
                                        <FormGroup check inline>
                                          <Input
                                            className="form-check-input"
                                            type="radio"
                                            id="isAcceptInternational"
                                            onChange={onValueChangeIsAcceptInt}
                                            name="isAcceptInternational"
                                            value="true"
                                            checked={radioIsAcceptInt == "true"}
                                          />
                                          <Label
                                            className="form-check-label"
                                            check
                                            htmlFor="isAcceptInternational"
                                          >
                                            Yes
                                          </Label>
                                        </FormGroup>

                                        <FormGroup check inline>
                                          <Input
                                            className="form-check-input"
                                            type="radio"
                                            id="isAcceptInternational"
                                            onChange={onValueChangeIsAcceptInt}
                                            name="isAcceptInternational"
                                            value="false"
                                            checked={
                                              radioIsAcceptInt == "false"
                                            }
                                          />

                                          <Label
                                            className="form-check-label"
                                            check
                                            htmlFor="isAcceptInternational"
                                          >
                                            No
                                          </Label>
                                        </FormGroup>
                                      </Col>
                                    </FormGroup>

                                    <FormGroup
                                      className="has-icon-left position-relative"
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >

                                      <Button className='mr-1 mt-3 bg-danger' onClick={taggleModal}>Cancel</Button>

                                      <Button.Ripple
                                        type="submit"
                                        className="mr-1 mt-3 badge-primary"
                                      >
                                        Submit
                                      </Button.Ripple>

                                    </FormGroup>
                                  </Form>
                                </ModalBody>
                              </Modal>
                      {/* add or delete subject feature ends here */}



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

export default CampusSubjectList;