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
import { rootUrl } from "../../../../constants/constants";
import MediaPictures from "./UniversityMedia";
import { useHistory } from "react-router-dom";
import ButtonForFunction from "../../Components/ButtonForFunction";
import CustomButtonRipple from "../../Components/CustomButtonRipple";
import get from "../../../../helpers/get";
import remove from "../../../../helpers/remove";

const AddProviderUniversityGallery = () => {
    const [activetab, setActivetab] = useState("5");
  const [gallery, setGallery] = useState([]);
  const [FileList, setFileList] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [galleryObj, setGalleryObj] = useState({});
  const [fileError, setFileError] = useState(false);

  const [loading, setLoading] = useState(false);

  const { addToast } = useToasts();
  const history = useHistory();

  const galleryResult = useSelector(
    (state) => state.UniversityGalleryImageReducer.universityGalleryImage
  );
  // console.log(galleryResult);
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
        'authorization': AuthStr,
      },
    };

    setLoading(true);

    if (FileList.length < 1) {
      setFileError(true);
    } else {
      Axios.post(`${rootUrl}UniversityGallery/Create`, subdata, config).then(
        (res) => {
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
    //     console.log(value);
    // }
  };

  useEffect(() => {
    get(`UniversityGallery/GetByUniversity/${localStorage.getItem("id")}`).then(
      (res) => {
        console.log("gallery", res);
        setGallery(res);
      }
    );
  }, [success]);

  const backToProviderDetails = () => {
    history.push(`/providerDetails/${localStorage.getItem("proProfileId")}`);
    localStorage.removeItem("proProfileId");
  };

  const toggle = (tab) => {
    setActivetab(tab);
    if (tab == "1") {
      history.push("/addProviderUniversity");
    }
    if (tab == "2") {
      history.push("/addProviderUniversityCampus");
    }
    if (tab == "3") {
      history.push("/addProviderUniversityFinancial");
    }
    if (tab == "4") {
      history.push("/addProviderUniversityFeatures");
    }
    if (tab == "5") {
      history.push("/addProviderUniversityGallery");
    }
    if (tab == "6") {
      history.push("/addProviderUniversityApplicationDocument");
    }
    if (tab == "7") {
      history.push("/addProviderUniversityTemplateDocument");
    }
    if (tab == "8") {
      history.push("/addProviderUniversityRequiredDocument");
    }
  };

  const handleDelete = (gallery) => {
    console.log("gallery", gallery);
    localStorage.setItem("delGalName", gallery?.mediaFileMedia?.fileName);
    localStorage.setItem("delGalId", gallery?.id);
    setDeleteModal(true);
  };

  // on Close Modal
  const closeDeleteModal = () => {
    setDeleteModal(false);
    localStorage.removeItem("delGalName");
    localStorage.removeItem("delGalId");
  };
  // on Close View Modal
  const closeViewModal = () => {
    // setGalleryObj({});
    setViewModalOpen(false);
  };

  const handleDeleteItem = (id) => {
    const returnValue = remove(`UniversityGallery/Delete/${id}`).then(
      (action) => {
        setDeleteModal(false);
        setSuccess(!success);
        addToast(action, {
          appearance: "error",
          autoDismiss: true,
        });
        localStorage.removeItem("delGalName");
        localStorage.removeItem("delGalId");
      }
    );
  };

  const handleView = (gallery) => {
    setGalleryObj(gallery);
    setViewModalOpen(true);
    console.log("gOBj", gallery);
  };
    return (
        <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">University Gallery</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToProviderDetails} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Provider Details
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink active={activetab === "1"} onClick={() => toggle("1")}>
                University Information
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Campus Information
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
              <NavLink active={activetab === "6"} onClick={() => toggle("6")}>
                Application Document
              </NavLink>
            </NavItem>

            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink active={activetab === "7"} onClick={() => toggle("7")}>
                Template Document
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activetab}>
            <div className="row mt-5">
            <div className="hedding-titel d-flex justify-content-between ms-1 mb-4">
                      <div>
                        <h5> <b>Gallery</b> </h5>

                        <div className="bg-h"></div>
                      </div>
                        {/* <div className="text-right edit-style  p-3" >
                        <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                        </div> */}

                    </div>
              <div className="col-md-8">
                <div className="row row-cols-md-3 row-cols-sm-2 g-4">
                  {gallery.map((gall, i) => (
                    <div key={i} className="containerCustom">
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
                          className="bg-danger ms-2"
                        >
                          Delete
                        </Button>

                        {/* view modal */}
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

                            {galleryObj?.mediaFileMedia?.mediaType === 1  ? (
                              <img
                                src={
                                  rootUrl + galleryObj?.mediaFileMedia?.fileUrl
                                }
                                alt="gallery_image"
                                className="image"
                                style={{ width: "100%" }}
                              />
                            ) 
                            
                            : galleryObj?.mediaFileMedia?.mediaType === 3 ? (
                              <video
                                src={
                                  rootUrl + galleryObj?.mediaFileMedia?.fileUrl
                                }
                                width="100%"
                                height="100%"
                                controls
                              >
                                The browser does not support videos.
                              </video>
                            )

                            :
                             
                            <span>This format cannot be opened.</span>
                          
                          }
                          </ModalBody>

                          <ModalFooter>
                            {/* <Button
                            color="danger"
                            onClick={() =>
                              handleDeleteItem(
                                localStorage.getItem("delGalId")
                              )
                            }
                          >
                            YES
                          </Button> */}
                            <Button
                              className="bg-danger"
                              onClick={closeViewModal}
                            >
                              Close
                            </Button>
                          </ModalFooter>
                        </Modal>

                        <Modal
                          isOpen={deleteModal}
                          toggle={closeDeleteModal}
                          className="uapp-modal"
                        >
                          <ModalBody>
                            <p>
                              Are You Sure to Delete this{" "}
                              <b>{localStorage.getItem("delGalName")}</b> ? Once
                              Deleted it can't be Undone!
                            </p>
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              color="danger"
                              onClick={() =>
                                handleDeleteItem(
                                  localStorage.getItem("delGalId")
                                )
                              }
                            >
                              YES
                            </Button>
                            <Button onClick={closeDeleteModal}>NO</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className="customCard rounded">
                  <Form className="ms-2" onSubmit={handleUpload}>
                    <FormGroup row className="has-icon-left position-relative">
                      <Input
                        type="hidden"
                        id="universityId"
                        name="universityId"
                        value={localStorage.getItem("id")}
                      />
                      {/* <Input type="hidden" id="Id" name="Id" value={selectedId} /> */}
                    </FormGroup>
                    <FormGroup row className="has-icon-left position-relative">
                      <Col md="5">
                        <span>
                        Select Files{" "}
                          <span className="text-danger">*</span>{" "}
                        </span>
                      </Col>
                      {loading ? (
                              <h4 className="text-center mt-4">Uploading...</h4>
                            ) : (
                      <Col md="7">
                        {
                          <MediaPictures
                            FileList={FileList}
                            setFileList={setFileList}
                            setFileError={setFileError}
                          />
                        }

                        {fileError && (
                          <span className="text-danger">
                            You must select at least one file.
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
                          name={"Save"}
                          permission={6}
                        />
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </TabContent>
        </CardBody>
      </Card>
    </div>
    );
};

export default AddProviderUniversityGallery;