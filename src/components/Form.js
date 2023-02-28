import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";
import userData from "./userData";
import CvDoc from "./CvDoc";

function Form() {
  const [userInfo, setUserInfo] = React.useState(userData);
  const [newWorkInfo, setNewWorkInfo] = React.useState(1); // Default with 1 workInfo Component.

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

  // Need to generate CvDoc 'work2' if it is truthy :
  // Go through key key in workInfo object and if 'work2' exists, then generate 'work2' data in CvDocs.
  function foo() {
    let result = [];
    const getWorkObj = userInfo.workInfo;
    if (getWorkObj.hasOwnProperty("work2")) {
      return <CvDoc name={getWorkObj.work2.company} />;
    }
  }

  // Creates a new 'workInfo' component with inputs based on number of 'add button clicks' :
  function addAdditionalWorkForm() {
    let result = [];
    for (let i = 1; i <= newWorkInfo; i++) {
      result.push(
        <div>
          <WorkInfo
            key={i}
            value={userInfo.workInfo + `${i}`}
            onChange={(event) => handleChange(event, "workInfo", `work${i}`)}
          />
        </div>
      );
    }
    return result;
  }

  function handleAddButtonClick() {
    if (newWorkInfo > 4) return;
    setNewWorkInfo((prevInfo) => prevInfo + 1);
    addAdditionalWorkObj();
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
        {/* <div>
          <WorkInfo
            value={userInfo.workInfo}
            onChange={(event) => handleChange(event, "workInfo", "work1")}
          />
        </div> */}
        {newWorkInfo && addAdditionalWorkForm()}
        <button type="submit">Submit</button>
      </form>
      <CvDoc name={userInfo} />
      <button className="add" onClick={handleAddButtonClick}>
        Add
      </button>
    </div>
  );
}

export default Form;
