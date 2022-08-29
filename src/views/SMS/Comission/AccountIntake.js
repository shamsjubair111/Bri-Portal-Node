import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import ButtonForFunction from '../Components/ButtonForFunction';
import { useToasts } from "react-toast-notifications";
import Select from "react-select";
import get from '../../../helpers/get';
import loadingImages from '../../../assets/img/data.svg'

const AccountIntake = () => {


    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const { addToast } = useToasts();
    const [loading,setLoading] = useState(true);
    const [month,setMonth] = useState([]);
    const [year,setYear] = useState([]);

    const [sMonthLabel, setSMonthLabel] = useState('Select');
    const [sMonthValue,setSMonthValue] = useState(0);

    const [eMonthLabel, setEMonthLabel] = useState('Select');
    const [eMonthValue,setEMonthValue] = useState(0);

    const [sYearLabel,setSYearLabel] = useState('Select');
    const [sYearValue,setSYearValue] = useState(0);
    
    const [eYearLabel,setEYearLabel] = useState('Select');
    const [eYearValue,setEYearValue] = useState(0);

    const [startMError,setStartMError] = useState('');
    const [endMError,setEndMError] = useState('');

    const [startYError,setStartYError] = useState('');
    const [endYError,setEndYError] = useState('');

    useEffect(()=>{

        get(`MonthDD/Index`)
        .then(res => {
            setMonth(res);
            setLoading(false);

        })

        get(`YearDD/Index`)
        .then(res => {
            setYear(res);
            setLoading(false);

        })


    },[])

    const monthOptions = month?.map((mon)=> (
        {
            label: mon?.name,
            value: mon?.id
        }
    ))

    const yearOptions = year?.map((y)=> (
        {
            label: y?.name,
            value: y?.id
        }
    ))

    const selectEndMonth = (label,value) => {

        setEMonthLabel(label);
        setEMonthValue(value);

    }

    const selectStartMonth = (label,value) => {

        setSMonthLabel(label);
        setSMonthValue(value);

    }

    const selectStartYear = (label,value) => {

        setSYearLabel(label);
        setSYearValue(value);

    }

    const selectEndYear = (label,value) => {

        setEYearLabel(label);
        setEYearValue(value);

    }

    const backToDashboard = () => {
        history.push("/")
    }

    const closeModal = () => {
        setModalOpen(false);
       
      
      };

      const openModal = () => {
        setModalOpen(true);
      }

      const handleSubmit = (event) => {

        event.preventDefault();

        const subData = new FormData(event.target); 

        if(sMonthValue ==0){
            setStartMError('Start Month Must Be Selected')
        }
        else if(eMonthValue ==0){
            setEndMError('End Month Must Be Selected')
        }
        else if(sYearValue == 0){
            setStartYError('Start Year Must Be Selected')
        }
        else if(eYearValue == 0){
            setEndYError('End Year Must Be Selected')
        }



    }


    return (
        <div>

            {
                loading ?
                <div className='text-center'>
                    <img src={loadingImages} />
                    
                </div>

                :

                <>

                <Card className="uapp-card-bg">

                <CardHeader className="page-header">
                <h3 className="text-light">Account Intake List</h3>
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

                    {/* account intake form modal */}
                    <div>

                    <Modal
                    isOpen={modalOpen}
                    toggle={closeModal}
                    className="uapp-modal"
                    >
                    <ModalHeader>Add Account Intake</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                        

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Name <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input
                            type='number'
                            name='IntakeName'
                            id='IntakeName'
                            placeholder='Intake Name'
                            required
                            />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                            Start Date <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input
                            type='date'
                            name='StartDate'
                            id='StartDate'
                        
                        
                            />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                            End Date <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Input
                            type='date'
                            name='EndDate'
                            id='EndDate'
                        
                        
                            />
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Start Month <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                            options={monthOptions}
                            value={{ label: sMonthLabel, value: sMonthValue }}
                            onChange={(opt) => selectStartMonth(opt.label, opt.value)}
                            
                            name="StartMonthId"
                            id="StartMonthId"
                        />
                          <span className='text-danger'>{startMError}</span>
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                Start Year <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                            options={yearOptions}
                            value={{ label: sYearLabel, value: sYearValue }}
                            onChange={(opt) => selectStartYear(opt.label, opt.value)}
                            name="StartYearId"
                            id="StartYearId"
                        />
                            </Col>
                            <span className='text-danger'>{startYError}</span>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                End Month <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                            options={monthOptions}
                            value={{ label: eMonthLabel, value: eMonthValue }}
                            onChange={(opt) => selectEndMonth(opt.label, opt.value)}
                            name="EndMonthId"
                            id="EndMonthId"
                        />
                          <span className='text-danger'>{endMError}</span>
                            </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                            <Col md="4">
                            <span>
                                End Year <span className="text-danger">*</span>{" "}
                            </span>
                            </Col>
                            <Col md="8">
                            <Select
                            options={yearOptions}
                            value={{ label: eYearLabel, value: eYearValue }}
                            onChange={(opt) => selectEndYear(opt.label, opt.value)}
                            name="EndYearId"
                            id="EndYearId"
                        />
                          <span className='text-danger'>{endYError}</span>
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
                            <th>Application</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        </tbody>
                    </Table>

                </CardBody>
                </Card>

                </>
            }

       
            
        </div>
    );
};

export default AccountIntake;