import React, { useEffect, useState } from 'react';
import { connect, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useLocation } from 'react-router-dom';
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
import { rootUrl } from "../../../constants/constants";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import ConsultantFile from './ConsultantFile';
import { useToasts } from 'react-toast-notifications';

const BankDetails = () => {

    const [activetab, setActivetab] = useState("2");
    const [submitData, setSubmitData] = useState(false);

    const history = useHistory();
    const { addToast } = useToasts();

    const {id} = useParams();

    // tab toggle
    const toggle = (tab) => {
      setActivetab(tab);
      if (tab == "1") {
        history.push(`/addConsGeneralInformation/${id}`);
      }
      if (tab == "2") {
        history.push(`/addBankDetails/${id}`);
      }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const subdata = new FormData(e.target);
        for (var value of subdata) {
            console.log(value);
          }

       post(`BankDetails/Create`, subdata).then((res) => {
      
         console.log(res);
      
         // localStorage.setItem("id",res.data.result.id);
         // const uniID = res.data.result.id;
      
         if (res.status === 200 && res.data.isSuccess === true) {
           setSubmitData(true);
           addToast(res?.data?.message, {
             appearance:'success',
             autoDismiss: true,
           });
         //   history.push({
         //     pathname: `/addUniversityCampus/${id}`,
         //   });
         }
       });
        
    }

     // redirect to dashboard
     const backToDashboard = () => {
        history.push("/");
      };

    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Consultant Information</h3>
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
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                General Information
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Bank Details
              </NavLink>
            </NavItem>

            {/* <NavItem>
              {submitData ? (
                <NavLink active={activetab === "2"} onClick={() => toggle("3")}>
                  
                </NavLink>
              ) : (
                <NavLink disabled active={activetab === "2"}>
                  
                </NavLink>
              )}
            </NavItem> */}

          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="2">
              <Form  onSubmit={handleSubmit} className="mt-5">

              <input 
                type='hidden'
                name='consultantId'
                id='consultantId'
                value={id} 
              />

              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Account Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="accountName"
                      id="accountName"
                      placeholder="Account Name"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Account Number <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="accountNumber"
                      id="accountNumber"
                      placeholder="Account Number"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Sort Code <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="sortCode"
                      id="sortCode"
                      placeholder="Sort Code"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Bank Name <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="bankName"
                      id="bankName"
                      placeholder="Bank Name"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      BIC
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="BIC"
                      id="BIC"
                      placeholder="BIC"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Swift
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="swift"
                      id="swift"
                      placeholder="Swift"
                      required
                    />
                  </Col>
                </FormGroup>

              {/* <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Consultant Type <span className="text-danger">*</span>{" "}
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
                  </Col>
                </FormGroup> */}

                {/* <FormGroup
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></FormGroup> */}
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
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
        </div>
    );
};

export default BankDetails;