import React, { useState, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import Icon from "../assets/img/Icon.png";

import ConditionalNavbar from "../context/ConditionalNavbar/ConditionalNavbar";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function NavBar() {
  //handling logout
  const [state, dispatch] = useContext(UserContext);
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
  };

  const registerModalProps = {
    showRegister,
    handleCloseRegister,
    handleShowLogin,
  };

  return (
    <>
      <Navbar bg="danger" expand="lg" sticky="top">
        <Container fluid className="text-light mx-5">
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
