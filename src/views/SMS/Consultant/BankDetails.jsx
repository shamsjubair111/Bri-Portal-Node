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
    const [bankDetails, setBankDetails] = useState([]);
    const [submitData, setSubmitData] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showForm,setShowForm]=useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [deleteModal, setDeleteModal] = useState(false);

    const history = useHistory();
    const { addToast } = useToasts();

    const {id} = useParams();

    useEffect(()=>{
        get(`BankDetails/Index/${id}`).then(res=>{
            console.log(res);
            setBankDetails(res);
            if(res.length>0){
                setShowForm(true);
              }
              else{
                setShowForm(false);
                setSelectedId(0);
              }
        })
    },[success, id]);

    // tab toggle
    const toggle = (tab) => {
      setActivetab(tab);
      if (tab === "1") {
        history.push(`/addConsGeneralInformation/${id}`);
      }
      if (tab === "2") {
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

         setSuccess(!success)

         }
       });
        
    }

    const handleUpdate = e => {
        e.preventDefault();
    }

    // redirect to dashboard
    const backToDashboard = () => {
       history.push("/");
    };

    // redirect to Next Page
    const onNextPage = () => {
    //   const uniID = universityId;
    //   history.push({
    //     pathname: '/addUniversityFinancial',
    //     id: uniID
    //   })
    };

    const toggleDanger = (p) => {
        localStorage.setItem('bankDetailId', p?.id)
        localStorage.setItem('bankDetailName', p?.name)
        setDeleteModal(true)
      }


    const onShow=()=>{
      setShowForm(false);
    
    }
    
    const cancel=()=>{
      setShowForm(true);
      setSelectedId(0)
    }

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

          {
              bankDetails?.map((detail, i) => <div key={detail?.id} style={{ textAlign: "left" }}>
                <Card className="CampusCard">
                  <CardBody className="shadow">

                    <div className="CampusCardAction">
                     <div className=""> 
                        <button type="button" className="btn btn-outline-info" onClick={() => handleUpdate(detail?.id)}> <i className="fas fa-edit"></i> </button>
                     </div>

                     <div className=""> 
                        <button type="button" className="btn btn-outline-danger" onClick={() => toggleDanger(detail)} ><i className="fas fa-trash-alt"></i></button>
                     </div>
                    </div>

                  <Row>
                    <Col md="6">
                        <h5> Bank Name: {detail?.bankName} </h5>
                        <p> Account Name: {detail?.accountName} </p>
                    </Col>

                    <Col md="6">
                        <p> Account Number:  {detail?.accountNumber}</p>
                        <p> BIC: {detail?.bic}</p>
                        <p> Sort Code: {detail?.sortCode}</p>
                        <p> Swift: {detail?.swift}</p>
                    </Col>
                  </Row>           
              
                  </CardBody>

                  {/* <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                    <ModalBody>
                      <p>Are You Sure to Delete this {localStorage.getItem('UniversityCampusName')} ? Once Deleted it can't be Undone!</p>
                    </ModalBody>

                    <ModalFooter>
                      <Button onClick={() => handleDeletePermission(localStorage.getItem('UniversityCampusId'))} color="danger">YES</Button>
                      <Button onClick={() => setDeleteModal(false)}>NO</Button>
                    </ModalFooter>
                 </Modal> */}

                </Card>
              </div>)

            }

            <TabPane tabId="2">
              {
                showForm === false?
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
                :
                <FormGroup className="has-icon-left position-relative" style={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>

                <Button onClick={onShow} color="primary uapp-form-button">Add another</Button>
                <Button onClick={onNextPage} color="warning uapp-form-button float-right">Next Page</Button>
                </FormGroup>
              }
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
        </div>
    );
};

export default BankDetails;