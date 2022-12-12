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
import user from '../../../../../assets/img/Uapp_fav.png';
import get from '../../../../../helpers/get';
import { rootUrl } from '../../../../../constants/constants';
import { Link } from 'react-router-dom';



const ComplianceManager = () => {

  const currentUser = JSON?.parse(localStorage.getItem('current_user'));

  const [open, setOpen] = useState(false);
  const [count,setCount] = useState({});
  const [applications,setApplications] = useState([]);

  useEffect(()=>{
    get(`CompilanceManagerDashboard/Counting`)
    .then(res =>{
      setCount(res);
    })

    get(`CompilanceManagerDashboard/Application`)
    .then(res =>{
      setApplications(res);
    })

  },[])
 
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

            <div className='col-md-2 mb-3'>
          
            <div style={{border: '0.5px solid #24A1CD'}} className='count-card counter-h-112'>
            <span className='pvdadmin-span-style1'>Total Application</span>
                          
                          <span className='pvdadmin-span-style2' style={{color: '#24A1CD'}}>{count?.totalApplication}</span>
            </div>
                 
             
                 
             

            </div>

            <div className='col-md-2 mb-3'>
           <div  style={{border: '0.5px solid #23CCB5'}} className='count-card counter-h-112'>

           <span className='pvdadmin-span-style1'>Applications in Process</span>
                
                <span className='pvdadmin-span-style2' style={{color: '#23CCB5'}}>{count?.totalApplicationInProgress}</span>
           </div>

                  
               
               
               

            </div>

            <div className='col-md-2 mb-3'>
              <div style={{border: '0.5px solid #AE75F8'}} className='count-card counter-h-112'>
              <span className='pvdadmin-span-style1'>Unconditional Offer</span>
                
                <span className='pvdadmin-span-style2' style={{color: '#AE75F8'}}>{count?.totalUnconditionalOffer}</span>

              </div>

                  
               
                
             

            </div>

            <div className='col-md-2 mb-3'>
            <div style={{border: '0.5px solid #F7BD12'}} className='count-card counter-h-112'>

            <span className='pvdadmin-span-style1'>Total Registered</span>
               
               <span className='pvdadmin-span-style2' style={{color: '#F7BD12'}}>{count?.totalRegistered}</span>
            </div>

                  
             
                 
              

            </div>

            <div className='col-md-2 mb-3'>
              
            <div style={{border: '0.5px solid #F87675'}} className='count-card counter-h-112'>
            <span className='pvdadmin-span-style1'>Rejected / Cancelled</span>
            
            <span className='pvdadmin-span-style2' style={{color: '#F87675'}}>{count?.totalRejected}</span>

            </div>
                 
               
                  
             

            </div>

            <div className='col-md-2 mb-3'>
             <div style={{border: '0.5px solid #707070'}} className='count-card counter-h-112'>
             <span className='pvdadmin-span-style1'>Withdrawn Application</span>
                 
                 <span className='pvdadmin-span-style2' style={{color: '#707070'}}>{count?.totalWithdrawn}</span>

             </div>

                  
                
                  
             

            </div>

            </div>

            {/* status reports end */}


            {/* table start */}

            <div>

        

            <Card>
              <CardBody>

                <span className='app-style-const'>Recent Applications</span>

               <div style={{height: '300px', overflowY : 'scroll'}}>

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
       {
        applications?.map((app,i) =>(
          <tr key={i}>
          <td>{app?.student?.studentViewId}</td>
          <td><div>
          <img src={(app?.student?.profileImage?.thumbnailUrl == null) ? user : rootUrl+app?.student?.profileImage?.thumbnailUrl} style={{height: '28px', width: '28px', borderRadius: '50%'}} className='img-fluid' />
          <span style={{marginLeft: '5px'}}>{app?.student?.nameTittle?.name}{' '}{app?.student?.firstName}{' '}{app?.student?.lastName}</span>
          </div></td>
          <td>{app?.universityName}</td>
          <td>{app?.applicationStatusName}</td>
          <td>{handleDate(app?.applicationDate)}</td>
          <Link to={`applicationDetails/${app?.id}/${app?.studentId}`}><td style={textDecorationStyle}>Details</td></Link>
          </tr>
        ))
       }

          
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

export default ComplianceManager;