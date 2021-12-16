import React from "react";
import { Link } from "react-router-dom";
import CardDonate from "../components/CardDonate";

import Users from "../data/userData";
import Donations from "../data/donationData";
import { Rupiah } from "../data/rupiahFormat";

export default function RaiseFund() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <div className="container-fluid py-5 px-5 bg-light">
        <div className="d-flex justify-content-between">
          <h4 className="mb-4 fw-bold">My Raise Fund</h4>
          <Link to="/make-fund" className="btn btn-danger pt-2 fw-bold me-1">
            Make Raise Fund
          </Link>
        </div>
        <div className="d-flex justify-content-start flex-wrap">
          {Users.map((user) => {
            //current user login
            if (user.id == 1) {
              return Donations.map((donation, i) => {
                const total = Rupiah(donation.total);
                const progress = (Number(donation.total) / Number(donation.target)) * 100;
                const props = {
                  i,
                  donationPicture: donation.picture,
                  donationName: donation.name,
                  progress,
                  total,
                  handleClickButton: handleClick,
                  donationId: donation.id,
                  buttonName: "View Fund",
                };
                //take raise fund base on current user login
                if (donation.id == user.raiseFundId) {
                  return (
                    <>
                      <CardDonate {...props} />
                    </>
                  );
                }
              });
            }
          })}
        </div>
      </div>
    </>
  );
}
