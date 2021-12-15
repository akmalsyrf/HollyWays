import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import imgLandingPage1 from "../assets/img/landingpage 1.png";
import imgLandingPage2 from "../assets/img/landingpage 2.png";
import donate1 from "../assets/img/donate1.png";
import donate2 from "../assets/img/donate2.png";
import donate3 from "../assets/img/donate3.png";

export default function LandingPage() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        {/* img landingpage */}
        <img src={imgLandingPage1} alt="img" className="mt-5" style={{ float: "right" }} />
        <img src={imgLandingPage2} alt="img" className="position-absolute" style={{ top: "650px" }} />

        {/* primary content */}
        <div style={{ width: "100%", height: "603px" }} className="bg-danger">
          <div style={{ marginLeft: "150px" }} className="col-5 pt-5">
            <h2 className="text-light mb-5">While you are still standing, try to reach out to the people who are falling.</h2>
            <p className="text-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book.{" "}
            </p>
            <a href="#donate" className="btn btn-light text-danger fw-bold px-5 mt-3">
              Donate Now
            </a>
          </div>
        </div>

        {/* secondary content */}
        <div style={{ height: "603px", paddingLeft: "600px", paddingTop: "150px", paddingRight: "150px" }} className="bg-light">
          <h2 className="mb-5">Your donation is very helpful for people affected by forest fires in Kalimantan.</h2>
          <div className="row">
            <p className="col-6 text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book.{" "}
            </p>
            <p className="col-6 text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>

        {/* card content */}
        <div id="donate" className="py-5 bg-light">
          <h1 className="text-center text-danger fw-bold me-5">Donate Now</h1>
          <div className="d-flex justify-content-start container flex-wrap pe-5">
            {/* card */}
            <div className="col-3 mt-5 ms-5">
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
                  <Card.Link className="btn btn-danger" href="/detail-donate/1">
                    Donate
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            {/* card */}
            <div className="ms-5 col-3 mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={donate2} />
                <Card.Body>
                  <Card.Title>Empowering Communities Ending Poverty</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
                <div className="px-2">
                  <ProgressBar variant="danger" now={80} />
                </div>
                <Card.Body className="d-flex justify-content-between">
                  <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                  <Card.Link className="btn btn-danger" href="/detail-donate/1">
                    Donate
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            {/* card */}
            <div className="ms-5 col-3 mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={donate3} />
                <Card.Body>
                  <Card.Title>Please help our brothers in Flores</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
                <div className="px-2">
                  <ProgressBar variant="danger" now={80} />
                </div>
                <Card.Body className="d-flex justify-content-between">
                  <Card.Link className="text-decoration-none text-dark fw-bold">Rp 25.000.000</Card.Link>
                  <Card.Link className="btn btn-danger" href="/detail-donate/1">
                    Donate
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
