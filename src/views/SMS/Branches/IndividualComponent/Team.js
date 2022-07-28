import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Card, Col, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import get from '../../../../helpers/get';
import remove from '../../../../helpers/remove';
import { useToasts } from 'react-toast-notifications';
import post from '../../../../helpers/post';
import put from '../../../../helpers/put';

const Team = () => {


    const [modalOpen, setModalOpen] = useState(false);
    const {addToast} = useToasts();
    const [branchTeam, setBranchTeam] = useState([]);
    const [teamInfo, setTeamInfo] = useState({});
    const [branchTeamEmployee, setBranchTeamEmployee] = useState([]);
    const [teamName, setTeamName] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const history = useHistory();
    const [success, setSuccess] = useState(false);
    const branchId = localStorage.getItem("branchId");

    useEffect(()=>{
        get(`BranchTeamEmployee/Count/${branchId}`).then((res) => {
            // console.log('aaaa',res);
            setBranchTeamEmployee(res);
          });
    },[ success, branchId])
   
   
    const functionimplement = () => {
        setModalOpen(true);
    
      };

      const toggleDeleteTeam = (id) => {
        localStorage.setItem("teamId", id);
        setDeleteModal(true);
      };

      const handleTeamUpdate = (id) => {
        get(`BranchTeam/Get/${id}`).then((res) => {
        //   console.log(res);
          setTeamInfo(res);
          setTeamName(res?.name);
          setIsUpdate(true);
          setModalOpen(true);
        });
      };

      const closeDeleteModal = () => {
        setDeleteModal(false);
      };
    
      const handleDeletebranchTeam = () => {
        const id = localStorage.getItem("teamId");
        remove(`BranchTeam/Delete/${id}`).then((res) => {
          setSuccess(!success);
          setDeleteModal(false);
          addToast(res, {
            appearance: "error",
            autoDismiss: true,
          });
         
        });
         const newTeamData = branchTeam.filter((team) => team?.id != id);
        //   console.log(newTeamData);
          setBranchTeam(newTeamData);
    
      };

      function closeModal(e) {
        e.preventDefault();
        setModalOpen(false);
      }

      const handleTeamSubmit = (e) => {
        
        e.preventDefault();
        const teamData = new FormData(e.target);
        // for(let  value of teamData.values()){
        //   console.log(value);
        // }
        if (!isUpdate) {
          post(`BranchTeam/Create`, teamData).then((action) => {
            setSuccess(!success);
            setModalOpen(false);
            addToast(action?.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
            // history.push(`/branchProfile/${branchId}`);
          });
        } else {
          for (let val of teamData.values()) {
            // console.log(val);
          }
          put(`BranchTeam/Update`, teamData).then((res) => {
            // console.log(res);
            setIsUpdate(false);
            setSuccess(!success);
            setModalOpen(false);
            addToast(res.data?.message, {
              appearance: "success",
              autoDismiss: true,
            });
    
            // history.push(`/branchProfile/${branchId}`);
          });
        }
        // setTeamName('');
      };

      const showTeamInfo = (id) => {
        history.push(`/teamEmployee/${id}`);
      }

    return (
        <div>
             <div>
        <Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal">
          {isUpdate ? (
            <ModalHeader>Update Team Name</ModalHeader>
          ) : (
            <ModalHeader>Create a New Team</ModalHeader>
          )}
          <ModalBody>
            <Form onSubmit={handleTeamSubmit}>
              <input
                type="hidden"
                name="branchId"
                id="branchId"
                value={branchId}
              />
              {isUpdate ? (
                <input type="hidden" name="id" id="id" value={teamInfo?.id} />
              ) : null}
              {isUpdate ? (
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="4">
                    <span>Team Name</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue={teamName}
                    />
                  </Col>
                </FormGroup>
              ) : (
                <FormGroup row className="has-icon-left position-relative">
                  <Col md="4">
                    <span>Team Name</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Add team name"
                    />
                  </Col>
                </FormGroup>
              )}

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

                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-3"
                >
                  Submit
                </Button.Ripple>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
            <Card>
              <div className="container mt-3">
                <Button
                  onClick={functionimplement}
                  className="btn btn-uapp-add "
                >
                  {" "}
                  <i class="fas fa-plus"></i> Add Team{" "}
                </Button>
              </div>

              {branchTeamEmployee.length > 0 && (
                <div className="table-responsive container mt-3">
                  <Table className="table-sm table-bordered">
                    <thead className="thead-uapp-bg">
                      <tr style={{ textAlign: "center" }}>
                        <th>Name</th>
                        <th>Employees</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {branchTeamEmployee?.map((btEmployee) => (
                        <tr key={btEmployee.id} style={{ textAlign: "center" }}>
                          <td>{btEmployee?.teamName}</td>
                       
                            <td>
                              <span className='badge badge-primary'
                              style={{ cursor: 'pointer'}}
                              onClick={()=>showTeamInfo(btEmployee?.id)}
                              >
                              
                              {btEmployee?.employeeCount}
                              </span>
                            </td>
                   
                          <td>
                          
                            
                                {" "}
                                <i class="fas fa-edit warning icon-hover-style"
                                onClick={() => handleTeamUpdate(btEmployee?.id)}
                                ></i>{" "}
                             

                             
                                <i class="fas fa-trash-alt text-danger icon-hover-style"
                                 onClick={() => toggleDeleteTeam(btEmployee?.id)}
                                ></i>
                           
                          
                            <Modal
                              isOpen={deleteModal}
                              toggle={closeDeleteModal}
                              className="uapp-modal"
                            >
                              <ModalBody>
                                <p>
                                  Are You Sure to Delete this ? Once Deleted it
                                  can't be Undone!
                                </p>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  color="danger"
                                  onClick={() => handleDeletebranchTeam()}
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
              )}

              {branchTeamEmployee.length <= 0 && (
                <h5 className="text-center mt-3 mb-4">Team Data Not Found</h5>
              )}
            </Card>
            
        </div>
    );
};

export default Team;