import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
import get from "../../../../helpers/get";
import put from "../../../../helpers/put";
import ManagerImage from "../BranchManager/BranchManagerImage";
import { useToasts } from "react-toast-notifications";
import { Image } from 'antd';
import "antd/dist/antd.css";
import { rootUrl } from "../../../../constants/constants";

const BranchManagerInformation = () => {
  const { id } = useParams();
  const history = useHistory();
  const { addToast } = useToasts();
  const [branchManagerInfo, setBranchManagerInfo] = useState({});

  const managerImageData = useSelector(
    (state) => state?.ManagerImageReducer?.managerImage
  );

  useEffect(() => {
    get(`BranchManager/Get/${id}`).then((res) => {
      console.log(res,'Tring manager info noww');
      setBranchManagerInfo(res);
    });
  }, [id]);

  const backToBranchList = () => {
    history.push("/branchList");
  };

  sessionStorage.setItem("BranchManagerId", branchManagerInfo?.id);

  const handleUpdateManagerInformation = (e) => {
    e.preventDefault();
    const subData = new FormData(e.target);
    subData.append("managerImage", managerImageData[0].originFileObj);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    for (let val of subData.values()) {
      console.log(val);
    }
    put(`BranchManager/Update`, subData, config).then((res) => {
      //  console.log(res);
      addToast(res?.data?.message, {
        appearance: "success",
      });
      history.push("/branchList");
    });
  };

  return (
    <div>
        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Update Branch Manager Iformation</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToBranchList} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Branch List
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
          <Form className="mt-5" onSubmit={handleUpdateManagerInformation}>
            <input
              type="hidden"
              name="id"
              id="id"
              value={branchManagerInfo?.id}
            />
            <input
              type="hidden"
              name="email"
              id="email"
              value={branchManagerInfo?.email}
            />
            <input
              type="hidden"
              name="tittle"
              id="tittle"
              value={branchManagerInfo?.tittle}
            />
            <input
              type="hidden"
              name="branchId"
              id="branchId"
              value={branchManagerInfo?.branchId}
            />

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  First Name <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="4">
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter branch name"
                  required
                  defaultValue={branchManagerInfo?.firstName}
                />
              </Col>
            </FormGroup>
            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Last Name <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="4">
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter branch name"
                  required
                  defaultValue={branchManagerInfo?.lastName}
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Phone Number <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="4">
                <Input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  defaultValue={branchManagerInfo?.phoneNumber}
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Manager Image <span className="text-danger">*</span>{" "}
                </span>
              </Col>
              <Col md="4">
              <div className='d-flex'>

                {
                  (branchManagerInfo?.managerImageMedia) !== null ?
                <div className='me-2'>
                  <Image
                  width={104} height={104}
                  src={rootUrl+branchManagerInfo?.managerImageMedia?.fileUrl}
                />
                </div>
                : 
                null
                }

                <div className='ms-2'>
                <ManagerImage/>
                </div>

                </div>
              </Col>
            </FormGroup>

            <FormGroup
              row
              className="has-icon-left position-relative"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Col md="6">
                <div className="d-flex justify-content-end">
                <Button.Ripple type="submit" className="mr-1 mt-3 badge-primary">
                Submit
              </Button.Ripple>
                </div>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default BranchManagerInformation;
