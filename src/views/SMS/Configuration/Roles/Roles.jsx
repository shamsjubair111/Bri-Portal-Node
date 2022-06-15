import React, { useState, useEffect } from 'react'
import {Alert} from "reactstrap"
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { User } from "react-feather"
import { useToasts } from "react-toast-notifications";
import { useDispatch } from 'react-redux';
import { StoreRoleData } from '../../../../redux/actions/SMS/RoleAction/RoleAction';
import { useHistory } from 'react-router';
import get from '../../../../helpers/get';
import post from '../../../../helpers/post';
import remove from '../../../../helpers/remove';


const Roles = (props) => {

  const roles = props.roleList[0];

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [role, setRole] = useState('');
  const [success, setSuccess] = useState(false);
  const { addToast } = useToasts();
  const history = useHistory();



  useEffect(()=> {
    const returnValue = get(`UserRole/Index`).then((action)=>{
        dispatch(StoreRoleData(action))
      });
  },[success])

  const handleSubmit = (e) => {

    e.preventDefault();

    const subdata = {
      Name: role
    }

      const returnValue = post(`UserRole/Create`,subdata).then((action)=>{

          setSuccess(!success)
          setModalOpen(false)
          addToast(action, {
            appearance: action == 'Role Added Successfully' ? 'success': 'error',
            autoDismiss: true,
          })
          setRole('')
      });





  }




  const handleDeleteRole = (name) => {
     const returnValue = remove(`UserRole/Delete/${name}`).then((action)=> {
       setDeleteModal(false);
       setSuccess(!success);
       console.log(action);
      if(action?.status == 200){
        addToast(action?.data?.message, {
          appearance:  'error',
          autoDismiss: true,
        })
        get(`UserRole/Index`).then((action)=>{
          dispatch(StoreRoleData(action))
        });
      }
     })
  }

  const toggleDanger = (name) => {
    localStorage.setItem('delrole',name)
    setDeleteModal(true)
  }

   // redirect to dashboard
   const backToDashboard = () => {
    history.push("/")
}








  return (

      <div>

      <Card className='uapp-card-bg'>
              <CardHeader className="page-header">
              
          <h3 className='text-light'>User Roles</h3>
                  <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className='text-light'> <i className="fas fa-arrow-circle-left"></i> Back to Dashboard</span>
                  </div>
              
              </CardHeader>
      </Card>
      <Card>
        <CardHeader>
       {/*   <CardTitle>Create User Roles</CardTitle>*/}
          <Button className="btn btn-uapp-add" onClick={() => setModalOpen(true)}> <i className="fas fa-plus"></i>  Add Role</Button>
          <div> <b> Total <span className="badge badge-primary">{roles?.length}</span> Roles Found </b></div>
        </CardHeader>
        <CardBody>

          <div>

            <Modal isOpen={modalOpen} toggle={() => setModalOpen((prev)=>!prev)} className="uapp-modal">
              <ModalHeader>Add Roles</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>Role Name</span>
                    </Col>
                    <Col md="8">
                      <Input
                        type="text"
                        name="roleName"
                        id="roleName"
                        placeholder="Create Role"
                        onChange={(e) => setRole(e.target.value)}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button color="danger" className="mr-1 mt-3" onClick={() => setModalOpen(false)}>Close</Button>

                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mr-1 mt-3"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </Button.Ripple>

                  </FormGroup>

                </Form>
              </ModalBody>
              {/* <ModalFooter>

          <Button color="danger" onClick={()=>setModalOpen(false)}>Close</Button>
        </ModalFooter> */}
            </Modal>
            <div>

            </div>
          </div>
          <div className="table-responsive">
          <Table className="table-bordered text-center" >
     <thead >
              <tr>
                <th>SL/NO</th>
                <th>Role Name</th>
                <th className="text-center" >Permissions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                props.roleList[0]?.map((role, i) => <tr key={role.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{role.name}</td>
                  <td className="text-center" >               
                    <span className="badge badge-pill badge-primary"> {role.countPermissions} </span>
                  </td>
                  <td>
                    <Button onClick={() => toggleDanger(role.name)} color="danger"><i className="fas fa-trash-alt"></i></Button>

                    <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">

                      <ModalBody>
                        <p>Are You Sure to Delete this {localStorage.getItem('delrole')} ? Once Deleted it can't be Undone!</p>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" onClick={() => handleDeleteRole(localStorage.getItem('delrole'))}>YES</Button>
                        <Button onClick={() => setDeleteModal(false)}>NO</Button>
                      </ModalFooter>

                    </Modal>
                  </td>
                </tr>)
              }

            </tbody>
          </Table>
          </div>

        </CardBody>
      </Card>
   



      </div>

  )
}

const mapStateToProps = state => ({
  roleList: state.roleDataReducer.roles
})

export default connect(mapStateToProps)(Roles);
