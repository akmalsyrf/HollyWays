import React from "react";

export default function ListDonateUser(props) {
  return (
    <div className="p-3 col-12 my-3" style={{ backgroundColor: "white" }}>
      <h4 className="fw-bold">{props.userName}</h4>
      <p>
        <span className="fw-bold">Saturday</span>, 12 April 2021
      </p>
      <p className="text-danger fw-bold">Total : Rp 45.000</p>
    </div>
  );
}
