import React, { useState } from "react";
import "./Contactme.css";

const Contactme = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "General Enguiry",
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
    <form onsubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Contact Us</h2>

      <div>
        <label>
          First Name *
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onchange={handleChange}
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
            onchange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email Address *
          <input
            type="email"
            name="email"
            value={formData.email}
            onchange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Query type *
          <div>
            <label>
              <input
                type="radio"
                name="queryType"
                values=" General Enquiry"
                checked={formData.queryType === "General Enquiry"}
                onchange={handleChange}
              />
              General Enquiry
            </label>
            <label>
              <input
                type="radio"
                name="queryType"
                value="Support Request"
                checked={formData.queryType === "Support Request"}
                onchange={handleChange}
              />
              Support Request
            </label>
          </div>
        </label>
      </div>

      <div>
        <label>
          message
          <textarea
            name="message"
            value={formData.message}
            onchange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onchange={handleChange}
          />
          I consent to being contacted by the team
        </label>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Contactme;
