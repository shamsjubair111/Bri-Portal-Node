import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";

const RoleForm = ({
  open,
  handleClose,
  handleSubmit,
  formData,
  handleChange,
  title,
  buttonText,
}) => {
  const { role = "", description = "" } = formData || {};
  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: 900,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h2">
              {title}
            </Typography>

            <Form onSubmit={handleSubmit}>
              <Row className="mb-4">
                <Col md={8}>
                  <Form.Group controlId="roleName">
                    <Form.Label>Role Name :</Form.Label>
                    <Form.Control
                      type="text"
                      name="role"
                      placeholder="Enter Role name"
                      required
                      value={role}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={8}>
                  <Form.Group controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="description"
                      placeholder="Description....."
                      value={description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button className="mt-4" variant="primary" type="submit">
                {buttonText}
              </Button>
            </Form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default RoleForm;
