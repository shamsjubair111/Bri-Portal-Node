import React, { useEffect, useState } from 'react';
import get from '../../../helpers/get';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, Label, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const EducationLevelList = () => {

    const history = useHistory();

    const [educationLevelData, setEducationLevelData] = useState([]);


    useEffect(()=>{

        get('EducationLevel/Index')
        .then(res => {

            console.log('Checking Educational Level Index', res);
            setEducationLevelData(res);
        })

    },[])


    // back to dashboard

    const backToDashboard = () => {

        history.push('/');
    }


    return (
        <div>

<Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Education Level List</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>
            
            
        </div>
    );
};

export default EducationLevelList;