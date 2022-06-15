import { FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    ButtonGroup,
  
    Button,
  
    Input,
  
    Col,
    Row,
    Table,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
  } from "reactstrap";
  import Select from "react-select";
  import { useHistory, useLocation } from "react-router";
import get from '../../../helpers/get';
import { useToasts } from "react-toast-notifications";
import { useParams } from 'react-router-dom';

import put from '../../../helpers/put';

const UpdateIntake = () => {

    const [month, setMonth] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [monthId, setMonthId] = useState('');
    const [yearId, setYearId] = useState('');
    const [intake, setIntake] = useState({});
    const [year, setYear] = useState([]);
    const history = useHistory();

    
    const {id} = useParams();
    const { addToast } = useToasts();

    useEffect(()=>{

      get(`Intake/Get/${id}`).then(res=> {
          setIntake(res);
          setSelectedMonth(res?.month?.name);
          setSelectedYear(res?.year?.name);
          setMonthId(res?.month?.id);
          setYearId(res?.year?.id);
      })
      .catch(); 
      },[id])


      useEffect(()=>{

        get('Month/GetAll').then(res=> {
          setMonth(res);
        })
        .catch();

        get('Year/GetAll').then(res=> {
            setYear(res);
          })
          .catch();
      },[])


      const monthMenu = month.map(monthOptions =>({label:monthOptions.name, value:monthOptions.id}));
      const yearMenu = year.map(yearOptions =>({label:yearOptions.name, value:yearOptions.id}));



    const handleCancel = () =>{
        history.push("/intake");
    }

    const selectMonthType = (label, value) => {
        setSelectedMonth(label);
        console.log('month',label,value);
        setMonthId(value); 
      }

      const selectYearType = (label, value) => {
        setSelectedYear(label);
        console.log('year',label, value);
        setYearId(value); 
      }

      const handleUpdate = (event) =>{
        event.preventDefault();
        const subData = new FormData(event.target);
        // for(let i of subData.values()){
        
        // }
        put(`Intake/Update`, subData).then(action => {
          console.log(action);
          addToast(action?.data?.message, {
            appearance: 'success',
            autoDismiss: true,
          })
        });
      }

    return (
        <div>
            <Card>
                <Card className="uapp-card-bg m-3 p-2">
                    <CardHeader className="page-header">
                        <h6 className="text-light my-auto">Update intake</h6>
                    </CardHeader>
                </Card>

                <Form onSubmit={handleUpdate} className='m-3'>

                   <input type='hidden'
                    name='id'
                    id='id'
                    value={id} />

                    <FormGroup row>
                        <Col md="4">
                            <span>
                               <span style={{color: '#1e98b0', fontSize: '14px'}}>Intake Month</span> <span className="text-danger">*</span>{" "}
                            </span>
                        </Col>

                        <Col md="4">
                        <Select
                            options={monthMenu}
                            value={{ label: selectedMonth, value: monthId }}
                            onChange={(opt) => selectMonthType(opt.label, opt.value)}
                            name="monthId"
                            id="monthId"
                        />
                        </Col>

                        <Col md="4">

                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-3'>
                        <Col md="4">
                            <span>
                               <span style={{color: '#1e98b0', fontSize: '14px'}}>Intake Year</span> <span className="text-danger">*</span>{" "}
                            </span>
                        </Col>

                        <Col md="4">
                        <Select
                            options={yearMenu}
                            value={{ label: selectedYear, value: yearId }}
                            onChange={(opt) => selectYearType(opt.label, opt.value)}
                            name="yearId"
                            id="yearId"
                        />

                        <FormGroup
                            className="has-icon-left position-relative mt-3"
                            style={{ display: "flex", justifyContent: "space-between" }}
                     >
                       <Button.Ripple
                         type="submit"
                         className="mr-1 mt-3 badge-primary mx-auto"
                       >
                         Save
                       </Button.Ripple>
                     </FormGroup>

                        </Col>

                        <Col md="4" className="d-flex justify-content-end align-items-end">
                            <div>
                                <Button onClick={handleCancel} className='btn btn-danger mt-md-3'>Cancel</Button>
                            </div>
                        </Col>
                    </FormGroup>

                    
                </Form>


            </Card>
        </div>
    );
};

export default UpdateIntake;