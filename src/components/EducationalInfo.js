import React from "react";

function EducationalInfo({ allInfo, handleChange }) {
  return (
    <div className="educationalInfo--main">
      <h2>Education:</h2>
      <div className="input_main">
        <div>
          <label htmlFor="school">School:</label>
          <input
            type="text"
            name="school"
            value={allInfo.generalInfo.school}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            value={allInfo.generalInfo.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            name="degree"
            value={allInfo.generalInfo.degree}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gpa">GPA:</label>
          <input
            type="text"
            name="gpa"
            value={allInfo.generalInfo.gpa}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="datesAttended">Dates Attended:</label>
          <input
            type="text"
            name="datesAttended"
            value={allInfo.generalInfo.datesAttended}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="accomplishments">Accomplishments:</label>
          <input
            type="text"
            name="accomplishments"
            value={allInfo.generalInfo.accomplishments}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="button-container">
        <button className="educationalInfo--button add-more-button">
          <img src="../add-icon.svg" alt="" />
        </button>
        <button className="educationalInfo--button delete-button">
          <img src="../delete-icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default EducationalInfo;
