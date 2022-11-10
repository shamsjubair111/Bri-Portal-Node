import { AddPhotoAlternateSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';
import { permissionList } from '../../../constants/AuthorizationConstant';
import get from '../../../helpers/get';
import remove from '../../../helpers/remove';
import ButtonForFunction from '../Components/ButtonForFunction';

const AdmissionOfficerWiseAssignedSubject = () => {

    const history = useHistory();
    const {officerId} = useParams();
    const [data,setData] = useState([]);
    const permissions = JSON.parse(localStorage.getItem('permissions'));
    const [deleteModal,setDeleteModal] = useState(false);
    const [delData, setDelData] = useState({});
    const [success, setSuccess] = useState(false);
    const [buttonStatus,setButtonStatus] = useState(false);
    const {addToast} = useToasts();

    useEffect(()=>{

        get(`AdmissionOfficerSubject/AssignedSubject/${officerId}`)
        .then(res => {
           
            setData(res);
        })
    },[success])

    const backToDashboard = () => {
        history.push(`/admissionOfficerList`);
    }

    const toggleDanger =  (data) => {
        setDelData(data);
        setDeleteModal(true);
    }


    const closeDeleteModal = () => {
        setDeleteModal(false);
        setDelData({});
    }

    const handleDelete = () => {
        setButtonStatus(true);
            remove(`AdmissionOfficerSubject/Remove/${delData?.id}/${officerId}`)
            .then(res => {
                setButtonStatus(false);
                addToast(res,{
                    appearance: 'error',
                    autoDismiss: true
                })
                setSuccess(!success);
                setDelData({});
                setDeleteModal(false);
            })
    }




    return (
        <div>

             <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Assigned Subjects List</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-white">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Admission Officer List
            </span>
          </div>
        </CardHeader>
      </Card>


      <Card>
        <CardBody>
        <div className="table-responsive">
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                   <th>SL/NO</th>
                  <th>Subject</th> 
                  <th>University</th> 
                  <th>Requirement Type</th> 
                  {
                    permissions?.includes(permissionList.Delete_AdmissionOfficer_Subject) ?
                    <th>Action</th> :
                    null
                  }

                   
                  
                  </tr>
                </thead>
                <tbody>
                  {data?.map((list, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                <th scope="row">{1 + i}</th> 
                    <td>{list?.name}</td> 
                    <td>{list?.university?.name}</td> 
                    <td>{list?.isAcceptEU_UK ? 'EU_UK ': null} {list?.isAcceptHome ? 'Home ': null} {list.isAcceptInternational? 'International ' : null}</td> 

                    <td style={{ width: "8%" }} className="text-center">
                          <ButtonGroup variant="text">
                         
                            {

                              permissions?.includes(permissionList.Delete_AdmissionOfficer_Subject) ?
                              <ButtonForFunction
                              color={"danger"}
                              func={() => toggleDanger(list)}
                              className={"mx-1 btn-sm"}
                              icon={<i className="fas fa-trash-alt"></i>}
                              permission={6}
                            />
                            :
                            null
                            }
                            
                          </ButtonGroup>

                         {
                            permissions?.includes(permissionList.Delete_AdmissionOfficer_Subject) ?
                            <Modal
                            isOpen={deleteModal}
                            toggle={closeDeleteModal}
                            className="uapp-modal"
                          >
                            <ModalBody>
                              <p>
                                Are You Sure to Delete this 
                                ? Once Deleted it can't be Undone!
                              </p>
                            </ModalBody>

                            <ModalFooter>
                            
                              <Button color="danger" onClick={handleDelete} disabled={buttonStatus}>
                                YES
                              </Button>
                              <Button
                                
                                onClick={closeDeleteModal}
                              >
                                NO
                              </Button>
                            </ModalFooter>
                          </Modal>
                          :
                          null
                         }
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

export default AdmissionOfficerWiseAssignedSubject;