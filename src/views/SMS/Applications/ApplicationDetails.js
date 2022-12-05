import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import get from "../../../helpers/get";
import { rootUrl } from "../../../constants/constants";
import { useToasts } from "react-toast-notifications";

import { permissionList } from "../../../constants/AuthorizationConstant";
import MessageHistoryCardApplicationDetailsPage from "./MessageHistoryCardApplicationDetailsPage";
import StudentDocument from "./ApplicationDetailsComponents/StudentDocument";
import ApplicationStudentProfile from "./ApplicationDetailsComponents/ApplicationStudentProfile";
import ApplicationInfo from "./ApplicationDetailsComponents/ApplicationInfo";
import Loader from "../Search/Loader/Loader";

const ApplicationDetails = () => {
  const [activetab, setActivetab] = useState("1");
  const [applicationInfo, setApplicationInfo] = useState({});
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  const [success, setSuccess] = useState(false);
  const [loading,setLoading] = useState(true);

  // ELPT modal
  
  const [elptDate, setElptDate] = useState("");
  const [etaDate, setEtaDate] = useState("");
  const [eatDeadLine, setEtaDeadLine] = useState("");

  // const { addToast } = useToasts();
  const history = useHistory();
  const { id, stdId } = useParams();
  const location = useLocation();

  useEffect(() => {
    get(`Application/Get/${id}`).then((res) => {
      setLoading(false);
      setApplicationInfo(res);
      setElptDate(handleDate(res?.elpt?.elptDate));
      setEtaDate(handleDate(res?.elpt?.eta));
      setEtaDeadLine(handleDate(res?.elpt?.etaDeadline));
    });


  }, [id, stdId, success]);


  const toggle = (tab) => {
    setActivetab(tab);
    // if (tab == "1") {
    //   history.push("/addUniversityCampus");
    // }
    if (tab == "2") {
      setActivetab(tab);
      //   history.push("/addUniversityFinancial");
    }
    if (tab == "3") {
      setActivetab(tab);
      //   history.push("/addUniversityFeatures");
    }
  };

  const handleDate = (e) => {
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    const x = localeDate.split(",")[0];
    return x;
  };

  const handleRedirectToAppliPage = () => {
    if (location.providerId != undefined && location.managerId != undefined) {
      history.push(
        `/providerAdmissionManager/${location.managerId}/${location.providerId}`
      );
    } else if (location.appId != undefined) {
      history.push("/");
    } else {
      history.push("/applications");
    }
  };

  // const handleUpdateTestScores = (data) => {
  //   localStorage.setItem("applictionStudentId", data?.id);
  //   localStorage.setItem("applictionStudentTypeId", data?.studentTypeId);
  //   localStorage.setItem("method", "put");

  //   history.push(`/addTestScore/${data?.id}/${1}`);
  // };


  return (
    <>
    {
      loading ? 
      <Loader/>
      :
      <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Application Details</h3>
          <div className="page-header-back-to-home">
            <span onClick={handleRedirectToAppliPage} className="text-white">
              {" "}
              <i className="fas fa-arrow-circle-left"></i>{" "}
              {location.providerId != undefined &&
              location.managerId != undefined
                ? "Back to Admission Manager Details"
                : location.appId
                ? "Back to Student Dashboard"
                : "Back to Application List"}
            </span>
          </div>
        </CardHeader>
      </Card>
      <Row>
        <Col md="7">
          <Card>
            <CardBody>
              <Nav tabs className="row row-cols-md-3 row-cols-sm-1 text-center">
                <NavItem>
                  <NavLink
                    active={activetab === "1"}
                    onClick={() => toggle("1")}
                  >
                    Application Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activetab === "2"}
                    onClick={() => toggle("2")}
                  >
                    Documents
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activetab === "3"}
                    onClick={() => toggle("3")}
                  >
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>

              {activetab == 1 ? (
                <TabContent activeTab={activetab}>
                  <TabPane tabId="1">

                    <ApplicationInfo 
                     id={id}
                     applicationInfo={applicationInfo}
                     elptDate={elptDate}
                     etaDate={etaDate}
                     eatDeadLine={eatDeadLine}
                     success={success}
                     setSuccess={setSuccess}
                    />

                  </TabPane>
                </TabContent>
              ) : activetab == 2 ? (
                <TabContent activeTab={activetab}>
                  <TabPane tabId="2">

                    <StudentDocument stdId={stdId} />

                  </TabPane>
                </TabContent>
              ) : (
                <TabContent activeTab={activetab}>
                  <TabPane tabId="3">

                    <ApplicationStudentProfile stdId={stdId} />

                  </TabPane>
                </TabContent>
              )}
            </CardBody>
          </Card>
        </Col>

        <Col md="5">
          <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between">
                <div>
                  <h5>
                    {" "}
                    <b>Admission Manager</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>

              <div className="d-flex justify-content-between">
                <div className="my-auto">
                  <span>
                    <b>Name:</b> {applicationInfo?.admissionManager?.firstName}{" "}
                    {applicationInfo?.admissionManager?.lastName}
                  </span>{" "}
                  <br />
                  <span>
                    <b>Email:</b> {applicationInfo?.admissionManager?.email}
                  </span>
                  <br />
                  <span>
                    <b>Phone:</b>{" "}
                    {applicationInfo?.admissionManager?.phoneNumber}
                  </span>
                </div>
                <div>
                  <div className="uapp-circle-image margin-top-minus">
                    {/* {applicationInfo?.admissionManager?.admissionManagerMedia?.fileUrl ==
                  null ? (
                    <img src={profileImage} alt="provider_img" />
                  ) : ( */}

                    <img
                      src={
                        rootUrl +
                        applicationInfo?.admissionManager?.admissionManagerMedia
                          ?.thumbnailUrl
                      }
                      alt="admission_manager_img"
                    />

                    {/* )} */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between">
                <div>
                  <h5>
                    {" "}
                    <b>Consultant</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>

              <div className="d-flex justify-content-between">
                <div className="my-auto">
                  <span>
                    <b>Name:</b> {applicationInfo?.consultant?.firstName}{" "}
                    {applicationInfo?.consultant?.lastName}
                  </span>{" "}
                  <br />
                  <span>
                    <b>Email:</b> {applicationInfo?.consultant?.email}
                  </span>
                  <br />
                  <span>
                    <b>Phone:</b> {applicationInfo?.consultant?.phoneNumber}
                  </span>
                  <br />
                  <span>
                    <b>Account Status: </b>{" "}
                    {applicationInfo?.consultant?.accountStatus?.statusName}
                    <br />
                    {applicationInfo?.consultant?.accountStatusId == 4 ? (
                      <span className="text-danger">
                        {" "}
                        The consultant of this student is blocked due to
                        compliance issue. Please contact admin before you do any
                        further update on his applications.
                      </span>
                    ) : null}
                  </span>
                  <br />
                </div>
                <div>
                  <div className="uapp-circle-image margin-top-minus">
                    {/* {universityInfo?.provider?.providerLogoMedia?.fileUrl ==
                  null ? (
                    <img src={profileImage} alt="provider_img" />
                  ) : ( */}
                    <img
                      src={
                        rootUrl +
                        applicationInfo?.consultant?.consultantProfileImageMedia
                          ?.thumbnailUrl
                      }
                      alt="consultant_img"
                    />
                    {/* )} */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between mb-4">
                <div>
                  <h5>
                    {" "}
                    <b>Message History</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                
              </div>
              <div className="box arrow-left">Mistakenly apply</div>
            </CardBody>
          </Card> */}

          <MessageHistoryCardApplicationDetailsPage
            applicationId={applicationInfo?.id}
            studentMail={applicationInfo?.student?.email}
            consultantMail={applicationInfo?.consultant?.email}
            admissionManagerMail={applicationInfo?.admissionManager?.email}
            loading={loading}
            setLoading={setLoading}
          />

          <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between mb-4">
                <div>
                  <h5>
                    {" "}
                    <b>Note</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>
            </CardBody>
          </Card>

          {/* <div
            className="has-icon-left position-relative"
            style={{ display: "flex", justifyContent: "end" }}
          >
            

            <ButtonForFunction
              func={handleRedirectToAppliPage}
              className={"badge-primary"}
              name={<b>Back to Application Page</b>}
              permission={6}
            />
          </div> */}
        </Col>
      </Row>
    </div>
    }
    </>
  );
};

export default ApplicationDetails;
