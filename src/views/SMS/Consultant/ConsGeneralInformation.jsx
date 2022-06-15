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
import ConsultantFile from './ConsultantFile';

const ConsGeneralInformation = () => {

    const [activetab, setActivetab] = useState("1");
    const [submitData, setSubmitData] = useState(false);
    const [nameTitle, setNameTitle] = useState([]);
    const [nameLabel, setNameLabel] = useState("Name title");
    const [nameValue, setNameValue] = useState(0);

    const history = useHistory();

    useEffect(()=>{
      get("NameTittleDD/index").then(res=>{
          setNameTitle(res);
      });
    },[]);

    const nameTitleMenu = nameTitle?.map(titleOptions => ({label:titleOptions?.name, value:titleOptions?.id}));

    const selectNameTitle = (label, value) => {
        setNameLabel(label);
        setNameValue(value);
      }

    // Getting File Or Image Type data from redux
    // const rightToWorkFile = useSelector( (state)=> state?.ConsultantFileReducer?.profileImage);

   

    // const addressFile = useSelector( (state)=> state?.ConsultantFileReducer?.proofOfAddress);

    // const idOrImageFile = useSelector( (state)=> state?.ConsultantFileReducer?.idOrPassport);

    // const profileImage = useSelector( (state)=> state?.ConsultantFileReducer?.profileImage);

    // const coverImage = useSelector( (state)=> state?.ConsultantFileReducer?.coverImage);

    // console.log(rightToWorkFile,addressFile,idOrImageFile,profileImage,coverImage);

    // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "2") {
    //   history.push("/addSubjectFee");
    }
  };

    // redirect to dashboard
    const backToDashboard = () => {
      history.push("/");
    };

    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Consultant Information</h3>
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
                General Information
              </NavLink>
            </NavItem>

            <NavItem>
              {submitData ? (
                <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                  
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "2"}>
                  
                </NavLink>
              )}
            </NavItem>

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="1">
              <Form  onSubmit='' className="mt-5">

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Name Title <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={nameTitleMenu}
                      value={{ label: nameLabel, value: nameValue }}
                      onChange={(opt) => selectNameTitle(opt.label, opt.value)}
                      name="nameTittleId"
                      id="nameTittleId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      First Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter First Name"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Last Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter Last Name"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Consultant Type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    //   options={uniMenu}
                    //   value={{ label: uniLabel, value: uniValue }}
                    //   onChange={(opt) => selectUniversity(opt.label, opt.value)}
                      name="consultantTypeId"
                      id="consultantTypeId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Phone Number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter phone number"
                      required
                    />
                  </Col>
                </FormGroup>


                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Current Zip/Post Code <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter current zip/post code"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Street Address
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      placeholder="Enter street address"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      City
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Country Of Residency <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    //   options={departmentMenu}
                    //   value={{ label: depLabel, value: depValue }}
                    //   onChange={(opt) => selectDepartment(opt.label, opt.value)}
                      name="countryOfResidencyId"
                      id="countryOfResidencyId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Nationality <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    //   options={subDepMenu}
                    //   value={{ label: subDepLabel, value: subDepValue }}
                    //   onChange={(opt) => selectSubDepartment(opt.label, opt.value)}
                      name="nationalityId"
                      id="nationalityId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Residency Status <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    //   options={subDepMenu}
                    //   value={{ label: subDepLabel, value: subDepValue }}
                    //   onChange={(opt) => selectSubDepartment(opt.label, opt.value)}
                      name="residencyStatusId"
                      id="residencyStatusId"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Profile Photo
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={1}></ConsultantFile>

                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Id or passport
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={2}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Proof of Your Right to Work Self-Employed in the UK (BRP/Visa)
                    </span>
                  </Col>
                  <Col md="6">
                
                  <ConsultantFile value={3}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                    Proof of address <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
          
                  <ConsultantFile value={4}></ConsultantFile>
                   
                  </Col>
                </FormGroup>

                {/* <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup> */}
                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button.Ripple
                    type="submit"
                    className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple>
                </FormGroup>
              </Form>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
        </div>
    );
};

export default ConsGeneralInformation;