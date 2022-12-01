import React, { useState } from 'react';
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
import camera2 from '../../../../../assets/img/camera2.svg';
import Chart from 'react-apexcharts'
import {
  Card,
  CardBody,
   Table
} from 'reactstrap';
import { Drawer } from 'antd';
import GaugeChart from 'react-gauge-chart';




const Consultant = () => {

  const currentUser = JSON?.parse(localStorage.getItem('current_user'));
  const referenceId  = localStorage.getItem('referenceId');



  const [open, setOpen] = useState(false);
  const [options,setOptions] = useState({plotOptions: {
    pie: {
      donut: {
        size: '40%'
      }
    }
  }});
  const [series,setSeries] = useState([44, 55, 41, 17, 15]);
  const [Labels,setLabels] = useState(['A', 'B', 'C', 'D', 'E']);

  


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

        <div className='row'>

          <div className='col-md-12'>
          

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
                
                    </CardBody>
                  </Card>

                </div>

              </div>

            </div>

            <div className='col-md-3'>
              <Card>
                <CardBody>
                <span className='application-count-style'>MY BALANCE</span>
        

                <div className='my-4 text-center' style={{position: 'relative', top:'15px'}}>
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
               
               

                </CardBody>
              </Card>

            </div>

            <div className='col-md-3'>

           <Card>
            <CardBody>
            <div className='consultant-custom-card-style mb-3'>
                <div className='mb-4'>
                  <span className='const-target-style'>Target Applications</span>
                  <hr/>
            
                </div>

               <div className='container text-center mt-5' style={{height: '96px'}}>
               <GaugeChart id="gauge-chart2" 
                nrOfLevels={30} 
                percent={150/500} 
                hideText = {true}
                colors={["#1E98B0", "#1E98B0"]} 
                textColor={'#1E98B0'}
                arcWidth={0.3} 
               
              />

               </div>

              

              </div>

              <div className='text-center py-4 mt-3 custom-border-style' style={{backgroundColor: '#1E98B0', color: '#fff'}}>

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
            </CardBody>
           </Card>

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

            
              {/* dropdown section */}

                <div className='col-md-4'>

                <div className='text-center report-status-styles-cons p-3 text-center-report-status-styles-cons'>

                    <span className='app-style-const'>Estimated Income</span>

                    <br/>
                    <br/>

                    <img src={camera2} className='img-fluid' />

                    <br/>
                    <br/>
                  

                      <span className='consultant-name-style-student-dashboard2 amount-div-style'>£ 125</span>

                      <br/>
                      <br/>

                      <span style={{textDecoration: 'underline' ,textDecorationColor: '#495057', color: '#495057', cursor: 'pointer'}}>July 2022-October 2022</span>
               


                </div>

                </div>

              </div>

            </CardBody>
           </Card>

          </div>

          

        </div>
        
  
      </React.Fragment>
    );
};

export default Consultant;