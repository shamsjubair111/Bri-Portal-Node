import React, { useEffect, useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import user1 from "../../../../../assets/img/user1.svg";
import user2 from "../../../../../assets/img/user2.svg";
import capture from "../../../../../assets/img/capture.PNG";
import images1 from "../../../../../assets/img/images1.svg";
import "../../../../../assets/scss/pages/dashboard-analytics.scss";
import { Drawer } from "antd";
import plusicon from "../../../../../assets/img/plusicon.svg";
import Vectorbeat from "../../../../../assets/img/Vectorbeat.svg";
import gift from "../../../../../assets/img/gift.PNG";
import cuser1 from "../../../../../assets/img/cuser1.svg";
import user from "../../../../../assets/img/Uapp_fav.png";
import down from "../../../../../assets/img/down.svg";
import camera2 from "../../../../../assets/img/camera2.svg";
import Chart from "react-apexcharts";
import get from "../../../../../helpers/get";
import { rootUrl } from "../../../../../constants/constants";
import { Link, useHistory } from "react-router-dom";


const SuperAdmin = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([20, 20, 20, 20, 20]);
  const [Labels, setLabels] = useState(["A", "B", "C", "D", "E"]);
  const [count, setCount] = useState({});
  const [applications, setApplications] = useState([]);
  const [consultants,setConsultants] = useState([]);
  const history = useHistory();
  const [intake,setIntake] = useState({});

  useEffect(() => {
    get(`SystemAdminDashboard/Counting`).then((res) => {
      setCount(res);
    });

    get(`SystemAdminDashboard/Application`).then((res) => {
      setApplications(res);
     
    });

    get(`SystemAdminDashboard/GetTransactions`).then((res) => {
      setConsultants(res);
    });

    get(`AccountIntake/GetCurrentAccountIntake`)
    .then(res =>{
      setIntake(res);
    })
  

  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const currentUser = JSON?.parse(localStorage.getItem("current_user"));

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
            Hello, {currentUser?.displayName}!
          </span>
          <br />
          <span className="std-dashboard-style2">
            Here's what's happening with your store today.
          </span>
        </div>

        <div className="d-flex flex-wrap">
          <div className="mt-2 mr-4">
            <span style={{fontWeight: '500'}}>Intake: {intake?.intakeName}</span>
          </div>
          <div style={{ cursor: "pointer" }} onClick={()=>{
            history.push(`/addStudentRegister`);
          }}>
            <div className="std-dashboard-style4"></div>

            <div className="std-dashboard-style5">
              <img src={plusicon} className="img-fluid dashbard-img-style1" />
              <span className="std-dashboard-style3">Add Student</span>
            </div>
          </div>

          <div style={{ cursor: "pointer" }}>
            <div className="std-dashboard-style6" onClick={showDrawer}></div>

            <div onClick={function noRefCheck() {}}>
              <img
                src={Vectorbeat}
                className="img-fluid dashbard-img-style2"
                onClick={showDrawer}
              />

              <Drawer placement="right" onClose={onClose} open={open}>
                <div className="">
                  <Card>
                    <CardBody>
                      <span className="consultant-news-feed-style">
                        NEWS FEED
                      </span>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div>
                        <div className="d-flex">
                          <div className="notice-image-style">
                            <img src={user1} />
                          </div>
                          <div className="ml-2">
                            <span className="notice-user-name">
                              MD Shamim (Admin)
                            </span>
                            <br />
                            <span className="notice-user-desc">
                              We're delighted to introduce you to our new
                              "Become an Education Consultant...
                              <br />
                              <span
                                style={{
                                  textDecoration: "underline",
                                  textDecorationColor: "#878A99",
                                  cursor: "pointer",
                                }}
                              >
                                read more
                              </span>
                            </span>

                            <br />
                            <span className="notice-time-style">
                              02:14 PM Today
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div>
                        <div className="d-flex">
                          <div className="notice-image-style">
                            <img src={user2} />
                          </div>
                          <div className="ml-2">
                            <span className="notice-user-name">
                              MD Shamim (Admin)
                            </span>
                            <br />
                            <span className="notice-user-desc">
                              We're delighted to introduce you
                            </span>
                            <br />
                            <img src={capture} className="img-fluid" />
                            <br />
                            <span className="notice-time-style">
                              02:14 PM Today
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div>
                        <div className="d-flex">
                          <div className="notice-image-style">
                            <img src={user2} />
                          </div>
                          <div className="ml-2">
                            <span className="notice-user-name">
                              MD Shamim (Admin)
                            </span>
                            <br />
                            <span className="notice-user-desc">
                              We're delighted to introduce you
                            </span>
                            <br />
                            <div className="d-flex justify-content-around my-2">
                              <img src={images1} className="img-fluid" />
                              <img src={images1} className="img-fluid" />
                              <img src={images1} className="img-fluid" />
                            </div>

                            <span className="notice-time-style">
                              02:14 PM Today
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

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
                        <img src={gift} className="img-fluid" />
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
        <div className="col-md-3 mb-3">
       
             <div className="count-card count-primary counter-h-112">
             <div className="count-card-title">Total Application</div>
              
              <div
                className="count-card-value"
                onClick={()=>{
                  history.push(`/applications`)
                }}
                style={{cursor: 'pointer'}}
              >
              
                {count?.totalApplication}
               
              </div>
             </div>
            
        </div>

        <div className="col-md-3 mb-3">
        <div className="count-card count-primary counter-h-112">

      
              <span className="pvdadmin-span-style1">
                Applications In Process
              </span>
          
              <span
                className="pvdadmin-span-style2"
                style={{ color: "#23CCB5", cursor: 'pointer' }}
                onClick={()=>{
                  history.push(`/applicationsByStatus/${2}/${1}`);
                }}
              >
                {count?.totalApplicationInProgress}
              </span>
          
              </div>
        
        </div>

        <div className="col-md-3 mb-3">
   
             <div className="count-card counter-h-112" style={{ border: "0.5px solid #AE75F8" }}>
             <span className="pvdadmin-span-style1">Unconditional Offer</span>
       
       <span
         className="pvdadmin-span-style2"
         style={{ color: "#AE75F8", cursor: 'pointer' }}
         onClick={()=>{
          history.push(`/applicationsByStatus/${2}/${2}`);
        }}
       >
         {count?.totalUnconditionalOffer}
       </span>
             </div>
          
        
        </div>

        <div className="col-md-3 mb-3">
       <div className="count-card counter-h-112" style={{ border: "0.5px solid #F7BD12 " }}>
       <span className="pvdadmin-span-style1">Total Registered</span>
         
         <span
           className="pvdadmin-span-style2"
           style={{ color: "#F7BD12", cursor: 'pointer' }}
           onClick={()=>{
            history.push(`/applicationsByStatus/${2}/${3}`);
           }}
         >
           {count?.totalRegistered}
         </span>
       </div>
             
           
        
        </div>

        <div className="col-md-3 mb-3">
              <div className="count-card counter-h-112" style={{ border: "0.5px solid #F87675" }}>
              <span  className="pvdadmin-span-style1">Rejected / Cancelled</span>
   
   <span
   onClick={()=>{
    history.push(`/applicationsByStatus/${5}/${3}`);
 }}  
     className="pvdadmin-span-style2"
     style={{ color: "#F87675", cursor: 'pointer' }}
   >
     {count?.totalRejected}
   </span>
 

              </div>
          
          
        </div>

        <div className="col-md-3 mb-3">
        <div className="count-card counter-h-112" style={{ border: "0.5px solid #707070" }}>
        <span  className="pvdadmin-span-style1">
                Withdrawn Application
              </span>
            
              <span
              onClick={()=>{
                history.push(`/applicationsByStatus/${4}/${3}`);
             }}
                className="pvdadmin-span-style2"
                style={{ color: "#707070", cursor: 'pointer' }}
              >
                {count?.totalWithdrawn}
              </span>

        </div>
            
  
           
        </div>

        <div className="col-md-3 mb-3">
       <div className="count-card counter-h-112" style={{ border: "0.5px solid #5BC973" }}>
       <span className="pvdadmin-span-style1">New Students</span>
           
           <span
             className="pvdadmin-span-style2"
             style={{ color: "#5BC973" }}
           >
             {count?.totalNewStudent}
           </span>
       </div>
             
            
            
        </div>

        <div className="col-md-3 mb-3">
         <div className="count-card counter-h-112" style={{ border: "0.5px solid #8DC8FF" }}>

         <span className="pvdadmin-span-style1">New Consultants</span>
          
          <span
            className="pvdadmin-span-style2"
            style={{ color: "#8DC8FF" }}
          >
            {count?.totalNewConsultant}
          </span>
         </div>
             
            
            
        </div>
      </div>

      {/* status reports end */}

      {/* table start */}

      <div>
        <Card>
          <CardBody>
            <span className="app-style-const">New Applications</span>

            {
              (applications?.length > 0) ? 
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
                  {applications?.map((app) => (
                    <tr>
                      <td className="cursor-pointer hyperlink-hover"><span onClick={()=>{
                        history.push(`/applicationDetails/${app?.id}/${app?.studentId}`)
                      }}>{app?.student?.studentViewId}</span> </td>
                      <td>
                        <div>
                          <img
                            src={(app?.student?.profileImage?.fileUrl == null) ? user : rootUrl + app?.student?.profileImage?.fileUrl}
                            alt=""
                            style={{
                              height: "28px",
                              width: "28px",
                              borderRadius: "50%",
                            }}
                            className="img-fluid"
                          />
                          <span style={{ marginLeft: "5px" }}>
                            {app?.student?.nameTittle?.name}{" "}
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
            :
            <p style={{textAlign: 'center', fontWeight: '700'}}>No Application</p>
            }
          </CardBody>
        </Card>
      </div>

      {/* table end */}

      {/* progress report start

      <Card>
            <CardBody>
              <div className='d-flex flex-wrap justify-content-between'>
                <span className='const-target-style'>Progress Report</span>
                <div className='d-flex flex-wrap justify-content-between'>
                  <div style={{cursor: 'pointer'}}>
                    <span>Intake</span>
                    <img className='img-fluid ml-2' src={down} />
                  </div>
                  <div className='ml-3' style={{cursor: 'pointer'}}>
                    <span>Monthly</span>
                    <img className='img-fluid ml-2' src={down} />
                  </div>
                  <div className='ml-3' style={{cursor: 'pointer'}}>
                    <span>Daily</span>
                    <img className='img-fluid ml-2' src={down} />
                  </div>
                </div>
              </div>
              <hr/>

              <div>
                <span className='application-count-style'>Intake July 2022-October 2022</span>
              </div>

              <div className='row my-4'>

                <div className='col-md-3'>



          <div className='d-flex justify-content-between'>


          <div className='d-flex'>
          <div className='custom-conslt-div1'></div>
          <p style={{fontWeight: '500', position: 'relative', top: '4px'}}>Total Application</p>
          
          </div>

          <div>
            <span style={{ position: 'relative', top: '4px'}}>22</span>
          </div>


          </div>

          <div className='d-flex justify-content-between'>


          <div className='d-flex'>
          <div className='custom-conslt-div2'></div>
          <p style={{fontWeight: '500', position: 'relative', top: '4px'}}>Submitted To University </p>
          
          </div>

          <div>
            <span style={{ position: 'relative', top: '4px'}}>22</span>
          </div>


          </div>

          <div className='d-flex justify-content-between'>


          <div className='d-flex'>
          <div className='custom-conslt-div3'></div>
          <p style={{fontWeight: '500', position: 'relative', top: '4px'}}>Unconditional Offer</p>
          
          </div>

          <div>
            <span style={{ position: 'relative', top: '4px'}}>22</span>
          </div>


          </div>

          <div className='d-flex justify-content-between'>


          <div className='d-flex'>
          <div className='custom-conslt-div4'></div>
          <p style={{fontWeight: '500', position: 'relative', top: '4px'}}>Total Registered</p>
          
          </div>

          <div>
            <span style={{ position: 'relative', top: '4px'}}>22</span>
          </div>


          </div>

          <div className='d-flex justify-content-between'>


          <div className='d-flex'>
          <div className='custom-conslt-div5'></div>
          <p style={{fontWeight: '500', position: 'relative', top: '4px'}}>Total Rejected</p>
          
          </div>

          <div>
            <span style={{ position: 'relative', top: '4px'}}>22</span>
          </div>


          </div>

                </div>

            

             <div className='col-md-5'>

             <Chart options={options} series={series} type="donut" width="100%" height='100%' />


              </div>

            
              dropdown section

                <div className='col-md-4'>

                

                </div>

              </div>

            </CardBody>
           </Card>

      progress report end */}

      {/* consultant transaction list table start */}

      <div>
        <Card>
          <CardBody>
            <span className="app-style-const">Consultant Transaction List</span>

          {
            (consultants?.length > 0) ? 
            <div style={{height: '300px', overflowY: 'scroll'}}>
          <Table
              borderless
              responsive
              className="mt-3"
             
            >
              <thead style={{ backgroundColor: "#EEF3F4" }}>
                <tr>
                  <th>Consultant ID</th>
                  <th>Consultant Name</th>
                  <th>Total In Flow</th>
                  <th>Total Out Flow</th>
                  <th>Total Balance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                      consultants?.map((con,i)=>(
                        <tr key={i}>
                    <td className="cursor-pointer hyperlink-hover"><span onClick={()=>{
                      history.push(`accountTransactionByConsultant/${con?.consultantId}`);
                    }}>{con?.consultantViewId}</span></td>
                    <td>{con?.consultantName}</td>
                    <td>{con?.credit}</td>
                    <td>{con?.debit}</td>
                    <td>{con?.balance}</td>
                    
                    </tr>
                      ))
                    }
              </tbody>
            </Table>


          </div>
          :
          <p style={{textAlign: 'center', fontWeight: '700'}}>No Transaction</p>
          }
          </CardBody>
        </Card>
      </div>

      {/* consultant transaction list table end */}
    </React.Fragment>
  );
};

export default SuperAdmin;
