import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import ApproveDonate from "../../assets/img/approvedonate.png";

export default function ApproveModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.userName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control type="text" placeholder="Nominal Donation" value="45.000.000" onChange="" />
        <div className="show-proof text-center my-2">
          <img src={ApproveDonate} alt="img" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="col-12" onClick={props.handleClose}>
          Approve
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ApproveModal.propTypes = {
  show: PropTypes.bool.isRequired,
};
