import React from "react";
import "./style.css";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";
import EducationalInfo from "./components/EducationalInfo";

function App() {
  const [allInfo, setAllInfo] = React.useState({
    generalInfo: {
      name: "",
      age: "",
      phoneNumber: "",
      email: "",
      summary: "",
    },
    workExperience: {
      company: "",
      jobTitle: "",
      startDate: "",
      endData: "",
      duties: "",
      achievements: "",
    },
    educationalInfo: {
      school: "",
      location: "",
      degree: "",
      gpa: "",
      datesAttended: "",
      accomplishments: "",
    },
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setAllInfo((prevInfo) => ({
      generalInfo: {
        ...prevInfo.generalInfo,
        [name]: value,
      },
      workExperience: {
        ...prevInfo.workExperience,
        [name]: value,
      },
      educationalInfo: {
        ...prevInfo.workExperience,
        [name]: value,
      },
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, value } = event.target;
    setAllInfo((prevInfo) => ({
      generalInfo: {
        ...prevInfo.generalInfo,
        [name]: value,
      },
      workExperience: {
        ...prevInfo.workExperience,
        [name]: value,
      },
    }));
    console.log(allInfo);
  }

  return (
    <div className="app--container">
      <header className="app--header">
        <h1>CV Application</h1>
      </header>
      <form className="app--main_form" onSubmit={handleSubmit}>
        <div className="app--general_info_container">
          <GeneralInfo allInfo={allInfo} handleChange={handleChange} />
        </div>
        <div className="app--work_experience_container">
          <WorkExperience allInfo={allInfo} handleChange={handleChange} />
        </div>
        <div className="app--educational_experience_container">
          <EducationalInfo allInfo={allInfo} handleChange={handleChange} />
        </div>
        <button className="app--submit_button">Submit Button</button>
      </form>
    </div>
  );
}

export default App;
