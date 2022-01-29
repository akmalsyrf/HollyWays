import React from "react";
import { Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import DonationInfo from "../components/DetailDonate-ViewFund/DonationInfo";
import DonationApproved from "../components/DetailDonate-ViewFund/DonationApproved";

import HelpIcon from "../assets/img/help.png";

export default function DetailDonate() {
  const title = "Detail donate";
  document.title = title + " | Hollyways";
  //params
  const params = useParams();
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container">
          <Link to="/chat" className=" text-end rounded-circle fs-2 position-fixed" style={{top:"80%", left:"78%"}}>
            <div className="py-3 btn btn-success mt-2 text-start fw-bold"><Image src={HelpIcon} width="60px"/>ASK A QUESTION</div>
          </Link>
          <DonationInfo params={params} isViewFund={false} />
          <DonationApproved params={params} isApproved={true} />
        </div>
      </div>
    </>
  );
}
