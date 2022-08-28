import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
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
} from "reactstrap";
import { useToasts } from "react-toast-notifications";
import get from "../../../helpers/get";
import post from "../../../helpers/post";
import put from "../../../helpers/put";
import remove from "../../../helpers/remove";
import ButtonForFunction from "../Components/ButtonForFunction";
import { permissionList } from "../../../constants/AuthorizationConstant";

const AddCountry = () => {
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [updateState, setUpdateState] = useState({});
  const [countries, setCountries] = useState([]);
  const { addToast } = useToasts();

  const permissions = JSON.parse(localStorage.getItem('permissions'));

  useEffect(() => {
    get("Country/Index").then((res) => {
      console.log("country", res);
      setCountries(res);
    });
  }, [success]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const subdata = new FormData(event.target);

    // const subdata = {
    //   name: universityCountry
    // }

    if (!updateState?.id) {
      setUpdateState({});

      const returnValue = post(`Country/Create`, subdata).then((action) => {
        setSuccess(!success);
        setModalOpen(false);
        addToast(action?.data?.message, {
          appearance: "success",
          autoDismiss: true,
        });
        setCountry("");
        setCode("");
      });
    } else {
      const returnvalue = put(`Country/Update`, subdata).then((action) => {
        setSuccess(!success);
        setModalOpen(false);
        addToast(action?.data?.message, {
          appearance: "success",
          autoDismiss: true,
        });
        setCountry("");
        setCode("");
        setUpdateState({});
        //  localStorage.removeItem('updatecountry')
      });
    }
  };

  const handleUpdate = (country) => {
    setModalOpen(true);
    setCountry(country?.name);
    setCode(country?.code);
    // localStorage.setItem('updatecountry',country.id)
    console.log(country);
    setUpdateState(country);
  };

  const handleDeletecountry = (id) => {
    const returnValue = remove(`Country/Delete/${id}`).then((action) => {
      setDeleteModal(false);
      setSuccess(!success);
      addToast(action, {
        appearance: "error",
        autoDismiss: true,
      });
      localStorage.removeItem("delCountryName");
      localStorage.removeItem("delCountryId");
    });
  };

  const toggleDanger = (name, id) => {
    localStorage.setItem("delCountryName", name);
    localStorage.setItem("delCountryId", id);

    setDeleteModal(true);
  };

  // on Close Modal
  const closeModal = () => {
    setModalOpen(false);
    setUpdateState({});
    localStorage.removeItem("updatecountry");
  };

  // on Close Delete Modal
  const closeDeleteModal = () => {
    setDeleteModal(false);
    localStorage.removeItem("delCountryName");
    localStorage.removeItem("delCountryId");
  };

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };
  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Country List</h3>
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
          {
            permissions?.includes(permissionList?.Add_Country) ?
            <ButtonForFunction
            className={"btn btn-uapp-add"}
            func={() => setModalOpen(true)}
            icon={<i className="fas fa-plus"></i>}
            name={" Add New"}
            
          />
          : 
          null
          }

          <div>
            {" "}
            <b>
              {" "}
              Total{" "}
              <span className="badge badge-primary">
                {countries?.length}
              </span>{" "}
              Country Found{" "}
            </b>
          </div>
        </CardHeader>
        <CardBody>
          <div>
            <Modal
              isOpen={modalOpen}
              toggle={closeModal}
              className="uapp-modal"
            >
              <ModalHeader>Add Country</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit}>
                  {updateState?.id ? (
                    <Input
                      type="hidden"
                      name="id"
                      id="id"
                      defaultValue={updateState?.id}
                    />
                  ) : null}

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                        Country Name <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={updateState?.name}
                        placeholder="Write Country Name"
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                        Country Code <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                      <Input
                        type="text"
                        name="code"
                        id="code"
                        defaultValue={updateState?.code}
                        placeholder="Write Country Code"
                        onChange={(e) => setCode(e.target.value)}
                        required
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
                    localStorage.getItem("updatecountry") ?
                      <Button color="warning" className="mr-1 mt-3" onClick={handleUpdateSubmit}>Update</Button> : */}
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mr-1 mt-3"
                      // onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </Button.Ripple>

                    {/* } */}
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
                  <th>Name</th>
                  {/* <th className="text-center">Count</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {countries?.map((country, i) => (
                  <tr key={country.id} style={{ textAlign: "center" }}>
                    <th scope="row">{i + 1}</th>
                    <td>{country.name}</td>
                    {/* <td className="text-center">
                      <span className="badge badge-pill badge-primary">
                        {" "}
                        {country?.universityCount}{" "}
                      </span>
                    </td> */}
                    <td>
                     {
                        permissions?.includes(permissionList?.Delete_Country) ?
                       <ButtonForFunction
                       className={"mx-1 btn-sm"}
                       func={() => toggleDanger(country.name, country.id)}
                       color={"danger"}
                       icon={<i className="fas fa-trash-alt"></i>}
                      
                     />
                     :
                     null
                     }

                      {
                        permissions?.includes(permissionList?.Update_Country)?
                        <ButtonForFunction
                        func={() => handleUpdate(country)}
                        className={"mx-1 btn-sm"}
                        color={"warning"}
                        icon={<i className="fas fa-edit"></i>}
                        permission={6}
                      />
                      :
                      null
                      }

                      <Modal
                        isOpen={deleteModal}
                        toggle={closeDeleteModal}
                        className="uapp-modal"
                      >
                        <ModalBody>
                          <p>
                            Are You Sure to Delete this{" "}
                            <b>{localStorage.getItem("delCountryName")}</b> ?
                            Once Deleted it can't be Undone!
                          </p>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            color="danger"
                            onClick={() =>
                              handleDeletecountry(
                                localStorage.getItem("delCountryId")
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

export default AddCountry;
