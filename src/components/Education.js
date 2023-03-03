import React from "react";

function Education({ name }) {
  function renderEducationInfoCv() {
    let result = [];
    const allEducation = [
      "education1",
      "education2",
      "education3",
      "education4",
      "education5",
    ];
    allEducation.forEach((education) => {
      if (name.educationInfo[education]) {
        result.push(
          <div
            className="cvdoc--education_info_main"
            key={Math.floor(Math.random() * 9999)}
          >
            <div className="cvdoc--education_info_header">
              <div>
                <h3>{name.educationInfo[education].startDate}</h3>
              </div>
              -
              <div>
                <h3>{name.educationInfo[education].endDate}</h3>
              </div>
            </div>
            <div className="cvdoc--education_info_body">
              <div>
                <h4>{name.educationInfo[education].university}</h4>
              </div>
              <div>
                <h4 className="education_info_title">
                  {name.educationInfo[education].degree} |
                  {name.educationInfo[education].gpa}
                </h4>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
    return result;
  }

  return <div>{renderEducationInfoCv()}</div>;
}

export default Education;
