import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';

const ComissionGroup = () => {


    const history = useHistory();

    const backToDashboard = () => {
        history.push("/")
    }


    return (
        <div>

<Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Comission Group List</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className='uapp-employee-search'>
        <CardBody className="search-card-body">
        <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Name</th>
                    <th>Applications</th>
                    <th>Consultants</th>
                    <th>Action</th>
                 </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </Table>

        </CardBody>
      </Card>
            
        </div>
    );
};

export default ComissionGroup;