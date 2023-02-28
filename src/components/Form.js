import React from "react";
import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";
import userData from "./userData";
import CvDoc from "./CvDoc";

function Form() {
  const [userInfo, setUserInfo] = React.useState(userData);

  function handleChange(e) {
    const { name, value } = e.target;
    // const [firstPart, secondPart] = name.split(".");
    // setUserInfo((prevInfo) => ({
    //   generalInfo: {
    //     ...prevInfo.generalInfo,
    //     [name]: value,
    //   },
    //   workInfo: {
    //     ...prevInfo.workInfo,
    //     work1: {
    //       ...prevInfo.workInfo.work1,
    //       [name]: value,
    //     },
    //   },
    // }));
    if (name in userInfo.generalInfo) {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        generalInfo: {
          ...prevInfo.generalInfo,
          [name]: value,
        },
      }));
    } else {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        workInfo: {
          ...prevInfo.workInfo,
          work1: {
            ...prevInfo.workInfo.work1,
            [name]: value,
          },
        },
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach((input) => (input.value = ""));
    return e.target.tagName === "FORM" ? console.log(userInfo) : "";
  }

  // Adds another object to the existing userData database :
  function addAdditionalWork() {}

  function foo(e) {
    console.log(e.target.value);
  }

  return (
    <div className="form--main">
      <form onSubmit={handleSubmit}>
        <div className="form--generalInfo_container">
          <GeneralInfo value={userInfo} onChange={handleChange} />
        </div>
        <div>
          <WorkInfo value={userInfo || ""} onChange={handleChange} foo={foo} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <CvDoc name={userInfo} />
      {/* <CvDoc name={userInfo.generalInfo.name} /> */}
      <button className="add" onClick={addAdditionalWork}>
        Add
      </button>
    </div>
  );
}

export default Form;
