import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, Table, Form, FormGroup } from 'reactstrap';
import get from '../../../helpers/get';
import Select from "react-select";
import { rootUrl } from '../../../constants/constants';
// import Pagination from "../../SMS/Pagination/Pagination.jsx";


// const userData = [{name: "Jubair", id:6, isChecked:false}, {name: "Rahul", id:2, isChecked:true}, {name: "Abir", id:3, isChecked:false}, {name: "Nahid", id:4, isChecked:true}];

const UniversityDetails = () => {
    const location = useLocation();
    const {id} = useParams();
    const [universityInfo, setUniversityInfo] = useState({});
    const [financialInfo, setFinancialInfo] = useState({});
    const [universityFeatures, setUniversityFeatures] = useState({});

    // for fake data
    // const [users, setUsers] = useState([]);

    // for intake filter
    const [intakeData, setIntakeData] = useState([]);
    const [intakeStatusData, setIntakeStatusData] = useState([]);
    const [intakeLabel, setIntakeLabel] = useState("Intake");
    const [intakeValue, setIntakeValue] = useState(0);
    const [statusLabel, setStatusLabel] = useState("Status");
    const [statusValue, setStatusValue] = useState(0);

    // subject list
    const [subList, setSubList] = useState([]);
    const [menus, setMenus] = useState([]);
    let [checked, setChecked] = useState([]);


    console.log(location);

  // for showing campus list
    const [campusList, setCampusList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [searchStr, setSearchStr] = useState("");
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(1);
    // end here

    const history = useHistory();

    useEffect(()=>{
        // const uCountryId = 0;
        // const uStateId = 0;
        // const uTypeId = 0;
        // const providerId = 0;
       
          get(`University/Get/${id}`)
          .then(res => {
              setUniversityInfo(res);
              console.log('University Information',res);
          });

          // get(
          //   `UniversityCampus/index?page=${currentPage}&pageSize${dataPerPage}&universityId=${id}&search=${searchStr}`
          // ).then((res) => {
          //   setCampusList(res.models);
          //   setSerialNum(res?.firstSerialNumber);
          //   // setEntity(res?.totalEntity);
          //   setLoading(false);
  
          //   console.log('aaaaaa',res);
          // });

          // for getting university campus list
          get(`UniversityCampus/GetByUniversity/${id}`).then(res =>{
            setCampusList(res);
            setLoading(false);
        })

          // for getting financial information
          get(`FinancialInformation/GetByUniversity/${id}`)
          .then(res => {
            console.log('fin Info',res);
            setFinancialInfo(res); 
          });

            // for getting Features
            get(`UniversityFeatures/GetByUniversity/${id}`)
            .then(res => {
              setUniversityFeatures(res);
              // console.log(res);
            });

          // for intake
          get('Intake/Index').then(res=>{
            setIntakeData(res);
          })

          get('IntakeStatus/GetAll').then(res=>{
            setIntakeStatusData(res);
          })

          // Subject get by university
          get(`Subject/GetByUniversity/${id}`).then(res=>{
            setSubList(res);
            console.log("Sublist",res);
            // setSubList(res);
          })

          // for fake data
          // setUsers(userData);
  
      },[id, callApi, currentPage, dataPerPage, searchStr])

    const backToDashboard = () =>{
        history.push('/universityList');
    }

    const intakeDropDown = intakeData?.map((intake) => ({
      label: intake?.name,
      value: intake?.id,
    }));

    const intakeStatusDropDown = intakeStatusData?.map((status) => ({
      label: status?.name,
      value: status?.id,
    }));

    const selectIntakeType = (label, value) => {
      setIntakeLabel(label);
      setIntakeValue(value);
      // handleSearch();
    };

    const selectStatusType = (label, value) => {
      setStatusLabel(label);
      setStatusValue(value);
      // handleSearch();
    };

    // on clear
  const handleClearSearch = () => {
    setIntakeLabel(" Intake...");
    setIntakeValue(0);
    setStatusLabel(" Status...");
    setStatusValue(0);
    // setCallApi((prev) => !prev);
  };


  // const selectSubjectName = (action) => {
  //   setMenus([]);
  //   checked = [];
    
  //     console.log("Action",action);
  //     setMenus(action);

  //     let defaultChecked = checked;
  //     if (action.length > 0) {
  //       for (let i = 0; i < action.length; i++) {
  //         const menu = action[i];
  //         if (menu.isChecked === true) {
  //           const id = menu.id.toString();
  //           defaultChecked.push(id);
  //           setChecked([...defaultChecked]);
  //         }
  //       }
  //     }
  //     console.log(menus);
  
  // };

         // on Select All Checkbox
         const handleSelectAll = (e) => {
          let newChecked = [];
          const val = e.target.checked;
          console.log("menus",menus);
          if (val === true) {
            menus.map((menu) => {
              const menuId = menu.id.toString();
              newChecked.push(menuId);
              document.getElementById(menu.id).checked = true;
            });
            setChecked([...newChecked]);
            console.log("selectChecked",checked);

          }
          else{
            setChecked([...checked]);
          }
          // else if(val === false){
          //   eslint-disable-next-line no-lone-blocks
          //   {
          //         menus.map((menu) => {
          //           document.getElementById(menu.id).checked = false;
          //         });
          //         setChecked([]);
          //       }
          // }
          // if (val === false) {
          //   {
          //     menus.map((menu) => {
          //       document.getElementById(menu.id).checked = false;
          //     });
          //     setChecked([]);
          //   }
          // }
        };


        // on De Select all
         const handleDeselectAll = (e) =>{
           const val = e.target.checked;
           console.log("val1",val);
           if(val === true){
               // eslint-disable-next-line no-lone-blocks
               {
                     menus.map((menu) => {
                       document.getElementById(menu.id).checked = false;
                     });
                     setChecked([]);
                   }
             }
             else{
               setChecked([...checked]);
             }
             console.log("deSelectChecked",checked);
           
         }



        // handling checkbox
      const handleCheck = (e) => {
        let id = e.target.id;
        let val = e.target.checked;
    
        console.log("check id",id);
        console.log("checked", checked);

        if (val === true) {
          setChecked([...checked, id]);
        } else {
          // setChecked([]);
          const index = checked.indexOf(id);
          if (index > -1) {
            checked.splice(index, 1);
            setChecked([...checked]);
          }
        }
      };



      const handleChange = e =>{
        const {name, checked} = e.target;
        if(name === "allSelect"){
          let tmpUsers = subList.map(sub=> {return {...sub, isChecked: checked}});
          setSubList(tmpUsers);
          console.log("selectAll",tmpUsers);
        }
        else if(name === "allDeselect"){
          let tmpUsers = subList.map(sub=> {return {...sub, isChecked: !checked}});
          setSubList(tmpUsers);
          console.log("dselectAll", tmpUsers);
        }
        else{
          let tmpUsers = subList.map(sub=> sub.name === name ? {...sub, isChecked: checked} : sub);
          setSubList(tmpUsers);
          console.log("singleSelect", tmpUsers);
        }
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        const subdata = new FormData(e.target);

        for (var value of subdata.values()) { 
          console.log("values",value);
         }


      }

      const tableStyle = {
        overflowX: 'scroll',
      };

   
    
    return (
    <div>
            <Card className="uapp-card-bg">
        <CardHeader className="page-header">

          <h3 className="text-light">University Details</h3>
          <div className="page-header-back-to-home" >
            <span onClick={backToDashboard} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to University List</span>
          </div>

          </CardHeader>
        </Card>

      <div className="uapp-employee-profile">

        {/* <Row>
          <Col md="12"> 
           <Card className="uapp-employee-profile-right" >
             <div className="uapp-profile-CardHeader" style={{ backgroundImage:`url(${rootUrl+universityInfo?.universityLogo?.fileUrl})`}}>
                <div className="uapp-circle-image margin-top-minus">
                  <img src={rootUrl+universityInfo?.universityLogo?.fileUrl} alt='university_image' />
                </div>    
                
                <h5> {universityInfo?.name}</h5>
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
        </Row> */}



        <Row>

          <Col md='8'>

          <Card>
                <CardBody>
                    <div className="uapp-employee-cover-image">
                      <div className="bg-image">   
                      <div className="uplode-cover-image">
                        <img src={rootUrl+universityInfo?.coverPhoto?.fileUrl} alt='cover_img'/>
                        </div>               
                    </div>
                  </div>



                  <div className="uapp-employee-profile-image-edit">
                    <Row>
                      <Col> 
                    <div className="uapp-employee-profile-image">
                    <div className="text-left">
                       <img className="empProfileImg" src={rootUrl+universityInfo?.universityLogo?.fileUrl} alt='profile_img'/>
                    </div>
                    </div>  
                    </Col>

                    <Col> 
                    <div className="uapp-employee-profile-Edit">
                    <div className="text-right">
                      <span> <i className="fas fa-pencil-alt"></i> </span>
                    </div>
                    </div>  

                        </Col> 
                    </Row>            
                   </div>     


                      <div className="uapp-employee-profile-generalInfo"> 
                       <Row>
                         <Col md="6"> 

                          <ul className="uapp-ul text-left">
                            <li> 
                              <h4>{universityInfo?.name} ({universityInfo?.shortName})</h4>
                            </li>

                             <li> 
                              {/* <h6>{employeeType.name}</h6> */}
                            </li>


                          </ul>

                      </Col> 

                      <Col md="6"> 
                     <ul className="uapp-ul text-right1">
                            <li> 
                              <span> Foundation year : {universityInfo?.foundationYear}</span>
                            </li>

                            <li> 
                              <span> Global rank : {universityInfo?.globalRankNumber}</span>
                            </li>

                          </ul>
                      </Col> 
                    </Row> 
                    </div> 
                  </CardBody>
                </Card>

                <div className=" info-item mt-4">
                  <Card>  
                   <CardBody>
                    <div className="hedding-titel d-flex justify-content-between">
                    <div>
                    <h5> <b>Description</b> </h5>
                     
                    <div className="bg-h"></div>
                    </div>
                    {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}

                    </div>
                    <div>
                      <p className='pt-2'>{universityInfo?.description}</p>
                    </div>
                   </CardBody>
                  </Card>
                </div>

                {/* university information starts here */}
                <div className=" info-item mt-4">
              <Card>  
                 <CardBody>
                 <div className="hedding-titel d-flex justify-content-between">
                 <div>
                 <h5> <b>General Information</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div>

                 </div>
                      <Table className="table-bordered mt-4" >
                      <tbody>
                        
                        <tr>
                          <td width="40%">
                            <b>Name:</b>
                          </td>

                          <td width="60%">
                            {universityInfo?.name} ({universityInfo?.shortName})
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Type:</b>
                          </td>

                          <td width="60%">
                            {universityInfo?.universityType?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Country:</b>
                          </td>

                          <td width="60%">
                            {universityInfo?.universityCountry?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>City:</b>
                          </td>

                          <td width="60%">
                            {universityInfo?.universityCity}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>State:</b>
                          </td>

                          <td width="60%">
                            {universityInfo?.universityState?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Global Rank:</b>
                          </td>

                          <td width="60%">
                            {universityInfo?.globalRankNumber}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Foundation Year:</b>
                          </td>

                          <td width="60%">
                            {universityInfo?.foundationYear}
                          </td>
                        </tr>

                        
                        </tbody>
                      </Table>
                 </CardBody>
              </Card>
          </div>
                {/* university information ends here */}
            
            {/* camp list start */}
            <div className=" info-item mt-4">
            <Card>  
                 <CardBody>
                 <div className="hedding-titel d-flex justify-content-between">
                 <div>
                 <h5> <b>Campus List</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>
                  {loading ? (
                      <h2 className="text-center">Loading...</h2>
                    ) :
                    <div className="table-responsive pt-3">
                    <Table className="table-sm striped" style={tableStyle}>
                      <thead className="">
                        <tr style={{ textAlign: "center" }}>
                          <th scope='row'>#</th>
                          <th>Name</th> 
                          <th>City</th>
                          <th>Student</th>
                          {/* <th>Cost</th> */}
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                        </tr>
                      </thead>
                      <tbody>
                        {campusList?.map((campus, i) => (
                          <tr key={i} style={{ textAlign: "center" }}>
                            <th scope='row'>{serialNum + i}</th>
                            
                            <td>
                              {campus?.name}
                            </td>
                            <td>
                              {campus?.campusCity}
                            </td>
                            <td>
                              Total Student = {campus?.totalStudent} {<br />}
                              International Student = {campus?.internationalStudent}
                            </td>
                            {/* <td>{campus?.internationalStudent}</td> */}

                            {/* <td>
                              Avg. Tution Fee = {campus?.avarageTutionFee} {<br />}
                              Avg. Living Cost = {campus?.avarageLivingCost} {<br />}
                              Avg. Application Fee = {campus?.avarageApplicationFee} {<br />}
                              Est. Total Cost = {campus?.estimatedTotalCost}
                            </td> */}
                            
                            <td style={{ width: "8%" }} className="text-center">
                              <ButtonGroup variant="text">
                              <Link to= {`/campusDetails/${campus?.id}`}>
                                <Button color="primary" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-eye"></i>{" "}
                                </Button>
                                </Link>
                                <Button color="dark" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-edit"></i>{" "}
                                </Button>
                                <Button color="danger" className="mx-1 btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
              

                    </div>
                    }
                 </CardBody>
              </Card>
          </div>
            {/* camp list end */}


            {/* all subject starts here */}
            <div className=" info-item mt-4">
            <Card>  
                 <CardBody>
                 <div className="hedding-titel d-flex justify-content-between">
                 <div>
                 <h5> <b>Subject List</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>
                  {loading ? (
                      <h2 className="text-center">Loading...</h2>
                    ) :
                    <div className="table-responsive pt-3">
                    <Table className="table-sm striped" style={tableStyle}>
                      <thead className="">
                        <tr style={{ textAlign: "center" }}>
                          <th scope='row'>#</th>
                          <th>Subject Name</th>
                          <th>Program Level</th>
                          <th>Department</th>
                          <th>Sub Department</th>
                          <th style={{ width: "8%" }} className="text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {subList?.map((sub, i) => (
                          <tr key={i} style={{ textAlign: "center" }}>
                            <th scope='row'>{serialNum + i}</th>
                            
                            <td>
                        {sub?.name}
                      </td>

                      <td>
                        {sub?.programLevel?.name}
                      </td>

                      <td>
                        {sub?.department?.name}
                      </td>

                      <td>
                        {sub?.subDepartment?.departmentinfo?.name}
                      </td>
                            
                            <td style={{ width: "8%" }} className="text-center">
                              <ButtonGroup variant="text">
                              <Link to= {`/campusDetails/${sub?.id}`}>
                                <Button color="primary" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-eye"></i>{" "}
                                </Button>
                                </Link>
                                {/* <Button color="dark" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-edit"></i>{" "}
                                </Button>
                                <Button color="danger" className="mx-1 btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </Button> */}
                              </ButtonGroup>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
              

                    </div>
                    }
                 </CardBody>
              </Card>
          </div>
            {/* all subject ends here */}
            
          

      {/* intake filter */}
      
      <Card className="uapp-employee-search mt-4">
            <CardBody className="search-card-body ms-3">

            <div className="hedding-titel d-flex justify-content-between mb-4 mt-3">
                 <div>
                 <h5> <b>Subject Intake</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>

              <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Row>
                  <Col lg="5" md="4" sm="6" xs="6">
                    <Select
                      options={intakeDropDown}
                      value={{ label: intakeLabel, value: intakeValue }}
                      onChange={(opt) => selectIntakeType(opt.label, opt.value)}
                      name="UniversityTypeId"
                      id="UniversityTypeId"
                    />
                  </Col>
          
                  <Col lg="5" md="4" sm="6" xs="6">
                    <Select
                      options={intakeStatusDropDown}
                      value={{ label: statusLabel, value: statusValue }}
                      onChange={(opt) => selectStatusType(opt.label, opt.value)}
                      name="UniversityCountryId"
                      id="UniversityCountryId"
                    />
                  </Col>
          
                  <Col lg="2" md="4" sm="6" xs="6">
                    {/* <div className='d-flex justify-content-center'> */}
                      <Button type="submit" className='btn btn-uapp-add btn btn-secondary'>Apply</Button>
                    {/* </div> */}
                    
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                  <Row className="">
                    <Col lg="12" md="12" sm="12" xs="12">
                      <div style={{ display: "flex", justifyContent: "end" }}>
                        <div
                          className="mt-1 mx-1 d-flex btn-clear"
                          onClick={handleClearSearch}
                        >
                          {/* <Icon.X  className='text-danger' />*/}
                          <span className="text-danger">
                            <i className="fa fa-times"></i> Clear
                          </span>
                        </div>

                        {/* <div className="mt-2 mx-1">
                        <span className="btn btn-primary">Export</span>
                      </div> */}
                      </div>
                    </Col>
                </Row>
              </FormGroup>

              {/* <Card>
                  <CardHeader className="page-header">
                  <CardHeader>Select Subject</CardHeader>
                  </CardHeader>
              </Card> */}
              
                        <Input
                        type='hidden'
                        name='universityId'
                        id='universityId'
                        value={id}
                        
                        />

                      <FormGroup>
                        <Row>
                          <Col sm="6" className='text-center'>
                            {/* {menus.length > 0 && (
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  onChange={(e) => handleSelectAll(e)}
                                  type="checkbox"
                                  name="allSelect"
                                  id="allSelect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  Select All
                                </label>
                              </div>
                            )} */}
                          
                          <div className="form-check">
                                <input
                                  className="form-check-input"
                                  onChange={handleChange}
                                  type="checkbox"
                                  checked={subList.filter(sub=> sub?.isChecked !== true).length < 1}
                                  disabled={subList.filter(sub=> sub?.isChecked !== true).length < 1}
                                  name="allSelect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  <b>Select all</b>
                                </label>
                              </div>

                          </Col>

                          <Col sm="6" className='text-center'>
                            {/* {menus.length > 0 && (
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  onChange={(e) => handleDeselectAll(e)}
                                  type="checkbox"
                                  name="allDeselect"
                                  id="allDeselect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  Deselect All
                                </label>
                              </div>
                            )} */}

                              <div className="form-check ms-auto">
                                <input
                                  className="form-check-input"
                                  onChange={handleChange}
                                  type="checkbox"
                                  checked={subList.filter(sub=> sub?.isChecked !== false).length < 1}
                                  disabled={subList.filter(sub=> sub?.isChecked !== false).length < 1}
                                  name="allDeselect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  <b>Deselect all</b>
                                </label>
                              </div>


                          </Col>
                          <br />
                          <br />
                          {/* {
                            menus?.map((menu) => (
                              <Col xs="6" sm="4" md="3" key={menu.id}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={(e) => handleCheck(e)}
                                    name={menu.id}
                                    id={menu.id}
                                    defaultChecked={menu.checked}
                                    value={menu?.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor=""
                                  >
                                    {menu.name}
                                  </label>
                                </div>
                              </Col>
                            ))} */}

                          {
                            subList?.map((sub,i) => (
                              <Col xs="6" sm="4" md="3" key={i} className="text-center">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={handleChange}
                                    name={sub.name}
                                    checked={sub?.isChecked || false}
                                    // defaultChecked={user?.checked}
                                    // tmpUsers={user?.checked}
                                    value={sub?.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor=""
                                  >
                                    {sub.name}
                                  </label>
                                </div>
                              </Col>
                            ))}


                        </Row>
                      </FormGroup>

                      {/* <FormGroup
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Row>
                          <Col>
                            <Button.Ripple
                              type="submit"
                              className="mr-1 mt-3 badge-primary"
                            >
                              Submit
                            </Button.Ripple>
                          </Col>
                        </Row>
                      </FormGroup> */}




              </Form>


            </CardBody>
      </Card>

      <br /><br /><br />
      <br /><br /><br />


      </Col>

      


          <Col md='4'>

          {/* For showing financial cost */}
          
              <Card>
                <CardBody>

                <div className="hedding-titel d-flex justify-content-between mb-4">
                 <div>
                 <h5> <b>Financial Cost</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Avarage Tution Fee</span>
                    <p>{financialInfo?.avarageTutionFee}</p>
                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Avarage Application Fee</span>
                    <p>{financialInfo?.avarageApplicationFee}</p>
                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Avarage Living Cost</span>
                    <p>{financialInfo?.avarageLivingCost}</p>
                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Estimated Total Cost</span>
                    <p>{financialInfo?.estimatedTotalCost}</p>
                 </div>

              

                </CardBody>
              </Card>
              {/* financial cost end here */}

              {/* features */}
              
              <Card>
                <CardBody>

                <div className="hedding-titel d-flex justify-content-between mb-4">
                 <div>
                 <h5> <b>Features</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>

                <div className='d-flex justify-content-between'>
                 <span>Accommodations</span>
                    <p>{universityFeatures?.accommodations === false ? <i className=" danger fas fa-times-circle"></i> : <i className="success fas fa-check-circle"></i>}</p>
                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Conditional Offer Letter</span>
                    <p>{universityFeatures?.conditionalOfferLetter === false ? <i className=" danger fas fa-times-circle"></i> : <i className="success fas fa-check-circle"></i>}</p>
                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Intership Participation</span>
                    <p>{universityFeatures?.intershipParticipation === false ? <i className=" danger fas fa-times-circle"></i> : <i className="success fas fa-check-circle"></i>}</p>
                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Practical Training</span>
                    <p>{universityFeatures?.practicalTraining === false ? <i className=" danger fas fa-times-circle"></i> : <i className="success fas fa-check-circle"></i>}</p>
                 </div>

                 <div className='d-flex justify-content-between'>
                 <span>Work While Studying</span>
                    <p>{universityFeatures?.workWhileStudying === false ? <i className=" danger fas fa-times-circle"></i> : <i className="success fas fa-check-circle"></i>}</p>
                 </div>

              
                </CardBody>
              </Card>


          </Col>

        </Row>
      </div>


            
        </div>
    );
};

export default UniversityDetails;