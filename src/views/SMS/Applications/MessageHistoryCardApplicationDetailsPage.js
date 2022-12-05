import { HubConnectionBuilder } from '@microsoft/signalr';
import { string } from 'prop-types';
import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { rootUrl } from '../../../constants/constants';
import { userTypes } from '../../../constants/userTypeConstant';

const MessageHistoryCardApplicationDetailsPage = (props) => {

  const userType = localStorage.getItem('userType');
  const {applicationId,studentMail,consultantMail,admissionManagerMail,loading,setLoading} = props;
  console.log(applicationId, 'xxxxxxx')

  useEffect(()=>{

    if(!loading){
      if(userType == userTypes?.Consultant || userType == userTypes?.AdmissionManager || userType == userTypes?.Student){
    
        const newConnection = new HubConnectionBuilder()
      .withUrl(`${rootUrl}applicationMessageHub`)
      .withAutomaticReconnect()
      .build();
      console.log('New Connection', newConnection);
    
        newConnection.start()
            .then(result => {
              console.log("SignalR is now connected")
              newConnection.invoke("JoinGroup", applicationId.toString());
              
              
            })
            
       
      }
    }

  },[])
 
 
  
   




   



    return (
        
        <>
        <Card>
            <CardBody>
              <div className="hedding-titel d-flex justify-content-between mb-4">
                <div>
                  <h5>
                    {" "}
                    <b>Message History</b>{" "}
                  </h5>

                  <div className="bg-h"></div>
                </div>
                {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}
              </div>
              <div className="box arrow-left">Mistakenly apply</div>
            </CardBody>
          </Card>
          </>
    );
};

export default MessageHistoryCardApplicationDetailsPage;