import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import AttachPayment from "../../assets/img/attachpayment.png";

import { API } from "../../config/api";

export default function DonateModal(props) {
  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    donateAmount: "",
  });
  console.log(form);

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  // Create config Snap payment page with useEffect here ...
  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "SB-Mid-client-GjKB0rHnannm7Bdp";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const history = useHistory();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post(`/fund/${props.fundId}`, body, config);
      // console.log(response.data);

      // Create variabel for store token payment from response here ...
      const token = response.data.paymentResult.token;

      // Init Snap for display payment page with token here ...
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          history.push("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          history.push("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={props.showDonateModal} onHide={props.handleCloseDonateModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Form className="py-4 px-2" onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Control type="number" placeholder="Nominal Donation (Rp.)" name="donateAmount" onChange={handleChange} />
            {preview && (
              <div>
                <img
                  src={preview}
                  style={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                  className="my-3"
                  alt="preview"
                />
              </div>
            )}
            {/* <div className="d-flex justify-content-start my-3">
              <label htmlFor="upload" className="btn btn-danger">
                Attach Payment
                <img src={AttachPayment} alt="img" className="px-2" />
              </label>
              <input type="file" id="upload" hidden name="image" onChange={handleChange} />
              <p className="text-secondary ms-3">*transfers can be made to holyways accounts</p>
            </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="danger" className="col-12" onClick={props.handleCloseDonateModal}>
              Donate
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

DonateModal.propTypes = {
  showDonateModal: PropTypes.bool.isRequired,
};
