import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export default function RegisterModal(props) {
  return (
    <>
      <Modal show={props.showRegister} onHide={props.handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Button variant="danger" className="col-12" onClick={props.handleCloseRegister}>
              Submit
            </Button>
            <p className="mt-3 text-center text-secondary">
              Already have an account ? Click{" "}
              <a onClick={props.handleShowLogin} role="button" className="fw-bold text-dark text-decoration-none">
                Here
              </a>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
RegisterModal.propTypes = {
  showRegister: PropTypes.bool.isRequired,
};
