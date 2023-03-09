import React from "react";

function EducationInfo({ value, onChange }) {
  return (
    <div className="educationInfo--main">
      <div className="educationInfo--input_university">
        <label>University</label>
        <input
          name="university"
          maxLength="25"
          value={value.university}
          onChange={onChange}
        />
      </div>
      <div className="educationInfo--input_degree">
        <label>Degree</label>
        <input
          name="degree"
          maxLength="25"
          value={value.degree}
          onChange={onChange}
        />
      </div>
      <div className="educationInfo--start_date">
        <label>Start Date</label>
        <input
          name="startDate"
          type="date"
          value={value.startDate}
          onChange={onChange}
        />
      </div>
      <div className="educationInfo--end_date">
        <label>End Date</label>
        <input
          name="endDate"
          type="date"
          value={value.endDate}
          onChange={onChange}
        />
      </div>
      <div className="educationInfo--input_gpa">
        <label>GPA</label>
        <input
          name="gpa"
          type="number"
          max="4.0"
          min="1.0"
          step="0.10"
          value={value.gpa}
          onChange={onChange}
        />
      </div>
      <div className="educationInfo--input_awards">
        <label>Awards</label>
        <input
          name="awards"
          maxLength="50"
          value={value.awards}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default EducationInfo;
