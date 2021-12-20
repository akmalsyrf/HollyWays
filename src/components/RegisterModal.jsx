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
              <input type="email" className="form-control" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <input type="password" className="form-control" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <input type="text" className="form-control" placeholder="Full Name" />
            </Form.Group>
            <Button type="submit" variant="danger" className="form-control col-12" onClick={props.handleCloseRegister}>
              Submit
            </Button>
            <p className="mt-3 text-center text-secondary">
              Already have an account ? Click{" "}
              <span
                onClick={() => {
                  props.handleShowLogin();
                  props.handleCloseRegister();
                }}
                role="button"
                className="fw-bold text-dark text-decoration-none"
              >
                Here
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
RegisterModal.propTypes = {
  showRegister: PropTypes.bool.isRequired,
  handleCloseRegister: PropTypes.func,
  handleShowLogin: PropTypes.func,
};
