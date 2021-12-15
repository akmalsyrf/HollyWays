import React from "react";
import { Form } from "react-bootstrap";

export default function MakeFund() {
  return (
    <>
      <div className="container-fluid bg-light px-5 py-5">
        <Form className="container">
          <h2 className="mb-5 fw-bold">Make Raise Fund</h2>
          <div className="show-image"></div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <button className="btn btn-danger mb-3">Attache Thumbnail</button>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Goals Donation" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Description" style={{ resize: "none" }} />
          </Form.Group>
          <div className="d-flex">
            <button type="submit" className="btn btn-danger offset-9 col-3">
              Public Fundraising
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
