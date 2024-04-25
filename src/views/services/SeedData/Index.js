import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import post from '../../../helpers/post';
import ButtonLoader from '../Components/ButtonLoader';

const Index = () => {

    const [buttonStatus,setButtonStatus] = useState(false);

    const history = useHistory();
    const {addToast} = useToasts();
    const [progress,setProgress] = useState(false);

    const backToDashboard = () => {
        history.push('/');
    }

    // Apply Seed Data

    const applySeedData = () =>{
        setProgress(true);
        setButtonStatus(true);
        post(`SeedData/Apply`)
        .then(res =>{
            setProgress(false);
            setButtonStatus(false);
            if(res?.status == 200){
            
                    addToast(res?.data,{
                        appearance: 'success',
                        autoDismiss: true
                    })
                }
                else{
                    addToast(res?.data,{
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
            
        })
    }

    return (
        <div>
            <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Apply Fixed Data</h3>
          <div className="page-header-back-to-home">
            <span className="text-white" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>

        <CardBody>

           <div>
           <ul> 
                <li> <span style={{fontWeight: 500}}> All fixed data will be applied and saved to the database.</span></li>

                <li><span style={{fontWeight: 500}}>If any data is added or changed partially, sytem will detect that data change and apply auto-update.</span></li>
            </ul>
           </div>

            <div className='text-center mt-4'>
            <Button color='primary' onClick={applySeedData} disabled={buttonStatus}>
                {
                    progress? 
                    <ButtonLoader/>
                    :
                    <>
                    <i className='fas fa-plus'></i>  Apply Fixed Data
                    </>
                }

            </Button>
            </div>

        </CardBody>

      </Card>
            
        </div>
    );
};

export default Index;