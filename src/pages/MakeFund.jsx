import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import Donations from "../data/donationData";

export default function MakeFund() {
  const history = useHistory();
  console.log(Donations);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const goals = document.getElementById("goals").value;
    const newDonation = {
      id: 1,
      name: title,
      picture: "",
      total: 0,
      target: goals,
      donationApprovedUserId: [],
      donationNotApprovedUserId: [],
      isFinished: false,
    };
    Donations.push(newDonation);
    history.push("/");
  };
  return (
    <>
      <div className="container-fluid vh-100 bg-light px-5 py-5">
        <Form className="container" onSubmit={handleSubmit}>
          <h2 className="mb-5 fw-bold">Make Raise Fund</h2>
          <div className="show-image"></div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <input type="text" className="form-control" placeholder="Title" id="title" />
          </Form.Group>
          <button className="btn btn-danger mb-3">Attache Thumbnail</button>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <input type="number" className="form-control" placeholder="Goals Donation" id="goals" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <textarea className="form-control" rows={3} placeholder="Description" id="description" style={{ resize: "none" }} />
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
