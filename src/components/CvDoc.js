import React from "react";
import ContactSection from "./ContactSection";
import Education from "./Education";
import General from "./General";
import Professional from "./Professional";

function CvDoc({ name }) {
  return (
    <div className="cvdoc--container">
      <div className="cvdoc--header">
        <General name={name} />
      </div>
      <div className="cvdoc--body">
        <div className="contact--container">
          <ContactSection name={name} />
        </div>
        <div className="professional--container">
          <Professional name={name} />
        </div>
        <div className="education--container">
          <Education name={name} />
        </div>
      </div>
    </div>
  );
}

export default CvDoc;
