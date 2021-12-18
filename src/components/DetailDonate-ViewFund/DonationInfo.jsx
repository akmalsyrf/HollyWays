import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import DonateModal from "./DonateModal";

import Donations from "../../data/donationData";
import { Rupiah } from "../../data/rupiahFormat";

export default function DonationInfo(props) {
  //modal donate
  const [showDonateModal, setShowDonateModal] = useState(false);
  const handleCloseDonateModal = () => setShowDonateModal(false);
  const handleShowDonateModal = () => setShowDonateModal(true);
  return (
    <>
      {Donations.map((donation) => {
        const total = Rupiah(donation.total);
        const target = Rupiah(donation.target);
        const progress = (Number(donation.total) / Number(donation.target)) * 100;
        if (Number(donation.id) === Number(props.params.id)) {
          return (
            <div className="py-5 d-flex" key={donation.id}>
              <img src={donation.picture} alt="" className="rounded col-5" style={{ objectFit: "cover" }} />
              <div className="offset-1 col-5">
                <h3>{donation.name}</h3>
                <div className="my-5">
                  <div className="d-flex justify-content-between">
                    <p className="text-danger fw-bold">
                      {total}
                      <span className="ms-3 text-secondary">gathered from</span>
                    </p>
                    <p className="fw-bold text-secondary">{target}</p>
                  </div>
                  <div className="mb-2">
                    <ProgressBar variant="danger" now={progress} />
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                  </p>
                </div>
                <Link to="#" className="col-12 btn btn-danger" onClick={handleShowDonateModal}>
                  Donate
                </Link>
                <DonateModal showDonateModal={showDonateModal} handleCloseDonateModal={handleCloseDonateModal} />
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
