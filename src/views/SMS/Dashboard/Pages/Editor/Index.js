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

const Editor = () => {

  const currentUser = JSON?.parse(localStorage.getItem('current_user'));
  const [open, setOpen] = useState(false);
  const [options,setOptions] = useState({});
  const [series,setSeries] = useState([20, 20, 20, 20, 20]);
  const [Labels,setLabels] = useState(['A', 'B', 'C', 'D', 'E']);
  const [count,setCount] = useState({});
  const [applications,setApplications] = useState([]);

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

           <div className='d-flex justify-content-between flex-wrap'>
            <div>
              <span className='std-dashboard-style1'>Hello, {currentUser?.displayName}!</span>
              <br/>
              <span className='std-dashboard-style2'>Here's what's happening with your store today.</span>
            </div>

            

                </div>

                  {/* Status reports start */}

                  <div className='row mt-3'>

      <div className='col-md-3'>
        <Card>

          <CardBody>

            <span className='pvdadmin-span-style1'>Total University</span>
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

            <span className='pvdadmin-span-style1'>Total Subjects</span>
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

            <span className='pvdadmin-span-style1'>Total Providers</span>
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

            <span className='pvdadmin-span-style1'>Total Students</span>
            <br/>
            <span className='pvdadmin-span-style2'>500</span>
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

          <span className='app-style-const'>Recent Added Universities</span>

        <div style={{height: '300px', overflowY: 'scroll'}}>

        {/* <Table borderless responsive className='mt-3'>
      <thead style={{backgroundColor: '#EEF3F4'}}>
      <tr>
      <th>Student ID</th>
      <th>Name
      </th>
      <th>University</th>
      <th>Admission Manager</th>
      <th>Date</th>
      </tr>
      </thead>
      
      <tbody>

     {
      applications?.map(app => (
        <tr>
        <td>{app?.student?.studentViewId}	</td>
        <td><div>
        <img src={rootUrl+app?.student?.profileImage?.fileUrl} style={{height: '28px', width: '28px' , borderRadius: '50%'}} className='img-fluid' />
        <span style={{marginLeft: '5px'}}>{app?.student?.nameTittle?.name}{''}{app?.student?.firstName}{' '}{app?.student?.lastName}</span>
        </div></td>
        <td>{app?.universityName}</td>
        <td>{app?.managerName}</td>
        <td>{handleDate(app?.applicationDate)}</td>
        </tr>
      ))
     }

      </tbody>

      </Table> */}

        </div>
       


        </CardBody>
      </Card>

      </div>



      {/* table end */}
        

  
      </React.Fragment>
    );
};

export default Editor;