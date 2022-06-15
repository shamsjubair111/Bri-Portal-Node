import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router";
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
import { useToasts } from 'react-toast-notifications';
import get from '../../../helpers/get';
import put from '../../../helpers/put';

const EditSubjectFee = () => {

    const [activetab, setActivetab] = useState("2");
    const [localTutionFee, setLocalTutionFee] = useState("");
    const [intTutionFee, setIntTutionFee] = useState("");
    const [euTutionFee, setEuTutionFee] = useState("");
    const [sId, setSId] = useState("");
    const [id, setId] = useState("");

    const history = useHistory();
    const { addToast } = useToasts();

    // redirect to dashboard
    const backToDashboard = () => {
        history.push("/");
      };
    
    const {subId} = useParams();

    useEffect(()=>{
      get(`SubjectFeeStructure/GetBySubject/${subId}`)
      .then(res=>{
        console.log(res);
        setLocalTutionFee(res?.localTutionFee);
        setIntTutionFee(res?.internationalTutionFee);
        setEuTutionFee(res?.eU_TutionFee);
        setSId(res?.subjectId);
        setId(res?.id);
      })
    },[])

    // tab toggle
    const toggle = (tab) => {
     setActivetab(tab);
     if (tab == "1") {
        history.push("/editSubject");
       }
     if (tab == "2") {
       history.push("/editSubjectFee");
      }
    };

    const handleSubjectFeeUpdate = e =>{
      e.preventDefault();
      const subdata = new FormData(e.target);

      put("SubjectFeeStructure/Update", subdata)
      .then(res=>{
       if (res.status === 200 && res.data.isSuccess === true) {
           addToast(res?.data?.message, {
             appearance:'success',
             autoDismiss: true,
           });
           history.push({
             pathname: `/subjectList`,
           });
          }
       })
    }

    return (
        <div>
            <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Update Subject Information</h3>
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
               </Nav>

               <TabContent activeTab={activetab}>
            <TabPane tabId="2">
              <Form  onSubmit={handleSubjectFeeUpdate} className="mt-5">
              <input type='hidden'
                      name='id'
                      id='id'
                      value={id} />
                <FormGroup row className="has-icon-left position-relative">
                <input type='hidden'
                      name='subjectId'
                      id='subjectId'
                      value={sId} />
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
                      name="localTutionFee"
                      id="localTutionFee"
                      defaultValue={localTutionFee}
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
                      placeholder='Enter international tution fee '
                      required
                      name="internationalTutionFee"
                      id="internationalTutionFee"
                      defaultValue={intTutionFee}
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
                      name="eU_TutionFee"
                      id="eU_TutionFee"
                      placeholder="Enter EU tution fee"
                      defaultValue={euTutionFee}
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

export default EditSubjectFee;