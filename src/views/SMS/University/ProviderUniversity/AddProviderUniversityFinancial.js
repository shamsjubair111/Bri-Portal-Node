import Axios from "axios";
import React, { createRef, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
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
import { rootUrl } from "../../../../constants/constants";
import { useToasts } from "react-toast-notifications";
import get from "../../../../helpers/get";
import put from "../../../../helpers/put";
import ButtonForFunction from "../../Components/ButtonForFunction";

const AddProviderUniversityFinancial = (props) => {
  const [activetab, setActivetab] = useState("3");
  const [submitData, setSubmitData] = useState(false);
  const [financialData, setFinancialData] = useState({});
  const [financialId, setFinancialId] = useState(undefined);

  const method = localStorage.getItem("editMethod");

  const { addToast } = useToasts();

  const history = useHistory();
  const myForm = createRef();

  const location = useLocation();

  let uniId;
  if (location.id) {
    uniId = location.id;
  } else {
    uniId = "";
  }

  useEffect(() => {
    // get(`FinancialInformation/GetByUniversity/${localStorage.getItem("editUniId")}`)
    get(
      `FinancialInformation/GetByUniversity/${localStorage.getItem("id")}`
    ).then((res) => {
      console.log("finanInfo", res?.id);
      setFinancialData(res);
      setFinancialId(res?.id);
    });
  }, []);

  const AuthStr = localStorage.getItem("token");

  // on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);
    // subdata.append('UniversityLogoFile',exactLogoFile);
    // subdata.append('CoverImageFile',exactCoverFile);

    //  watch form data values
    for (var value of subdata.values()) {
    }

    //  const config = {
    //     headers: {
    //       'content-type': 'multipart/form-data'
    //     }
    //   }

    if (financialId == undefined) {
      console.log("fin Id", financialId);
      Axios.post(`${rootUrl}FinancialInformation/Create`, subdata, {
        headers: {
          'authorization': AuthStr,
        },
      }).then((res) => {
        const uniID = res.data.result.universityId;

        if (res.status === 200 && res.data.isSuccess === true) {
          setSubmitData(true);
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          history.push({
            pathname: "/addProviderUniversityFeatures",
            id: uniID,
          });
        } else {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      });
    } else {
      console.log("financial id", financialId);
      put("FinancialInformation/Update", subdata).then((res) => {
        console.log("1st put response", res);
        if (res?.status == 200) {
          addToast(res?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });

          history.push({
            pathname: "/addProviderUniversityFeatures",
            id: localStorage.getItem("editUniId"),
          });
        }
      });
    }
  };
  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push("/addProviderUniversity");
    }
    if (tab == "2") {
      history.push("/addProviderUniversityCampus");
    }
    if (tab == "3") {
      history.push("/addProviderUniversityFinancial");
    }
    if (tab == "4") {
      history.push("/addProviderUniversityFeatures");
    }
    if (tab == "5") {
      history.push("/addProviderUniversityGallery");
    }
    if (tab == "6") {
      history.push("/addProviderUniversityApplicationDocument");
    }
    if (tab == "7") {
      history.push("/addProviderUniversityTemplateDocument");
    }
  };
  // redirect to dashboard
  const backToProviderDetails = () => {
    history.push(`/providerDetails/${localStorage.getItem("proProfileId")}`);
    localStorage.removeItem("proProfileId");
  };
  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">University Financial Information</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToProviderDetails} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Provider Details
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                University Information
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Campus Information
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Financial
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "4"} onClick={() => toggle("4")}>
                Features
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "5"} onClick={() => toggle("5")}>
                Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "6"} onClick={() => toggle("6")}>
                Application Document
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "7"} onClick={() => toggle("7")}>
                Template Document
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activetab}>
            <TabPane tabId="3">
              <Form ref={myForm} onSubmit={handleSubmit} className="mt-5">
                <div className="hedding-titel d-flex justify-content-between mb-4">
                  <div>
                    <h5>
                      {" "}
                      <b>Financial Information</b>{" "}
                    </h5>

                    <div className="bg-h"></div>
                  </div>
                  {/* <div className="text-right edit-style  p-3" >
                        <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                        </div> */}
                </div>

                {
                  //   method == 'put' ?
                  financialId !== undefined ? (
                    <>
                      <input
                        type="hidden"
                        name="id"
                        id="id"
                        value={financialId}
                      />
                    </>
                  ) : null
                }

                <FormGroup row className="has-icon-left position-relative">
                  <Input
                    type="hidden"
                    id="UniversityId"
                    name="UniversityId"
                    value={localStorage.getItem("id")}
                  />
                  {/* <Input type="hidden" id="UniversityId" name="UniversityId" value={localStorage.getItem("editUniId")} /> */}
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Avg. Tution Fee <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      min="0"
                      name="AvarageTutionFee"
                      id="AvarageTutionFee"
                      defaultValue={financialData?.avarageTutionFee}
                      placeholder="Avarage Tution Fee"
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
                      Avg. Living Cost <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      min="0"
                      name="AvarageLivingCost"
                      id="AvarageLivingCost"
                      defaultValue={financialData?.avarageLivingCost}
                      placeholder="Avarage Living Cost"
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
                      Avg. Application Fee{" "}
                      <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      min="0"
                      name="AvarageApplicationFee"
                      id="AvarageApplicationFee"
                      defaultValue={financialData?.avarageApplicationFee}
                      placeholder="Avarage Application Fee"
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
                      Est. Total Cost <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      min="0"
                      name="EstimatedTotalCost"
                      id="EstimatedTotalCost"
                      defaultValue={financialData?.estimatedTotalCost}
                      placeholder="Estimated Total Cost"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup
                  row
                  className="has-icon-left position-relative"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Col md="5">
                    <ButtonForFunction
                      type={"submit"}
                      className={"ms-lg-3 ms-sm-1 mt-3 badge-primary"}
                      name={"Save"}
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

export default AddProviderUniversityFinancial;