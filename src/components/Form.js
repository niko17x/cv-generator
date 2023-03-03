import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";
import userData from "./userData";
import CvDoc from "./CvDoc";
import EducationInfo from "./EducationInfo";
import General from "./General";
import Education from "./Education";
import Professional from "./Professional";

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
            startDate: "",
            endDate: "",
            description: "",
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
        <div key={`work${i}`}>
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
            startDate: "",
            endDate: "",
            gpa: "",
          },
        },
      }));
    }
  }

  function addAdditionalEducationForm() {
    let result = [];
    for (let i = 1; i <= newEducationInfo; i++) {
      result.push(
        <div key={`education${i}`}>
          <EducationInfo
            value={userInfo.educationInfo + `${i}`}
            onChange={(event) =>
              handleChange(event, "educationInfo", `education${i}`)
            }
          />
        </div>
      );
    }
    return result ? result : "null";
  }

  function addWorkBtn() {
    if (newWorkInfo > 3) return;
    setNewWorkInfo((prevInfo) => prevInfo + 1);
    addAdditionalWorkObj();
  }

  function deleteWorkBtn() {
    return newWorkInfo > 0 ? setNewWorkInfo((prevInfo) => prevInfo - 1) : null;
  }

  function addEducationBtn() {
    if (newEducationInfo > 3) return;
    setNewEducationInfo((prevInfo) => prevInfo + 1);
    addAdditionalEducationObj();
  }

  function deleteEducationBtn() {
    return newEducationInfo > 0
      ? setNewEducationInfo((prevInfo) => prevInfo - 1)
      : null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach((input) => (input.value = ""));
    return e.target.tagName === "FORM" ? console.log(userInfo) : "";
  }

  return (
    <div className="form--container">
      <form className="form--main" onSubmit={handleSubmit}>
        <div className="form--general_info_container">
          <h2 className="form--title">Personal Details</h2>
          <GeneralInfo
            value={userInfo}
            onChange={(event) => handleChange(event, "generalInfo")}
          />
        </div>
        <div>
          <h2 className="form--title">Professional Experience</h2>
          {newWorkInfo && addAdditionalWorkForm()}
          <div className="button-container">
            {newWorkInfo < 3 && (
              <button
                className="add-work-button section-buttons"
                onClick={addWorkBtn}
              >
                Add WorkInfo
              </button>
            )}

            {newWorkInfo && (
              <button
                className="delete-work-button section-buttons"
                onClick={deleteWorkBtn}
              >
                Delete WorkInfo
              </button>
            )}
          </div>
        </div>
        <div>
          <h2 className="form--title">Education</h2>
          {newEducationInfo && addAdditionalEducationForm()}

          <div className="button-container">
            {newEducationInfo < 3 && (
              <button
                className="add-education-button section-buttons"
                onClick={addEducationBtn}
              >
                Add EducationInfo
              </button>
            )}
            {newEducationInfo && (
              <button
                className="delete-education-button section-buttons"
                onClick={deleteEducationBtn}
              >
                Delete EducationInfo
              </button>
            )}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <CvDoc name={userInfo} getInfo={userInfo} />
    </div>
  );
}

export default Form;
