import React from "react";

import ListDonateUser from "./ListDonate/ListDonateUser";

import Donations from "../../data/donationData";
import Users from "../../data/userData";

export default function DonationApproved(props) {
  return (
    <>
      <div className="py-3">
        {props.isApproved ? (
          <>
            <h2 className="mb-2 fw-bold">List Donation (200)</h2>
            {Donations.map((donation) => {
              //where id
              if (Number(donation.id) === Number(props.params.id)) {
                const notApproved = donation.donationApprovedUserId;
                return notApproved.map((donationApv) => {
                  // select user
                  return Users.map((user) => {
                    // where id
                    if (Number(donationApv) === Number(user.id)) {
                      return (
                        <>
                          <ListDonateUser userName={user.name} key={user.id} isApproved={props.isApproved} />
                        </>
                      );
                    }
                    return null;
                  });
                });
              }
              return null;
            })}
          </>
        ) : (
          <>
            <h2 className="mb-2 fw-bold">Donation has not been approved (10)</h2>
            {Donations.map((donation) => {
              //where id
              if (Number(donation.id) === Number(props.params.id)) {
                const approved = donation.donationNotApprovedUserId;
                return approved.map((donationApv) => {
                  // select user
                  return Users.map((user) => {
                    // where id
                    if (Number(donationApv) === Number(user.id)) {
                      return (
                        <>
                          <ListDonateUser userName={user.name} key={user.id} isApproved={props.isApproved} />
                        </>
                      );
                    }
                    return null;
                  });
                });
              }
              return null;
            })}
          </>
        )}
      </div>
    </>
  );
}
