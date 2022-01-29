import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";

import { API } from "../config/api";

export default function EditFund() {
  const params = useParams();

  const title = "Edit Fund";
  document.title = title + " | Hollyways";
  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    title: "",
    image: "",
    goal: "",
    description: "",
  });
  console.log(form);

  //get data from endpoint
  const getFund = async () => {
    const response = await API.get(`/fund/${params.id}`);
    console.log(response.data.data.fund);
    const { title, goal, description } = response.data.data.fund;
    setForm({
      title,
      goal,
      description,
    });
  };
  useEffect(() => {
    getFund();
  }, []);

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: /*e.target.type === "file" ? e.target.files :*/ e.target.value,
    });

    // // Create image url for preview
    // if (e.target.type === "file") {
    //   let url = URL.createObjectURL(e.target.files[0]);
    //   setPreview(url);
    // }
  };

  const history = useHistory();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      //   const formData = new FormData();
      //   //   formData.set("thumbnail", form.image[0], form.image.name);
      //   formData.set("title", form.title);
      //   formData.set("goal", Number(form.goal));
      //   formData.set("description", form.description);

      //   //check formData entries
      //   for (let key of formData.entries()) {
      //     console.log(key[0] + ", " + key[1]);
      //   }

      const body = JSON.stringify(form);
      console.log(body);

      const response = await API.patch(`/fund/${params.id}`, body, config);
      console.log(response);

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid vh-100 bg-light px-5 py-5">
        <Form className="container mb-5" onSubmit={handleSubmit}>
          <h2 className="mb-5 fw-bold">Edit Raise Fund</h2>
          {preview && (
            <div>
              <img
                src={preview}
                style={{
                  maxWidth: "300px",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
                className="mb-3"
                alt="preview"
              />
            </div>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <input type="text" className="form-control" placeholder="Title" name="title" onChange={handleChange} value={form.title} />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <label htmlFor="upload" className="btn btn-danger">
              Edit Thumbnail
            </label>
            <input type="file" id="upload" hidden name="image" onChange={handleChange} />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <input type="number" className="form-control" placeholder="Goals Donation" name="goal" onChange={handleChange} value={form.goal} />
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <textarea className="form-control" rows={3} placeholder="Description" name="description" onChange={handleChange} value={form.description} style={{ resize: "none" }} />
          </Form.Group>
          <div className="d-flex">
            <button type="submit" className="btn btn-danger offset-9 col-3">
              Public Fundraising
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
