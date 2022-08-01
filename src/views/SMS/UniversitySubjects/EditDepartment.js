import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, FormGroup, Modal, Form, Col, Input } from 'reactstrap';
import get from '../../../helpers/get';
import put from '../../../helpers/put';
import { useToasts } from "react-toast-notifications";
import CustomButtonRipple from '../Components/CustomButtonRipple';

const EditDepartment = () => {
    const history = useHistory();
    const {id}  = useParams();
    const [info,setInfo]= useState({});
    const {addToast} = useToasts();
    const [department,setdepartment] = useState('');
    const  [description,setDescription]= useState('');




    useEffect(()=>{
        get(`Department/Get/${id}`)
        .then(res => {
            console.log(res);
            setInfo(res);
            setdepartment(res.name);
            setDescription(res.description);


        })
    },[])

    const backToDashboard = () => {
        history.push('/addDepartment');
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        // const subData = new FormData(e.target);
        const subData = {
            id: info?.id,
            name: department,
            description: description
        }
        // console.log(subData);
        put(`Department/Update`,subData)
        .then(res => {
            addToast(res?.data?.message, {
                appearance: 'success',
                autoDismiss: true,
              })
              history.push('/addDepartment');
        })

    }

    return (
        <div>
            <Card>
              <CardHeader className="page-header">             
                 <h3>Update Department </h3>
                  <div className="page-header-back-to-home">
                     <span onClick={backToDashboard}> <i className="fas fa-arrow-circle-left"></i> Back to Department List</span>
                  </div>             
              </CardHeader>      
            </Card>

            <Card>
            <CardHeader>
       
           
            </CardHeader>
             <CardBody>

             <div>


    <Form onSubmit={handleSubmit} >

        <input type='hidden'
        name='id'
        id='id'
        value={info.id} />
     
      <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>Department Name</span>
        </Col>
        <Col md="6">
          <Input
            type="text"
            name="name"
            id="name"
            defaultValue={department}
          
            onChange={(e) => setdepartment(e.target.value)}
            placeholder="Create Department"
          />

        </Col>
      </FormGroup>
      <FormGroup row className="has-icon-left position-relative">
        <Col md="2">
          <span>Description</span>
        </Col>
        <Col md="6">
          <Input
            type="text"
            name="description"
            id="description"
            defaultValue={description}
            
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add Description"
          />

        </Col>
      </FormGroup>

      <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

      

  
 

          <Button.Ripple
            color="primary"
            type="submit"
            className="mr-1 mt-3"
           
          >
            Submit
          </Button.Ripple>

          <CustomButtonRipple
            color={"primary"}
            type={"submit"}
            className={"mr-1 mt-3"}
            name={"Submit"}
            permission={6}
          />

      </FormGroup>

    </Form>

<div>

</div>
</div>




         </CardBody>
      </Card>
            
        </div>
    );
};

export default EditDepartment;