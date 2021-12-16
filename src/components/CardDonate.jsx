import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

export default function CardDonate(props) {
  return (
    <div className="col-3 mt-5 ms-5" key={props.i}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.donationPicture} />
        <Card.Body>
          <Card.Title>{props.donationName}</Card.Title>
          <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</Card.Text>
        </Card.Body>
        <div className="px-2">
          <ProgressBar variant="danger" now={props.progress} />
        </div>
        <Card.Body className="d-flex justify-content-between">
          <Card.Link className="text-decoration-none text-dark fw-bold">{props.total}</Card.Link>
          <Card.Link className="btn btn-danger" onClick={() => props.handleClickButton(props.donationId)}>
            {props.buttonName}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
