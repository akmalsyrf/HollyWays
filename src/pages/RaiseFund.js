import React from "react";
import NavBar from "../components/NavBar";
import { Card, ProgressBar } from "react-bootstrap";

import donate1 from "../assets/img/donate1.png";

export default function RaiseFund() {
  return (
    <>
      <NavBar />
      <div class="container-fluid py-5 px-5 bg-light">
        <div class="row d-flex justify-content-between">
          <div class="col-6">
            <h3 className="mb-4 fw-bold">My Raise Fund</h3>
          </div>
          <button class="btn btn-danger fw-bold col-2 offset-1 me-1">Make Raise Fund</button>
        </div>
        <div class="d-flex justify-content-start mt-5">
          {/* card */}
          <div class="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={donate1} />
              <Card.Body>
                <Card.Title>The Strength of a People. Power of Community</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
              <div class="px-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                <Card.Link className="btn btn-danger" href="#">
                  Donate
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          {/* card */}
          <div class="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={donate1} />
              <Card.Body>
                <Card.Title>The Strength of a People. Power of Community</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
              <div class="px-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                <Card.Link className="btn btn-danger" href="#">
                  Donate
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          {/* card */}
          <div class="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={donate1} />
              <Card.Body>
                <Card.Title>The Strength of a People. Power of Community</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
              <div class="px-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                <Card.Link className="btn btn-danger" href="#">
                  Donate
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
