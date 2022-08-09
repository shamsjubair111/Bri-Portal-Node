import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Col,
  Table,
} from "reactstrap";
import Select from 'react-select';

import { useToasts } from "react-toast-notifications";

import get from "../../../helpers/get";
import post from "../../../helpers/post";
import put from "../../../helpers/put";
import remove from "../../../helpers/remove";
import ButtonForFunction from "../Components/ButtonForFunction";
import CustomButtonRipple from "../Components/CustomButtonRipple";

const DocumentGroup = () => {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
  
    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [applicationDD, setApplicationDD] = useState([]);
    const [applicationLabel, setApplicationLabel] = useState('Select Application Type');
    const [applicationValue, setApplicationValue] = useState(0);
    const [applicationTypeError, setApplicationTypeError] = useState(false);

    const [documentGroupData, setDocumentGroupData] = useState([]);

    const { addToast } = useToasts();
  
    useEffect(() => {
      get("ApplicationTypeDD/Index").then((res) => {
        console.log("application DD data", res);
        setApplicationDD(res);
      });

      get("DocumentGroup/Index").then(res => {
        console.log("Group Data", res);
        setDocumentGroupData(res);
      })
  
    }, [success]);
  
    const applicationOptions = applicationDD.map((docu) => ({
      label: docu?.name,
      value: docu?.id,
    }));
  
    const selectApplicationDD = (label, value) => {
      setApplicationLabel(label);
      setApplicationValue(value);
      setApplicationTypeError(false);
    }
  
    const handleUpdate = (document) => {
      setModalOpen(true);
      console.log(document, document?.documentCategory?.id);
      setApplicationLabel(document?.applicationTypeId === 1 ? "Home" : document?.applicationTypeId === 2 ? "EU/UK" : "International");
      setApplicationValue(document?.applicationTypeId);
      setTitle(document?.title);
      setDetail(document?.details);
      localStorage.setItem("updateDocument", document?.id);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const subData = new FormData(event.target);
  
    //   for(var i of subData){
    //       console.log(i);
    //   }
  
      // const subdata = {
      //   name: universityCountry
      // }
  
      if(applicationValue === 0){
        setApplicationTypeError(true);
      }
      else{
        if (localStorage.getItem("updateDocument")) {
          console.log(localStorage.getItem("updateDocument"));
          const returnvalue = put(`DocumentGroup/Update`, subData).then((action) => {
            setSuccess(!success);
            setModalOpen(false);
            addToast(action?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
            setTitle("");
            setDetail("");
            setApplicationLabel("Select Application Type");
            setApplicationValue(0);
            localStorage.removeItem("updateDocument");
          });
        } else {
            localStorage.removeItem("updateDocument");
            
          const returnValue = post(`DocumentGroup/Create`, subData).then((action) => {
            setSuccess(!success);
            setModalOpen(false);
            addToast(action?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
    
            setTitle("");
            setDetail("");
            setApplicationLabel("Select Application Type");
            setApplicationValue(0);
          });
        }
      }
      
    };
  
  
    const handleDeleteDocumentGroup = (id) => {
      const returnValue = remove(`DocumentGroup/Delete/${id}`).then((action) => {
        setDeleteModal(false);
        setSuccess(!success);
        addToast(action, {
          appearance: "error",
          autoDismiss: true,
        });
        localStorage.removeItem("delDocuGroupName");
        localStorage.removeItem("delDocuGroupId");
      });
    };
  
    const toggleDanger = (name, id) => {
      localStorage.setItem("delDocuGroupName", name);
      localStorage.setItem("delDocuGroupId", id);
  
      setDeleteModal(true);
    };
  
    // on Close Modal
    const closeModal = () => {
      setModalOpen(false);
      setTitle("");
      setDetail("");
      setApplicationLabel("Select Application Type")
      setApplicationValue(0);
      localStorage.removeItem("updateDocument");
    };
  
    // on Close Delete Modal
    const closeDeleteModal = () => {
      setDeleteModal(false);
      localStorage.removeItem("delDocuGroupName");
      localStorage.removeItem("delDocuGroupId");
    };
  
    // redirect to dashboard
    const backToDashboard = () => {
      history.push("/");
    };

    const handleViewDocument = (document) => {
        console.log("view document", document);
    }
  
  
    return (
      <div>
        <Card className="uapp-card-bg">
          <CardHeader className="page-header">
            <h3 className="text-light">Document Group</h3>
            <div className="page-header-back-to-home">
              <span onClick={backToDashboard} className="text-light">
                {" "}
                <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
              </span>
            </div>
          </CardHeader>
        </Card>
  
        <Card>
          <CardHeader>
            <ButtonForFunction
              className={"btn btn-uapp-add"}
              func={() => setModalOpen(true)}
              icon={<i className="fas fa-plus"></i>}
              name={" Add New"}
              permission={6}
            />
  
            <div> <b> Total <span className="badge badge-primary">{documentGroupData?.length}</span> University Document Group Found   </b></div>
          </CardHeader>
          <CardBody>
            <div>
              <Modal
                isOpen={modalOpen}
                toggle={closeModal}
                className="uapp-modal"
              >
                <ModalHeader>Add Document Group</ModalHeader>
                <ModalBody>
                  <Form onSubmit={handleSubmit}>
                    {localStorage.getItem("updateDocument") ? (
                      <input
                        type="hidden"
                        name="id"
                        id="id"
                        value={localStorage.getItem("updateDocument")}
                      />
                    ) : null}
  
                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="4">
                        <span>Application Type <span className="text-danger">*</span>{" "}</span>
                      </Col>
                      <Col md="8">
                        <Select
                          options={applicationOptions}
                          value={{ label: applicationLabel, value: applicationValue }}
                          onChange={(opt) =>
                            selectApplicationDD(opt.label, opt.value)
                          }
                          name="applicationTypeId"
                          id="applicationTypeId"
                        />
  
                        {applicationTypeError && (
                          <span className="text-danger">
                            Application Type must be selected.
                          </span>
                        )}
  
                      </Col>
                    </FormGroup>

  
                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="4">
                        <span>Title <span className="text-danger">*</span>{" "}</span>
                      </Col>
                      <Col md="8">
                        <Input
                          type="text"
                          required
                          name="title"
                          id="title"
                          value={title}
                          placeholder="Write title"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
  
                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="4">
                        <span>Details <span className="text-danger">*</span>{" "}</span>
                      </Col>
                      <Col md="8">
                        <Input
                          type="textarea"
                          required
                          rows="6"
                          name="details"
                          id="details"
                          value={detail}
                          placeholder="Write details"
                          onChange={(e) => setDetail(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
  
                    <FormGroup
                      className="has-icon-left position-relative"
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Button
                        color="danger"
                        className="mr-1 mt-3"
                        onClick={closeModal}
                      >
                        Close
                      </Button>
  
                      {/* {
                      localStorage.getItem("updateDocument") ?
                        <Button color="warning" className="mr-1 mt-3" onClick={handleUpdateSubmit}>Update</Button> : */}
  
                      <CustomButtonRipple
                        color={"primary"}
                        type={"submit"}
                        className={"mr-1 mt-3"}
                        name={"Submit"}
                        permission={6}
                      />
  
                      {/* }  */}
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
            <div className="table-responsive">
              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Title</th>
                    <th>Details</th>
                    <th>Application type</th>
                    <th>Documents</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {documentGroupData?.map((document, i) => (
                    <tr key={document?.id} style={{ textAlign: "center" }}>
                      <th scope="row">{i + 1}</th>
                      <td>{document?.title}</td>
                      <td className="text-center">{document?.details}</td>
                      <td className="text-center">
                        {
                            document?.applicationTypeId === 1 ? <span>Home</span> : document?.applicationTypeId === 2 ? <span>EU/UK</span> : <span>International</span>
                        }
                      </td>
                      <td>
                        <ButtonForFunction
                            name={"view"}
                            func={()=>handleViewDocument(document)}
                        />
                      </td>
                      <td>
  
                        <ButtonForFunction
                          func={() => handleUpdate(document)}
                          className={"mx-1 btn-sm"}
                          color={"warning"}
                          icon={<i className="fas fa-edit"></i>}
                          permission={6}
                        />
  
                        <ButtonForFunction
                          className={"mx-1 btn-sm"}
                          func={() => toggleDanger(document?.title, document?.id)}
                          color={"danger"}
                          icon={<i className="fas fa-trash-alt"></i>}
                          permission={6}
                        />
  
  
                        <Modal
                          isOpen={deleteModal}
                          toggle={closeDeleteModal}
                          className="uapp-modal"
                        >
                          <ModalBody>
                            <p>
                              Are You Sure to Delete this{" "}
                              <b>{localStorage.getItem("delDocuGroupName")}</b> ? Once
                              Deleted it can't be Undone!
                            </p>
                          </ModalBody>
  
                          <ModalFooter>
                            <Button
                              color="danger"
                              onClick={() =>
                                handleDeleteDocumentGroup(
                                  localStorage.getItem("delDocuGroupId")
                                )
                              }
                            >
                              YES
                            </Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
                          </ModalFooter>
                        </Modal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
    );
};

export default DocumentGroup;