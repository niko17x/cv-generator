import React from "react";

function ProfileImg(props) {
  return (
    <div className="profile-image">
      <label htmlFor="img">Upload Image</label>
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        onChange={props.handleFileChange}
      />
      {/* {imageSrc && <DisplayImage imageUrl={imageSrc} />} */}
    </div>
  );
}

export default ProfileImg;
