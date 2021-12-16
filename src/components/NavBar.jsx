import React, { useState, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import Icon from "../assets/img/Icon.png";
import Ava from "../assets/img/ava.png";
import ProfileIcon from "../assets/img/profileicon.png";
import FundIcon from "../assets/img/fundicon.png";
import LogoutIcon from "../assets/img/logouticon.png";
import Polygon from "../assets/img/Polygon.png";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function NavBar() {
  //handling login and logout
  const [state, dispatch] = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = { email, password };
    function setToken() {
      localStorage.setItem("token", "Authenticated");
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: { user, token: setToken() } });
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: {} });
  };

  // modal register state
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  //modal login state
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  //props
  const conditionalNavbarProps = {
    handleShowLogin,
    handleShowRegister,
    isLogin: state.isLogin,
    handleLogout,
  };

  const loginModalProps = {
    showLogin,
    handleCloseLogin,
    handleShowRegister,
    handleLogin,
  };

  const registerModalProps = {
    showRegister,
    handleCloseRegister,
    handleShowLogin,
  };

  return (
    <>
      <Navbar bg="danger" expand="lg" sticky="top">
        <Container fluid className="text-light">
          <Link to="/">
            <img src={Icon} alt="ico" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <ConditionalNavbar {...conditionalNavbarProps} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* modal register and login */}
      <LoginModal {...loginModalProps} />
      <RegisterModal {...registerModalProps} />
    </>
  );
}

function ConditionalNavbar(props) {
  return (
    <div>
      {props.isLogin ? (
        <>
          <NavDropdown align="end" title={<img src={Ava} width="50px" height="50px" alt="" className="rounded-circle" />} id="dropdown-menu-align-end">
            <img src={Polygon} alt="ico" className="position-absolute" style={{ top: "-20px", left: "80%", width: "30px" }} />
            <Link className="fw-bold my-2 dropdown-item" to="/profile">
              <img src={ProfileIcon} className="me-2" alt="ico" /> Profile
            </Link>
            <Link className="fw-bold my-2 dropdown-item" to="/raise-fund">
              <img src={FundIcon} className="me-2" alt="ico" /> Raise Fund
            </Link>
            <NavDropdown.Divider />
            <Link className="fw-bold my-2 dropdown-item" to="/" onClick={props.handleLogout}>
              <img src={LogoutIcon} className="me-2" alt="ico" /> Logout
            </Link>
          </NavDropdown>
        </>
      ) : (
        <>
          <Button variant="danger" onClick={props.handleShowLogin} className="me-2 px-3">
            Login
          </Button>
          <Button variant="light" onClick={props.handleShowRegister} className="me-2 text-danger">
            Register
          </Button>
        </>
      )}
    </div>
  );
}
