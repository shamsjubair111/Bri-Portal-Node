import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledTooltip, ButtonGroup } from 'reactstrap';
import post from '../../../helpers/post';
import { useToasts } from 'react-toast-notifications';
import get from '../../../helpers/get';
import put from '../../../helpers/put';
import remove from '../../../helpers/remove';

const ComissionGroup = () => {


    const history = useHistory();
    const [openModal,setOpenModal] = useState(false);
    const {addToast} = useToasts();
    const [success,setSuccess] = useState(false);
    const [commission,setCommission] = useState([]);
    const [deleteModal,setDeleteModal] = useState(false);
    const [edit,setEdit] = useState(false);
    const [data,setData] = useState({});
    const [delData,setDelData] = useState({});

    useEffect(()=>{

      get(`CommissionGroup/Index`)
      .then(res => {
        console.log('commission SDta ', res);
        setCommission(res);
      })


    },[success])

    const backToDashboard = () => {
        history.push("/")
    }

    const handleupdate = (data) => {
      setData(data);
      setEdit(true);
      setOpenModal(true);
    }

    const toggleDanger = (data) => {
      setDeleteModal(true);
      console.log(data);
      setDelData(data);

    } 

    const confirmDelete = () => {
      remove(`CommissionGroup/Delete/${delData?.id}`)
      .then(res => {
        addToast(res,{
          appearance:'error',
          autoDismiss: true
        })
        setDelData({});
        setSuccess(!success);
        setDeleteModal(false);
      })
    }

    const submitModalForm = (event) => {

      event.preventDefault();

      const subData = new FormData(event.target);
        if(edit){
          put(`CommissionGroup/Update`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoDismiss: true
              })
              setEdit(false);
              setData({});
              setOpenModal(false);
              setSuccess(!success);
            }
          })

        }
        else{
          post(`CommissionGroup/Create`,subData)
          .then(res => {
            if(res?.status == 200){
              addToast(res?.data?.message,{
                appearance: 'success',
                autoDismiss: true
              })
              setOpenModal(false);
              setSuccess(!success);
            }
          })
        }
     
    }


          return (
              <div>
               <Modal isOpen={openModal} toggle={() => setOpenModal(!openModal)} className="uapp-modal">
                          
                        <ModalBody>
                         
                          <form onSubmit={submitModalForm} className='mt-3'>

                           {
                            edit? 
                            <input
                            type='hidden'
                            name='id'
                            id='id'
                            value={data?.id}
                            />
                            :
                            null
                           }



                          <FormGroup row className="has-icon-left position-relative">
                        <Col md="4">
                          <span>
                            Name <span className="text-danger">*</span>{" "}
                          </span>
                        </Col>
                        <Col md="8">
                          <Input
                          type='text'
                          name="name"
                            id="name"
                            defaultValue={data?.name}
                            required
                           
                          />
                        
                        </Col>
                      </FormGroup>

                      <FormGroup row className="has-icon-left position-relative">

                        <Col md ='12'>
                          <div className='d-flex justify-content-between'>
                            <Button color='danger' onClick={()=> setOpenModal(false)}>
                              Cancel
                            </Button>
                            <Button color='primary' type='submit'>
                              Submit

                            </Button>
                          </div>
                        
                        </Col>

                      </FormGroup>

                          </form>
                        </ModalBody>
        
                        
                     </Modal>

      <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Comission Groups</h3>
                <div className="page-header-back-to-home">
                  <span className="text-light" onClick={backToDashboard}>
                    {" "}
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                  </span>
                </div>
              </CardHeader>
            </Card>

      <Card className='uapp-employee-search'>
     
        <CardHeader>

        <div className=''>
            <Button className ="btn btn-uapp-add" onClick={()=> setOpenModal(true)}>
               <i className="fas fa-plus"></i>
             
              Add New
                         
                 </Button>
            </div>
        </CardHeader>

        <CardBody className="search-card-body">
        <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    
                    <th>S/L</th>
                     <th>Name</th>
                     <th>Price Settings</th>
                     <th>Action</th>
                 </tr>
                </thead>
                <tbody>
                {commission?.map((comm, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                      <th scope='row'>{i + 1}</th>
                      <td>
                        {comm?.name}
                      </td>
                      <td>
                        <Link to={`/commissionPriceList/${comm?.id}`}>
                          <Button color='primary'>View</Button>
                        </Link>
                      </td>
                     
                      <td style={{ width: "15%" }} className="text-center">
                        <ButtonGroup variant="text">
                       

                            {/* <ButtonForFunction
                            icon={<i className="fas fa-edit"></i>}
                            color={"dark"}
                            className={"mx-1 btn-sm"}
                            func={()=>handleEdit(student)}
                            /> */}

                            <Button className='me-1 btn-sm' color='warning' onClick={()=>handleupdate(comm)}>
                            <i className="fas fa-edit"></i>


                            </Button>

                            <Button className='ms-1 btn-sm' color='danger' onClick={()=>toggleDanger(comm)}>
                            <i className="fas fa-trash-alt"></i>


                            </Button>


                      

                          {/* <Button onClick={() => toggleDanger(student?.name, student?.id)} color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button> */}
                          
                       

                          {/* <ButtonForFunction
                          icon={<i className="fas fa-trash-alt"></i>}
                          color={'danger'}
                          className={"mx-1 btn-sm"}
                          func={()=> toggleDanger(student)}

                          /> */}

                        </ButtonGroup>

                     
                        <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                        <ModalBody>
                          <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                        </ModalBody>
        
                        <ModalFooter>
                          <Button  color="danger" onClick={confirmDelete}>YES</Button>
                          <Button onClick={() => setDeleteModal(false)}>NO</Button>
                        </ModalFooter>
                     </Modal>



                      </td>
                    </tr>
                  ))}
                 
                </tbody>
              </Table>

        </CardBody>
      </Card>
            
        </div>
    );
};

export default ComissionGroup;