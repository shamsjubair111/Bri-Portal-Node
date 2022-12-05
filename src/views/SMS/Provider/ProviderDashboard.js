import React, { useEffect, useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import { Drawer } from "antd";
import plusicon from "../../../assets/img/plusicon.svg";
import Vectorbeat from "../../../assets/img/Vectorbeat.svg";
import gift from "../../../assets/img/gift.PNG";
import cuser1 from "../../../assets/img/cuser1.svg";
import user from "../../../assets/img/Uapp_fav.png";
import get from "../../../helpers/get";
import { rootUrl } from "../../../constants/constants";
import { useParams } from "react-router-dom";

const ProviderDashboard = () => {
  const { id } = useParams();
  const currentUser = JSON?.parse(localStorage.getItem("current_user"));
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState({});
  const [applications, setApplications] = useState([]);
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    get(`ProviderAdminDashboard/ProviderCounting/${id}`).then((res) => {
      setCount(res);
    });

    get(`ProviderAdminDashboard/ProviderApplication/${id}`).then((res) => {
      setApplications(res);
    });

    get(`ProviderAdminDashboard/ProviderManagers/${id}`).then((res) => {
      setManagers(res);
     
    });
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleDate = (e) => {
    var datee = e;
    var utcDate = new Date(datee);
    var localeDate = utcDate.toLocaleString("en-CA");
    const x = localeDate.split(",")[0];
    return x;
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap">
        <div>
          <span className="std-dashboard-style1">
            Good Morning, {currentUser?.displayName}!
          </span>
          <br />
          <span className="std-dashboard-style2">
            Here's what's happening with your store today.
          </span>
        </div>

        <div className="d-flex flex-wrap">
          <div style={{ cursor: "pointer" }}>
            <div className="std-dashboard-style4"></div>

            <div className="std-dashboard-style5">
              <img src={plusicon} alt="" className="img-fluid dashbard-img-style1" />
              <span className="std-dashboard-style3">Add New Student</span>
            </div>
          </div>

          <div style={{ cursor: "pointer" }}>
            <div className="std-dashboard-style6" onClick={showDrawer}></div>

            <div onClick={function noRefCheck() {}}>
              <img
                src={Vectorbeat}
                className="img-fluid dashbard-img-style2" alt=""
                onClick={showDrawer}
              />

              <Drawer placement="right" onClose={onClose} open={open}>
                <div className="">
                  <div>
                    <Card>
                      <CardBody>
                        <span className="consultant-news-feed-style">
                          NOTICE
                        </span>
                      </CardBody>
                    </Card>

                    <Card>
                      <CardBody>
                        <div className="">
                          <div className="notice-image-stylemb-2">
                            <span className="notice-user-name">
                              Super Admin
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="notice-user-name">
                              MD Shamim (Admin)
                            </span>
                            <br />
                            <span className="notice-user-desc">
                              University of Suffolk admissions open for
                              September 2022 intake.
                              <br />
                              <span
                                style={{
                                  textDecoration: "underline",
                                  textDecorationColor: "#878A99",
                                  cursor: "pointer",
                                }}
                              >
                                View
                              </span>
                            </span>
                          </div>

                          <div className="mt-2">
                            <span className="notice-time-style">
                              02:14 PM 19/07/22
                            </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card>
                      <CardBody>
                        <div>
                          <div className="notice-image-stylemb-2">
                            <span className="notice-user-name">
                              Super Admin
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="notice-user-name">
                              MD Shamim (Admin)
                            </span>
                            <br />
                            <span className="notice-user-desc">
                              University of Suffolk admissions open for
                              September 2022 intake.
                              <br />
                              <span
                                style={{
                                  textDecoration: "underline",
                                  textDecorationColor: "#878A99",
                                  cursor: "pointer",
                                }}
                              >
                                View
                              </span>
                            </span>
                          </div>

                          <div className="mt-2">
                            <span className="notice-time-style">
                              02:14 PM 19/07/22
                            </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  <Card>
                    <CardBody>
                      <div>
                        <img src={gift} alt="" className="img-fluid" />
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>

      {/* Status reports start */}

      <div className="row">
        <div className="col-md-3">
          <Card>
            <CardBody>
              <span className="pvdadmin-span-style1">Total Application</span>
              <br />
              <span className="pvdadmin-span-style2">
                {count?.totalApplication}
              </span>
              <br />
              <br />
            </CardBody>
          </Card>
        </div>

        <div className="col-md-3">
          <Card>
            <CardBody>
              <span className="pvdadmin-span-style1">Universities</span>
              <br />
              <span className="pvdadmin-span-style2">
                {count?.universities}
              </span>
              <br />
              <br />
            </CardBody>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <CardBody>
              <span className="pvdadmin-span-style1">Admission Managers</span>
              <br />
              <span className="pvdadmin-span-style2">
                {count?.admissionmanagers}
              </span>
              <br />
              <br />
            </CardBody>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <CardBody>
              <span className="pvdadmin-span-style1">Admission Officers</span>
              <br />
              <span className="pvdadmin-span-style2">
                {count?.admissionofficers}
              </span>
              <br />
              <br />
            </CardBody>
          </Card>
        </div>
      </div>

      {/* status reports end */}

      {/* table start */}

      <div>
        <Card>
          <CardBody>
            <span className="app-style-const">New Applications</span>

            <div style={{ height: "300px", overflowY: "scroll" }}>
              <Table borderless responsive className="mt-3">
                <thead style={{ backgroundColor: "#EEF3F4" }}>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>University</th>
                    <th>Admission Manager</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {applications?.map((app, i) => (
                    <tr key={i}>
                      <td>{app?.student?.studentViewId}</td>
                      <td>
                        <div>
                          <img
                            src={
                              app?.student?.profileImage?.thumbnailUrl == null
                                ? user
                                : rootUrl +
                                  app?.student?.profileImage?.thumbnailUrl
                            }
                            alt=""
                            style={{
                              height: "28px",
                              width: "28px",
                              borderRadius: "50%",
                            }}
                            className="img-fluid"
                          />
                          <span style={{ marginLeft: "5px" }}>
                            {app?.student?.nameTittle?.name}
                            {""}
                            {app?.student?.firstName} {app?.student?.lastName}
                          </span>
                        </div>
                      </td>
                      <td>{app?.universityName}</td>
                      <td>{app?.managerName}</td>
                      <td>{handleDate(app?.applicationDate)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <span className="app-style-const">Admission Manager List</span>

            <div style={{ height: "300px", overflowY: "scroll" }}>
              <Table borderless responsive className="mt-3">
                <thead style={{ backgroundColor: "#EEF3F4" }}>
                  <tr>
                    <th>Admission Manager ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Application</th>
                  </tr>
                </thead>
                <tbody>
                  {managers?.map((man, i) => (
                    <tr key={i}>
                      <td>{man?.uappId}</td>
                      <td>
                        <div>
                          <img
                            src={
                              man?.imageUrl == null
                                ? user
                                : rootUrl + man?.imageUrl
                            }
                            alt=""
                            style={{
                              height: "28px",
                              width: "28px",
                              borderRadius: "50%",
                            }}
                            className="img-fluid"
                          />
                          <span style={{ marginLeft: "5px" }}>
                            {man?.nameTittle} {man?.fullName}
                          </span>
                        </div>
                      </td>
                      <td>{man?.email}</td>
                      <td>{man?.applicationCount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* table end */}
    </React.Fragment>
  );
};

export default ProviderDashboard;
