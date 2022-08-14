import Axios from 'axios';
import React, { useEffect, useState } from 'react';
// import 'react-dropzone-uploader/dist/styles.css'
import { connect, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
// import post from '../../../helpers/post';
import { rootUrl } from "../../../constants/constants";
import MediaPictures from './UniversityMedia';
import { useHistory } from 'react-router-dom';
import ButtonForFunction from '../Components/ButtonForFunction';
import CustomButtonRipple from '../Components/CustomButtonRipple';
import get from '../../../helpers/get';

const AddUniversityGallery = () => {

  const [activetab, setActivetab] = useState('5');


  const { addToast } = useToasts();
  const history = useHistory();

    const galleryResult = useSelector((state)=> state.UniversityGalleryImageReducer.universityGalleryImage);
    // console.log(galleryResult);

    const handleUpload = (event) =>{
        event.preventDefault();
        const subdata = new FormData(event.target);

        for(let i = 0; i < galleryResult.length; i++){
          subdata.append(`mediaFile`, galleryResult[i]?.originFileObj);
        }

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        Axios.post(`${rootUrl}UniversityGallery/Create`, subdata, config).then(res => {
          addToast(res.data.message, {
            appearance: 'success',
            autoDismiss: true,
          })
          history.push("/addUniversityApplicationDocument");
        });

        // for (var value of subdata.values()) {
        //     console.log(value);
        // }

    }

    useEffect(()=>{
      get(`UniversityGallery/GetByUniversity/${localStorage.getItem("id")}`)
      .then(res => {
        console.log('gallery', res);
      })
    },[])

    const backToUniList = () => {
      history.push("/universityList");
      }


      const toggle = (tab) => {
        setActivetab(tab);
        if (tab == '1') {
          history.push('/addUniversity')
        }
        if (tab == "2") {
          history.push("/addUniversityCampus");
        }
        if (tab == "3") {
          history.push("/addUniversityFinancial");
        }
        if (tab == "4") {
          history.push("/addUniversityFeatures");
        }
        if (tab == "5") {
          history.push("/addUniversityGallery");
        }
        if (tab == "6") {
          history.push("/addUniversityApplicationDocument");
        }
        if (tab == "7") {
          history.push("/addUniversityTemplateDocument");
        }
        if (tab == "8") {
          history.push("/addUniversityRequiredDocument");
        }
      };

    return (
        <div>


          <Card className='uapp-card-bg'>
              <CardHeader className="page-header">              
                <h3 className="text-light">University Gallery</h3>
                  <div className="page-header-back-to-home">
                  <span onClick={backToUniList} className="text-light">
                    {" "} 
                    <i className="fas fa-arrow-circle-left"></i> Back to University List
                    </span>
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
                                University Information
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                >

                                Campus Information
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '3'}
                                onClick={() =>toggle('3')}
                                >

                                Financial
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '4'}
                                onClick={() =>toggle('4')}
                                >

                                Features
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                 {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '5'}
                                onClick={() =>toggle('5')}
                                >

                                 Gallery
                                </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink active={activetab === "6"} onClick={() => toggle("6")}>
                                Application Document
                              </NavLink>
                            </NavItem>

                            <NavItem>
                                 {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
                                <NavLink
                                active={activetab === '7'}
                                onClick={() =>toggle('7')}
                                >

                                Template Document
                                </NavLink>
                            </NavItem>

                    </Nav>

                    <TabContent activeTab={activetab}>
              <Form onSubmit={handleUpload}>
            <FormGroup row className="has-icon-left position-relative">
                  <Input type="hidden" id="universityId" name="universityId" value={localStorage.getItem("id")} />
                  {/* <Input type="hidden" id="Id" name="Id" value={selectedId} /> */}
                </FormGroup>
                <FormGroup row className="has-icon-left position-relative">
                      <Col md="2">
                        <span>
                          Multiple File Upload{" "}
                          <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      <Col md="6">

                        {
                            <MediaPictures/>
                        }

                      </Col>
                    

                    {/* <CustomButtonRipple
                      type={"submit"}
                      className={"mr-1 mt-3 badge-primary"}
                      name={"Submit"}
                      permission={6}
                    /> */}

                </FormGroup>

                <FormGroup row
                    className="has-icon-left position-relative"
                    style={{ display: "flex", justifyContent: "end" }}
                  >

                <Col md="5">

                    <CustomButtonRipple
                      type={"submit"}
                      className={"mr-1 mt-3 badge-primary"}
                      name={"Save"}
                      permission={6}
                    />

                 </Col>
                 </FormGroup>

            </Form>
            </TabContent>
              </CardBody>
            </Card>
        </div>
    );
};

const mapStateToProps = state => ({
    univerSityTypeList: state.universityTypeDataReducer.universityTypes,
    univerSityCountryList: state.universityCountryDataReducer.universityCountries,
    univerSityStateList: state.universityStateDataReducer.universityStates,
  })
  
export default connect(mapStateToProps)(AddUniversityGallery);
