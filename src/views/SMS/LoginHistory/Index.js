import React, { useEffect, useState } from 'react';
import get from '../../../helpers/get';
import Select from "react-select";
import { CardBody, Table, Card, CardHeader } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Index = () => {

    const current_user = JSON.parse(localStorage.getItem('current_user'));
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [callApi, setCallApi] = useState(false);
    const [entity, setEntity] = useState(0);
    const history = useHistory();
    const [serialNum, setSerialNum] = useState(1);

    useEffect(()=>{

        get(`LoginHistory/IndexForUsers?page=${currentPage}&pageSize=${dataPerPage}&Email=${current_user?.displayEmail}`)
        .then(res => {
            console.log('response', res)
            setEntity(res?.totalEntity);
            setData(res?.models);
            setSerialNum(res?.firstSerialNumber);
        })

    },[ currentPage,
        dataPerPage,
        callApi,])

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
    history.push('/');
  }



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

        <Table id="table-to-xls" className="table-sm table-bordered my-4">


                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                  <th>SL/NO</th>
                  <th>Name</th>
                  <th>IP Address</th>
                  <th>Geolocation</th>
                  <th>Blocked</th>
                  </tr>
                </thead>
                <tbody>
                {data?.map((d, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                    <th scope="row">{i+serialNum}</th>
                    <td>{d?.fullName}</td>
                    <td>{d?.ipAddress}</td>
                    <td>{d?.geoLocationInfo}</td>
                    <td>{(d?.isDeviceBlocked) ? 'Yes': 'No'}</td>
                    </tr>
                  ))}
                 
                </tbody>
              </Table>

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