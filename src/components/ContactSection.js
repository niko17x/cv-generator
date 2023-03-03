import React from "react";

function ContactSection({ name }) {
  return (
    <div className="contact-info-container">
      <label className="contact_info">Contact</label>
      <div>
        <label>Tel No.</label>
        <h5>{name.generalInfo.phoneNumber}</h5>
      </div>
      <div>
        <label>Email</label>
        <h5>{name.generalInfo.email}</h5>
      </div>
      <div>
        <label>Address</label>
        <h5>{name.generalInfo.address}</h5>
      </div>
    </div>
  );
}

export default ContactSection;
