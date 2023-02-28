import React from "react";

function GeneralInfo({ value, onChange }, props) {
  return (
    <div className="generalInfo--main">
      <div>
        <div className="generalInfo--input_name">
          <label>Name</label>
          <input
            name="name"
            value={value.name}
            onChange={onChange}
            foo={props.foo}
          />
        </div>
        <div className="generalInfo--input_age">
          <label>Age</label>
          <input name="age" value={value.age} onChange={onChange} />
        </div>
        <div className="generalInfo--input_phone_number">
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={value.phoneNumber}
            onChange={onChange}
          />
        </div>
        <div className="generalInfo--input_email">
          <label>Email</label>
          <input name="email" value={value.email} onChange={onChange} />
        </div>
        <div className="generalInfo--input_address">
          <label>Address</label>
          <input name="address" value={value.address} onChange={onChange} />
        </div>
        <div className="generalInfo--input_about_me">
          <label>About Me</label>
          <input name="aboutMe" value={value.aboutMe} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
