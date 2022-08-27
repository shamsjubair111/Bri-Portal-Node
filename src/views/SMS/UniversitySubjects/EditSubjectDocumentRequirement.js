import React, { useEffect, useState } from "react";
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
import Axios from "axios";
import { rootUrl } from "../../../constants/constants";
import { useHistory, useParams } from "react-router";
import { useToasts } from "react-toast-notifications";
import ButtonForFunction from "../Components/ButtonForFunction";
import get from "../../../helpers/get";

const EditSubjectDocumentRequirement = () => {
  const [activetab, setActivetab] = useState("5");
  const [docuDD, setDocuDD] = useState([]);
  const [docuLabel, setDocuLabel] = useState("Select Document Group");
  const [docuValue, setDocuValue] = useState(0);
  const [docuError, setDocuError] = useState(false);
  const [applicationTypeDD, setApplicationTypeDD] = useState([]);
  const [appliLabel, setAppliLabel] = useState("Select Application type");
  const [appliValue, setAppliValue] = useState(0);
  const [appliError, setAppliError] = useState(false);

  const { id } = useParams();
  console.log(id, "SubIddddd");

  useEffect(() => {
    get("DocumentGroupDD/Index").then((res) => {
      console.log(res, "response");
      setDocuDD(res);
    });
    get("ApplicationTypeDD/Index").then((res) => {
      console.log(res, "response");
      setApplicationTypeDD(res);
    });
  }, []);

  const DocumentGroupMenu = docuDD.map((level) => ({
    label: level?.name,
    value: level?.id,
  }));
  const ApplicationMenu = applicationTypeDD.map((level) => ({
    label: level?.name,
    value: level?.id,
  }));

  //   const financeMenu = financeDD.map((finance) => ({
  //     label: finance?.name,
  //     value: finance?.id,
  //   }));

  const selectDocumentGroup = (label, value) => {
    setDocuError(false);
    setDocuLabel(label);
    setDocuValue(value);
  };
  const selectApplicationType = (label, value) => {
    setAppliError(false);
    setAppliLabel(label);
    setAppliValue(value);
  };

  const history = useHistory();
  const { addToast } = useToasts();

  // redirect to SubjecList
  const backToSubjecList = () => {
    history.push("/subjectList");
  };

  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push(`/editSubject/${id}`);
    }
    if (tab == "2") {
      history.push(`/editSubjectFee/${id}`);
    }
    if (tab == "3") {
      history.push(`/editSubjectDeliveryPattern/${id}`);
    }
    if (tab == "4") {
      history.push(`/editSubjectRequirements/${id}`);
    }
    if (tab == "5") {
      history.push(`/editSubjectDocumentRequirement/${id}`);
    }
  };

  const AuthStr = localStorage.getItem("token");

  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);

    for (var value of subdata) {
      console.log("values", value);
    }

    if (docuValue === 0) {
      setDocuError(true);
    } else if (appliValue === 0) {
      setAppliError(true);
    } else {
      Axios.post(`${rootUrl}SubjectDocumentRequirement/Create`, subdata, {
        headers: {
          "Content-Type": "application/json",
          authorization: AuthStr,
        },
      }).then((res) => {
        if (res.status === 200 && res.data.isSuccess === true) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          history.push({
            pathname: "/subjectList",
          });
        }
      });
    }
  };
  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Subject Delivery Pattern</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToSubjecList} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Subject List
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
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Subject Fee Information
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Delivery pattern
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "4"} onClick={() => toggle("4")}>
                Requirement
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activetab === "5"} onClick={() => toggle("5")}>
                Document Requirement
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="5">
              <Form onSubmit={handleSubmit} className="mt-5">
                <FormGroup row className="has-icon-left position-relative">
                  <Input
                    type="hidden"
                    id="subjectId"
                    name="subjectId"
                    value={id}
                  />
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Document Group <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={DocumentGroupMenu}
                      value={{ label: docuLabel, value: docuValue }}
                      onChange={(opt) =>
                        selectDocumentGroup(opt.label, opt.value)
                      }
                      name="documentGroupId"
                      id="documentGroupId"
                    />

                    {docuError && (
                      <span className="text-danger">
                        You must select document group
                      </span>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Application Type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={ApplicationMenu}
                      value={{ label: appliLabel, value: appliValue }}
                      onChange={(opt) =>
                        selectApplicationType(opt.label, opt.value)
                      }
                      name="applicationTypeId"
                      id="applicationTypeId"
                    />

                    {appliError && (
                      <span className="text-danger">
                        You must select application type
                      </span>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup>
                <FormGroup
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
                      className={"mt-3 badge-primary"}
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
    </div>
  );
};

export default EditSubjectDocumentRequirement;
