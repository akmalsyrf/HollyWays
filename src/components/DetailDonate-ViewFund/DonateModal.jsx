import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import AttachPayment from "../../assets/img/attachpayment.png";

export default function DonateModal(props) {
  //push to profile
  const history = useHistory();
  const handleToProfile = () => {
    history.push("/profile");
  };
  return (
    <>
      <Modal show={props.showDonateModal} onHide={props.handleCloseDonateModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Form className="py-4 px-2" onSubmit={handleToProfile}>
          <Modal.Body>
            <Form.Control type="text" placeholder="Nominal Donation" />
            <div className="d-flex justify-content-start my-3">
              <Button variant="danger">
                Attach Payment
                <img src={AttachPayment} alt="img" className="px-2" />
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
      </Modal>
    </>
  );
}

DonateModal.propTypes = {
  showDonateModal: PropTypes.bool.isRequired,
};
