// INFORMATION INSIDE THE CV APPLICATION :
import React from "react";
import ProfileImg from "./ProfileImg";

function General({ name, showProfileImg }) {
  return (
    <div className="general--container">
      <div className="general--left">
        {/* Profile image should be shown here. */}
        <img className="profile_image" src={showProfileImg} alt="" />
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
