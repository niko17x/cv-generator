import React from "react";

function WorkInfo({ value, onChange }) {
  return (
    <div className="workInfo--main">
      <div className="workInfo--input_name">
        <label>Position</label>
        <input name="position" value={value.position} onChange={onChange} />
      </div>
      <div className="workInfo--input_company">
        <label>Company</label>
        <input name="company" value={value.company} onChange={onChange} />
      </div>
      <div className="workInfo--location">
        <label>Location</label>
        <input name="location" value={value.location} onChange={onChange} />
      </div>
      <div className="workInfo--achievements">
        <label>Achievements</label>
        <input
          name="achievements"
          value={value.achievements}
          onChange={onChange}
        />
      </div>
      <div className="workInfo--start_date">
        <label>Start Date</label>
        <input name="startDate" value={value.startDate} onChange={onChange} />
      </div>
      <div className="workInfo--end_date">
        <label>End Date</label>
        <input name="endDate" value={value.endDate} onChange={onChange} />
      </div>
    </div>
  );
}

export default WorkInfo;
