import React, { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { rootUrl } from "../../../constants/constants";
import AddRole from "./AddRole";
import UpdateRole from "./UpdateRole";
import roleServices from "../../../apiServices/RoleServices/RoleServices";
import permissionServices from "../../../apiServices/PermissionServices/PermissionServices";

const RoleManagement = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setpermissions] = useState([]);
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  const [userId, setUserId] = useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 900,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const initialFormData = {
    role: "",
    descrption: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [roleData, setRoleData] = useState(initialFormData);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const authToken = "Bearer " + userInfo.token;

  // fetch all user
  const fetchRoles = async () => {
    try {
      const data = await roleServices.fetchRoles();
      setRoles(data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  const fetchPermission = async () => {
    try {
      const data = await permissionServices.fetchPermissions();
      setpermissions(data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  useEffect(() => {
    fetchRoles();
    fetchPermission();
  }, []);

  // single Role data
  const fetchRoleData = async (id) => {
    try {
      const data = await roleServices.fetchRoleById(id, userInfo.token);
      setRoleData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // create Role
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "role" ? value.toUpperCase() : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roleData = {
      name: formData.role,
      description: formData.description,
    };
    try {
      await roleServices.createRole(roleData);
      handleClose();
      fetchRoles();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // update Role
  const handleUpdateOpen = async (id) => {
    setUserId(id);
    setUpdateOpen(true);
    await fetchRoleData(id);
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
    setRoleData(initialFormData);
  };
  const updateHandleChange = (e) => {
    const { name, value } = e.target;
    setRoleData({
      ...formData,
      [name]: name === "role" ? value.toUpperCase() : value,
    });
  };
  // const handleUpdateSubmit = (e, id) => {
  //   e.preventDefault();
  //   const updateUserData = {
  //     role: roleData.role,
  //     descrption: roleData.descrption,
  //   };
  //   axios
  //     .put(`${rootUrl}editUser/${id}`, updateUserData, {
  //       headers: {
  //         Authorization: "Bearer " + userInfo.token,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       handleClose();
  //       fetchRoles();
  //     })
  //     .catch((error) => {
  //       console.log("Error updating user:", error);
  //     });
  // };
  // // delete Role

  const handleDeleteRole = async (id) => {
    try {
      await roleServices.deleteRole(id, userInfo.token);
      fetchRoles();
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };
  const permission = permissions.map((role) => ({
    value: role.name,
    label: role.name,
  }));
  console.log("permission :", permission);
  return (
    <div>
      {/* Modal add user*/}
      <AddRole
        open={open}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        formData={formData}
        style={style}
        setFormData={setFormData}
        permission={permission}
      />

      {/* end */}
      {/* update modal */}
      <UpdateRole
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        style={style}
        // handleUpdateSubmit={handleUpdateSubmit}
        roleData={roleData}
        updateHandleChange={updateHandleChange}
        setRoleData={setRoleData}
        permission={permission}
      />
      {/* update modal end */}
      <Card>
        <CardBody>
          <div className="border-bottom mb-4">
            <h4 className="pb-3">Role Management</h4>
          </div>
          <div className="mt-4 container-fluid">
            <div className="row mb-3">
              <div className="col-md-4">
                <h6>Find Role : </h6>
                <form style={{ display: "flex", alignItems: "center" }}>
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
                className="col-md-8 d-flex justify-content-end"
                style={{ marginTop: "23px" }}
              >
                <Button style={{ padding: "7px 30px" }} onClick={handleOpen}>
                  Add Role
                </Button>
              </div>
            </div>
          </div>
          {/* <TableContainer component={Paper}> */}
          <div
            className="overflow-auto"
            style={{ maxWidth: "100%", overflowX: "scroll" }}
          >
            <Table id="table-to-xls" className="table-sm table-bordered">
              <TableHead className="thead-uapp-bg">
                <TableRow style={{ textAlign: "center" }}>
                  <th></th>
                  <th align="right">Role</th>
                  <th align="right">Description</th>
                  <th align="right">Action</th>
                </TableRow>
              </TableHead>
              <tbody>
                {roles.map((row, i) => (
                  <tr key={row.name}>
                    <td style={{ padding: "2px 16px" }}>{i + 1}</td>

                    <td style={{ padding: "2px 16px", minWidth: "220px" }}>
                      {row.name}
                    </td>
                    <td style={{ padding: "2px 16px", minWidth: "220px" }}>
                      {row.description}
                    </td>
                    <td style={{ padding: "2px 16px", minWidth: "220px" }}>
                      <Button onClick={() => handleUpdateOpen(row.id)}>
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteRole(row.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Permissoin</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roles.map((row, i) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={{ padding: "2px 16px" }}>
                      {i + 1}
                    </TableCell>

                    <TableCell style={{ padding: "2px 16px" }}>
                      {row.name}
                    </TableCell>
                    <TableCell style={{ padding: "2px 16px" }}>
                      {row.descriptiom}
                    </TableCell>
                    <TableCell style={{ padding: "2px 16px" }}>
                      <Button onClick={() => handleUpdateOpen(row.id)}>
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteRole(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
          {/* </TableContainer> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default RoleManagement;
