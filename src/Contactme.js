import React from "react";
import "./Contactme.css";

export default function Contactme() {
  return (
    <div className="Contactme">
      <form>
        <div className="names">
          <div>
            <label for="name">First Name * </label>
          </div>
          <input type="text" name="name" id="name" required />
          <div>
            <label for="name">Last Name * </label>
          </div>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="details">
          <label for="name">Email Address * </label>
          <div>
            <input type="text" name="name" id="name" required />
          </div>
        </div>
        <label for="name">Query Type * </label>
        <div>
          <input type="text" placeholder="° General Enquiry" />
          <input type="text" placeholder="° Support Request" />
        </div>
        <label for="name">Message *</label>
        <div>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <button></button>
          <label for="name"> I consent to being contacted by the team * </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
