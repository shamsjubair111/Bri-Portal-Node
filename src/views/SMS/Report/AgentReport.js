import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Tooltip,
  Input,
} from "reactstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import get from "../../../helpers/get";

const AgentReport = () => {
  const token = JSON.parse(localStorage.getItem("current_user"));

  const customStyles2 = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "33px",
      height: "33px",
      boxShadow: state.isFocused ? null : null,
      paddingBottom: "20px",
    }),
  };

  const [month, setMonth] = useState([]);
  const [monthLabel, setMonthLabel] = useState("Select Month");
  const [monthValue, setMonthValue] = useState(0);

  const [year, setYear] = useState([]);
  const [yearLabel, setYearLabel] = useState("Select Year");
  const [yearValue, setYearValue] = useState(0);

  const [consultant, setConsultant] = useState([]);
  const [consultantLabel, setConsultantLabel] = useState("Select Consultant");
  const [consultantValue, setConsultantValue] = useState(0);

  const history = useHistory();

  useEffect(() => {
    get("ConsultantDD/index").then((res) => {
      setConsultant(res);
      console.log("res", res);
    });
  }, []);

  const consultantOption = consultant?.map((c) => ({
    label: c?.name,
    value: c?.id,
  }));

  const selectConsultant = (label, value) => {
    setConsultantLabel(label);
    setConsultantValue(value);
  };

  // on clear
  const handleClearSearch = () => {
    setConsultantValue(0);
    setConsultantLabel("Select Consultant");
  };

  const backToDashboard = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="animated fadeIn">
        <div className="uapp-dashboard">
          <div className="uapp-dashboard-activity">
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-white">Report</h3>
                <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-white">
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to
                    Dashboard
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card className="uapp-employee-search">
              <CardBody className="search-card-body">
                <Row className="mt-3">
                  <Col lg="12" md="12" sm="12" xs="12">
                    <Select
                      options={consultantOption}
                      value={{
                        label: consultantLabel,
                        value: consultantValue,
                      }}
                      onChange={(opt) => selectConsultant(opt.label, opt.value)}
                      name="consultantId"
                      id="consultantId"
                      // isDisabled={cId}
                    />
                  </Col>
                </Row>

                <Row className="calenderProperty" style={{ position: 'relative' }}>
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

            {/* Progress Report Card */}
            {/* <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="card">
                  <div className="card-body">
                    <span>
                      <h5 class="uapp-dachboard-head">Progress Report</h5>
                    </span>

                    <Card className="mt-3">
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className="d-flex">
                          <span
                            className="mt-1 me-1"
                            style={{ fontSize: "16px", fontWeight: "500" }}
                          >
                            Daily
                          </span>
                          <Input className="ms-1" type="date" />
                        </div>

                        <div className="d-flex">
                          <span
                            className="mt-1 me-1"
                            style={{ fontSize: "16px", fontWeight: "500" }}
                          >
                            Monthly
                          </span>
                          <Select
                            styles={customStyles2}
                            value={{ label: monthLabel, value: monthValue }}
                            className="ms-1"
                            name="UniversityTypeId"
                            id="UniversityTypeId"
                          />
                        </div>

                        <div className="d-flex">
                          <span
                            className="mt-1 me-1"
                            style={{ fontSize: "16px", fontWeight: "500" }}
                          >
                            Yearly
                          </span>
                          <Select
                            styles={customStyles2}
                            value={{ label: yearLabel, value: yearValue }}
                            className="ms-1"
                            name="UniversityTypeId"
                            id="UniversityTypeId"
                          />
                        </div>
                      </div>

                      <hr />
                    </Card>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="card">
                  <div className="card-body">

                    <div className="row">
                      <div className="col-lg-4">
                      <div className="uapp-progress-bar">
                            <Row>
                              <Col>


                                <div className="no-border">
                                  <div className="cardHeader1">
                                    <Row>
                                      <Col>
                                        <center>
                                        <h5 
                                        // onClick={() => this.selectbyIntake()} 
                                        className="uapp-dachboard-head">Intake</h5>
                                        </center>
                                        </Col>
                                      <Col>
                                        <center>
                                        <h5 
                                        //   onClick={() => this.selectBy("date")}
                                          className="uapp-dachboard-head">Daily</h5>
                                        </center>
                                        </Col>
                                      <Col>
                                        <center>
                                        <h5 
                                        // onClick={() => this.selectBy("month")}
                                         className="uapp-dachboard-head">Monthly</h5>
                                        </center>
                                      </Col>
                                    </Row>
                                  </div>

                                  {/* {this.state.CardShow == true ?

                                    <Card className="monthly-card">
                                      <CardHeader className="db-card-header no-border-bottom" style={{ padding:"5px 3px"}}>
                                        <Row>
                                          <Col xs="8">
                                        <div className="controls app-search-filter">
                                          <Select 
                                            options={IntakeYear}
                                            value={{label: this.state.ylable, value: this.state.yvalue }}
                                            onChange={opt => this.selectyear(opt.label, opt.value)}
                                            />
                                        </div>
                                          </Col>
                                          <Col xs="4" className="text-right">
                                            <div style={{ fontSize: "27px", color: "#c10c0c", cursor: "pointer", paddingRight:"5px" }}>
                                              <i className="fa fa-times-circle" onClick={this.monthlycardclose}></i>
                                        </div>
                                          </Col>
                                          </Row>
                                      </CardHeader>
                                      <CardBody>
                                        <div className="progress-month">
                                          <Nav className="row">
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 1}
                                                onClick={() => { this.toggleMonth(1); }}
                                              >
                                                Jan
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 2}
                                                onClick={() => { this.toggleMonth(2); }}
                                              >
                                                Feb
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 3}
                                                onClick={() => { this.toggleMonth(3); }}
                                              >
                                                March
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 4}
                                                onClick={() => { this.toggleMonth(4); }}
                                              >
                                                April
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 5}
                                                onClick={() => { this.toggleMonth(5); }}
                                              >
                                                May
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 6}
                                                onClick={() => { this.toggleMonth(6); }}
                                              >
                                                June
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 7}
                                                onClick={() => { this.toggleMonth(7); }}
                                              >
                                                July
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 8}
                                                onClick={() => { this.toggleMonth(8); }}
                                              >
                                                Aug
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 9}
                                                onClick={() => { this.toggleMonth(9); }}
                                              >
                                                Sep
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 10}
                                                onClick={() => { this.toggleMonth(10); }}
                                              >
                                                Oct
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 11}
                                                onClick={() => { this.toggleMonth(11); }}
                                              >
                                                Nov
                                              </NavLink>
                                            </NavItem>
                                            <NavItem className="col-6">
                                              <NavLink
                                                active={this.state.activeMonth == 12}
                                                onClick={() => { this.toggleMonth(12); }}
                                              >
                                                Dec
                                              </NavLink>
                                            </NavItem>
                                          </Nav>
                                        </div>
                                      </CardBody>
                                    </Card>
                                     :
                                    null
                                  }  */}
                                  
                                  <CardBody>

                                    <div className="mt-5">
                                      <div>

                                        <div className='progress-chart'>
                                          <div className='d-flex w-100'>
                                            <div className="mr-2" style={{ background: "#24A1CD", width: "4%" }}> </div>    <h6 className="mt-2 w-75">   Total Application</h6> 
                                            {/* <span className="w-20"> {AppProgress.totalApplication}</span> */}
                                          </div>
                                        </div>


                                        <div className='progress-chart'>
                                          <div className='d-flex w-100'>
                                            <div className="mr-2" style={{ background: "#23CCB5", width: "4%" }}> </div>    <h6 className="mt-2 w-75">  Submitted to University  </h6> 
                                            {/* <span className=" w-20"> {AppProgress.submittedToUniversity}</span> */}
                                          </div>
                                        </div>


                                        <div className='progress-chart'>
                                          <div className='d-flex w-100'>
                                            <div className="mr-2" style={{ background: "#AE75F8", width: "4%" }}> </div>    <h6 className="mt-2 w-75">  Unconditional Offer  </h6> 
                                            {/* <span className="w-20"> {AppProgress.unconditionalOffer}</span> */}
                                          </div>
                                        </div>


                                        <div className='progress-chart'>
                                          <div className='d-flex w-100'>
                                            <div className="mr-2" style={{ background: "#F7BD12", width: "4%" }}> </div>
                                            <h6 className="mt-2 w-75"> Total Registered  </h6>
                                            {/* <span className="w-20"> {AppProgress.totalRegistered}</span> */}
                                          </div>
                                        </div>

                                        <div className='progress-chart'>
                                          <div className='d-flex w-100'>
                                            <div className="mr-2" style={{ background: "#F87675", width: "4%" }}> </div>    <h6 className="mt-2 w-75"> Total Rejected  </h6> 
                                            {/* <span className="w-20"> {AppProgress.totalRejected}</span> */}
                                          </div>
                                        </div>

                                      </div>
                                    </div>

                                  </CardBody>
                                </div>
                              </Col>
                            </Row>
                          </div>
                      </div>
                      <div className="col-lg-4">
                            <div className="cardHeader1">
                            <center>
                              <h5 
                              // onClick={() => this.selectbyIntake()} 
                              className="uapp-dachboard-head">Target Report</h5>
                        </center>
                            </div>
                      </div>
                      <div className="col-lg-4">
                       <div className="cardHeader1">
                        <center>
                         <h5 
                         // onClick={() => this.selectbyIntake()} 
                         className="uapp-dachboard-head">Estimated Income</h5>
                        </center>
                       </div>

                       <CardBody>
                          {/* <div className="text-center mb-3">
                            <h5 style={{ color: "#1E98B0" }}>
                                {this.state.intakeName}
                            </h5>
                          </div> */}
                          <div className="text-center posign-center" style={{ paddingTop: "30px" }}>
                            <div className="target-dot">
                              <span>&pound;  </span>

                            </div>
                          </div>


                        </CardBody>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AgentReport;
