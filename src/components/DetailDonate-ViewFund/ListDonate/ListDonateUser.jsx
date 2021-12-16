import React, { useState } from "react";
import { Button } from "react-bootstrap";

import ApproveModal from "../ApproveModal";

export default function ListDonateUser(props) {
  //show approve modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {props.isApproved ? (
        <>
          <div className="p-3 col-12 my-3" style={{ backgroundColor: "white" }} key={props.key}>
            <h4 className="fw-bold">{props.userName}</h4>
            <p>
              <span className="fw-bold">Saturday</span>, 12 April 2021
            </p>
            <p className="text-danger fw-bold">Total : Rp 45.000</p>
          </div>
        </>
      ) : (
        <>
          <div className="p-3 my-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: "white" }} key={props.key}>
            <div className="col-11">
              <h4 className="fw-bold">{props.userName}</h4>
              <p>
                <span className="fw-bold">Saturday</span>, 12 April 2021
              </p>
              <p className="text-danger fw-bold">Total : Rp 45.000</p>
            </div>
            <div className="col-1">
              <Button variant="danger" onClick={handleShow}>
                View
              </Button>
            </div>
          </div>
          <ApproveModal show={show} handleClose={handleClose} userName={props.userName} />
        </>
      )}
    </>
  );
}
