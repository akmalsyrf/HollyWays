import React, {useState} from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Icon from "../assets/img/Icon.png"
import Ava from "../assets/img/ava.png"
import ProfileIcon from "../assets/img/profileicon.png"
import FundIcon from "../assets/img/fundicon.png"
import LogoutIcon from "../assets/img/logouticon.png"
import Polygon from "../assets/img/Polygon.png"

import { LoginModal, RegisterModal} from "./ModalGroups"

function Login(props) {
    const isLogin = true;
    if (isLogin) {
      return (
        <>
          <NavDropdown align="end" title={<img src={Ava} width="50px" height="50px" alt="" className="rounded-circle"/>} id="dropdown-menu-align-end">
              <img src={Polygon} alt="ico" className="position-absolute" style={{top:"-20px", left:"80%", width:"30px"}}/>
            <NavDropdown.Item className="fw-bold my-2" href="#action3"><img src={ProfileIcon} className="me-2" alt="ico"/> Profile</NavDropdown.Item>
            <NavDropdown.Item className="fw-bold my-2" href="#action4"><img src={FundIcon} className="me-2" alt="ico"/> Raise Fund</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="fw-bold my-2" href="#action5"><img src={LogoutIcon} className="me-2" alt="ico"/> Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      );
    } else {
      return (
        <>
          <Button variant="danger" onClick={props.handleShowLogin} className="me-2 px-3">
            Login
          </Button>
          <Button variant="light" onClick={props.handleShowRegister} className="me-2 text-danger">
            Register
          </Button>
        </>
      );
    }
  }
  

export default function NavBar() {
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      {/* navbar */}
      <Navbar bg="danger" expand="lg">
        <Container fluid className="text-light">
          <Navbar.Brand href="/"><img src={Icon} alt="ico"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            </Nav>
            <Login handleShowLogin={handleShowLogin} handleShowRegister={handleShowRegister} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* modal register and login */}
      <LoginModal showLogin={showLogin} handleCloseLogin={handleCloseLogin} handleShowRegister={handleShowRegister}/>
      <RegisterModal showRegister={showRegister} handleCloseRegister={handleCloseRegister} handleShowLogin={handleShowLogin} />
    </>
  );
}
