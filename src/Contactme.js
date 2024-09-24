import React, { useState } from "react";
import "./Contactme.css";

const Contactme = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "General Enquiry",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Contact Us</h2>

      <div className="names">
        <div>
          <label>
            First Name *
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Last Name *
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>

      <div>
        <label>
          Email Address *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>Query Type *</label>
        <div className="types">
          <label>
            <button className="button">
              <input
                type="radio"
                name="queryType"
                value="General Enquiry"
                onChange={handleChange}
              />
              General Enquiry
            </button>
          </label>

          <label>
            <button className="button">
              <input
                type="radio"
                name="queryType"
                value="Support Request"
                onChange={handleChange}
              />
              Support Request
            </button>
          </label>
        </div>
      </div>

      <div>
        <label>
          Message *
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          I consent to being contacted by the team *
        </label>
      </div>

      <div>
        <button className="submitbutton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contactme;
