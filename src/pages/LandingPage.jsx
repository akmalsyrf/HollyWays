import React from "react";
import { useHistory } from "react-router-dom";
import imgLandingPage1 from "../assets/img/landingpage 1.png";
import imgLandingPage2 from "../assets/img/landingpage 2.png";

import Donations from "../data/donationData";
import { Rupiah } from "../data/rupiahFormat";
import CardDonate from "../components/CardDonate";

export default function LandingPage() {
  const history = useHistory();
  const handleToDetailDonate = (id) => {
    history.push(`/detail-donate/${id}`);
  };
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        {/* img landingpage */}
        <img src={imgLandingPage1} alt="img" className="mt-5" style={{ float: "right" }} />
        <img src={imgLandingPage2} alt="img" className="position-absolute" style={{ top: "620px" }} />

        {/* primary content */}
        <div style={{ width: "100%", height: "603px" }} className="bg-danger">
          <div style={{ marginLeft: "150px" }} className="col-5 pt-5">
            <h2 className="text-light mb-4">While you are still standing, try to reach out to the people who are falling.</h2>
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

        {/* card donate */}
        <div id="donate" className="py-5 bg-light">
          <h1 className="text-center text-danger fw-bold me-5">Donate Now</h1>
          <div className="d-flex justify-content-start container flex-wrap pe-5">
            {Donations.map((donation, i) => {
              const total = Rupiah(donation.total);
              const progress = (Number(donation.total) / Number(donation.target)) * 100;
              const props = {
                i: Number(i),
                donationPicture: donation.picture,
                donationName: donation.name,
                progress,
                total,
                handleClickButton: handleToDetailDonate,
                donationId: donation.id,
                buttonName: "Donate",
              };
              return (
                <>
                  <CardDonate {...props} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
