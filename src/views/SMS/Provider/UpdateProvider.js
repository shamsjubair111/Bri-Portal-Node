import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row, UncontrolledTooltip } from 'reactstrap';
import get from '../../../helpers/get';
import put from '../../../helpers/put';
import Select from 'react-select';
import ProviderLogo from './ProviderLogo';
import { useSelector } from 'react-redux';
import ButtonForFunction from '../Components/ButtonForFunction';
import { Image } from 'antd';
import { Upload, Modal } from 'antd';
import * as Icon from 'react-feather';
import { rootUrl } from '../../../constants/constants';
import { permissionList } from '../../../constants/AuthorizationConstant';


const UpdateProvider = () => {
    const {id} = useParams();
    const [providerInfo, setProviderInfo] = useState({});
    const [providerType, setProviderType] = useState([]);
    const [providerTypeLabel,setProviderTypeLabel] = useState('Select Provider type');
    const [providerTypeValue, setProviderTypeValue] = useState(0);
    const [title,setTitle] = useState('');
    const history = useHistory();
    const { addToast } = useToasts();
    const permissions = JSON.parse(localStorage.getItem("permissions"));

    const providerLogo = useSelector((state) => state?.GeneralProviderlogoFile ?.ProviderLogoFile);
    
    const backToDashboard = () => {
        history.push('/providerList');
    } 



   useEffect(()=> {
       get(`Provider/Get/${id}`)
       .then(res => {
           console.log(res);
           setProviderInfo(res);
           setProviderTypeLabel(res?.providerType?.name);
           setProviderTypeValue(res?.providerType?.id);
        

       })
   },[])

   useEffect(()=> {
    get(`ProviderType/GetAll`)
    .then(res => {
      console.log('provider type',res);
      setProviderType(res);
    })
    .catch()

},[])

const providerMenu = providerType.map(providerOptions =>({label:providerOptions.name, value:providerOptions.id}) )
   
   const selectProviderType = (label, value) => {
    setProviderTypeLabel(label);
    setProviderTypeValue(value);
   
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      const subData = new FormData(e.target);

      subData.append('providerLogo',providerLogo[0]?.originFileObj);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      for(let val of subData.values()){
          console.log(val);
      }
      put(`Provider/Update`,subData,config)
      .then(res => {
        // for (const val of subData.value()){
        //   console.log(val);
        // }
        console.log(res);
        addToast(res?.data?.message, {
            appearance:'success',
            autoDismiss: true,
          })
          history.push('/providerList');

      })
      

  }

    return (
        <div>
        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Update Provider Information</h3>
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
      <form onSubmit={handleSubmit}>


                    <input type='hidden'
                    name='id'
                    id='id'
                    value={providerInfo?.id} />

                  <FormGroup row>
                    <Col md="2">
                    <i id="nameTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Name</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="nameTooltip"

                  >
                    Your Name
                  </UncontrolledTooltip>
                   
                    
                    
                    <Col md="10" lg="6">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        onChange={(e)=>setTitle(e.target.value)}
                        required
                        defaultValue={providerInfo?.name}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="emailTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Email</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="emailTooltip"

                  >
                    Your Email
                  </UncontrolledTooltip>
                    

                

                    <Col md="10" lg="6">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                        defaultValue={providerInfo?.email}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="numberTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Phone Number</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="numberTooltip"

                  >
                    Your Phone Number
                  </UncontrolledTooltip>

                  

                    <Col md="10" lg="6">
                      <Input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Enter Your Phone Number"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                        defaultValue={providerInfo?.phoneNumber}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                   <i id="usernameTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Username</span>
                    </Col>

                    <UncontrolledTooltip
                    placement="top"
                    target="usernameTooltip"

                  >
                    Your Username
                  </UncontrolledTooltip>
                  

                    <Col md="10" lg="6">
                      <Input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Enter Your Username"
                        required
                        // onChange={(e)=>setIcon(e.target.value)}
                        defaultValue={providerInfo?.username}
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Col md="2">
                 <i id="addressLineTooltip" className="fas fa-info-circle menuIcon"></i>
                    <span className="pl-2">Address Line </span>
                  </Col>

                  <UncontrolledTooltip
                  placement="top"
                  target="addressLineTooltip"

                >
                  Address Line
                </UncontrolledTooltip>
                

                  <Col md="10" lg="6">
                    <Input
                      type="text"
                      name="addressLine"
                      id="addressLine"
                      placeholder="Enter Address Line"
                      required
                      defaultValue={providerInfo?.addressLine}
                    />

                  </Col>
                </FormGroup>

                
                 

                  <FormGroup row>
                    <Col md="2">
                    <i id="typeTooltip" className="fas fa-info-circle menuIcon"></i>
                      <span className="pl-2">Provider Type</span>
                    </Col>
                   
                    <UncontrolledTooltip
                    placement="top"
                    target="typeTooltip"

                  >
                    Your Provider Type
                  </UncontrolledTooltip>

                    <Col md="10" lg="6">
                    <Select 
                            options = {providerMenu}
                           value={{ label: providerTypeLabel, value: providerTypeValue }}
                           onChange={opt => selectProviderType(opt.label, opt.value)}
                           name="providerTypeId"
                           id="providerTypeId"
                           required
                          
                           />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Col md="2">
                  <i id="logoTooltip" className="fas fa-info-circle menuIcon"></i>
                    <span className="pl-2"> Provider Logo</span>
                  </Col>
                 
                  <UncontrolledTooltip
                  placement="top"
                  target="logoTooltip"

                >
                 Provider Logo
                </UncontrolledTooltip>

                  <Col md="10" lg="6">
                   <div className='d-flex'>
                  {
                    providerInfo?.providerLogoMedia?.thumbnailUrl !== null ?
                    <div className='me-2'>
                    <Image
                  width={104} height={104}
                  src={rootUrl+providerInfo?.providerLogoMedia?.thumbnailUrl} />
                    </div>
                    :
                    null
                  }
                  <div className='ms-2'>
                  <ProviderLogo/>
                  </div>

                   </div>

                  </Col>
                </FormGroup>

                <FormGroup row
                  className="has-icon-left position-relative"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "end",
                  }}
                  >
                  
                  <Col md="5">
                   {
                    permissions?.includes(permissionList?.Update_Provider) ?
                     <ButtonForFunction 
                     type={"submit"}
                     className={"ms-lg-3 ms-sm-1 badge-primary"}
                     name={"Submit"}
                     
                   />
                   :
                   null
                   }
                  </Col>

                </FormGroup>

                  

              </form>
              </CardBody>
              </Card>

            
        </div>
    );
};

export default UpdateProvider;