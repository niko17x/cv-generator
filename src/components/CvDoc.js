import React from "react";

function CvDoc({ name }, props, data) {
  let result = [];
  function renderWorkInfoCv() {
    const allWork = ["work1", "work2", "work3", "work4", "work5"];
    allWork.forEach((work) => {
      if (name.workInfo[work]) {
        result.push(
          <div key={Math.floor(Math.random() * 9999)}>
            <h1>{name.workInfo[work].company}</h1>
            <h1>{name.workInfo[work].position}</h1>
            <h1>{name.workInfo[work].location}</h1>
            <h1>{name.workInfo[work].achievements}</h1>
            <h1>{name.workInfo[work].startDate}</h1>
            <h1>{name.workInfo[work].endDate}</h1>
          </div>
        );
      } else {
        return null;
      }
    });
    return result;
  }

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
          <div key={Math.floor(Math.random() * 9999)}>
            <h1>{name.educationInfo[education].university}</h1>
            <h1>{name.educationInfo[education].degree}</h1>
            <h1>{name.educationInfo[education].attended}</h1>
            <h1>{name.educationInfo[education].gpa}</h1>
            <h1>{name.educationInfo[education].awards}</h1>
            <h1>{name.educationInfo[education].relevantCourses}</h1>
          </div>
        );
      } else {
        return null;
      }
    });
    return result;
  }

  return (
    <div className="cvdoc--main">
      <h1>{name.generalInfo.name}</h1>
      <h1>{name.generalInfo.age}</h1>
      <h1>{name.generalInfo.phoneNumber}</h1>
      <h1>{name.generalInfo.email}</h1>
      <h1>{name.generalInfo.address}</h1>
      <h1>{name.generalInfo.aboutMe}</h1>
      {renderWorkInfoCv()}
      {renderEducationInfoCv()}
    </div>
  );
}

export default CvDoc;
