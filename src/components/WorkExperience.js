import React from "react";

function WorkExperience({ allInfo, handleChange }) {
  return (
    <div className="workExperience--main">
      <h2>Work Experience:</h2>
      <div className="input_main">
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            value={allInfo.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={allInfo.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="text"
            name="startDate"
            value={allInfo.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="text"
            name="endDate"
            value={allInfo.endDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="duties">Duties:</label>
          <input
            type="text"
            name="duties"
            value={allInfo.duties}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="achievements">Achievements:</label>
          <input
            type="text"
            name="achievements"
            value={allInfo.achievements}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="button-container">
        <button className="workExperience--button add-more-button">
          <img src="../add-icon.svg" alt="" />
        </button>
        <button className="educationalInfo--button delete-button">
          <img src="../delete-icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default WorkExperience;
