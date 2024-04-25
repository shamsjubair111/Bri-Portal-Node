import React, { useEffect, useState } from "react";
import get from "../../../helpers/get";
import Select from "react-select";
import { CardBody, Table, Card, CardHeader } from "reactstrap";
import { useHistory } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import ToggleSwitch from "../Components/ToggleSwitch";
import put from "../../../helpers/put";
import { useToasts } from "react-toast-notifications";

const Index = () => {
  const current_user = JSON.parse(localStorage.getItem("current_user"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  const [callApi, setCallApi] = useState(false);
  const [entity, setEntity] = useState(0);
  const history = useHistory();
  const [serialNum, setSerialNum] = useState(1);
  const [success, setSuccess] = useState(false);

  const { addToast } = useToasts();

  // useEffect(() => {
  //   get(
  //     `LoginHistory/IndexForUsers?page=${currentPage}&pageSize=${dataPerPage}&Email=${current_user?.displayEmail}`
  //   ).then((res) => {
  //     setEntity(res?.totalEntity);
  //     setData(res?.models);

  //     setSerialNum(res?.firstSerialNumber);
  //   });
  // }, [currentPage, dataPerPage, callApi, success]);

  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

  const selectDataSize = (value) => {
    setDataPerPage(value);
    setCallApi((prev) => !prev);
  };

  //  change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

  const backToDashboard = () => {
    history.push("/");
  };

  const handleDate1 = (date) => {
    const d = date.split("T")[0];
    return d;
  };

  const handleAccountStatus = (e, ipAddress) => {
    const subData = {
      IpAdress: ipAddress,
    };

    put(`LoginHistory/DeviceBlock/${ipAddress}`, subData).then((res) => {
      if (res?.status == 200 && res?.data?.isSuccess == true) {
        addToast(res?.data?.message, {
          appearance: "error",
          autoDismiss: true,
        });
        setSuccess(!success);
      } else {
        addToast(res?.data?.message, {
          appearance: "success",
          autoDismiss: true,
        });
      }
    });
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">Login History</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-white">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
          <div className="mr-3">
            <div className="d-flex align-items-center justify-content-end">
              <div className="mr-2">Showing :</div>
              <div>
                <Select
                  options={dataSizeName}
                  value={{ label: dataPerPage, value: dataPerPage }}
                  onChange={(opt) => selectDataSize(opt.value)}
                />
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <Table id="table-to-xls" className="table-sm table-bordered my-4">
              <thead className="thead-uapp-bg">
                <tr style={{ textAlign: "center" }}>
                  <th>SL/NO</th>
                  <th>Date</th>
                  <th>IP Address</th>
                  <th>Geolocation</th>
                  <th>Blocked</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((d, i) => (
                  <tr key={i} style={{ textAlign: "center" }}>
                    <th scope="row">{i + serialNum}</th>
                    <td>{handleDate1(d?.lastLoginDate)}</td>
                    <td>{d?.ipAddress}</td>
                    <td>{d?.geoLocationInfo}</td>
                    <td>
                      {
                        <ToggleSwitch
                          defaultChecked={
                            d?.isDeviceBlocked == false ? false : true
                          }
                          onChange={(e) => {
                            handleAccountStatus(e, d?.ipAddress);
                          }}
                        />
                      }

                      {/* {d?.isDeviceBlocked ? "Yes" : "No"} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

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

export default Index;
