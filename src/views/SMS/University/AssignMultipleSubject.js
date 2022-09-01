import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  Input,
  CardHeader,
  Label,
  Col,
  Row,
  Table,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import * as Icon from "react-feather";
import { Upload, Modal as AntdModal } from "antd";
import "antd/dist/antd.css";
import { Image } from "antd";
import get from "../../../helpers/get";
import Select from "react-select";
import { rootUrl } from "../../../constants/constants";
import CustomButtonRipple from "../Components/CustomButtonRipple";
import remove from "../../../helpers/remove";
import post from "../../../helpers/post";
import put from "../../../helpers/put";

const AssignMultipleSubject = () => {
  const [multipleSubAssign, setMultipleSubAssign] = useState([]);
  const [homeAccept, setHomeAccept] = useState(false);
  const [ukAccept, setUkAccept] = useState(false);
  const [intAccept, setIntAccept] = useState(false);
  const [success, setSuccess] = useState(false);

  const [subId, setSubId] = useState(0);

  const { id } = useParams();
  const history = useHistory();
  const { addToast } = useToasts();

  useEffect(() => {
    get(`UniversityCampusSubject/GetAllSubjectByCampus/${id}`).then((res) => {
      console.log("MultipleSubList", res);
      setMultipleSubAssign(res);
    });
  }, [id, success]);

  const handleAssignSubjects = (e) => {
    e.preventDefault();
    const subData = {
      campusId: id,
      subjectId: subId,
      isAcceptHome: homeAccept,
      isAcceptEU_UK: ukAccept,
      isAcceptInternational: intAccept,
    };
    post("UniversityCampusSubject/Create", subData).then((res) => {
      if (res?.data?.isSuccess == true && res?.status == 200) {
        addToast(res?.data?.message, {
          appearance: "success",
          autoDismiss: true,
        });
        setSuccess(!success);
        setHomeAccept(false);
        setUkAccept(false);
        setIntAccept(false);
      }
    });
    console.log("subdataaaaa", subData);
  };

  const backToDashboard = () => {
    history.push(`/campusDetails/${id}`);
  };
  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Subjects to Campus</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Campus
              Details
            </span>
          </div>
        </CardHeader>
      </Card>

      {/* new assign multiple subject starts here */}

      <div className=" info-item mt-4">
        <Card className="uapp-employee-search">
          <CardBody className="search-card-body">
            <div className="hedding-titel d-flex justify-content-between mb-4">
              <div>
                <h5>
                  {" "}
                  <b>Assign Multiple Subject</b>{" "}
                </h5>

                <div className="bg-h"></div>
              </div>
            </div>
            <Form onSubmit={handleAssignSubjects}>
              {/* <Card>
                  <CardHeader className="page-header">
                  <CardHeader>Select Subject</CardHeader>
                  </CardHeader>
              </Card> */}

              {/* <Input
                        type='hidden'
                        name='campusId'
                        id='campusId'
                        value={id}
                        
                        /> */}

              <Row className="text-center">
                <Col xs="6" sm="4" md="2"></Col>

                <Col xs="6" sm="4" md="3">
                  <span>Is accept home </span>
                </Col>

                <Col xs="6" sm="4" md="2">
                  <span>Is accept EU_UK </span>
                </Col>

                <Col xs="6" sm="4" md="3">
                  <span>Is accept international</span>
                </Col>

                <Col xs="6" sm="4" md="2"></Col>
              </Row>

              {/* Map ongoing  */}

              {multipleSubAssign?.map((sub, i) => (
                <Row key={i}>
                  <Col xs="6" sm="4" md="2" key={i} className="mt-2">
                    <div className="">{sub?.subjectName}</div>
                  </Col>

                  <Col xs="6" sm="4" md="3" className="text-center mt-2">
                    {/* <span>Is accept home </span><br /> */}
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id={i}
                        name="isAcceptHome"
                        // disabled={sub?.isChecked ? false : true}
                        onChange={(e) => {
                          setHomeAccept(!homeAccept);
                          setSubId(sub?.subjectId);
                        }}
                        defaultChecked={sub?.isAcceptHome}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="6" sm="4" md="2" className="text-center mt-2">
                    {/* <span>Is accept EU_UK  </span><br /> */}
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id={i}
                        name="isAcceptEU_UK"
                        // disabled={sub?.isChecked ? false : true}
                        onChange={(e) => {
                          setUkAccept(!ukAccept);
                          setSubId(sub?.subjectId);
                        }}
                        defaultChecked={sub?.isAcceptEU_UK}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="6" sm="4" md="3" className="text-center mt-2">
                    {/* <span>Is accept international</span> */}

                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id={i}
                        name="isAcceptInternational"
                        // disabled={sub?.isChecked ? false : true}
                        onChange={(e) => {
                          setIntAccept(!intAccept);
                          setSubId(sub?.subjectId);
                        }}
                        defaultChecked={sub?.isAcceptInternational}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="6" sm="4" md="2" className="text-center mt-2">
                    {/* <span>Is accept international</span> */}

                    <FormGroup check inline>
                      {sub?.isAssigned ? (
                        <Button type="submit" color="danger">
                          Remove
                        </Button>
                      ) : (
                        <Button type="submit" color="primary">
                          Add
                        </Button>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
              ))}

              {/* <FormGroup
                      className="has-icon-left position-relative"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button.Ripple
                        type="submit"
                        className="mr-1 mt-3 badge-primary"
                      >
                        Submit
                      </Button.Ripple>
                    </FormGroup> */}
            </Form>
          </CardBody>
        </Card>
      </div>

      {/* new assign multiple subject ends here */}
    </div>
  );
};

export default AssignMultipleSubject;
