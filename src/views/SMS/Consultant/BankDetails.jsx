import React, { useEffect, useState } from 'react';
import { connect, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import put from '../../../helpers/put';
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
import { useToasts } from 'react-toast-notifications';
import remove from '../../../helpers/remove';

const BankDetails = () => {
 

  const history = useHistory();
  const {addToast} = useToasts();
  const [success, setSuccess] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [bankDetailsData, setBankDetailsData] = useState([]);
  const [fetchedData, setFetchedData] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [addNewButton, setAddNewButton] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  
  useEffect(()=>{

    get(`BankDetails/Index/${localStorage.getItem('consultantRegisterId')}`)
    .then(res => {
      console.log('Get Response For Bank Details in Array', res);
      setBankDetailsData(res);

    })

  },[success])


  const backToDashboard = () =>{

    history.push('/');

  }


  const toggleDanger = (p) => {

    console.log(p);
    setDeleteData(p);

    setDeleteModal(true);
  }


  const addNewData = () => {

    setShowForm(false);
    setFetchedData({});

  }

  //  Update Bank Details 

  const handleEdit = (data) => {
   
    setShowForm(false);

    

    get(`BankDetails/Get/${data?.id}`)
    .then( res => {
     
      setFetchedData(res);
    })


  }


  // Delete Bank Details 

  const handleDeletePermission = () => {

    
    remove(`BankDetails/Delete/${deleteData?.id}`)
    .then(res => {
      console.log(res);
      addToast(res, {
        appearance: 'error',
        autoDismiss: true
      })
      setDeleteModal(false);
      setSuccess(!success);
     
      
     
  
    })
 
  
   
  }



  // Post Bank Details

  const handleSubmit = (event) =>{

    event.preventDefault();

    const subData = new FormData(event.target);

    if(fetchedData?.id == null){

      post('BankDetails/Create',subData)
    .then(res => {
      console.log('Bank Data Post Resonse', res);
      if(res?.status ==200){
        addToast(res?.data?.message,{
          appearance:'success',
          autoDismiss: true
        })
        setFetchedData({});
        setShowForm(true);
        setSuccess(!success);
       
        
        

      }

    })

    }

    else{


      put('BankDetails/Update',subData)
      .then(res => {
        if(res?.status ==200){
          addToast(res?.data?.message,{
            appearance: 'success',
            autoDismiss: true
          })
          setFetchedData({});
          setShowForm(true);
          setSuccess(!success);
         
         
        }
      })

    }


  }
   


    

    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Consultant Bank Details</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
      <CardBody>


      <div className='row'>

      {
          bankDetailsData.map(details => 

            <div className='col-md-6 col-sm-12 mt-2' key={details?.id}>

            <Card className='CampusCard shadow-style'>

            <CardBody>
            
       

            <Row>
            
            <Col className='md-8'>

            <p>Account Name: {details?.accountName}</p>
            <p>Account Number: {details?.accountNumber}</p>
            <p>Bank Name: {details?.bankName}</p>
            <p>Bank Address: {details?.bankAddress}</p>
            <p>BIC: {details?.bic}</p>
            <p>Sort Code: {details?.sortCode}</p>
            <p>swift: {details?.swift}</p>

            
            </Col>
            
            <Col className='md-3'>

            <div className="CampusCardAction">
                 <div className=""> 
                    <button type="button" className="btn btn-outline-info" onClick={()=>handleEdit(details)} > <i className="fas fa-edit"></i> </button>
                 </div>

                 <div className=""> 
                    <button type="button" className="btn btn-outline-danger" onClick={()=>toggleDanger(details)}  ><i className="fas fa-trash-alt"></i></button>
                 </div>
                </div>
            
            
            </Col>
            
            
            
            </Row>




            
           

            </CardBody>
            <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                <ModalBody>
                  <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                </ModalBody>

                <ModalFooter>
                  <Button onClick={handleDeletePermission} color="danger">YES</Button>
                  <Button onClick={() => setDeleteModal(false)}>NO</Button>
                </ModalFooter>
             </Modal>

            </Card>

             </div>
            
            )

      }
      

      </div>
             {

              (bankDetailsData?.length <1 || !showForm) ? 

              <Form  onSubmit={handleSubmit} className="mt-5">

              <input
              type='hidden'
              name='consultantId'
              id='consultantId'
              value={localStorage.getItem('consultantRegisterId')}
              
              />
  
             {

              fetchedData?.id ?
  
              <input
              type='hidden'
              name='id'
              id='id'
              value={fetchedData?.id}
              
              />
  
              :
  
              null
  
             }
  
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
                      placeholder="Enter Account Name"
                      required
                      defaultValue = {fetchedData?.accountName}
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
                      placeholder="Enter Account Number"
                      required
                      defaultValue = {fetchedData?.accountNumber}
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
                      placeholder="Enter Sort Code"
                      required
                      defaultValue = {fetchedData?.sortCode}
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
                      placeholder="Enter Bank Name"
                      required
                      defaultValue = {fetchedData?.bankName}
                    />
  
                    
                  </Col>
                </FormGroup>
  
  
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      BIC <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="bIC"
                      id="bIC"
                      placeholder="Enter BIC"
                      required
                      defaultValue = {fetchedData?.bic}
                    />
  
                    
                  </Col>
                </FormGroup>
  
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Swift <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="swift"
                      id="swift"
                      placeholder="Enter Swift"
                      required
                      defaultValue = {fetchedData?.swift}
                    />
  
                    
                  </Col>
                </FormGroup>
  
              <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Bank Address <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                   <Input
                      type="text"
                      name="bankAddress"
                      id="bankAddress"
                      placeholder="Enter Bank Address"
                      required
                      defaultValue = {fetchedData?.bankAddress}
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

              :

              null

             }

             {

              (showForm && bankDetailsData?.length > 0) ?

              <FormGroup
              className="has-icon-left position-relative"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button.Ripple
                 onClick={addNewData}
                className="mr-1 mt-3 badge-primary"
              >
                Add New
              </Button.Ripple>
            </FormGroup>

            :

            null


             }
           
      </CardBody>
    </Card>
           

        </div>
    );
};

export default BankDetails;