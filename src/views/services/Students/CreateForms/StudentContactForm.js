import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import Select from "react-select";
import get from "../../../../helpers/get";
import post from "../../../../helpers/post";
import { useToasts } from "react-toast-notifications";
import put from "../../../../helpers/put";
import ButtonForFunction from "../../Components/ButtonForFunction";
import ButtonLoader from "../../Components/ButtonLoader";

const StudentContactForm = () => {
  const { addToast } = useToasts();
  const [success, setSuccess] = useState(false);
  const { id } = useParams();

  const history = useHistory();
  const [activetab, setActivetab] = useState("3");
  const [country, setCountry] = useState([]);
  const [countryLabel, setCountryLabel] = useState("Country");
  const [countryValue, setCountryValue] = useState(0);

  const [addressType, setAddressType] = useState([]);

  const [addressTypeValue, setAddressTypeValue] = useState(0);
  const [oneData, setOneData] = useState({});

  const [countryError, setCountryError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [progress, setProgress] = useState(false);

  // useEffect(() => {
  //     get("CountryDD/index").then((res) => {

  //       setCountry(res);
  //     });

  //     get("AddressTypeDD/Index").then((res) => {

  //       setAddressType(res);
  //     });

  //   }, [success]);

  const backToStudentProfile = () => {
    history.push(`/studentProfile/${id}`);
  };

  const countryName = country?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));

  // select  Country
  const selectCountry = (label, value) => {
    setCountryError(false);
    setCountryLabel(label);
    setCountryValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subData = new FormData(event.target);

    if (countryValue == 0) {
      setCountryError(true);
    } else if (addressTypeValue == 0) {
      setAddressError(true);
    } else {
      setButtonStatus(true);
      setProgress(true);
      post("StudentContactInformation/Create", subData).then((res) => {
        setProgress(false);
        setButtonStatus(false);
        if (res?.status == 200 && res?.data?.isSuccess == true) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          history.push(`/studentEducation/${id}`);
        }
      });
    }
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Contact Information</h3>
          <div className="page-header-back-to-home">
            <span className="text-white">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> 28% Completed
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit} className="mt-5">
            <input type="hidden" name="studentId" id="studentId" value={id} />

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Address Type <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                {/* <Select
                      options={addressTypeName}
                      value={{
                        label: addressTypeLabel,
                        value: addressTypeValue,
                      }}
                      onChange={(opt) =>
                        selectAddressType(opt.label, opt.value)
                      }
                      name="addressTypeId"
                      id="addressTypeId"
                      required
                    /> */}

                {addressType?.map((tt) => (
                  <>
                    <input
                      type="radio"
                      name="addressTypeId"
                      id="addressTypeId"
                      value={tt?.id}
                      onClick={() => setAddressTypeValue(tt?.id)}
                    />

                    <label
                      className="mr-3"
                      style={{ fontWeight: 500, fontSize: "14px" }}
                    >
                      {tt?.name}
                    </label>
                  </>
                ))}

                {addressError && (
                  <span className="text-danger">Address type is required</span>
                )}
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Phone Number <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Input
                  type="text"
                  name="cellPhoneNumber"
                  id="cellPhoneNumber"
                  placeholder="Enter Phone Number"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  House No. <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Input
                  type="text"
                  name="houseNo"
                  id="houseNo"
                  placeholder="Enter house no."
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Address Line <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Input
                  type="text"
                  name="addressLine"
                  id="addressLine"
                  placeholder="Enter Address Line"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  City <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  State <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter State"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Zip Code <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  placeholder="Enter Zip Code"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Country <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="6">
                <Select
                  options={countryName}
                  value={{ label: countryLabel, value: countryValue }}
                  onChange={(opt) => selectCountry(opt.label, opt.value)}
                  name="countryId"
                  id="countryId"
                  required
                />

                {countryError && (
                  <span className="text-danger">Country is required</span>
                )}
              </Col>
            </FormGroup>

            <div className="row">
              <div className="col-md-8 d-flex justify-content-end">
                <ButtonForFunction
                  type={"submit"}
                  name={progress ? <ButtonLoader /> : "Save & Next"}
                  className={"mr-1 mt-3 badge-primary"}
                  disable={buttonStatus}
                />
              </div>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentContactForm;
