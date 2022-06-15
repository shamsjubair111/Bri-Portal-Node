import Axios from 'axios';
import React, { useState } from 'react';
// import 'react-dropzone-uploader/dist/styles.css'
import { connect, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
// import post from '../../../helpers/post';
import { rootUrl } from "../../../constants/constants";
import MediaPictures from './UniversityMedia';
import { useHistory } from 'react-router-dom';

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
        });
        history.push("/universityList");

        // for (var value of subdata.values()) {
        //     console.log(value);
        // }

    }

    const backToDashboard = () => {
      history.push("/");
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
      };

    return (
        <div>


          <Card className='uapp-card-bg'>
              <CardHeader className="page-header">              
                <h3 className="text-light">University Gallery</h3>
                  <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-light">
                    {" "} 
                    <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
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

                                Financial Information
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

                                University Gallery
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
                    <Button.Ripple
                      type="submit"
                      className="mr-1 mt-3 badge-primary"
                  >
                    Submit
                  </Button.Ripple>
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
