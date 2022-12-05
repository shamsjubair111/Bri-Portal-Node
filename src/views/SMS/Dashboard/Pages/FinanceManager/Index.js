import React, { useEffect, useState } from 'react';
import {
   Card,
  CardBody,
  Table
} from 'reactstrap';
import user1 from '../../../../../assets/img/user1.svg';
import user2 from '../../../../../assets/img/user2.svg';
import capture from '../../../../../assets/img/capture.PNG';
import images1 from '../../../../../assets/img/images1.svg';
import "../../../../../assets/scss/pages/dashboard-analytics.scss"
import { Drawer } from 'antd';
import plusicon from '../../../../../assets/img/plusicon.svg';
import Vectorbeat from '../../../../../assets/img/Vectorbeat.svg';
import gift from '../../../../../assets/img/gift.PNG';
import cuser1 from '../../../../../assets/img/cuser1.svg';
import down from '../../../../../assets/img/down.svg';
import camera2 from '../../../../../assets/img/camera2.svg';
import Chart from 'react-apexcharts'
import get from '../../../../../helpers/get';
import { rootUrl } from '../../../../../constants/constants';


const FinanceManager = () => {

  const [open, setOpen] = useState(false);
  const [totalApp,setTotalApp] = useState(0);
  const [appInProcess,setAppInProcess] = useState(0);
  const [unconditional,setUnconditional] = useState(0);
  const [registered,setRegistered] = useState(0);
  const [rejected,setRejected] = useState(0);
  const [withdrawn,setWithdrawn] = useState(0);
  const [count,setCount] = useState({});
  const [applications,setApplications] = useState([]);
  
  const currentUser = JSON?.parse(localStorage.getItem('current_user'));

  useEffect(()=>{

    get(`FinanceManagerDashboard/Counting`)
    .then(res => setCount(res))

  },[])

  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

    return (
        <React.Fragment>

          <div className='d-flex justify-content-between flex-wrap'>
            <div>
              <span className='std-dashboard-style1'>Hello, {currentUser?.displayName}!</span>
              <br/>
              <span className='std-dashboard-style2'>Here's what's happening with your store today.</span>
            </div>

            <div  className='d-flex flex-wrap'>

          


             <div style={{cursor: 'pointer'}}>

              <div className='std-dashboard-style4'>


              </div>

               <div className='std-dashboard-style5'>
               <img src={plusicon} className='img-fluid dashbard-img-style1' />
               <span className='std-dashboard-style3'>Add New Student</span>
               </div>
             </div>

             <div style={{cursor: 'pointer'}}>

              <div className='std-dashboard-style6' onClick={showDrawer}>

              </div>

              <div  onClick={function noRefCheck(){}}>
                <img src={Vectorbeat} className='img-fluid dashbard-img-style2' onClick={showDrawer} />

                <Drawer placement="right" onClose={onClose} open={open}>
                <div className=''>
             
             <Card>
              <CardBody>
              <span className='consultant-news-feed-style'>NEWS FEED</span>
              </CardBody>
             </Card>

             <Card>
              <CardBody>
              <div>
               <div className='d-flex'>
                 <div className='notice-image-style'> 
                 <img src={user1}  />
                 </div>
                 <div className='ml-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>We're delighted to introduce you to our new "Become an Education Consultant...
                   <br/>
                   <span style={{textDecoration:'underline', textDecorationColor: '#878A99', cursor: 'pointer'}}>read more</span></span>

                   <br/>
                   <span className='notice-time-style'>02:14 PM Today</span>
                 </div>


               </div>

             </div>
              </CardBody>
             </Card>
             
           
           <Card>
            <CardBody>
            <div>
               <div className='d-flex'>
                 <div className='notice-image-style'> 
                 <img src={user2}  />
                 </div>
                 <div className='ml-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>We're delighted to introduce you
                    </span>
                    <br/>
                    <img src={capture} className='img-fluid' />
                   <br/>
                   <span className='notice-time-style'>02:14 PM Today</span>
                 </div>


               </div>

             </div>
            </CardBody>
           </Card>

            <Card>
              <CardBody>
              <div>
               <div className='d-flex'>
                 <div className='notice-image-style'> 
                 <img src={user2}  />
                 </div>
                 <div className='ml-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>We're delighted to introduce you
                    </span>
                    <br/>
                    <div className='d-flex justify-content-around my-2'>
                    <img src={images1} className='img-fluid' />
                    <img src={images1} className='img-fluid' />
                    <img src={images1} className='img-fluid' />
                    </div>
                   
                   <span className='notice-time-style'>02:14 PM Today</span>
                 </div>


               </div>

             </div>
              </CardBody>
            </Card>


             <div>

             <Card>
              <CardBody>
              <span className='consultant-news-feed-style'>NOTICE</span>
              </CardBody>
             </Card>

             <Card>
              <CardBody>
              <div className=''>
                 <div className='notice-image-stylemb-2'> 
                 <span className='notice-user-name'>Super Admin</span>
                 </div>
                 <div className='mt-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>University of Suffolk admissions open for September 2022 intake.

                   <br/>
                   <span style={{textDecoration:'underline', textDecorationColor: '#878A99', cursor: 'pointer'}}>View</span></span>

              
               
               

                 </div>


                 <div className='mt-2'> 
                 <span className='notice-time-style'>02:14 PM 19/07/22</span>
                 </div>


               </div>
              </CardBody>
             </Card>

           <Card>
            <CardBody>
     
               

               <div>
                 <div className='notice-image-stylemb-2'> 
                 <span className='notice-user-name'>Super Admin</span>
                 </div>
                 <div className='mt-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>University of Suffolk admissions open for September 2022 intake.

                   <br/>
                   <span style={{textDecoration:'underline', textDecorationColor: '#878A99', cursor: 'pointer'}}>View</span></span>

              
               
               

                 </div>


                 <div className='mt-2'> 
                 <span className='notice-time-style'>02:14 PM 19/07/22</span>
                 </div>


               </div>

            </CardBody>
           </Card>



             </div>

              <Card>
                <CardBody>
                <div>
                <img src={gift} className='img-fluid' />
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

                        <div className='row'>

                      <div className='col-md-2'>
                        <Card style={{border: '0.5px solid #24A1CD'}}>

                          <CardBody>

                            <span className='pvdadmin-span-style1'>Total Application</span>
                            <br/>
                            <br/>
                            <span className='pvdadmin-span-style2' style={{color: '#24A1CD'}}>{count?.totalApplication}</span>
                            <br/>
                          
                          </CardBody>
                        </Card>

                      </div>

                      <div className='col-md-2'>
                        <Card style={{border: '0.5px solid #F87675'}}>

                          <CardBody>

                            <span className='pvdadmin-span-style1'>Applications in Process</span>
                            <br/>
                            <span className='pvdadmin-span-style2' style={{color: '#F87675'}}>{count?.totalApplicationInProgress}</span>
                            <br/>
                            
                          </CardBody>
                        </Card>

                      </div>

                      <div className='col-md-2'>
                        <Card style={{border: '0.5px solid #23CCB5'}}> 

                          <CardBody>

                            <span className='pvdadmin-span-style1'>Unconditional Offer</span>
                            <br/>
                            <br/>
                            <span className='pvdadmin-span-style2' style={{color: '#23CCB5'}}>{count?.totalUnconditionalOffer}</span>
                            <br/>
                            
                          </CardBody>
                        </Card>

                      </div>

                      <div className='col-md-2'>
                        <Card style={{border: '0.5px solid #AE75F8'}}>

                          <CardBody>

                            <span className='pvdadmin-span-style1'>Total Registered</span>
                            <br/>
                            <br/>
                            <span className='pvdadmin-span-style2' style={{color: '#AE75F8'}}>{count?.totalRegistered}</span>
                            <br/>
                          
                          </CardBody>
                        </Card>

                      </div>

                      <div className='col-md-2'>
                        <Card style={{border: '0.5px solid #F7BD12'}}>

                          <CardBody>

                            <span className='pvdadmin-span-style1'>Rejected / Cancelled</span>
                            <br/>
                            
                            <span className='pvdadmin-span-style2' style={{color: '#F7BD12'}}>{count?.totalRejected}</span>
                            <br/>
                          
                          </CardBody>
                        </Card>

                      </div>

                      <div className='col-md-2'>
                        <Card style={{border: '0.5px solid #707070'}}>

                          <CardBody>

                            <span className='pvdadmin-span-style1'>Withdrawn Application</span>
                            <br/>
                            <span className='pvdadmin-span-style2' style={{color: '#707070'}}>{count?.totalWithdrawn}</span>
                            <br/>
                            
                          </CardBody>
                        </Card>

                      </div>

                      </div>

                  {/* status reports end */}


                        {/* consultant transaction list table start */}
     
                          <div>

                            

                    <Card>
                      <CardBody>

                        <span className='app-style-const'>Consultant Transaction List</span>

                      <Table borderless responsive className='mt-3' style={{height: '300px', overflowY: 'scroll'}}>
                    <thead style={{backgroundColor: '#EEF3F4'}}>
                    <tr>
                    <th>Consultant ID</th>
                    <th>Consultant Name
                    </th>
                    <th>Total In Flow</th>
                    <th>Total Out Flow</th>
                    <th>Total Balance</th>
                    <th></th>
                    </tr>
                    </thead>
                    <tbody>


                    <tr>
                    <td>#AG009	</td>
                    <td><div>
                    <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
                    <span style={{marginLeft: '5px'}}>Mirela-Gabriela Porcisteanu</span>
                    </div></td>
                    <td>20472.5</td>
                    <td>1448</td>
                    <td>5985</td>
                    <td style={{textDecoration: 'underline', color:'#1e98b0', textDecorationColor: '#1e98b0'}}>Details</td>
                    </tr>
                    <tr>
                    <td>#AG00955	</td>
                    <td><div>
                    <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
                    <span style={{marginLeft: '5px'}}>Mirela-Gabriela Porcisteanu</span>
                    </div></td>
                    <td>20472.5</td>
                    <td>1448</td>
                    <td>5985</td>
                    <td style={{textDecoration: 'underline', color:'#1e98b0', textDecorationColor: '#1e98b0'}}>Details</td>
                    </tr>
                    <tr>
                    <td>#AG009	</td>
                    <td><div>
                    <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
                    <span style={{marginLeft: '5px'}}>Mirela-Gabriela Porcisteanu</span>
                    </div></td>
                    <td>20472.5</td>
                    <td>1448</td>
                    <td>5985</td>
                    <td style={{textDecoration: 'underline', color:'#1e98b0', textDecorationColor: '#1e98b0'}}>Details</td>
                    </tr>
                    <tr>
                    <td>#AG009	</td>
                    <td><div>
                    <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
                    <span style={{marginLeft: '5px'}}>Mirela-Gabriela Porcisteanu</span>
                    </div></td>
                    <td>20472.5</td>
                    <td>1448</td>
                    <td>5985</td>
                    <td style={{textDecoration: 'underline', color:'#1e98b0', textDecorationColor: '#1e98b0'}}>Details</td>
                    </tr>

                    </tbody>
                    </Table>



                      </CardBody>
                    </Card>

                    </div>


                    {/* consultant transaction list table end */}



         
  
      </React.Fragment>
    );
};

export default FinanceManager;