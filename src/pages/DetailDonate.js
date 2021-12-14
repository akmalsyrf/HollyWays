import React from "react";
import { ProgressBar } from "react-bootstrap";
import NavBar from "../components/NavBar";
import donate1 from "../assets/img/donate1.png";

export default function DetailDonate() {
  return (
    <>
      <NavBar />

      <div class="container-fluid bg-light px-5">
        {/* detail donate */}
        <div class="py-5 d-flex">
          <img src={donate1} alt="" className="rounded col-5" style={{ objectFit: "cover" }} />
          <div class="offset-1 col-5">
            <h3>The Strength of a People. Power of Community</h3>
            <div class="my-5">
              <div class="d-flex justify-content-between">
                <p className="text-danger fw-bold">
                  Rp 25.000.000<span className="ms-3 text-secondary">gathered from</span>
                </p>
                <p className="fw-bold text-secondary">Rp 200.000.000</p>
              </div>
              <div class="mb-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <div class="d-flex justify-content-between">
                <p>
                  <span className="fw-bold">200</span> Donation
                </p>
                <p>
                  <span className="fw-bold">150</span> More Day
                </p>
              </div>
              <p class="text-secondary mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
              </p>
            </div>
            <button className="col-12 btn btn-danger">Donate</button>
          </div>
        </div>

        {/* list donation */}
        <div class="py-3">
          <h2 className="mb-2 fw-bold">List Donation (200)</h2>
          {/* list */}
          <div class="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <h4 class="fw-bold">Paijo</h4>
            <p>
              <span className="fw-bold">Saturday</span>, 12 April 2021
            </p>
            <p className="text-danger fw-bold">Total : Rp 45.000</p>
          </div>
          {/* list */}
          <div class="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <h4 class="fw-bold">Paijo</h4>
            <p>
              <span className="fw-bold">Saturday</span>, 12 April 2021
            </p>
            <p className="text-danger fw-bold">Total : Rp 45.000</p>
          </div>
        </div>

        {/* donation not approved */}
        <div class="py-3">
          <h2 className="mb-2 fw-bold">Donation has not been approved (10)</h2>
          {/* list */}
          <div class="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <div class="d-flex justify-content-between">
              <div class="col-6">
                <h4 class="fw-bold">Paijo</h4>
                <p>
                  <span className="fw-bold">Saturday</span>, 12 April 2021
                </p>
                <p className="text-danger fw-bold">Total : Rp 45.000</p>
              </div>
              <div class="d-flex align-items-center">
                <button className="btn btn-danger px-5" style={{ height: "50px" }}>
                  View
                </button>
              </div>
            </div>
          </div>
          {/* list */}
          <div class="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <div class="d-flex justify-content-between">
              <div class="col-6">
                <h4 class="fw-bold">Paijo</h4>
                <p>
                  <span className="fw-bold">Saturday</span>, 12 April 2021
                </p>
                <p className="text-danger fw-bold">Total : Rp 45.000</p>
              </div>
              <div class="d-flex align-items-center">
                <button className="btn btn-danger px-5" style={{ height: "50px" }}>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
