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

import AddUserModal from "./AddUserModal";
import UpdateUserModal from "./UpdateUserModal";

const UserManagement = () => {
  const [passwordError, setPasswordError] = useState("");
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  console.log(users);
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
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    userStatus: "",
    role: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [userData, setUserData] = useState(initialFormData);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const authToken = "Bearer " + userInfo.token;

  // fetch all user
  const fetchUsers = useCallback(() => {
    axios
      .get(`${rootUrl}allUser`, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userInfo.token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  // http://localhost:8001/AUTHENTICATION/user/1
  // single user data
  const fetchUserData = (id) => {
    axios
      .get(`${rootUrl}user/${id}`, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // create User
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNo: formData.phoneNo,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      userStatus: formData.userStatus,
    };
    axios
      .post(`${rootUrl}auth/register`, userData)
      .then((response) => {
        handleClose();
        fetchUsers();
      })
      .catch((error) => {
        console.log("Error adding user:", error);
      });
  };
  // update User
  const handleUpdateOpen = (id) => {
    setUserId(id);
    setUpdateOpen(true);
    fetchUserData(id);
  };
  const handleUpdateClose = () => {
    setUpdateOpen(false);
    setUserData(initialFormData);
  };
  const updateHandleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleUpdateSubmit = (e, id) => {
    e.preventDefault();
    const updateUserData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNo: userData.phoneNo,
      email: userData.email,
      role: userData.role,
      userStatus: userData.userStatus,
    };
    axios
      .put(`${rootUrl}editUser/${id}`, updateUserData, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        handleClose();
        fetchUsers();
      })
      .catch((error) => {
        console.log("Error updating user:", error);
      });
  };
  // delete User
  const handleDeleteUser = (id) => {
    axios
      .delete(`${rootUrl}removeUser/${id}`, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      })
      .then((response) => {
        fetchUsers();
      })
      .catch((error) => {
        console.error("Error removing user:", error);
      });
  };

  // roles
  // useEffect(() => {
  //   const fetchRoles = async () => {
  //     try {
  //       const response = await axios.get(`${rootUrl}rest/auth/roles`);
  //       setRoles(response.data);
  //     } catch (error) {
  //       console.error("Error fetching roles:", error);
  //     }
  //   };

  //   fetchRoles();
  // }, []);
  const adminRole = roles.map((role) => ({
    value: role.name,
    label: role.name,
  }));
  return (
    <div>
      {/* Modal add user*/}
      <AddUserModal
        open={open}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        formData={formData}
        style={style}
        setFormData={setFormData}
        adminRole={adminRole}
        passwordError={passwordError}
      />

      {/* end */}
      {/* update modal */}
      <UpdateUserModal
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        style={style}
        handleUpdateSubmit={handleUpdateSubmit}
        userData={userData}
        updateHandleChange={updateHandleChange}
        adminRole={adminRole}
        setUserData={setUserData}
      />
      {/* update modal end */}
      <Card>
        <CardBody>
          <div className="border-bottom mb-4">
            <h4 className="pb-3">User Management</h4>
          </div>
          <div className="mt-4 container-fluid">
            <div className="row mb-3">
              <div className="col-md-4">
                <h6>Find User : </h6>
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
                className="col-md-8 d-flex justify-content-end"
                style={{ marginTop: "23px" }}
              >
                <Button style={{ padding: "7px 30px" }} onClick={handleOpen}>
                  Add User
                </Button>
              </div>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">User Name</TableCell>
                  <TableCell align="right">Role</TableCell>
                  <TableCell align="right">Created on</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={{ padding: "2px 16px" }}>
                      {row.id}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ padding: "0px 16px" }}
                    >
                      {row.firstName} {row.lastName}
                    </TableCell>
                    {/* <TableCell style={{ padding: "2px 16px" }}>
                      {row?.role}
                    </TableCell> */}
                    {/* <TableCell style={{ padding: "2px 16px" }}>
                      {row.roles.map((role) => (
                        <span key={role.name}> {role.name}</span>
                      ))}
                    </TableCell> */}
                    <TableCell style={{ padding: "2px 16px" }}>
                      {row.role}
                    </TableCell>
                    <TableCell style={{ padding: "2px 16px" }}>
                      {row.createdOn}
                    </TableCell>
                    <TableCell style={{ padding: "2px 16px" }}>
                      {row.userStatus}
                    </TableCell>
                    <TableCell style={{ padding: "2px 16px" }}>
                      <Button onClick={() => handleUpdateOpen(row.id)}>
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteUser(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserManagement;
