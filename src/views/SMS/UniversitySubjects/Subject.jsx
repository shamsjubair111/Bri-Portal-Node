import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router";
import Select from "react-select";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  InputGroup,
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { rootUrl } from "../../../constants/constants";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import ButtonForFunction from '../Components/ButtonForFunction';
import { useToasts } from "react-toast-notifications";

const Subject = () => {

    const [submitData, setSubmitData] = useState(false);
    const [activetab, setActivetab] = useState("1");
    const [universityList, setUniversityList] = useState([]);
    const [programLevel, setProgramLevel] = useState([]);
    const [departmentList, setDepartmentList] = useState([]);
    const [subDepList, setSubDepList] = useState([]);
    const [uniLabel, setUniLabel] = useState("Select University...");
    const [uniValue, setUniValue] = useState(0);
    const [programLabel, setProgramLabel] = useState("Select Program Level...");
    const [programValue, setProgramValue] = useState(0);
    const [depLabel, setDepLabel] = useState("Select Department...");
    const [depValue, setDepValue] = useState(0);
    const [subDepLabel, setSubDepLabel] = useState("Select Sub Department...");
    const [subDepValue, setSubDepValue] = useState(0);

    const [uniDropError, setUniDropError] = useState(false);
    const [progLvlError, setProgLvlError] = useState(false);
    const [deptDropError, setDeptDropError] = useState(false);
    const [subDeptDropError, setSubDeptDropError] = useState(false);

    const {addToast} = useToasts();
    const history = useHistory();

    useEffect(()=>{

      get('UniversityDD/Index').then(res=> {
        setUniversityList(res);
      })
      .catch();

      get('ProgramLevel/Index').then(res=> {
        setProgramLevel(res);
      })
      .catch();

      get('Department/Index').then(res=> {
        setDepartmentList(res);
      })
      .catch();

      get('SubDepartment/Index').then(res=> {
        setSubDepList(res);
      })
      .catch();


    },[])

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };

  const selectUniversity = (label, value) => {
    setUniDropError(false);
    setUniLabel(label);
    setUniValue(value);
  }

  const selectProgramLevel = (label, value) => {
    setProgLvlError(false);
    setProgramLabel(label);
    setProgramValue(value);
  }

  const selectDepartment = (label, value) => {
    setDeptDropError(false);
    setDepLabel(label);
    setDepValue(value);
  }

  const selectSubDepartment = (label, value) => {
    setSubDeptDropError(false);
    setSubDepLabel(label);
    setSubDepValue(value);
  }

  const uniMenu = universityList.map(universityOptions =>({label:universityOptions.name, value:universityOptions.id}) );

  const programLevelMenu = programLevel.map(programOptions =>({label:programOptions.name, value:programOptions.id}) );

  const departmentMenu = departmentList.map(depOptions =>({label:depOptions.name, value:depOptions.id}) );

  const subDepMenu = subDepList.map(subDepOptions =>({label:subDepOptions.name, value:subDepOptions.id}) );

  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "2") {
      history.push("/addSubjectFee");
    }
    if (tab == "3") {
      history.push("/addSubjectDeliveryPattern");
    }
  };

  const AuthStr = localStorage.getItem("token");

  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);

    if(uniValue == 0){
      setUniDropError(true);
    }
    if(programValue == 0){
      setProgLvlError(true);
    }
    if(depValue == 0){
      setDeptDropError(true);
    }
    if(subDepValue == 0){
      setSubDeptDropError(true);
    }
    else{
      Axios.post(`${rootUrl}Subject/Create`, subdata,{
        headers: {
          'Content-Type': 'application/json',
          'authorization': AuthStr,
        },
      }).then((res) => {
          
        localStorage.setItem("subId",res?.data?.result?.id);
        const subId = res?.data?.result?.id;
  
        if (res.status === 200 && res.data.isSuccess === true) {
          setSubmitData(true);
          addToast(res?.data?.message, {
            appearance: 'success',
            autoDismiss: true,
          })
          history.push({
            pathname: "/addSubjectFee",
            id: subId,
          });
        }
      });
    }
    
  };


    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Add Subject Information</h3>
                <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-light">
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                  </span>
                </div>
              </CardHeader>
            </Card>

      <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                Subject Information
              </NavLink>
            </NavItem>

            <NavItem>
              {submitData ? (
                <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                  Subject Fee Information
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "2"}>
                  Subject Fee Information
                </NavLink>
              )}
            </NavItem>
            <NavItem>
            {submitData ? (
                <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                  Delivery Pattern
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "3"}>
                  Delivery Pattern
                </NavLink>
              )}
            </NavItem>

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="1">
              <Form  onSubmit={handleSubmit} className="mt-5">

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Subject Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Subject Name"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Description <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type='textarea'
                      rows='4'
                      placeholder='Enter description'
                      required
                    //   options={universityTypeName}
                    //   value={{ label: uniTypeLabel, value: uniTypeValue }}
                    //   onChange={(opt) => selectUniType(opt.label, opt.value)}
                      name="description"
                      id="description"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Duration <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="duration"
                      id="duration"
                      placeholder="Enter duration"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      University <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={uniMenu}
                      value={{ label: uniLabel, value: uniValue }}
                      onChange={(opt) => selectUniversity(opt.label, opt.value)}
                      name="universityId"
                      id="universityId"
                    />

                    {uniDropError && (
                      <span className="text-danger">You must select university.</span>
                    )}

                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Program level <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={programLevelMenu}
                      value={{ label: programLabel, value: programValue }}
                      onChange={(opt) => selectProgramLevel(opt.label, opt.value)}
                      name="programLevelId"
                      id="programLevelId"
                    />
                    {progLvlError && (
                      <span className="text-danger">You must select program level.</span>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Department <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={departmentMenu}
                      value={{ label: depLabel, value: depValue }}
                      onChange={(opt) => selectDepartment(opt.label, opt.value)}
                      name="departmentId"
                      id="departmentId"
                    />
                    {deptDropError && (
                      <span className="text-danger">You must select department.</span>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Sub-department <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={subDepMenu}
                      value={{ label: subDepLabel, value: subDepValue }}
                      onChange={(opt) => selectSubDepartment(opt.label, opt.value)}
                      name="subDepartmentId"
                      id="subDepartmentId"
                    />
                    {subDeptDropError && (
                      <span className="text-danger">You must select sub-department.</span>
                    )}
                  </Col>
                </FormGroup>

                {/* <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup> */}
                <FormGroup row
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  {/* <Button.Ripple
                    type="submit"
                    className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple> */}
                  <Col md="5">
                    <ButtonForFunction 
                      type={"submit"}
                      className={"mr-1 mt-3 badge-primary"}
                      name={"Submit"}
                      permission={6}
                    />
                  </Col>

                </FormGroup>
              </Form>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
      <br/>
      <br/>
    </div>
    );
};

export default Subject;