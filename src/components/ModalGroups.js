import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import DetailDonateImg from "../assets/img/detaildonate.png";
import ApproveDonate from "../assets/img/approvedonate.png";

export default function DetailDonateModal(props) {
  //push to profile
  const history = useHistory();
  const handlePushToProfile = () => {
    history.push("/profile");
  };

  //approve modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={props.showDonateModal} onHide={props.handleCloseDonateModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Form className="py-4 px-2" onSubmit={handlePushToProfile}>
          <Modal.Body>
            <Form.Control type="text" placeholder="Nominal Donation" />
            <div className="d-flex justify-content-start my-3">
              <Button variant="danger" onClick={handleShow}>
                Attach Payment
                <img src={DetailDonateImg} alt="img" className="px-2" />
              </Button>
              <p className="text-secondary ms-3">*transfers can be made to holyways accounts</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="danger" className="col-12" onClick={props.handleCloseDonateModal}>
              Donate
            </Button>
          </Modal.Footer>
        </Form>

        <ApproveModal show={show} handleClose={handleClose} />
      </Modal>
    </>
  );
}

function ApproveModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Paijo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control type="text" placeholder="Nominal Donation" value="45.000.000" />
        <div className="show-proof text-center my-2">
          <img src={ApproveDonate} alt="img" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="col-12" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
