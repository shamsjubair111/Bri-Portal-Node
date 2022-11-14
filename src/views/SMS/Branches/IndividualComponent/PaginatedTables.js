import React, { useEffect, useState } from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import get from '../../../../helpers/get';
import Select from "react-select";

const PaginatedTables = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);

    const [currentPage2, setCurrentPage2] = useState(1);
    const [dataPerPage2, setDataPerPage2] = useState(15);

    const [currentPage3, setCurrentPage3] = useState(1);
    const [dataPerPage3, setDataPerPage3] = useState(15);

    const [currentPage4, setCurrentPage4] = useState(1);
    const [dataPerPage4, setDataPerPage4] = useState(15);

    const [currentPage5, setCurrentPage5] = useState(1);
    const [dataPerPage5, setDataPerPage5] = useState(15);

    const [accountsManager, setAccountsManager] = useState([]);
    const [editor,setEditor] = useState([]);
    const [accountsOfficer, setAccountsOfficer] = useState([]);
    const [financeManager, setFinanceManager] = useState([]);
    const [complianceManager, setComplianceManager] = useState([]);


    const [callApi, setCallApi] = useState(false);

       // user select data per page
  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

    useEffect(()=>{

        get(`BranchEmployee/AccountsManager?page=${currentPage}&pageSize=${dataPerPage}&branchId=${props?.id}`)
        .then(res => {
            setAccountsManager(res?.models);
        });

        get(`BranchEmployee/Editor?page=${currentPage2}&pageSize=${dataPerPage2}&branchId=${props?.id}`)
        .then(res => {
            setEditor(res?.models);
        })

        get(`BranchEmployee/AccountsOfficer?page=${currentPage3}&pageSize=${dataPerPage3}&branchId=${props?.id}`)
        .then(res => {
            setAccountsOfficer(res?.models);
        })

        get(`BranchEmployee/FinanceManager?page=${currentPage4}&pageSize=${dataPerPage4}&branchId=${props?.id}`)
        .then(res => {
            setFinanceManager(res?.models);
        })

        get(`BranchEmployee/ComplianceManager?page=${currentPage5}&pageSize=${dataPerPage5}&branchId=${props?.id}`)
        .then(res => {
            setComplianceManager(res?.models);
        })

    },[dataPerPage, dataPerPage2, dataPerPage3, dataPerPage4, dataPerPage5, callApi])


    const selectDataSize = (value) => {
    
        setDataPerPage(value);
        setCallApi((prev) => !prev);
      };

    const selectDataSize2 = (value) => {
    
        setDataPerPage2(value);
        setCallApi((prev) => !prev);
      };

    const selectDataSize3 = (value) => {
    
        setDataPerPage3(value);
        setCallApi((prev) => !prev);
      };

    const selectDataSize4 = (value) => {
    
        setDataPerPage4(value);
        setCallApi((prev) => !prev);
      };

    const selectDataSize5 = (value) => {
    
        setDataPerPage5(value);
        setCallApi((prev) => !prev);
      };

   

 

    return (
        <div>

            <Card>
                <CardBody>

                    <div className='d-flex justify-content-between'>
                    <div className="hedding-titel">
                <h5> <b>Account Manager List</b> </h5>
                 
                <div className="bg-h"></div>
                </div>

                <div className="d-flex">
                    <div className="mr-2 mt-2">Showing :</div>
                    <div>
                      <Select
                        options={dataSizeName}
                        value={{ label: dataPerPage, value: dataPerPage }}
                        onChange={(opt) => selectDataSize(opt.value)}
                      />
                    </div>
                  </div>
                    </div>

                    {/* table */}
                <div className="table-responsive mt-3">
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    
                   <th>SL/NO</th> 
                   <th>Name</th> 
                   <th>Email</th> 
                   <th>Phone Number</th> 
                   
                  </tr>
                </thead>
                <tbody>
                  {accountsManager?.map((acm, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                     <th scope="row">{1 + i}</th> 
                      <td>{acm?.firstName}{' '}{acm?.lastName}</td>
                      <td>{acm?.email}</td>
                      <td>{acm?.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>

                    <div className='d-flex justify-content-between'>
                    <div className="hedding-titel">
                <h5> <b>Editor List</b> </h5>
                 
                <div className="bg-h"></div>
                </div>

                <div className="d-flex">
                    <div className="mr-2 mt-2">Showing :</div>
                    <div>
                      <Select
                        options={dataSizeName}
                        value={{ label: dataPerPage2, value: dataPerPage2 }}
                        onChange={(opt) => selectDataSize2(opt.value)}
                      />
                    </div>
                  </div>
                    </div>

                    {/* table */}
                <div className="table-responsive mt-3">
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    
                   <th>SL/NO</th> 
                   <th>Name</th> 
                   <th>Email</th> 
                   <th>Phone Number</th> 
                   
                  </tr>
                </thead>
                <tbody>
                  {editor?.map((acm, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                     <th scope="row">{1 + i}</th> 
                      <td>{acm?.firstName}{' '}{acm?.lastName}</td>
                      <td>{acm?.email}</td>
                      <td>{acm?.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>

                    <div className='d-flex justify-content-between'>
                    <div className="hedding-titel">
                <h5> <b>Account Officer List</b> </h5>
                 
                <div className="bg-h"></div>
                </div>

                <div className="d-flex">
                    <div className="mr-2 mt-2">Showing :</div>
                    <div>
                      <Select
                        options={dataSizeName}
                        value={{ label: dataPerPage3, value: dataPerPage3 }}
                        onChange={(opt) => selectDataSize3(opt.value)}
                      />
                    </div>
                  </div>
                    </div>

                    {/* table */}
                <div className="table-responsive mt-3">
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    
                   <th>SL/NO</th> 
                   <th>Name</th> 
                   <th>Email</th> 
                   <th>Phone Number</th> 
                   
                  </tr>
                </thead>
                <tbody>
                  {accountsOfficer?.map((acm, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                     <th scope="row">{1 + i}</th> 
                      <td>{acm?.firstName}{' '}{acm?.lastName}</td>
                      <td>{acm?.email}</td>
                      <td>{acm?.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>

                    <div className='d-flex justify-content-between'>
                    <div className="hedding-titel">
                <h5> <b>Finance Manager List</b> </h5>
                 
                <div className="bg-h"></div>
                </div>

                <div className="d-flex">
                    <div className="mr-2 mt-2">Showing :</div>
                    <div>
                      <Select
                        options={dataSizeName}
                        value={{ label: dataPerPage4, value: dataPerPage4 }}
                        onChange={(opt) => selectDataSize4(opt.value)}
                      />
                    </div>
                  </div>
                    </div>

                    {/* table */}
                <div className="table-responsive mt-3">
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    
                   <th>SL/NO</th> 
                   <th>Name</th> 
                   <th>Email</th> 
                   <th>Phone Number</th> 
                   
                  </tr>
                </thead>
                <tbody>
                  {financeManager?.map((acm, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                     <th scope="row">{1 + i}</th> 
                      <td>{acm?.firstName}{' '}{acm?.lastName}</td>
                      <td>{acm?.email}</td>
                      <td>{acm?.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>

                    <div className='d-flex justify-content-between'>
                    <div className="hedding-titel">
                <h5> <b>Compliance Manager List</b> </h5>
                 
                <div className="bg-h"></div>
                </div>

                <div className="d-flex">
                    <div className="mr-2 mt-2">Showing :</div>
                    <div>
                      <Select
                        options={dataSizeName}
                        value={{ label: dataPerPage5, value: dataPerPage5 }}
                        onChange={(opt) => selectDataSize5(opt.value)}
                      />
                    </div>
                  </div>
                    </div>

                    {/* table */}
                <div className="table-responsive mt-3">
              <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    
                   <th>SL/NO</th> 
                   <th>Name</th> 
                   <th>Email</th> 
                   <th>Phone Number</th> 
                   
                  </tr>
                </thead>
                <tbody>
                  {complianceManager?.map((acm, i) => (
                    <tr key={i} style={{ textAlign: "center" }}>
                     <th scope="row">{1 + i}</th> 
                      <td>{acm?.firstName}{' '}{acm?.lastName}</td>
                      <td>{acm?.email}</td>
                      <td>{acm?.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
                </CardBody>
            </Card>

            
        </div>
    );
};

export default PaginatedTables;