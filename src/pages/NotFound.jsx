import React from "react";
import { Container } from "react-bootstrap";
import Notfound from "../assets/img/NotFound.png";

export default function NotFound() {
  const title = "Not Found";
  document.title = title + " | Hollyways";
  return (
    <>
      <Container className="text-center">
        <img src={Notfound} alt="notfound" className="col-7" />
      </Container>
    </>
  );
}
