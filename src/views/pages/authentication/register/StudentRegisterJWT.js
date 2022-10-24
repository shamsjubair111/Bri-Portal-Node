import React, { useEffect, useState } from "react";
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
import Checkbox from "../../../../components/core/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import { connect } from "react-redux";
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions";
import { history } from "../../../../history";
import axios from "axios";
import { rootUrl } from "../../../ReusableFunction/Api/ApiFunc";
import { store } from "react-notifications-component";
import { Link } from "react-router-dom";
import Select from "react-select";
import get from "../../../../helpers/get";

const StudentRegisterJWT = () => {
  const [students, setStudents] = useState([]);

  const [studentLabel, setStudentLabel] = useState("Student Type");
  const [studentValue, setStudentValue] = useState(0);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    get("StudentTypeDD/Index").then((res) => {
      setStudents(res);
    });
  }, []);

  const studentOptions = students?.map((st) => ({
    label: st?.name,
    value: st?.id,
  }));

  const selectStudent = (label, value) => {
    setStudentLabel(label);
    setStudentValue(value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  const handleDisability = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  const handleTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <React.Fragment>
      <CardBody className="pt-1">
        <Form onSubmit={handleRegister}>
          <input
            type="hidden"
            name="consultantId"
            id="consultantId"
            value="1"
          />

         
          

            <FormGroup row className="has-icon-left position-relative">
              <Col md="3">
                <span style={{ fontWeight: "500" }}>Student Type</span>
              </Col>
              <Col md="6">
                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="isHaveDisability"
                    onChange={handleDisability}
                    name="isHaveDisability"
                    value="1"
                    checked={type == "1"}
                  />
                  <Label
                    className="form-check-label"
                    check
                    htmlFor="isHaveDisability"
                  >
                    Home
                  </Label>
                </FormGroup>

                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="isHaveDisability"
                    onChange={handleDisability}
                    name="isHaveDisability"
                    value="2"
                    checked={type == "2"}
                  />
                  <Label
                    className="form-check-label"
                    check
                    htmlFor="isHaveDisability"
                  >
                    EU/EEA
                  </Label>
                </FormGroup>

                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="isHaveDisability"
                    onChange={handleDisability}
                    name="isHaveDisability"
                    value="3"
                    checked={type == "3"}
                  />
                  <Label
                    className="form-check-label"
                    check
                    htmlFor="isHaveDisability"
                  >
                    International
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="3">
                <span style={{ fontWeight: "500" }}>Title</span>
              </Col>
              <Col md="6">
                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="title"
                    onChange={handleTitle}
                    name="title"
                    value="1"
                    checked={title == "1"}
                  />
                  <Label className="form-check-label" check htmlFor="title">
                    Mr.
                  </Label>
                </FormGroup>

                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="title"
                    onChange={handleTitle}
                    name="title"
                    value="2"
                    checked={title == "2"}
                  />
                  <Label className="form-check-label" check htmlFor="title">
                    Miss
                  </Label>
                </FormGroup>

                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="title"
                    onChange={handleTitle}
                    name="title"
                    value="3"
                    checked={title == "3"}
                  />
                  <Label className="form-check-label" check htmlFor="title">
                    Ms.
                  </Label>
                </FormGroup>

                <FormGroup check inline>
                  <Input
                    className="form-check-input"
                    type="radio"
                    id="title"
                    onChange={handleTitle}
                    name="title"
                    value="4"
                    checked={title == "4"}
                  />
                  <Label className="form-check-label" check htmlFor="title">
                    Mrs.
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
      

          <div className="row gx-0">
            <div className="col-md-6">
            <FormGroup className="form-label-group position-relative has-icon-left" style={{ marginTop: "20px" }}>
              <Input
                type="text"
                placeholder="First Name"
                // value={this.state.email}
                // onChange={e => this.setState({ email: e.target.value, emailerror: '' })}
                style={{ height: "calc(1.5em + 1.3rem + 2px)" }}
                required
              />
              <div className="form-control-position">

              </div>
              <Label style={{ fontSize: "18px", fontWeight: '600', top: "-35px" }} >First Name</Label>
              
            </FormGroup>
            </div>

            <div className="col-md-6">
            <FormGroup className="form-label-group position-relative has-icon-left" style={{ marginTop: "20px" }}>
              <Input
                type="text"
                placeholder="Last Name"
                // value={this.state.email}
                // onChange={e => this.setState({ email: e.target.value, emailerror: '' })}
                style={{ height: "calc(1.5em + 1.3rem + 2px)" }}
                required
              />
              <div className="form-control-position">

              </div>
              <Label style={{ fontSize: "18px", fontWeight: '600', top: "-35px" }} >Last Name</Label>
              
            </FormGroup>
            </div>
          </div>

          <FormGroup className="form-label-group position-relative has-icon-left" style={{ marginTop: "20px" }}>
              <Input
                type="email"
                placeholder="Email"
                // value={this.state.email}
                // onChange={e => this.setState({ email: e.target.value, emailerror: '' })}
                style={{ height: "calc(1.5em + 1.3rem + 2px)" }}
                required
              />
              <div className="form-control-position">

              </div>
              <Label style={{ fontSize: "18px", fontWeight: '600', top: "-35px" }} >Email</Label>

           
              
            </FormGroup>

            <div className="row gx-0">
            <div className="col-md-6">
            <FormGroup className="form-label-group position-relative has-icon-left" style={{ marginTop: "20px" }}>
              <Input
                type="password"
                placeholder="Password"
                // value={this.state.email}
                // onChange={e => this.setState({ email: e.target.value, emailerror: '' })}
                style={{ height: "calc(1.5em + 1.3rem + 2px)" }}
                required
              />
              <div className="form-control-position">

              </div>
              <Label style={{ fontSize: "18px", fontWeight: '600', top: "-35px" }} >Password</Label>
              
            </FormGroup>
            </div>

            <div className="col-md-6">
            <FormGroup className="form-label-group position-relative has-icon-left" style={{ marginTop: "20px" }}>
              <Input
                type="password"
                placeholder="Confirm Password"
                // value={this.state.email}
                // onChange={e => this.setState({ email: e.target.value, emailerror: '' })}
                style={{ height: "calc(1.5em + 1.3rem + 2px)" }}
                required
              />
              <div className="form-control-position">

              </div>
              <Label style={{ fontSize: "18px", fontWeight: '600', top: "-35px" }} >Confirm Password</Label>
              
            </FormGroup>
            </div>
          </div>
       

          <div className="d-flex justify-content-between">
            <div>
              <button className="login-btn-style"  type="submit">
                Register
              </button>

              
            </div>

            <Link to="/" style={{ textDecoration: 'none', color: 'rgb(30, 152, 176)', fontSize: '18px', fontWeight: '500' }}>I am already registered</Link>


          </div>
        </Form>

         <br/>
        <div className="d-flex justify-content-between">
            <div className="" style={{color: '#707070', fontSize: '13px', fontWeight: '400'}}>
              Privacy policy
            </div>

            <div className="" style={{color: '#1E98B0', fontSize: '13px', fontWeight: '400'}}>
            UAPP © SMS Higher Education Group.
            </div>
          </div>
      </CardBody>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    values: state.auth.register,
  };
};
export default connect(mapStateToProps, { signupWithJWT })(StudentRegisterJWT);
