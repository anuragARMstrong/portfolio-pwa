import React from 'react';

export default function Education() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Education</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="education-experience">
              <small className="date">2014-2018</small>
              <h3 className="h5 date-title">Bachelor of Technology (CSE)</h3>
              <p>Maharshi Dayanand University, Rohtak (HR)</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="education-experience">
              <small className="date">2012-2014</small>
              <h3 className="h5 date-title">10th+2</h3>
              <p>CBSE Board</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="education-experience">
              <small className="date">2011-2012</small>
              <h3 className="h5 date-title">10th</h3>
              <p>CBSE Board</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
