import React, { useContext } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { UserContext } from "../context/UserContext";
import Users from "../data/userData";

export default function LoginModal(props) {
  const [state, dispatch] = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email !== "" || password !== "") {
      Users.map((user) => {
        if (email === user.email) {
          const userSession = { id: user.id, name: user.name, email: user.email, password: user.password };
          // function setToken() {
          //   sessionStorage.setItem("token", "Authenticated");
          // }
          dispatch({ type: "LOGIN_SUCCESS", payload: { userSession } });
        }
        return null;
      });
    } else {
      return null;
    }
  };
  return (
    <>
      <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <input type="email" className="form-control" placeholder="Email" id="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <input type="password" className="form-control" placeholder="Password" id="password" />
            </Form.Group>
            <Button variant="danger" type="submit" className="col-12" onClick={props.handleCloseLogin}>
              Submit
            </Button>
            <p className="mt-3 text-center text-secondary">
              Don't have an account ? Click{" "}
              <span
                onClick={() => {
                  props.handleShowRegister();
                  props.handleCloseLogin();
                }}
                role="button"
                className="fw-bold text-dark text-decoration-none"
              >
                Here
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

LoginModal.propTypes = {
  showLogin: PropTypes.bool.isRequired,
  handleCloseLogin: PropTypes.func,
  handleShowRegister: PropTypes.func,
};
