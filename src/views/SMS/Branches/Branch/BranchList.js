import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Modal,
  ModalBody,
  ModalFooter
} from "reactstrap";
import get from "../../../../helpers/get";
import remove from "../../../../helpers/remove";
import { useToasts } from "react-toast-notifications";

const BranchList = () => {
  const {addToast} = useToasts();
  const [deleteModal, setDeleteModal] = useState(false);
  const [branchList, setBranchList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serialNum, setSerialNum] = useState(1);

  const history = useHistory();
  const backToDashboard = () => {
    history.push("/");
  };

  useEffect(() => {
    get(`Branch/Index`).then((res) => {
      setBranchList(res);
    });
  }, []);

  const handleLocalStorage = () => {
    localStorage.removeItem("branchId");
    // localStorage.removeItem("branchManagerId");
  };

  const handleUpdate = (id) =>{
     
     history.push({pathname:'/branchInformation',
                    branchId: id
                    });
  }

  const handleDeletebranch = (id) => {
    remove(`Branch/Delete/${id}`).then((res) => {
      // console.log("respomse 39", res);
      addToast(res, {
        appearance:  "error",
        // autoDismiss: true,
      });
      setDeleteModal(false);
      const newData = branchList.filter(data => data.id !== id);
      setBranchList(newData);
     
    });
  };

  const toggleDanger = (name,id) => {
        
       
    setDeleteModal(true)
   }


       // on Close Delete Modal
const closeDeleteModal = () => {
setDeleteModal(false);


}



  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Branch List</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className="uapp-employee-search">
        <CardBody>
          <Row className="mb-3">
            <Col lg="6" md="5" sm="6" xs="4">
              <Link to="/branchInformation">
                <Button
                  onClick={handleLocalStorage}
                  className="btn btn-uapp-add "
                >
                  {" "}
                  <i className="fas fa-plus"></i> Add New{" "}
                </Button>
              </Link>
            </Col>
          </Row>

          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) : (
            <div className="table-responsive">
              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>

                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {branchList?.map((singleBranch, i) => (
                    <tr key={singleBranch?.id} style={{ textAlign: "center" }}>
                      <td>{serialNum + i}</td>

                      <td>{singleBranch?.name}</td>
                      <td>{singleBranch?.email}</td>
                      <td>{singleBranch?.phoneNumber}</td>

                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                          <Link to={`/branchProfile/${singleBranch?.id}`}>
                            <Button color="primary" className="mx-1 btn-sm">
                              {" "}
                              <i className="fas fa-eye"></i>{" "}
                            </Button>
                          </Link>

                            <Button color="dark" className="mx-1 btn-sm" onClick={()=>handleUpdate(singleBranch?.id)}>
                              {" "}
                              <i className="fas fa-edit"></i>{" "}
                            </Button>
                     

                          <Button
                            color="danger"
                            onClick={toggleDanger}
                            className="mx-1 btn-sm"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                          <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">
    
                          <ModalBody>
                            <p>Are You Sure to Delete this? Once Deleted it can't be Undone!</p>
                          </ModalBody>
    
                          <ModalFooter>
                            <Button color="danger"   onClick={() => handleDeletebranch(singleBranch?.id)}>YES</Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
                          </ModalFooter>
    
                        </Modal>
                         
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default BranchList;
