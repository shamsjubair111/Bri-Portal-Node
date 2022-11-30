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
import downloadBtn from '../../../../../assets/img/downloadBtn.svg';
import eyeBtn from '../../../../../assets/img/eyeBtn.svg';
import Chart from 'react-apexcharts'
import get from '../../../../../helpers/get';


const AccountOfficer = () => {

  const currentUser = JSON?.parse(localStorage.getItem('current_user'));
  const [open, setOpen] = useState(false);


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
              <span className='std-dashboard-style1'>Good Morning, {currentUser?.displayName}!</span>
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

              <div className='std-dashboard-style6'>

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

      <div className='col-md-3'>
        <Card>

          <CardBody>

            <span className='pvdadmin-span-style1'>Total Application</span>
            <br/>
            <span className='pvdadmin-span-style2'>1451</span>
            <br/>
            <br/>
          </CardBody>
        </Card>

      </div>

      <div className='col-md-3'>
        <Card>

          <CardBody>

            <span className='pvdadmin-span-style1'>Applications in Process</span>
            <br/>
            <span className='pvdadmin-span-style2'>500</span>
            <br/>
            <br/>
          </CardBody>
        </Card>

      </div>

      <div className='col-md-3'>
        <Card>

          <CardBody>

            <span className='pvdadmin-span-style1'>Unconditional Offer</span>
            <br/>
            <span className='pvdadmin-span-style2'>50</span>
            <br/>
            <br/>
          </CardBody>
        </Card>

      </div>

      <div className='col-md-3'>
        <Card>

          <CardBody>

            <span className='pvdadmin-span-style1'>Total Registered</span>
            <br/>
            <span className='pvdadmin-span-style2'>70</span>
            <br/>
            <br/>
          </CardBody>
        </Card>

      </div>

      <div className='col-md-3'>
        <Card>

          <CardBody>

            <span className='pvdadmin-span-style1'>Rejected / Cancelled</span>
            <br/>
            <span className='pvdadmin-span-style2'>70</span>
            <br/>
            <br/>
          </CardBody>
        </Card>

      </div>

      <div className='col-md-3'>
        <Card>

          <CardBody>

            <span className='pvdadmin-span-style1'>Withdrawn Application</span>
            <br/>
            <span className='pvdadmin-span-style2'>70</span>
            <br/>
            <br/>
          </CardBody>
        </Card>

      </div>

      </div>

      {/* status reports end */}



          {/* table start */}

          <div>

        

      <Card>
        <CardBody>

          <span className='app-style-const'>Withdrawal Requests</span>

          <Table borderless responsive className='mt-3'>
      <thead style={{backgroundColor: '#EEF3F4'}}>

      <tr>
      <th><span style={{position: 'relative', top: '-15px'}}>Request Date</span></th>
      <th><span style={{position: 'relative', top: '-15px'}}>Agent</span>
      </th>
      <th>Transaction Code</th>
      <th><span style={{position: 'relative', top: '-16px'}}>Amount</span></th>
      <th>Reference/ Invoice No.</th>
      <th><span>Payment type</span></th>
      <th><span style={{position: 'relative', top: '-16px'}}>Note</span></th>
      <th>Payment Date</th>
      <th><span style={{position: 'relative', top: '-16px'}}>Status</span></th>
      <th>Payment Status</th>
      <th><span style={{position: 'relative', top: '-16px'}}>Invoice</span></th>
      </tr>

      </thead>

      <tbody>


      <tr>
      <td>15 June 2022	</td>
      <td><div>
      <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
      <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
      </div></td>
      <td>WR313</td>
      <td>250</td>
      <td></td>
      <td>Bank Transfer</td>
      <td></td>
      <td>15 June 2022</td>
      <td>Pending</td>
      <td>Pending</td>
      <td>

      <div className='d-flex'>
      <img src={downloadBtn} className='img-fluid' style={{cursor: 'pointer', marginRight: '10px'}} />
      <img src={eyeBtn} className='img-fluid' style={{cursor: 'pointer'}} />

      </div>

      </td>
      </tr>

      <tr>
      <td>15 June 2022	</td>
      <td><div>
      <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
      <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
      </div></td>
      <td>WR313</td>
      <td>250</td>
      <td></td>
      <td>Bank Transfer</td>
      <td></td>
      <td>15 June 2022</td>
      <td>Pending</td>
      <td>Pending</td>
      <td>

      <div className='d-flex'>
      <img src={downloadBtn} className='img-fluid' style={{cursor: 'pointer', marginRight: '10px'}} />
      <img src={eyeBtn} className='img-fluid' style={{cursor: 'pointer'}} />

      </div>

      </td>
      </tr>

      <tr>
      <td>15 June 2022	</td>
      <td><div>
      <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
      <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
      </div></td>
      <td>WR313</td>
      <td>250</td>
      <td></td>
      <td>Bank Transfer</td>
      <td></td>
      <td>15 June 2022</td>
      <td>Pending</td>
      <td>Pending</td>
      <td>

      <div className='d-flex'>
      <img src={downloadBtn} className='img-fluid' style={{cursor: 'pointer', marginRight: '10px'}} />
      <img src={eyeBtn} className='img-fluid' style={{cursor: 'pointer'}} />

      </div>

      </td>
      </tr>

      <tr>
      <td>15 June 2022	</td>
      <td><div>
      <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
      <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
      </div></td>
      <td>WR313</td>
      <td>250</td>
      <td></td>
      <td>Bank Transfer</td>
      <td></td>
      <td>15 June 2022</td>
      <td>Pending</td>
      <td>Pending</td>
      <td>

      <div className='d-flex'>
      <img src={downloadBtn} className='img-fluid' style={{cursor: 'pointer', marginRight: '10px'}} />
      <img src={eyeBtn} className='img-fluid' style={{cursor: 'pointer'}} />

      </div>

      </td>
      </tr>
    

   

      </tbody>
      </Table>



        </CardBody>
      </Card>

      </div>



      {/* table end */}
        
  
      </React.Fragment>
    );
};

export default AccountOfficer;