import Axios from "axios";
import React, { useEffect, useState } from "react";
// import 'react-dropzone-uploader/dist/styles.css'
import { connect, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useToasts } from "react-toast-notifications";
// import post from '../../../helpers/post';
import { rootUrl } from "../../../constants/constants";
import MediaPictures from "./UniversityMedia";
import { useHistory, useParams } from "react-router-dom";
import ButtonForFunction from "../Components/ButtonForFunction";
import CustomButtonRipple from "../Components/CustomButtonRipple";
import get from "../../../helpers/get";
import remove from "../../../helpers/remove";
import ButtonLoader from "../Components/ButtonLoader";

const AddUniversityGallery = () => {
  const [activetab, setActivetab] = useState("5");
  const [gallery, setGallery] = useState([]);
  const [FileList, setFileList] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [galleryObj, setGalleryObj] = useState({});
  const [fileError, setFileError] = useState(false);
  const [delGalId, setDelGalId] = useState(0);
  const [delGalName, setDelGalName] = useState("");

  const [loading, setLoading] = useState(false);

  const [buttonStatus, setButtonStatus] = useState(false);
  const [buttonStatus1, setButtonStatus1] = useState(false);
  const [progress, setProgress] = useState(false);
  const [progress1, setProgress1] = useState(false);

  const { addToast } = useToasts();
  const history = useHistory();
  const { univerId } = useParams();

  const galleryResult = useSelector(
    (state) => state.UniversityGalleryImageReducer.universityGalleryImage
  );
  //
  const AuthStr = localStorage.getItem("token");

  const handleUpload = (event) => {
    event.preventDefault();
    const subdata = new FormData(event.target);

    for (let i = 0; i < galleryResult.length; i++) {
      subdata.append(`mediaFile`, galleryResult[i]?.originFileObj);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: AuthStr,
      },
    };

    if (FileList.length < 1) {
      setFileError(true);
    } else {
      setLoading(true);
      setButtonStatus(true);
      setProgress(true);
      Axios.post(`${rootUrl}UniversityGallery/Create`, subdata, config).then(
        (res) => {
          setButtonStatus(false);
          setProgress(false);
          setSuccess(!success);
          setFileList([]);
          setFileError(false);
          setLoading(false);
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
          // history.push("/addUniversityApplicationDocument");
        }
      );
    }

    // for (var value of subdata.values()) {
    //
    // }
  };

  // useEffect(() => {
  //   get(`UniversityGallery/GetByUniversity/${univerId}`).then(
  //     (res) => {

  //       setGallery(res);
  //     }
  //   );
  // }, [success, univerId]);

  const backToUniList = () => {
    history.push("/universityList");
  };

  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push(`/addUniversity/${univerId}`);
    }
    if (tab == "2") {
      history.push(`/addUniversityCampus/${univerId}`);
    }
    if (tab == "3") {
      history.push(`/addUniversityFinancial/${univerId}`);
    }
    if (tab == "4") {
      history.push(`/addUniversityFeatures/${univerId}`);
    }
    if (tab == "5") {
      history.push(`/addUniversityGallery/${univerId}`);
    }
    if (tab == "6") {
      history.push(`/addUniversityTestScore/${univerId}`);
    }
    if (tab == "7") {
      history.push(`/addUniversityApplicationDocument/${univerId}`);
    }
    if (tab == "8") {
      history.push(`/addUniversityTemplateDocument/${univerId}`);
    }
    if (tab == "9") {
      history.push(`/addUniversityCommission/${univerId}`);
    }
  };

  const handleDelete = (gallery) => {
    setDelGalName(gallery?.mediaFileMedia?.fileName);
    setDelGalId(gallery?.id);
    setDeleteModal(true);
  };

  // on Close Modal
  const closeDeleteModal = () => {
    setDeleteModal(false);
    setDelGalName("");
    setDelGalId(0);
  };
  // on Close View Modal
  const closeViewModal = () => {
    // setGalleryObj({});
    setViewModalOpen(false);
  };

  const handleDeleteItem = (id) => {
    setButtonStatus1(true);
    setProgress1(true);
    const returnValue = remove(`UniversityGallery/Delete/${id}`).then(
      (action) => {
        setButtonStatus1(false);
        setProgress1(false);
        setDeleteModal(false);
        setSuccess(!success);
        addToast(action, {
          appearance: "error",
          autoDismiss: true,
        });
        setDelGalName("");
        setDelGalId(0);
      }
    );
  };

  const handleView = (gallery) => {
    setGalleryObj(gallery);
    setViewModalOpen(true);
  };

  const goBack = () => {
    history.push(`/addUniversityFeatures/${univerId}`);
  };

  const goFront = () => {
    history.push(`/addUniversityTestScore/${univerId}`);
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">University Gallery</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToUniList} className="text-white">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to University
              List
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                Basic Information
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Campuses
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "3"} onClick={() => toggle("3")}>
                Financial
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "4"} onClick={() => toggle("4")}>
                Features
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "5"} onClick={() => toggle("5")}>
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "6"} onClick={() => toggle("6")}>
                Test Score
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active={activetab === "7"} onClick={() => toggle("7")}>
                Application Document
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "8"} onClick={() => toggle("8")}>
                Template Document
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "9"} onClick={() => toggle("9")}>
                Commission
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activetab}>
            <div className="hedding-titel d-flex justify-content-between ml-1 mt-5 mb-4">
              <div>
                <h5>
                  {" "}
                  <b>Gallery</b>{" "}
                </h5>

                <div className="bg-h"></div>
              </div>
              {/* <div className="text-right edit-style  p-3" >
                        <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                        </div> */}
            </div>
            <div className="row pt-2 mb-5">
              <div className="col-md-8">
                {gallery.length > 0 ? (
                  <div className="container row row-cols-md-3 row-cols-sm-2 g-4">
                    {gallery.map((gall, i) => (
                      <div key={i} className="containerCustom p-2">
                        <img
                          src={rootUrl + gall?.mediaFileMedia?.thumbnailUrl}
                          alt="Avatar"
                          className="image"
                          style={{ width: "100%" }}
                        />
                        <div className="middle d-flex">
                          <Button
                            onClick={() => handleView(gall)}
                            className="bg-success"
                          >
                            View
                          </Button>
                          <Button
                            onClick={() => handleDelete(gall)}
                            className="bg-danger ml-2"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}

                    {/* view modal starts here */}
                    <Modal
                      size="50%"
                      isOpen={viewModalOpen}
                      toggle={closeViewModal}
                      className="uapp-modal2"
                    >
                      <ModalBody>
                        {/* <img
                              className="w-100 mx-auto"
                              src={
                                rootUrl + galleryObj?.mediaFileMedia?.fileUrl
                              }
                              alt=""
                            /> */}
                        {/* {galleryObj?.mediaFileMedia?.fileName.includes(".jpg") || galleryObj?.mediaFileMedia?.fileName.includes(".png") || galleryObj?.mediaFileMedia?.fileName.includes(".jfif") || galleryObj?.mediaFileMedia?.fileName.includes(".JPG") ? (
                        <img
                          src={rootUrl + galleryObj?.mediaFileMedia?.fileUrl}
                          alt="Avatar"
                          className="image"
                          style={{ width: "100%" }}
                        />
                      ) : (
                        <video
                          src={rootUrl + galleryObj?.mediaFileMedia?.fileUrl}
                          width="480"
                          height="360"
                          controls
                        >
                          The browser does not support videos.
                        </video>
                      )} */}

                        {galleryObj?.mediaFileMedia?.mediaType === 1 ? (
                          <img
                            src={rootUrl + galleryObj?.mediaFileMedia?.fileUrl}
                            alt="gallery_image"
                            className="image"
                            style={{ width: "100%" }}
                          />
                        ) : galleryObj?.mediaFileMedia?.mediaType === 3 ? (
                          <video
                            src={rootUrl + galleryObj?.mediaFileMedia?.fileUrl}
                            width="100%"
                            height="100%"
                            controls
                          >
                            The browser does not support videos.
                          </video>
                        ) : (
                          <span>This format cannot be opened.</span>
                        )}
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          className=""
                          color="danger"
                          onClick={closeViewModal}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </Modal>

                    {/* view modal ends here */}

                    {/* delete modal starts here */}

                    <Modal
                      isOpen={deleteModal}
                      toggle={closeDeleteModal}
                      className="uapp-modal"
                    >
                      <ModalBody>
                        <p>
                          Are You Sure to Delete this <b>{delGalName}</b> ? Once
                          Deleted it can't be Undone!
                        </p>
                      </ModalBody>

                      <ModalFooter>
                        <Button onClick={closeDeleteModal}>NO</Button>

                        <Button
                          color="danger"
                          onClick={() => handleDeleteItem(delGalId)}
                          disabled={buttonStatus1}
                        >
                          {progress1 ? <ButtonLoader /> : "YES"}
                        </Button>
                      </ModalFooter>
                    </Modal>

                    {/* delete modal ends here */}
                  </div>
                ) : (
                  <p className="ml-1">There is no gallery item added here.</p>
                )}
              </div>
              <div className="col-md-4 pt-2">
                <div className="customCard rounded">
                  <Form className="ml-2" onSubmit={handleUpload}>
                    <FormGroup row className="has-icon-left position-relative">
                      <Input
                        type="hidden"
                        id="universityId"
                        name="universityId"
                        value={univerId}
                      />
                      {/* <Input type="hidden" id="Id" name="Id" value={selectedId} /> */}
                    </FormGroup>
                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="5">
                        <span>
                          Select Files <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      {loading ? (
                        <h4 className="text-center mt-4">Uploading...</h4>
                      ) : (
                        <Col md="7">
                          {
                            <MediaPictures
                              accept={
                                "image/png, image/jpeg, image/jpg, video/mp4"
                              }
                              FileList={FileList}
                              setFileList={setFileList}
                              setFileError={setFileError}
                            />
                          }

                          {fileError && (
                            <span className="text-danger">
                              At least one file is required
                            </span>
                          )}
                        </Col>
                      )}
                    </FormGroup>

                    <FormGroup
                      row
                      className="has-icon-left position-relative"
                      style={{ display: "flex", justifyContent: "end" }}
                    >
                      <Col md="5">
                        <CustomButtonRipple
                          type={"submit"}
                          className={"mr-1 mt-3 badge-primary"}
                          name={progress ? <ButtonLoader /> : "Save"}
                          isDisabled={buttonStatus}
                          permission={6}
                        />
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-3">
              <Button color="warning" onClick={goBack}>
                Previous Page
              </Button>

              <Button color="warning" onClick={goFront}>
                Next Page
              </Button>
            </div>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  univerSityTypeList: state.universityTypeDataReducer.universityTypes,
  univerSityCountryList: state.universityCountryDataReducer.universityCountries,
  univerSityStateList: state.universityStateDataReducer.universityStates,
});

export default connect(mapStateToProps)(AddUniversityGallery);
