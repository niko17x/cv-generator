import React from "react";

function CvDoc({ name }) {
  return (
    <div className="cvdoc--main">
      <h1>{name.generalInfo.name}</h1>
      <h1>{name.generalInfo.age}</h1>
      <h1>{name.generalInfo.phoneNumber}</h1>
      <h1>{name.generalInfo.email}</h1>
      <h1>{name.generalInfo.address}</h1>
      <h1>{name.generalInfo.aboutMe}</h1>
      <h1>{name.workInfo.work1.company}</h1>
      <h1>{name.workInfo.work1.position}</h1>
      <h1>{name.workInfo.work1.location}</h1>
      <h1>{name.workInfo.work1.achievements}</h1>
      <h1>{name.workInfo.work1.startDate}</h1>
      <h1>{name.workInfo.work1.endDate}</h1>
      {/* 
      <h1>{name.workInfo.work2.company}</h1>
      <h1>{name.workInfo.work2.position}</h1>
      <h1>{name.workInfo.work2.location}</h1>
      <h1>{name.workInfo.work2.achievements}</h1>
      <h1>{name.workInfo.work2.startDate}</h1>
      <h1>{name.workInfo.work2.endDate}</h1> */}
    </div>
  );
}

export default CvDoc;
