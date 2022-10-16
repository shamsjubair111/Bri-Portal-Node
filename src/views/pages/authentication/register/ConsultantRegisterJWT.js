import React, { useEffect, useState } from "react"
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap"
import Checkbox from "../../../../components/core/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"
import axios from "axios"
import { rootUrl } from "../../../ReusableFunction/Api/ApiFunc"
import { store } from "react-notifications-component"
import { Link } from "react-router-dom"
import get from "../../../../helpers/get"
import Select from 'react-select';

const  ConsultantRegisterJWT = () => {


  // const [title, settitle] = useState([]);
  const [titleLabel,setTitleLabel] = useState('Select Title');
  const [titleValue, setTitleValue] = useState(0);

  const [consultant, setConsultant] = useState([]);
  const [consultantLabel, setConsultantLabel] = useState('Select Consultant Type');
  const [consultantValue, setConsultantValue] = useState(0);

  const [type,setType] = useState('');
  const [title,setTitle] = useState('');

  useEffect(()=>{

    // get('NameTittleDD/index')
    // .then(res => {
     
    //   settitle(res);

    // })

    // get('ConsultantTypeDD/index')
    // .then(res => {
    //   setConsultant(res);
    // })

  },[])



  // const  titleOptions = title?.map((tl) => ({
  //   label: tl?.name,
  //   value: tl?.id,
  // }));

  // const  consultantOptions = consultant?.map((con) => ({
  //   label: con?.name,
  //   value: con?.id,
  // }));


   const selectTitle = (label, value) => {
    setTitleLabel(label);
    setTitleValue(value);
  };

   const selectConsultant = (label, value) => {
    setConsultantLabel(label);
    setConsultantValue(value);
  };


  const handleDisability = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
}

  const handleTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
}
  


 const  handleRegister = (e) => {
   
  

  }
  


    return (

      <>

      
      <Form  onSubmit={handleRegister}>

      <input
      type='hidden'
      name='parentConsultantId'
      id='parentConsultantId'
      value='1'
      />

      {/* <FormGroup className="form-label-group">
      <Select
      options={consultantOptions}
     value={{ label: consultantLabel, value: consultantValue }}
     onChange={(opt) => selectConsultant(opt.label, opt.value)}
       
        name="CampusCountryId"
        id="CampusCountryId"
      />
      
      </FormGroup> */}


<FormGroup row className="has-icon-left position-relative">
          <Col md="3">
            <span style={{fontWeight: '500'}}>
              Consultant Type
            </span>
          </Col>
          <Col md="8">

          
          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveDisability" onChange={handleDisability} name="isHaveDisability" value='1' checked={type == '1'} />
          <Label className="form-check-label" check htmlFor="isHaveDisability" >Employee</Label>

          </FormGroup>

          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveDisability" onChange={handleDisability} name="isHaveDisability" value='2' checked={type == '2'} />
          <Label className="form-check-label" check htmlFor="isHaveDisability">Freelancer</Label>

          </FormGroup>
          
          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveDisability" onChange={handleDisability} name="isHaveDisability" value='3' checked={type == '3'} />
          <Label className="form-check-label" check htmlFor="isHaveDisability">International</Label>

          </FormGroup>

          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="isHaveDisability" onChange={handleDisability} name="isHaveDisability" value='3' checked={type == '3'} />
          <Label className="form-check-label" check htmlFor="isHaveDisability">Student</Label>

          </FormGroup>



          
          </Col>
        </FormGroup>

      {/* <FormGroup className="form-label-group">
      <Select
      options={titleOptions}
     value={{ label: titleLabel, value: titleValue }}
     onChange={(opt) => selectTitle(opt.label, opt.value)}
       
        name="CampusCountryId"
        id="CampusCountryId"
      />
      
      
      </FormGroup> */}


        <FormGroup row className="has-icon-left position-relative">
          <Col md="3">
            <span style={{fontWeight: '500'}}>
             Title
            </span>
          </Col>
          <Col md="6">

          
          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="title" onChange={handleTitle} name="title" value='1' checked={title == '1'} />
          <Label className="form-check-label" check htmlFor="title" >Mr.</Label>

          </FormGroup>

          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="title" onChange={handleTitle} name="title" value='2' checked={title == '2'} />
          <Label className="form-check-label" check htmlFor="title">Miss</Label>

          </FormGroup>
          
          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="title" onChange={handleTitle} name="title" value='3' checked={title == '3'} />
          <Label className="form-check-label" check htmlFor="title">Ms.</Label>

          </FormGroup>

          <FormGroup check inline>
          <Input className="form-check-input" type="radio" id="title" onChange={handleTitle} name="title" value='4' checked={title == '4'} />
          <Label className="form-check-label" check htmlFor="title">Mrs.</Label>

          </FormGroup>



          
          </Col>
        </FormGroup>

        <div className="row gx-0">

            <div className="col-md-6">
            <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="First Name"
            required
            
        
          />
        
        </FormGroup>

            </div>

            <div className="col-md-6">
            <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Last Name"
            required
           
          
          />
      
        </FormGroup>

            </div>


        </div>
        
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
          
          />
        
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="number"
            placeholder="Phone Number"
            required
           
          />
       
        </FormGroup>
        
      
        <div className="d-flex justify-content-end">

        
       

       <div>
       <Button className="" color="primary" type="submit">
       Register
     </Button>
       </div>

          
        </div>
      </Form>

      <div className="text-center mt-3">
      <Link to="/" style={{ textDecoration: 'none'}}>I am Already Registered</Link>
      </div>

     
      </>
    )
  }

const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(ConsultantRegisterJWT)
