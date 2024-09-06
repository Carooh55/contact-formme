import React, { useState } from "react";
import "./Contactme.css";

export default function Contactme() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, like sending the data to a server
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="Contactme">
      <form onSubmit={handleSubmit}>
        <div className="names">
          <div>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="details">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="query-type">
          <label>Query Type *</label>
          <div>
            <input
              type="radio"
              name="queryType"
              id="generalEnquiry"
              value="General Enquiry"
              checked={formData.queryType === "General Enquiry"}
              onChange={handleChange}
            />
            <label htmlFor="generalEnquiry">General Enquiry</label>
            <input
              type="radio"
              name="queryType"
              id="supportRequest"
              value="Support Request"
              checked={formData.queryType === "Support Request"}
              onChange={handleChange}
            />
            <label htmlFor="supportRequest">Support Request</label>
          </div>
        </div>
        <div className="message">
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="consent">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <label htmlFor="consent">
            I consent to being contacted by the team *
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
