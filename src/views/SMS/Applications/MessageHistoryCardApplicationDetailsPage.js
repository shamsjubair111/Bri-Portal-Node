import { HubConnectionBuilder } from '@microsoft/signalr';
import { string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input } from 'reactstrap';
import { rootUrl } from '../../../constants/constants';
import { userTypes } from '../../../constants/userTypeConstant';
import get from '../../../helpers/get';

const MessageHistoryCardApplicationDetailsPage = (props) => {

  const userType = localStorage.getItem('userType');
  const [messages,setMessages] = useState([]);
  const {applicationId} = props;
  const [stringData,setStringData] = useState('');
  const current_user = JSON.parse(localStorage.getItem('current_user'));

  const getMessage = (appId) =>{
      get(`ApplicationMessage/GetMessages/${appId}`)
      .then(res =>{
        console.log('first response', res);
        setMessages(res);
      })


  }
 


  useEffect(()=>{

 
      if(userType == userTypes?.Consultant || userType == userTypes?.AdmissionManager || userType == userTypes?.Student){
    
        const newConnection = new HubConnectionBuilder()
      .withUrl(`${rootUrl}applicationMessageHub`)
      .withAutomaticReconnect()
      .build();
     
      
    
        newConnection.start()
            .then(result => {
      //         get(`ApplicationMessage/JoinGroup/${applicationId}`)
      //         .then(res =>{
      //         console.log(res);
      // })
      getMessage(applicationId);
              newConnection.invoke("JoinGroup", applicationId);
              
             
              newConnection.on('applicationMessageHub', message => {
                //  const updatedChat = [...latestChat.current];
                // updatedChat.push(message);
                console.log('Message Chekcing', message);
            if(message){
              
          getMessage(applicationId);
            
             
            }
                // this.setState = {chat: message}
              
            });
              
            })
            
       
      }
   

  },[])
 
  const handleStringData = (e) => {
    setStringData(e.target.value);
  }
 
  
   const submitFormData = (event) => {

    event.preventDefault();

    get(`ApplicationMessage/SendMessage/${stringData}/${applicationId}`)
    .then(res => {
      if(res){
        setStringData('');
      }
    })
    
    

   }


    return (
        
        <>
        <Card>
          <CardHeader>
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
          </CardHeader>
            <CardBody style={{height: '400px', overflowY: 'scroll'}}>
              
              
               <div>
               {
                  messages?.map((chat,i)=> (
                    <div className={(current_user?.displayEmail == chat?.senderEmail) ? 'box arrow-right my-3' : 'box arrow-left my-3'} key={i} >
                  
                    <ul style={{listStyleType: 'none'}}>
                      <li style={{fontSize: '11px', fontWeight: '500', color: '#1e98b0'}}>{chat?.senderName}</li>
                      <li> {chat?.messageBody}</li>

                    </ul>
                    </div>
                   
                  ))
                }
               </div>
             

              

               <form onSubmit={submitFormData}>
                <br/>

               <Input
                type='textarea'
                placeholder='Type message'
                onChange={handleStringData}
                />
                
                <div className='d-flex justify-content-end mt-2'>
                <Button color='primary' type='submit'>Send</Button>

                </div>
               </form>


      
            </CardBody>
          </Card>
          </>
    );
};

export default MessageHistoryCardApplicationDetailsPage;