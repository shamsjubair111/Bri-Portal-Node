import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import plusicon from '../../../../../assets/img/plusicon.svg';
import Vectorbeat from '../../../../../assets/img/Vectorbeat.svg';
import user1 from '../../../../../assets/img/user1.svg';
import user2 from '../../../../../assets/img/user2.svg';
import capture from '../../../../../assets/img/capture.PNG';
import images1 from '../../../../../assets/img/images1.svg';
import gift from '../../../../../assets/img/gift.PNG';
import poundicon from '../../../../../assets/img/poundcoin.svg';
import camera from '../../../../../assets/img/camera.svg';
import cuser1 from '../../../../../assets/img/cuser1.svg';
import speed from '../../../../../assets/img/speed.PNG';
import down from '../../../../../assets/img/down.svg';
import {
  Card,
  CardBody,
  Col,
  Row, Table
} from 'reactstrap';

const Consultant = () => {

  const currentUser = JSON?.parse(localStorage.getItem('current_user'));
  const referenceId  = localStorage.getItem('referenceId');
  const {addToast} = useToasts();
  const history = useHistory();
  const [info,setInfo] = useState(false);


    return (
        <React.Fragment>

        <div className='row'>

          <div className='col-md-9'>
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

              <div>
                <img src={Vectorbeat} className='img-fluid dashbard-img-style2' />

              </div>

             </div>

            </div>

           </div>

           {/* Cards */}

           <div className='row'>

            <div className='col-md-9'>
              <div className='row'>
                <div className='col-md-4'>
                  <Card>
                    <CardBody>
                      <span className='application-count-style'>TOTAL APPLICATION</span>
                      <br/>
                      
                      <span className='application-count-style2'>500</span>
                      <br/>
                      <br/>
                    </CardBody>
                  </Card>

                </div>

                <div className='col-md-4'>
                  <Card>
                    <CardBody>
                      <span className='application-count-style'>APPLICATION IN PROCESS</span>
                      <br/>
                      
                      <span className='application-count-style2'>500</span>
                      <br/>
                   
                    </CardBody>
                  </Card>

                </div>

                <div className='col-md-4'>
                  <Card>
                    <CardBody>
                      <span className='application-count-style'>UNCONDITIONAL OFFER</span>
                      <br/>
                      
                      <span className='application-count-style2'>500</span>
                      <br/>
                   
                    </CardBody>
                  </Card>

                </div>

                <div className='col-md-4 mt-3'>
                  <Card>
                    <CardBody>
                      <span className='application-count-style'>TOTAL REGISTERED</span>
                      <br/>
                      
                      <span className='application-count-style2'>500</span>
                      <br/>
                      <br/>
                    </CardBody>
                  </Card>

                </div>

                <div className='col-md-4 mt-3'>
                  <Card>
                    <CardBody>
                      <span className='application-count-style'>REJECTED / CANCELLED</span>
                      <br/>
                      
                      <span className='application-count-style2'>500</span>
                      <br/>
                      <br/>
                    </CardBody>
                  </Card>

                </div>

                <div className='col-md-4 mt-3'>
                  <Card>
                    <CardBody>
                      <span className='application-count-style'>Withdrawn Application</span>
                      <br/>
                      
                      <span className='application-count-style2'>500</span>
                      <br/>
                      <br/>
                    </CardBody>
                  </Card>

                </div>

              </div>

            </div>

            <div className='col-md-3'>
              <Card>
                <CardBody>
                <span className='application-count-style'>MY BALANCE</span>
        

                <div className='my-5 text-center' style={{position: 'relative', top: '15px'}}>
                  <button className='consultant-balance-button pr-3'>
                        <img src={poundicon} className='img-fluid mr-4'/>

                        <span style={{color: '#1E98B0'}}>Balance</span>
                  </button>
                </div>
          
              <div className='d-flex justify-content-between'>
              <span className='application-count-style' style={{textDecoration: 'underline',cursor: 'pointer', position:'relative', top: '36px'}}>Withdraw money</span>
              <div className='mt-4'>
                
              <div className='consultant-bg-img'>
                
              <img src={camera} className = 'img-fluid' style={{position: 'relative', left:'6px', top: '5px'}}  />
                </div>
             
              </div>
              </div>
                </CardBody>
              </Card>

            </div>

           </div>


           {/* Table */}

           <div className='row'>

            <div className='col-md-9'>

              <Card>
                <CardBody>

                 <div className=''>
                  <span className='app-style-const'>New Applications</span>

                  <Table borderless responsive className='mt-3'>
        <thead style={{backgroundColor: '#EEF3F4'}}>
          <tr>
            <th>Student ID</th>
            <th>Name
              </th>
            <th>University</th>
            <th>Admission Officer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#STD002628	</td>
            <td><div>
              <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
              <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
              </div></td>
            <td>Anglia Ruskin University – Navitas....</td>
            <td>@Syed Istiake</td>
            <td>15 June 2022	</td>
          </tr>

          <tr>
            <td>#STD002628	</td>
            <td><div>
              <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
              <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
              </div></td>
            <td>Anglia Ruskin University – Navitas....</td>
            <td>@Syed Istiake</td>
            <td>15 June 2022	</td>
          </tr>

          <tr>
            <td>#STD002628	</td>
            <td><div>
              <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
              <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
              </div></td>
            <td>Anglia Ruskin University – Navitas....</td>
            <td>@Syed Istiake</td>
            <td>15 June 2022	</td>
          </tr>

          <tr>
            <td>#STD002628	</td>
            <td><div>
              <img src={cuser1} style={{height: '28px', width: '28px'}} className='img-fluid' />
              <span style={{marginLeft: '5px'}}>Mr Stephen Mason</span>
              </div></td>
            <td>Anglia Ruskin University – Navitas....</td>
            <td>@Syed Istiake</td>
            <td>15 June 2022	</td>
          </tr>
         
        </tbody>
      </Table>
                 </div>
               

                </CardBody>
              </Card>

            </div>

            <div className='col-md-3'>

              <div className='consultant-custom-card-style'>
                <div className='mb-3'>
                  <span className='const-target-style'>Target Applications</span>
                  <hr/>
            
                </div>

               <div className='container text-center my-4'>
               <img src={speed} className='img-fluid' />

               </div>

              

              </div>

              <div className='text-center py-3 custom-border-style' style={{backgroundColor: '#1E98B0', color: '#fff'}}>

              <div>
                <span className='target-app-style'>
                  500
                </span>
              </div>

              <div className='m'>
                <span className='target-app-styless'>
                  Target Applications
                </span>
              </div>


              </div>

            </div>

           </div>

           {/* Progress Report */}

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

                <div className='col-md-9 text-center'>

                <div className='d-flex flex-wrap'>

                <div className='amoung-us-style mr-3 container'> 

               <div className='among-inner-div'>
                   <span>105</span>

                 
               </div>

               <div className='text-white title-among-style'>
               
               <br/>
                   <span>Total Application</span>
               </div>

                </div>

                <div className='amoung-us-style2 mr-3 container'> 
                <div className='among-inner-div'>
                   <span>12</span>

                 
               </div>

               <div className='text-white title-among-style '>
               
                   <br/>
                   <span>Submitted 
                  to University</span>
               </div>

                </div>

                <div className='amoung-us-style3 mr-3 container'> 
                <div className='among-inner-div'>
                   <span>12</span>

                 
               </div>

               <div className='text-white title-among-style'>
               
               <br/>
                   <span>Unconditional
                    Offer</span>
               </div>
                </div>

                <div className='amoung-us-style4 mr-3 container'> 
                <div className='among-inner-div'>
                   <span>12</span>

                 
               </div>

               <div className='text-white title-among-style'>
               
               <br/>
                   <span>Total
                  Registered</span>
               </div>
                </div>

                <div className='amoung-us-style5 container'> 
                <div className='among-inner-div'>
                   <span>12</span>

                 
               </div>

               <div className='text-white title-among-style'>
               
               <br/>
                   <span>Total
                    Rejected</span>
               </div>
                </div>


                </div>
                  

                </div>

              {/* dropdown section */}

                <div className='col-md-3'>

                <div className='report-status-styles-cons'>

                </div>

                </div>

              </div>
            </CardBody>
           </Card>

          </div>

          <div className='col-md-3'>
            <div className='consultant-custom-card-style'>
             
                <span className='consultant-news-feed-style'>NEWS FEED</span>

                <div className='mt-3'>
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
                
              
                <div className='mt-3'>
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

                <div className='mt-3'>
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


                <div className='mt-4'>

                <span className='consultant-news-feed-style'>NOTICE</span>

                <div className='mt-3'>
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

                  <div className='mt-3'>
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

                </div>



                </div>

                <div className='my-5'>
              <img src={gift} className='img-fluid' />
            </div>
           
            </div>

           


            

          </div>

        </div>
        
  
      </React.Fragment>
    );
};

export default Consultant;