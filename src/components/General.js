import React from "react";
import Education from "./Education";
import Professional from "./Professional";

function General({ name }) {
  return (
    <div className="general--container">
      <div className="general--left">
        <img src="../profile-img-outline.svg" alt="" />
      </div>

      <div className="general--right">
        <div className="profile_name">
          <h2>
            {name.generalInfo.firstName}
            <span className="profile_last_name">
              {name.generalInfo.lastName}
            </span>
          </h2>
        </div>
        <div className="profile_position">
          <h3>{name.generalInfo.currentPosition}</h3>
        </div>
        <div className="profile_about_me">
          <p>{name.generalInfo.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}

export default General;
