import React from "react";
import ProfilePic from "../assets/img/ava.png";

export default function Profile() {
  return (
    <>
      <div className="row container-fluid py-5 px-5 d-flex bg-light justify-content-center">
        <div className="col-6">
          <h3 className="mb-4 fw-bold">My Profile</h3>
          <div className="d-flex justify-content-start">
            <div className="col-4">
              <img src={ProfilePic} alt="profile" width="180px" className="rounded" />
            </div>
            <div className="col-8">
              <div className="info">
                <h5 className="text-danger fw-bold">Full Name</h5>
                <p className="text-secondary">Paijo</p>
              </div>
              <div className="info">
                <h5 className="text-danger fw-bold">Email</h5>
                <p className="text-secondary">paijogans@mail.com</p>
              </div>
              <div className="info">
                <h5 className="text-danger fw-bold">Phone</h5>
                <p className="text-secondary">0812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h3 className="me-5 fw-bold mb-4">History Donation</h3>
          <div className="px-3 py-4" style={{ backgroundColor: "white", width: "580px" }}>
            <h5>The Strength of a People. Power of Community</h5>
            <p>Saturday, 12 April 2021</p>
            <div className="d-flex justify-content-between">
              <p className="fw-bold text-danger">Total : Rp 45.000</p>
              <button className="btn btn-light text-success fw-bold px-5" style={{ backgroundColor: "linear-gradient(180deg, #00FF75 0%, #00FF85 100%)" }}>
                Finished
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
