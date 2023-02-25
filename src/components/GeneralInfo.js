import React from "react";

function GeneralInfo({ allInfo, handleChange }) {
  return (
    <div className="generalInfo--main">
      <h2>General Information:</h2>
      {/* <img src="../profile-img-outline.svg" alt="" /> */}
      <div className="input_main">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={allInfo.generalInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            value={allInfo.generalInfo.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone No.:</label>
          <input
            type="text"
            name="phoneNumber"
            value={allInfo.generalInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={allInfo.generalInfo.email}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            value={allInfo.generalInfo.location}
            onChange={handleChange}
          />
        </div> */}
        <div className="generalInfo--summary">
          <label htmlFor="summary">Summary:</label>
          <textarea
            type="text"
            name="summary"
            value={allInfo.generalInfo.summary}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <input
        type="text"
        placeholder="Age"
        name={props.age}
        value={props.value}
      />
      <input
        type="number"
        placeholder="Phone No."
        name={props.phoneNumber}
        value={props.value}
      />
      <input
        type="email"
        placeholder="Email"
        name={props.email}
        value={props.value}
      />
      <input
        type="text"
        placeholder="Location"
        name={props.location}
        value={props.value}
      />
      <input
        type="text"
        placeholder="Summary"
        name={props.summary}
        value={props.value}
      /> */}
    </div>
  );
}

export default GeneralInfo;
