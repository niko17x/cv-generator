import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";
import userData from "./userData";
import CvDoc from "./CvDoc";
import EducationInfo from "./EducationInfo";

function Form() {
  const [userInfo, setUserInfo] = React.useState(userData);
  const [newWorkInfo, setNewWorkInfo] = React.useState(1); // Default with 1 workInfo Component.
  const [newEducationInfo, setNewEducationInfo] = React.useState(1);

  function handleChange(event, parent, child) {
    const { name, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [parent]: {
        ...prevInfo[parent],
        ...(child && {
          [child]: {
            ...prevInfo[parent][child],
            [name]: value,
          },
        }),
        ...(child === undefined && {
          [name]: value,
        }),
      },
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach((input) => (input.value = ""));
    return e.target.tagName === "FORM" ? console.log(userInfo) : "";
  }

  // Adds another object to the existing userData database :
  function addAdditionalWorkObj() {
    for (let i = 1; i < newWorkInfo + 1; i++) {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        workInfo: {
          ...prevInfo.workInfo,
          [`work${i + 1}`]: {
            position: "",
            company: "",
            location: "",
            achievements: "",
            startDate: "",
            endDate: "",
          },
        },
      }));
    }
  }

  // Creates a new 'workInfo' component with inputs based on number of 'add button clicks' :
  function addAdditionalWorkForm() {
    let result = [];
    for (let i = 1; i <= newWorkInfo; i++) {
      result.push(
        <div>
          <WorkInfo
            value={userInfo.workInfo + `${i}`}
            onChange={(event) => handleChange(event, "workInfo", `work${i}`)}
          />
        </div>
      );
    }
    return result;
  }

  function addAdditionalEducationObj() {
    for (let i = 1; i < newEducationInfo + 1; i++) {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        educationInfo: {
          ...prevInfo.educationInfo,
          [`education${i + 1}`]: {
            university: "",
            degree: "",
            gpa: "",
            awards: "",
            attended: "",
            relevantCourses: "",
          },
        },
      }));
    }
  }

  function addAdditionalEducationForm() {
    let result = [];
    for (let i = 1; i <= newEducationInfo; i++) {
      result.push(
        <div>
          <EducationInfo
            value={userInfo.educationInfo + `${i}`}
            onChange={(event) =>
              handleChange(event, "educationInfo", `education${i}`)
            }
          />
        </div>
      );
    }
    return result;
  }

  function handleAddWorkInfoBtn() {
    if (newWorkInfo > 4) return;
    setNewWorkInfo((prevInfo) => prevInfo + 1);
    addAdditionalWorkObj();
  }

  function handleAddEducationInfoBtn() {
    if (newEducationInfo > 4) return;
    setNewEducationInfo((prevInfo) => prevInfo + 1);
    addAdditionalEducationObj();
  }

  return (
    <div className="form--main">
      <form onSubmit={handleSubmit}>
        <div className="form--generalInfo_container">
          <GeneralInfo
            value={userInfo}
            onChange={(event) => handleChange(event, "generalInfo")}
          />
        </div>
        {newWorkInfo && addAdditionalWorkForm()}
        {newEducationInfo && addAdditionalEducationForm()}
        <button type="submit">Submit</button>
      </form>
      <CvDoc name={userInfo} getInfo={userInfo} />
      <button className="add" onClick={handleAddWorkInfoBtn}>
        Add WorkInfo
      </button>
      <button className="add" onClick={handleAddEducationInfoBtn}>
        Add EducationInfo
      </button>
    </div>
  );
}

export default Form;
