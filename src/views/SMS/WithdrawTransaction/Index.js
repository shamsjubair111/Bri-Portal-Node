import React, { useEffect, useState } from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import Consultant from '../Dashboard/Pages/Consultant/Index';
import Select from 'react-select';

const Index = () => {

    const [label,setLabel] = useState('Select Consultant');
    const [consultant,setCounsultant] = useState([]);
    const [value,setValue] = useState(0);

    useEffect(()=>{

    },[])

    return (
        <div>
            <Card>
                <CardBody>
                <Select
                      value={{ label: label, value: value }}
                      name="UniversityTypeId"
                      id="UniversityTypeId"
                    />

                </CardBody>
            </Card>

            <Card>
                <CardBody>
                <Table id="table-to-xls" className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Transaction Date</th>
                    <th>Agent Name</th>
                    <th>Transaction Code</th>
                    <th>Amount</th>
                    <th>Reference/Invoice No.</th>
                    <th>Payment Type</th>
                    <th>Action</th>
                   
                 
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </Table>
                </CardBody>
            </Card>
            
        </div>
    );
};

export default Index;