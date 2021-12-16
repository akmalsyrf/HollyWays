import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export default function LoginModal(props) {
  return (
    <>
      <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" id="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" id="password" />
            </Form.Group>
            <Button variant="danger" type="submit" className="col-12" onClick={props.handleCloseLogin}>
              Submit
            </Button>
            <p className="mt-3 text-center text-secondary">
              Don't have an account ? Click{" "}
              <span onClick={props.handleShowRegister} role="button" className="fw-bold text-dark text-decoration-none">
                Here
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

LoginModal.propTypes = {
  showLogin: PropTypes.bool.isRequired,
  handleCloseLogin: PropTypes.func,
  handleShowRegister: PropTypes.func,
};
