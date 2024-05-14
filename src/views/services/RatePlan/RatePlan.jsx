import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { CardBody, Col } from "reactstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";

const RatePlan = () => {
  const [serviceList, setServiceLIst] = useState([
    {
      name: "[Select]",
      id: 0,
    },
    {
      name: "A2Z",
      id: 1,
    },
  ]);
  const [serviceLabel, setServiceLabel] = useState("[Select]");
  const [serviceValue, setServiceValue] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const selectServiceFamily = (label, value) => {
    setServiceLabel(label);
    setServiceValue(value);
  };

  const serviceFamilyOption = serviceList?.map((srv) => ({
    label: srv?.name,
    value: srv?.id,
  }));

  return (
    <div>
      <Card>
        <CardBody>
          <div className="border-bottom mb-4">
            <h4 className="pb-3">Role Management</h4>
          </div>
          <div className="mt-4 container-fluid">
            <div className="row mb-3">
              <div className="col-md-4">
                <h6>Service : </h6>
                <form style={{ display: "flex", alignItems: "center" }}>
                  {/* <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Find User"
                ></FloatingLabel> */}
                  <Form.Control
                    placeholder="Search..."
                    style={{ marginRight: "10px" }}
                  />
                  <Button style={{ padding: "7px 30px" }} type="submit">
                    Find
                  </Button>
                </form>
              </div>
              <div className="col-md-4">
                <h6>Rate Plan Name Having : </h6>
                <form style={{ display: "flex", alignItems: "center" }}>
                  {/* <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Find User"
                ></FloatingLabel> */}
                  <Form.Control
                    placeholder="Search..."
                    style={{ marginRight: "10px" }}
                  />
                  <Button style={{ padding: "7px 30px" }} type="submit">
                    Find
                  </Button>
                </form>
              </div>
              <div
                className="col-md-4 d-flex justify-content-end"
                style={{ marginTop: "23px" }}
              >
                <Button style={{ padding: "7px 30px" }}>Add Role</Button>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: "100%", overflowX: "scroll" }}>
            <Table id="table-to-xls" className="table-sm table-bordered">
              <thead className="thead-uapp-bg">
                <tr style={{ textAlign: "center" }}>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Plan Name</th>
                  <th style={{ minWidth: "350px" }}>Service Family</th>
                  <th>Currency</th>
                  <th>TimeZone</th>
                  <th>Created On</th>
                  <th>
                    Tech
                    <br />
                    Prefix
                  </th>
                  <th>Description</th>
                  <th>
                    Default <br /> Pulse
                  </th>
                  <th style={{ minWidth: "180px" }}>
                    Default Round Digits <br /> after Decimal for <br /> Rate
                    Amount
                  </th>
                  <th>Min Duration (Sec)</th>
                  <th>
                    Reference Rate Plan <br></br> for LCR
                  </th>
                  <th style={{ minWidth: "220px" }}>
                    Ambiguous Date Handling by
                  </th>
                  <th style={{ minWidth: "180px" }}>
                    Default Fixed Charge <br /> Duration (Sec)
                  </th>
                  <th style={{ minWidth: "180px" }}>
                    Default Fixed Charge <br /> Amount
                  </th>
                  <th style={{ minWidth: "150px" }}>
                    Default <br /> Billing Span
                  </th>
                  <th style={{ minWidth: "150px" }}>Default Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                  >
                    Edit
                  </td>
                  <td>Delete</td>
                  <td>Task</td>
                  <td>Rates</td>
                  <td>Domestic</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>BDT</td>
                  <td>GMT + 6</td>
                  <td>Dummy Data</td>
                  <td>00</td>
                  <td>Dummy Data</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0.1</td>
                  <td>No</td>
                  <td>Month First, Then Day</td>
                  <td>0</td>
                  <td>0.000000</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                  >
                    Edit
                  </td>
                  <td>Delete</td>
                  <td>Task</td>
                  <td>Rates</td>
                  <td>Domestic</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>BDT</td>
                  <td>GMT + 6</td>
                  <td>Dummy Data</td>
                  <td>00</td>
                  <td>Dummy Data</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0.1</td>
                  <td>No</td>
                  <td>Month First, Then Day</td>
                  <td>0</td>
                  <td>0.000000</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                  >
                    Edit
                  </td>
                  <td>Delete</td>
                  <td>Task</td>
                  <td>Rates</td>
                  <td>Domestic</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>BDT</td>
                  <td>GMT + 6</td>
                  <td>Dummy Data</td>
                  <td>00</td>
                  <td>Dummy Data</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0.1</td>
                  <td>No</td>
                  <td>Month First, Then Day</td>
                  <td>0</td>
                  <td>0.000000</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                  >
                    Edit
                  </td>
                  <td>Delete</td>
                  <td>Task</td>
                  <td>Rates</td>
                  <td>Domestic</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>BDT</td>
                  <td>GMT + 6</td>
                  <td>Dummy Data</td>
                  <td>00</td>
                  <td>Dummy Data</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0.1</td>
                  <td>No</td>
                  <td>Month First, Then Day</td>
                  <td>0</td>
                  <td>0.000000</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                  >
                    Edit
                  </td>
                  <td>Delete</td>
                  <td>Task</td>
                  <td>Rates</td>
                  <td>Domestic</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>BDT</td>
                  <td>GMT + 6</td>
                  <td>Dummy Data</td>
                  <td>00</td>
                  <td>Dummy Data</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0.1</td>
                  <td>No</td>
                  <td>Month First, Then Day</td>
                  <td>0</td>
                  <td>0.000000</td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                  <td>
                    <Select
                      options={serviceFamilyOption}
                      value={{ label: serviceLabel, value: serviceValue }}
                      onChange={(opt) =>
                        selectServiceFamily(opt.label, opt.value)
                      }
                      name="serviceFamily"
                      id="serviceFamily"
                      isDisabled={!editMode}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RatePlan;
