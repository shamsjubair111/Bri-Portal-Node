import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  Table,
  Col,
  Form,
  FormGroup,
  Input,
  ModalHeader,
} from "reactstrap";
import Select from "react-select";

import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Image, Modal as AntModal, Upload } from "antd";
import * as Icon from "react-feather";
import ButtonForFunction from "../Components/ButtonForFunction";
import ButtonLoader from "../Components/ButtonLoader";
import ToggleSwitch from "../Components/ToggleSwitch";
import Pagination from "../Pagination/Pagination";
import { permissionList } from "../../../constants/AuthorizationConstant";
import { rootUrl } from "../../../constants/constants";
import get from "../../../helpers/get";
import remove from "../../../helpers/remove";
import put from "../../../helpers/put";
import StarRatings from "../Components/StarRatings";

const ConsultantRatingList = ({ id }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  const [ratingList, setRatingList] = useState([]);
  const [entity, setEntity] = useState(0);
  const [callApi, setCallApi] = useState(false);
  const [success, setSuccess] = useState(false);

  const [orderLabel, setOrderLabel] = useState("Select order by");
  const [orderValue, setOrderValue] = useState(0);

  const [delData, setDelData] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [progress, setProgress] = useState(false);
  const [progress1, setProgress1] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  const [title, setTitle] = useState([]);
  const [titleLabel, setTitleLabel] = useState("Select Title");
  const [titleValue, setTitleValue] = useState(0);
  const [titleError, setTitleError] = useState(false);

  const [countryLabel, setCountryLabel] = useState("Select Country");
  const [countryValue, setCountryValue] = useState(0);
  const [stateLabel, setStateLabel] = useState("Select State");
  const [stateValue, setStateValue] = useState(0);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);

  const [officerInfo, setOfficerInfo] = useState({});

  const [emailError, setEmailError] = useState(true);

  const [buttonStatus1, setButtoStatus1] = useState(false);

  const [countryError, setCountryError] = useState(false);
  const [stateError, setStateError] = useState(false);

  const [updateId, setUpdateId] = useState(undefined);

  const permissions = localStorage.getItem("permissions");

  const { addToast } = useToasts();
  const history = useHistory();

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [FileList, setFileList] = useState([]);
  const [error, setError] = useState(false);

  // user select order
  const orderArr = [
    {
      label: "Most Recent",
      value: 1,
    },
    {
      label: "Most Relevant",
      value: 2,
    },
  ];
  // const orderName = orderArr.map((dsn) => ({ label: dsn.label, value: dsn.value }));
  const orderName = orderArr.map((dsn) => ({
    label: dsn.label,
    value: dsn.value,
  }));

  const selectOrder = (label, value) => {
    //
    // setLoading(true);
    setOrderLabel(label);
    setOrderValue(value);
    setCallApi((prev) => !prev);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const goToProfile = (data) => {
    history.push(`/complianceOfficerProfile/${data?.id}`);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList }) => {
    if (
      fileList.length > 0 &&
      fileList[0]?.type !== "image/jpeg" &&
      fileList[0]?.type !== "image/jpg" &&
      fileList[0]?.type !== "image/png"
    ) {
      setFileList([]);
      setError("Only jpeg, jpg, png image is allowed");
    } else {
      setFileList(fileList);
      setError("");
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

  // user select data per page
  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

  const selectDataSize = (value) => {
    setDataPerPage(value);
    setCallApi((prev) => !prev);
  };

  // useEffect(() => {
  //   get(
  //     `ConsultantRating/GetByConsultant?page=${currentPage}&pageSize=${dataPerPage}&consultantid=${id}&orderby=${orderValue}`
  //   ).then((res) => {
  //       console.log("rating list", res);
  //     setRatingList(res?.pagedModel?.models);
  //     setEntity(res?.pagedModel?.totalEntity);
  //   });
  // }, [currentPage, dataPerPage, callApi, success, updateId]);

  const toggleDanger = (data) => {
    setDelData(data);
    setDeleteModal(true);
  };

  // on Close Delete Modal
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleDeleteCompOfficer = () => {
    setButtonStatus(true);
    setProgress(true);
    remove(`ComplianceOfficer/Delete/${delData}`).then((res) => {
      setProgress(false);
      setButtonStatus(false);
      addToast(res, {
        appearance: "error",
        autoDismiss: true,
      });
      setDeleteModal(false);

      setSuccess(!success);
    });
  };

  const searchStateByCountry = (countryValue) => {
    get(`StateDD/Index/${countryValue}`).then((res) => {
      setState(res);
    });
  };

  const nameTitle = title?.map((singleTitle) => ({
    label: singleTitle.name,
    value: singleTitle.id,
  }));

  const countryName = country?.map((branchCountry) => ({
    label: branchCountry.name,
    value: branchCountry.id,
  }));

  const stateName = state?.map((branchState) => ({
    label: branchState.name,
    value: branchState.id,
  }));

  // select  Title
  const selectTitle = (label, value) => {
    setTitleError(false);
    setTitleLabel(label);
    setTitleValue(value);
  };

  // select University Country
  const selectCountry = (label, value) => {
    setCountryError(false);
    setCountryLabel(label);
    setCountryValue(value);
    searchStateByCountry(value);
    setStateLabel("Select State");
  };

  // select University State
  const selectState = (label, value) => {
    setStateError(false);

    setStateLabel(label);
    setStateValue(value);
  };

  const handleEmail = (e) => {
    get(`EmailCheck/EmailCheck/${e.target.value}`).then((res) => {
      setEmailError(res);
    });
  };

  const AuthStr = localStorage.getItem("token");

  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex justify-content-between">
            <div className="hedding-titel mt-2">
              <h5>
                {" "}
                <b>Rating List</b>{" "}
              </h5>

              <div className="bg-h"></div>
            </div>

            <div className="d-flex">
              {/* <div className="mr-2 mt-2">Order By :</div> */}
              <div>
                <Select
                  className="mr-md-2 mr-sm-0"
                  options={orderName}
                  value={{ label: orderLabel, value: orderValue }}
                  onChange={(opt) => selectOrder(opt.label, opt.value)}
                />
              </div>
            </div>
          </div>

          {ratingList?.map((rate, i) => (
            <Card key={rate?.id}>
              <StarRatings star={rate?.overAllRating} />
            </Card>
          ))}

          <Pagination
            dataPerPage={dataPerPage}
            totalData={entity}
            paginate={paginate}
            currentPage={currentPage}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ConsultantRatingList;
