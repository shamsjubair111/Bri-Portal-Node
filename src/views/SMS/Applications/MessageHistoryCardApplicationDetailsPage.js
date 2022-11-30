import React from 'react';
import { Card, CardBody } from 'reactstrap';

const MessageHistoryCardApplicationDetailsPage = ({applicationId,studentMail,consultantMail,admissionManagerMail}) => {

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