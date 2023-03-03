import React from "react";

function Professional({ name }) {
  let result = [];
  function renderWorkInfoCv() {
    const allWork = ["work1", "work2", "work3", "work4", "work5"];
    allWork.forEach((work) => {
      if (name.workInfo[work]) {
        result.push(
          <div
            className="cvdoc--workInfo_main"
            key={Math.floor(Math.random() * 9999)}
          >
            <div className="cvdoc--work_info_main">
              <div className="cvdoc--work_info_header">
                <div>
                  <h3>{name.workInfo[work].startDate}</h3>
                </div>
                -
                <div>
                  <h3>{name.workInfo[work].endDate}</h3>
                </div>
              </div>
              <div className="cvdoc--work_info_body">
                <div>
                  <h4>{name.workInfo[work].position}</h4>
                </div>
                <div className="work_info_title">
                  <h4>
                    {name.workInfo[work].company} |{" "}
                    {name.workInfo[work].location}
                  </h4>
                </div>
                <div>
                  <p>{name.workInfo[work].description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
    return result;
  }

  return <div>{renderWorkInfoCv()}</div>;
}

export default Professional;
