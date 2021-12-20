import React, { useState, useContext } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import { UserContext } from "../context/UserContext";

import LoginModal from "./LoginModal";

export default function CardDonate(props) {
  const [state] = useContext(UserContext);

  // modal register state
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);

  //modal login state
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const loginModalProps = {
    showLogin,
    handleCloseLogin,
    handleShowRegister,
  };
  return (
    <div className="col-3 mt-5 ms-5" key={props.i}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.donationPicture} alt="donation picture" />
        <Card.Body>
          <Card.Title>{props.donationName}</Card.Title>
          <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</Card.Text>
        </Card.Body>
        <div className="px-2">
          <ProgressBar variant="danger" now={props.progress} />
        </div>
        <Card.Body className="d-flex justify-content-between">
          <Card.Link className="text-decoration-none text-dark fw-bold">{props.total}</Card.Link>
          {state.isLogin ? (
            <Card.Link className="btn btn-danger" onClick={() => props.handleClickButton(props.donationId)}>
              {props.buttonName}
            </Card.Link>
          ) : (
            <Card.Link className="btn btn-danger" onClick={handleShowLogin}>
              {props.buttonName}
            </Card.Link>
          )}
        </Card.Body>
      </Card>
      <LoginModal {...loginModalProps} />
    </div>
  );
}

CardDonate.propTypes = {
  i: PropTypes.number.isRequired,
  donationPicture: PropTypes.string,
  donationName: PropTypes.string.isRequired,
  progress: PropTypes.number,
  buttonName: PropTypes.string,
};
