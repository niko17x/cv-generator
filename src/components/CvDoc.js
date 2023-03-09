import React from "react";
import ContactSection from "./ContactSection";
import Education from "./Education";
import General from "./General";
import Professional from "./Professional";

function CvDoc({ name, showProfileImg }) {
  return (
    <div className="cvdoc--container">
      <div className="cvdoc--header">
        <General name={name} showProfileImg={showProfileImg} />
      </div>

      <div className="cvdoc--body">
        <div className="contact--container">
          <ContactSection name={name} />
        </div>
        <div className="professional--container">
          <h2>Experience</h2>
          <Professional name={name} />
        </div>
        <div className="education--container">
          <h2>Education</h2>
          <Education name={name} />
        </div>
      </div>
    </div>
  );
}

export default CvDoc;
