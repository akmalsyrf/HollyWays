import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import DetailDonateModal from "../components/DetailDonateModal";
import Donations from "../data/donationData";
import Users from "../data/userData";
import { Rupiah } from "../data/rupiahFormat";
import ListDonateUser from "../components/ListDonateUser";

export default function DetailDonate() {
  //params
  const params = useParams();

  //modal donate
  const [showDonateModal, setShowDonateModal] = useState(false);
  const handleCloseDonateModal = () => setShowDonateModal(false);
  const handleShowDonateModal = () => setShowDonateModal(true);
  return (
    <>
      <div className="container bg-light px-5">
        {/* detail donate */}
        {Donations.map((donation) => {
          const total = Rupiah(donation.total);
          const target = Rupiah(donation.target);
          const progress = (Number(donation.total) / Number(donation.target)) * 100;
          if (donation.id == params.id) {
            return (
              <div className="py-5 d-flex">
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
                  <DetailDonateModal showDonateModal={showDonateModal} handleCloseDonateModal={handleCloseDonateModal} />
                </div>
              </div>
            );
          }
        })}

        {/* donation approved */}
        <div className="py-3">
          <h2 className="mb-2 fw-bold">List Donation (200)</h2>
          {/*select donations */}
          {Donations.map((donation) => {
            //where id
            if (donation.id == params.id) {
              const approved = donation.donationApprovedUserId;
              return approved.map((donationApv) => {
                // select user
                return Users.map((user) => {
                  // where id
                  if (donationApv == user.id) {
                    return (
                      <>
                        <ListDonateUser userName={user.name} />
                      </>
                    );
                  }
                });
              });
            }
          })}
        </div>

        {/* donation not approved */}
        <div className="py-3">
          <h2 className="mb-2 fw-bold">Donation has not been approved (10)</h2>
          {/*select donations */}
          {Donations.map((donation) => {
            //where id
            if (donation.id == params.id) {
              const notApproved = donation.donationNotApprovedUserId;
              return notApproved.map((donationApv) => {
                // select user
                return Users.map((user) => {
                  // where id
                  if (donationApv == user.id) {
                    return (
                      <>
                        <ListDonateUser userName={user.name} />
                      </>
                    );
                  }
                });
              });
            }
          })}
        </div>
      </div>
    </>
  );
}
