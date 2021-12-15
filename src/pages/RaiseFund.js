import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import donate1 from "../assets/img/donate1.png";

export default function RaiseFund() {
  return (
    <>
      <div className="container-fluid py-5 px-5 bg-light">
        <div className="d-flex justify-content-between">
          <h4 className="mb-4 fw-bold">My Raise Fund</h4>
          <Link to="/make-fund" className="btn btn-danger pt-2 fw-bold me-1">
            Make Raise Fund
          </Link>
        </div>
        <div className="d-flex justify-content-start flex-wrap">
          {/* card */}
          <div className="col-3 mt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={donate1} />
              <Card.Body>
                <Card.Title>The Strength of a People. Power of Community</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
              <div className="px-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                <Card.Link className="btn btn-danger" href="#">
                  View Fund
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          {/* card */}
          <div className="col-3 mt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={donate1} />
              <Card.Body>
                <Card.Title>The Strength of a People. Power of Community</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
              <div className="px-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                <Card.Link className="btn btn-danger" href="#">
                  View Fund
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          {/* card */}
          <div className="col-3 mt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={donate1} />
              <Card.Body>
                <Card.Title>The Strength of a People. Power of Community</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
              <div className="px-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                <Card.Link className="btn btn-danger" href="#">
                  View Fund
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
