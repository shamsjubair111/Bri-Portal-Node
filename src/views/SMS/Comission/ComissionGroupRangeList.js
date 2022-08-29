import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import ButtonForFunction from '../Components/ButtonForFunction';
import { useToasts } from "react-toast-notifications";
import Select from "react-select";

const ComissionGroupRangeList = () => {


    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const { addToast } = useToasts();
    const [loading,setLoading] = useState(true);

    const backToDashboard = () => {
        history.push("/")
    }

    const closeModal = () => {
        setModalOpen(false);
       
      
      };

      const openModal = () => {
        setModalOpen(true);
      }

    const handleSubmit = (e) => {

        e.preventDefault();



    }

    return (
        <div>

        
<Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Commission Group Range List</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className='uapp-employee-search'>

        <CardHeader>
        <div className='d-flex jusity-content-end'>
            <ButtonForFunction className ={"btn btn-uapp-add "}
                 icon ={<i className="fas fa-plus"></i>}
                 func={openModal} 
                 name={' Add New'}
                         
                 ></ButtonForFunction>
            </div>

        </CardHeader>

        <CardBody className="search-card-body">

            {/* add commision group range list modal */}

            <div>

            <Modal
              isOpen={modalOpen}
              toggle={closeModal}
              className="uapp-modal"
            >
              <ModalHeader>Add Commission Group Range</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit}>
                  

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                        Commission Group <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                    <Select
                     
                      name="CommissionGroupId "
                      id="CommissionGroupId "
                    />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                        Price Range <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                    <Select
                     
                     name="PriceRangeName  "
                     id="PriceRangeName  "
                   />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                     Range From <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                    <Input
                    type='number'
                    name='RangeFrom'
                    id='RangeFrom'
                    placeholder='From'
                    required
                    />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                     Range To <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                    <Input
                    type='number'
                    name='RangeTo'
                    id='RangeTo'
                    placeholder='To'
                    required
                    />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                     Range To <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                    <Input
                    type='number'
                    name='CommissionAmount'
                    id='CommissionAmount'
                    placeholder='Comission Amount'
                    required
                    />
                    </Col>
                  </FormGroup>

                <div className='d-flex justify-content-end'>
                <FormGroup
                    className="has-icon-left position-relative"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    

               
                 <Button.Ripple
                      color="primary"
                    
                      className="mr-1 mt-3"
                   
                    >
                      Submit
                    </Button.Ripple>
          

                  </FormGroup>
                </div>

                </Form>
              </ModalBody>
            </Modal>


            </div>


        <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount</th>
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

export default ComissionGroupRangeList;