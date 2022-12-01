import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Table
} from 'reactstrap';
import "../../../../../assets/scss/pages/dashboard-analytics.scss"
import { Drawer } from 'antd';
import plusicon from '../../../../../assets/img/plusicon.svg';
import Vectorbeat from '../../../../../assets/img/Vectorbeat.svg';
import gift from '../../../../../assets/img/gift.PNG';
import cuser1 from '../../../../../assets/img/cuser1.svg';



const ProviderAdmin = () => {


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

              <div className='std-dashboard-style6' onClick={showDrawer}>

              </div>

              <div  onClick={function noRefCheck(){}}>
                <img src={Vectorbeat} className='img-fluid dashbard-img-style2' onClick={showDrawer} />

                <Drawer placement="right" onClose={onClose} open={open}>
                <div className=''>
             
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

                  <span className='pvdadmin-span-style1'>Universities</span>
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

                  <span className='pvdadmin-span-style1'>Admission Managers</span>
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

                  <span className='pvdadmin-span-style1'>Admission Officers</span>
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

     

    

           {/* table end */}


        
  
      </React.Fragment>
    );
};

export default ProviderAdmin;