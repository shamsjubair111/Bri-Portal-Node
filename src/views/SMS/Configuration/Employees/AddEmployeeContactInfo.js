import React, { createRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation} from 'react-router';
import Select from 'react-select';
import { useToasts } from 'react-toast-notifications';
import { Button, Form, FormGroup,  Input,  Col,  Card, CardHeader, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import get from '../../../../helpers/get';
import post from '../../../../helpers/post';
import ButtonForFunction from '../../Components/ButtonForFunction';



const EmployeeContactInfo = () => {
   
 
    const userId = localStorage.getItem('employeeId'); 

    
    const myForm = createRef();
    const history = useHistory();
    const [activetab, setActivetab] = useState('2');
    const [addressLine, setAddressLine] = useState([]);
    const [addressLineName, setAddressLineName] = useState('Select Address Type...');
    const [addressLineValue, setAddressLineValue] = useState(0);
    const [addressLineError, setAddressLineError] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [countryLabel, setCountryLabel] = useState('Select Country...');
    const [countryValue, setCountryValue] = useState(0);
    const [countryError, setCountryError] = useState('');
    const { addToast } = useToasts();
    



    const location = useLocation();

    let hiddenId;
    if(location.id){
         hiddenId = location.id;
    }else{
        hiddenId = '';
    }


 

    useEffect(()=>{
      const returnValue = get(`AddressType/GetAll`).then((action)=>{
        console.log(action)
         
        setAddressLine(action);
      })
    },[])

    useEffect(()=>{
      const returnValue = get(`Country/Index`).then((action)=>{
        setCountryList(action);
        })
    },[])

    const addressLineOpt = addressLine?.map(add => ({label: add.name, value: add.id}));
    const countryOpt = countryList?.map(c => ({label: c.name, value: c.id}));




    // submitting form
    const handleSubmit = (event) => {
        event.preventDefault();


        const subData = new FormData(event.target);
        for (var value of subData.values()) {
       
        }if(countryValue == 0){
            setCountryError('Country is required')
        }
        if(addressLineValue == 0){
            setAddressLineError('Address type is required')
        }
        else{
           
            const returnValue = post(`EmployeeContactInformation/Create`,subData).then((action)=> {
              
               
                addToast(action?.data?.message, {
                    appearance:  'success',
                    autoDismiss: true,
                  })
                  history.push('/employeeList');
            })
        }
    }


    // tab toggle
   const toggle = (tab) => {
    setActivetab(tab)
        if(tab == '1'){
            history.push(`/addEmployeeGeneralInfo`)
        }
    }


    // select Address Line
    const selectAddressLine = (label,value) => {
        setAddressLineName(label);
        setAddressLineValue(value);
        setAddressLineError('');
    }

    // select Country
    const selectCountry = (label, value) => {
        setCountryLabel(label);
        setCountryValue(value);
        setCountryError('');
    }
    // redirect to dashboard
    const backToDashboard = () => {
        history.push("/employeeList")
    }
    return (

        <div className="uapp-employee">
            <Card className='uapp-card-bg'>
              <CardHeader className="page-header">
              
                  <h3 className='text-light'>Employee Contact Information</h3>
                  <div className="page-header-back-to-home">
                    <span onClick={backToDashboard} className='text-light'> <i className="fas fa-arrow-circle-left"></i> Back to Staff List</span>
                  </div>
              
              </CardHeader>
              
            </Card>

            <Card>
                <CardBody>
                <Nav tabs>
                            <NavItem>
                                <NavLink
                                active={activetab === '1'}
                                onClick={() =>toggle('1')}
                                >
                                General Information
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                >

                                Contact Information
                                </NavLink>
                            </NavItem>
                    </Nav>

                    <TabContent activeTab={activetab}>

                        <TabPane tabId="2">
                            <Form ref={myForm} onSubmit={handleSubmit} className="mt-5">

                            <FormGroup row className="has-icon-left position-relative">
                                    <Input
                                        value={userId}
                                        type="hidden"
                                        name="employeeId"
                                        id="employeeId"
                                    />

                            </FormGroup>
                              

                            <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Phone Number <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="number"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="Your Phone Number"
                                        required
                                       />
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Cell Phone Number <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="number"
                                        name="cellPhoneNumber"
                                        id="cellPhoneNumber"
                                        placeholder="Your Cell Phone Number"
                                       />
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Address Line <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="text"
                                        name="addressLine"
                                        id="addressLine"
                                        placeholder="Your Address Line"
                                       />
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Address Type <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Select options={addressLineOpt}
                                        value={{label: addressLineName ,value: addressLineValue }}
                                        onChange={opt => selectAddressLine(opt.label, opt.value)}
                                        name="addressTypeId"
                                        id="addressTypeId"
                                        
                                    />
                                     {
                                        addressLineError && <span className="text-danger">{addressLineError}</span>
                                    }
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Country <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Select options={countryOpt}
                                        value={{label: countryLabel, value: countryValue}}
                                        onChange={opt => selectCountry(opt.label, opt.value)}
                                        name="countryId"
                                        id="countryId"

                                    />
                                    {
                                        countryError && <span className="text-danger">{countryError}</span>
                                    }
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>City <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="Your City"
                                        required
                                       />
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>State <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="text"
                                        name="state"
                                        id="state"
                                        placeholder="Your State"
                                       />
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="has-icon-left position-relative">
                                    <Col md="2">
                                    <span>Zip Code <span className="text-danger">*</span>{" "}</span>
                                    </Col>
                                    <Col md="6">
                                    <Input
                                        type="number"
                                        name="zipCode"
                                        id="zipCode"
                                        placeholder="Zip Code"
                                       />
                                    </Col>
                                </FormGroup>

                                

                                

                                <FormGroup row className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'end' }}>

                                    {/* <Button.Ripple
                                    type="submit"
                                    className="mr-1 mt-3 badge-primary"
                                    >
                                    Submit
                                    </Button.Ripple> */}

                                    <Col md="5">
                                    <ButtonForFunction
                                      type={"submit"}
                                      className={"mr-1 mt-3 badge-primary"}
                                      name={"Submit"}
                                      permission={6}
                                    />
                                    </Col>

                                </FormGroup>
                            </Form>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </div>
    )
}
const mapStatetoProps = state => ({

})
export default connect(mapStatetoProps)(EmployeeContactInfo);
