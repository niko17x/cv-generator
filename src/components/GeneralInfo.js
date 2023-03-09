import React from "react";

function GeneralInfo({ value, onChange }) {
  return (
    <div className="generalInfo--main">
      <div className="input-first-name">
        <label>First Name</label>
        <input
          name="firstName"
          required
          value={value.firstName}
          onChange={onChange}
        />
        {/* {!value.firstName ? <span>First name is required</span> : null} */}
      </div>
      <div className="input-last-name">
        <label>Last Name</label>
        <input
          name="lastName"
          required
          value={value.lastName}
          onChange={onChange}
        />
      </div>
      <div className="current-position">
        <label>Current Position</label>
        <input
          name="currentPosition"
          required
          value={value.currentPosition}
          onChange={onChange}
        />
      </div>
      <div className="input-phone-number">
        <label>Phone Number</label>
        <input
          name="phoneNumber"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123.456.7890"
          value={value.phoneNumber}
          onChange={onChange}
        />
      </div>
      <div className="input-email">
        <label>Email</label>
        <input
          name="email"
          // type="email"
          value={value.email}
          onChange={onChange}
        />
      </div>
      <div className="input-address">
        <label>Address</label>
        <input name="address" value={value.address} onChange={onChange} />
      </div>
      <div className="input-about-me">
        <label>About Me</label>
        <textarea name="aboutMe" value={value.aboutMe} onChange={onChange} />
      </div>
    </div>
  );
}

export default GeneralInfo;
