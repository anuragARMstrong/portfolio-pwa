import React from 'react';

export default function Social() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Social Network</h2>
        <div className="row">
          <div className="col-md-3">
            <p className="social-buttons">
              <a href="https://twitter.com/" title="">
                <span className="social-round-icon fa-icon">
                  <i className="fa fa-twitter"></i>
                </span>
                @StechAnurag
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <p className="social-buttons">
              <a href="https://www.linkedin.com/in/stechanurag" title="">
                <span className="social-round-icon fa-icon">
                  <i className="fa fa-linkedin"></i>
                </span>
                Anurag Kumar
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <p className="social-buttons">
              <a href="https://dribbble.com/anuragARMstrong" title="">
                <span className="social-round-icon fa-icon">
                  <i className="fa fa-dribbble"></i>
                </span>
                AnuragARMstrong
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
