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
  import { Link } from "react-router-dom";
  import Select from "react-select";
  import { useHistory, useLocation } from "react-router";
  import get from '../../../helpers/get';
  import post from '../../../helpers/post';
  import { useToasts } from "react-toast-notifications";

const AddNewIntakes = () => {
    const [month, setMonth] = useState([]);
    const [year, setYear] = useState([]);
    const history = useHistory();
    const { addToast } = useToasts();

    const [monthTypeLabel, setMonthTypeLabel]= useState('Select Month');
    const [monthTypeValue, setMonthTypeValue] = useState(0);

    const [yearTypeLabel, setYearTypeLabel]= useState('Select Year');
    const [yearTypeValue, setYearTypeValue] = useState(0);

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
        setMonthTypeLabel(label);
        setMonthTypeValue(value); 
      }

      const selectYearType = (label, value) => {
        setYearTypeLabel(label);
        setYearTypeValue(value); 
      }

      const handleSubmit = (event) =>{
          event.preventDefault();
          const subData = new FormData(event.target);
        //   for (var value of subData.values()) {
        //       console.log('valueeee',value);
        //     }

        post(`Intake/Create`, subData).then(action => {
            addToast(action, {
                appearance: 'success',
                autoDismiss: true,
              })
              history.push({
                pathname: "/intake",
              });
          });
      }

       // redirect to intakeList
       const backToIntakeList = () => {
        history.push("/intake");
        };

    return (
        <div>
            <Card>
                <Card className="uapp-card-bg m-3 p-2">
                    <CardHeader className="page-header">
                        <h3 className="text-light my-auto">Add intake</h3>
                        <div className="page-header-back-to-home">
                          <span onClick={backToIntakeList} className="text-light">
                            {" "}
                            <i className="fas fa-arrow-circle-left"></i> Back to Intake
                          </span>
                        </div>
                    </CardHeader>
                </Card>

                <Form onSubmit={handleSubmit} className='m-3'>
                    <FormGroup row>
                        <Col md="4">
                            <span>
                               <span style={{color: '#1e98b0', fontSize: '14px'}}>Intake Month</span> <span className="text-danger">*</span>{" "}
                            </span>
                        </Col>

                        <Col md="4">
                        <Select
                            options={monthMenu}
                            value={{ label: monthTypeLabel, value: monthTypeValue }}
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
                            value={{ label: yearTypeLabel, value: yearTypeValue }}
                            onChange={(opt) => selectYearType(opt.label, opt.value)}
                            name="yearId"
                            id="yearId"
                        />

                        <FormGroup
                            className="has-icon-left position-relative mt-3"
                            style={{ display: "flex", justifyContent: "space-between" }}
                     >
                       {/* <Link to="/intake"> */}
                          <Button.Ripple
                            type="submit"
                            className="mr-1 mt-3 badge-primary mx-auto"
                          >
                            Submit
                          </Button.Ripple>
                       {/* </Link> */}

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

export default AddNewIntakes;