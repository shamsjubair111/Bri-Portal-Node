import React, { useState } from 'react';
import Select from "react-select";
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
  NavItem,
  NavLink,
} from "reactstrap";
import Axios from 'axios';
import { rootUrl } from "../../../constants/constants";
import { useHistory } from "react-router";
import { useToasts } from 'react-toast-notifications';
import ButtonForFunction from '../Components/ButtonForFunction';


const AddSubjectFee = () => {

    const [activetab, setActivetab] = useState('2');


    const history = useHistory();
    const { addToast } = useToasts();

    // redirect to dashboard
    const backToDashboard = () => {
      history.push("/");
    };

    // tab toggle
    const toggle = (tab) => {
      setActivetab(tab);
      if (tab == '1') {
        history.push('/addSubject')
      }
      if (tab == "2") {
        history.push("/addSubjectFee");
      }
      if(tab == '3'){
        history.push(`/addSubjectDeliveryPattern/${localStorage.getItem("subId")}`)
      }
  };

  const AuthStr = localStorage.getItem("token");

  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);

    for (var value of subdata.values()) { 
      console.log("values",value);
     }


    Axios.post(`${rootUrl}SubjectFeeStructure/Create`, subdata, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': AuthStr,
      },
    }).then((res) => {

      if (res.status === 200 && res.data.isSuccess === true) {
        addToast(res?.data?.message, {
          appearance:'success',
          autoDismiss: true,
        });
        history.push({
          pathname: `/addSubjectDeliveryPattern/${localStorage.getItem("subId")}`,
        });
      }
    });
  };

    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Add Subject Fee Information</h3>
                <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-light">
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink disabled active={activetab === "1"} onClick={() => toggle("1")}>
                Subject Information
              </NavLink>
            </NavItem>

            <NavItem>
                <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                  Subject Fee Information
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink disabled active={activetab === "3"} onClick={() => toggle("3")}>
                  Delivery pattern
                </NavLink>
            </NavItem>

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="2">
              <Form  onSubmit={handleSubmit} className="mt-5">
                <FormGroup row className="has-icon-left position-relative">
                  <Input type="hidden" id="subjectId" name="subjectId" value={localStorage.getItem("subId")} />
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Local Tution Fee <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      min="0"
                      name="localTutionFee"
                      id="localTutionFee"
                      placeholder="Tution Fee"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      International Tution Fee <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type='number'
                      min="0"
                      placeholder='Enter international tution fee '
                      required
                      name="internationalTutionFee"
                      id="internationalTutionFee"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      EU Tution Fee <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      min="0"
                      name="eU_TutionFee"
                      id="eU_TutionFee"
                      placeholder="Enter EU tution fee"
                      required
                    />
                  </Col>
                </FormGroup>

                

                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup>
                <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  {/* <Button.Ripple
                    type="submit"
                    className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple> */}
                  <Col md="5">
                  <ButtonForFunction
                    type={"submit"}
                    className={"mr-1 mt-3 badge-primary"}    
                    name={"Submit"}
                    permission={6}
                  />
                  </Col>
                </FormGroup>
              </Form>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
        </div>
    );
};

export default AddSubjectFee;