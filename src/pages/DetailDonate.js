import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import donate1 from "../assets/img/donate1.png";

import DetailDonateModal from "../components/ModalGroups";

export default function DetailDonate() {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handleCloseDonateModal = () => setShowDonateModal(false);
  const handleShowDonateModal = () => setShowDonateModal(true);
  return (
    <>
      <div className="container-fluid bg-light px-5">
        {/* detail donate */}
        <div className="py-5 d-flex">
          <img src={donate1} alt="" className="rounded col-5" style={{ objectFit: "cover" }} />
          <div className="offset-1 col-5">
            <h3>The Strength of a People. Power of Community</h3>
            <div className="my-5">
              <div className="d-flex justify-content-between">
                <p className="text-danger fw-bold">
                  Rp 25.000.000<span className="ms-3 text-secondary">gathered from</span>
                </p>
                <p className="fw-bold text-secondary">Rp 200.000.000</p>
              </div>
              <div className="mb-2">
                <ProgressBar variant="danger" now={80} />
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <span className="fw-bold">200</span> Donation
                </p>
                <p>
                  <span className="fw-bold">150</span> More Day
                </p>
              </div>
              <p className="text-secondary mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
              </p>
            </div>
            <Link to="#" className="col-12 btn btn-danger" onClick={handleShowDonateModal}>
              Donate
            </Link>
            <DetailDonateModal showDonateModal={showDonateModal} handleCloseDonateModal={handleCloseDonateModal} />
          </div>
        </div>

        {/* list donation */}
        <div className="py-3">
          <h2 className="mb-2 fw-bold">List Donation (200)</h2>
          {/* list */}
          <div className="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <h4 className="fw-bold">Paijo</h4>
            <p>
              <span className="fw-bold">Saturday</span>, 12 April 2021
            </p>
            <p className="text-danger fw-bold">Total : Rp 45.000</p>
          </div>
          {/* list */}
          <div className="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <h4 className="fw-bold">Paijo</h4>
            <p>
              <span className="fw-bold">Saturday</span>, 12 April 2021
            </p>
            <p className="text-danger fw-bold">Total : Rp 45.000</p>
          </div>
        </div>

        {/* donation not approved */}
        <div className="py-3">
          <h2 className="mb-2 fw-bold">Donation has not been approved (10)</h2>
          {/* list */}
          <div className="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <div className="d-flex justify-content-between">
              <div className="col-6">
                <h4 className="fw-bold">Paijo</h4>
                <p>
                  <span className="fw-bold">Saturday</span>, 12 April 2021
                </p>
                <p className="text-danger fw-bold">Total : Rp 45.000</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-danger px-5" style={{ height: "50px" }}>
                  View
                </button>
              </div>
            </div>
          </div>
          {/* list */}
          <div className="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
            <div className="d-flex justify-content-between">
              <div className="col-6">
                <h4 className="fw-bold">Paijo</h4>
                <p>
                  <span className="fw-bold">Saturday</span>, 12 April 2021
                </p>
                <p className="text-danger fw-bold">Total : Rp 45.000</p>
              </div>
              <div className="d-flex align-items-center">
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
