import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ButtonGroup,
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
  Table,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const NewDashboard = () => {
  const currentUser = JSON?.parse(localStorage.getItem("current_user"));

  return (
    <div>
      <div className="uapp-user-name mb-3">
        <Row>
          <Col sm="9" xs="12">
            <h2>Welcome, {currentUser?.displayName}.</h2>
          </Col>

          <Col sm="3" xs="12 text-sm-right">
            {/* <button className="uapp-btn btn">Add New Action</button> */}
          </Col>
        </Row>
      </div>

      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <div className="table-responsive mb-3">
                <Table
                  id="table-to-xls"
                  style={{ verticalAlign: "middle" }}
                  className="table-sm table-bordered"
                >
                  <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                      <th style={{ verticalAlign: "middle" }}>App Id</th>
                      <th style={{ verticalAlign: "middle" }}>Subject</th>
                      <th style={{ verticalAlign: "middle" }}>University</th>
                      <th style={{ verticalAlign: "middle" }}>Intake</th>
                      <th style={{ verticalAlign: "middle" }}>Status</th>
                      <th
                        style={{ verticalAlign: "middle" }}
                        className="text-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {applicationList?.map((app, i) => (
                    <tr key={i}>
                      {checkId ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.uappId}
                        </td>
                      ) : null}

                      {checkAppId ? (
                        <td style={{ verticalAlign: "middle" }}>{app?.id}</td>
                      ) : null}

                      {checkApplic ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.studentName}
                        </td>
                      ) : null}

                      {checkContact ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.studentPhone} <br />
                          {app?.studentEmail}
                        </td>
                      ) : null}

                      {checkUni ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.universityName}
                        </td>
                      ) : null}

                      {checkCamp ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.campusName}
                        </td>
                      ) : null}

                      {checkCourse ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.subjectName}
                        </td>
                      ) : null}

                      {checkIntake ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.intakeName}
                        </td>
                      ) : null}

                      {checkDate ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.applicationDate ? (
                            <>{handleDate(app?.applicationDate)}</>
                          ) : null}
                        </td>
                      ) : null}

                      {checkSts ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.applicationStatusName}
                        </td>
                      ) : null}

                      {checkOfr ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.offerStatusName}
                        </td>
                      ) : null}

                      {checkIntrv ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.interviewStatusName}
                        </td>
                      ) : null}

                      {checkElpt ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.elptStatusName}
                        </td>
                      ) : null}

                      {checkEnSts ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.enrollmentStatusName}
                        </td>
                      ) : null}

                      {checkSlcs ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.studentFinanceName}
                        </td>
                      ) : null}

                      {checkCons ? (
                        <td style={{ verticalAlign: "middle" }}>
                          {app?.consultantName}
                        </td>
                      ) : null}

                      
                    </tr>
                  ))} */}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <div className="row">
        <div className="col-md-8 col-sm-12">
            <h5><b>Need help before applying</b></h5>
            <Card>
              <CardBody>
                  
              </CardBody>
            </Card>

            <Card className="mt-2">
              <CardBody>
                  <p>Become Consultant Part</p>
              </CardBody>
            </Card>
        </div>

        <div className="col-md-4 col-sm-12">
          <Card className="container py-4">
            <div className="hedding-titel d-flex justify-content-between ms-1">
              <div>
                <h5>
                  {" "}
                  <b>Consultant Information</b>{" "}
                </h5>

                <div className="bg-h"></div>
              </div>
              {/* <div className="text-right edit-style  p-3" >
                        <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                        </div> */}
            </div>

            
          </Card>
        </div>
      </div>

    </div>
  );
};

export default NewDashboard;
