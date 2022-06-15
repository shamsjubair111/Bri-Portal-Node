
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select from "react-select";
import { useToasts } from 'react-toast-notifications';

import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { rootUrl } from '../../../constants/constants';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import ConsultantFile from './ConsultantFile';





const AddConsultant = () => {

    
    const [submitData, setSubmitData] = useState(false);
    const [nameTitle, setNameTitle] = useState([]);
    const [consParent, setConsParent] = useState([]);
    const [consType, setConsType] = useState([]);
    const [nameLabel, setNameLabel] = useState("Name title");
    const [nameValue, setNameValue] = useState(0);
    const [parentLabel, setParentLabel] = useState("Parent consultant");
    const [parentValue, setParentValue] = useState(0);
    const [typeLabel, setTypeLabel] = useState("Consultant type");
    const [typeValue, setTypeValue] = useState(0);

    const history = useHistory();
    const { addToast } = useToasts();
      

    useEffect(()=>{
      get("NameTittleDD/index").then(res=>{
        setNameTitle(res);
      });

      get("ConsultantDD/index").then(res=>{
        setConsParent(res);
      });

      get("ConsultantTypeDD/index").then(res=>{
        setConsType(res);
      })

    },[]);
    
    const nameTitleMenu = nameTitle?.map(titleOptions => ({label:titleOptions?.name, value:titleOptions?.id}));
    const consParentMenu = consParent?.map(consParentOptions => ({label:consParentOptions?.name, value:consParentOptions?.id}));
    const consTypeMenu = consType?.map(consTypeOptions => ({label:consTypeOptions?.name, value:consTypeOptions?.id}));
    
    const selectNameTitle = (label, value) => {
      setNameLabel(label);
      setNameValue(value);
    }

    const selectParentCons = (label, value) => {
      setParentLabel(label);
      setParentValue(value);
    }

    const selectConsType = (label, value) => {
      setTypeLabel(label);
      setTypeValue(value);
    }
      
  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);
    

    //  watch form data values
    // for (var value of subdata) {
    //   console.log(value);
    // }

    post("Consultant/Register", subdata).then(res=>{
      if (res.status === 200 && res.data.isSuccess === true) {
        addToast(res?.data?.message, {
          appearance:'success',
          autoDismiss: true,
        });
        history.push({
          pathname: "/consGeneralInformation",
        });
      }
    })

  };


    const backToDashboard = () =>{
       
        history.push('/');
    }

    return (
        <div>
             <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Consultant Registration</h3>
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
              <Form  onSubmit={handleSubmit} className="mt-5">

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Consultant type <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={consTypeMenu}
                      value={{ label: typeLabel, value: typeValue }}
                      onChange={(opt) => selectConsType(opt.label, opt.value)}
                      name="consultantTypeId"
                      id="consultantTypeId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Parent consultant <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={consParentMenu}
                      value={{ label: parentLabel, value: parentValue }}
                      onChange={(opt) => selectParentCons(opt.label, opt.value)}
                      name="parentConsultantId"
                      id="parentConsultantId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Name title <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                    options={nameTitleMenu}
                    value={{ label: nameLabel, value: nameValue }}
                    onChange={(opt) => selectNameTitle(opt.label, opt.value)}
                    name="nameTittleId"
                    id="nameTittleId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      First name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>


              
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Last name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Email <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Phone number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter phone number"
                      required
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup>
                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button.Ripple
                    type="submit"
                    className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple>
                </FormGroup>
              </Form>
        </CardBody>
      </Card>
            
        </div>
    );
};

export default AddConsultant;