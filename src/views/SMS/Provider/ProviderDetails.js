import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Pagination from '../../SMS/Pagination/Pagination.jsx'
import {  Button, Card, CardBody, CardHeader, Col,  Modal,  ModalBody,  ModalFooter,  Row, Table } from 'reactstrap';
import { rootUrl } from '../../../constants/constants';
import get from '../../../helpers/get';
import remove from '../../../helpers/remove.js'
import { useToasts } from 'react-toast-notifications';



const ProviderDetails = () => {

    const {id} = useParams();
    localStorage.setItem('providerId',id);
    // console.log(id);
    const [providerInfo, setProviderInfo] = useState({});
    const [universityList, setUniversityList ] = useState([]);
    const [providerId, setProviderId] = useState(0);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [deleteModal, setDeleteModal] = useState(false);
    const {addToast} = useToasts();
    // console.log(id);


   
    const [entity, setEntity] = useState(0);
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [searchStr, setSearchStr] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [stateList, setstateList] = useState([0]);
 

    const [providerList, setProviderList] = useState([]);
    const [proId, setProId] = useState();
  
  
  
    const [uniTypeLabel, setUniTypeLabel] = useState('Select University Type...');
    const [uniTypeValue, setUniTypeValue] = useState(0);
    const [uniCountryLabel, setUniCountryLabel] = useState('Select University Country...');
    const [uniCountryValue, setUniCountryValue] = useState(0);
    const [uniStateLabel, setUniStateLabel] = useState('Select University State...');
    const [unistateValue, setUniStateValue] = useState(0);
    const [providerLabel, setProviderLabel] = useState('Select Provider...');
    const [providerValue, setProviderValue] = useState(0);
    const [admissionManager, setAdmissionManager] = useState([]);

    useEffect(()=>{
      const uCountryId = 0;
      const uStateId = 0;
      const uTypeId = 0;
    
     
        get(`Provider/Get/${id}`)
        .then(res => {
            // console.log(res);
            setProviderInfo(res);
            setProId(res?.providertype?.id);
            // console.log(res?.providerType?.id);

            
          
        })
        get(`University/Index?page=${currentPage}&pagesize=${dataPerPage}&providerId=${id}&universityCountryId=${uCountryId ? uCountryId : uniCountryValue}&universityStateId=${uStateId ? uStateId : unistateValue}&universityTypeId=${uTypeId ? uTypeId : uniTypeValue}&search=${searchStr}`).then((action) => {
          setUniversityList(action?.models);
          // console.log('aaaaaa',action?.models);
          // console.log(searchStr);
          setLoading(false)
          setEntity(action?.totalEntity);
          setSerialNum(action?.firstSerialNumber)
        })

        get(`AdmissionManager/Index`)
     
        .then(res => {
          console.log(res);
          setAdmissionManager(res)
        })

    },[currentPage, dataPerPage, searchStr, uniCountryValue, uniTypeValue, unistateValue, id])

    const history = useHistory();

    const backToDashboard = () =>{
        history.push('/providerList');
    }

      //  change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const toggleDelete = (id) => {
    localStorage.setItem("teamId", id);
    setDeleteModal(true);
  };

  const handleDelete = (id) => {
   remove(`AdmissionManager/Delete/${id}`)
   .then(res => {
   
     addToast(res?.data?.message,{
       appearance: 'error',
       autoDismiss: true
     })
     setDeleteModal(false);
     history.push('/providerList');

   })
  }

  const updateAdmissionManager = (id) => {
      history.push(`/updateAdmissionManager/${id}`);
  }

    return (
        <div>
            <Card className="uapp-card-bg">
        <CardHeader className="page-header">

          <h3 className="text-light">Provider Details</h3>
          <div className="page-header-back-to-home" >
            <span onClick={backToDashboard} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to Provider List</span>
          </div>

        </CardHeader>
      </Card>

      <div className="uapp-employee-profile">
        <Row>

        



          <Col md="12"> 
           <Card className="uapp-employee-profile-right">
             <div className="uapp-profile-CardHeader">
                <div className="uapp-circle-image margin-top-minus">
                  <img  alt='provider_image' />
                </div>    
                
                <h5> {providerInfo?.name}</h5>
                 <p> {providerInfo?.providerType?.name} </p>  
            </div>
              <CardBody>

                 <div>
                 <ul className="uapp-ul text-center">
                     <li> {providerInfo?.email} </li>
                     <li> {providerInfo?.phoneNumber} </li>
                   
                   </ul>
                 </div>

            </CardBody>
        </Card>

          
          </Col>
        </Row>
        <Row>

          <Col md='8'>

        <Card>

        <div className="table-responsive container mt-3">
                <Table className="table-sm table-bordered" >
                  <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                   
                      <th>Logo</th>                    
                      <th>Name</th>                    
                      <th>Type</th>                    
                    
                   
                    </tr>
                  </thead>
                  <tbody>

                    {
                      universityList?.map((university, i) => <tr key={university.id} style={{ textAlign: "center" }}>
                        
                        <td> <img className="Uapp-c-image" src={`${rootUrl}/${university.universityLogo.fileUrl?.slice(2, university.universityLogo.fileUrl.length)}`} /> </td>
                        <td>{university.name} ({university.shortName })</td>
                        <td>{university.universityType.name}</td>
                       
                       
                      </tr>)

                    }


                  </tbody>
                </Table>

                <Pagination dataPerPage={dataPerPage} totalData={entity} paginate={paginate} currentPage={currentPage} />
              </div>   
                  

        </Card>

        <Card className="p-3">

<h6> Admission Manager</h6>
<span className="bg-wg bg-width"></span>

{
  admissionManager.length <1 && 
 <Link to={`/addAdmissionManager/${id}`}>
  <Button  className="btn btn-uapp-add mt-2 "> <i class="fas fa-plus"></i>  Add Admission Manager </Button>
 </Link>
}

{
  admissionManager.length< 1 && 
  <h5 className="text-center mt-3 mb-4">Admission Manager Not Found.</h5> 
}
{

admissionManager.length> 0 && 
<div className="table-responsive container mt-3">
                <Table className="table-sm table-bordered" >
                  <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                   
                      <th>Name</th>                    
                      <th>Email</th>                    
                      <th>Action</th>                    
                   
                    </tr>
                  </thead>
                  <tbody>

                    {
                      admissionManager?.map((manager, i) => <tr key={manager.id} style={{ textAlign: "center" }}>
                        
                      
                        <td><span className='me-1'>{manager?.firstName}</span>{manager?.lastName}</td>
                        <td>{manager?.email}</td>
                        <td>
                          
                            
                                {" "}
                                <i class="fas fa-edit warning icon-hover-style"
                                onClick={()=>updateAdmissionManager(manager?.id)}
                               
                                ></i>{" "}
                             

                             
                                <i class="fas fa-trash-alt text-danger icon-hover-style"
                                 onClick={() => toggleDelete(manager?.id)}
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
                                  onClick={() => handleDelete(manager
                                    ?.id)}
                                >
                                  YES
                                </Button>
                                <Button onClick={closeDeleteModal}>NO</Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                       
                       
                      </tr>)

                    }


                  </tbody>
                </Table>

              
              </div>   

                  }


</Card>




          </Col>


          <Col md='4'>
          <Card className="p-3">

<h6> Notice</h6>
<span className="bg-wg bg-width"></span>


  <div className="notice-item card-widget mt-3 ">
    <div className="notice-titel">
      <h6> Super Admin</h6>
      <span> 10/12/2021</span>
      </div>
       <div className="notice-description"> 
           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
           <div className="uapp-read-more-btn">
            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
          </div>
      </div>
  </div>


  <div className="notice-item card-widget mt-3 ">
    <div className="notice-titel">
      <h6> Super Admin</h6>
      <span> 10/12/2021</span>
      </div>
       <div className="notice-description"> 
           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
           <div className="uapp-read-more-btn">
            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
          </div>
      </div>
  </div>



  <div className="notice-item card-widget mt-3 ">
    <div className="notice-titel">
      <h6> Super Admin</h6>
      <span> 10/12/2021</span>
      </div>
       <div className="notice-description"> 
          
           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
           <div className="uapp-read-more-btn">
            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
          </div>
      </div>
  </div>


  <div className="notice-item card-widget mt-3 ">
    <div className="notice-titel">
      <h6> Super Admin</h6>
      <span> 10/12/2021</span>
      </div>
       <div className="notice-description"> 
           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
          <div className="uapp-read-more-btn">
            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
          </div>
         
      </div>
  </div>

  

</Card>

          
          </Col>

        </Row>
      </div>


            
        </div>
    );
};

export default ProviderDetails;