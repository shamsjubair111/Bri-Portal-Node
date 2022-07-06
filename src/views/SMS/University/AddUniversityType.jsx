import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { Card, CardBody, CardHeader,   Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table } from 'reactstrap';


import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useToasts } from "react-toast-notifications";
import { useDispatch } from 'react-redux';


import { StoreUniversitytypeData } from '../../../redux/actions/SMS/UniversityAction/UniversityTypeAction';
import { Link } from 'react-router-dom';
import get from '../../../helpers/get';
import post from '../../../helpers/post';

import remove from '../../../helpers/remove';
import put from '../../../helpers/put';


const AddUniversityType = (props) => {

  const universityTypes = props.univerSityTypeList[0];
  // console.log("uniType", universityTypes);
  const [uniTypeId, setUniTypeId] = useState(0);
  const [universityType,setUniversityType] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addToast } = useToasts();
  const [universityList, setUniversityList] = useState([]);
  const [postId, setPostId] = useState(0);

  const [uName,setUName] = useState('');


//  const onEditorStateChange = (editorState) => {

//     setEditorState(editorState)
//     setRawContent(convertToRaw(editorState.getCurrentContent()).blocks[0].text);
//     setRawContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
//   };



useEffect(()=> {
   get(`UniversityType/Index`).then((action)=>{
    
    setUniversityList(action);
    setUniTypeId(action?.id);
   
      dispatch(StoreUniversitytypeData(action))
    });



},[success])

const handleSubmit = (event) => {


  event.preventDefault();

  // const subdata = {
  //   name: universityType
  // }

  console.log(postId);

  const subdata = new FormData(event.target);
  // for (const vale of subdata.values())
  // {
  //   console.log(vale);

  // }
  
  if(postId == 0){
    setUName('');
    post(`UniversityType/Create`,subdata)
  .then(res => {
    setSuccess(!success);
    addToast(res?.data?.message, {
      appearance: 'success',
      autoDismiss: true,
    })
    setModalOpen(false)
  })
  }

  else{
    setUName('');
    put(`UniversityType/Update`,subdata).then((action)=> {
      setSuccess(!success);
      setModalOpen(false)
      addToast(action?.data?.message, {
        appearance: 'success',
        autoDismiss: true,
      })
      setUniversityType('');
      setPostId(0);
    //  localStorage.removeItem('updateUni')
  
    })
  }
}

const handleUpdate = (type) => {
  setModalOpen(true);
  setUniversityType(type.name);
  // localStorage.setItem('updateUni',type.id)
  // console.log(type);
  get(`UniversityType/Get/${type}`)
  .then(res=> {
    setPostId(res.id);
    setUName(res.name);
  })
 

  
}

const handleUpdateSubmit = (e) => {
  e.preventDefault();

  // const id = localStorage.getItem('updateUni');

  // const subData = {
    
  //   name: universityType
  // }
  const subData = new FormData(e.target)
  // for (const val of subData.values()){
  //   console.log(val);

  // }



  post(`UniversityType/Update`,subData).then((action)=> {
    setSuccess(!success);
    setModalOpen(false)
    addToast(action, {
      appearance: action == 'University Type Updated Successfully' ? 'success': 'error',
      autoDismiss: true,
    })
    setUniversityType('');
  //  localStorage.removeItem('updateUni')

  })


}

const handleDeleteUniType = (id) => {
  const returnValue = remove(`UniversityType/Delete/${id}`).then((action)=> {
    setDeleteModal(false);
    setSuccess(!success);
    // console.log(action);
     addToast(action, {
       appearance: 'error',
       autoDismiss: true,
     })
     localStorage.removeItem('delUniTypeName')
     localStorage.removeItem('delUniTypeId')
  })
}


const toggleDanger = (name,id) => {
 localStorage.setItem('delUniTypeName',name)
 localStorage.setItem('delUniTypeId',id)

 setDeleteModal(true)
}

// on Close Modal
const closeModal = () => {
  setModalOpen(false);


}

// on Close Delete Modal
const closeDeleteModal = () => {
  setDeleteModal(false);
  localStorage.removeItem('delUniTypeName')
     localStorage.removeItem('delUniTypeId')

}

     // redirect to dashboard
   const backToDashboard = () => {
    history.push("/")
}


    return (

        <div>
            <Card className='uapp-card-bg'>
              <CardHeader className="page-header">              
                <h3 className="text-light">Add University Type</h3>
                  <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-light">
                    {" "} 
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                    </span>
                  </div>             
              </CardHeader>        
            </Card>

          {/* old header design if need future */}
            {/* <Card>
              <CardHeader className="page-header">              
                <h3>Add University Type</h3>
                  <div className="page-header-back-to-home">
                  <span onClick={backToDashboard}> <i className="fas fa-arrow-circle-left"></i> Back to Dashboard</span>
                  </div>             
              </CardHeader>        
            </Card> */}
         


            {/* <Card>

                <CardBody>

                <Form>

                  <FormGroup row className="has-icon-left position-relative">


                    <Col md="2">
                      <span>University Description</span>
                    </Col>

                  
                    <Col md="12">

                    <Editor
                    
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange}
                        toolbarClassName="toolbar-class"
                    />
                    <textarea
                        disabled
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                        />

                    </Col>

                  </FormGroup>


                  </Form>

                </CardBody>

            </Card> */}

      <Card>
        <CardHeader>
       
          <Button className="btn btn-uapp-add" onClick={() => setModalOpen(true)}> <i className="fas fa-plus"></i>  Add New</Button>
          <br/>
         
          <div> <b> Total <span className="badge badge-primary">{universityList.length}</span> University Type Found </b></div>
        </CardHeader>
        
        <CardBody>
        <Link to ='/newform'>
        {/* <Button className="btn btn-danger mt-2 mb-4" > <i className="fas fa-plus"></i>  Add New Page</Button> */}
        </Link>

          <div>

            <Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal">
              <ModalHeader>Add University Type</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit} >
                  <FormGroup row className="has-icon-left position-relative">
                   
                  
                      <Input
                        type="hidden"
                        name="id"
                        id="id"
                        defaultValue={postId}
                        
                       
                       
                      />

                   
                  </FormGroup>
                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>University Type Name</span>
                    </Col>
                    <Col md="8">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={uName}
                        
                        placeholder="Create University Type"
                        onChange={(e) => setUniversityType(e.target.value)}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button color="danger" className="mr-1 mt-3" onClick={closeModal}>Close</Button>

                    
                    {/* localStorage.getItem("updateUni") ? */}
                      {/* <Button color="warning" className="mr-1 mt-3" onClick={handleUpdateSubmit}>Update</Button> : */}
                      <Button.Ripple
                        color="warning"
                        type="submit"
                        className="mr-1 mt-3"
                       
                      >
                        Submit
                      </Button.Ripple>

                  

                  </FormGroup>

                </Form>
              </ModalBody>

            </Modal>
            <div>

            </div>
          </div>
          <div className="table-responsive">
          <Table className="table-sm table-bordered" >
          <thead className="thead-uapp-bg">
              <tr style={{ textAlign: "center" }}>
                <th>SL/NO</th>
                <th>University Type Name</th>
                <th className="text-center" >Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                universityTypes?.map((uniType, i) => <tr key={uniType.id} style={{ textAlign: "center" }}>
                  <th scope="row">{i + 1}</th>
                  <td>{uniType?.name}</td>
                  <td className="text-center" >               
                   <Link to ={{
                     pathname: '/universityList',
                     universityType: uniType?.id,
                     universityName: uniType?.name,

                   }}> 
                   <span className="badge badge-pill badge-primary"> {uniType?.universityCount} </span>
                   </Link>
                  </td>
                  <td>
                    <Button className="mx-1 btn-sm" onClick={() => toggleDanger(uniType?.name, uniType?.id)} color="danger"><i className="fas fa-trash-alt"></i></Button>
                    <Button onClick={()=> handleUpdate(uniType?.id)} className="mx-1 btn-sm" color="warning"><i className="fas fa-edit"></i></Button>


                    <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">

                      <ModalBody>
                        <p>Are You Sure to Delete this <b>{localStorage.getItem('delUniTypeName')}</b> ? Once Deleted it can't be Undone!</p>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" onClick={() => handleDeleteUniType(localStorage.getItem('delUniTypeId'))}>YES</Button>
                        <Button onClick={closeDeleteModal}>NO</Button>
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

  univerSityTypeList: state.universityTypeDataReducer.universityTypes

})
export default connect(mapStateToProps)(AddUniversityType);
