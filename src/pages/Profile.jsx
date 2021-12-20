import React, { useContext } from "react";
import ProfilePic from "../assets/img/ava.png";
import { UserContext } from "../context/UserContext";

import Donations from "../data/donationData";

export default function Profile() {
  const [state] = useContext(UserContext);
  return (
    <>
      <div className="container-fluid vh-100 py-5 d-flex bg-light justify-content-center">
        {/* user info */}
        <div className="col-6">
          <h3 className="mb-4 fw-bold">My Profile</h3>
          <div className="d-flex justify-content-start">
            <div className="col-4">
              <img src={ProfilePic} alt="profile" width="180px" className="rounded" />
            </div>
            <div className="col-8">
              <div className="info">
                <h5 className="text-danger fw-bold">Full Name</h5>
                <p className="text-secondary">{state.user.name}</p>
              </div>
              <div className="info">
                <h5 className="text-danger fw-bold">Email</h5>
                <p className="text-secondary">{state.user.email}</p>
              </div>
              <div className="info">
                <h5 className="text-danger fw-bold">Phone</h5>
                <p className="text-secondary">0812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>
        {/* history */}
        <div className="col-4">
          <h3 className="me-5 fw-bold mb-4">History Donation</h3>
          {Donations.map((donation) => {
            for (let i = 0; i < donation.donationApprovedUserId.length; i++) {
              if (state.user.id === donation.donationApprovedUserId[i]) {
                return (
                  <div className="px-3 py-4 mb-2" style={{ backgroundColor: "white", width: "580px" }} key={donation.id}>
                    <h5>{donation.name}</h5>
                    <p>Saturday, 12 April 2021</p>
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold text-danger">Total : Rp 45.000</p>
                      <button className="btn btn-light text-success fw-bold px-5">Finished</button>
                    </div>
                  </div>
                );
              }
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
