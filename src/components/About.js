import React from 'react';

export default function About() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>About me</h2>
        <div className="row">
          <div className="col-md-4">
            <p>
              <img src={process.env.PUBLIC_URL + '/images/img-09.jpg'} className="img-responsive" alt="profile" />
            </p>
          </div>
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              {' '}
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
