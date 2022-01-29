import React from "react";
import "./Contact.css";

import default_profile from "../../../assets/img/blank-profile.png";

export default function Contact({ dataContact, clickContact, contact }) {
  return (
    <>
      {dataContact.length > 0 && (
        <>
          {dataContact.map((item) => (
            <div
              key={item.id}
              className={`contact mt-3 p-2 ${contact?.id === item?.id && "contact-active"}`}
              onClick={() => {
                clickContact(item);
              }}
            >
              <img src={default_profile} className="rounded-circle me-2 img-contact" style={{ maxHeight: "50px" }} alt="user avatar" />
              <div className="ps-1 text-contact d-flex flex-column justify-content-around">
                <p className="mb-0 fs-5">{item.fullname}</p>
                <p className="text-dark mt-1 mb-0">{item.message}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
