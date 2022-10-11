import React, { useEffect, useState } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
    Row,
    InputGroup,
    Table,
    TabContent,
    TabPane,
    Nav,
    NavLink,
    NavItem,
    UncontrolledTooltip,
    ButtonGroup,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
  } from "reactstrap";
import { useHistory, useParams } from 'react-router-dom';
import get from '../../../helpers/get';
import Select from 'react-select';
import CustomButtonRipple from '../Components/CustomButtonRipple';
import SpanButton from '../Components/SpanButton';
import put from '../../../helpers/put';
import { useToasts } from 'react-toast-notifications';

const Details = () => {

    const {id} = useParams();
    const [data,setData] = useState({});
    const [transaction,setTransaction] = useState([]);
    const[transactionLabel,setTransactionLabel] = useState('Select');
    const[transactionValue,setTransactionValue] = useState(0);
    const [openModal,setOpenModal] = useState(false);
    const [success,setSuccess] = useState(false);
    const [buttonStatus,setButtonStatus] = useState(false);

    const history = useHistory();
    const {addToast} = useToasts();


    useEffect(()=>{

        get(`ApplicationTransaction/Details/${id}`)
        .then(res => {
           console.log(res,'string');
            setData(res);
            setTransactionLabel(res?.transactionStatus);
            setTransactionValue(res?.transactionStatusId);
        })

        get(`TransactionStatusDD/Index`)
        .then( res => 
            setTransaction(res)
        )

    },[success])

    const backToDashboard = () => {
        history.push('/applicationTransaction');
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    const transactionOptions = transaction?.map(tr => ({
        label: tr?.name,
        value: tr?.id
    }))

    const selectTransaction = (label,value) => {
        setTransactionLabel(label);
        setTransactionValue(value);
    }

    const updateTransactionStatus = (event) => {

        event.preventDefault();

        const subData = new FormData(event.target);
        setButtonStatus(true);
        put(`ApplicationTransaction/UpdateStatus`,subData)
        .then(res => {
                setButtonStatus(false);
                if(res?.status ==200){
                    if(res?.data?.isSuccess == true){
                        addToast(res?.data?.message,{
                            appearance:'success',
                            autoDismiss: true
                        })
                        setSuccess(!success);
                        setOpenModal(false);
                    }

                    else{
                            addToast(res?.data?.message,{
                            appearance:'error',
                            autoDismiss: true
                        })
                    }
                }
        })
    }


    return (
        <div>
             <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Application Transaction Details</h3>
          <div className="page-header-back-to-home">
            <span className="text-white" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Application Transaction List
            </span>
          </div>
        </CardHeader>
      </Card>

      <div className='row'>

        <div className='col-md-7'>

            <Card>

                <CardBody>

                <div className="hedding-titel d-flex justify-content-between">
                      <div>
                        <h5>
                          {" "}
                          <b>Basic Information</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                    <Table className="table-bordered mt-4">
                      <tbody>
                      

                        <tr>
                          <td width="40%">
                            <b>Student:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.student}</>
                             
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td width="40%">
                            <b>University:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.unviersity}</>
                             
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Subject:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.subject}</>
                             
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Consultant:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.consultant}</>
                             
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Registration Status:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.registrationStatus}</>
                             
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Transaction Status:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.transactionStatus}</>
                             
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Account Intake:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.accountIntake}</>
                             
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="40%">
                            <b>Amount:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>&#163; {' '}{data?.amount}</>
                             
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                </CardBody>

            </Card>

        </div>

        <div className='col-md-5'>
            
            <Card>

                <CardBody>

                <div className="hedding-titel d-flex justify-content-between">
                      <div>
                        <h5>
                          {" "}
                          <b>Payment Authorization</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                     
                    </div>
                    <Table className="table-bordered mt-4">
                      <tbody>
                      

                        <tr>
                          <td width="40%">
                            <b>Transaction Status:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>
                                 
                                    {data?.transactionStatus}

                                 </>

                                 <div className="d-flex justify-content-between">
                             

                             {
                              (data?.transactionStatusId !== 2) &&
                              <SpanButton
                              icon={
                                <i
                                  style={{ cursor: "pointer" }}
                                  className="fas fa-pencil-alt pencil-style"
                                ></i>
                              }
                              func={()=> setOpenModal(true)}
                              
                              permission={6}
                              
                            />
                             }

                             {
                              (data?.transactionStatusId !==2) &&

                              <Modal
                              isOpen={openModal}
                              toggle={closeModal}
                              className="uapp-modal2"
                            >
                              <ModalHeader>
                                Update Transaction Status
                              </ModalHeader>
                              <ModalBody>
                                <Form onSubmit={updateTransactionStatus}>
                                  <input
                                    type="hidden"
                                    name="applicationTransactionId"
                                    id="applicationTransactionId"
                                    value={data?.id}
                                    
                                  />

                                  <FormGroup
                                    row
                                    className="has-icon-left position-relative"
                                  >
                                    <Col md="4">
                                      <span>
                                        Transaction Status{" "}
                                        <span className="text-danger">*</span>{" "}
                                      </span>
                                    </Col>
                                    <Col md="8">
                                      <Select
                                       
                                        options={transactionOptions}
                                        value={{
                                          label: transactionLabel,
                                          value: transactionValue,
                                        }}
                                        onChange={(opt) =>
                                          selectTransaction(opt.label, opt.value)
                                        }
                                        name="transactionStatusId"
                                        id="transactionStatusId"
                                      />
                                     
                                    </Col>
                                  </FormGroup>

                                  
                                  <FormGroup
                                    className="has-icon-left position-relative"
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Button
                                      color="danger"
                                      className="mr-1 mt-3"
                                      onClick={closeModal}
                                    >
                                      Close
                                    </Button>

                                    <CustomButtonRipple
                                     
                                      color={"primary"}
                                      type={"submit"}
                                      className={"mr-1 mt-3"}
                                      name={"Submit"}
                                      permission={6}
                                      isDisabled={buttonStatus}
                                    />

                                    {/* }  */}
                                  </FormGroup>
                                </Form>
                              </ModalBody>
                            </Modal>
                             }

                            </div>
                             
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td width="40%">
                            <b>Date:</b>
                          </td>

                          <td width="60%">
                            <div className="d-flex justify-content-between">
                            
                            
                                <>{data?.transactionDate}</>
                             
                            </div>
                          </td>
                        </tr>
                      
                       
                       
                    
                        
                        
                      </tbody>
                    </Table>

                </CardBody>

            </Card>

            <Card>

                <CardBody>

                <div className="hedding-titel d-flex justify-content-between">
                      <div>
                        <h5>
                          {" "}
                          <b>University Installment</b>{" "}
                        </h5>

                        <div className="bg-h"></div>
                      </div>
                      {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}
                    </div>

                </CardBody>

            </Card>

        </div>

      </div>
            
        </div>
    );
};

export default Details;