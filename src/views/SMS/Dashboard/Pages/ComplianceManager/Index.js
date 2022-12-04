import React, { useState } from 'react';
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



const ComplianceManager = () => {

  const currentUser = JSON?.parse(localStorage.getItem('current_user'));

  const [open, setOpen] = useState(false);
 
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const textDecorationStyle ={
    textDecoration: 'underline',
    textDecorationColor: '#1e98b0',
    color: '#1e98b0',
    cursor: 'pointer'
  }

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

              <div>
                <img src={Vectorbeat} className='img-fluid dashbard-img-style2'/>

               
              </div>

             </div>

            </div>

           </div>

              {/* Status reports start */}

              <div className='row'>

            <div className='col-md-2'>
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

            <div className='col-md-2'>
              <Card>

                <CardBody>

                  <span className='pvdadmin-span-style1'>Applications in Process</span>
                  <br/>
                  <span className='pvdadmin-span-style2'>500</span>
                  <br/>
               
                </CardBody>
              </Card>

            </div>

            <div className='col-md-2'>
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

            <div className='col-md-2'>
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

            <div className='col-md-2'>
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

            <div className='col-md-2'>
              <Card>

                <CardBody>

                  <span className='pvdadmin-span-style1'>Withdrawn Application</span>
                  <br/>
                  <span className='pvdadmin-span-style2'>70</span>
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

                <span className='app-style-const'>Registered Applications</span>

                <Table borderless responsive className='mt-3'>
            <thead style={{backgroundColor: '#EEF3F4'}}>
            <tr>
            <th>Student ID</th>
            <th>Name
            </th>
            <th>University</th>
            <th>Status</th>
            <th>Date</th>
            <th></th>
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
            <td style={textDecorationStyle}>Details</td>
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
            <td style={textDecorationStyle}>Details</td>
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
            <td style={textDecorationStyle}>Details</td>
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
            <td style={textDecorationStyle}>Details</td>
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

export default ComplianceManager;