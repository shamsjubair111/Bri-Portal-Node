import React, { useEffect, useState } from "react";
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
import Axios from "axios";
import { rootUrl } from "../../../constants/constants";
import { useHistory, useParams } from "react-router";
import { useToasts } from "react-toast-notifications";
import ButtonForFunction from "../Components/ButtonForFunction";
import get from "../../../helpers/get";

const AddSubjectDeliveryPattern = () => {
  const [activetab, setActivetab] = useState("3");
  const [deliveryDD, setDeliveryDD] = useState([]);
  const [deliveryLabel, setDeliveryLabel] = useState("Select Delivery Pattern");
  const [deliveryValue, setDeliveryValue] = useState(0);
  const [deliveryError, setDeliveryError] = useState(false);

  const { id } = useParams();
  console.log(id, "SubIddddd");

  useEffect(() => {
    get("DeliveryPatternDD/index").then((res) => {
      console.log(res, "response");
      setDeliveryDD(res);
    });
  }, []);

  const deliveryMenu = deliveryDD.map((delivery) => ({
    label: delivery?.name,
    value: delivery?.id,
  }));

//   const financeMenu = financeDD.map((finance) => ({
//     label: finance?.name,
//     value: finance?.id,
//   }));

  const selectDelivery = (label, value) => {
    setDeliveryError(false);
    setDeliveryLabel(label);
    setDeliveryValue(value);
  };

  const history = useHistory();
  const { addToast } = useToasts();

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };

  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push("/addSubject");
    }
    if (tab == "2") {
      history.push("/addSubjectFee");
    }
  };

  const AuthStr = localStorage.getItem("token");

  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);

    for (var value of subdata) {
      console.log("values", value);
    }

    Axios.post(`${rootUrl}SubjectDeliveryPattern/Create`, subdata, {
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
          pathname: "/subjectList",
        });
      }
    });
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Subject Delivery Pattern</h3>
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
              <NavLink
                disabled
                active={activetab === "1"}
                onClick={() => toggle("1")}
              >
                Subject Information
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                disabled
                active={activetab === "2"}
                onClick={() => toggle("2")}
              >
                Subject Fee Information
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Delivery pattern
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="3">
              <Form onSubmit={handleSubmit} className="mt-5">
                <FormGroup row className="has-icon-left position-relative">
                  <Input
                    type="hidden"
                    id="subjectId"
                    name="subjectId"
                    value={id}
                  />
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Delivery Pattern <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={deliveryMenu}
                      value={{ label: deliveryLabel, value: deliveryValue }}
                      onChange={(opt) => selectDelivery(opt.label, opt.value)}
                      name="deliveryPatternId"
                      id="deliveryPatternId"
                    />

                    {deliveryError && (
                      <span className="text-danger">
                        You must select delivery pattern
                      </span>
                    )}
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

export default AddSubjectDeliveryPattern;
