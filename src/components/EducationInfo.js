import React from "react";

function EducationInfo({ value, onChange }) {
  return (
    <div className="educationInfo--main">
      <div>
        <div className="educationInfo--input_university">
          <label>University</label>
          <input
            name="university"
            value={value.university}
            onChange={onChange}
          />
        </div>
        <div className="educationInfo--input_degree">
          <label>Degree</label>
          <input name="degree" value={value.degree} onChange={onChange} />
        </div>
        <div className="educationInfo--input_attended">
          <label>Attended</label>
          <input name="attended" value={value.attended} onChange={onChange} />
        </div>
        <div className="educationInfo--input_gpa">
          <label>GPA</label>
          <input name="gpa" value={value.gpa} onChange={onChange} />
        </div>
        <div className="educationInfo--input_awards">
          <label>Awards</label>
          <input name="awards" value={value.awards} onChange={onChange} />
        </div>
        <div className="educationInfo--input_relevant_courses">
          <label>Relevant Courses</label>
          <input
            name="relevantCourses"
            value={value.relevantCourses}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationInfo;
