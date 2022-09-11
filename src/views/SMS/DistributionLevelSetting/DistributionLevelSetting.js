import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip, ButtonGroup } from 'reactstrap';
import get from '../../../helpers/get';
import DistributionLevelSettingForm from './DistributionLevelSettingForm';
import DistributionLevelSettingList from './DistributionLevelSettingList';

const DistributionLevelSetting = () => {

    const history = useHistory();
    const [success,setSuccess] = useState(false);
    const [distributionData, setDistributionData] = useState([]);
    const [name,setName] = useState('');
    const [value,setValue] = useState('');
    const [percent,setPercent] = useState('');

    const backToDashboard = () => {
        history.push('/');
    }

    useEffect(()=>{

        get(`DistributionLevelSetting/Index`)
        .then(res => {
            setDistributionData(res);
        })

    },[success])


    return (
        <div>

        <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Distribution Level Setting</h3>
                <div className="page-header-back-to-home">
                  <span className="text-light" onClick={backToDashboard}>
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card>

                <CardBody>
                <div className='row'>

                <div className='col-md-5'>
                    <DistributionLevelSettingForm 
                    success={success}
                    setSuccess={setSuccess}
                    />

                </div>

                <div className='col-md-7'>
                    <DistributionLevelSettingList 
                    success={success}
                    setSuccess={setSuccess}
                    distributionData={distributionData}
                    name={name}
                    setName={setName}
                    value={value}
                    setValue={setValue}
                    percent={percent}
                    setPercent={setPercent}
                    />

                </div>

                </div>

                </CardBody>

            </Card>
            
        </div>
    );
};

export default DistributionLevelSetting;