import React from "react";

function EducationInfo({ value, onChange }) {
  return (
    <div className="educationInfo--main">
      <div className="educationInfo--input_university">
        <label>University</label>
        <input name="university" value={value.university} onChange={onChange} />
      </div>
      <div className="educationInfo--input_degree">
        <label>Degree</label>
        <input name="degree" value={value.degree} onChange={onChange} />
      </div>
      <div className="educationInfo--start_date">
        <label>Start Date</label>
        <input name="startDate" value={value.startDate} onChange={onChange} />
      </div>
      <div className="educationInfo--end_date">
        <label>End Date</label>
        <input name="endDate" value={value.endDate} onChange={onChange} />
      </div>
      <div className="educationInfo--input_gpa">
        <label>GPA</label>
        <input name="gpa" value={value.gpa} onChange={onChange} />
      </div>
      <div className="educationInfo--input_awards">
        <label>Awards</label>
        <input name="awards" value={value.awards} onChange={onChange} />
      </div>
    </div>
  );
}

export default EducationInfo;
